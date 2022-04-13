import pg from "pg";

const { Pool } = pg;

const dbConfig = {
    user: "postgres",
    host: "localhost",
    database: "starfighters",
    password: "123456",
    port: 5432,
};

const connection = new Pool(dbConfig);
export default connection;
