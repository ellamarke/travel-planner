const express = require("express");
const api = require("./server/api.js");
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

api.routes(app);

console.log(`I've started!!`);

app.listen(8080);
