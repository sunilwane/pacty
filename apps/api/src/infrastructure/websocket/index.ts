import { publish } from "../redis";

export type RealtimeEvent = {
  type: string;
  payload: unknown;
};

export async function broadcastPredictionUpdate(predictionId: string, data: unknown) {
  await publish(`prediction:${predictionId}`, { type: "prediction.updated", payload: data });
}

export async function broadcastBetPlaced(predictionId: string, data: unknown) {
  await publish(`prediction:${predictionId}`, { type: "bet.placed", payload: data });
}
