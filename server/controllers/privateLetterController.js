//导入聊天消息模块
const groupChatController = require("./chatController");

//创建双向映射key
function createChatKey(user_id_1,user_id_2){
    const sorted_user_ids = [user_id_1, user_id_2].sort();
    const sorted_combination_key = sorted_user_ids.join("-");
    return sorted_combination_key;
}

//创建私信缓存池
function createPrivateChat(user_id_1,user_id_2){
    //获取映射key
    const key = createChatKey(user_id_1,user_id_2);
    //创建缓存池
    groupChatController.createGroupChatList(key);
}

//获取指定聊天池
function getPrivateChat(user_id_1,user_id_2){
    //获取映射key
    const key = createChatKey(user_id_1,user_id_2);
    return groupChatController.getChatHistory(key);
}

//新增聊天信息
function addPrivateChat(user_id_1,user_id_2,Record){
    //获取映射key
    const key = createChatKey(user_id_1,user_id_2);
    groupChatController.addChatRecord(key,Record);
}

module.exports = {
    createPrivateChat,
    getPrivateChat,
    addPrivateChat
}