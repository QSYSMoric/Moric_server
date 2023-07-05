"use strict";

//导入token
const jwt = require('jsonwebtoken');
//创建token
let secretKey = 'Moric';

//创建并返回一个token
const createToken = function(data){
    return jwt.sign(data,secretKey,{
        expiresIn:60*60*24
    });
}

//校验token获取数据
const getTokenData = async function(token){
    //判断是否含有token
    if(!token){
        return Promise.reject({
            code:"20001",
            alert:"没有token",
            data:null
        });
    }
    //校验成功
    return new Promise((resolve, reject)=>{
        jwt.verify(token,secretKey,(err,data)=>{
            if(err){
                reject({
                    code:"20002",
                    state:false,
                    alert:"token过期",
                    data:null,
                    err
                });
            }
            resolve({
                code:"20000",
                state:true,
                alert:"校验成功",
                data
            });
        });
    }); 
}

//token校验
const checkTokenMiddleware = (req,res,next)=>{
    let token = req.get("token");
    //没有token令牌
    if(!token){
        return res.json({
            code:"2600",
            alert:"token 缺少",
            state:false,
            data:null
        });
    }

    //校验成功
    jwt.verify(token,secretKey,(err,data)=>{
        if(err){
            return res.json({
                code:"2100",
                alert:"验证出错",
                state:false,
                data:null
            });
        }
        next();
    });
}

module.exports = {
    createToken,
    getTokenData,
    checkTokenMiddleware
}