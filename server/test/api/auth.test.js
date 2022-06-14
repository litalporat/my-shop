const db = require("../../setup/mongoMockDB");
const app = require('../../app');
const supertest = require('supertest');
const request = supertest(app);
const User = require("../../models/User");
require("dotenv").config();

var _id = null;
var token = null;
var refresh = null;

beforeAll(async () => {
    await db.connect();
    let user = await User.create({ email: "test@gmail.com", password: "password123#$" });
    _id = user._id;
});

//afterEach(async () => await db.clear());

afterAll(async () => await db.close());

describe("/api/auth/login", () => {


    it('POST /api/auth/login - get user data', async () => {
        const res = await request
            .post("/api/auth/login")
            .send({
                email: "test@gmail.com",
                password: "password123#$"
            })
        expect(res.status).toBe(200);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('info', 'user authenticated successfuly!');
        expect(res.body).toHaveProperty('accessToken');
        expect(res.body).toHaveProperty('refreshToken');
        token = res.body.accessToken;
        refresh = res.body.refreshToken;
    });

    it('POST /api/auth/login - invalid password', async () => {
        const res = await request
            .post("/api/auth/login")
            .send({
                email: "test@gmail.com",
                password: "passdword123#$"
            })
        expect(res.status).toBe(400);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('error', 'invalid password!');
    });

    it('POST /api/auth/login - non existing email', async () => {
        const res = await request
            .post("/api/auth/login")
            .send({
                email: "testyyy@gmail.com",
                password: "passdword123#$"
            })
        expect(res.status).toBe(400);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('error', 'email not exists!');
    });

    it('POST /api/auth/login - invalid body', async () => {
        const res = await request
            .post("/api/auth/login")
            .send({
                password: "passdword123#$"
            })
        expect(res.status).toBe(400);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('error', '"email" is required');
    });

    it('POST /api/auth/login - empty body', async () => {
        const res = await request
            .post("/api/auth/login")
            .send({})
        expect(res.status).toBe(400);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('error', '"email" is required');
    });

    it('POST /api/auth/token - get a new accessToken', async () => {
        const res = await request
            .post("/api/auth/token")
            .send({ token: refresh })
        expect(res.status).toBe(200);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('accessToken');
    });

    it('POST /api/auth/token - get invalid refreshToken', async () => {
        const res = await request
            .post("/api/auth/token")
            .send({ token: refresh+'ssdf' });
        expect(res.status).toBe(403);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('error', 'invalid refresh token!');
    });

    it('POST /api/auth/token - get empty token', async () => {
        const res = await request
            .post("/api/auth/token")
            .send({ token: '' })
        expect(res.status).toBe(400);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('error', '"token" is not allowed to be empty');
    });

    it('POST /api/auth/token - invalid body', async () => {
        const res = await request
            .post("/api/auth/token")
            .send({ tokem: refresh })
        expect(res.status).toBe(400);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('error', '"token" is required');
    });

    it('POST /api/auth/token - empty body', async () => {
        const res = await request
            .post("/api/auth/token")
            .send({})
        expect(res.status).toBe(400);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('error', '"token" is required');
    });

    it('DELETE /api/auth/logout - delete a refreshToken', async () => {
        const res = await request
            .delete("/api/auth/logout")
            .send({ token: refresh })
        expect(res.status).toBe(200);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('info', 'logout successfuly!');
    });

    it('DELETE /api/auth/logout - delete a refreshToken', async () => {
        const res = await request
            .delete("/api/auth/logout")
            .send({ tokens: refresh })
        expect(res.status).toBe(400);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('error', '"token" is required');
    });
});
