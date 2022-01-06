import * as anchor from "@project-serum/anchor";
import idl from "@client/idl/metablog.json";
import metablog_keypair from "../../../../target/deploy/metablog-keypair.json";

export default class AnchorClient {
  constructor({ programId, config, keypair }) {
    this.program = programId || getDevProgramId();
    this.config = config || solConfig.development.config;
    this.connection = new anchor.web3.Connection(
      this.config.httpUri,
      "confirmed"
    );
    console.log("Connected to", this.config.httpUri);

    const wallet =
      window["solana"]?.isConnected && window["solana"]?.isPhantom
        ? new PhantomWallet()
        : keypair
        ? new (anchor as any).Wallet(keypair)
        : new (anchor as any).Wallet(anchor.web3.Keypair.generate());
    this.provider = new anchor.Provider(this.connection, wallet, opts);
    this.program = new anchor.Program(
      <anchor.Idl>idl,
      this.programId,
      this.provider
    );
  }

  program;
  config;
  connection;
  provider;
}

function getDevProgramId() {
  const programKeypair = anchor.web3.Keypair.fromSecretKey(
    new Uint8Array(metablog_keypair)
  );
  return new anchor.web3.PublicKey(programKeypair.publicKey);
}
