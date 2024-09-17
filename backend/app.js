const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",  // Frontend URL
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

// Simulate random charging station updates
const simulateChargingStationData = () => {
    const stationId = Math.floor(Math.random() * 10) + 1;
    const statuses = ['charging', 'idle', 'error'];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const power = Math.random() * 100;  // Simulate random power consumption

    return {
        stationId,
        status,
        power: power.toFixed(2)
    };
};

// Send data to frontend every 2 seconds
setInterval(() => {
    const data = simulateChargingStationData();
    io.emit('stationUpdate', data);
}, 2000);

server.listen(4000, () => {
    console.log('Backend server running on port 4000');
});
