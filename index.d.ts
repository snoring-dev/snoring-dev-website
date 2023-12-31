import { z } from "zod";

const envVariables = z.object({
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GOOGLE_REFRESH_TOKEN: z.string(),
  BASE_URL: z.string(),
  BLESS_API_KEY: z.string(),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
