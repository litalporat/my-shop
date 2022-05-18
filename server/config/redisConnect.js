const redis = require('redis');

const redisClient = redis.createClient();
client.on('connect', () => {
    console.log('redis is connected!');
});

module.exports = redisClient;