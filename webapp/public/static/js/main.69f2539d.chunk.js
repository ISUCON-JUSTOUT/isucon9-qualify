(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,a,t){e.exports=t(150)},126:function(e,a,t){},127:function(e,a,t){},150:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(8),c=t.n(i),o=(t(126),t(33)),l=t(25),s=(t(127),t(183)),m=t(22),u=t(23),p=t(34),d=t(32),h=t(35),g=t(20),f=t(177),b=t(178),v=t(180),E=t(193),y=t(181),w=t(182),N=t(179),j=t(27),O=t.n(j),C=t(61),_=t.n(C),x=t(43),S=t.n(x),I=function(e){var a=e.errMsg,t=[],n=!0,i=!1,c=void 0;try{for(var o,l=a[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var s=o.value;t.push(r.a.createElement(S.a,{item:!0,xs:!0},r.a.createElement(_.a,{key:s,variant:"body2",color:"error"},s)))}}catch(m){i=!0,c=m}finally{try{n||null==l.return||l.return()}finally{if(i)throw c}}return r.a.createElement(S.a,{container:!0},t)},k=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(d.a)(a).call(this,e))).state={accountName:"",password:""},t._onSubmit=t._onSubmit.bind(Object(g.a)(t)),t._onChangeAccountName=t._onChangeAccountName.bind(Object(g.a)(t)),t._onChangePassword=t._onChangePassword.bind(Object(g.a)(t)),t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"_onSubmit",value:function(e){e.preventDefault();var a=this.state,t=a.accountName,n=a.password;this.props.onSubmit(t,n)}},{key:"_onChangeAccountName",value:function(e){this.setState({accountName:e.target.value})}},{key:"_onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){var e=this.state,a=e.accountName,t=e.password,n=this.props.classes;return r.a.createElement("div",{className:n.paper},r.a.createElement(b.a,{className:n.avatar},r.a.createElement(N.a,null)),r.a.createElement(v.a,{component:"h1",variant:"h5"},"\u30ed\u30b0\u30a4\u30f3\u30da\u30fc\u30b8"),r.a.createElement("form",{className:n.form,noValidate:!0},r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"accountName",label:"\u30e6\u30fc\u30b6\u540d",name:"accountName",autoFocus:!0,value:a,onChange:this._onChangeAccountName}),r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"\u30d1\u30b9\u30ef\u30fc\u30c9",name:"password",type:"password",autoComplete:"current-password",value:t,onChange:this._onChangePassword}),0!==this.props.errors.length&&r.a.createElement(I,{errMsg:this.props.errors}),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:this._onSubmit,className:n.submit},"\u30ed\u30b0\u30a4\u30f3"),r.a.createElement(w.a,{container:!0},r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(o.a,{to:"/signup"},"\u65b0\u898f\u767b\u9332\u306f\u3053\u3061\u3089")))))}}]),a}(r.a.Component),U=O()(function(e){return Object(f.a)({paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}})})(k),T=t(38),A=t(51),P=t.n(A),W=t(86),D={apiUrl:"http://localhost:8000"},z=new(function(){function e(){Object(m.a)(this,e),this.baseUrl=D.apiUrl,this.defaultHeaders={}}return Object(u.a)(e,[{key:"get",value:function(){var e=Object(W.a)(P.a.mark(function e(a){return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.baseUrl).concat(a),{method:"GET",headers:this.defaultHeaders});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(W.a)(P.a.mark(function e(a,t){var n,r;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",mode:"same-origin",headers:Object.assign({},this.defaultHeaders,{"Content-Type":"application/json"})},t&&(r=JSON.stringify(t),n.body=r),e.next=4,fetch("".concat(this.baseUrl).concat(a),n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}()}]),e}()),M=t(13),q="LOGIN_SUCCESS",F="LOGIN_FAIL";function L(e,a){return function(t){z.post("/login",{account_name:e,password:a}).then(function(e){if(200!==e.status)throw new Error("HTTP status not 200");return e.json()}).then(function(e){var a;t((a={userId:e.id,accountName:e.account_name,address:e.address},{type:q,payload:a})),t(Object(M.d)("/items"))}).catch(function(e){var a;t((a={errorMsg:[e.message]},{type:F,payload:a}))})}}var R=function(e){function a(){return Object(m.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(U,this.props)}}]),a}(r.a.Component),B=Object(T.c)(function(e){return{errors:e.formError.errorMsg}},function(e){return{onSubmit:function(a,t){e(L(a,t))}}})(R),G=Object(s.a)(function(e){return{paper:{marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"}}}),H=t(24),J=t.n(H),V=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(d.a)(a).call(this,e))).state={accountName:"",address:"",password:""},t._onSubmit=t._onSubmit.bind(Object(g.a)(t)),t._onChangeAccountName=t._onChangeAccountName.bind(Object(g.a)(t)),t._onChangeAddress=t._onChangeAddress.bind(Object(g.a)(t)),t._onChangePassword=t._onChangePassword.bind(Object(g.a)(t)),t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"_onSubmit",value:function(e){e.preventDefault(),this.props.register({account_name:this.state.accountName,address:this.state.address,password:this.state.password})}},{key:"_onChangeAccountName",value:function(e){this.setState({accountName:e.target.value})}},{key:"_onChangeAddress",value:function(e){this.setState({address:e.target.value})}},{key:"_onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){var e=this.props.classes,a=this.state,t=a.accountName,n=a.address,i=a.password;return r.a.createElement("div",{className:e.paper},r.a.createElement(b.a,{className:e.avatar},r.a.createElement(N.a,null)),r.a.createElement(v.a,{component:"h1",variant:"h5"},"\u65b0\u898f\u767b\u9332"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"\u30e6\u30fc\u30b6\u540d",name:"name",value:t,onChange:this._onChangeAccountName,autoFocus:!0}),r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"address",label:"\u4f4f\u6240",name:"address",value:n,onChange:this._onChangeAddress}),r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"\u30d1\u30b9\u30ef\u30fc\u30c9",name:"password",type:"password",value:i,onChange:this._onChangePassword}),0!==this.props.errors.length&&r.a.createElement(I,{errMsg:this.props.errors}),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:this._onSubmit},"\u65b0\u898f\u767b\u9332"),r.a.createElement(w.a,{container:!0},r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(o.a,{to:"/signin"},"\u3059\u3067\u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u304a\u6301\u3061\u306e\u65b9\u306f\u3053\u3061\u3089")))))}}]),a}(r.a.Component),K=O()(function(e){return Object(f.a)({paper:{marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}})})(V),Q="REGISTER_SUCCESS",X="REGISTER_FAIL";function Y(e){return function(a){z.post("/register",e).then(function(e){if(200!==e.status)throw new Error("HTTP status not 200");return e.json()}).then(function(e){var t;a((t={userId:e.id,accountName:e.account_name,address:e.address},{type:Q,payload:t})),a(Object(M.d)("/items"))}).catch(function(e){var t;a((t={errorMsg:[e.message]},{type:X,payload:t}))})}}var Z,$=function(e){function a(){return Object(m.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(K,this.props)}}]),a}(r.a.Component),ee=Object(T.c)(function(e){return{errors:e.formError.errorMsg}},function(e){return{register:function(a){e(Y(a))}}})($),ae=J()(function(e){return{paper:{marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"}}}),te=t(187),ne=t(184),re=t(185),ie=J()(function(e){return{itemImage:{height:"100%"}}}),ce=function(e){var a=e.itemId,t=e.imageUrl,n=e.title,i=e.price,c=ie();return r.a.createElement(ne.a,null,r.a.createElement(o.a,{to:"/items/".concat(a)},r.a.createElement("img",{className:c.itemImage,src:t,alt:n})),r.a.createElement(re.a,{title:n,subtitle:"\xa5".concat(i)}))},oe=t(186),le=J()(function(e){return{grid:{width:"300px",height:"300px"}}}),se=function(e){var a=e.items,t=le(),n=[],i=!0,c=!1,o=void 0;try{for(var l,s=a[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var m=l.value;n.push(r.a.createElement(oe.a,{className:t.grid,key:m.id},r.a.createElement(ce,{itemId:m.id,imageUrl:m.thumbnailUrl,title:m.name,price:m.price})))}}catch(u){c=!0,o=u}finally{try{i||null==s.return||s.return()}finally{if(c)throw o}}return r.a.createElement(te.a,{cols:3},n)},me=J()(function(e){return{root:{display:"flex",flexWrap:"wrap",marginTop:e.spacing(1),justifyContent:"space-around",overflow:"hidden"}}}),ue=[{id:1,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",createdAt:"2\u65e5\u524d",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"},{id:2,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",createdAt:"2\u65e5\u524d",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"},{id:3,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",createdAt:"2\u65e5\u524d",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"},{id:4,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",createdAt:"2\u65e5\u524d",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"}],pe=t(188),de=t(189),he=J()(function(e){return{title:{margin:e.spacing(3)},itemImage:{width:"100%",maxWidth:"500px",height:"auto"},avatar:{width:"50px",height:"50px"},divider:{margin:e.spacing(1)},descSection:{marginTop:e.spacing(3),marginBottom:e.spacing(3)},link:{textDecoration:"none"},appBar:{top:"auto",bottom:0},buyButton:{margin:e.spacing(1)}}}),ge={id:1,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059",createdAt:"2\u65e5\u524d",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"},fe=t(106),be=t.n(fe),ve=t(107),Ee=t.n(ve),ye=t(190),we=t(105),Ne=t.n(we),je=t(108),Oe=t.n(je),Ce=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(d.a)(a).call(this,e))).state={imagePreviewUrl:""},t._handleImageChange=t._handleImageChange.bind(Object(g.a)(t)),t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"_handleImageChange",value:function(e){var a=this;if(e.preventDefault(),null!==e.target.files){var t=new FileReader,n=e.target.files[0];t.onloadend=function(){if("string"!==typeof t.result)throw new Error;a.setState({file:n,imagePreviewUrl:t.result})},t.readAsDataURL(n)}}},{key:"render",value:function(){var e=this.props.classes,a=this.state.imagePreviewUrl,t=null;return console.log(a),t=a?r.a.createElement("img",{alt:"\u30d7\u30ec\u30d3\u30e5\u30fc",src:a}):r.a.createElement(be.a,null,r.a.createElement(Ee.a,{className:e.avatar},r.a.createElement(ye.a,null)),r.a.createElement(_.a,null,"\u5546\u54c1\u753b\u50cf")),r.a.createElement(S.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(S.a,{item:!0,xs:8},t),r.a.createElement(S.a,{item:!0,xs:4},r.a.createElement("input",{accept:"image/*",className:e.upload,id:"outlined-button-file",type:"file",onChange:this._handleImageChange}),r.a.createElement("label",{htmlFor:"outlined-button-file"},r.a.createElement(Oe.a,{variant:"outlined",component:"span",className:e.button},"Upload"))))}}]),a}(r.a.Component),_e=O()(function(e){return Ne()({upload:{display:"none"},avatar:{margin:e.spacing(1)},button:{margin:e.spacing(1)}})})(Ce),xe=Object(s.a)(function(e){return{paper:{marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"80%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}),Se=J()(function(e){return{avatar:{margin:e.spacing(3),width:"100px",height:"100px"},itemList:{marginTop:e.spacing(4)}}}),Ie=[{id:1,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",createdAt:"2\u65e5\u524d",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"},{id:2,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",createdAt:"2\u65e5\u524d",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"},{id:3,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",createdAt:"2\u65e5\u524d",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"},{id:4,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",createdAt:"2\u65e5\u524d",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"}],ke={id:1235,accountName:"Kirin",address:"Tokyo"},Ue=t(111),Te=t(191),Ae=t(192),Pe=Object(Ue.a)({palette:{background:{default:"white"}}}),We=function(e){var a=e.children;return r.a.createElement(Te.a,{theme:Pe},r.a.createElement(Ae.a,{maxWidth:"lg",children:a}))},De=[{path:"/",component:function(){return r.a.createElement("div",null,"Top Page")},pageName:"Top page"},{path:"/signin",component:function(){var e=G();return r.a.createElement("div",{className:e.paper},r.a.createElement(B,null))},pageName:"Sign in page"},{path:"/signup",component:function(){var e=ae();return r.a.createElement("div",{className:e.paper},r.a.createElement(ee,null))},pageName:"Sign up page"},{path:"/items",component:function(){var e=me(),a=ue;return r.a.createElement("div",{className:e.root},r.a.createElement(se,{items:a}))},pageName:"Item list page"},{path:"/items/:item_id",component:function(){var e=he(),a=ge;return r.a.createElement("div",null,"Item Page",r.a.createElement(v.a,{className:e.title,variant:"h3"},a.name),r.a.createElement(w.a,{container:!0,spacing:2},r.a.createElement(w.a,{item:!0},r.a.createElement("img",{className:e.itemImage,alt:a.name,src:a.thumbnailUrl})),r.a.createElement(w.a,{item:!0,xs:12,sm:!0,container:!0},r.a.createElement(w.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement("div",{className:e.descSection},r.a.createElement(v.a,{variant:"h4"},"\u5546\u54c1\u8aac\u660e"),r.a.createElement(pe.a,{className:e.divider,variant:"middle"}),r.a.createElement(v.a,{variant:"body1"},a.description)),r.a.createElement("div",{className:e.descSection},r.a.createElement(v.a,{variant:"h4"},"\u51fa\u54c1\u8005"),r.a.createElement(pe.a,{className:e.divider,variant:"middle"}),r.a.createElement(w.a,{container:!0,direction:"row",justify:"center",alignItems:"center",wrap:"nowrap",spacing:2},r.a.createElement(w.a,{item:!0},r.a.createElement(o.a,{className:e.link,to:"/users/".concat(1)},r.a.createElement(b.a,{className:e.avatar},'"T"'))),r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(v.a,{variant:"body1"},'"TODO"')))))))),r.a.createElement(de.a,{color:"primary",position:"fixed",className:e.appBar},r.a.createElement(w.a,{container:!0,spacing:2,direction:"row",alignItems:"center"},r.a.createElement(w.a,{item:!0},r.a.createElement(v.a,{variant:"h5"},"\xa5",a.price)),r.a.createElement(w.a,{item:!0},r.a.createElement(y.a,{variant:"contained",className:e.buyButton},"\u8cfc\u5165")))))},pageName:"Item page"},{path:"/items/:item_id/edit",component:function(){return r.a.createElement("div",null,"Item Edit Page")},pageName:"Item edit page"},{path:"/sell",component:function(){var e=xe();return r.a.createElement("div",{className:e.paper},r.a.createElement(v.a,{component:"h1",variant:"h5"},"\u51fa\u54c1\u30da\u30fc\u30b8"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(_e,null),r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"\u5546\u54c1\u540d",name:"name",autoFocus:!0}),r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"description",label:"\u5546\u54c1\u8aac\u660e",name:"name",multiline:!0}),r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"price",label:"\u5024\u6bb5",name:"price"}),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"\u51fa\u54c1\u3059\u308b")))},pageName:"Sell page"},{path:"/transactions/:transaction_id",component:function(){return r.a.createElement("div",null,"Transaction Page")},pageName:"Transaction page"},{path:"/users/:user_id",component:function(){var e=Se(),a=ke,t=Ie;return r.a.createElement("div",null,r.a.createElement("p",null,"User Page"),r.a.createElement(w.a,{container:!0,direction:"row",justify:"center",alignItems:"center",wrap:"nowrap",spacing:2},r.a.createElement(w.a,{item:!0},r.a.createElement(b.a,{className:e.avatar},a.accountName.charAt(0))),r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(v.a,{variant:"h3"},a.accountName))),r.a.createElement(pe.a,{variant:"middle"}),r.a.createElement("div",{className:e.itemList},r.a.createElement(se,{items:t})))},pageName:"User page"},{path:"/users/:user_id/setting",component:function(){return r.a.createElement("div",null,"User setting Page")},pageName:"User setting page"}],ze=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("ul",null,function(){for(var e=[],a=0,t=De;a<t.length;a++){var n=t[a];e.push(r.a.createElement("li",null,r.a.createElement(o.a,{to:n.path},n.pageName)))}return e}())),r.a.createElement("hr",null),r.a.createElement(l.c,null,function(){for(var e=[],a=function(){var a=n[t];e.push(r.a.createElement(l.a,{exact:!0,path:a.path,component:function(){return r.a.createElement(We,null,a.component())}}))},t=0,n=De;t<n.length;t++)a();return e}()))},Me=t(41),qe=t(69),Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case q:case Q:return Object(qe.a)({},e,a.payload);default:return e}},Le={errorMsg:[]},Re=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case F:case X:return Object(qe.a)({},e.payload);default:return Le}},Be=t(48),Ge=t(18),He=t(99),Je=t(109),Ve=t(110),Ke=Object(Ge.a)(),Qe=Object(Me.createStore)((Z=Ke,Object(Me.combineReducers)({router:Object(Be.b)(Z),authStatus:Fe,formError:Re})),Object(Ve.composeWithDevTools)(Object(Me.applyMiddleware)(Je.a,Object(He.a)(Ke))));c.a.render(r.a.createElement(T.a,{store:Qe},r.a.createElement(Be.a,{history:Ke},r.a.createElement(ze,null))),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.69f2539d.chunk.js.map