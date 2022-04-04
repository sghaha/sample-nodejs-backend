const express = require("express");
const app = express();
const port = 8080; // 서버 포트 번호

const dump = require("./routes/dump"); //해당 파일에서 지정한 라우트를 사용할 예정

const gracefulShutdown = require("http-graceful-shutdown");

//public 안에 있는 정적파일들을 /static경로로 접근가능하게함
app.use("/static", express.static("public"));

//app.listen()으로 서버실행
server = app.listen(port, () => {
  console.log(`서버가 실행됨, https://localhost:${port}`);
});

// 클라이언트 요청 body를 json으로 파싱 처리
app.use(
  express.json({
    limit: "50mb", //최대 50메가
  })
);

//get 요청만 처리하는 방식 (post, put, delete도 있다)
app.get("/", (req, res) => {
  res.json([{ id: 1, username: "temp" }]);
});

//라우트 리스트
app.use("/dump", dump);

//에러를 내보자
app.get("/error", (req, res, next) => {
  next(new Error("에러드아아아")); //next를 이용해서 에러처리 핸들러로 에러전달
});

// 에러 처리 핸들러 미들웨어
app.use(function (err, req, res, next) {
  res.status(500).json({ statusCode: res.statusCode, err: err.message }); // 상태코드 500, 에러 메시지 전달
});

//https://www.npmjs.com/package/http-graceful-shutdown
gracefulShutdown(server);
