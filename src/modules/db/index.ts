import 'dotenv/config'
import { drizzle } from 'drizzle-orm/mysql2'
import { DATABASE_URL } from '../../../config'

export const db = drizzle(DATABASE_URL!)
