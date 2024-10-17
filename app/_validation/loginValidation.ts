import { z } from 'zod';

// Zod schema for Login validation
export const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
