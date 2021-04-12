
const sha256 = require('crypto-js/sha256');

class Block {
    constructor (index,timestamp, data, previousHash ='') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.createHash();
    }
    //getPreviousHash

    createHash() {
        //getNewHash
        return sha256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }//end createHash
}//end Block

export default class Test {

  constructor () {
    console.log("New Blockchain")
    this.chain = [this.createGenesisBlock()];
}
//create genesis block
  createGenesisBlock () {
    const time = new Date().getTime();
    return new Block(0, time ,'Genesis Block' , '0' );
  }//end createGenesisBlock

      //get last block
      getLatestBlock() {
        //console.log("getLatestBlock: ", this.chain[this.chain.length-1] );
        return this.chain[this.chain.length - 1];
    }
    // create new block
    addBlock(newBlock) {
        //console.log("newBlock: ", this.getLatestBlock().hash);
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.createHash();
        this.chain.push(newBlock);
    }
    // validate block
    validate() {
        for (let i=1 ; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];
            
            //console.log("validate = currentBlock: ", this.chain[i] );
            if ( currentBlock.hash !== currentBlock.createHash()) {
                return false;
            }//end iffy

            if (currentBlock.previousHash !== previousBlock.hash ) {
                return false;
            }

        }//end for

        // if we reach here, the chain is valid
        return true;
    }//end validate
    
    getData () {
      const timestamp =  new Date().getTime();

    this.addBlock(new Block (1,timestamp, {amount: 4}));
    this.addBlock(new Block (2,timestamp, {amount: 10}));
        
        const data = [
            {
              "id": "Genesis"
            },
            {
              "id": "Block One"
            }
          ]
        return this;
    }
} //end Blockchaub Class