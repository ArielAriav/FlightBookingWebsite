// backend/tests/app.test.js
const request = require("supertest");
const app = require("../server"); // הנתיב לקובץ Express שלך

describe("GET /api/flights", () => {
  it("should return flights array", async () => {
    const res = await request(app).get("/api/flights");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
