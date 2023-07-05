const express = require('express');
/* 处理静态资源 */
var connectHistoryApiFallback = require('connect-history-api-fallback')
const app = express();
//导入相关依赖
const ip = require('./plugins/getIp');
const server = require('http').createServer(app);
const {Server} = require('socket.io');
//导入文件处理模块
const bodyParser = require('body-parser');
//导入scoket
const io = new Server(server,{
  cors:{
    origin:"*",
    methods:["GET","POST"],
  }
});
global.io = io;
require('dotenv').config();

const port = process.env.PORT || 5000;

//服务器IP
console.log(ip());

app.use('/', connectHistoryApiFallback())
app.use(express.static('./dist'))

//模板引擎
const exphbs = require('express-handlebars');
const handlebars = exphbs.create({extname:'.hbs'});
app.engine('.hbs',handlebars.engine);
app.set('view engine','.hbs');

//配置中间件middleware,解析传入数据
app.use(express.urlencoded({limit: '50mb',extended:true}));
app.use(express.json({limit: '50mb',extended:true}));
app.use(bodyParser.json());

//配置中间件cookie处理cookie
const secretKey = "Moric";//密钥
const cookieParser=require("cookie-parser");
app.use(cookieParser(secretKey));

//配置依赖路由,处理依赖请求
const dependenciesRouter = require('./server/routers/dependenciesRouter');
app.use('/dependencies', dependenciesRouter);

//配置用户路由,处理api中的一系列请求
const routes = require('./server/routers/user');
app.use('/moric',routes);

//监听用户操作
const scoketOperationHandler = require('./server/routers/scoketOperationHandler');
io.on('connection',scoketOperationHandler);


//处理未找到
app.all('/',(req,res)=>{
    console.log(req.ip);
    res.send('404');
});

//开启服务器
server.listen(port,()=>{
  console.log(`端口号：${port}，服务启动成功`);
})