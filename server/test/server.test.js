let app = require('../server');
let testServer = require('supertest');

describe('Test the post route', () => {
    it('should respond 200 to the reservation post route', async() =>{
        const response = await testServer(app).post('/api/reservation/reserved');
        expect(response.statusCode).toBe(200);
    })

})