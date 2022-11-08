const express = require("express");
const pgclient = require("../model/postgresdb");


function Login(email, password, callback){
    pgclient.query('SELECT * FROM users where email=\'' + email + '\'' + ' and password = \''+ password + '\'' ).then((res) => {
        const n_rows = res.rows.length
        const data = res.rows;
        if(n_rows == 0){
            console.log('No users were found.')
            callback(data)
        }else {

            console.log('User found.')
            console.log(res.rows)

            // console.log(data)
            // data.forEach(row => {
            //     console.log(` Name: ${row.user_name} , Email: ${row.email}, Password: ${row.password}, supervisor: ${row.supervisor}`);
            // })
            callback(data)
        }
    }).finally(() => {
        //pgclient.end()
    });

}

module.exports = {Login};








