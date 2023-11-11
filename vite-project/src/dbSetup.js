// CREATE TABLE weather( id SERIAL PRIMARY KEY, input (Text), dateTime(timestamp), api (JSON));
import { Pool, Client } from 'pg'

export default function dbSetup(){

    const dbUser = 'posgres'
    const dbName = 'some-postgres'
    const dbHost = 'localhost'
    const DB_PASS = 'mysecretpassword'

    const client = new Client({
        user: dbUser,
        host: dbHost,     
        password: DB_PASS,
        port: 5432,
    });

    // Need to do the following functions:
    async function createDB(){
        console.log("Creating connection ...")
        await client.connect();
        try{
            console.log("Creating database ...")
            await client.query(`CREATE DATABASE ${dbName};`)
        } catch (err) {
            console.error(err);
        } finally {
            console.log("Closing connection ...")
            await client.end()
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