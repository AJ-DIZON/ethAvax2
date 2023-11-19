// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract backend {
    
    string public hello;
    string public say;

    constructor(string memory _say){
        hello = "Hello User";
        say = _say;
    }

    function getHello() public view returns (string memory) {
        return hello;
    }

    function setSay(string memory _say) public{
        console.log("Say now says: %s", _say);
        say = _say;
    }

    function getSay() public view returns (string memory) {
        return say;
    }

}
