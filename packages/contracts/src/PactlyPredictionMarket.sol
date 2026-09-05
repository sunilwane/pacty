// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title PactlyPredictionMarket
/// @notice On-chain trust and settlement layer for Pactly predictions
contract PactlyPredictionMarket {
    enum Status {
        Active,
        Closed,
        Resolved,
        Cancelled
    }

    struct Prediction {
        address creator;
        uint256 deadline;
        uint256 yesPool;
        uint256 noPool;
        Status status;
        bool winningOption; // true = YES, false = NO
    }

    struct Bet {
        address bettor;
        bool option; // true = YES, false = NO
        uint256 amount;
        bool claimed;
    }

    uint256 public nextPredictionId;
    mapping(uint256 => Prediction) public predictions;
    mapping(uint256 => Bet[]) public bets;

    event PredictionCreated(uint256 indexed predictionId, address indexed creator, uint256 deadline);
    event BetPlaced(uint256 indexed predictionId, address indexed bettor, bool option, uint256 amount);
    event PredictionResolved(uint256 indexed predictionId, bool winningOption);
    event WinningsClaimed(uint256 indexed predictionId, address indexed bettor, uint256 amount);

    function createPrediction(uint256 deadline) external returns (uint256 predictionId) {
        require(deadline > block.timestamp, "Deadline must be in the future");

        predictionId = nextPredictionId++;
        predictions[predictionId] = Prediction({
            creator: msg.sender,
            deadline: deadline,
            yesPool: 0,
            noPool: 0,
            status: Status.Active,
            winningOption: false
        });

        emit PredictionCreated(predictionId, msg.sender, deadline);
    }

    function placeBet(uint256 predictionId, bool option) external payable {
        Prediction storage prediction = predictions[predictionId];
        require(prediction.status == Status.Active, "Not active");
        require(block.timestamp < prediction.deadline, "Deadline passed");
        require(msg.value > 0, "Amount required");

        if (option) {
            prediction.yesPool += msg.value;
        } else {
            prediction.noPool += msg.value;
        }

        bets[predictionId].push(Bet({ bettor: msg.sender, option: option, amount: msg.value, claimed: false }));

        emit BetPlaced(predictionId, msg.sender, option, msg.value);
    }

    function resolvePrediction(uint256 predictionId, bool winningOption) external {
        Prediction storage prediction = predictions[predictionId];
        require(msg.sender == prediction.creator, "Not creator");
        require(prediction.status == Status.Active, "Not active");
        require(block.timestamp >= prediction.deadline, "Deadline not reached");

        prediction.status = Status.Resolved;
        prediction.winningOption = winningOption;

        emit PredictionResolved(predictionId, winningOption);
    }

    function claimWinnings(uint256 predictionId) external {
        Prediction storage prediction = predictions[predictionId];
        require(prediction.status == Status.Resolved, "Not resolved");

        uint256 totalWinningPool = prediction.winningOption ? prediction.yesPool : prediction.noPool;
        uint256 totalLosingPool = prediction.winningOption ? prediction.noPool : prediction.yesPool;
        require(totalWinningPool > 0, "No winning pool");

        uint256 payout = 0;
        Bet[] storage predictionBets = bets[predictionId];

        for (uint256 i = 0; i < predictionBets.length; i++) {
            Bet storage bet = predictionBets[i];
            if (bet.bettor == msg.sender && bet.option == prediction.winningOption && !bet.claimed) {
                bet.claimed = true;
                payout += bet.amount + (bet.amount * totalLosingPool) / totalWinningPool;
            }
        }

        require(payout > 0, "Nothing to claim");
        payable(msg.sender).transfer(payout);

        emit WinningsClaimed(predictionId, msg.sender, payout);
    }
}
