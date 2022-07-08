//const express = require('express')
import express from 'express';
import configViewEngine from './configs/ViewEngine';
const app = express();
const port = 3000
configViewEngine(app);
//Hàm gọi Home page
app.get('/', (req, res) => {
        res.render('index.ejs')
    })
    //Hàm gọi trang login
app.get('/login', (req, res) => {
    res.render('forms/Login.ejs')
})
app.get('/about', (req, res) => {
    res.send(`Gọi trang con!`)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})