(this.webpackJsonpreact_demo=this.webpackJsonpreact_demo||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,,,,,,,,function(e,t,a){e.exports=a(44)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logout-icon.bb6dc57c.png"},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/loader.e4b6323e.gif"},,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/empty-list-icon.a1167211.png"},function(e,t,a){e.exports=a.p+"static/media/card-background.fd0c9d30.jpg"},function(e,t,a){e.exports=a.p+"static/media/calender-icon.15f6ce85.png"},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),l=a.n(i),o=(a(29),a(2)),s=a(3),c=a(4),m=a(5),u=a(21),d=a(10),p=a(6),h=(a(15),"logout-icon"),f="Task Scheduler",v="A simple tool to manage your task time Schedules.",g="task?",b="taskbydate?date=",y="Future date is not allowed.!",E="empty-list",k="card-background",j="calender-icon",S={homePageUrl:"/home",textLogin:" Login ",textReg:" Register "},w="Internal Server Error Please Contact To Support Team.!",N="End time should be greater than start time.!",O=function(e){Object(m.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).logout=a.logout.bind(Object(p.a)(a)),a}return Object(s.a)(n,[{key:"logout",value:function(){localStorage.removeItem("Token"),localStorage.removeItem("username"),window.location.href="/"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Header"},r.a.createElement("img",{style:{display:this.props.side_menu_visibility},src:a(30),className:"side-menu-icon",alt:h,onClick:function(){return e.logout()}}),r.a.createElement("div",{className:"title"},f,r.a.createElement("div",{className:"sub-title"},v)))}}]),n}(n.Component),T=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"overlay",style:{display:this.props.visibility},ref:"modal"},r.a.createElement("div",{className:"popup"},r.a.createElement("h3",null," ",this.props.title," ")," ",r.a.createElement("hr",null),r.a.createElement("button",{className:"btn-regular close",onClick:this.props.onClose},"x"),r.a.createElement("div",{className:"content"}," ",this.props.content," ")))}}]),a}(n.Component),C="http://zaidpathansite.000webhostapp.com/index.php/api/",x=localStorage.getItem("Token"),V=localStorage.getItem("username"),D=function(e,t){return fetch(C+e,{method:"POST",body:t})},U=function(e){return fetch(C+e+"Authorization="+x+"&username="+V,{method:"GET"})},A=function(e,t,a){a.innerHTML=""===e?t+" is required.!":""},P=function(e,t,a){e.length<6?a.innerHTML=t+" must be atleast 6 character.!":a.innerHTML=""},q=(a(31),function(e){Object(m.a)(n,e);var t=Object(c.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:a(32),className:"loader",alt:"Loader",style:{display:this.props.visibility}}))}}]),n}(n.Component)),F=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={isRegActive:!1,errormsg:null,modalVisibility:"none",loaderVisibility:"none"},e.handleSubmit=e.handleSubmit.bind(Object(p.a)(e)),e.login=e.login.bind(Object(p.a)(e)),e.reg=e.reg.bind(Object(p.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){null!=localStorage.getItem("Token")&&(window.location.href=S.homePageUrl)}},{key:"handleSubmit",value:function(e){try{if(e.preventDefault(),this.setState({loaderVisibility:null}),this.state.isRegActive){var t=new FormData;t.append("username",e.target[0].value),t.append("password",e.target[1].value),t.append("email",e.target[2].value),this.reg(t)}else{var a=new FormData;a.append("username",e.target[0].value),a.append("password",e.target[1].value),this.login(a,e.target[0].value)}this.refs.form.reset()}catch(n){alert(w)}}},{key:"login",value:function(e,t){var a=this;try{D("login",e).then((function(e){return e.ok?e.json().then((function(e){localStorage.setItem("Token",e.token),localStorage.setItem("username",t),window.location.href=S.homePageUrl})):e.json().then((function(e){a.setState({errormsg:e.msg,modalVisibility:null,loaderVisibility:"none"})}))})).catch((function(e){a.setState({errormsg:w,modalVisibility:null,loaderVisibility:"none"})}))}catch(n){this.setState({errormsg:w,modalVisibility:null,loaderVisibility:"none"})}}},{key:"reg",value:function(e){var t=this;try{D("reg",e).then((function(e){return e.ok,e.json().then((function(e){t.setState({errormsg:e.msg,modalVisibility:null,loaderVisibility:"none"})}))})).catch((function(e){t.setState({errormsg:w,loaderVisibility:"none"})}))}catch(a){this.setState({errormsg:w,loaderVisibility:"none"})}}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{side_menu_visibility:"none"}),r.a.createElement("br",null),r.a.createElement("br",null)," ",r.a.createElement("hr",null),r.a.createElement("div",{className:"outer-div popup"},"Welcome to ",this.state.isRegActive?S.textReg:S.textLogin,r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},ref:"form"},r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"username",placeholder:"Username*",required:"required",className:"form-control",onKeyUp:function(t){return P(t.target.value,"Username",e.refs.username)}}),r.a.createElement("div",{ref:"username",className:"error-text"})),r.a.createElement("div",null,r.a.createElement("input",{type:"password",name:"password",placeholder:"Password*",required:"required",className:"form-control",ref:"pass",autoComplete:"autoComplete",onKeyUp:function(t){return P(t.target.value,"Password",e.refs.password)}}),r.a.createElement("div",{ref:"password",className:"error-text"})),this.state.isRegActive?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("input",{type:"password",name:"cpassword",placeholder:"Confirm Password*",className:"form-control",required:"required",autoComplete:"autoComplete",onKeyUp:function(t){var a,n,r;a=e.refs.pass.value,n=t.target.value,r="Confirm Password",e.refs.cpassword.innerHTML=a!==n?r+" is not same as password.!":""}}),r.a.createElement("div",{ref:"cpassword",className:"error-text"})),r.a.createElement("div",null,r.a.createElement("input",{type:"email",name:"email",placeholder:"Email*",className:"form-control",required:"required",onKeyUp:function(t){var a,n,r;a=t.target.value,n="Email",r=e.refs.email,/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(a)?r.innerHTML="":r.innerHTML=n+" is not valid.!"}}),r.a.createElement("div",{ref:"email",className:"error-text"}))):null,r.a.createElement("div",null,r.a.createElement("input",{type:"submit",value:this.state.isRegActive?S.textReg:S.textLogin,className:"btn-primary"}),r.a.createElement("input",{type:"reset",className:"btn-regular"})),r.a.createElement("div",null,r.a.createElement("font",{onClick:function(){return e.state.isRegActive?e.setState({isRegActive:!1}):e.setState({isRegActive:!0})}},r.a.createElement("br",null),r.a.createElement("u",null," OR",this.state.isRegActive?S.textLogin.toUpperCase():S.textReg.toUpperCase(),"NOW..! "))),r.a.createElement(q,{visibility:this.state.loaderVisibility})),r.a.createElement(T,{title:"Info",content:this.state.errormsg,visibility:this.state.modalVisibility,onClose:function(){return e.setState({modalVisibility:"none"})}})))}}]),a}(n.Component),H=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={hours:null,minutes:null,counter:null},n.countDown1=n.countDown1.bind(Object(p.a)(n)),n.countDown2=n.countDown2.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e,t;60===this.props.time?(e=0,t=60):this.props.time<60?(e="00",t=this.props.time):(e=Math.round(this.props.time/60),t=this.props.time-60*e),this.setState({hours:e,minutes:t}),this.countDown1(60)}},{key:"countDown1",value:function(e){var t=this,a=this.state.minutes,n=this.state.hours;0===a&&0===n?this.setState({minutes:"00",hours:"00",counter:"00"}):(this.setState({counter:e}),0===e&&(e=60,0!==a?(a-=1,this.setState({minutes:a})):n>0&&(n-=1,a=60,this.setState({hours:n,minutes:a}))),setTimeout((function(){e-=1,t.countDown2(e)}),1e3))}},{key:"countDown2",value:function(e){var t=this,a=this.state.minutes,n=this.state.hours;0===a&&0===n?this.setState({minutes:"00",hours:"00",counter:"00"}):(this.setState({counter:e}),0===e&&(e=60,0!==a?(a-=1,this.setState({minutes:a})):n>0&&(n-=1,a=60,this.setState({hours:n,minutes:a}))),setTimeout((function(){e-=1,t.countDown1(e)}),1e3))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,"\xa0 ",this.state.hours," : ",this.state.minutes," : ",this.state.counter)}}]),a}(n.Component),I=a(11),R=(a(34),function(e){Object(m.a)(n,e);var t=Object(c.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,0===this.props.collection.length?r.a.createElement("img",{src:a(35),className:"empty-list",alt:E}):this.props.collection.map((function(t,n){return r.a.createElement("div",{className:"block"},r.a.createElement("div",{className:"content"},r.a.createElement("img",{src:a(36),width:"100%",alt:k}),r.a.createElement("h5",null," Task: ",t.taskname," "),r.a.createElement("h6",null," Project: ",t.projectname," "),r.a.createElement("h6",null," Created Date: ",t.created_date," "),r.a.createElement("h6",{style:{textAlign:"center"}},r.a.createElement("img",{src:a(37),width:"15px",alt:j}),"\xa0 ",t.sdate," --- ",t.edate),r.a.createElement("button",{className:"btn-primary",onClick:function(){return e.refs["timer"+n].style.display=""}},"Start Timer"),r.a.createElement("font",{ref:"timer"+n,style:{display:"none"}},r.a.createElement(H,{time:Math.abs(I(t.sdate,"HH:mm").diff(I(t.edate,"HH:mm"),"minute"))}))))})))}}]),n}(n.Component)),L=(a(38),function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={rowData:[],msg:null,modalVisibility:"none",contentType:"Add Task",modalTitle:"Add Task",loaderVisibility:"none"},e.getUserTask=e.getUserTask.bind(Object(p.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(p.a)(e)),e.search=e.search.bind(Object(p.a)(e)),e.modalContent=e.modalContent.bind(Object(p.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getUserTask()}},{key:"getUserTask",value:function(){var e=this;try{this.setState({loaderVisibility:null}),U(g).then((function(t){return t.ok?t.json().then((function(t){e.setState({rowData:t.response,loaderVisibility:"none"})})):t.json().then((function(e){alert(e.msg),401===e.status&&(localStorage.removeItem("Token"),localStorage.removeItem("Username"),window.location.href="/")}))}))}catch(t){alert(w),window.location.href="/"}}},{key:"handleSubmit",value:function(e){var t,a,n=this;try{e.preventDefault();var r=I(e.target[2].value,"HH:mm"),i=I(e.target[3].value,"HH:mm");if(r.diff(i,"minute")<=0){var l=new FormData;l.append("taskname",e.target[0].value),l.append("projectname",e.target[1].value),l.append("stime",e.target[2].value),l.append("etime",e.target[3].value),l.append("username",localStorage.getItem("username")),l.append("Authorization",localStorage.getItem("Token")),(t="task",a=l,fetch(C+t,{method:"POST",body:a})).then((function(e){return e.ok?e.json().then((function(e){n.setState({msg:e.msg}),n.getUserTask(),n.refs.form.reset()})):e.json().then((function(e){n.setState({msg:e.msg})}))}))}else this.setState({msg:N})}catch(o){alert(w)}}},{key:"search",value:function(e){var t=this;try{e.preventDefault(),I().diff(e.target.value,"day")>=0?(this.setState({msg:null}),U(b+e.target.value+"&").then((function(e){return e.ok?e.json().then((function(e){"500"!==e.status&&t.setState({rowData:e.response,msg:"Found "+e.response.length+" tasks."})})):e.json().then((function(e){t.setState({msg:"Found 0 tasks."})}))}))):this.setState({msg:y})}catch(a){alert(w)}}},{key:"modalContent",value:function(){var e=this;return"Add Task"===this.state.contentType?r.a.createElement("div",{className:"input-modal-outer-div"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},ref:"form"},r.a.createElement("div",null,r.a.createElement("div",{className:"label"},"Task Name* : ",r.a.createElement("div",{ref:"taskname",className:"error-text"})),r.a.createElement("textarea",{name:"taskname",cols:"24",required:"required",className:"form-control",placeholder:"Task Name",onKeyUp:function(t){return A(t.target.value,"Task Name",e.refs.taskname)}})),r.a.createElement("div",null,r.a.createElement("div",{className:"label"},"Project* : ",r.a.createElement("div",{ref:"projectname",className:"error-text"})),r.a.createElement("select",{name:"projectname",className:"form-control",required:"required",onChange:function(t){return A(t.target.value,"Project Name",e.refs.projectname)}},r.a.createElement("option",null," Project 1 "),r.a.createElement("option",null," Project 2 "),r.a.createElement("option",null," Project 3 "),r.a.createElement("option",null," Project 4 "),r.a.createElement("option",null," Project 5 "))),r.a.createElement("div",null,r.a.createElement("div",{className:"label"},"Start Time* : ",r.a.createElement("div",{ref:"stime",className:"error-text"})),r.a.createElement("input",{type:"time",name:"stime",className:"form-control",required:"required",onKeyUp:function(t){return A(t.target.value,"Start Time",e.refs.stime)}})),r.a.createElement("div",null,r.a.createElement("div",{className:"label"},"End Time* : ",r.a.createElement("div",{ref:"etime",className:"error-text"})),r.a.createElement("input",{type:"time",name:"etime",className:"form-control",required:"required",onKeyUp:function(t){return A(t.target.value,"End Time",e.refs.etime)}})),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit",className:"btn-primary"}),r.a.createElement("input",{type:"reset",className:"btn-regular"}))),r.a.createElement("br",null),r.a.createElement("div",{className:"error-text"}," ",this.state.msg," ")):r.a.createElement("div",{className:"input-modal-outer-div"},r.a.createElement("div",{className:"label"}," Select Date : "),r.a.createElement("input",{type:"date",className:"form-control",placeholder:"Search",onChange:function(t){return e.search(t)}}),r.a.createElement("br",null),r.a.createElement("div",{className:"error-text"}," ",this.state.msg," "))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement("div",{className:"outer"},r.a.createElement("input",{type:"button",value:"Add task",className:"btn-primary",onClick:function(){return e.setState({modalVisibility:"",contentType:"Add Task",modalTitle:"Add Task",msg:null})}}),r.a.createElement("input",{type:"button",value:"Filter",className:"btn-regular",onClick:function(){return e.setState({modalVisibility:"",contentType:"Filter",modalTitle:"Filter",msg:null})}}),r.a.createElement("hr",null)),r.a.createElement(T,{title:this.state.modalTitle,content:this.modalContent(),visibility:this.state.modalVisibility,onClose:function(){return e.setState({modalVisibility:"none"})}}),r.a.createElement(R,{collection:this.state.rowData.reverse()}),r.a.createElement(q,{visibility:this.state.loaderVisibility}))}}]),a}(n.Component)),M=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement(d.a,{exact:!0,path:"/"}," ",r.a.createElement(F,null)," "),r.a.createElement(d.a,{path:S.homePageUrl}," ",r.a.createElement(L,null)," "))}}]),a}(n.Component),K=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return null!==localStorage.getItem("Token")?r.a.createElement(M,null):r.a.createElement(F,null)}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[24,1,2]]]);
//# sourceMappingURL=main.e8d70b83.chunk.js.map