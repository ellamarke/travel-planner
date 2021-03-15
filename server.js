const express = require("express");
const api = require("./server/api.js");
const app = express();

api.routes(app);

console.log(`I've started!!`);

app.listen(8080);
