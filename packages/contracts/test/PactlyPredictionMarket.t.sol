// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test} from "forge-std/Test.sol";
import {PactlyPredictionMarket} from "../src/PactlyPredictionMarket.sol";

contract PactlyPredictionMarketTest is Test {
    PactlyPredictionMarket public market;
    address public creator = address(0x1);
    address public bettor = address(0x2);

    function setUp() public {
        market = new PactlyPredictionMarket();
        vm.deal(creator, 10 ether);
        vm.deal(bettor, 10 ether);
    }

    function test_CreatePrediction() public {
        vm.prank(creator);
        uint256 id = market.createPrediction(block.timestamp + 1 days);
        assertEq(id, 0);
    }

    function test_PlaceBet() public {
        vm.prank(creator);
        uint256 id = market.createPrediction(block.timestamp + 1 days);

        vm.prank(bettor);
        market.placeBet{value: 1 ether}(id, true);

        (,, uint256 yesPool,,,) = market.predictions(id);
        assertEq(yesPool, 1 ether);
    }
}
