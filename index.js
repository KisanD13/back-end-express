// const express = require("express");
// require("dotenv").config();

import express from "express";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.end("Heelllllllllllllllllooooooooo");
});

app.get("/login", (req, res) => {
  res.end("I'm in login page");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
