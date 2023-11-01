import{f as S,a as y,o as b,j as e,b as v,d as w,R as P,v as R,r as p,L as W}from"./index-5fb221e2.js";import{u as _,d as T}from"./queries-447cd7fa.js";import{T as n}from"./chunk-2OOHT3W5-17c042ab.js";import{V as D}from"./chunk-NTCQBYKE-a04c7c7f.js";import{H as N}from"./chunk-7OLJDQMT-9d637b2f.js";import{B}from"./chunk-PULVB27S-78b29a96.js";import U from"./ProductsBySeller-b8dee113.js";import"./jwt-decode.esm-9c18df67.js";import{F as f}from"./chunk-KRPLQIP4-775b9b92.js";import{B as j}from"./chunk-UVUR7MCU-4e12b189.js";import"./ApolloContext-bd47d82f.js";import"./index-460e16aa.js";import"./networkStatus-b7430410.js";import"./chunk-G72KV6MB-0caa1c31.js";import"./ProductGrid-b852cea0.js";import"./chunk-57I6FYPZ-2c0ba8b1.js";import"./chunk-QINAG4RG-a7cb0012.js";import"./mutation-91b29eea.js";var g=S(function(r,l){const o=y("Badge",r),{className:d,...s}=b(r);return e.jsx(v.span,{ref:l,className:w("chakra-badge",r.className),...s,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...o}})});g.displayName="Badge";var E=S(function(r,l){const{borderLeftWidth:o,borderBottomWidth:d,borderTopWidth:s,borderRightWidth:i,borderWidth:t,borderStyle:a,borderColor:h,...u}=y("Divider",r),{className:m,orientation:x="horizontal",__css:k,...z}=b(r),L={vertical:{borderLeftWidth:o||i||t||"1px",height:"100%"},horizontal:{borderBottomWidth:d||s||t||"1px",width:"100%"}};return e.jsx(v.hr,{ref:l,"aria-orientation":x,...z,__css:{...u,border:"0",borderColor:h,borderStyle:a,...L[x],...k},className:w("chakra-divider",m)})});E.displayName="Divider";const A=({userId:c,onUserFetched:r})=>{const{loading:l,error:o,data:d}=_(T,{variables:{getUserDetailsId:c}});let s,i,t,a,h,u,m;return d&&d.getUserDetails&&({firstName:s,lastName:i,address:t,contactNumber:a,email:h,role:u,status:m}=d.getUserDetails),P.useEffect(()=>{r&&s&&i&&r(s,i)},[s,i,r]),l?e.jsx(n,{children:"Loading..."}):o?e.jsxs(n,{color:"red.500",children:["Error: ",o.message]}):e.jsx(B,{borderRadius:"md",boxShadow:"lg",padding:5,bg:"white",children:e.jsxs(D,{spacing:3,align:"flex-start",children:[e.jsxs(N,{size:"md",children:[s," ",i]}),e.jsxs(n,{fontSize:"sm",color:"gray.600",children:["Role: ",e.jsx(g,{colorScheme:"purple",children:u})]}),e.jsxs(n,{fontSize:"sm",color:"gray.600",children:["Status: ",e.jsx(g,{colorScheme:m==="Active"?"green":"red",children:m})]}),e.jsx(E,{my:2}),e.jsxs(n,{fontSize:"sm",color:"gray.600",children:["Email: ",h]}),e.jsxs(n,{fontSize:"sm",color:"gray.600",children:["Contact: ",a]}),e.jsxs(n,{fontSize:"sm",color:"gray.600",children:["Address: ",t]})]})})},se=()=>{const{id:c}=R(),[r,l]=p.useState(!1),[o,d]=p.useState(null),s=(t,a)=>{d(`${t} ${a}`)},i=()=>{const t=new Date().getHours(),a=t<12?"Good Morning":t<18?"Good Afternoon":"Good Evening";return o?`${a}, ${o}!`:a};return e.jsxs(B,{padding:5,children:[e.jsxs(D,{spacing:4,align:"flex-start",children:[e.jsx(N,{children:i()}),e.jsx(n,{children:"Welcome back to your dashboard. Here you can manage your products and account settings."})]}),e.jsxs(f,{direction:"column",mt:5,children:[e.jsx(A,{userId:c,onUserFetched:s}),e.jsxs(f,{mt:3,direction:["column","row"],gap:3,children:[e.jsx(W,{to:`/ProductForm/${c}`,style:{textDecoration:"none"},children:e.jsx(j,{colorScheme:"teal",width:["100%","auto"],children:"List your Products"})}),e.jsx(j,{colorScheme:"purple",onClick:()=>l(!r),width:["100%","auto"],children:"My Listed Products"})]}),r&&e.jsx(U,{sellerId:c})]})]})};export{se as default};