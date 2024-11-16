import request from "supertest";
import app from "../app.js"; // Import the app instance

let server;
let testDateId;

beforeAll(() => {
  // Start the server before running tests
  server = app.listen(3001, () => {
    console.log("Test server running on port 3001");
  });
});

afterAll((done) => {
  // Close the server after the tests are finished
  server.close(done);
});

describe("Date API", () => {
  it("should add a new date", async () => {
    const res = await request(server) // Pass the server to supertest
      .post("/api/dates")
      .send({ date: "2024-11-07 01:03:00" });

    expect(res.status).toBe(201);
    expect(res.body.date).toBe("2024-11-07 01:03:00");
    testDateId = res.body.id;
  });

  it("should return a formatted date", async () => {
    const res = await request(server).get(`/api/dates/${testDateId}`);
    expect(res.status).toBe(200);
    expect(res.body.formattedDate).toBeDefined();
  });

  it("should return 404 if date not found", async () => {
    const res = await request(server).get("/api/dates/11");
    expect(res.status).toBe(404);
    expect(res.body.error).toBe("Date not found");
  });
});
