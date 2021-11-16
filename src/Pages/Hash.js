import React from "react";
import Block from "../components/Block";

export default function Hash() {
  return (
    <>
      <h1>Hash</h1>
      <hr />
      <p>
        A core principal of Blockchains is Cryptographic Hashing. Using Hash
        Functions, we can take some data and create a unique signiature for what
        we will later call blocks.
      </p>
      <p>
        <strong>Cryptographic Hash Function:</strong> A cryptographic hash
        function (CHF) is a mathematical algorithm that maps data of arbitrary
        size (often called the "message") to a bit array of a fixed size (the
        "hash value", "hash", or "message digest").
      </p>
      <p>
        This means that given some arbitrary data, we can create a unique code
        by passing that data through a hashing function. Hashing Functions have
        some unique and important properties:
      </p>

      <ul>
        <li>
          <h3>Speed</h3>
          <p>
            Hashing Functions should be computationally effecient. Ideally these
            functions should produce a result in under a second.
          </p>
        </li>
        <li>
          <h3>Avalanche Effect</h3>
          <p>
            A small change in the input should produce a large chang in the
            output.
          </p>
        </li>
        <li>
          <h3>Deterministic</h3>
          <p>
            Every time you produce a hash for the same input, you should get the
            same output.
          </p>
        </li>
        <li>
          <h3>One-Way Function</h3>
          <p>It should be as hard as possible to reverse the hash.</p>
        </li>
        <li>
          <h3>Collision Resistant</h3>
          <p>Two inputs should not be able to produce the same output.</p>
        </li>
      </ul>
      <hr />
      <Block type='hash' />
    </>
  );
}
