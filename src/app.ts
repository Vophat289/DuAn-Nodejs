// const express = require ('express');
import express from 'express';

const app = express ();
const PORT = 8080;


app.get("/", (req, res) => {
    res.send("Hello World!  ") 
})

app.get("/subin", (req, res) => {
    res.send("Hello Bin!") 
})


app.listen(PORT, () => {
    console.log(`Server đang chạy trên port: ${PORT}`)
})