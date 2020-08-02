const express = require('express');
const cors = require('cors');
const mobileRouter = require('./src/mobileMock.json');

const PORT = 3001;
const server = express();

server.use(cors());

server.get('/', (_req, res) => {
  res.send(mobileRouter);
});

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});

