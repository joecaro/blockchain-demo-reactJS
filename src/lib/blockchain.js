import Block from "./block";
import { SHA256 } from "crypto-js";

export class Blockchain {
  constructor() {
    this.chain = [this.initGenesisBlock()];
    this.difficulty = 4;
  }

  initGenesisBlock() {
    return new Block(
      "0000000000000000000000000000000000000000000000000000000000000000",
      0,
      "Initial Block in the Chain",
      "0000f727854b50bb95c054b39c1fe5c92e5ebcfa4bcb5dc279f56aa96a365e5a"
    );
  }

  calculateHash(block, testNonce) {
    return SHA256(
      testNonce + block.data + block.index + block.prevHash
    ).toString();
  }

  validateHash = (block) => {
    return (
      this.calculateHash(block, block.nonce).substring(0, 4) !==
      Array(4 + 1).join("0")
    );
  };

  updateChain(block) {
    // update hash for each block starting at this block and looping through the rest of the chain + validate new hashes
    for (let i = block.index; i < this.chain.length - 1; i++) {
      let currentBlock = this.chain[i];
      currentBlock.hash = this.calculateHash(currentBlock, currentBlock.nonce);
      currentBlock.error = this.validateHash(this.chain);
    }
  }

  latestBlock() {
    return this.chain[this.chain.length - 1];
  }

  mineBlock(block, isChain) {
    let testNonce = 0;
    while (
      this.calculateHash(block, testNonce).substring(0, this.difficulty) !==
      Array(this.difficulty + 1).join("0")
    ) {
      testNonce++;
    }
    block.nonce = testNonce;

    if (isChain) {
      this.updateChain(block);
    } else {
      block.error = this.validateHash(block);
    }
  }

  addNewBlock(data) {
    // calculate initial values for new block and instantiate it
    let prevHash = this.chain[this.chain.length - 1].hash;
    let index = this.chain.length;
    let newBlock = new Block(prevHash, index, data);
    // push block to chain
    this.chain.push(newBlock);

    this.mineBlock(this.chain[index], false);
    this.chain[index].hash = this.calculateHash(newBlock, newBlock.nonce);

    return this.chain;
  }

  updateBlockData(block, data) {
    block.data = data;
    this.updateChain(block);
    return this.chain;
  }
}
