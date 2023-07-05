//路由数据的传递，目的：做到了路由信息和数据信息的分离
//用户数据库
const usersDatabase = require("./database/userDatabaseControl");
const userListObj = require("../userDirectory/directory");
const userAccount = require("../strategies/userAccount");
const now = require('../../plugins/day');
const groupChatModule = require("./chatController");
const privateChatModule = require("./privateLetterController");
//注册按钮
exports.create = async function(req,res){
    //注册组件
    let {name,password,img,imgtype} = req.body;
    //插入之前先检测用户名是否重名？
    let flag = false;
    const sqlValue1 = 'SELECT user_id FROM users WHERE username = ?';
    const userData = usersDatabase.selectUser(sqlValue1,[name]);
    await userData.then((data)=>{
        flag = false;
    }).catch(()=>{
        flag = true;
    });
    if(!flag){
        console.log("操作状态" + flag);
        return res.json({ 
            code:"3600",
            alert:'注册失败(用户名重复)：',
            state:false,
            data:null
        });
    }
    //如果用户名没有重名
    let sqlValue = 'INSERT INTO users (username,password,avatar,avatar_type,created_at) VALUES(?,?,?,?,?)';
    let state = usersDatabase.createUser(sqlValue,[name , password , img , imgtype, now.nowTime()]);
    await state.then((data)=>{
        let body = {
            user_id:null,
            username:name,
            avatar_type:imgtype
        }
        /* {
            username: '测试用户6',
            user_id: 10006,
            avatar_type: 'jpg',
        } */
        userAccount.userRegistrationVerification(data,res,body);
    }).catch((err)=>{
        return res.json(err);
    });
}

//登录按钮
exports.login = function(req,res){
    let {userID,password} = req.body;
    const sqlValue = 'SELECT * FROM users WHERE user_id = ?';
    const userData = usersDatabase.selectUser(sqlValue,[userID]);
    userData.then((data)=>{
        if(password != data.userMsg.password){
            return res.json({
                alert:"密码错误",
                code:"3100",
                state:false,
                token:null,
                body:{
                    user:null
                }
            });
        }
        userAccount.userloginAuthentication(data,res);
    }).catch((err)=>{
        //没有这个账号
        return res.send(err);  
    })
}

//处理头像资源
exports.avatar = function(req,res){
    let { user_id } = req.body;
    const sqlValue = 'SELECT * FROM users WHERE user_id = ?';
    const userData = usersDatabase.selectUser(sqlValue,[user_id]);
    userData.then((data)=>{
        const {userMsg} = data;
        const base64String = userMsg.avatar.toString();
        res.json({
            alert:"操作成功",
            code:"1000",
            state:true,
            body:base64String
        });
    }).catch((err)=>{
        //没有这个账号
        return res.json({
            alert:"操作成功",
            code:"3100",
            state:false,
            body:err
        });  
    });
}

//处理用户列表
exports.getUserlist = function(req,res){
    let { user_id } = req.query;
    let userListArr = userListObj.getBody().userListValues;
    let newArr = userListArr.filter((element)=>{
        return element.user_id == user_id?false:true;
    });
    res.json({
        alert:"操作成功",
        code:"1000",
        state:true,
        body:newArr
    });
}

//获取群聊历史聊天记录
exports.getGroupChatHistoryById = function(req,res){
    let { room_id } = req.query;
    let charList = groupChatModule.getChatHistory(Number(room_id));
    res.json({
        alert:"操作成功",
        code:"1000",
        state:true,
        body:charList
    });
}

//获取私人历史聊天记录
exports.getPrivateLetterList = function(req,res){
    let { fromId,toId } = req.query;

    let charList = privateChatModule.getPrivateChat(fromId,toId);

    res.json({
        alert:"操作成功",
        code:"1000",
        state:true,
        body:charList
    });
} 