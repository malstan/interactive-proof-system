import{l as u,c as o,h as n,p as r,g as m}from"./index.04e7caea.js";import{u as v,a as p}from"./use-dark.56db28bb.js";var q=u({name:"QBanner",props:{...v,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:t}){const{proxy:{$q:l}}=m(),c=p(e,l),i=o(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(c.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),d=o(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const s=[n("div",{class:"q-banner__avatar col-auto row items-center self-start"},r(t.avatar)),n("div",{class:"q-banner__content col text-body2"},r(t.default))],a=r(t.action);return a!==void 0&&s.push(n("div",{class:d.value},a)),n("div",{class:i.value+(e.inlineActions===!1&&a!==void 0?" q-banner--top-padding":""),role:"alert"},s)}}});let b=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,b=e.scrollLeft>=0,e.remove()}export{q as Q,b as r};
