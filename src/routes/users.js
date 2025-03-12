const express = require("express");
const router = express.Router();
const controller = require("@biz/users/controller/userController");

// 회원 전체 목록 조회
router.get("/", controller.getAllUsers );

// 회원 상세 조회
router.get("/:id", controller.getUserById );

// 회원 등록
router.post("/", controller.createUser );

// 회원 정보 수정
router.put("/:id", controller.updateUser );

// 회원 삭제
router.delete("/:id", controller.deleteUser );
   
module.exports = router;