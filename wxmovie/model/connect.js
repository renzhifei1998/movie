const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wxmovie', { useUnifiedTopology: true })
    .then(() => console.log('连接成功'))
    .catch(() => console.log('连接失败'))
