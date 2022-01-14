//SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Arboreum is ERC721 {

    event ArboreumMinted();

    constructor() ERC721("Arboreum", "ARB") {
        console.log("Deploying Arboreum Contract");
    }
}
