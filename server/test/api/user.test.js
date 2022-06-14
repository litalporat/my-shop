const db = require("../../setup/mongoMockDB");
const app = require('../../app');
const supertest = require('supertest');
const request = supertest(app);
const User = require("../../models/User");
const { generateAccessToken } = require('../../middlewares/auth');
require("dotenv").config();

var _id = null;
var token = null;
beforeAll(async () => {
    await db.connect();
    let user = await User.create({ email: "testy@gmail.com", password: "password123#$" });
    _id = user._id;
    token = generateAccessToken({ _id: "testy@gmail.com" });
});

//afterEach(async () => await db.clear());

afterAll(async () => await db.close());

describe("/api/users", () => {
    it('POST /api/users - adding new user', async () => {
        const res = await request
            .post("/api/users")
            .send({
                email: "username@gmail.com",
                password: "password123#$"
            })
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('info', 'user was added successfuly!');
    });

    it('POST /api/users - adding existing user', async () => {
        const res = await request
            .post("/api/users")
            .send({
                email: "username@gmail.com",
                password: "password123#$"
            });
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('error', 'Email already exists!');
        expect(res.body).toHaveProperty('email', 'username@gmail.com');
    });

    it('POST /api/users - try adding user with invalid email field', async () => {
        const res = await request
            .post("/api/users")
            .send({
                mail: "username@gmail.com",
                password: "password123#$"
            });
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('error', '"email" is required');
    });

    it('POST /api/users - try adding user with invalid password field', async () => {
        const res = await request
            .post("/api/users")
            .send({
                email: "username@gmail.com",
                pass: "password123#$"
            });
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('error', '"password" is required');
    });

    it('POST /api/users - try adding user with empty object field', async () => {
        const res = await request
            .post("/api/users")
            .send({})
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('error', '"email" is required');
    });

    it('GET /api/user/ - get all users', async () => {
        const res = await request
            .get(`/api/users/`)
            .set('Authorization', 'Bearer ' + token)
            .send({})
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body).not.toHaveLength(0);
    });

    it('GET /api/user/:id - get a user', async () => {
        const res = await request
            .get(`/api/users/${ _id }`)
            .set('Authorization', 'Bearer ' + token)
            .send({})
        expect(res.status).toBe(200);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('info', 'user found!');
        expect(res.body).toHaveProperty('data');
        expect(res.body.data && typeof res.body.data === 'object').toBe(true);
        expect(res.body.data).toHaveProperty('_id', _id.toString());
        expect(res.body.data).toHaveProperty('email', "testy@gmail.com");
        expect(res.body.data).toHaveProperty('password');
    });

    it('GET /api/user/:id - get an invalid id', async () => {
        const res = await request
            .get(`/api/users/123456`)
            .set('Authorization', 'Bearer ' + token)
            .send({})
        expect(res.status).toBe(400);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('error', "invalid id!");
    });

    it('GET /api/user/:id - get a non existing user', async () => {
        const res = await request
            .get(`/api/users/62923b49e375bd1af9718dc3`)
            .set('Authorization', 'Bearer ' + token)
            .send({})
        expect(res.status).toBe(400);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('error', "user does not exists!");
    });

    it('GET /api/user/:id - JWT AUTH', async () => {
        const res = await request
            .get(`/api/users/62923b49e375bd1af9718dc3`)
            .send({})
        expect(res.status).toBe(200);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('error', "Access Denied!");
    });

    it('DELETE /api/user/:id - delete a user', async () => {
        const res = await request
            .delete(`/api/users/${ _id }`)
            .set('Authorization', 'Bearer ' + token)
            .send({})
        expect(res.status).toBe(200);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('info', "user deleted successfully!");
    });

    it('DELETE /api/user/:id - delete an invalid id', async () => {
        const res = await request
            .delete(`/api/users/123456`)
            .set('Authorization', 'Bearer ' + token)
            .send({})
        expect(res.status).toBe(400);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('error', "invalid id!");
    });

    it('DELETE /api/user/:id - delete a non existing user', async () => {
        const res = await request
            .delete(`/api/users/62923b49e375bd1af9718dc3`)
            .set('Authorization', 'Bearer ' + token)
            .send({})
        expect(res.status).toBe(400);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('error', "user does not exists!");
    });

    it('DELETE /api/user/:id - JWT AUTH', async () => {
        const res = await request
            .delete(`/api/users/62923b49e375bd1af9718dc3`)
            .send({})
        expect(res.status).toBe(200);
        expect(res.body && typeof res.body === 'object').toBe(true);
        expect(res.body).toHaveProperty('error', "Access Denied!");
    });
});