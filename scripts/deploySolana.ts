import fs from "fs";
import path from "path";

import * as dotenv from "dotenv";
import { spawn, spawnSync } from "child_process";
import { Keypair, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

dotenv.config();

function readKeyFile(keypair: string): Keypair {
  const file: Buffer = fs.readFileSync(keypair);
  const parsed: [number] = JSON.parse(file.toString());
  const data = new Uint8Array(parsed);
  return Keypair.fromSecretKey(data);
}

function saveOutputIDL(): void {
  fs.copyFile(
    `target/idl/${process.env.PROJECT_NAME}.json`,
    `app/src/client/idl/${process.env.PROJECT_NAME}.json`,
    (error: NodeJS.ErrnoException) => {
      if (error) throw error;
    }
  );
}

async function runDeployProcedure() {
  const programAuthorityJSON = "../scripts/programAuthorityKey.json";
  const programAuthorityFile = path.resolve(__dirname, programAuthorityJSON);

  const programKeyJSON = `../target/deploy/${process.env.PROJECT_NAME}-keypair.json`;
  const programKeyFile = path.resolve(__dirname, programKeyJSON);
  const program = readKeyFile(programKeyFile);
  const programId = program.publicKey.toString();

  let method = ["deploy"];

  if (fs.existsSync(programAuthorityFile)) {
    spawnSync(
      "anchor",
      [
        "upgrade",
        `target/deploy/${process.env.PROJECT_NAME}.so`,
        "--program-id",
        programId,
      ],
      { stdio: "inherit" }
    );

    method = [
      "upgrade",
      `target/deploy/${process.env.PROJECT_NAME}.so`,
      "--program-id",
      programId,
    ];
  } else {
    const build = spawn("anchor", ["build"], { stdio: "inherit" });
    build.on("error", (error) => {
      throw error;
    });

    const connection = new Connection(process.env.SOLANA_CLUSTER, "confirmed");
    const programAuthorityKeypair = new Keypair();
    const signature = await connection.requestAirdrop(
      programAuthorityKeypair.publicKey,
      LAMPORTS_PER_SOL * 2 // 2 bln lamports or 2 SOL
    );
    await connection.confirmTransaction(signature);

    await new Promise<void>((resolve, _) => {
      setTimeout(async () => {
        const signature2 = await connection.requestAirdrop(
          programAuthorityKeypair.publicKey,
          LAMPORTS_PER_SOL * 2 // 2 bln lamports or 2 SOL
        );
        await connection.confirmTransaction(signature2);
        resolve();
      }, 10000);
    });

    fs.writeFileSync(
      programAuthorityFile,
      `[${Buffer.from(programAuthorityKeypair.secretKey.toString())}]`
    );
  }

  // Final deployment call
  const deploy = spawn(
    "anchor",
    [
      ...method,
      "--provider.cluster",
      "Devnet",
      "--provider.wallet",
      programAuthorityFile,
    ],
    {
      stdio: "inherit",
    }
  );
  deploy.on("error", (error) => {
    throw error;
  });
}

(async () => {
  try {
    await runDeployProcedure();
    saveOutputIDL();
  } catch (error) {
    console.error(`Found ${error}`);
  }
})();
