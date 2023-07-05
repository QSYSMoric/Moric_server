//路由数据的传递，目的：做到了路由信息和数据信息的分离
const mysql = require('mysql');
//连接数据库
let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_FRIENDS,
});
// 测试连接
connection.connect(err=>{
    if(err){
        console.log(err)
        console.log("好友数据库连接失败");
    }else{
        console.log('好友数据库连接成功');
    }
});

//创建一个好友表
const createFriends = async function(user_id){
    return new Promise((resolve,reject)=>{
        let sql = `
        CREATE TABLE \`friends_${user_id}\` (
            id int(11) NOT NULL AUTO_INCREMENT,
            friend_id int(11) NOT NULL,
            friend_data JSON,
            created_at datetime DEFAULT CURRENT_TIMESTAMP,
            updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            KEY friend_id (friend_id)
          ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
        `;
        connection.query(sql,(err,rows)=>{
            if(err){
                //没有查询到用户账户   
                return reject({ 
                    code:"3100",
                    alert:'创建好友失败' + err,
                    state:false,
                    data:null
                });    
            }
            return resolve({
                code:"1000",
                alert:'成功',
                state:true,
                data:rows[0]
            });
        });
    })
}

module.exports = {
    createFriends
}