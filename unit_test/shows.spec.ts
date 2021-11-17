const ShowsController = require("../src/shows/controllers/shows");
const request = require("supertest");
import { useExpressServer } from 'routing-controllers';
import { json } from 'body-parser';
import express from 'express';

describe("The Show Service", () => {
    const app = express();

    beforeAll(() => {
        app.use(json());
        useExpressServer(app, {
            controllers: [ShowsController]
        })
    });

    it("Search box is empty", async () => {
        const response = await request(app).get("/=shows/search?q=");
        expect(response.statusCode).toBe(404);
        expect(response.body.message).toBe("null");
    });

    it("Search without query not work well", async () => {
        const response = await request(app).get("/shows/search?query");
        expect(response.statusCode).toBe(404);
        expect(response.body.message).toContain("null");
    });

    it("Search results show a list of items", async () => {
        const response = await request(app).get("/shows/search?q=batman&embed=episodes");
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toContain("Hi Diddle Riddle (1)");
        expect(response.body.message).toContain("Smack in the Middle (2)");
        expect(response.body.message).toContain("Fine Feathered Finks (1)");
    });
});