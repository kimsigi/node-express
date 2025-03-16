require('module-alias/register');
require('dotenv').config();

const cors = require('cors');
const mongooseConnection = require('@config/database/mongoose');
const express = require('express');
const app = express();

// 미들웨어 설정(헤더, JSON, URL 인코딩)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('@public'));

// 전체 라우터를 로드하고 앱에 적용
require('@routes')(app);

// 데이터베이스(MONGOOSE) 연결
mongooseConnection();

// 서버 실행
app.listen(process.env.APP_PORT, () => {
  console.log(`Server running on port ${process.env.APP_PORT}`);
});