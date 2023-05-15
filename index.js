const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
app.use(cors());
const port = process.env.PORT || 3000;
const apiData = require("./data.json");
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/service", (req, res) => {
    res.send(apiData);
});
app.listen(port, () => {
    console.log("hello I am live again");

});