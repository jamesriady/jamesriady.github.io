if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const b={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return b;default:return e(s)}})).then(e=>{const s=r(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./assets/fonts/Nunito-Black.17bcf6f.ttf",revision:"6abf597a1f3f44fd10bdcb7b86b494f0"},{url:"./assets/fonts/Nunito-Bold.5b67d63.ttf",revision:"1cd294a771f26752bbb8d8d5210f6412"},{url:"./assets/fonts/Nunito-ExtraBold.dcfddfb.ttf",revision:"19caf1c06e022593ea4657734d691c86"},{url:"./assets/fonts/Nunito-Regular.09b2f37.ttf",revision:"d2e691bc4a2b696929172cb3d22ce8ba"},{url:"./assets/fonts/Nunito-SemiBold.45ea1be.ttf",revision:"76ae20d4d4b7d46e613d2581512fcf73"},{url:"assets/css/main~06837ae4.4e17943930649e82571d.css",revision:"82cf4f3802ffecc43a574f2209e4911b"},{url:"assets/images/c_acc.1bfb6d8.jpg",revision:"ebb3d785defb9292385c1a9a4547d8d4"},{url:"assets/images/c_inventory.e365687.jpg",revision:"82461011eb46f797b8b8c730143c9329"},{url:"assets/images/c_sales.f6c7b4c.jpg",revision:"16b0395353ea460e17f5aee3b56c40e5"},{url:"assets/images/css.82a4008.png",revision:"71b3bb01c9ae6b895650eb385979126d"},{url:"assets/images/cv.5355115.pdf",revision:"248abd83cda732c79afc41dacf1ecfe0"},{url:"assets/images/git.0acab55.png",revision:"351bad4cbbe62dcbeee9718309e0e1ed"},{url:"assets/images/github.634fee7.png",revision:"b3bda7d683f1f4b05036ea37230ebe6b"},{url:"assets/images/go.69d7002.png",revision:"fb768b4b642fc48184e6ae981cdfe455"},{url:"assets/images/html.a69c086.png",revision:"a16155cf8aa550af4c3e50699019462e"},{url:"assets/images/i_dashboard.8bef90f.png",revision:"24d09931a4ee1b4b0376c8531b81aa6e"},{url:"assets/images/i_home.2f8c354.png",revision:"890fae32e17bf2a56977f95e6208d422"},{url:"assets/images/java.0fe10fc.png",revision:"06c19cd7c67f6ce195bf2a3cf5f2aa96"},{url:"assets/images/javascript.4a14f4b.png",revision:"e292f3884fb6b829e54a6ae2d1e0a30b"},{url:"assets/images/jr_character.bf7286d.svg",revision:"b2beb3ab74ff713f86a96ae0f225bb62"},{url:"assets/images/jr_logo.ada08e1.svg",revision:"0bd540d03a8b43cce6b87fb7beb9b397"},{url:"assets/images/laravel.3f96be9.png",revision:"4811c8e6f1322efe5547d89b792cf59e"},{url:"assets/images/lh_dashboard_1.1c189a1.jpg",revision:"73f1ef94be7cd957d535b564e34fb252"},{url:"assets/images/lh_dashboard_2.53671f8.jpg",revision:"507bbc060765b090891a7e904d0c4e77"},{url:"assets/images/mysql.99d2df3.png",revision:"bf6c306d869da4c31f5123dc8c4e6414"},{url:"assets/images/p_dashboard.d2e0883.png",revision:"585866f3e2d1f60beba81850dc325824"},{url:"assets/images/project_bg.514f835.png",revision:"c416508d3ccdf516fe6997f3e8126bb5"},{url:"assets/images/react.b46fdae.png",revision:"686ced0f2b1ab66d3223ca3c94156588"},{url:"assets/images/social_media_bg.d38a7a3.png",revision:"436d52b004377597afcb5fa83facf889"},{url:"assets/images/vue.2c74609.png",revision:"c7a7114b72b8a0cf35c94191dcbd76a9"},{url:"assets/js/vendor~00cb062a.js",revision:"7ba55951e95d91fca66b6028b30a6b53"},{url:"assets/js/vendor~7274e1de.js",revision:"eea8952e58e93a5ea2185b9d352a57b0"},{url:"index.html",revision:"076bcf23f5319442eb7dccb86ab99528"},{url:"jr_logo.svg",revision:"0bd540d03a8b43cce6b87fb7beb9b397"},{url:"main.js",revision:"786ed4a21e2ad0de354c43759709dac8"}],{})}));
//# sourceMappingURL=service-worker.js.map
