const { expect } = require("chai");
//const hre = require("hardhat");

describe("Minting the token and returning it", function () {
  it.skip("contract should be able to mint", async function () {
    const metadata = "https://bafkreihxf3jhym32l2kerjwnqo3pzppowq6bg3qedvqvj72np4nyxyf67y.ipfs.dweb.link/"; 
    const factory = await hre.ethers.getContractFactory("ArboreumNFTFactory"); 
    const nftContract = await factory.deploy();
    const transaction = await nftContract.createToken(metadata); 
    const tx = await transaction.wait(); 
    const event = tx.events[0];
    const value = event.args[2];
    const tokenId = value.toNumber();
    const tokenURI = await nftContract.tokenURI(tokenId);
    expect(tokenURI).to.be.equal(metadata);
  });
});
