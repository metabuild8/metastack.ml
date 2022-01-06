import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Metablog } from '../target/types/metablog';

describe('metablog', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.Metablog as Program<Metablog>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
