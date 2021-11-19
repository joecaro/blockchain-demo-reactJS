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
  chainNum,
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
      {type === "distributed" && (
        <BlockchainBlock
          nonceChange={nonceChange}
          dataChange={dataChange}
          blockchain={blockchain}
          chain={chain}
          setChain={setChain}
          block={block}
          chainNum={chainNum}
        />
      )}
      {type === "hash" && <Hash />}
    </>
  );
}
