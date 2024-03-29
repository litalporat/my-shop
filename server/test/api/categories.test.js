const db = require("../../setup/mongoMockDB");
const app = require('../../app');
const supertest = require('supertest');
const request = supertest(app);
const Categories = require("../../models/Categories");
const categoriesData = require("../../data/categories");
require("dotenv").config();

beforeAll(async () => {
    await db.connect();
    await Categories.insertMany(categoriesData);
});


//afterEach(async () => await db.clear());

afterAll(async () => await db.close());


describe("/api/categories", () => {
    it('GET /api/categories - get all categories', async () => {
        const res = await request
            .get("/api/categories")
        const realNames = categoriesData.map(item => item.name);
        const realDisplayNames = categoriesData.map(item => item.displayName);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        const cats = res.body;
        const names = cats.map(cat => cat.name);
        const displayNames = cats.map(cat => cat.displayName);
        if (realNames.sort().join(',') !== names.sort().join(',')) assert.fail();
        if (realDisplayNames.sort().join(',') !== displayNames.sort().join(',')) assert.fail();
    });
});