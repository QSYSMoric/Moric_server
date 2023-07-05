//路由数据的传递，目的：做到了路由信息和数据信息的分离
const express = require("express");
const path = require('path');
const router = express.Router();

// 处理依赖文件请求
router.use((req, res, next) => {
    const dependencyPath = req.path; // 获取请求的依赖文件路径
    if (dependencyPath) {
      // 找到并发送对应的依赖文件
      res.sendFile(path.join(__dirname, '../../' , dependencyPath));
    } else {
      next(); // 如果请求的是 /dependencies 路径本身，交给后续中间件处理
    }
});

module.exports = router;