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

  useEffect(() => {
    console.log(chain);
  }, [chain]);

  return (
    <BlockchainContainer>
      {chain.map((block) => (
        <Block
          key={block.index}
          type='blockchain'
          blockchain={blockchain}
          chain={chain}
          setChain={setChain}
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