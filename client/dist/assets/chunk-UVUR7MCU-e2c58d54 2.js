import{r as i,c as T,d as x,j as s,b as p,S as P,f as R,a as M,o as A,e as j}from"./index-7df5b2c6.js";function G(n,e){if(n!=null){if(typeof n=="function"){n(e);return}try{n.current=e}catch{throw new Error(`Cannot assign value '${e}' to ref '${n}'`)}}}function z(...n){return e=>{n.forEach(t=>{G(t,e)})}}function D(...n){return i.useMemo(()=>z(...n),n)}var[O,$]=T({strict:!1,name:"ButtonGroupContext"});function F(n){const[e,t]=i.useState(!n);return{ref:i.useCallback(r=>{r&&t(r.tagName==="BUTTON")},[]),type:e?"button":void 0}}function h(n){const{children:e,className:t,...a}=n,o=i.isValidElement(e)?i.cloneElement(e,{"aria-hidden":!0,focusable:!1}):e,r=x("chakra-button__icon",t);return s.jsx(p.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:r,children:o})}h.displayName="ButtonIcon";function g(n){const{label:e,placement:t,spacing:a="0.5rem",children:o=s.jsx(P,{color:"currentColor",width:"1em",height:"1em"}),className:r,__css:l,...d}=n,m=x("chakra-button__spinner",r),u=t==="start"?"marginEnd":"marginStart",c=i.useMemo(()=>({display:"flex",alignItems:"center",position:e?"relative":"absolute",[u]:e?a:0,fontSize:"1em",lineHeight:"normal",...l}),[l,e,u,a]);return s.jsx(p.div,{className:m,...d,__css:c,children:o})}g.displayName="ButtonSpinner";var H=R((n,e)=>{const t=$(),a=M("Button",{...t,...n}),{isDisabled:o=t==null?void 0:t.isDisabled,isLoading:r,isActive:l,children:d,leftIcon:m,rightIcon:u,loadingText:c,iconSpacing:f="0.5rem",type:y,spinner:b,spinnerPlacement:_="start",className:v,as:S,...k}=A(n),C=i.useMemo(()=>{const w={...a==null?void 0:a._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...a,...!!t&&{_focus:w}}},[a,t]),{ref:I,type:E}=F(S),B={rightIcon:u,leftIcon:m,iconSpacing:f,children:d};return s.jsxs(p.button,{ref:D(e,I),as:S,type:y??E,"data-active":j(l),"data-loading":j(r),__css:C,className:x("chakra-button",v),...k,disabled:o||r,children:[r&&_==="start"&&s.jsx(g,{className:"chakra-button__spinner--start",label:c,placement:"start",spacing:f,children:b}),r?c||s.jsx(p.span,{opacity:0,children:s.jsx(N,{...B})}):s.jsx(N,{...B}),r&&_==="end"&&s.jsx(g,{className:"chakra-button__spinner--end",label:c,placement:"end",spacing:f,children:b})]})});H.displayName="Button";function N(n){const{leftIcon:e,rightIcon:t,children:a,iconSpacing:o}=n;return s.jsxs(s.Fragment,{children:[e&&s.jsx(h,{marginEnd:o,children:e}),a,t&&s.jsx(h,{marginStart:o,children:t})]})}export{H as B,z as m};
