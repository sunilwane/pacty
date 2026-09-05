import { Elysia } from "elysia";
import { createPredictionSchema } from "@pactly/validation";

export const predictionsModule = new Elysia({ prefix: "/predictions", tags: ["Predictions"] })
  .get("/", () => ({ success: true, data: [] }))
  .post("/", async ({ body }) => {
    const input = createPredictionSchema.parse(body);
    return { success: true, data: { message: "Create prediction — implement service layer", input } };
  })
  .get("/:id", ({ params: { id } }) => ({ success: true, data: { id } }))
  .post("/:id/resolve", ({ params: { id } }) => ({
    success: true,
    data: { message: "Resolve prediction — implement service + contract call", id },
  }));
