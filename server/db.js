import pg from 'pg'
const { Pool } = pg;

const pool = new Pool({
    user: "yujin",
    password: "dbwls",
    host: "localhost",
    port: 5432,
    database: "dev"

})

export default pool