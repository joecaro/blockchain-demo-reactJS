import React from "react";
import DistributedBlockchain from "../components/DistributedBlockchain";
import { Main } from "../components/styles/Main";

export default function DistributedChain() {
  return (
    <>
      <Main>
        <h1>Distributed Blockchain</h1>
        <hr />
        <p>
          Decentralization is a core principal of blockchain technology. Or in
          other words, the distribution of of this blockchain, or ledger of
          transactions across a number of machines. These machines work as
          nodes, that communicate with each other, to mine new blocks, verify
          data, and store the blockchain so it is immutable, transparent, and
          requires no central authority.
        </p>
        <img
          style={{ width: "500px", height: "300px" }}
          src='https://res.cloudinary.com/joecarothers/image/upload/v1650997071/misc/centralizedvsdistributed_ivjm93.jpg'
          alt='Centralized vs Decentralized Ledger'></img>
        <hr />
      </Main>
      <DistributedBlockchain />
    </>
  );
}
