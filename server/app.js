const express = require('express');
const imageRoutes = require('./routes/imageRoutes');
const path = require('path');
const cors = require('cors'); // 引入 cors

const app = express();
app.use(cors()); // 使用 cors 中间件

app.use(express.json());
app.use('/api/images', imageRoutes);

// 确保 Express 能够服务静态文件
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
  res.send('Welcome to the Image Editing App');
});

module.exports = app;
