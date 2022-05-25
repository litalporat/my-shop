process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http')
const app = require('../../app');
const { connectDB, closeDB } = require("../../config/db");

require("dotenv").config();

const should = chai.should();
chai.use(chaiHttp);

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

    it('adding new user', (done) => {
        chai.request(app)
            .post("/api/users")
            .send({
                email: "username@gmail.com",
                password: "password123#$"
            })
            .end((err, res) => {
                console.log(res.body);
                res.body.should.have.property('status');
                res.body.should.have.property('info');
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql(200);
                res.body.should.have.property('info').eql('user was added successfuly!');
                done();
            });
    });

    it('adding existing user', (done) => {
        chai.request(app)
            .post("/api/users")
            .send({
                email: "username@gmail.com",
                password: "password123#$"
            })
            .end((err, res) => {
                console.log(res.body);
                res.body.should.have.property('status');
                res.body.should.have.property('error');
                res.body.should.have.property('email');
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql(400);
                res.body.should.have.property('error').eql('Email already exists!');
                res.body.should.have.property('email').eql('username@gmail.com');
                done();
            });
    });

    it('try adding user with invalid email field', (done) => {
        chai.request(app)
            .post("/api/users")
            .send({
                mail: "username@gmail.com",
                password: "password123#$"
            })
            .end((err, res) => {
                console.log(res.body);
                res.body.should.have.property('status');
                res.body.should.have.property('error');
                res.body.should.have.property('email');
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql(400);
                res.body.should.have.property('error').eql('Email already exists!');
                res.body.should.have.property('email').eql('username@gmail.com');
                done();
            });
    });

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