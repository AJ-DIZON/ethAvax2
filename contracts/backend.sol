// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract backend {
    
    string public hello;

    constructor(){
        hello = "Hello User";
    }

    function getHello() public view returns (string memory) {
        return hello;
    }

}
