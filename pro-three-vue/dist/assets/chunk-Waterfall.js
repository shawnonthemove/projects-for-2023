import{_ as u}from"./chunk-_plugin-vue_export-helper.js";import{f,k as m,o as h,c as i,F as g,r as x,h as M,j as b,u as k}from"./index.js";const y={class:"wraps"},v={__name:"WaterFallItem",props:{data:Array},setup(_){const t=_,e=f([]),n=()=>{let s=130,p=document.body.clientWidth,o=Math.floor(p/s),r=[];for(let a=0;a<t.data.length;a++)if(a<o)t.data[a].left=a*s,t.data[a].top=20,e.push(t.data[a]),r.push(t.data[a].height+20);else{let d=0,c=1/0;for(let l=0;l<r.length;l++)r[l]<c&&(c=r[l],d=l);r[d]=t.data[a].height+10+r[d],t.data[a].left=d*s,t.data[a].top=10+c,e.push(t.data[a])}};return m(()=>{n(),alert("dom init finished!")}),(s,p)=>(h(),i("div",y,[(h(!0),i(g,null,x(e,o=>(h(),i("div",{class:"items",style:M({left:o.left+"px",top:o.top+"px",height:o.height+"px",backgroundColor:o.background})},null,4))),256))]))}},F=u(v,[["__scopeId","data-v-b7272273"]]),$={__name:"Waterfall",setup(_){let t=[];for(let e=0;e<50;e++){let n={height:Math.floor(Math.random()*451+50),background:`rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`};t.push(n)}return(e,n)=>(h(),b(F,{data:k(t)},null,8,["data"]))}};export{$ as default};
