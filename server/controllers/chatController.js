//映射关系：群聊id,数据表
const groupChatModule = new Map();

//创建群聊历史池
function createGroupChatList(room_id){
    //首先检查缓存池里面是否已经有了聊天缓存库
    if(groupChatModule.has(room_id)){
        return;
    }
    groupChatModule.set(room_id,new Array());
}

//获取指定群聊内容
function getChatHistory(room_id){
    if(!groupChatModule.has(room_id)){
        createGroupChatList(room_id);
    }
    return groupChatModule.get(room_id);
}

//新增聊天内容
function addChatRecord(room_id,Record){
    if(!groupChatModule.has(room_id)){
        //没有指定聊天空间便创建一个
        createGroupChatList(room_id);
    };
    const chatRecordList = groupChatModule.get(room_id);
    if (Array.isArray(Record)) {
        // 如果传进来的数据是一个数组
        chatRecordList.push(...Record); // 使用扩展运算符将数组元素逐个插入
    } else {
        chatRecordList.push(Record); // 如果传进来的数据是一个单个元素，直接插入
    }
}


module.exports = {
    createGroupChatList,
    getChatHistory,
    addChatRecord
}