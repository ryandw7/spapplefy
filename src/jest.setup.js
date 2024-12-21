import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { server } from './mocks/node'
beforeEach(() => {
    console.log('tffffest')
    server.listen()
    async function app() {
        const response = await fetch('https://example.com/user')
        const user = await response.json()
        console.log(user)
    }

    app()
})





// This is a simple Node.js application that
// does a network request and prints the response.
