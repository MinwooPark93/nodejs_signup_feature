const express = require("express");
const router = express.Router();
const Users = require("../schemas/users");

router.get("/users", async (req, res) => {
  const arrUserList = await Users.find({});
  console.log(arrUserList);
  res.send("users 목록을 내려줄 예정입니다.");
});

router.post("/users", async (req, res) => {
  const { userId, userName, userAge, userDept, userMemo } = req.body;
  const createResult = await Users.create({
    userId,
    userName,
    userAge,
    userDept,
    userMemo,
  });
  console.log(createResult);
  res.send("User 정보를 성공적으로 전송받았습니다.");
});

router.delete("/users", async (req, res) => {
  const { userId } = req.body;
  const arrUserList = await Users.find({ userId: userId });
  console.log(arrUserList);
  if (!arrUserList.length) {
    const deleteTargetUser = arrUserList[0].userId;
    await Users.deleteOne({ userId: deleteTargetUser });
  } else {
    res.send("해당 유저가 없습니다.");
  }
  res.send("User 정보를 삭제하는데 성공했습니다.");
});

router.put("/users", async (req, res) => {
  // 1. 유저정보를 변경 할 고유 아이디를 받는다.
  // 2. 변경 할 유저정보를 받아온다.
  const { userId, userName, userAge, userDept, userMemo } = req.body;
  // 데이터의 존재유무를 반드시 확인해야만하는 절차가 필요하다면 joi library를 참고해보자.

  // 3. mongoDB의 해당 유저를 찾아와,
  const arrUserList = await Users.find({ userId: userId });
  console.log(arrUserList);
  if (arrUserList.length) {
    console.log("if문 타는거냐?");
    const updateTargetUser = arrUserList[0].userId;

    // 4. 받아온 데이터를 업데이트한다.
    await Users.updateOne(
      {
        userId: updateTargetUser,
      },
      { $set: { userName, userAge, userDept, userMemo } }
    );
    res.send("어 완료.");
  } else {
    res.send("해당 유저가 없으므로 변경을 할 수 없다.");
  }
});

module.exports = router;
