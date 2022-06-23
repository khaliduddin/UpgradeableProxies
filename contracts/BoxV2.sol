// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.2;

contract BoxV2 {

    uint256 public val;

    function inc() external {
        val += 1;
    }

    function initialize(uint _val) external {
        val = _val;
    }
}