//时间管理
const day = require('../../plugins/day');
//缓存仓库
const userTempList = new Map();
// userTempList => (user_id,data)
/* data内容结构
{
    userName,
    avatar,
    loginTime,
    power,
    token,
    avatar_type
} */

//是否有
function hasUser(user_id){
    return userTempList.has(user_id);
}

//建立存入
async function cacheUserInfo(user, userToken) {
    const userTemp = {};
    ({ username: userTemp.username,avatar_type:userTemp.avatar_type } = user);
    userTemp.avatar = user.avatar.toString();
    userTemp.power = 0;
    if (user.user_id === 10000) {
        userTemp.power = 1;
    };
    userTemp.loginTime = day.nowTime();
    userTemp.token = userToken;
    addUserTemp(user.user_id, userTemp); // 等待缓存操作完成
    return Promise.resolve("成功");
}

//添加用户缓存
function addUserTemp(user_id,data){
    if(!data || !user_id){
        console.log("来自缓存消息addUserTemp：内容为空");
        return false;
    }
    userTempList.set(user_id,data);
}
//删除用户缓存
function deleteUserTemp(user_id){
    if(!user_id || userTempList.size){
        console.log("来自缓存消息：没有对应的用户");
        return false;
    }
    userTempList.delete(user_id);
}
//获取用户头像
function getUserAvatar(user_id){
    if(!user_id || !userTempList.size){
        console.log("来自缓存消息：没有对应的用户");
        return false;
    }
    const { avatar } = userTempList.get(user_id);
    return avatar;
}
//获取用户的用户名
function getUserName(user_id){
    if(!user_id || !userTempList.size){
        console.log("来自缓存消息：没有对应的用户");
        return false;
    }
    const { username } = userTempList.get(user_id);
    return username;
}
//获取用户的登录时间
function getUserLoginTime(user_id){
    if(!user_id || !userTempList.size){
        console.log("来自缓存消息：没有对应的用户");
        return false;
    }
    const { loginTime } = userTempList.get(user_id);
    return loginTime;
}
//获取用户权限信息
function getUserPower(user_id){
    if(!user_id || !userTempList.size){
        console.log("来自缓存消息：没有对应的用户");
        return false;
    }
    const { power } = userTempList.get(user_id);
    return power;
}
//获取用户头像格式
function getUserAvatar_type(user_id){
    if(!user_id || !userTempList.size){
        console.log("来自缓存消息：没有对应的用户");
        return false;
    }
    const { avatar_type } = userTempList.get(user_id);
    return avatar_type;
}
//获取用户登录凭证（token）
function getUserToken(user_id){
    if(!user_id || !userTempList.size){
        console.log("来自缓存消息：没有对应的用户");
        return false;
    }
    const { token } = userTempList.get(user_id);
    return token;
}
//清除缓存
function clearAllUserTemp(){
    userTempList.clear();
}

module.exports = {
    addUserTemp,
    deleteUserTemp,
    getUserAvatar,
    getUserName,
    getUserLoginTime,
    getUserPower,
    getUserToken,
    getUserAvatar_type,
    clearAllUserTemp,
    cacheUserInfo,
    hasUser
}