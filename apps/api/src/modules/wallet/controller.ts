import { Elysia } from "elysia";

export const walletModule = new Elysia({ prefix: "/wallet", tags: ["Wallet"] })
  .get("/", () => ({ success: true, data: [] }))
  .post("/link", () => ({ success: true, data: { message: "Link wallet — implement service layer" } }));
