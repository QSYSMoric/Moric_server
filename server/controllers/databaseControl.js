//路由数据的传递，目的：做到了路由信息和数据信息的分离
const mysql = require('mysql');
//连接数据库
let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

// 测试连接
connection.connect(err=>{
    if(err){
        console.log("数据库连接失败");
    }else{
        console.log('数据库连接成功');
    }
});

//查询
const selectUser = async function(sql,field){
    return new Promise((resolve,reject)=>{
        connection.query(sql,field,function(err,rows){
            if(err){
                //没有查询到用户账户   
                return reject({ 
                    code:"3100",
                    alert:'查询失败' + err,
                    state:false,
                    data:null
                });           
            };
            if(rows.length <= 0){
                return reject({ 
                    code:"3100",
                    alert:'没有这个账号',
                    state:false,
                    data:null
                });
            };
            return resolve({
                code:"1000",
                alert:'成功',
                state:true,
                userMsg:rows[0]
            });
        });
    });
}
//插入
const createUser = async function(sql,field){
    return new Promise((resolve,reject)=>{
        connection.query(sql,field,function(err,rows){
            //插入数据失败后的结果
            if(err){
                return reject({ 
                    code:"3600",
                    alert:'注册失败(用户名重复)：' + err,
                    state:false,
                    data:null
                });
            };
            //插入数据成功后的结果
            return resolve({
                code:"1000",
                alert:'成功',
                state:true,
                userMsg:rows
            });
        });
    });
}

module.exports = {
    selectUser,
    createUser
}