import React from "react";
import BlockchainBlock from "./BlockchainBlock";
import SingeBlock from "./SingeBlock";
import Hash from "./Hash";

export default function index({
  type,
  nonceChange,
  dataChange,
  blockchain,
  chain,
  setChain,
  block,
}) {
  return (
    <>
      {type === "single" && <SingeBlock />}
      {type === "blockchain" && (
        <BlockchainBlock
          nonceChange={nonceChange}
          dataChange={dataChange}
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
