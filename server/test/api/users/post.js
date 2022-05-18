const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../../server');
const { connectDB, closeDB } = require("../../../config/db");

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

    it('OK', (done) => {
        const response = request(app).post("/api/users").send({
            email: "username@gmail.com",
            password: "password123#$" 
        }).then((res) => {
            const { body } = res;
            expect.body.to.contain.property('status');
            done();
        })
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