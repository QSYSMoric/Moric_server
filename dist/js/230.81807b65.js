"use strict";(self["webpackChunkmoric_app"]=self["webpackChunkmoric_app"]||[]).push([[230],{3044:function(e,t,a){a.d(t,{i:function(){return r}});a(2801),a(1439),a(7585),a(5315),a(2062);var s=a(1020),n=a(56);const r=(0,s.Q_)("imgCounter",{state(){return{imageList:new Map}},actions:{async requestImage(e,t){return this.imageList.has(e)?this.getPicture(e):new Promise(((a,s)=>{(0,n.Z)({url:"/moric/avatar",method:"post",data:{user_id:e}}).then((s=>{s.data.body&&(this.savePicture(s.data.body,e,t),a(this.getPicture(e)))})).catch((e=>{console.log(e),s("失败")}))}))},savePicture(e,t,a){let s=null;if(/^data:.*;base64,/.test(e)){const t=atob(e.split(",")[1]),n=new Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);s=new Blob([new Uint8Array(n)],{type:`image/${a}`})}else s=new Blob([e],{type:`image/${a}`});this.imageList.set(t,s)},getPicture(e){let t=null;return this.imageList.get(e)&&(t=window.URL.createObjectURL(this.imageList.get(e))),t},clearImages(){for(const[e,t]of imageList.entries())URL.revokeObjectURL(t),this.imageList.delete(e)}}})},2230:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var s=a(3396);const n={class:"MoricChatInterface"};function r(e,t,a,r,c,o){const i=(0,s.up)("MoricChatlnterfaceNav"),l=(0,s.up)("MoricChatinterfaceConent"),u=(0,s.up)("MoricChatlnterfaceTaskbar");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(i,{chatName:r.chatMessage.toName},null,8,["chatName"]),(0,s._)("div",n,[(0,s.Wm)(l,{toId:r.chatMessage.toId},null,8,["toId"])]),(0,s.Wm)(u,{chatUser:r.chatMessage},null,8,["chatUser"])],64)}var c=a(4870),o=a(2483),i=a(4239),l=a(3017),u=a.n(l),g=a(9242),d=a(7139);const m={class:"ChatlinterFaceNav"},h={class:"topLeft"},p={class:"stateMsg"},f={class:"chatLogo"};function v(e,t,a,n,r,c){return(0,s.wg)(),(0,s.iD)("div",m,[(0,s._)("div",h,[(0,s._)("a",{onClick:t[2]||(t[2]=(0,g.iM)(((...e)=>n.goTo&&n.goTo(...e)),["stop"])),class:"black"},[(0,s._)("div",{class:(0,d.C_)(["blackIcon",n.active]),onTouchstartPassive:t[0]||(t[0]=(0,g.iM)(((...e)=>n.toggleClass&&n.toggleClass(...e)),["stop"])),onTouchendPassive:t[1]||(t[1]=(0,g.iM)(((...e)=>n.toggleClass&&n.toggleClass(...e)),["stop"]))},"",34)]),(0,s._)("div",p,(0,d.zw)(n.chatMessage.name),1)]),(0,s._)("div",f,[(0,s._)("div",{class:(0,d.C_)(["chatIcon",{active:n.chatLogo.flag}]),onClick:t[3]||(t[3]=(0,g.iM)(((...e)=>n.switchStyle1&&n.switchStyle1(...e)),["stop"]))},"  ",2),(0,s._)("div",{class:(0,d.C_)(["chatIcon",{active:!n.chatLogo.flag}]),onClick:t[4]||(t[4]=(0,g.iM)(((...e)=>n.switchStyle2&&n.switchStyle2(...e)),["stop"]))},"  ",2)])])}var M={name:"MoricChatlnterfaceNav",props:["chatName"],setup(e){const t=(0,o.tv)();function a(){t.replace({name:"MoricMsg"})}let s=(0,c.qj)({flag:!0}),n=(0,c.iH)({active:!1});function r(){s.flag=!0}function i(){s.flag=!1}function l(){n.value=!0}const u=(0,c.qj)({name:e.chatName});return{chatLogo:s,active:n,chatMessage:u,goTo:a,switchStyle1:r,switchStyle2:i,toggleClass:l}}},C=a(89);const _=(0,C.Z)(M,[["render",v],["__scopeId","data-v-39848d0c"]]);var y=_;const w={class:"ChatinterfaceConent"};function I(e,t,a,n,r,c){const o=(0,s.up)("MoricChatinterfaceMsgItem"),i=(0,s.Q2)("listLoding");return(0,s.wg)(),(0,s.iD)("ul",w,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.chatMessageTemp,((e,t)=>(0,s.wy)(((0,s.wg)(),(0,s.iD)("li",{key:t,ref_for:!0,ref:"child"},[(0,s.Wm)(o,{userItem:e},null,8,["userItem"])])),[[i]]))),128))])}const b={class:"chatAvater loading"},D=["src"],S={key:1,class:"defaultAvatar"},N={class:"message"},k={class:"userName"},L={class:"messageData"},U={class:"messageValue"};function T(e,t,a,n,r,c){return(0,s.wg)(),(0,s.iD)("div",{class:(0,d.C_)(["MoricChatinterfaceMsgItem",n.myMessageClass])},[(0,s._)("div",b,[n.messageUser.userAvater?((0,s.wg)(),(0,s.iD)("img",{key:0,src:n.messageUser.userAvater,alt:"头像"},null,8,D)):((0,s.wg)(),(0,s.iD)("div",S,"  "))]),(0,s._)("div",N,[(0,s._)("div",k,[(0,s._)("p",null,(0,d.zw)(n.messageUser.userName),1),(0,s._)("p",null,(0,d.zw)(n.messageUser.timeing),1)]),(0,s._)("div",L,[(0,s._)("div",U,(0,d.zw)(n.messageUser.messageData),1)])])],2)}var j=a(3044),q={name:"MoricChatinterfaceMsgItem",props:["userItem"],setup(e){const t=(0,j.i)(),a=e.userItem,s=(0,c.qj)({myMessage:!0}),n=(0,c.qj)({userAvater:"",userName:a.userName,timeing:a.timeing,messageData:a.messageData,self:a.self});return s.myMessage=n.self,t.requestImage(a.user_id,"jpg").then((e=>{n.userAvater=e})),{myMessageClass:s,messageUser:n}}};const A=(0,C.Z)(q,[["render",T],["__scopeId","data-v-f79aeab2"]]);var H=A,P=a(1917),$={name:"MoricChatinterfaceConent",components:{MoricChatinterfaceMsgItem:H},props:["toId"],setup(e){const t=(0,c.iH)(null);let a=(0,P.z)(),n=a.getChatRecordList(e.toId);return(0,s.YP)(n,(()=>{(0,s.Y3)((()=>{window.scroll({top:document.body.scrollHeight,behavior:"smooth"})}))}),{deep:!0}),{child:t,chatMessageTemp:n}}};const F=(0,C.Z)($,[["render",I]]);var Z=F;const z=e=>((0,s.dD)("data-v-200daf36"),e=e(),(0,s.Cn)(),e),R=z((()=>(0,s._)("div",{class:"inputIcon"},"  ",-1))),V={class:"inputTest"},Y={class:"inputButton"};function W(e,t,a,n,r,c){return(0,s.wg)(),(0,s.iD)("div",{class:"MoricChatlnterfaceTaskbar",onKeyup:t[2]||(t[2]=(0,g.D2)((0,g.iM)(((...e)=>n.sendMessageFun&&n.sendMessageFun(...e)),["stop"]),["enter"]))},[R,(0,s._)("div",V,[(0,s.wy)((0,s._)("input",{type:"text",title:"inputMessage","onUpdate:modelValue":t[0]||(t[0]=e=>n.sendValue.data=e)},null,512),[[g.nr,n.sendValue.data]])]),(0,s._)("div",Y,[(0,s._)("div",{class:"button",onClick:t[1]||(t[1]=(0,g.iM)(((...e)=>n.sendMessageFun&&n.sendMessageFun(...e)),["stop"]))}," 发送 ")])],32)}function B(){const e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),n=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0"),c=String(e.getSeconds()).padStart(2,"0");return{year:t,month:a,day:s,hours:n,minutes:r,seconds:c}}let K={getMonthDayHoursMinutesSeconds(){const e=B();return`${e.month}-${e.day} ${e.hours}:${e.minutes}`},getHoursMinutesSeconds(){const e=B();return`${e.hours}:${e.minutes}`}};var O={getCurrentDateTime:B,nowDay:K},Q=a(8101),x={name:"MoricChatlnterfaceTaskbar",props:["chatUser"],setup(e){let t=(0,P.z)();const a=(0,c.qj)({data:""}),{nowDay:s}=O,{chatUser:n}=e;function r(){if(!a.data)return void alert("不可为空");let e=s.getHoursMinutesSeconds();const r={user_id:n.fromId,userName:n.fromnName,avatar_type:n.avatar_type,timeing:e,self:!0,messageData:a.data};t.addChatRecord(Number(n.toId),r),Q.Z.sendMessage(Number(n.toId),r),a.data=""}return{sendValue:a,sendMessageFun:r}}};const E=(0,C.Z)(x,[["render",W],["__scopeId","data-v-200daf36"]]);var G=E,J={name:"MoricChatInterface",components:{MoricChatlnterfaceNav:y,MoricChatinterfaceConent:Z,MoricChatlnterfaceTaskbar:G},setup(){const e=(0,o.yj)(),t=(0,i.A)(),a=(0,c.qj)({fromnName:t.self.username,fromId:t.self.user_id,avatar_type:t.self.avatar_type,toName:e.query.chat_name,toId:e.query.chat_id});return u().publish(`${a.toId}readed`),{chatMessage:a}}};const X=(0,C.Z)(J,[["render",r]]);var ee=X}}]);
//# sourceMappingURL=230.81807b65.js.map