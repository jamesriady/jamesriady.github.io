if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,r,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./assets/fonts/Nunito-Black.17bcf6f.ttf",revision:"6abf597a1f3f44fd10bdcb7b86b494f0"},{url:"./assets/fonts/Nunito-Bold.5b67d63.ttf",revision:"1cd294a771f26752bbb8d8d5210f6412"},{url:"./assets/fonts/Nunito-ExtraBold.dcfddfb.ttf",revision:"19caf1c06e022593ea4657734d691c86"},{url:"./assets/fonts/Nunito-Regular.09b2f37.ttf",revision:"d2e691bc4a2b696929172cb3d22ce8ba"},{url:"./assets/fonts/Nunito-SemiBold.45ea1be.ttf",revision:"76ae20d4d4b7d46e613d2581512fcf73"},{url:"assets/css/main~06837ae4.23759a964a7c7f2365d5.css",revision:"430015cc6ee9f2a6ea2665803ce6dad0"},{url:"assets/images/css.82a4008.png",revision:"71b3bb01c9ae6b895650eb385979126d"},{url:"assets/images/cv.89e4372.pdf",revision:"49afb0913d97c8f2e7d13814ae4fd693"},{url:"assets/images/git.0acab55.png",revision:"351bad4cbbe62dcbeee9718309e0e1ed"},{url:"assets/images/go.69d7002.png",revision:"fb768b4b642fc48184e6ae981cdfe455"},{url:"assets/images/html.a69c086.png",revision:"a16155cf8aa550af4c3e50699019462e"},{url:"assets/images/java.0fe10fc.png",revision:"06c19cd7c67f6ce195bf2a3cf5f2aa96"},{url:"assets/images/javascript.4a14f4b.png",revision:"e292f3884fb6b829e54a6ae2d1e0a30b"},{url:"assets/images/jr_character.bf7286d.svg",revision:"b2beb3ab74ff713f86a96ae0f225bb62"},{url:"assets/images/jr_logo.ada08e1.svg",revision:"0bd540d03a8b43cce6b87fb7beb9b397"},{url:"assets/images/laravel.3f96be9.png",revision:"4811c8e6f1322efe5547d89b792cf59e"},{url:"assets/images/mysql.99d2df3.png",revision:"bf6c306d869da4c31f5123dc8c4e6414"},{url:"assets/images/project.136b0c5.jpg",revision:"6ad16c29b9bc595fcfc0de61195df0e7"},{url:"assets/images/react.b46fdae.png",revision:"686ced0f2b1ab66d3223ca3c94156588"},{url:"assets/images/vue.2c74609.png",revision:"c7a7114b72b8a0cf35c94191dcbd76a9"},{url:"assets/js/vendor~00cb062a.js",revision:"e036e1580488b398ab50edd7a9840f42"},{url:"assets/js/vendor~7274e1de.js",revision:"bebdbf3ba7feaa5a9315e2b0c7339961"},{url:"index.html",revision:"4b0bf1c747a0753543ad12f4131d001d"},{url:"jr_logo.svg",revision:"0bd540d03a8b43cce6b87fb7beb9b397"},{url:"main.js",revision:"8d60305b73c4b53f9ff44dc032b946cc"}],{})}));
//# sourceMappingURL=service-worker.js.map
