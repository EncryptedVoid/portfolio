/*! For license information please see 454.3b5e4e2b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[454],{5613:(e,t,n)=>{n.d(t,{vr:()=>r});var o=n(5813);const r=[{id:"blackberry-qnx",title:"Software Testing Specialist",company:"BlackBerry QNX",companyLogo:(0,o.O)("logo/qnx-logo.webp"),location:"Kanata, Ontario, Canada",period:{start:"Sep 2024",end:null,display:"Sep 2024 - Present"},shortDescription:"Software testing automation and quality assurance.",fullDescription:"Developed automation testing framework for the QNX Everywhere project, improving testing efficiency and depth while providing quality assurance support.",technologies:["\ud83d\udd04 Test Automation","\u2699\ufe0f CI/CD","\ud83d\udc0d Python","\ud83e\uddea Testing Frameworks","\ud83d\udcca Performance Testing"],achievements:[{stat:"50%",label:"Testing Efficiency",description:"Improved through automation framework"},{stat:"25%",label:"Test Case Depth",description:"Increased coverage and complexity"},{stat:"100%",label:"QA Integration",description:"CICD workflow support"}],links:{company:"https://blackberry.qnx.com",caseStudy:!1}},{id:"freelance-dev",title:"Frontend Developer",company:"Freelance",companyLogo:(0,o.O)("logo/freelance-logo.webp"),location:"Ottawa, Ontario, Canada",period:{start:"Sep 2024",end:null,display:"Sep 2024 - Present"},shortDescription:"Frontend development for various clients.",fullDescription:"Independent frontend development work focusing on creating responsive and user-friendly web applications.",technologies:["\ud83c\udf10 JavaScript","\u269b\ufe0f React","\ud83c\udfa8 CSS","\ud83d\udcf1 Responsive Design","\ud83d\udd27 Web Development"],achievements:[{stat:"100%",label:"Client Satisfaction",description:"Successful project delivery"}],links:{company:null,caseStudy:!1}}]},5813:(e,t,n)=>{n.d(t,{O:()=>o});const o=e=>{if("undefined"!==typeof window){const t=window.location.pathname.includes("/ashiq.github.io")?"/ashiq.github.io":"",n=e.startsWith("/")?e.slice(1):e,o=`${t}/${n}`;return console.log({isProduction:!0,baseUrl:t,originalPath:e,cleanPath:n,finalPath:o,windowLocation:window.location.pathname}),o}return e}},8646:(e,t,n)=>{n.d(t,{A:()=>o});const o=(0,n(1639).A)("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]])},2382:(e,t,n)=>{n.d(t,{A:()=>o});const o=(0,n(1639).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},764:(e,t,n)=>{n.d(t,{A:()=>o});const o=(0,n(1639).A)("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]])},8006:(e,t,n)=>{n.d(t,{A:()=>o});const o=(0,n(1639).A)("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]])},6938:(e,t,n)=>{n.d(t,{N:()=>y});var o=n(5043),r=n(293);function i(){const e=(0,o.useRef)(!1);return(0,r.E)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var s=n(7065);var a=n(9674),c=n(4930);class l extends o.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function p(e){let{children:t,isPresent:n}=e;const r=(0,o.useId)(),i=(0,o.useRef)(null),s=(0,o.useRef)({width:0,height:0,top:0,left:0});return(0,o.useInsertionEffect)((()=>{const{width:e,height:t,top:o,left:a}=s.current;if(n||!i.current||!e||!t)return;i.current.dataset.motionPopId=r;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`\n          [data-motion-pop-id="${r}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            top: ${o}px !important;\n            left: ${a}px !important;\n          }\n        `),()=>{document.head.removeChild(c)}}),[n]),o.createElement(l,{isPresent:n,childRef:i,sizeRef:s},o.cloneElement(t,{ref:i}))}const u=e=>{let{children:t,initial:n,isPresent:r,onExitComplete:i,custom:s,presenceAffectsLayout:l,mode:u}=e;const f=(0,c.M)(d),h=(0,o.useId)(),m=(0,o.useMemo)((()=>({id:h,initial:n,isPresent:r,custom:s,onExitComplete:e=>{f.set(e,!0);for(const t of f.values())if(!t)return;i&&i()},register:e=>(f.set(e,!1),()=>f.delete(e))})),l?void 0:[r]);return(0,o.useMemo)((()=>{f.forEach(((e,t)=>f.set(t,!1)))}),[r]),o.useEffect((()=>{!r&&!f.size&&i&&i()}),[r]),"popLayout"===u&&(t=o.createElement(p,{isPresent:r},t)),o.createElement(a.t.Provider,{value:m},t)};function d(){return new Map}var f=n(2190);var h=n(8129);const m=e=>e.key||"";const y=e=>{let{children:t,custom:n,initial:a=!0,onExitComplete:c,exitBeforeEnter:l,presenceAffectsLayout:p=!0,mode:d="sync"}=e;(0,h.V)(!l,"Replace exitBeforeEnter with mode='wait'");const y=(0,o.useContext)(f.L).forceRender||function(){const e=i(),[t,n]=(0,o.useState)(0),r=(0,o.useCallback)((()=>{e.current&&n(t+1)}),[t]);return[(0,o.useCallback)((()=>s.Gt.postRender(r)),[r]),t]}()[0],g=i(),w=function(e){const t=[];return o.Children.forEach(e,(e=>{(0,o.isValidElement)(e)&&t.push(e)})),t}(t);let k=w;const v=(0,o.useRef)(new Map).current,x=(0,o.useRef)(k),E=(0,o.useRef)(new Map).current,C=(0,o.useRef)(!0);var b;if((0,r.E)((()=>{C.current=!1,function(e,t){e.forEach((e=>{const n=m(e);t.set(n,e)}))}(w,E),x.current=k})),b=()=>{C.current=!0,E.clear(),v.clear()},(0,o.useEffect)((()=>()=>b()),[]),C.current)return o.createElement(o.Fragment,null,k.map((e=>o.createElement(u,{key:m(e),isPresent:!0,initial:!!a&&void 0,presenceAffectsLayout:p,mode:d},e))));k=[...k];const P=x.current.map(m),R=w.map(m),A=P.length;for(let o=0;o<A;o++){const e=P[o];-1!==R.indexOf(e)||v.has(e)||v.set(e,void 0)}return"wait"===d&&v.size&&(k=[]),v.forEach(((e,t)=>{if(-1!==R.indexOf(t))return;const r=E.get(t);if(!r)return;const i=P.indexOf(t);let s=e;if(!s){const e=()=>{v.delete(t);const e=Array.from(E.keys()).filter((e=>!R.includes(e)));if(e.forEach((e=>E.delete(e))),x.current=w.filter((n=>{const o=m(n);return o===t||e.includes(o)})),!v.size){if(!1===g.current)return;y(),c&&c()}};s=o.createElement(u,{key:m(r),isPresent:!1,onExitComplete:e,custom:n,presenceAffectsLayout:p,mode:d},r),v.set(t,s)}k.splice(i,0,s)})),k=k.map((e=>{const t=e.key;return v.has(t)?e:o.createElement(u,{key:m(e),isPresent:!0,presenceAffectsLayout:p,mode:d},e)})),o.createElement(o.Fragment,null,v.size?k:k.map((e=>(0,o.cloneElement)(e))))}}}]);
//# sourceMappingURL=454.3b5e4e2b.chunk.js.map