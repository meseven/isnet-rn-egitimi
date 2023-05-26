const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let messages = [];

app.get("/", (req, res) => {
  res.end("socket.io server");
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.emit("initial-messages", messages);

  socket.on("new-message", (msg) => {
    console.log("new message", msg);
    messages.unshift(msg);
    io.emit("new-message", msg);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
