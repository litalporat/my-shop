const logger = require('../utils/logger')

module.exports = function (port) {
  const io = require('socket.io')(port, {
    cors: {
      origin: '*',
    }
  });
  io.on("connection", socket => {
    logger.info("A Client has connected!");

    socket.on("like", (user, product) => {
      logger.info(`someone just liked ${product.name}!`);
      socket.broadcast.emit("recieve-likes", `Someone just ❤️ ${product.name}!`);
    })

    socket.on("cart", (user, product) => {
      logger.info(`Someone just added ${product.name} to his/her cart!`);
      socket.broadcast.emit("recieve-cart", `Someone just added ${product.name} to his/her cart!`);
    })

    socket.on("disconnect", () => {
      logger.info("disconnected!");
    })
  })
  return io;
}