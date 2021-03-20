const express = require("express");
const api = require("./server/api.js");
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

api.routes(app);

console.log(`I've started!!`);

const PORT = process.env.PORT || 8080;
app.listen(PORT);
