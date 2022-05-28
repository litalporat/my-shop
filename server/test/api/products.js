process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http')
const app = require('../../app');
const { connectDB, closeDB } = require("../../config/db");
const User = require("../../models/User");
const Product = require("../../models/Product");
const { generateAccessToken } = require('../../middlewares/auth');
const productsData = require("../../data/products");
require("dotenv").config();

const should = chai.should();
chai.use(chaiHttp);

describe("/api/products", () => {
    var token = null;
    var _id = null;
    before((done) => {
        connectDB()
            .then(() => {
                return User.create({
                    email: "testy1@gmail.com",
                    password: "password123#$"
                })
            })
            .then((val) => {
                _id = val._id
            })
            .then(() => {
                return Product.insertMany(productsData);
            })
            .then(() => {
                token = generateAccessToken({ _id: "testy1@gmail.com" });
                done();
            })
            .catch((e) => done(e));
    })

    after((done) => {
        closeDB()
            .then(() => done())
            .catch((e) => done(e));
    })

    it('GET /api/products - get all products', (done) => {
        chai.request(app)
            .get("/api/products")
            .send({})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(productsData.length);
                _id = res.body[0]._id;
                done();
            });
    });

    it('GET /api/products/:id - get a product', (done) => {
        chai.request(app)
            .get(`/api/products/${_id}`)
            .send({})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('stock');
                res.body.should.have.property('images');
                res.body.should.have.property('displayName');
                res.body.should.have.property('description');
                res.body.should.have.property('metadata');
                res.body.should.have.property('color');
                res.body.should.have.property('price');
                res.body.should.have.property('discount');
                res.body.should.have.property('type');
                res.body.should.have.property('amountSold');
                res.body.should.have.property('similarProducts');
                res.body.should.have.property('createdAt');
                res.body.should.have.property('updatedAt');
                done();
            });
    });

    it('GET /api/products/:id - get a invalid product', (done) => {
        chai.request(app)
            .get(`/api/products/123456`)
            .send({})
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql('invalid id!');
                done();
            });
    });
});