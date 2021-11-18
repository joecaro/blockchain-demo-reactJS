import React from "react";
import BlockchainComponent from "../components/Blockchain";

export default function Blockchain() {
  return (
    <>
      <h1>Blockchain</h1>
      <hr />
      <p>
        To recap what has been covered so far, a <strong>blockchain</strong> is
        made up of <strong>blocks</strong> that store some data including the
        transactions contained within that block. These blocks are added to the
        chain chronologically to maintain an accurate ledger of transactions
        across time.
      </p>
      <p>
        In order to <strong>mine</strong> a block, verify it, and add it to the
        chain, we must do some "work" by generating <strong>hashes</strong>{" "}
        using the data in the block and a <strong>nonce</strong> we change,
        until the resulting hash fits some requirements set by the blockchain.
        The amount of hashes statistically generated to solve and mine one block
        is known as the <strong>difficulty</strong>. We can change this
        difficulty to increase or decrease the time spent mining each block.
        This helps us validate the integrity of the blockchain and{" "}
        <strong>disincentivizes</strong> attacks by making the cost (energy and
        time spent mining) greater than any reward gained.
      </p>
      <h2>Adding Blocks to the Chain</h2>
      <p>
        Now we know the basic principles of mining. But how do we go from Sally
        sending some coin to Rob, to that transaction being recorded on a block
        on the blockchain. A basic description is Rob would create this
        transaction and broadcast it so miners would add it to the next block to
        be mined. Then whenever the next block is mined, his transaction will be
        recorded and take effect.
      </p>
      <p>
        To explain this further, we'll dive into a CORE principal of Crypto.
        That is <strong>Decentralization</strong>. Or in other words, the
        distribution of of this blockchain, or ledger of transactions across a
        number of machines. These machines we'll call <strong>nodes</strong>{" "}
        help to distribute the data, mine blocks, and verify the integrity of
        the transactions.
      </p>
      <p>
        There are a few different types of nodes, but for now we can think of
        nodes as any machine that has opted in to be a part of the blockchain
        network. You might make your own computer a node on a network. Whenever
        a user creates a transaction, they will broadcast it to be added to next
        mined block. Once it has been validated and added to the pending block,
        nodes that are set up to mine blocks will work to compute the hash. Once
        this has been solved, the resulting block will be broadcasted and
        validated throughout the network, and eventually added as a permanent
        block to the blockchain.
      </p>
      <img
        style={{ width: "500px", height: "300px" }}
        src='/miners.png'
        alt='Mining Diagram'></img>
      <h2>How Blockchains Avoid Tampering</h2>
      <hr />
      <BlockchainComponent />
    </>
  );
}
