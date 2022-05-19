process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http')
const app = require('../../../app');
const { connectDB, closeDB } = require("../../../config/db");

require("dotenv").config();

const should = chai.should();
chai.use(chaiHttp);

describe("POST /api/users", () => {

    before((done) => {
        connectDB()
            .then(() => done())
            .catch((e) => done(e));
    })

    // after((done) => {
    //     closeDB()
    //         .then(() => done())
    //         .catch((e) => done(e));
    // })

    it('OK', () => {
        chai.request(app)
            .post("/api/users")
            .send({
                email: "username@gmail.com",
                password: "password123#$" 
            })
            .end((err, res) => {
                console.log(res.body);
                res.body.should.have.property('status');
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