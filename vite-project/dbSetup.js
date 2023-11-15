// CREATE TABLE weather( id SERIAL PRIMARY KEY, input (Text), dateTime(timestamp), api (JSON));
import Client from 'pg'

export default function dbConnection(){

    const dbUser = 'postgres'
    const dbHost = 'localhost'
    const dbName = 'postgresDB'
    const DB_PASS = 'password'

    const client = new Client({
        user: dbUser,
        host: dbHost,     
        database: dbName,
        password: DB_PASS,
        port: 5433,
    });   

    client.connect();

    console.log("Creating Connection")
    console.log("Creating table")
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS table1 (
            id serial PRIMARY KEY, 
            firstName VARCHAR(100) NOT NULL,
            lastName VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL
        )`

    console.log("Attempting to create table.")
    client.query(createTableQuery)
    console.log("Closing Connection")
    client.end();
}