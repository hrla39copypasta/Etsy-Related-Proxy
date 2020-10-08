const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const port = 3000;
const host = 'localhost';

app.use(express.static(path.join(__dirname, './public')));

app.use(morgan('dev'));

app.use('/user', createProxyMiddleware({
  target: 'http://localhost:8001',
  changeOrigin: true
}));
app.use('/entry', createProxyMiddleware({
  target: 'http://localhost:8001',
  changeOrigin: true
}));
app.use('/product-display', createProxyMiddleware({
  target: 'http://localhost:8002',
  changeOrigin: true
}));
app.use('/photo-display', createProxyMiddleware({
  target: 'http://localhost:8002',
  changeOrigin: true
}));
app.use('/reviewsItem', createProxyMiddleware({
  target: 'http://localhost:8003',
  changeOrigin: true
}));
app.use('/reviewsShop', createProxyMiddleware({
  target: 'http://localhost:8003',
  changeOrigin: true
}));
app.use('/api', createProxyMiddleware({
  target: 'http://localhost:8004',
  changeOrigin: true
}));
app.use('/related', createProxyMiddleware({
  target: 'http://localhost:8005',
  changeOrigin: true
}));

app.listen(port, host, () => {
  console.log(`Starting Proxy at ${host}:${port}`)
})