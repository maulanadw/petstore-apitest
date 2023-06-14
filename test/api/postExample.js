const request = require('supertest');
const baseUrl = require('../../env');

describe('Post Request Example', () => {
    it('Success create user', async () => {
        const response = request(baseUrl())
            .post('/user')
            .send({
                "id": 12345,
                "username": "user1-auto",
                "firstName": "user1",
                "lastName": "user1",
                "email": "user1@gmail.com",
                "password": "password123",
                "phone": "08232323233",
                "userStatus": 1
            })

        console.log((await response).status)
        console.log((await response).body)
    });
});