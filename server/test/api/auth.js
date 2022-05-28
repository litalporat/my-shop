process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http')
const app = require('../../app');
const { connectDB, closeDB } = require("../../config/db");
const User = require("../../models/User");
require("dotenv").config();

const should = chai.should();
chai.use(chaiHttp);

describe("/api/auth/login", () => {
    var token = null;
    var refresh = null;
    var _id = null;
    before((done) => {
        connectDB()
            .then(() => {
                User.create({
                    email: "test@gmail.com",
                    password: "password123#$"
                })
                .then((val) => {
                    _id = val._id
                    done();
                });
            })
            .catch((e) => done(e));
    })

    after((done) => {
        closeDB()
            .then(() => {
                done()
            })
            .catch((e) => done(e));
    })

    it('POST /api/auth/login - get user data', (done) => {
        chai.request(app)
            .post("/api/auth/login")
            .send({
                email: "test@gmail.com",
                password: "password123#$"
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('info');
                res.body.should.have.property('info').eql('user authenticated successfuly!');
                res.body.should.have.property('accessToken');
                res.body.should.have.property('refreshToken');
                token = res.body.accessToken;
                refresh = res.body.refreshToken;
                done();
            });
    });

    it('POST /api/auth/login - invalid password', (done) => {
        chai.request(app)
            .post("/api/auth/login")
            .send({
                email: "test@gmail.com",
                password: "passdword123#$"
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('invalid password!');
                done();
            });
    });

    it('POST /api/auth/login - non existing email', (done) => {
        chai.request(app)
            .post("/api/auth/login")
            .send({
                email: "testyyy@gmail.com",
                password: "passdword123#$"
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('email not exists!');
                done();
            });
    });

    it('POST /api/auth/login - invalid body', (done) => {
        chai.request(app)
            .post("/api/auth/login")
            .send({
                password: "passdword123#$"
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('"email" is required');
                done();
            });
    });

    it('POST /api/auth/login - empty body', (done) => {
        chai.request(app)
            .post("/api/auth/login")
            .send({})
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('"email" is required');
                done();
            });
    });

    it('POST /api/auth/token - get a new accessToken', (done) => {
        chai.request(app)
            .post("/api/auth/token")
            .send({ token: refresh })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('accessToken');
                done();
            });
    });

    it('POST /api/auth/token - get invalid refreshToken', (done) => {
        chai.request(app)
            .post("/api/auth/token")
            .send({ token: refresh+'ssdf' })
            .end((err, res) => {
                res.should.have.status(403);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('invalid refresh token!');
                done();
            });
    });

    it('POST /api/auth/token - get empty token', (done) => {
        chai.request(app)
            .post("/api/auth/token")
            .send({ token: '' })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('"token" is not allowed to be empty');
                done();
            });
    });

    it('POST /api/auth/token - invalid body', (done) => {
        chai.request(app)
            .post("/api/auth/token")
            .send({ tokem: refresh })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('"token" is required');
                done();
            });
    });

    it('POST /api/auth/token - empty body', (done) => {
        chai.request(app)
            .post("/api/auth/token")
            .send({})
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('"token" is required');
                done();
            });
    });

    it('DELETE /api/auth/logout - delete a refreshToken', (done) => {
        chai.request(app)
            .delete("/api/auth/logout")
            .send({ token: refresh })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('info').eql('logout successfuly!');
                done();
            });
    });

    it('DELETE /api/auth/logout - delete a refreshToken', (done) => {
        chai.request(app)
            .delete("/api/auth/logout")
            .send({ tokens: refresh })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('"token" is required');
                done();
            });
    });
});
