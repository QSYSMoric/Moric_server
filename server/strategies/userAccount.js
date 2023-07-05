//token模块
const token = require('../utils/userAuthentication');
//用户历史缓存模块
const userListObj = require("../userDirectory/directory");
const day = require('../../plugins/day');
//好友表
//好友数据库
const friendsDatabase = require("../controllers/database/friendsDatabaseControl");
//用户缓存模块
const userTempList = require('../strategies/userCacheModule');

module.exports = {
    //登录身份验证
    userloginAuthentication(data,res){
        let user = {};
        const {userMsg} = data;
        ({
            user_id:user.user_id,
            username:user.username,
            avatar_type:user.avatar_type
        } = userMsg);
        //设置cookie为登录状态
        res.cookie("isLoggedin",true);
        //得到用户的token
        const currentTime = Math.floor(new Date().getTime() / 1000);
        let userToken = token.createToken({
            id:userMsg.user_id,
            password:userMsg.password,
            currentTime
        });
        /* {
            username: '测试用户6',
            user_id: 10006,
            avatar_type: 'jpg',
            lastMsg: '测试数据',
            timing: '17:02'
        } */
        const userObj = {
            username:user.username,
            user_id:user.user_id,
            avatar_type:user.avatar_type,
            lastMsg:"在线",
            timing:day.getHourMinute(),
        };
        userListObj.addUser(userMsg.user_id,userObj);
        //用户没有头像
        if(!userMsg.avatar){
            return res.json({
                alert:"登录成功",
                code:"1000",
                state:true,
                token:userToken,
                body:{
                    user
                }
            });
        }
        //缓存用户信息
        Promise.resolve(userTempList.cacheUserInfo(userMsg,userToken).then((data)=>{
            console.log(data);
        }));
        return res.json({
            alert:"登录成功",
            code:"1000",
            state:true,
            token:userToken,
            body:{
                user
            }
        });
    },
    //注册验证
    userRegistrationVerification(data,res,body){
        let {userMsg} = data;
        //得到用户的token
        const currentTime = Math.floor(new Date().getTime() / 1000);
        let userToken = token.createToken({
            id:userMsg.insertId,
            currentTime
        });
        //设置cookie为登录状态
        res.cookie("isLoggedin",true);
        body.user_id = userMsg.insertId;
        //为该用户创建独有的好友表
        Promise.resolve(friendsDatabase.createFriends(body.user_id).then((data)=>{
            console.log("来自friend数据库的消息(成功):" + data);
        },(err)=>{
            console.log("来自friend数据库的消息(失败):" + err);
        }));
        //创建返回值
        console.log(data);
        /* {
            username: '测试用户6',
            user_id: 10006,
            avatar_type: 'jpg',
            lastMsg: '测试数据',
            timing: '17:02'
        } */
        return res.json({
            alert:"注册成功",
            code:"1000",
            state:true,
            token:userToken,
            body
        });
    }
}