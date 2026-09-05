import { config } from "@pactly/config";
import { publicClient, betPlacedEvent } from "./blockchain/client";
import { handleBetPlaced } from "./events/bet-placed";

async function startBlockchainListener() {
  if (!config.blockchain.contractAddress) {
    console.warn("CONTRACT_ADDRESS not set — blockchain listener idle");
    return;
  }

  console.log("Listening for BetPlaced events...");

  publicClient.watchContractEvent({
    address: config.blockchain.contractAddress as `0x${string}`,
    abi: [betPlacedEvent],
    eventName: "BetPlaced",
    onLogs: async (logs) => {
      for (const log of logs) {
        const args = "args" in log ? log.args : undefined;
        if (!args) continue;

        const { predictionId, bettor, option, amount } = args as {
          predictionId?: bigint;
          bettor?: string;
          option?: boolean;
          amount?: bigint;
        };

        if (
          predictionId === undefined ||
          !bettor ||
          option === undefined ||
          amount === undefined ||
          !log.transactionHash ||
          log.blockNumber === null
        ) {
          continue;
        }

        await handleBetPlaced({
          predictionId,
          bettor,
          option,
          amount,
          txHash: log.transactionHash,
          blockNumber: log.blockNumber,
        });
      }
    },
  });
}

async function main() {
  console.log("Pactly Worker starting...");
  await startBlockchainListener();
  console.log("Worker ready");
}

main().catch((err) => {
  console.error("Worker failed:", err);
  process.exit(1);
});
