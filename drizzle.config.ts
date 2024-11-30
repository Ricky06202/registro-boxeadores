import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'
import { DATABASE_URL } from './config'

export default defineConfig({
	out: './drizzle',
	schema: './src/modules/db/schemas',
	dialect: 'mysql',
	dbCredentials: {
		url: DATABASE_URL!,
	},
})
