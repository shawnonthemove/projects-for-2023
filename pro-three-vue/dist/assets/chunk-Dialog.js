import{_ as c}from"./chunk-_plugin-vue_export-helper.js";import{o as l,c as _,a as t,m as r,p as n,e as i,i as p,d as u,u as v,y as m}from"./index.js";const b=e=>(n("data-v-54ac0bd8"),e=e(),i(),e),f={key:0,class:"container"},g=b(()=>t("span",null,"Content of the Dialog...",-1)),h={__name:"DialogItem",props:{visiable:Boolean},emits:["close"],setup(e,{emit:o}){const s=()=>{o("close",!1)};return(d,a)=>e.visiable?(l(),_("div",f,[t("div",{class:"content"},[g,t("button",{onClick:s},"close")])])):r("",!0)}},D=c(h,[["__scopeId","data-v-54ac0bd8"]]);const I=e=>(n("data-v-735631b3"),e=e(),i(),e),x={class:"container"},y=I(()=>t("h1",null,"Touch the button to create a Dialog.",-1)),k={__name:"Dialog",setup(e){let o=p(!1);const s=()=>{o.value=!1};return(d,a)=>(l(),_("div",x,[u(D,{visiable:v(o),onClose:s},null,8,["visiable"]),y,t("button",{onClick:a[0]||(a[0]=()=>m(o)?o.value=!0:o=!0)},"创建Dialog")]))}},S=c(k,[["__scopeId","data-v-735631b3"]]);export{S as default};