// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.2;

contract BoxV1 {
    uint public val;

    function initialize(uint _val) external {
        val = _val;
    }
}