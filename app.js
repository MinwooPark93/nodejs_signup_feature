const express = require("express");
const connect = require("./schemas");
// const cors = require('cors');
const app = express();
const port = 3000;

connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const usersRouter = require("./routes/users");

//app.use(cors);

app.use("/api", usersRouter);

app.listen(port, () => {
  console.log(port, "번 서버가 실행 되었습니다.");
});
