const logger = require('./utils/logger');
require("dotenv").config();
require("./config/mongoConnect")
    .connectDB()
    .then(() => {
        const app = require('./app');
        const server = require('http').createServer(app);
        const PORT = process.env.PORT || 5000;
        server.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
        require('./setup/socketio')(server);
    })
    .catch((e) => {
        logger.error(e);
    });

