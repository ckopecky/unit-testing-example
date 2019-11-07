const request = require('supertest'); // calling it "request" is a common practice
const server = require('./server.js'); // this is our first red, file doesn't exist yet
    
    //Integration Test Example

    describe('index route', () => {
        // The tests we write for endpoints are called integration tests because they test how different parts of the system work as a whole. This is different from the unit tests we use to verify correctness of one unit of work in isolation.
        it('should return an OK status code from the index route', async () => {
            const expectedStatusCode = 200;
            // http calls made with supertest return promises, we can use async/await if desired
            // do a get request to our api (server.js) and inspect the response
            const response = await request(server).get('/');
            expect(response.status).toEqual(expectedStatusCode);
        });

        it('should send a JSON object', async () => {
            const response = await request(server).get('/');
            expect(response.type).toBe('application/json');
        });

        it('should return an expected body', async () => {
            const expectedBody = { Success: "sanity check..." }
            const response = await request(server).get('/');
            expect(response.body).toEqual(expectedBody);
        });
        it('should perform GET request', async () => {
            const response = await request(server).get('/');
            expect(response.ok).toBeTruthy();
        });
        
    })

    /*
    describe('index route', () => {
        it('should return an OK status code from the index route', () => {
            let response;
            return request(server).get('/').then(res => {
                response = res;
                expect(response.status).toEqual(expectedStatusCode);

            })
        })
    })
    
    
    
    */