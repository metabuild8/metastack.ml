import type { PublicKey, Transaction } from "@solana/web3.js";

export class PhantomWallet {
  constructor() {
    if (!window["solana"]?.isConnected)
      throw new Error("Connect to Phantom first");
    // return this.publicKey;
  }

  async signTransaction(tx: Transaction): Promise<Transaction> {
    const signedTransaction = await window["solana"]?.signTransaction(tx);
    return signedTransaction;
  }

  async signAllTransactions(txs: Transaction[]): Promise<Transaction[]> {
    const signedTransactions = await window["solana"]?.signAllTransactions(txs);
    return signedTransactions;
  }

  get publicKey(): PublicKey {
    return window["solana"]?.publicKey;
  }
}
