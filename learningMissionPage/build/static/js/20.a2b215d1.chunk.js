"use strict";(self.webpackChunkcliaent1=self.webpackChunkcliaent1||[]).push([[20],{8424:function(e,r,l){l.d(r,{w:function(){return o}});var o="https://api.learningmissionlabs.com/api"},5020:function(e,r,l){l.r(r);var o=l(885),s=l(2791),t=l(6871),a=l(8424),n=(l(7632),l(3553),l(184));r.default=function(){var e=(0,t.s0)(),r=(0,s.useState)(""),l=(0,o.Z)(r,2),c=l[0],i=l[1],d=(0,s.useState)(""),m=(0,o.Z)(d,2),u=m[0],f=m[1],h=(0,s.useState)(""),x=(0,o.Z)(h,2),g=x[0],p=x[1],j=(0,s.useState)(""),b=(0,o.Z)(j,2),v=b[0],N=b[1];return(0,n.jsx)("section",{children:(0,n.jsx)("div",{className:"mask d-flex flex-row align-items-center h-100 gradient-custom-3",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row d-flex justify-content-center align-items-center h-100",children:(0,n.jsx)("div",{className:"col-12 col-md-9 col-lg-7 col-xl-6",children:(0,n.jsx)("div",{className:"card",style:{borderRadius:15,marginTop:"50px"},children:(0,n.jsxs)("div",{className:"card-body p-5 card_register",children:[(0,n.jsx)("h5",{className:"mb-2",children:"STEP 01/03"}),(0,n.jsx)("h2",{className:"text-uppercase mb-1",children:"Register"}),(0,n.jsx)("h4",{className:"mb-5",children:"Create Your Account"}),(0,n.jsxs)("form",{onSubmit:function(r){r.preventDefault(),r.stopPropagation();var l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({Email:g,Password:c,ConfirmPassword:u})};c===u?fetch("".concat(a.w,"/User/registration"),l).then((function(e){return e.json()})).then((function(r){if(!r||!r.token)return N("Email address already exists. Go to"),void(g.style={borderRadius:"red"});localStorage.setItem("token",r.token),localStorage.setItem("status",r.status),N(""),e("../registerInfo",{replace:!0})})).catch((function(e){console.error("Error:",e)})):N("Password doesn't match")},children:[(0,n.jsxs)("div",{className:"form-outline mb-4",children:[(0,n.jsx)("label",{className:"form-label",htmlFor:"form3Example1cg",children:"Email"}),(0,n.jsx)("input",{className:"Email address already exists. Go to"===v?"validationcl form-control form-control-lg":"form-control form-control-lg",maxLength:50,type:"email",id:"form3Example1cg",placeholder:"Enter Your Email",value:g,onChange:function(e){return p(e.target.value)}}),"Email address already exists. Go to"===v?(0,n.jsxs)("p",{style:{color:"red",textAlign:"left"},children:[v,(0,n.jsx)("a",{href:"../login",style:{color:"black"},children:" Login"})," page"]}):null]}),(0,n.jsxs)("div",{className:"form-outline mb-4",children:[(0,n.jsx)("label",{className:"form-label",htmlFor:"form3Example3cg",children:"Password"}),(0,n.jsx)("input",{type:"password",id:"form3Example3cg",placeholder:"Enter Your Password",className:"Password doesn't match"===v?"validationcl form-control form-control-lg":"form-control form-control-lg",value:c,onChange:function(e){return i(e.target.value)}})]}),(0,n.jsxs)("div",{className:"form-outline mb-4",children:[(0,n.jsx)("label",{className:"form-label",htmlFor:"form3Example4cg",children:"Confirm Password"}),(0,n.jsx)("input",{type:"password",id:"form3Example4cg",placeholder:"Confirm Password",className:"Password doesn't match"===v?"validationcl form-control form-control-lg":"form-control form-control-lg",value:u,onChange:function(e){return f(e.target.value)}}),"Password doesn't match"===v?(0,n.jsx)("p",{style:{color:"red",textAlign:"left"},children:v}):null]}),(0,n.jsx)("div",{className:"d-flex justify-content-center",children:(0,n.jsx)("button",{type:"submit",className:"btn btn-block btn-lg gradient-custom-4",children:"Create Account"})})]})]})})})})})})})}},3553:function(){}}]);
//# sourceMappingURL=20.a2b215d1.chunk.js.map