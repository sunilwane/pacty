import { createPublicClient, http, parseAbiItem } from "viem";
import { foundry } from "viem/chains";
import { config } from "@pactly/config";

export const publicClient = createPublicClient({
  chain: foundry,
  transport: http(config.blockchain.rpcUrl),
});

export const betPlacedEvent = parseAbiItem(
  "event BetPlaced(uint256 indexed predictionId, address indexed bettor, bool option, uint256 amount)"
);

export const predictionCreatedEvent = parseAbiItem(
  "event PredictionCreated(uint256 indexed predictionId, address indexed creator, uint256 deadline)"
);

export const predictionResolvedEvent = parseAbiItem(
  "event PredictionResolved(uint256 indexed predictionId, bool winningOption)"
);
