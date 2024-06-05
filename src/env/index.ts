import 'dotenv';

// run in terminal npm install dotnenv

import { z } from 'zod';


const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
    DATABASE_URL: z.string(),
    PORT: z.coerce.number().default(4000)
}) 



export const env = envSchema.parse(process.env)
