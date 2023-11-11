// CREATE TABLE weather( id SERIAL PRIMARY KEY, input (Text), dateTime(timestamp), api (JSON));
import { Pool, Client } from 'pg'

export default function dbConnection(){

    const dbUser = 'postgres'
    const dbHost = 'localhost'
    const dbName = 'myPostgresDb'
    const DB_PASS = 'password'

    const pool = new Pool({
        user: dbUser,
        host: dbHost,     
        password: DB_PASS,
        port: 5433,
    });

    // Need to do the following functions:
    async function createConnection(){
        const client = await pool.connect()
        console.log(await pool.query('SELECT NOW()'))
        
        try{
            await pool.end()
            await client.query('BEGIN')
            const queryText = `CREATE DATABASE ${dbName}`
            const res = await client.query(queryText)

            await client.query('COMMIT')
        } catch (e){
            await client.query('ROLLBACK')
            throw e
        } finally {
            client.release()
        }
    }
    // ('CREATE TABLE weather( id SERIAL PRIMARY KEY, input (Text), dateTime(timestamp), api (JSON))')
    // async function getRows() {
    //     console.log("Retrieving rows")
    //     await client.query("SELECT * FROM *")
    // }

    // async function createRow() {
    //     console.log("Inserting row")
    //     await client.query(`INSERT INTO (input, dateTime, api) VALUES (${input}, ${dateTime}, ${api}) RETURNING *`)
    // }

    return(
        createDB()
    );
}