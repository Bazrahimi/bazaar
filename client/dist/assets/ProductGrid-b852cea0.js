import{f as j,j as n,b as C,k as b,D as f}from"./index-5fb221e2.js";import{b as R,a as v}from"./chunk-G72KV6MB-0caa1c31.js";import{u as A}from"./chunk-57I6FYPZ-2c0ba8b1.js";import{T as u}from"./chunk-2OOHT3W5-17c042ab.js";import{B as p}from"./chunk-PULVB27S-78b29a96.js";import{I as O}from"./chunk-QINAG4RG-a7cb0012.js";var x=j(function(o,s){const{templateAreas:r,gap:e,rowGap:i,columnGap:l,column:d,row:m,autoFlow:a,autoRows:c,templateRows:h,autoColumns:w,templateColumns:k,...g}=o,y={display:"grid",gridTemplateAreas:r,gridGap:e,gridRowGap:i,gridColumnGap:l,gridAutoColumns:w,gridColumn:d,gridRow:m,gridAutoFlow:a,gridAutoRows:c,gridTemplateRows:h,gridTemplateColumns:k};return n.jsx(C.div,{ref:s,__css:y,...g})});x.displayName="Grid";function _(t,o,s=R){let r=Object.keys(t).indexOf(o);if(r!==-1)return t[o];let e=s.indexOf(o);for(;e>=0;){const i=s[e];if(t.hasOwnProperty(i)){r=e;break}e-=1}if(r!==-1){const i=s[r];return t[i]}}function G(t){var o,s;const r=f(t)?t:{fallback:t??"base"},i=b().__breakpoints.details.map(({minMaxQuery:a,breakpoint:c})=>({breakpoint:c,query:a.replace("@media screen and ","")})),l=i.map(a=>a.breakpoint===r.fallback),m=A(i.map(a=>a.query),{fallback:l,ssr:r.ssr}).findIndex(a=>a==!0);return(s=(o=i[m])==null?void 0:o.breakpoint)!=null?s:r.fallback}function T(t,o){var s;const r=f(o)?o:{fallback:o??"base"},e=G(r),i=b();if(!e)return;const l=Array.from(((s=i.__breakpoints)==null?void 0:s.keys)||[]),d=Array.isArray(t)?Object.fromEntries(Object.entries(v(t,l)).map(([m,a])=>[m,a])):t;return _(d,e,l)}const B={fontWeight:"bold",mt:3,mb:2,textAlign:"center",display:"-webkit-box",overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical",paddingRight:"4px"},V=({products:t,showViewCount:o,onClick:s})=>{const r=T({base:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"});return n.jsx(x,{gap:6,templateColumns:r,children:t.map(e=>n.jsxs(p,{p:4,boxShadow:"sm",borderRadius:"md",_hover:{cursor:"pointer",boxShadow:"md"},onClick:()=>s(e.id),children:[n.jsxs(p,{position:"relative",width:"100%",children:[e.imageURLs[0]&&n.jsx(O,{src:e.imageURLs[0],alt:`${e.name}-thumbnail`,width:"100%",objectFit:"cover",borderRadius:"md"}),n.jsxs(p,{position:"absolute",bottom:"0",right:"0",backgroundColor:"blue.500",color:"white",p:1,borderRadius:"md",fontWeight:"bold",children:["$",e.price]})]}),n.jsx(u,{style:{WebkitLineClamp:2,...B},children:e.name}),o&&e.viewCount&&n.jsxs(u,{mt:2,fontSize:"sm",textAlign:"center",children:["Views: ",e.viewCount]})]},e.id))})};export{V as P};
