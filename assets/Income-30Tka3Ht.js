import{R as d,a6 as x,j as e}from"./index-4TuXYIMR.js";import{d as m,a as u,B as j}from"./BasicModal-iEJzR4ph.js";import{F as f}from"./FormatedNumber-bwQFpXUV.js";import{T as c,I as o}from"./Dashbord-n7TepkuL.js";import"./Select-PZ1lkyFr.js";import"./Box-nMzVZLWr.js";import"./TextField-uO4fhLup.js";const w=()=>{const{totalIncome:s,incomesArray:a}=d(t=>t.accountData),[i,n]=x.useState(!1),l=()=>n(!0),r=(()=>{const t=a[a.length-1];return t?(t/s*100).toFixed(2):0})();return e.jsxs("div",{className:"flex flex-col justify-between h-full",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h1",{children:"Income"}),e.jsxs("div",{children:[e.jsx(c,{title:"Add Income",children:e.jsxs(o,{onClick:l,className:"text-slate-600 dark:text-slate-50",children:[" ",e.jsx(m,{})," "]})}),e.jsx(c,{title:"More",children:e.jsxs(o,{className:"text-slate-600 dark:text-slate-50",children:[" ",e.jsx(u,{})," "]})})]})]}),e.jsxs("div",{children:[e.jsxs("h1",{className:"text-3xl font-bold italic  ",children:["₹",f(s)]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-500",children:"this week's Income"}),e.jsxs("span",{className:` px-2 rounded-full ${r<0?"text-red-900 bg-red-300":"text-green-900 bg-green-300"} `,children:[r,"%"]})]})]}),e.jsx(j,{open:i,setOpen:n,handleOpen:l,isCredit:!0})]})};export{w as default};