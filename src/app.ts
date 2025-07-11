// const express = require ('express');
import express from 'express';
import 'dotenv/config';
import webRoutes from './routes/web';
import getConnection from './config/database';
import initDatabase from 'config/seed';

const app = express ();
const PORT = process.env.PORT || 8080;

//config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//config rq.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//config routes
webRoutes(app);


//config static file: images/css/js
app.use(express.static('public'))

initDatabase();

app.listen(PORT, () => {
    console.log(`Server đang chạy trên port: ${PORT}`)

});