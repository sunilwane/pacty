import { Elysia } from "elysia";

export const groupsModule = new Elysia({ prefix: "/groups", tags: ["Groups"] })
  .get("/", () => ({ success: true, data: [] }))
  .post("/", () => ({ success: true, data: { message: "Create group — implement service layer" } }))
  .get("/:id", ({ params: { id } }) => ({ success: true, data: { id } }));
