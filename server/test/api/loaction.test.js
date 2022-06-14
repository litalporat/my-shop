const db = require("../../setup/mongoMockDB");
const app = require('../../app');
const supertest = require('supertest');
const request = supertest(app);
const Location = require("../../models/Location");
const locationData = require("../../data/locations");
require("dotenv").config();

beforeAll(async () => {
    await db.connect();
    await Location.insertMany(locationData);
});

//afterEach(async () => await db.clear());

afterAll(async () => await db.close());


describe("/api/locations", () => {
    it('GET /api/locations - get all locations', async () => {
        const res = await request
            .get("/api/locations")
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body).toHaveLength(locationData.length);
        // const realNames = categoriesData.map(item => item.name);
        // const realDisplayNames = categoriesData.map(item => item.displayName);
        // expect(res.status).toBe(200);
        // expect(Array.isArray(res.body)).toBe(true);
        // const cats = res.body;
        // const names = cats.map(cat => cat.name);
        // const displayNames = cats.map(cat => cat.displayName);
        // if (realNames.sort().join(',') !== names.sort().join(',')) assert.fail();
        // if (realDisplayNames.sort().join(',') !== displayNames.sort().join(',')) assert.fail();
    });

    it('GET /api/locations - get all locations', async () => {
        const res = await request
            .get("/api/locations")
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body).toHaveLength(locationData.length);
        // const realNames = categoriesData.map(item => item.name);
        // const realDisplayNames = categoriesData.map(item => item.displayName);
        // expect(res.status).toBe(200);
        // expect(Array.isArray(res.body)).toBe(true);
        // const cats = res.body;
        // const names = cats.map(cat => cat.name);
        // const displayNames = cats.map(cat => cat.displayName);
        // if (realNames.sort().join(',') !== names.sort().join(',')) assert.fail();
        // if (realDisplayNames.sort().join(',') !== displayNames.sort().join(',')) assert.fail();
    });
});