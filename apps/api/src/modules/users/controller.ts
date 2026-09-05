import { Elysia } from "elysia";

export const usersModule = new Elysia({ prefix: "/users", tags: ["Users"] })
  .get("/me", () => ({ success: true, data: null }))
  .get("/:id", ({ params: { id } }) => ({ success: true, data: { id } }));
