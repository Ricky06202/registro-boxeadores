import 'dotenv/config'
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import { DATABASE_URL } from '../../../config'

// Create the connection
// export const connection = await mysql.createConnection(DATABASE_URL!)
// // Create the drizzle database instance
// export const db = drizzle(connection)

export const db = drizzle(DATABASE_URL!)