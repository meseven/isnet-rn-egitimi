import io from "socket.io-client";
import { WEBSOCKET_URL } from "./constants";

let socket;

export const initiateSocket = () => {
  socket = io(WEBSOCKET_URL, {
    transports: ["websocket"],
    upgrade: false,
  });

  socket.on("connect", () => {
    console.log("connected to socket");
  });
};

export const sendMessage = (msg) => {
  if (socket) {
    console.log(socket);
    socket.emit("new-message", msg);
  }
};

export const subscribe = (topic, cb) => {
  if (!socket) return true;

  socket.on(topic, (msg) => {
    console.log(`${topic} received: `, msg);
    cb(msg);
  });
};
