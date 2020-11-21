import express from 'express'
import cors from 'cors'
import pool from './db.js'

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log("=========== server start port :: 3000 ===========");
})

app.post('/signup', async(req,res) => {

    try {
        // console.log(req.body);
        const username = req.body.username;
        const password = req.body.password;

        const query = await pool.query("insert into tb_user (username, password) values ($1,$2) returning *",
            [username,password]);

        res.json(query.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
});

app.post('/login',async(req,res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const query = await pool.query("select * from tb_user where username = $1",
            [username]);
        if(query.rows[0].password == password) {
            res.json(query.rows[0]);
        } else {
            res.json({
              "msg" : "fail"
            })
        }

    } catch (err) {
        console.log(err.message);
    }
})