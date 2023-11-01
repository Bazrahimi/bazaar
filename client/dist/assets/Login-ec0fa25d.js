import{r as m,p as y,j as e,L}from"./index-5fb221e2.js";import{u as b,L as w}from"./mutation-91b29eea.js";import{A as d}from"./auth-858294af.js";import{B as t}from"./chunk-PULVB27S-78b29a96.js";import{F as c}from"./chunk-VLMMX64R-551f0cc3.js";import{F as p}from"./chunk-GCOAS5YC-c2a7e279.js";import{I as u}from"./chunk-6CVSDS6C-7e6f8354.js";import{B as h}from"./chunk-UVUR7MCU-4e12b189.js";import"./ApolloContext-bd47d82f.js";import"./index-460e16aa.js";import"./jwt-decode.esm-9c18df67.js";const U=()=>{const[r,g]=m.useState({email:"",password:""}),[i,a]=m.useState(null),[x,{loading:f,error:n,data:E}]=b(w);y();const l=s=>{const{name:o,value:S}=s.target;g({...r,[o]:S})},j=async s=>{s.preventDefault();try{const{data:o}=await x({variables:{...r}});console.log("Login data:",o),o&&o.login.token?d.isTokenExpired(o.login.token)?a("Session has expired. Please log in again."):d.login(o.login.token,o.login.user.id):a("Failed to authenticate. Please try again.")}catch(o){console.error(o),a("Login failed. Please check your credentials.")}};return e.jsx(t,{p:4,width:"100%",maxWidth:"600px",mx:"auto",children:e.jsxs("form",{onSubmit:j,children:[e.jsxs(c,{id:"email",mb:4,children:[e.jsx(p,{children:"Email"}),e.jsx(u,{type:"email",name:"email",onChange:l,value:r.email,placeholder:"Enter your email"})]}),e.jsxs(c,{id:"password",mb:4,children:[e.jsx(p,{children:"Password"}),e.jsx(u,{type:"password",name:"password",onChange:l,value:r.password,placeholder:"Enter your password"})]}),e.jsx(h,{type:"submit",isLoading:f,colorScheme:"blue",children:"Login"}),e.jsx(L,{to:"/SignUpForm",style:{display:"block",marginTop:"16px"},children:e.jsx(h,{colorScheme:"blue",children:"Create Account"})}),n&&e.jsx(t,{color:"red.500",mt:2,children:n.message}),i&&e.jsx(t,{color:"red.500",mt:2,children:i})]})})};export{U as default};