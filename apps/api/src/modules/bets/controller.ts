import { Elysia } from "elysia";
import { placeBetSchema } from "@pactly/validation";

export const betsModule = new Elysia({ prefix: "/bets", tags: ["Bets"] })
  .get("/prediction/:predictionId", ({ params: { predictionId } }) => ({
    success: true,
    data: { predictionId, bets: [] },
  }))
  .post("/record", async ({ body }) => {
    const input = placeBetSchema.parse(body);
    return {
      success: true,
      data: {
        message: "Bet recorded off-chain after on-chain confirmation",
        input,
      },
    };
  });
