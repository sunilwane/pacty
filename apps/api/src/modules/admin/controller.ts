import { Elysia } from "elysia";

export const adminModule = new Elysia({ prefix: "/admin", tags: ["Admin"] })
  .get("/dashboard", () => ({ success: true, data: { users: 0, predictions: 0, bets: 0 } }))
  .get("/users", () => ({ success: true, data: [] }))
  .get("/predictions", () => ({ success: true, data: [] }))
  .get("/reports", () => ({ success: true, data: [] }))
  .get("/analytics", () => ({ success: true, data: {} }));
