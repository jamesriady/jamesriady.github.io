if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,t,i)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const o={uri:location.origin+s.slice(1)};return Promise.all(t.map(s=>{switch(s){case"exports":return r;case"module":return o;default:return e(s)}})).then(e=>{const s=i(...e);return r.default||(r.default=s),r})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./assets/fonts/Nunito-Black.17bcf6f.ttf",revision:"6abf597a1f3f44fd10bdcb7b86b494f0"},{url:"./assets/fonts/Nunito-Bold.5b67d63.ttf",revision:"1cd294a771f26752bbb8d8d5210f6412"},{url:"./assets/fonts/Nunito-ExtraBold.dcfddfb.ttf",revision:"19caf1c06e022593ea4657734d691c86"},{url:"./assets/fonts/Nunito-Regular.09b2f37.ttf",revision:"d2e691bc4a2b696929172cb3d22ce8ba"},{url:"./assets/fonts/Nunito-SemiBold.45ea1be.ttf",revision:"76ae20d4d4b7d46e613d2581512fcf73"},{url:"assets/css/main~06837ae4.4704749ae4adcc13f44a.css",revision:"98f5130720fb889f808a40edf71d7eaa"},{url:"assets/images/jr_character.bf7286d.svg",revision:"b2beb3ab74ff713f86a96ae0f225bb62"},{url:"assets/js/vendor~00cb062a.js",revision:"4feb810b0d9b7906b773ed8ffc6d66fd"},{url:"assets/js/vendor~7274e1de.js",revision:"7744b5a7dd2ea5ea1a2f292bbe895f36"},{url:"index.html",revision:"27b72393f49e612a05fa9397d075e526"},{url:"jr_logo.svg",revision:"0bd540d03a8b43cce6b87fb7beb9b397"},{url:"main.js",revision:"aa34e925ec9054541fcb7ad3edb3db96"}],{})}));
//# sourceMappingURL=service-worker.js.map
