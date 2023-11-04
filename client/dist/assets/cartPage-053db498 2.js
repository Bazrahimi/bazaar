import{c as S,f as d,i as g,o as v,j as e,b as x,d as C}from"./index-7df5b2c6.js";import{u as _}from"./cartContext-f4af38da.js";import{T as u}from"./chunk-2OOHT3W5-e29e2160.js";import{V as P}from"./chunk-NTCQBYKE-3cf53e29.js";import{I as z}from"./chunk-QINAG4RG-4be5ab80.js";import{I}from"./chunk-6CVSDS6C-d9ce272b.js";import{B as T}from"./chunk-UVUR7MCU-e2c58d54.js";import{B as y}from"./chunk-PULVB27S-12838285.js";import"./chunk-G72KV6MB-93e738e8.js";import"./chunk-VLMMX64R-34a5628b.js";var[N,h]=S({name:"TableStylesContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `}),b=d((r,a)=>{const s=g("Table",r),{className:o,layout:j,...m}=v(r);return e.jsx(N,{value:s,children:e.jsx(x.table,{ref:a,__css:{tableLayout:j,...s.table},className:C("chakra-table",o),...m})})});b.displayName="Table";var k=d((r,a)=>{const s=h();return e.jsx(x.thead,{...r,ref:a,__css:s.thead})}),f=d((r,a)=>{const s=h();return e.jsx(x.tr,{...r,ref:a,__css:s.tr})}),q=d((r,a)=>{const s=h();return e.jsx(x.tbody,{...r,ref:a,__css:s.tbody})}),c=d(({isNumeric:r,...a},s)=>{const o=h();return e.jsx(x.td,{...a,ref:s,__css:o.td,"data-is-numeric":r})}),i=d(({isNumeric:r,...a},s)=>{const o=h();return e.jsx(x.th,{...a,ref:s,__css:o.th,"data-is-numeric":r})});const D=()=>{const{cart:r,removeFromCart:a}=_();if(r.length===0)return e.jsx(u,{children:"No Items in the Cart"});const s=(t,n)=>t*n,o=t=>t.reduce((n,l)=>n+s(l.quantity,l.price),0),j=t=>t.reduce((n,l)=>n+l.price*l.quantity*.1,0),m=t=>t.reduce((l,p)=>l+s(p.quantity,p.price),0)*.01;return e.jsxs(P,{children:[e.jsx(u,{color:"red.500",fontSize:"xl",mb:4,children:"These items are NOT for sale and are for educational purposes only."}),e.jsxs(b,{variant:"simple",size:"md",children:[e.jsx(k,{children:e.jsxs(f,{children:[e.jsx(i,{children:"Product Image"}),e.jsx(i,{children:"Product Name"}),e.jsx(i,{children:"Price"}),e.jsx(i,{children:"Quantity"}),e.jsx(i,{children:"Sub-total"}),e.jsx(i,{children:"Action"})]})}),e.jsx(q,{children:r.map(t=>e.jsxs(f,{children:[e.jsx(c,{children:e.jsx(z,{src:t.imageUrl,alt:t.name,boxSize:"100px",borderColor:"grey"})}),e.jsx(c,{children:t.name}),e.jsxs(c,{children:["$",t.price]}),e.jsx(c,{children:e.jsx(I,{type:"number",defaultValue:t.quantity,onChange:n=>handleQuantityChange(n,t.id),w:"80px"})}),e.jsxs(c,{children:["$",s(t.quantity,t.price).toFixed(2)]}),e.jsx(c,{children:e.jsx(T,{onClick:()=>a(t.id),children:"Remove"})})]},t.id))})]}),e.jsx(y,{my:4,children:e.jsxs(u,{fontSize:"xl",children:["Goods and Services Tax: $",j(r)]})}),e.jsx(y,{my:4,children:e.jsxs(u,{fontSize:"xl",children:["Total: $",o(r).toFixed(2)]})}),e.jsxs(y,{marginBottom:"30px",children:[e.jsxs(u,{fontSize:"xl",color:"green.500",children:["Grand Total (after 99% discount): $",m(r).toFixed(2)]}),e.jsx(T,{colorScheme:"teal",size:"lg",children:"Proceed to Checkout"})]})]})};export{D as default};
