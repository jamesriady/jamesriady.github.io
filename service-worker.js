if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,t,i)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const o={uri:location.origin+s.slice(1)};return Promise.all(t.map(s=>{switch(s){case"exports":return r;case"module":return o;default:return e(s)}})).then(e=>{const s=i(...e);return r.default||(r.default=s),r})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./assets/fonts/Nunito-Bold.5b67d63.ttf",revision:"1cd294a771f26752bbb8d8d5210f6412"},{url:"./assets/fonts/Nunito-ExtraBold.dcfddfb.ttf",revision:"19caf1c06e022593ea4657734d691c86"},{url:"./assets/fonts/Nunito-Regular.09b2f37.ttf",revision:"d2e691bc4a2b696929172cb3d22ce8ba"},{url:"./assets/fonts/Nunito-SemiBold.45ea1be.ttf",revision:"76ae20d4d4b7d46e613d2581512fcf73"},{url:"assets/css/main~06837ae4.61ce7258227ec2aeb3f6.css",revision:"abe63ee5388bf2a94c6a25118977126b"},{url:"assets/images/jr_character.bf7286d.svg",revision:"b2beb3ab74ff713f86a96ae0f225bb62"},{url:"assets/js/vendor~00cb062a.js",revision:"aeb8d9659954b6e4e9276b04d86fa620"},{url:"assets/js/vendor~7274e1de.js",revision:"661839bed815d68c82df036718e81972"},{url:"index.html",revision:"c05d2a24dba76d29bf57c67e5809ddca"},{url:"main.js",revision:"539c603acecce7454e3c0e122ab22a0d"}],{})}));
//# sourceMappingURL=service-worker.js.map
