
const logger = require('../utils/logger');
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (process.env.NODE_ENV === 'test') {
      const Mockgoose = require('mockgoose').Mockgoose;
      const mockgoose = new Mockgoose(mongoose);
      await mockgoose.prepareStorage();
    }
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

const closeDB = () => {
  logger.info("MongoDB connection is terminating...")
  return mongoose.disconnect();
};

module.exports = { connectDB, closeDB };
