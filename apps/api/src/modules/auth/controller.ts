import { Elysia } from "elysia";
import { loginSchema, registerSchema } from "@pactly/validation";

export const authModule = new Elysia({ prefix: "/auth", tags: ["Auth"] })
  .post("/register", async ({ body }) => {
    const input = registerSchema.parse(body);
    return { success: true, data: { message: "Registration endpoint — implement service layer", input } };
  })
  .post("/login", async ({ body }) => {
    const input = loginSchema.parse(body);
    return { success: true, data: { message: "Login endpoint — implement service layer", input } };
  })
  .post("/logout", () => ({ success: true }));
