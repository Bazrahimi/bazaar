import{c as k,f as H,i as $,o as w,d as q,j as C,b as _,r as d,e as h,G as P,h as T}from"./index-7df5b2c6.js";import{m as g}from"./chunk-UVUR7MCU-e2c58d54.js";var[A,E]=k({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[M,S]=k({strict:!1,name:"FormControlContext"});function G(i){const{id:o,isRequired:a,isInvalid:l,isDisabled:e,isReadOnly:r,...u}=i,m=d.useId(),t=o||`field-${m}`,v=`${t}-label`,f=`${t}-feedback`,b=`${t}-helptext`,[y,F]=d.useState(!1),[p,x]=d.useState(!1),[c,I]=d.useState(!1),O=d.useCallback((s={},n=null)=>({id:b,...s,ref:g(n,R=>{R&&x(!0)})}),[b]),j=d.useCallback((s={},n=null)=>({...s,ref:n,"data-focus":h(c),"data-disabled":h(e),"data-invalid":h(l),"data-readonly":h(r),id:s.id!==void 0?s.id:v,htmlFor:s.htmlFor!==void 0?s.htmlFor:t}),[t,e,c,l,r,v]),D=d.useCallback((s={},n=null)=>({id:f,...s,ref:g(n,R=>{R&&F(!0)}),"aria-live":"polite"}),[f]),N=d.useCallback((s={},n=null)=>({...s,...u,ref:n,role:"group"}),[u]),B=d.useCallback((s={},n=null)=>({...s,ref:n,role:"presentation","aria-hidden":!0,children:s.children||"*"}),[]);return{isRequired:!!a,isInvalid:!!l,isReadOnly:!!r,isDisabled:!!e,isFocused:!!c,onFocus:()=>I(!0),onBlur:()=>I(!1),hasFeedbackText:y,setHasFeedbackText:F,hasHelpText:p,setHasHelpText:x,id:t,labelId:v,feedbackId:f,helpTextId:b,htmlProps:u,getHelpTextProps:O,getErrorMessageProps:D,getRootProps:N,getLabelProps:j,getRequiredIndicatorProps:B}}var L=H(function(o,a){const l=$("Form",o),e=w(o),{getRootProps:r,htmlProps:u,...m}=G(e),t=q("chakra-form-control",o.className);return C.jsx(M,{value:m,children:C.jsx(A,{value:l,children:C.jsx(_.div,{...r({},a),className:t,__css:l.container})})})});L.displayName="FormControl";var z=H(function(o,a){const l=S(),e=E(),r=q("chakra-form__helper-text",o.className);return C.jsx(_.div,{...l==null?void 0:l.getHelpTextProps(o,a),__css:e.helperText,className:r})});z.displayName="FormHelperText";function U(i){const{isDisabled:o,isInvalid:a,isReadOnly:l,isRequired:e,...r}=J(i);return{...r,disabled:o,readOnly:l,required:e,"aria-invalid":P(a),"aria-required":P(e),"aria-readonly":P(l)}}function J(i){var o,a,l;const e=S(),{id:r,disabled:u,readOnly:m,required:t,isRequired:v,isInvalid:f,isReadOnly:b,isDisabled:y,onFocus:F,onBlur:p,...x}=i,c=i["aria-describedby"]?[i["aria-describedby"]]:[];return e!=null&&e.hasFeedbackText&&(e!=null&&e.isInvalid)&&c.push(e.feedbackId),e!=null&&e.hasHelpText&&c.push(e.helpTextId),{...x,"aria-describedby":c.join(" ")||void 0,id:r??(e==null?void 0:e.id),isDisabled:(o=u??y)!=null?o:e==null?void 0:e.isDisabled,isReadOnly:(a=m??b)!=null?a:e==null?void 0:e.isReadOnly,isRequired:(l=t??v)!=null?l:e==null?void 0:e.isRequired,isInvalid:f??(e==null?void 0:e.isInvalid),onFocus:T(e==null?void 0:e.onFocus,F),onBlur:T(e==null?void 0:e.onBlur,p)}}export{L as F,S as a,E as b,U as u};
