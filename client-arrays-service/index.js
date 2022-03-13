const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const {performance} = require('perf_hooks');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const getNumber = (num) => {
    let arr = []
    const start = performance.now();
    for (let i = 1; i < num; i++) {
        arr.push(num - i)
    }
    const duration = performance.now() - start;
    console.log("du:" + duration)
    return arr
}

app.post("/number", async (req, res) => {
    const { content } = req.body;
    const newArr = await getNumber(content)

    const logService = await axios.post("http://localhost:5000/log", {
        newArr
    });
    console.log(logService.data)
    res.status(201).send(newArr);
});

app.listen(4000, () => {
    console.log("Listening on 4000");
});
