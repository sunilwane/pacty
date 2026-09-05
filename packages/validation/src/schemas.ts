import { z } from "zod";

export const createPredictionSchema = z.object({
  question: z.string().min(10).max(500),
  description: z.string().max(2000).optional(),
  visibility: z.enum(["PUBLIC", "PRIVATE", "GROUP"]).default("PUBLIC"),
  deadline: z.coerce.date().refine((d) => d > new Date(), {
    message: "Deadline must be in the future",
  }),
  groupId: z.string().uuid().optional(),
});

export const placeBetSchema = z.object({
  predictionId: z.string().uuid(),
  optionId: z.string().uuid(),
  amount: z.string().regex(/^\d+(\.\d+)?$/, "Invalid amount"),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const registerSchema = loginSchema.extend({
  username: z.string().min(3).max(30).regex(/^[a-zA-Z0-9_]+$/),
});

export type CreatePredictionInput = z.infer<typeof createPredictionSchema>;
export type PlaceBetInput = z.infer<typeof placeBetSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
