const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const { performance } = require('perf_hooks');
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();
const httpServer = createServer(app);

app.use(bodyParser.json());
app.use(cors());

const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ["GET", 'POST']
    }
});

io.on('connection', (socket) => {
    console.log("User connected: " + socket.id)
})

const countDown = (num) => {
    let arr = []
    const start = performance.now();
    for (let i = 1; i < num; i++) {
        arr.push(num - i)
    }
    const duration = performance.now() - start;
    console.log("duration:" + duration)
    return arr;
}

app.post("/number", async (req, res) => {
    const { content } = req.body;
    const newArr = await countDown(content)
    await axios.post("http://localhost:5000/log", { newArr });
    io.emit("calcFinished", newArr);
});

httpServer.listen(4000, () => {
    console.log("Listening on 4000");
});
