let userListObj = require("../userDirectory/directory");
const { getTokenData } = require("../utils/userAuthentication");
const userCacheModule = require("../strategies/userCacheModule");
const { selectUser } = require('../controllers/database/userDatabaseControl');
const groupChatModule = require('../controllers/chatController');
const privateChatModule = require("../controllers/privateLetterController");

//记录用户登录的id
const visitor = new Map();
const day = require('../../plugins/day');

const io = global.io;

module.exports = {
    //连接校验
    token(token,socket){
        getTokenData(token).then((body)=>{
            //记录用户
            visitor.set(socket.id,body.data.id);
            let user_id = body.data.id;
            console.log(`${user_id}登入了`);
            //用户加入独属自己的房间
            socket.join(user_id);
            //构建用户需求
            let user = {
                username:null,
                user_id,
                avatar_type:null,
                lastMsg:"在线",
                timing:day.getHourMinute()
            }
            //如果缓存没有记录用户那么再次记录用户缓存数据
            if(!userCacheModule.hasUser(user_id)){
                const sql = "SELECT username,avatar,avatar_type From users WHERE user_id = ?";
                const userData = selectUser(sql,[user_id]);
                userData.then((data)=>{
                    const {userMsg} = data;
                    userMsg.user_id = user_id;
                    userCacheModule.cacheUserInfo(userMsg,token).then((data)=>{
                        user.username = userCacheModule.getUserName(user_id);
                        user.avatar_type = userCacheModule.getUserAvatar_type(user_id);
                        userListObj.addUser(user_id,user);
                        socket.broadcast.emit("updateUser",user);
                    });
                }).catch((err)=>{
                    console.log("数据错误" + err);
                    socket.emit("handleExpiredToken");
                });
            }else{
                user.username = userCacheModule.getUserName(user_id);
                user.avatar_type = userCacheModule.getUserAvatar_type(user_id);
                userListObj.addUser(user_id,user);
                socket.broadcast.emit("updateUser",user);
            }
        }).catch(err =>{
            console.log(err);
            socket.emit("handleExpiredToken");
        });
    },
    //连接处理
    disconnect(socket){
        userListObj.deleteUser(visitor.get(socket.id));
        socket.broadcast.emit("userExit",visitor.get(socket.id));
        console.log(`${visitor.get(socket.id)}退出了`);
        visitor.delete(socket.id);
    },
    //默认加入聊天频道
    JoinDefaultChannel(socket,room_id){
        socket.join(room_id);
        io.to(room_id).emit('publicMessages',`${visitor.get(socket.id)}加入公共频道了`); // 广播用户离开的消息
    },
    //私聊消息
    sendPrivateMessageModule(socket,room_id,Message){
        socket.join(room_id);
        console.log(`${Message.user_id}发给${room_id}`);
        //服务端存储私聊消息
        privateChatModule.addPrivateChat(Message.user_id,room_id,Message);
        socket.to(room_id).emit('PrivateChatModule',Message.user_id,Message);
    },
    //群聊消息
    sendGroupMessageModule(socket,room_id,Message){
        socket.join(room_id);
        console.log(`${Message.user_id}发给${room_id}`);
        //发布新消息
        socket.to(room_id).emit('GroupChatModule',room_id,Message);
        //服务端存储群聊消息
        groupChatModule.addChatRecord(Number(room_id),Message);
    }
}