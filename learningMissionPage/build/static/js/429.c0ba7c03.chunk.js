"use strict";(self.webpackChunkcliaent1=self.webpackChunkcliaent1||[]).push([[429],{8424:function(e,r,a){a.d(r,{w:function(){return t}});var t="https://api.learningmissionlabs.com/api"},429:function(e,r,a){a.r(r);var t=a(885),l=a(2791),s=a(6871),n=a(8424),o=(a(7632),a(3553),a(184));r.default=function(){var e=["","AccountManager","Beneficiary","Investor"],r=["","Male","Female","Other"],a=(0,s.s0)(""),c=(0,l.useState)(""),i=(0,t.Z)(c,2),m=i[0],d=i[1],u=(0,l.useState)(""),h=(0,t.Z)(u,2),f=h[0],x=h[1],p=(0,l.useState)(""),j=(0,t.Z)(p,2),N=j[0],g=j[1],v=(0,l.useState)(""),b=(0,t.Z)(v,2),_=b[0],y=b[1],S=(0,l.useState)(""),F=(0,t.Z)(S,2),C=F[0],w=F[1],Z=(0,l.useState)(""),O=(0,t.Z)(Z,2),k=O[0],q=O[1],E=(0,l.useState)(""),M=(0,t.Z)(E,2),T=M[0],A=M[1],P=(0,l.useState)(""),B=(0,t.Z)(P,2),I=B[0],Y=B[1],D=(0,l.useState)(""),R=(0,t.Z)(D,2),L=R[0],z=R[1];return(0,o.jsx)("section",{children:(0,o.jsx)("div",{className:"mask d-flex align-items-center h-100 gradient-custom-3",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row d-flex justify-content-center align-items-center h-100",children:(0,o.jsx)("div",{className:"col-12",children:(0,o.jsx)("div",{className:"card",style:{borderRadius:"15px",marginTop:"50px"},children:(0,o.jsxs)("div",{className:"card-body p-5 card_register",children:[(0,o.jsx)("h5",{className:"mb-2",children:"STEP 03/03"}),(0,o.jsx)("h2",{className:"text-uppercase text-center mb-1",children:"Personal Information"}),(0,o.jsx)("h4",{className:"mb-5 text-center",children:"Create Your Account"}),(0,o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),t.stopPropagation();var l={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({userTypeEnum:e.indexOf(f),firstName:N,lastName:_,middleName:C,dateOfBirth:k,phoneNumber:T,gender:r.indexOf(m),userMetadata:I})};fetch("".concat(n.w,"/user/userInfoRegistration"),l).then((function(e){return e.json()})).then((function(e){e?(z(""),a("../success",{replace:!0})):z("Authentication error")})).catch((function(e){console.error("Error:",e)}))},children:[(0,o.jsxs)("div",{className:"col-md-12 d-flex flex_wrap_text mb-4",children:[(0,o.jsxs)("div",{className:"form-group col-md-4 first_group",children:[(0,o.jsx)("label",{className:"form-label",htmlFor:"account_status",children:"Account Status"}),(0,o.jsxs)("select",{name:"",id:"",className:"form-select",required:!0,onChange:function(e){return x(e.target.value)},children:[(0,o.jsx)("option",{value:f}),(0,o.jsx)("option",{value:e[1],children:"Account Manager"}),(0,o.jsx)("option",{value:e[2],children:"Beneficiary"}),(0,o.jsx)("option",{value:e[3],children:"Investor"})]})]}),(0,o.jsxs)("div",{className:"form-group col-md-4 first_group",children:[(0,o.jsx)("label",{className:"form-label",htmlFor:"account_status",children:"Date of Birthday"}),(0,o.jsx)("input",{type:"date",className:"form-control",value:k,onChange:function(e){return q(e.target.value)},required:!0})]}),(0,o.jsxs)("div",{className:"form-group col-md-4",children:[(0,o.jsx)("label",{className:"form-label",htmlFor:"gender",children:"Gender"}),(0,o.jsxs)("select",{name:"",id:"gender",className:"form-select",onChange:function(e){return d(e.target.value)},required:!0,children:[(0,o.jsx)("option",{value:m}),(0,o.jsx)("option",{value:r[1],children:"Male"}),(0,o.jsx)("option",{value:r[2],children:"Female"}),(0,o.jsx)("option",{value:r[3],children:"Other"})]})]})]}),(0,o.jsxs)("div",{className:"col-md-12 d-flex flex_wrap_text mb-4",children:[(0,o.jsxs)("div",{className:"form-group col-md-6 first_group",children:[(0,o.jsx)("label",{className:"form-label",htmlFor:"first_name",children:"First Name"}),(0,o.jsx)("input",{type:"text",className:"First Name is Required"===L?"validationcl form-control ":"form-control ",id:"first_name",placeholder:"Enter Your First Name",value:N,onChange:function(e){return g(e.target.value)},required:!0})]}),(0,o.jsxs)("div",{className:"form-group col-md-6 first_group",children:[(0,o.jsx)("label",{className:"form-label",htmlFor:"phone",children:"Phone Number"}),(0,o.jsx)("input",{type:"number",className:"form-control",id:"phone",placeholder:"Enter Your Phone Number",value:T,onChange:function(e){return A(e.target.value)},required:!0})]})]}),(0,o.jsxs)("div",{className:"col-md-12 d-flex flex_wrap_text mb-4",children:[(0,o.jsxs)("div",{className:"form-group col-md-6 first_group",children:[(0,o.jsx)("label",{className:"form-label",htmlFor:"last_name",children:"Last Name"}),(0,o.jsx)("input",{type:"text",className:"form-control",id:"last_name",placeholder:"Enter Your Last Name",value:_,onChange:function(e){return y(e.target.value)},required:!0})]}),(0,o.jsxs)("div",{className:"form-group col-md-6 first_group",children:[(0,o.jsx)("label",{className:"form-label",htmlFor:"middle_name",children:"Middle Name"}),(0,o.jsx)("input",{type:"text",className:"form-control",id:"middle_name",placeholder:"Enter Your Middle Name",value:C,onChange:function(e){return w(e.target.value)}})]})]}),(0,o.jsx)("div",{className:"col-md-12 d-flex flex_wrap_text mb-4",children:(0,o.jsxs)("div",{className:"form-group col-md-12 first_group",children:[(0,o.jsx)("label",{htmlFor:"exampleFormControlTextarea1",children:"Other Details"}),(0,o.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:3,defaultValue:"",value:I,onChange:function(e){return Y(e.target.value)}})]})}),(0,o.jsx)("div",{className:"d-flex justify-content-center",children:(0,o.jsx)("button",{type:"submit",className:"btn btn-block btn-lg gradient-custom-4",children:"Submit"})})]})]})})})})})})})}},3553:function(){}}]);
//# sourceMappingURL=429.c0ba7c03.chunk.js.map