const logger = require('./utils/logger');
require("dotenv").config();
require("./config/db")
    .connectDB()
    .then(() => {
        const app = require('./app');
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
    })
    .catch((e) => { 
        logger.error(e) 
    });

