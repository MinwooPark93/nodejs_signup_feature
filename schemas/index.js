const mongoose = require("mongoose");
const connect = () => {
  mongoose //몽고디비의 기본포트 27017
    .connect("mongodb://localhost:27017/nodejs_signup_feature", {
      ignoreUndefined: true,
    })
    .catch((err) => {
      console.error(err);
    });
};
module.exports = connect;
