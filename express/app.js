const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(require("cors").apply());
const port = 3001;

// 登录接口
app.post("/api/login", (req, res) => {
  let query = req.query;
  res.send({
    status: 0,
    msg: "登录成功",
    data: query,
  });
});
// 注册接口
app.post("/api/reguser", (req, res) => {
  let query = req.query;
  res.send({
    status: 0,
    msg: "成功",
    data: query,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
