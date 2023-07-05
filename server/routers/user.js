//路由信息的跳转
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userAuthentication = require("../utils/userAuthentication");
const groupChatModule = require("../controllers/chatController");

//初始化频道聊天记录
groupChatModule.createGroupChatList(90000);
groupChatModule.addChatRecord(90000,[
    {
        avatar_type: "jpg",
        messageData: "测试数据1",
        self: true,
        timeing: "00:03",
        userName: "测试用户3",
        user_id: 10003
    },
    {
        avatar_type: "jpg",
        messageData: "测试数据2",
        self: true,
        timeing: "00:03",
        userName: "测试用户4",
        user_id: 10004
    },
    {
        avatar_type: "jpg",
        messageData: "测试数据3",
        self: true,
        timeing: "00:03",
        userName: "测试用户5",
        user_id: 10005
}]);
//注册按钮
router.post('/register',userController.create);
//登录按钮
router.post('/login',userController.login);
//处理用户头像
router.post('/avatar',userAuthentication.checkTokenMiddleware,userController.avatar);
//初始化用户列表
router.get('/getUserlist',userAuthentication.checkTokenMiddleware,userController.getUserlist);
//获取指定群聊聊天记录
router.get('/getGroupChatHistoryById',userAuthentication.checkTokenMiddleware,userController.getGroupChatHistoryById);
//获取私人历史聊天记录
router.get('/getPrivateLetterList',userAuthentication.checkTokenMiddleware,userController.getPrivateLetterList);

module.exports = router;