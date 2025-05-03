// const express = require ('express');
import express from 'express';
import 'dotenv/config'

const app = express ();
const PORT = process.env.PORT || 8080;


app.get("/", (req, res) => {
    res.send("Hello World!  ") 
})

app.get("/subin", (req, res) => {
    res.send("Hello Bin!") 
})


app.listen(PORT, () => {
    console.log(`Server đang chạy trên port: ${PORT}`)
    console.log('env port: ', process.env.PORT);
    
})