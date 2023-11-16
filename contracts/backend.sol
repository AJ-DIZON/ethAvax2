// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract backend {
    
    string public hello;
    string public say;
    constructor(){
        hello = "Hello User";
        say = "Nice to meet you all";
    }

    function getHello() public view returns (string memory) {
        return hello;
    }

    function getSay() public view returns (string memory) {
        return say;
    }
}
