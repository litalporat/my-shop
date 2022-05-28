process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http')
const app = require('../../app');
const { connectDB, closeDB } = require("../../config/db");
const Categories = require("../../models/Categories");
const categoriesData = require("../../data/categories");
require("dotenv").config();

const should = chai.should();
chai.use(chaiHttp);

describe("/api/categories", () => {
    var token = null;
    var _id = null;
    before((done) => {
        connectDB()
            .then(() => {
                Categories.insertMany(categoriesData)
                    .then(() => {
                        done();
                    });
            })
            .catch((e) => done(e));
    })

    after((done) => {
        closeDB()
            .then(() => done())
            .catch((e) => done(e));
    })

    it('GET /api/categories - get all categories', (done) => {
        chai.request(app)
            .get("/api/categories")
            .send({})
            .end((err, res) => {
                const realNames = categoriesData.map(item => item.name);
                const realDisplayNames = categoriesData.map(item => item.displayName);
                res.should.have.status(200);
                res.body.should.be.a('array')
                const cats = res.body;
                const names = cats.map(cat => cat.name);
                const displayNames = cats.map(cat => cat.displayName);
                if (realNames.sort().join(',') !== names.sort().join(',')) assert.fail();
                if (realDisplayNames.sort().join(',') !== displayNames.sort().join(',')) assert.fail();
                done();
            });
    });
});