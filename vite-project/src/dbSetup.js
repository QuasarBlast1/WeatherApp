// CREATE TABLE weather( id SERIAL PRIMARY KEY, input (Text), dateTime(timestamp), api (JSON));
import { Pool, Client } from 'pg'

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
// ('CREATE TABLE weather( id SERIAL PRIMARY KEY, input (Text), dateTime(timestamp), api (JSON))')
async function getRows() {
    console.log("Retrieving rows")
    await client.query("SELECT * FROM *")
}

async function createRow() {
    console.log("Inserting row")
    await client.query(`INSERT INTO (input, dateTime, api) VALUES (${input}, ${dateTime}, ${api}) RETURNING *`)
}

// const getDatabase = async () => {
//     return await new Promise(function (resolve, reject) {
//         // Try to select from the database
//         pool.query("SELECT * FROM *", (error, results) => {
//             if(error){
//                 reject(error);
//             }
//             if(results && results.row) {
//                 resolve(results.row);
//             }
//             else {
//                 reject(new Error("No results found"));
//             }
//         });
//     })
// }



// async function createDatabase() {

//     await client.connect()

//     //Check to see if database exists
//     const dbQuery = await client.query(`SELECT FROM pg_database WHERE datname = ${DB_NAME}`)
//     if(dbQuery.rows.length == 0) {
//         // database does not exist, create one
//         await client.query(`CREATE DATABASE ${DB_NAME}`)
//     }


//     try {
//         await client.query(`SELECT 'CREATE DATABASE ${DB_NAME}'
//                             WHERE NOT EXISTS (SELECT FROM pg_database
//                             WHERE datname = '${DB_NAME}')`)

//         // or simply create
//         //await client.query(`CREATE DATABASE ${DB_NAME};`);
//     } catch (_err) {
//         // Database already exists. Check before.
//         // if it exists
        
//     }

//     await client.end()
// }