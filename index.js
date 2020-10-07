const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const port = 3000;
const host = 'localhost';
const apiServiceUrl = 'http://localhost:8005';

app.use(morgan('dev'));

app.use('/', createProxyMiddleware({
  target: apiServiceUrl,
  changeOrigin: true
}));

app.listen(port, host, () => {
  console.log(`Starting Proxy at ${host}:${port}`)
})