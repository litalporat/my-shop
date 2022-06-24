const logger = require("../utils/logger");

module.exports = function (port) {
  const io = require("socket.io")(port, {
    cors: {
      origin: ["http://localhost:5000", "http://localhost:8080"],
    },
  });
  io.on("connection", (socket) => {
    console.log("A Client has connected!");

    socket.on("like", ( {user, product} ) => {
      socket.broadcast.emit(
        "recieve-likes",
        `${user} just liked ${product.displayName}!`
      );
    });

    socket.on("cart", ({user, product}) => {
      socket.broadcast.emit(
        "recieve-cart",
        `${user.name} just added ${product.name} to his/her cart!`
      );
    });

    socket.on("disconnect", () => {
      // logger.info("disconnected!");
    });
  });

  io.listen(3000);

  return io;
};
