const userList = require('../userDirectory/directory');
const socketAccount = require("../strategies/scoketAccount");
//记录用户登录的id
module.exports = function(socket){
    //用户建立连接
    socket.on("token",(token)=>{
        socketAccount.token(token,socket);
    });
    //用户加入默认群聊频道
    socket.on("JoinDefaultChannel",(room_id)=>{
        socketAccount.JoinDefaultChannel(socket,room_id);
    });
    //接收私聊消息
    socket.on("PrivateMessageModule",(to_userId,Message)=>{
        socketAccount.sendPrivateMessageModule(socket,to_userId,Message);
    });
    //接收群聊消息
    socket.on("GroupMessageModule",(to_userId,Message)=>{
        socketAccount.sendGroupMessageModule(socket,to_userId,Message);
    })
    //用户断开连接
    socket.on('disconnect',()=>{
        socketAccount.disconnect(socket);
    });
}