import { io } from "socket.io-client";

let button = document.getElementById("like_button");
const socket = io("http:localhost:5000", {
  secure: true,
  reconnection: true,
  rejectUnauthorized: false,
});

socket.on("connect", () => {
  console.log(socket.id);
});

socket.on("recieve-likes", (msg) => {
  console.log(msg);
});

button.addEventListener("click", () => {
  socket.emit("like", { name: "username.value" }, { name: "product.value" });
});
