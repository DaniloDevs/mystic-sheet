import { z } from "zod";

const envSchema = z.object({
	DATABASE_URL: z.string(),
	NEXT_PUBLIC_APP_URL: z.string().default("http://localhost:3000"),
	AUTH_SECRET: z.string(),
	AUTH_GOOGLE_ID: z.string(),
	AUTH_GOOGLE_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);
