require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSecret = process.env.COOKIESECRET || 'noSecret';


module.exports = (app) => {

    app.use(express.json());
    app.use(cookieParser(cookieSecret));
  
}