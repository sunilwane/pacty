import { prisma } from "@pactly/database";
import { publish } from "../jobs/publisher";

export interface BetPlacedPayload {
  predictionId: bigint;
  bettor: string;
  option: boolean;
  amount: bigint;
  txHash: string;
  blockNumber: bigint;
}

export async function handleBetPlaced(payload: BetPlacedPayload) {
  const existing = await prisma.transaction.findUnique({
    where: { txHash: payload.txHash },
  });

  if (existing) return;

  await prisma.transaction.create({
    data: {
      txHash: payload.txHash,
      blockNumber: payload.blockNumber,
      eventName: "BetPlaced",
      payload: {
        predictionId: payload.predictionId.toString(),
        bettor: payload.bettor,
        option: payload.option,
        amount: payload.amount.toString(),
      },
      processed: true,
    },
  });

  await publish("bet.placed", {
    contractPredictionId: payload.predictionId.toString(),
    bettor: payload.bettor,
    option: payload.option,
    amount: payload.amount.toString(),
  });
}
