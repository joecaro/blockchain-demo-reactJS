import React from "react";

export default function Block() {
  return (
    <>
      <h1>Block</h1>
      <hr />
      <p>
        A Block is the smallest unit of a Blockchain. Each block stores
        information about the block like the <strong> timestamp</strong>, a
        reference to the
        <strong>previous block</strong>, and importantly, <strong>data</strong>{" "}
        to be saved with the block among other things.
      </p>
      <img height='500px' src='/block.png' alt='block' />
      <p>
        In the image above, you can the block shown contains, among other
        things, the current time, a record of some or all recent transactions,
        and a reference to the block that came immediately before it. It also
        contains an answer to a difficult-to-solve mathematical puzzle - the
        answer to which becomes the unique signature for this blck to each
        block. This is called the <strong>Hash</strong>
      </p>
      <hr />
    </>
  );
}
