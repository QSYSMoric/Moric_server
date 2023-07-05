const userList = {};
/* {
    username: '测试用户6',
    user_id: 10006,
    avatar_type: 'jpg',
    lastMsg: '测试数据',
    timing: '17:02'
} */
function addUser(user_id,data){
    if(!userList[user_id]){ // 如果该 user_id 对应的数据存在
        userList[user_id] = data;// 添加数据
    }
}

function updateUser(user_id, data) {
    if (userList[user_id]) { // 如果该 user_id 对应的数据存在
        userList[user_id] = data; // 更新数据对象
    }
}

function deleteUser(user_id) {
    if (userList[user_id]) { // 如果该 user_id 对应的数据存在
        delete userList[user_id]; // 删除数据对象
    }
}

function getUser(user_id) {
    return userList[user_id];
}

function getBody(){
    return {
        userListValues: Object.values(userList)
    }
}

module.exports = {
    addUser,
    updateUser,
    deleteUser,
    getUser,
    getBody
}