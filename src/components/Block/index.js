import React from "react";
import BlockchainBlock from "./BlockchainBlock";
import SingeBlock from "./SingeBlock";
import Hash from "./Hash";

export default function index({ type, blockchain, chain, setChain, block }) {
  return (
    <>
      {type === "single" && <SingeBlock />}
      {type === "blockchain" && (
        <BlockchainBlock
          blockchain={blockchain}
          chain={chain}
          setChain={setChain}
          block={block}
        />
      )}
      {type === "hash" && <Hash />}
    </>
  );
}
