const CronJob = require("node-cron");
const axios = require("axios");
const logger = require("../utils/logger")
const Currency = require("../models/Currency");
require("dotenv").config();

module.exports = () => {
    const scheduledJobFunction = CronJob.schedule("0 0 1 * *", async () => {
        try {
            let ratios = await axios.get(`https://api.apilayer.com/fixer/latest?base=ILS&apikey=${process.env.CURRENCY_API_KEY}`)
            await Currency.deleteMany({});
            await Currency.insertMany(ratios?.data?.rates);
            logger.info("Currency update successfully!");
        } catch (e) {
            logger.error(`Currency updated failed!\n${e}`);
        }
    });
    scheduledJobFunction.start();
}