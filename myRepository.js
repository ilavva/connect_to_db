const mssql = require('mssql');
require('dotenv').config();

const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    server: process.env.DB_HOST, //Server to connect to. You can use 'localhost\instance' to connect to named instance.
    port: parseInt(process.env.DB_PORT), //Port to connect to (default: 1433). Don't set when connecting to named instance.
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure use true
        trustServerCertificate: false // use true for local dev / self-signed certs
    }
}
const appPool = new mssql.ConnectionPool(sqlConfig)

const getLangs = async () => {
    return new Promise(async (resolve, reject) => {
        console.log(" getLangs ");
        // resolve(" test getLangs ");
        try {
            let myConnectionPoolToDB = await appPool.connect()
            try {
                let results = await myConnectionPoolToDB.query(`select * from lang`)//where id = ? OR id = ?`, (theId, theId + 2))
                console.log(results);
                resolve(results);
            }
            catch (err) {
                console.log("there was an error while sending query to DB ", err);
                reject(err);
            }
        }
        catch (err) {
            console.error('ERROR CONNECTION TO DB: ', err);
            reject('ERROR CONNECTION TO DB: ', err);
        }
    })
}
module.exports.getLangs = getLangs;


