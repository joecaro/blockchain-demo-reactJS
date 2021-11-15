import React from "react";

export default function Blockchain() {
  return (
    <>
      <h1>Blockchain</h1>
      <hr />
      <p>
        To recap what has been covered so far, a <strong>blockchain</strong> is
        made up of <strong>blocks</strong> that store some data including the
        transactions contained within that block.
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
      <h2>Current Blockchains</h2>
      <p></p>
    </>
  );
}
