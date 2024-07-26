const request = require('supertest');
const app = require('../app');

describe('Email API', () => {
    it('should create a new email', async () => {
        const res = await request(app)
        .post('/emails')
        .send({
            email: 'test@example.com',
            name: 'Test User'
        });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('email');
    });
});