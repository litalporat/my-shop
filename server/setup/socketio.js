
const logger = require('../utils/logger');

module.exports = function (port) {
    const io = require('socket.io')(port, {
        cors: {
            origin: ["http://localhost:5000", "http://localhost:8080"]
        }
    });
    io.on("connection", socket => {
        // logger.info("A Client has connected!");

        socket.on("like", (user, product) => {
            socket.broadcast.emit("recieve-likes", `${user.name} just liked ${product.name}!`);
        })

        socket.on("cart", (user, product) => {
            socket.broadcast.emit("recieve-cart", `${user.name} just added ${product.name} to his/her cart!`);
        })

        socket.on("disconnect", () => {
            // logger.info("disconnected!");
        })
    })
    return io;
}