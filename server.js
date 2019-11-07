const server = require('express')();

server.get('/', (req, res) => {
    res.send({Success: "sanity check..."});
})

module.exports = server;


