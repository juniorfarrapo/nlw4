import request from 'supertest';
import { app } from '../app';
import createConnection from '../database';

describe("Users", () => {
    beforeAll(async() => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should to be able to create a new user", async () => {
        const response = await request(app).post("/users")
        .send({
            email: "user@jr.com",
            name: "User Junior"
        });

        expect(response.status).toBe(201);
    });

    it("Should to be able to create a new user with a exists email", async () => {
        const response = await request(app).post("/users")
        .send({
            email: "user@jr.com",
            name: "User Junior"
        });

        expect(response.status).toBe(400);
    });
});