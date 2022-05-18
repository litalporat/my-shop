const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../../app');
const assert = require('assert');
const { connectDB, closeDB } = require("../../../config/db");
process.env.NODE_ENV = 'test';
describe("POST /api/users", () => {

    before((done) => {
        connectDB()
            .then(() => done())
            .catch((e) => done(e));
    })

    after((done) => {
        closeDB()
            .then(() => done())
            .catch((e) => done(e));
    })

    it('OK', async () => {
        const response = await request(app).post("/api/users").send({
            email: "username@gmail.com",
            password: "password123#$" 
        });
        const { body } = response;
        console.log(body)
        expect.body.to.contain.property('status');
        assert.ok(true);
    })

    // describe("given a username and password", () => {
    //     // should save the username and password to the database
    //     // should respond with a json object contain an access token and a refresh token
    //     test("should respond with status 200", () => {
    //         const response = request(server).post("/api/users").send({
    //             email: "username@gmail.com",
    //             password: "password123#$" 
    //         })
    //         expect(response.statusCode).toBe(200);
    //     });
    //     // should specify json in the content header
    // });

    // describe("when the username and password is missing", () => {

    // });
});