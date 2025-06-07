const request = require('supertest');
const app = require('../index'); 
let createdBookingId;

describe('Flight Booking API', () => {
  test('GET /bookings - should return a list of bookings', async () => {
    const res = await request(app).get('/bookings');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /bookings - should create a new booking', async () => {
    const res = await request(app)
      .post('/bookings')
      .send({
        fullName: 'Alice Smith',
        email: 'alice@example.com',
        flightNumber: 'LH123'
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    createdBookingId = res.body.id;
  });

  test('POST /bookings - should fail when required fields are missing', async () => {
    const res = await request(app).post('/bookings').send({ fullName: 'Bob' });
    expect(res.statusCode).toBe(400);
  });

  test('PUT /bookings/:id - should update existing booking', async () => {
    const res = await request(app)
      .put(`/bookings/${createdBookingId}`)
      .send({
        fullName: 'Alice Updated',
        email: 'updated@example.com'
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.fullName).toBe('Alice Updated');
  });

  test('PUT /bookings/:id - return 404 for non-existent booking', async () => {
    const res = await request(app).put('/bookings/99999').send({ fullName: 'Ghost User' });
    expect(res.statusCode).toBe(404);
  });

  test('DELETE /bookings/:id - should delete existing booking', async () => {
    const res = await request(app).delete(`/bookings/${createdBookingId}`);
    expect(res.statusCode).toBe(200);
  });

  test('DELETE /bookings/:id - should return 404 for non-existent booking', async () => {
    const res = await request(app).delete('/bookings/99999');
    expect(res.statusCode).toBe(404);
  });
});
