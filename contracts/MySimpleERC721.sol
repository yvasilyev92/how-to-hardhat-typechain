// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 < 0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// ERC721 contract with simple mint function

contract MySimpleERC721 is ERC721, Ownable {

    uint public mintPrice = 0.0001 ether;
    uint public supply;
    uint public supplyLimit = 10000;

    constructor() ERC721("SimpleNfts", "SNFT") {

    }

    function mint(uint amount) external payable {
        require(msg.value >= amount * mintPrice);
        require(supply + amount <= supplyLimit);
        for(uint i = 0; i < amount; i++) {
            supply += 1;
            _mint(msg.sender, supply);
        }
    }

    function withdrawAllFunds() external onlyOwner {
        (bool os, ) = payable(owner()).call{value: address(this).balance}("");
        require(os, "Failed withdraw");
    }

}