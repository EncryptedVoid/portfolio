/*! For license information please see 844.9fc49272.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[844],{1602:(e,t,s)=>{s.d(t,{A:()=>i});s(5043);var n=s(579);const i=e=>{let{children:t,className:s="",hover:i=!0,gradient:r=!1,onClick:a,as:l="div"}=e;const c=l,o=i?"\n    transition-all\n    duration-500\n    ease-out\n    hover:bg-white/[0.06]\n    hover:border-white/[0.12]\n    hover:-translate-y-1\n    hover:shadow-xl\n    hover:shadow-blue-500/10\n  ":"",d=a?"cursor-pointer active:scale-[0.98]":"";return(0,n.jsxs)(c,{className:`\n        \n    relative\n    overflow-hidden\n    bg-white/[0.03]\n    border border-white/[0.08]\n    backdrop-blur-2xl\n    rounded-3xl\n    p-6\n  \n        ${o}\n        ${d}\n        ${s}\n      `,onClick:a,children:[r&&(0,n.jsx)("div",{className:"\n          absolute inset-0\n          bg-gradient-to-br from-white/[0.12] to-white/[0.06]\n          opacity-0 transition-opacity duration-500\n          group-hover:opacity-100\n        "}),(0,n.jsx)("div",{className:"relative z-10",children:t})]})}},2844:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});var n=s(5043),i=s(813),r=s(6938),a=s(1602),l=s(579);var c=s(614),o=s(5088),d=s(2105),m=s(1639);const p=(0,m.A)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]),h=(0,m.A)("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);var x=s(4537);const u=(0,m.A)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),f=(0,m.A)("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]);var g=s(295),v=s(2433);const y=()=>{var e,t,s,m;const[y,w]=(0,n.useState)(null),[j,b]=(0,n.useState)(null),[N,k]=(0,n.useState)(""),C=[...new Set(g.rw.flatMap((e=>e.skills.flatMap((e=>e.tags)))))],A=g.rw.map((e=>({...e,skills:e.skills.filter((e=>{const t=e.name.toLowerCase().includes(N.toLowerCase())||e.description.toLowerCase().includes(N.toLowerCase()),s=!j||e.tags.includes(j);return t&&s}))}))).filter((e=>e.skills.length>0));return(0,l.jsxs)("div",{className:"py-20",children:[(0,l.jsxs)(i.P.div,{className:"text-center max-w-3xl mx-auto mb-16",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[(0,l.jsx)(v.h,{text:"Skills & Expertise",size:3,typingSpeed:100,delayBeforeRestart:6e4}),(0,l.jsx)("p",{className:"text-lg text-white/60",children:"A comprehensive overview of my technical capabilities and professional experience across different domains."})]}),(0,l.jsx)("div",{className:"max-w-7xl mx-auto mb-12",children:(0,l.jsx)(a.A,{className:"p-6",children:(0,l.jsx)("div",{className:"flex flex-wrap gap-3",children:C.map(((e,t)=>(0,l.jsx)("button",{onClick:()=>b(j===e?null:e),className:`\n                  px-4 py-2\n                  rounded-xl\n                  text-sm\n                  font-medium\n                  transition-all duration-300\n                  ${j===e?"bg-blue-500 text-white shadow-lg shadow-blue-500/20":"bg-white/5 text-white/60 hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/5"}\n                  ${t>=7?"hidden lg:block":""}\n                `,children:e},e)))})})}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:A.map(((e,t)=>(0,l.jsx)(i.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1*t},children:(0,l.jsx)("button",{onClick:()=>w(y===e.id?null:e.id),className:"w-full text-left h-full",children:(0,l.jsxs)(a.A,{className:`p-6 transition-all duration-300 hover:scale-105 h-48\n                  ${y===e.id?"border-blue-500":"border-white/10"}\n                  flex flex-col justify-between`,children:[(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsxs)("div",{className:"flex items-center gap-4",children:[(0,l.jsx)("span",{className:"text-2xl",children:e.icon}),(0,l.jsx)("h2",{className:"text-xl font-bold text-white leading-tight",children:e.title})]}),(0,l.jsx)("p",{className:"text-white/60 text-sm line-clamp-2",children:e.description})]}),(0,l.jsxs)("div",{className:"flex justify-between items-center mt-auto pt-4 border-t border-white/[0.06]",children:[(0,l.jsx)("span",{className:"text-sm text-white/40",children:e.experience}),(0,l.jsxs)("span",{className:"text-sm text-white/40",children:[e.skills.length," skills"]})]})]})})},e.id)))}),(0,l.jsx)(r.N,{children:y&&(0,l.jsx)(i.P.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",onClick:e=>{e.target===e.currentTarget&&w(null)},children:(0,l.jsxs)(i.P.div,{className:"w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl",onClick:e=>e.stopPropagation(),children:[(0,l.jsxs)("div",{className:"sticky top-0 z-10 flex justify-between items-center p-6 bg-gray-900/80 backdrop-blur-lg border-b border-white/10",children:[(0,l.jsxs)("div",{className:"flex items-center gap-4",children:[(0,l.jsx)("span",{className:"text-3xl",children:null===(e=A.find((e=>e.id===y)))||void 0===e?void 0:e.icon}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"text-2xl md:text-3xl font-bold text-white",children:null===(t=A.find((e=>e.id===y)))||void 0===t?void 0:t.title}),(0,l.jsx)("p",{className:"text-white/60 text-sm md:text-base mt-1",children:null===(s=A.find((e=>e.id===y)))||void 0===s?void 0:s.experience})]})]}),(0,l.jsx)("button",{onClick:()=>w(null),className:"p-2 hover:bg-white/10 rounded-full transition-colors",children:(0,l.jsx)(c.A,{className:"w-6 h-6 text-white/60"})})]}),(0,l.jsx)("div",{className:"p-6 md:p-8",children:(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",children:null===(m=A.find((e=>e.id===y)))||void 0===m?void 0:m.skills.map(((e,t)=>(0,l.jsxs)(i.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},className:"bg-white/[0.03] rounded-2xl p-6 border border-white/[0.06]",children:[(0,l.jsx)("div",{className:"flex justify-between items-start mb-4",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-xl font-semibold text-white mb-1",children:e.name}),(0,l.jsxs)("div",{className:"flex items-center gap-2 text-white/40 text-sm",children:[(0,l.jsx)(o.A,{className:"w-4 h-4"}),(0,l.jsxs)("span",{children:["Since ",e.yearStarted]})]})]})}),(0,l.jsxs)("div",{className:"hidden md:grid grid-cols-2 gap-4 mb-4",children:[e.metrics.linesOfCode>0&&(0,l.jsxs)("div",{className:"bg-white/[0.02] rounded-lg p-3",children:[(0,l.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,l.jsx)(d.A,{className:"w-4 h-4 text-blue-400"}),(0,l.jsx)("p",{className:"text-white/40 text-sm",children:"Lines Written"})]}),(0,l.jsxs)("p",{className:"text-white font-semibold",children:[e.metrics.linesOfCode.toLocaleString()," \ud83d\udcdd"]})]}),(0,l.jsxs)("div",{className:"bg-white/[0.02] rounded-lg p-3",children:[(0,l.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,l.jsx)(p,{className:"w-4 h-4 text-green-400"}),(0,l.jsx)("p",{className:"text-white/40 text-sm",children:"Projects"})]}),(0,l.jsxs)("p",{className:"text-white font-semibold",children:[e.metrics.projectsCompleted," \ud83c\udfaf"]})]}),(0,l.jsxs)("div",{className:"bg-white/[0.02] rounded-lg p-3",children:[(0,l.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,l.jsx)(h,{className:"w-4 h-4 text-purple-400"}),(0,l.jsx)("p",{className:"text-white/40 text-sm",children:"Contributions"})]}),(0,l.jsxs)("p",{className:"text-white font-semibold",children:[e.metrics.contributions," \ud83d\udd04"]})]}),(0,l.jsxs)("div",{className:"bg-white/[0.02] rounded-lg p-3",children:[(0,l.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,l.jsx)(x.A,{className:"w-4 h-4 text-orange-400"}),(0,l.jsx)("p",{className:"text-white/40 text-sm",children:"Activity Level"})]}),(0,l.jsx)("p",{className:"text-white font-semibold",children:"High \u26a1"})]})]}),(0,l.jsxs)("div",{className:"flex gap-2 text-white/60 text-sm md:text-base mb-4",children:[(0,l.jsx)(u,{className:"w-5 h-5 flex-shrink-0 mt-1 text-white/40"}),(0,l.jsx)("p",{children:e.description})]}),(0,l.jsxs)("div",{className:"space-y-3",children:[(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)(p,{className:"w-4 h-4 text-yellow-400"}),(0,l.jsx)("p",{className:"text-white/40 text-sm font-medium",children:"Recent Projects:"})]}),e.recentProjects.map(((e,t)=>(0,l.jsxs)("div",{className:"flex justify-between items-center text-sm bg-white/[0.02] rounded-lg p-2",children:[(0,l.jsxs)("span",{className:"text-white/80",children:["\ud83d\udcc2 ",e.name]}),(0,l.jsxs)("span",{className:"text-white/40",children:["\ud83d\udcca ",e.metric]})]},t)))]}),(0,l.jsxs)("div",{className:"flex flex-wrap gap-2 mt-4",children:[(0,l.jsxs)("div",{className:"flex items-center gap-2 w-full mb-1",children:[(0,l.jsx)(f,{className:"w-4 h-4 text-blue-400"}),(0,l.jsx)("span",{className:"text-white/40 text-sm",children:"Technologies:"})]}),e.tags.map(((e,t)=>(0,l.jsxs)("span",{className:"px-2 py-1 text-xs rounded-full bg-white/[0.06] text-white/60",children:["\ud83d\udd39 ",e]},t)))]})]},e.name)))})})]})})})]})]})}},295:(e,t,s)=>{s.d(t,{rw:()=>n});const n=[{id:"testing-automation",title:"Testing & Automation",icon:"\ud83e\uddea",description:"Software testing automation and quality assurance expertise",experience:"2024-Present",skills:[{name:"Test Automation",yearStarted:"2024",metrics:{linesOfCode:5e3,projectsCompleted:2,contributions:100},description:"Development of automation testing frameworks and quality assurance",recentProjects:[{name:"QNX Automation Framework",metric:"3K lines"},{name:"Performance Testing",metric:"2K lines"}],tags:["Testing","Automation","QA"]},{name:"CI/CD Pipelines",yearStarted:"2024",metrics:{linesOfCode:2e3,projectsCompleted:1,contributions:50},description:"Implementation of continuous integration and deployment workflows",recentProjects:[{name:"CICD Workflow",metric:"2K lines"}],tags:["GitLab","CI/CD","DevOps"]}]},{id:"frontend-dev",title:"Frontend Development",icon:"\ud83c\udfa8",description:"Web development and user interface design",experience:"2023-Present",skills:[{name:"Web Development",yearStarted:"2023",metrics:{linesOfCode:1e4,projectsCompleted:8,contributions:200},description:"Frontend development focusing on responsive and interactive web applications",recentProjects:[{name:"Russell Driving School",metric:"4K lines"},{name:"Weather Dashboard",metric:"2K lines"}],tags:["JavaScript","CSS","HTML"]},{name:"React Development",yearStarted:"2023",metrics:{linesOfCode:5e3,projectsCompleted:3,contributions:150},description:"Building modern web applications using React",recentProjects:[{name:"Mock ThreeJS Portfolio",metric:"3K lines"},{name:"Todo List WebApp",metric:"2K lines"}],tags:["React","Frontend","UI/UX"]}]},{id:"computer-science",title:"Computer Science Fundamentals",icon:"\ud83d\udcbb",description:"Core computer science concepts and implementations",experience:"2023-Present",skills:[{name:"Computer Architecture",yearStarted:"2023",metrics:{linesOfCode:3e3,projectsCompleted:4,contributions:80},description:"Understanding and implementation of computer architecture concepts",recentProjects:[{name:"CUDA Samples",metric:"2K lines"},{name:"Architecture Projects",metric:"1K lines"}],tags:["Architecture","Systems","Hardware"]},{name:"Algorithms",yearStarted:"2023",metrics:{linesOfCode:4e3,projectsCompleted:5,contributions:100},description:"Implementation of scheduling and optimization algorithms",recentProjects:[{name:"Conway's Game of Life",metric:"2K lines"},{name:"JUDOKU Sudoku",metric:"2K lines"}],tags:["Algorithms","Data Structures","Optimization"]}]},{id:"ai-ml",title:"AI & Machine Learning",icon:"\ud83e\udde0",description:"Artificial Intelligence and Machine Learning projects",experience:"2023-Present",skills:[{name:"ML Development",yearStarted:"2023",metrics:{linesOfCode:6e3,projectsCompleted:3,contributions:120},description:"Development of machine learning applications and analysis tools",recentProjects:[{name:"ASGARD Investment Analysis",metric:"3K lines"},{name:"FortuneAI",metric:"3K lines"}],tags:["Machine Learning","Python","Data Analysis"]},{name:"Data Science",yearStarted:"2023",metrics:{linesOfCode:3e3,projectsCompleted:2,contributions:60},description:"Data analysis and scientific computing",recentProjects:[{name:"SCIKIT Experimenting",metric:"2K lines"},{name:"ML Experimenting",metric:"1K lines"}],tags:["Data Science","Analytics","Statistics"]}]}]},2433:(e,t,s)=>{s.d(t,{h:()=>a});var n=s(5043),i=s(7338),r=s(579);const a=e=>{let{text:t,typingSpeed:s=100,delayBeforeRestart:a=6e4,size:l=1,fromColor:c="#FA8072",toColor:o="#ac8be0"}=e;const[d,m]=(0,n.useState)(""),[p,h]=(0,n.useState)(!0),[x,u]=(0,n.useState)(!0),[f,g]=(0,n.useState)(!1),v={fontFamily:"'Roboto Mono', monospace",fontSize:`${l}rem`,letterSpacing:"0.05em",fontWeight:"400",...c&&o?{background:`linear-gradient(to right, ${c}, ${o})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}:{}},y={height:1.2*l+"rem",...c&&o?{background:`linear-gradient(to bottom, ${c}, ${o})`}:{}},w=(0,n.useCallback)((()=>{h(!0),g(!1),m("")}),[]);(0,n.useEffect)((()=>{let e;if(p)return e=f?d.length>0?setTimeout((()=>{m(t.slice(0,d.length-1))}),s/2):setTimeout(w,500):d.length<t.length?setTimeout((()=>{m(t.slice(0,d.length+1))}),s):setTimeout((()=>{g(!0)}),a),()=>clearTimeout(e)}),[d,p,f,t,s,a,w]),(0,n.useEffect)((()=>{w()}),[w]),(0,n.useEffect)((()=>{if(!p||d.length<t.length||f)return void u(!0);const e=setInterval((()=>{u((e=>!e))}),530);return()=>clearInterval(e)}),[p,d.length,t.length,f]);const j=(0,i.A)(),b={display:"flex",justifyContent:j?"center":"flex-start",width:"100%",...j&&{textAlign:"center"}};return(0,r.jsxs)("div",{style:b,children:[(0,r.jsx)("span",{style:v,children:d}),(0,r.jsx)("span",{className:"ml-1 w-[2px] transition-opacity duration-200 "+(x?"opacity-100":"opacity-0"),style:y})]})}},4537:(e,t,s)=>{s.d(t,{A:()=>n});const n=(0,s(1639).A)("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]])},5088:(e,t,s)=>{s.d(t,{A:()=>n});const n=(0,s(1639).A)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]])},614:(e,t,s)=>{s.d(t,{A:()=>n});const n=(0,s(1639).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},6938:(e,t,s)=>{s.d(t,{N:()=>f});var n=s(5043),i=s(293);function r(){const e=(0,n.useRef)(!1);return(0,i.E)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var a=s(7065);var l=s(9674),c=s(4930);class o extends n.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function d(e){let{children:t,isPresent:s}=e;const i=(0,n.useId)(),r=(0,n.useRef)(null),a=(0,n.useRef)({width:0,height:0,top:0,left:0});return(0,n.useInsertionEffect)((()=>{const{width:e,height:t,top:n,left:l}=a.current;if(s||!r.current||!e||!t)return;r.current.dataset.motionPopId=i;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`\n          [data-motion-pop-id="${i}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            top: ${n}px !important;\n            left: ${l}px !important;\n          }\n        `),()=>{document.head.removeChild(c)}}),[s]),n.createElement(o,{isPresent:s,childRef:r,sizeRef:a},n.cloneElement(t,{ref:r}))}const m=e=>{let{children:t,initial:s,isPresent:i,onExitComplete:r,custom:a,presenceAffectsLayout:o,mode:m}=e;const h=(0,c.M)(p),x=(0,n.useId)(),u=(0,n.useMemo)((()=>({id:x,initial:s,isPresent:i,custom:a,onExitComplete:e=>{h.set(e,!0);for(const t of h.values())if(!t)return;r&&r()},register:e=>(h.set(e,!1),()=>h.delete(e))})),o?void 0:[i]);return(0,n.useMemo)((()=>{h.forEach(((e,t)=>h.set(t,!1)))}),[i]),n.useEffect((()=>{!i&&!h.size&&r&&r()}),[i]),"popLayout"===m&&(t=n.createElement(d,{isPresent:i},t)),n.createElement(l.t.Provider,{value:u},t)};function p(){return new Map}var h=s(2190);var x=s(8129);const u=e=>e.key||"";const f=e=>{let{children:t,custom:s,initial:l=!0,onExitComplete:c,exitBeforeEnter:o,presenceAffectsLayout:d=!0,mode:p="sync"}=e;(0,x.V)(!o,"Replace exitBeforeEnter with mode='wait'");const f=(0,n.useContext)(h.L).forceRender||function(){const e=r(),[t,s]=(0,n.useState)(0),i=(0,n.useCallback)((()=>{e.current&&s(t+1)}),[t]);return[(0,n.useCallback)((()=>a.Gt.postRender(i)),[i]),t]}()[0],g=r(),v=function(e){const t=[];return n.Children.forEach(e,(e=>{(0,n.isValidElement)(e)&&t.push(e)})),t}(t);let y=v;const w=(0,n.useRef)(new Map).current,j=(0,n.useRef)(y),b=(0,n.useRef)(new Map).current,N=(0,n.useRef)(!0);var k;if((0,i.E)((()=>{N.current=!1,function(e,t){e.forEach((e=>{const s=u(e);t.set(s,e)}))}(v,b),j.current=y})),k=()=>{N.current=!0,b.clear(),w.clear()},(0,n.useEffect)((()=>()=>k()),[]),N.current)return n.createElement(n.Fragment,null,y.map((e=>n.createElement(m,{key:u(e),isPresent:!0,initial:!!l&&void 0,presenceAffectsLayout:d,mode:p},e))));y=[...y];const C=j.current.map(u),A=v.map(u),S=C.length;for(let n=0;n<S;n++){const e=C[n];-1!==A.indexOf(e)||w.has(e)||w.set(e,void 0)}return"wait"===p&&w.size&&(y=[]),w.forEach(((e,t)=>{if(-1!==A.indexOf(t))return;const i=b.get(t);if(!i)return;const r=C.indexOf(t);let a=e;if(!a){const e=()=>{w.delete(t);const e=Array.from(b.keys()).filter((e=>!A.includes(e)));if(e.forEach((e=>b.delete(e))),j.current=v.filter((s=>{const n=u(s);return n===t||e.includes(n)})),!w.size){if(!1===g.current)return;f(),c&&c()}};a=n.createElement(m,{key:u(i),isPresent:!1,onExitComplete:e,custom:s,presenceAffectsLayout:d,mode:p},i),w.set(t,a)}y.splice(r,0,a)})),y=y.map((e=>{const t=e.key;return w.has(t)?e:n.createElement(m,{key:u(e),isPresent:!0,presenceAffectsLayout:d,mode:p},e)})),n.createElement(n.Fragment,null,w.size?y:y.map((e=>(0,n.cloneElement)(e))))}}}]);
//# sourceMappingURL=844.9fc49272.chunk.js.map