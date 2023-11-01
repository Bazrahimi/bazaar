import{r as i,j as r}from"./index-5fb221e2.js";import{u as x,C as j}from"./mutation-91b29eea.js";import{A as w}from"./auth-858294af.js";import{V as g}from"./chunk-NTCQBYKE-a04c7c7f.js";import{B as c}from"./chunk-PULVB27S-78b29a96.js";import{F as s}from"./chunk-VLMMX64R-551f0cc3.js";import{I as o}from"./chunk-6CVSDS6C-7e6f8354.js";import{B as C}from"./chunk-UVUR7MCU-4e12b189.js";import"./ApolloContext-bd47d82f.js";import"./index-460e16aa.js";import"./jwt-decode.esm-9c18df67.js";import"./chunk-G72KV6MB-0caa1c31.js";const I=()=>{const[e,p]=i.useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",role:"both",address:"",contactNumber:""}),[u]=x(j),[l,n]=i.useState(""),a=m=>{const{name:t,value:d}=m.target;p(f=>({...f,[t]:d}))},h=async m=>{if(m.preventDefault(),!e.firstName||!e.lastName||!e.email||!e.password||!e.confirmPassword||!e.role||!e.address||!e.contactNumber){n("All fields are required");return}if(e.password!==e.confirmPassword){n("Passwords do not match");return}n("");try{const{data:t}=await u({variables:e}),d=t.createUser.user.id;w.login(t.createUser.token,d)}catch(t){console.error("Error creating user:",t.message),n("Failed to create user")}};return r.jsx(c,{as:"form",onSubmit:h,p:5,shadow:"md",borderWidth:"5px",rounded:"md",maxW:"600px",width:["100%","80%","60%","600px"],mx:"auto",children:r.jsxs(g,{spacing:2,children:[r.jsx(s,{children:r.jsx(o,{name:"firstName",value:e.firstName,onChange:a,placeholder:"First Name"})}),r.jsx(s,{children:r.jsx(o,{name:"lastName",value:e.lastName,onChange:a,placeholder:"Last Name"})}),r.jsx(s,{children:r.jsx(o,{type:"email",name:"email",value:e.email,onChange:a,placeholder:"Email"})}),r.jsx(s,{children:r.jsx(o,{type:"password",name:"password",value:e.password,onChange:a,placeholder:"Password",autoComplete:"off"})}),r.jsx(s,{children:r.jsx(o,{type:"password",name:"confirmPassword",value:e.confirmPassword,onChange:a,placeholder:"Confirm Password",autoComplete:"off"})}),r.jsx(s,{children:r.jsx(o,{name:"address",value:e.address,onChange:a,placeholder:"Address"})}),r.jsx(s,{children:r.jsx(o,{name:"contactNumber",value:e.contactNumber,onChange:a,placeholder:"Contact Number"})}),r.jsx(C,{colorScheme:"teal",type:"submit",children:"Sign Up"}),l&&r.jsx(c,{color:"red.500",mt:3,children:l})]})})};export{I as default};