"use strict";(self["webpackChunkmoric_app"]=self["webpackChunkmoric_app"]||[]).push([[93],{2176:function(o,t,e){e.d(t,{Z:function(){return M}});var s=e(3396),n=e(9242),i=e(7139);const r={class:"topNavigation"},a={class:"topLeft"},l=(0,s._)("div",{class:"blackIcon"},"",-1),c=[l],u={class:"stateMsg"},p=(0,s._)("div",{class:"appLogo"},[(0,s._)("div",{class:"appIcon"},"Moric")],-1);function d(o,t,e,l,d,g){return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",a,[(0,s._)("a",{onClick:t[0]||(t[0]=(0,n.iM)(((...o)=>l.goTo&&l.goTo(...o)),["stop"])),class:"black"},c),(0,s._)("div",u,(0,i.zw)(e.name),1)]),p])}var g=e(2483),m=e(3017),h=e.n(m),_=e(4239),v=e(1917),k={name:"MoricAppNavation",props:["name","msg"],setup(o){const t=(0,g.tv)(),e=(0,v.z)();function s(){const s=(0,_.A)();s.clearUserList(),s.$reset(),e.$reset(),h().publish("clearUserList"),h().publish("scoketDisconnect"),t.replace({name:o.msg.name,path:o.msg.path})}return{goTo:s}}},f=e(89);const C=(0,f.Z)(k,[["render",d]]);var M=C},93:function(o,t,e){e.r(t),e.d(t,{default:function(){return T}});var s=e(3396);const n={class:"MoricLogin"};function i(o,t,e,i,r,a){const l=(0,s.up)("MoricAppNavation"),c=(0,s.up)("MoricLoginContent");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(l,{name:"首页",msg:{path:"/",name:"MoricLogin"}}),(0,s.Wm)(c)])}var r=e(2176),a=e(9242);const l={class:"moricLoginContent"},c=(0,s._)("div",{class:"loginTile"},[(0,s._)("h1",null," Login to your "),(0,s._)("h1",null," Id ")],-1),u={class:"loginFrom"},p={action:"#",class:"loginFromContent"},d={class:"loginId"},g={class:"loginPassword"},m=(0,s._)("div",{class:"loginCheckBox"},[(0,s._)("label",{class:"checkbox-container"},[(0,s._)("input",{type:"checkbox"}),(0,s._)("span",{class:"checkmark"}),(0,s.Uk)("隐私通知 ")])],-1),h={class:"loginSubmit"},_={class:"loginOther"},v=(0,s._)("p",null,"其他登录方式?",-1),k={class:"loginOtherContent"},f=(0,s._)("div",{class:"loginOtherContentTop"},[(0,s._)("ul",null,[(0,s._)("li",{style:{color:"#167efd"}},""),(0,s._)("li",{style:{color:"#d52c2b"}},""),(0,s._)("li",{style:{color:"#28a8ea"}},"")])],-1),C={class:"loginOtherContentBottom"};function M(o,t,e,n,i,r){return(0,s.wg)(),(0,s.iD)("div",l,[c,(0,s._)("div",u,[(0,s._)("form",p,[(0,s._)("div",d,[(0,s.wy)((0,s._)("input",{type:"text",placeholder:" Id","onUpdate:modelValue":t[0]||(t[0]=o=>n.userLogin.userID=o)},null,512),[[a.nr,n.userLogin.userID,void 0,{number:!0}]])]),(0,s._)("div",g,[(0,s.wy)((0,s._)("input",{type:"password",autocomplete:"off",placeholder:" pas","onUpdate:modelValue":t[1]||(t[1]=o=>n.userLogin.password=o)},null,512),[[a.nr,n.userLogin.password]])]),m,(0,s._)("div",h,[(0,s._)("a",{onClick:t[2]||(t[2]=(0,a.iM)(((...o)=>n.loginClick&&n.loginClick(...o)),["stop"]))},"登录")])])]),(0,s._)("div",_,[v,(0,s._)("div",k,[f,(0,s._)("div",C,[(0,s._)("p",null,[(0,s.Uk)("还没有账号?"),(0,s._)("a",{onClick:t[3]||(t[3]=(0,a.iM)(((...o)=>n.registerOnclick&&n.registerOnclick(...o)),["stop"]))},"去注册")])])])])])}var L=e(4870),b=(e(7658),e(2483)),w=e(56),I=e(4239),y=e(1917),D={router:void 0,start(){this.router=(0,b.tv)(),this.store=(0,I.A)(),this.chatObjController=(0,y.z)()},jump(){this.router.push({path:"/MoricHome/MoricMsg",name:"MoricMsg",query:{msg:"hello"}})},goRegisterContent(){this.router.push({path:"/MoricRegister",name:"MoricRegister",query:{msg:"hello"}})},loginHandler(o){(0,w.Z)({url:"/moric/login",method:"post",data:o}).then((o=>{if(o.data.state){alert(o.data.alert);const{user:t}=o.data.body;this.store.self=t,sessionStorage.setItem("token",o.data.token),sessionStorage.setItem("self",JSON.stringify(t)),this.chatObjController.user_id=t.user_id,this.jump()}else alert(o.data.alert),location.reload()}))}},O={name:"MoricLoginContent",setup(){D.start();const o=(0,L.qj)({userID:"",password:""});function t(){let t={userID:o.userID,password:o.password};t.userID&&t.password?D.loginHandler(t):alert("请输入完整信息")}function e(){D.goRegisterContent()}return{userLogin:o,loginClick:t,registerOnclick:e}}},U=e(89);const Z=(0,U.Z)(O,[["render",M]]);var j=Z,A={name:"MoricLogin",components:{MoricAppNavation:r.Z,MoricLoginContent:j}};const N=(0,U.Z)(A,[["render",i],["__scopeId","data-v-51d3b578"]]);var T=N}}]);
//# sourceMappingURL=93.13e03cfa.js.map