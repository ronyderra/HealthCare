const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/log", async (req, res) => {
    console.log(req.body)
    res.status(201).send('Congrads, it worked');
});

app.listen(5000, () => {
    console.log("Listening on 5000");
});