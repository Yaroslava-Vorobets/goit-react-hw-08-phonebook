"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[473],{7473:function(n,e,t){t.r(e),t.d(e,{default:function(){return dn}});var r,a,o,i,u,c=t(9439),s=t(9434),l=t(2791),d=t(168),p=t(7691),f=p.ZP.form(r||(r=(0,d.Z)(["     \n    border: 4px solid #FAF5FF;\n    border-radius: 8px;\n    background: #E9D8FD;   \n    display: flex;\n    flex-direction: column;    \n    justify-content: center;    \n    margin: 0 auto; \n    padding: 20px; "]))),x=p.ZP.label(a||(a=(0,d.Z)(["   \n    text-shadow: 0 1px 0 rgb(170 227 246), 0px 2px 0  rgb(170 227 246);\n    text-transform: uppercase;   \n    color: #B794F4;\n    margin-bottom: 10px;\n    letter-spacing: 4px;\n    font: normal 26px Verdana, Helvetica;\n   "]))),m=p.ZP.input(o||(o=(0,d.Z)(["   \n    border: 2px solid #FAF5FF;\n    border-radius: 4px;\n    padding: 6px 16px 6px 20px;\n    margin: 0 0 6px 0; \n    color: #5F5F5F;\n    box-shadow: \n    inset 0 2px 0 rgba(0,0,0,.2), \n    0 0 4px rgba(0,0,0,0.1);"]))),g=p.ZP.button(i||(i=(0,d.Z)(["   \n    width: 200px;  \n    display: inline-block;\n    margin: auto;\n    margin-top: 10px;\n    padding: 15px 15px;\n    color: #fff;\n    background: #9F7AEA;\n    border: 0px;\n    border-radius: 12px;\n    cursor: pointer;\n    transition: all 0.3s ease-out;\n    box-shadow:\n    inset 0px 2px 2px rgba(255,255,255,0.6),\n    2px 2px 2px rgba(0,0,0,0.1),\n    0 0 4px 1px rgba(0,0,0,0.2);"]))),h=(p.ZP.ul(u||(u=(0,d.Z)(["\n    padding-left:0;\n    display: flex;\n    justify-content: center;    \n    margin: 0 auto;   \n "]))),t(3634)),b=t(9085),v="NOT_FOUND";var y=function(n,e){return n===e};function F(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,a=void 0===r?y:r,o=t.maxSize,i=void 0===o?1:o,u=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!n(e[a],t[a]))return!1;return!0}}(a),s=1===i?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:v},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return v}return{get:r,put:function(e,a){r(e)===v&&(t.unshift({key:e,value:a}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,c);function l(){var e=s.get(arguments);if(e===v){if(e=n.apply(null,arguments),u){var t=s.getEntries(),r=t.find((function(n){return u(n.value,e)}));r&&(e=r.value)}s.put(arguments,e)}return e}return l.clearCache=function(){return s.clear()},l}function Z(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function j(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var o,i=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=u,l=s.memoizeOptions,d=void 0===l?t:l,p=Array.isArray(d)?d:[d],f=Z(r),x=n.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(p)),m=n((function(){for(var n=[],e=f.length,t=0;t<e;t++)n.push(f[t].apply(null,arguments));return o=x.apply(null,n)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:x,dependencies:f,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),m};return a}var w,k,A=j(F),C=function(n){return n.contacts.items},z=function(n){return n.contacts.isLoading},P=function(n){return n.contacts.error},N=A([C,function(n){return n.filter}],(function(n,e){var t=e.toLowerCase().trim();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),E=t(4087),S=t(8206),D=t(3329);function q(){var n=(0,l.useState)(""),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)(""),o=(0,c.Z)(a,2),i=o[0],u=o[1],d=(0,s.v9)(C),p=(0,s.I0)();console.log(d);var v=function(n){var e=n.target,t=e.name,a=e.value;switch(console.log(t,a),t){case"name":r(a);break;case"number":u(a);break;default:return}};return(0,D.jsx)(E.xu,{children:(0,D.jsx)(S.W,{maxW:"container.lg",p:6,children:(0,D.jsxs)(f,{onSubmit:function(n){n.preventDefault(),d.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}))?(0,b.Am)("".concat(t," is alredy in contacts")):d.find((function(n){return n.number===i}))?(0,b.Am)("".concat(i," is alredy in contacts")):(p((0,h.uK)({name:t,number:i})),r(""),u(""))},children:[(0,D.jsx)(x,{htmlFor:"fname",children:"Name "}),(0,D.jsx)(m,{onChange:v,value:t,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,D.jsx)(x,{htmlFor:"fname",children:"Number"}),(0,D.jsx)(m,{onChange:v,value:i,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,D.jsx)(g,{type:"submit",children:"add contact"})]})})})}var I,_,L,O,B,H,M,R=p.ZP.label(w||(w=(0,d.Z)(["   \n    text-shadow: 0 1px 0 rgb(170 227 246), 0px 2px 0  rgb(170 227 246);\n    text-transform: uppercase;   \n    color:  #B794F4;\n    margin-bottom: 10px;\n    letter-spacing: 4px;\n    font: normal 26px Verdana, Helvetica;    \n   "]))),J=p.ZP.input(k||(k=(0,d.Z)(["   \n    border: 2px solid #ebf2fc;\n    border-radius: 4px; \n    padding: 10px;\n    width: 40%;\n    margin-left: 10px; \n     margin-bottom: 10px; \n    color: #5F5F5F;\n    box-shadow: \n    inset 0 2px 0 rgba(0,0,0,.2), \n    0 0 4px rgba(0,0,0,0.1);"]))),U=t(4644),$=function(){var n=(0,s.I0)();return console.log((function(n){return n.target.value})),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(R,{htmlFor:"fname",children:"Fined contacts by name"}),(0,D.jsx)(J,{onChange:function(e){return n((0,U.e)(e.target.value))},type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})},G=p.ZP.li(I||(I=(0,d.Z)(["\n    list-style: none;\n    border-radius: 5px;\n    padding: 23px;     \n    display: flex;\n    align-items: center;\n    justify-content:space-between;\n    background-color: #E9D8FD;\n    border: 1px solid #FAF5FF;\n "]))),K=p.ZP.div(_||(_=(0,d.Z)(["  \n    display: flex;   \n    align-items: center;\n    padding: 0 34px;\n    background-color:  #FAF5FF;\n    border: 1px solid #a4a6a8;\n    border-radius: 5px;\n "]))),V=p.ZP.div(L||(L=(0,d.Z)(["  \n    margin-right: 10px;\n    padding: 10px 0;    \n    \n "]))),W=p.ZP.button(O||(O=(0,d.Z)([" \n    background-color:#9F7AEA;\n    border-radius: 5px;\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px; "]))),T=function(n){var e=n.id,t=n.name,r=n.number,a=(0,s.I0)();return(0,D.jsxs)(G,{children:[(0,D.jsxs)(K,{children:[(0,D.jsxs)(V,{children:[t,":"]}),(0,D.jsxs)(V,{children:[" ",r]})]}),(0,D.jsx)(W,{onClick:function(){return a((0,h.GK)(e))},type:"button",children:"Delete"})]},e)},Q=p.ZP.ul(B||(B=(0,d.Z)(["\n    padding-left:0;\n    display: flex;\n    flex-direction: column;\n "]))),X=function(){var n=(0,s.v9)(N);return(0,D.jsx)(Q,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,D.jsx)(T,{name:t,id:e,number:r},e)}))})},Y=((0,p.vJ)(H||(H=(0,d.Z)(["\n   body {\n//   margin: 0;\n//   padding: 15px;\n//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n//     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n//     sans-serif;\n//   -webkit-font-smoothing: antialiased;\n//   -moz-osx-font-smoothing: grayscale;\n// }\n// code {\n//   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n//     monospace;\n// }\n// ul {\n//   list-style: none;\n//   text-decoration: none;\n//   padding: 0;\n//   margin: 0;\n// }\n// h1,\n// h2,\n// h3 {\n//   margin: 0;\n// }\n// p {\n//   margin: 0;\n// }\n// img {\n//   display: block;\n//   max-width: 100%;\n//   width: 100%;\n//   height: auto;\n// }\n"]))),p.ZP.div(M||(M=(0,d.Z)([" \n    max-width: 800px;\n    margin: auto;    \n    padding-left: 16px;\n    padding-right: 16px;\n    padding-bottom: 20px;\n    "])))),nn=t(8503),en=t(1413),tn=t(4925),rn=t(7872),an=t(9219),on=t(9477),un=t(1999),cn=t(6992),sn=["className"],ln=(0,rn.G)((function(n,e){var t=(0,an.mq)("Heading",n),r=(0,on.Lr)(n),a=(r.className,(0,tn.Z)(r,sn));return(0,D.jsx)(un.m.h2,(0,en.Z)((0,en.Z)({ref:e,className:(0,cn.cx)("chakra-heading",n.className)},a),{},{__css:t}))}));function dn(){var n=(0,s.I0)(),e=(0,s.v9)(P),t=(0,s.v9)(z),r=(0,s.v9)(C);return(0,l.useEffect)((function(){n((0,h.yF)())}),[n]),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(Y,{children:[(0,D.jsx)(ln,{as:"h1",size:"xl",color:"#44337A",mb:"4",children:" Phonebook"}),(0,D.jsx)($,{}),(0,D.jsx)(q,{}),(0,D.jsx)(ln,{as:"h2",size:"lg",mb:"4",color:"#44337A",children:"Contacts"}),t&&!e&&(0,D.jsx)(nn.$,{}),r.length>0&&(0,D.jsx)(X,{})]}),(0,D.jsx)(b.Ix,{autoClose:2e3})]})}ln.displayName="Heading"}}]);
//# sourceMappingURL=473.327b75c1.chunk.js.map