const { MongoClient } = require('mongodb');
// import express from "express";
const express = require("express")
// import http from "http";
const http = require("http");

const app = express();

async function main() {
  const uri = "mongodb://127.0.0.1:27017"
  let server = http.createServer(app);
  const client = new MongoClient(uri);
  const PORT = 3060;
  try {
    const connected = await client.connect();
    if (connected) {
      server.listen(PORT, "0.0.0.0", () => {
        console.log(`Server is running on port ${PORT}`);
    });
      console.log("the client is connected");
    }
  }
  catch (e) {
    console.log("error connecting the databases");
  }
}
main()
