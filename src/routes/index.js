const fs = require('fs');
const path = require('path');

// 파일을 라우트로 불러오기
module.exports = (app) => {
    
    const routesPath = path.dirname(path.join(__dirname, '@routes'));

    fs.readdirSync(routesPath).map((file) => {
        if (file !== 'index.js') { // index.js는 제외
            const route = path.join(routesPath, file);  // 파일 경로 결합
            const routeName = file.split('.')[0]; // 파일 이름을 경로로 사용 (예: 'users.js' -> '/users')
            const routeHandler = require(route); // 라우트 핸들러 불러오기

            app.use(`/${routeName}`, routeHandler); // 라우트를 app에 연결
        }
    });
};