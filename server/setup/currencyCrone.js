const CronJob = require("node-cron");
const axios = require("axios");
const logger = require("../utils/logger")
const Currency = require("../models/Currency");
const API_KEY = "7YR6DQK30yncRmLTEHjtVvN8YutBL3xc"
module.exports = () => {
    const scheduledJobFunction = CronJob.schedule("* * * * *", async () => {
        try {
            let ratios = await axios.get(`https://api.apilayer.com/fixer/latest?base=ILS&apikey=${API_KEY}`)
            logger.info(ratios)
            await Currency.deleteMany({});
            await Currency.insertMany(ratios.rates);
            logger.info("Currency update successfully!");
        } catch (e) {
            logger.error(`Currency updated failed!\n${e}`);
        }
    });
    scheduledJobFunction.start();
}