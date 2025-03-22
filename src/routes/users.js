const express = require("express");
const router = express.Router();
const controller = require("@biz/users/controller/userController");

router.post("/login", controller.login );

// 회원 전체 목록 조회
router.get("/", controller.getAllUsers );

router.post("/", controller.getList);

// 회원 상세 조회
router.get("/detail/:id", controller.getUserById );

// 회원 등록
router.post("/create", controller.createUser );

// 회원 정보 수정
router.put("/modify/:id", controller.updateUser );

// 회원 삭제
router.delete("/delete/:id", controller.deleteUser );
   
module.exports = router;