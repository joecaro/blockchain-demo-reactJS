import React from "react";
import { Link } from "react-router-dom";
import Block from "../components/Block/";

export default function BlockPage() {
  return (
    <>
      <h1>Block</h1>
      <hr />
      <p>
        A Block is the smallest unit of a Blockchain. Each block stores
        information about the block like the <strong> timestamp</strong>, a
        reference to the <strong>previous block</strong>, and importantly,{" "}
        <strong>data</strong> to be saved with the block among other things.
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
      <p>
        The hash of a Block uses the same Crypotgraphic Hash Function principals
        discussed on the <Link to='/hash'>Hash</Link> Page. The way that a
        blockchain will use a hash function to create a unique signature for a
        block, is to require the resulting hash to fit some requirements before
        being an acceptable hash. For example, a hash may need to start with
        four zeros. How do we accomplish creating this hash? That is the essence
        of Crypto Mining!
      </p>
      <h2>Crypto Mining</h2>
      <p>
        As discussed above, each block in a chain requires a unique signature
        (Hash) that fits some requirements. These requirements, like starting
        with four zeros is what affects the difficulty of the problem, which
        you'll see why in just a moment.
      </p>
      <p>
        First, we'll look at how we go about changing the hash result. You saw
        in the previous page that when we change the input of a hash function we
        will get a new and very different output. So we can change the input
        data from a block to generate hashes until it fits the requirements.
        However, when a block is ready to be mined, the block contains some
        static information including the timestamp and data which is often some
        transactions. We DO NOT want this data to be tampered with, so we add a
        new number to the block that we continue to change until the resulting
        hash fits our requirements. This number is called a{" "}
        <strong>Nonce</strong>.
      </p>
      <p>
        Nonce stands for Number Used Once. This is used throughout Crypotgraphic
        use cases, but in the case of Hashing we'll use it to change the input
        to our crypotgraphic hash function so our result will fit some arbitray
        conditions.
      </p>
      <p>
        The process of looping through and testing a new Nonce is essentially
        what mining is. We can change the requirments to change our difficulty.
        In our example, finding a hash starting with four zeros may only take a
        few seconds. We may want to increase the "Difficulty" by making the
        requirements harder to find increasing the amount of hashes
        (statistically) that must be generated to find this answer. Later on
        you'll see that this "hard" problem gives us a way of validating blocks,
        because as a chain grows, tampering with blocks requires more and more
        work to generate the hashes since each block uses the previous blocks
        unique has within its own hashing function. You'd have to regenerate
        hashes for every block after yours which in some cases could takes
        hours/days which can't keep up with the blocks being added to the valid
        chain.
      </p>
      <p>
        However this is only one version of mining and it all coallesces into a
        way to verify that a block is credible and untampered. We'll dive into
        these various "Consensus Mechanisms" later on.
      </p>

      <hr />
      <Block type='single' />
    </>
  );
}
