if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,t,a)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(t.map(s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}})).then(e=>{const s=a(...e);return r.default||(r.default=s),r})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./assets/fonts/Nunito-Black.17bcf6f.ttf",revision:"6abf597a1f3f44fd10bdcb7b86b494f0"},{url:"./assets/fonts/Nunito-Bold.5b67d63.ttf",revision:"1cd294a771f26752bbb8d8d5210f6412"},{url:"./assets/fonts/Nunito-ExtraBold.dcfddfb.ttf",revision:"19caf1c06e022593ea4657734d691c86"},{url:"./assets/fonts/Nunito-Regular.09b2f37.ttf",revision:"d2e691bc4a2b696929172cb3d22ce8ba"},{url:"./assets/fonts/Nunito-SemiBold.45ea1be.ttf",revision:"76ae20d4d4b7d46e613d2581512fcf73"},{url:"assets/JS_A2_Rectangle_13_pattern.0475a32.png",revision:"a8a4b7a96eece6e28167dc21932754ac"},{url:"assets/Java_A2_Rectangle_16_pattern.c0cc7bf.png",revision:"fa13006090234211d2b0708bd7a6d759"},{url:"assets/css/main~06837ae4.309f7114aa17346ef7d5.css",revision:"7381b3fd349ea3313cfec9335938b663"},{url:"assets/cv.89e4372.pdf",revision:"49afb0913d97c8f2e7d13814ae4fd693"},{url:"assets/go_A2_Rectangle_30_pattern.fc6ce50.png",revision:"65770c366ff9233e087733aee6c8f805"},{url:"assets/jr_character.bf7286d.svg",revision:"b2beb3ab74ff713f86a96ae0f225bb62"},{url:"assets/js/vendor~00cb062a.js",revision:"65a2346d5be73b80c2354952a932be2b"},{url:"assets/js/vendor~7274e1de.js",revision:"5287f9efa178bdd6b1857ff50ea8657f"},{url:"assets/react_A2_Rectangle_24_pattern.9c13f5a.png",revision:"8ca414efd99fe5f6f7909d6ec18a853c"},{url:"index.html",revision:"c2f2d9a04d1462c7744334ec4e8af22c"},{url:"jr_logo.svg",revision:"0bd540d03a8b43cce6b87fb7beb9b397"},{url:"main.js",revision:"48c565ffb3fb9ce649b5ce000398c98d"}],{})}));
//# sourceMappingURL=service-worker.js.map
