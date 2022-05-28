process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http')
const app = require('../../app');
const { connectDB, closeDB } = require("../../config/db");
const User = require("../../models/User");
const { generateAccessToken } = require('../../middlewares/auth');
require("dotenv").config();

const should = chai.should();
chai.use(chaiHttp);


describe("/api/users", () => {
    var token = null;
    var _id = null;
    before((done) => {
        connectDB()
            .then(() => {
                return User.create({
                    email: "testy@gmail.com",
                    password: "password123#$"
                })
            })
            .then((val) => {
                _id = val._id
            })
            .then(() => {
                token = generateAccessToken({ _id: "testy@gmail.com" });
                done();
            })
            .catch((e) => done(e));
    })

    after((done) => {
        closeDB()
            .then(() => done())
            .catch((e) => done(e));
    })

    it('POST /api/users - adding new user', (done) => {
        chai.request(app)
            .post("/api/users")
            .send({
                email: "username@gmail.com",
                password: "password123#$"
            })
            .end((err, res) => {
                res.body.should.have.property('info');
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('info').eql('user was added successfuly!');
                done();
            });
    });

    it('POST /api/users - adding existing user', (done) => {
        chai.request(app)
            .post("/api/users")
            .send({
                email: "username@gmail.com",
                password: "password123#$"
            })
            .end((err, res) => {
                res.body.should.have.property('error');
                res.body.should.have.property('email');
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('Email already exists!');
                res.body.should.have.property('email').eql('username@gmail.com');
                done();
            });
    });

    it('POST /api/users - try adding user with invalid email field', (done) => {
        chai.request(app)
            .post("/api/users")
            .send({
                mail: "username@gmail.com",
                password: "password123#$"
            })
            .end((err, res) => {
                res.body.should.have.property('error');
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('"email" is required');
                done();
            });
    });

    it('POST /api/users - try adding user with invalid password field', (done) => {
        chai.request(app)
            .post("/api/users")
            .send({
                email: "username@gmail.com",
                pass: "password123#$"
            })
            .end((err, res) => {
                res.body.should.have.property('error');
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('"password" is required');
                done();
            });
    });

    it('POST /api/users - try adding user with empty object field', (done) => {
        chai.request(app)
            .post("/api/users")
            .send({})
            .end((err, res) => {
                res.body.should.have.property('error');
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('"email" is required');
                done();
            });
    });

    it('GET /api/user/ - get all users', (done) => {
        chai.request(app)
            .get(`/api/users/`)
            .set('Authorization', 'Bearer ' + token)
            .send({})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(3);
                done();
            });
    });

    it('GET /api/user/:id - get a user', (done) => {
        chai.request(app)
            .get(`/api/users/${ _id }`)
            .set('Authorization', 'Bearer ' + token)
            .send({})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('info').eql('user found!');
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.data.should.have.property('_id').eql(_id.toString());
                res.body.data.should.have.property('email').eql("testy@gmail.com");
                res.body.data.should.have.property('password');
                done();
            });
    });

    it('GET /api/user/:id - get an invalid id', (done) => {
        chai.request(app)
            .get(`/api/users/123456`)
            .set('Authorization', 'Bearer ' + token)
            .send({})
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('invalid id!');
                done();
            });
    });

    it('GET /api/user/:id - get a non existing user', (done) => {
        chai.request(app)
            .get(`/api/users/62923b49e375bd1af9718dc3`)
            .set('Authorization', 'Bearer ' + token)
            .send({})
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('user does not exists!');
                done();
            });
    });

    it('GET /api/user/:id - JWT AUTH', (done) => {
        chai.request(app)
            .get(`/api/users/62923b49e375bd1af9718dc3`)
            .send({})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('Access Denied!');
                done();
            });
    });

    it('DELETE /api/user/:id - delete a user', (done) => {
        chai.request(app)
            .delete(`/api/users/${ _id }`)
            .set('Authorization', 'Bearer ' + token)
            .send({})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('info').eql('user deleted successfully!');
                done();
            });
    });

    it('DELETE /api/user/:id - delete an invalid id', (done) => {
        chai.request(app)
            .delete(`/api/users/123456`)
            .set('Authorization', 'Bearer ' + token)
            .send({})
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('invalid id!');
                done();
            });
    });

    it('DELETE /api/user/:id - delete a non existing user', (done) => {
        chai.request(app)
            .delete(`/api/users/62923b49e375bd1af9718dc3`)
            .set('Authorization', 'Bearer ' + token)
            .send({})
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('user does not exists!');
                done();
            });
    });

    it('DELETE /api/user/:id - JWT AUTH', (done) => {
        chai.request(app)
            .delete(`/api/users/62923b49e375bd1af9718dc3`)
            .send({})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('Access Denied!');
                done();
            });
    });
});