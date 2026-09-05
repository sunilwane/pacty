import { Elysia } from "elysia";

export const notificationsModule = new Elysia({ prefix: "/notifications", tags: ["Notifications"] })
  .get("/", () => ({ success: true, data: [] }))
  .patch("/:id/read", ({ params: { id } }) => ({ success: true, data: { id, read: true } }));
