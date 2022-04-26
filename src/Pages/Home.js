import React from "react";
import { NavLink } from "react-router-dom";
import { Main } from "../components/styles/Main";

export default function Home() {
  return (
    <>
      <Main>
        <h1>Home Page</h1>
        <hr />
        <h2>Hash</h2>
        <p>
          A core principal of Blockchains is Cryptographic Hashing. Using Hash
          Functions, we can take some data and create a unique signiature for
          each block of data in a blockchain. These hashes provide a way of
          verifying the integrity of each block, as these unique signatures are
          generated based on the data in the block and previous hashes.
        </p>
        <NavLink exact='true' to='/hash'>
          Read More on Hash Functions ->
        </NavLink>
        <h2>Block</h2>
        <p>
          A Block is the smallest unit of a Blockchain. Each block stores
          information about the block like the timestamp, a reference to the
          previous block, and importantly, data to be saved with the block among
          other things. A block will contain information like the time of
          creation, data which in terms of blockchains like Bitcoin include
          transaction records, and a reference to the block that came
          immediately before it.
        </p>
        <NavLink exact='true' to='/block'>
          Read More on Blocks ->
        </NavLink>
        <h2>Blockchain</h2>
        <p>
          A blockchain is a linked list of blocks. The way the blocks are linked
          create a system to maintain and verify the integrity of each block
          using the Hash, or unique signature. Some common blockchains use a
          proof of work consensus mechanism to allow nodes on the network to
          agree on new blocks. This means the hashes take a non-insignificant
          but feasible amount of work to calculate, and the chain with the most
          "work" put into it is most likely the valid chain.
        </p>
        <NavLink exact='true' to='/blockchain'>
          Read More on Blockchains ->
        </NavLink>
        <h2>Distributed Blockchain</h2>
        <p>
          Decentralization is a core principal of blockchain technology. Or in
          other words, the distribution of of this blockchain, or ledger of
          transactions across a number of machines. These machines work as
          nodes, that communicate with each other, to mine new blocks, verify
          data, and store the blockchain so it is immutable, transparent, and
          requires no central authority.
        </p>
        <NavLink exact='true' to='/distributed'>
          Read More on Distributed Blockchains ->
        </NavLink>
      </Main>
    </>
  );
}
