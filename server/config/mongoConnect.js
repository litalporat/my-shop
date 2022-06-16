const logger = require('../utils/logger');
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("MongoDB connection SUCCESS");
  } catch (error) {
    logger.error("MongoDB connection FAILED");
    logger.error(error)
    process.exit(1);
  }
};

module.exports = { connectDB };
