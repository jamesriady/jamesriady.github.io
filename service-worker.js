if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise(async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()})),s.then(()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]})},s=(s,t)=>{Promise.all(s.map(e)).then(e=>t(1===e.length?e[0]:e))},t={require:Promise.resolve(s)};self.define=(s,i,r)=>{t[s]||(t[s]=Promise.resolve().then(()=>{let t={};const d={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return t;case"module":return d;default:return e(s)}})).then(e=>{const s=r(...e);return t.default||(t.default=s),t})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"dist./assets/fonts/Nunito-Bold.5b67d63.ttf",revision:"1cd294a771f26752bbb8d8d5210f6412"},{url:"dist./assets/fonts/Nunito-ExtraBold.dcfddfb.ttf",revision:"19caf1c06e022593ea4657734d691c86"},{url:"dist./assets/fonts/Nunito-Regular.09b2f37.ttf",revision:"d2e691bc4a2b696929172cb3d22ce8ba"},{url:"dist./assets/fonts/Nunito-SemiBold.45ea1be.ttf",revision:"76ae20d4d4b7d46e613d2581512fcf73"},{url:"distassets/css/main.54fc37f29afed475ad13.css",revision:"b582a1d4a2b6fd55e6df94b76d880e73"},{url:"distassets/images/bf7286d583448269552cd77e0d0ec312.svg",revision:"b2beb3ab74ff713f86a96ae0f225bb62"},{url:"distindex.html",revision:"d2b3735e2d3d4db09a24479034cdac62"},{url:"distmain.js",revision:"3d7e91934622be22b6358636d9473051"},{url:"distvendors.js",revision:"75169d7e1fc2699d542d984d0af4df4b"}],{})}));
//# sourceMappingURL=service-worker.js.map
