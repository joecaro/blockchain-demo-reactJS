export class Block {
  constructor(prevHash, index, data, hash = 0) {
    this.prevHash = prevHash;
    this.index = index;
    this.nonce = 0;
    this.timeStamp = Date.now();
    this.data = data;
    this.hash = hash;
    this.error = false;
  }
}
