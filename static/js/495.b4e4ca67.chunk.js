"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[495],{9495:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r,a=t(9434),s=function(e){return e.contacts.items},c=t(3634),i=t(2791),o=t(9439),u=t(3329),l=function(){var e=(0,i.useState)(""),n=(0,o.Z)(e,2),t=n[0],r=n[1],s=(0,i.useState)(""),l=(0,o.Z)(s,2),d=l[0],h=l[1],m=(0,a.I0)(),p=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":r(a);break;case"number":h(a);break;default:throw new Error("Field type with a name ".concat(t," is not processed"))}},x=function(){r(""),h("")};return(0,u.jsx)("div",{children:(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={name:t,number:d};m((0,c.uK)(n)),x()},children:[(0,u.jsxs)("label",{children:["Name",(0,u.jsx)("input",{onChange:p,value:t,name:"name",type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)("label",{children:["Number",(0,u.jsx)("input",{onChange:p,value:d,name:"number",type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,u.jsx)("button",{type:"submit",children:"Add contact"})]})})},d=function(){var e=(0,a.I0)(),n=(0,a.v9)(s);console.log("ContactsList",n);return(0,u.jsxs)("div",{children:["ContactsList",n&&(0,u.jsx)("ul",{children:n.map((function(n){var t=n.id,r=n.name,a=n.number;return(0,u.jsxs)("li",{children:[(0,u.jsx)("p",{children:r}),(0,u.jsx)("p",{children:a}),(0,u.jsx)("button",{type:"button",onClick:function(){return function(n){e((0,c.GK)(n))}(t)},children:"Delete"})]},t)}))})]})},h=t(168),m=t(7691).ZP.div(r||(r=(0,h.Z)(["\n  padding: 10px;\n  /* display: flex; */\n  /* justify-content: center; */\n"]))),p=function(){var e=(0,a.I0)(),n=(0,a.v9)(s);return(0,i.useEffect)((function(){e((0,c.yF)())}),[e]),(0,u.jsxs)(m,{children:[(0,u.jsx)("title",{children:"Phonebook"}),0===n.length?(0,u.jsx)("div",{children:"Add New Contact to your Phonebook"}):(0,u.jsxs)("p",{children:["You have ",n.length," contacts"]}),(0,u.jsx)(l,{}),(0,u.jsx)("h2",{children:" Your ContactsList"}),n.length>0&&(0,u.jsx)(d,{})]})};function x(){return(0,u.jsx)(p,{})}}}]);
//# sourceMappingURL=495.b4e4ca67.chunk.js.map