const db = require("../../setup/mongoMockDB");
const app = require('../../app');
const supertest = require('supertest');
const request = supertest(app);
const User = require("../../models/User");
const Product = require("../../models/Product");
const Categories = require("../../models/Categories");
const productsData = require("../../data/products");
const categoriesData = require("../../data/categories");
const { generateAccessToken } = require('../../middlewares/auth');
require("dotenv").config();

var _id = null;
var token = null;
var category = null;
beforeAll(async () => {
    await db.connect();
    await Product.insertMany(productsData);
    let categories = await Categories.insertMany(categoriesData);
    category = categories[0];
    let user = await User.create({ email: "testy1@gmail.com", password: "password123#$" });
    _id = user._id;
    token = generateAccessToken({ _id: "testy1@gmail.com" });
});

//afterEach(async () => await db.clear());

afterAll(async () => await db.close());

describe("/api/products", () => {

    it('GET /api/products - get all products', async () => {
        const res = await request
            .get("/api/products")
            .send({})
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body).toHaveLength(productsData.length);
        _id = res.body[0]._id;
    });

    it('GET /api/products/:id - get a product', async () => {
        const res = await request
            .get(`/api/products/${_id}`)
            .send({})
        expect(res.status).toBe(200);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('stock')
        expect(res.body).toHaveProperty('imgDisplay');
        expect(res.body).toHaveProperty('imgDetails');
        expect(res.body).toHaveProperty('displayName');
        expect(res.body).toHaveProperty('description');
        expect(res.body).toHaveProperty('color');
        expect(res.body).toHaveProperty('price');
        expect(res.body).toHaveProperty('discount');
        expect(res.body).toHaveProperty('type');
        expect(res.body).toHaveProperty('amountSold');
        expect(res.body).toHaveProperty('createdAt');
        expect(res.body).toHaveProperty('updatedAt');
    });

    it('GET /api/products/:id - get a invalid product', async () => {
        const res = await request
            .get(`/api/products/123456`)
            .send({})
        expect(res.status).toBe(400);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('error', 'invalid id!')
    });

    it('GET /api/products?category=x - get all products from category x', async () => {
        const res = await request
            .get(`/api/products?category=${category.name}`)
            .send({})
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
            res.body.forEach((product) => {
            expect(product.type).toBe(category.name);
        })
    });

    it('GET /api/products?category=x - x is not a valid category', async () => {
        const res = await request
            .get(`/api/products?category=x`)
            .send({})
        expect(res.status).toBe(200);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body).toHaveLength(productsData.length);
    });
});