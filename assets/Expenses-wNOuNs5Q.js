import{R as x,a6 as d,j as e}from"./index-N8d739kH.js";import{d as m,a as p,B as u}from"./BasicModal-GdRbQfpk.js";import{F as f}from"./FormatedNumber-bwQFpXUV.js";import{T as c}from"./Dashbord-Jc7-Q9tD.js";import{I as i}from"./IconButton-2qQptBna.js";import"./Select-X6DYC902.js";import"./Box-lLcftWbw.js";import"./TextField-Mca3R1en.js";const B=()=>{const{totalExpence:t,expencesArray:a}=x(s=>s.accountData),[o,n]=d.useState(!1),l=()=>n(!0),r=(()=>{const s=a[a.length-1];return s?(s.amount/t*100).toFixed(2):0})();return e.jsxs("div",{className:"flex flex-col justify-between h-full",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h1",{children:"Expenses"}),e.jsxs("div",{children:[e.jsx(c,{title:"Add Expence",children:e.jsxs(i,{className:"text-slate-600 dark:text-slate-50",onClick:l,children:[" ",e.jsx(m,{})," "]})}),e.jsx(c,{title:"More",children:e.jsxs(i,{className:"text-slate-600 dark:text-slate-50",children:[" ",e.jsx(p,{})," "]})})]})]}),e.jsxs("div",{children:[e.jsxs("h1",{className:"text-3xl font-bold italic",children:["₹",f(t)]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-500",children:"this week's Income"}),e.jsxs("span",{className:` px-2 rounded-full ${r<0?"text-red-900 bg-red-300":"text-green-900 bg-green-300"} `,children:[r,"%"]})]})]}),e.jsx(u,{open:o,setOpen:n,handleOpen:l,isCredit:!1})]})};export{B as default};
