if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const c=e=>r(e,n),f={module:{uri:n},exports:o,require:c};i[n]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-dffe52ba"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.css",revision:"617fa1ccbb12e45f605b9847e1c15631"},{url:"index.html",revision:"f69fc4c545f0de4992ee924ba4619401"},{url:"index.js",revision:"d4466c96c936c802f6b19bb983d8078c"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
