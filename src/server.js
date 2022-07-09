//const express = require('express')
import express from 'express';
const app = express();

//sử dụng .env 
require('dotenv').config();
const port = process.env.PORT || 8080;

//cấu hình view engine
import configViewEngine from './configs/ViewEngine';
configViewEngine(app);

//cấu hình router
import initWebRouter from './router/web';
initWebRouter(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})