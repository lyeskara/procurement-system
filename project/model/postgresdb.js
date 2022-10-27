const {Client} = require('pg');

const pgclient = new Client({
    host:'db.lytdecmrcglgdghkfpft.supabase.co',
    user: 'postgres',
    port: 5432,
    password: 'R5nVN9i8t!MUXvi',
    database: 'postgres' 
})

pgclient.connect();

pgclient.query(`Select * from users`, (err,res)=>{
    if(!err){
        console.log(res.rows);

    }else {
        console.log(err.message);
    }
    pgclient.end();
})

