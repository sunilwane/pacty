// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Script} from "forge-std/Script.sol";
import {PactlyPredictionMarket} from "../src/PactlyPredictionMarket.sol";

contract Deploy is Script {
    function run() external {
        vm.startBroadcast();
        new PactlyPredictionMarket();
        vm.stopBroadcast();
    }
}
