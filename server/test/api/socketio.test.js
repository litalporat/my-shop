const { SocketTester } = require('socket.io-await-test')
const ioClient = require('socket.io-client');
const port = 3000;
const app = require('http').createServer().listen(port);

const socketUrl = `http://localhost:${port}`;
const options = {
    'force new connection': true,
};

describe("SocketTester", () => {
    let server;
    let client;
    let otherClient;

    beforeAll(() => {
        server = require('../../setup/socketio')(app);;
    })
    afterAll(() => {
        server.close();
    })

    beforeEach(() => {
        client = ioClient.connect(socketUrl, options);
        otherClient = ioClient.connect(socketUrl, options);
    })

    afterEach(() => {
        client.close();
        otherClient.close();
    });

    describe("socketio unitests", (done) => {
        it("socketio likes route", async () => {
            const tester = new SocketTester(otherClient);
            let [name, product] = ['Ravid', 'Vi Overall'];
            client.emit('like', { name }, { name: product });
            const rlikes = tester.on('recieve-likes');
            await rlikes.waitForEvents(1);
            expect(rlikes.get(0)).toBe(`${name} just liked ${product}!`);
        })

        it("socketio cart route", async () => {
            const tester = new SocketTester(otherClient);
            const rcart = tester.on('recieve-cart');
            let [name, product] = ['Bar', 'Diana Dress'];
            client.emit('cart', { name }, { name: product });
            await rcart.waitForEvents(1);
            expect(rcart.get(0)).toBe(`${name} just added ${product} to his/her cart!`);
        })
    })
});