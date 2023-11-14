// CREATE TABLE weather( id SERIAL PRIMARY KEY, input (Text), dateTime(timestamp), api (JSON));
import Pool from 'pg'

export default function dbConnection(){

    const dbUser = 'postgres'
    const dbHost = 'localhost'
    const dbName = 'myPostgresDb'
    const DB_PASS = 'password'

    const pool = new Pool({
        user: dbUser,
        host: dbHost,     
        database: 'myPostgresDb',
        password: DB_PASS,
        port: 5433,
    });   

    console.log("Creating table")
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS table1 (
                id serial PRIMARY KEY, 
                firstName VARCHAR(100) NOT NULL,
                lastName VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL
            )`
   
    const result = pool.query(createTableQuery)
    pool.end();
}