import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Blockchain } from "../lib/blockchain";
import AddBlock from "./AddBlock";
import Block from "./Block";

export default function BlockchainComponent() {
  const [blockchain, setBlockChain] = useState(new Blockchain());
  const [chain, setChain] = useState(blockchain.chain);

  const handleAddBlock = (data) => {
    const newChain = [...blockchain.addNewBlock(data)];
    setChain(newChain);
  };

  const handleDataChange = (block, data) => {
    let newChain = [...blockchain.updateBlockData(block.index, data)];
    setChain(newChain);
  };

  const handleNonceChange = (block, data) => {
    let newChain = [...blockchain.updateBlockNonce(block.index, data)];
    setChain(newChain);
  };

  return (
    <BlockchainContainer>
      {chain.map((block) => (
        <Block
          key={block.index}
          type='blockchain'
          nonceChange={handleNonceChange}
          dataChange={handleDataChange}
          setChain={setChain}
          blockchain={blockchain}
          block={block}
        />
      ))}
      <AddBlock addBlock={handleAddBlock} />
    </BlockchainContainer>
  );
}

const BlockchainContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: scroll;
`;
