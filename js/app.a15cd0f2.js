(function(t){function e(e){for(var n,a,i=e[0],c=e[1],l=e[2],d=0,u=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&u.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(u.length)u.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,a=1;a<o.length;a++){var i=o[a];0!==s[i]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},a={app:0},s={app:0},r=[];function i(t){return c.p+"js/"+({cotacto:"cotacto",nosotros:"nosotros",productos:"productos"}[t]||t)+"."+{cotacto:"f571e9ba",nosotros:"938c499d",productos:"b79b558e"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o={cotacto:1,nosotros:1,productos:1};a[t]?e.push(a[t]):0!==a[t]&&o[t]&&e.push(a[t]=new Promise((function(e,o){for(var n="css/"+({cotacto:"cotacto",nosotros:"nosotros",productos:"productos"}[t]||t)+"."+{cotacto:"b99f2030",nosotros:"59def4cd",productos:"2c81ffa0"}[t]+".css",s=c.p+n,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var l=r[i],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===s))return e()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],d=l.getAttribute("data-href");if(d===n||d===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete a[t],f.parentNode.removeChild(f),o(r)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,o){n=s[t]=[e,o]}));e.push(n[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(f);var o=s[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,o[1](u)}s[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/CordelesMX/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var f=d;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"1b91":function(t,e,o){"use strict";var n=o("e659"),a=o.n(n);a.a},"31a7":function(t,e,o){"use strict";var n=o("cf94"),a=o.n(n);a.a},"4d33":function(t,e,o){t.exports=o.p+"img/monton_costales.605fbeab.jpeg"},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("project-header"),o("router-view"),o("project-footer")],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{staticClass:"nav-font nav-style",attrs:{toggleable:"lg",type:"light",id:"nav-bg"}},[n("b-container",[n("b-navbar-brand",{staticClass:"brillo",attrs:{to:{name:"home"}}},[n("img",{staticClass:"logo-empresa",attrs:{src:o("cf05"),alt:"Logo"}})]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:{name:"home"}}},[n("div",{staticClass:"link-efect"},[t._v("Inicio")])]),n("b-nav-item",{attrs:{to:{name:"Nosotros"}}},[n("div",{staticClass:"link-efect"},[t._v("Nosotros")])]),n("b-nav-item",{attrs:{to:{name:"Productos"}}},[n("div",{staticClass:"link-efect"},[t._v(" Productos")])]),n("b-nav-item",{attrs:{to:{name:"Contacto"}}},[n("div",{staticClass:"link-efect"},[t._v(" Contacto")])])],1)],1),n("b-navbar-brand",{staticClass:"brillo",attrs:{to:{name:"home"}}},[n("img",{staticClass:"logo-empresa",attrs:{src:o("cf05"),alt:"Logo"}})])],1)],1)},i=[],c=(o("1b91"),o("2877")),l={},d=Object(c["a"])(l,r,i,!1,null,"de97f900",null),u=d.exports,f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{staticClass:"pt-2 pb-2 principal",attrs:{fluid:""}},[o("b-row",{staticClass:"foot-body clear-side",attrs:{"align-v":"center"}},[o("b-col",{staticClass:"mt-2 link-pages",attrs:{sm:"12",lg:"8",order:"1"}},[o("router-link",{staticClass:"link-footer",attrs:{to:{name:"home"}}},[t._v("Inicio")]),o("router-link",{staticClass:"link-footer",attrs:{to:{name:"Productos"}}},[t._v("Productos")]),o("router-link",{staticClass:"link-footer",attrs:{to:{name:"Nosotros"}}},[t._v("Nosotros")])],1),o("b-col",{staticClass:"credits mt-2",attrs:{sm:"12",lg:"12",order:"3"}},[o("p",[t._v("© 2020 CordelesMX. Todos los derechos reservados")]),o("p",[t._v("Desarrollado por "),o("span",{staticClass:"mexa-credits"},[o("a",{attrs:{href:"https://www.facebook.com/MexaStack-104185894740731"}},[t._v("MexaStack")])])])]),o("b-col",{staticClass:"social-media",attrs:{sm:"12",lg:"4",order:"2"}},[o("div",{staticClass:"animation-space"},[o("a",{attrs:{href:"https://www.instagram.com",target:"_blank"}},[o("i",{staticClass:"fab fa-instagram-square color-in"})])]),o("div",{staticClass:"animation-space"},[o("a",{attrs:{href:"https://www.facebook.com/atlasjarcieria",target:"_blank"}},[o("i",{staticClass:"fab fa-facebook-square color-fb"})])]),o("div",{staticClass:"animation-space"},[o("a",{attrs:{href:"https://api.WhatsApp.com/send?phone=+525584813993",target:"_blank"}},[o("i",{staticClass:"fab fa-whatsapp-square color-wa"})])]),o("span",{staticClass:"phone-div"},[o("i",{staticClass:"fas fa-phone-square color-phone"}),o("span",{staticClass:"i_block ml-3"},[t._v("Tel: 55-50-86-50-08")])])])],1)],1)},p=[],m=(o("d6d2"),{}),h=Object(c["a"])(m,f,p,!1,null,"9e18c378",null),b=h.exports,v={components:{"project-header":u,"project-footer":b}},g=v,w=(o("5c0b"),Object(c["a"])(g,a,s,!1,null,null,null)),C=w.exports,_=(o("d3b7"),o("8c4f")),y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"home"},[o("b-container",{staticClass:"mt-4 mb-5 pt-4 pb-5",attrs:{id:"view-inicio"}},[o("div",{staticClass:"mi-titulo-1"},[t._v("Bienvenido")]),o("div",{staticClass:"mi-titulo-2"},[o("span",[t._v(" a Cordeles MX")])]),o("br"),o("div",{staticClass:"titulo-slogan animacion-1"},[t._v(" Un solo proveedor para todas sus necesidades de amarre. ")]),o("br"),o("slider")],1)],1)])},x=[],k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-container",[o("b-row",{staticClass:"justify-content-center"},[o("b-col",{attrs:{xs:"12",sm:"12",md:"10",fluid:"sm"}},[o("b-carousel",{staticStyle:{"text-shadow":"3px 3px 3px #000"},attrs:{id:"carousel-1",interval:4e3,fade:"",controls:"",background:"#ababab"},on:{"sliding-start":t.onSlideStart},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.slider_content,(function(e,n){return o("b-carousel-slide",{key:n,attrs:{caption:e[0]},scopedSlots:t._u([{key:"img",fn:function(){return[o("img",{staticClass:"d-block  w-100 ",attrs:{src:e[1],width:"720",height:t.tam_img,alt:"imagen"}})]},proxy:!0}],null,!0)})})),1)],1)],1)],1)],1)},j=[],S=(o("99af"),{data:function(){return{slide:0,sliding:null,windowWidth:window.innerWidth,txt:"",heigth_img:320,slider_content:[["Cable Henequén",o("f326")],["Cable de polipropileno",o("d56f")],["Costales",o("4d33")],["Cordeles",o("6cd0")],["Jarcería",o("c519")],["Barcinas",o("b22d")]]}},onCreate:function(){},computed:{tam_img:function(){return this.windowWidth=window.innerWidth,this.windowWidth<=600?this.windowWidth<=370?(this.heigth_img=150,150):200:320}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1},onResize:function(){this.windowWidth=window.innerWidth,this.windowWidth<=600?this.windowWidth<=370?this.heigth_img=150:this.heigth_img=200:this.heigth_img=320}},watch:{windowWidth:function(t,e){this.txt="cambio a ".concat(t," de ").concat(e)}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}}),E=S,O=(o("31a7"),Object(c["a"])(E,k,j,!1,null,"0a319352",null)),P=O.exports,T={name:"Home",components:{slider:P}},W=T,A=(o("765f"),Object(c["a"])(W,y,x,!1,null,"1c9f25d9",null)),M=A.exports;n["default"].use(_["a"]);var N=[{path:"/",name:"home",component:M},{path:"/nosotros",name:"Nosotros",component:function(){return o.e("nosotros").then(o.bind(null,"50cb"))}},{path:"/productos",name:"Productos",component:function(){return o.e("productos").then(o.bind(null,"6753"))}},{path:"/contacto",name:"Contacto",component:function(){return o.e("cotacto").then(o.bind(null,"c098"))}}],L=new _["a"]({mode:"history",base:"/CordelesMX/",routes:N}),q=L,z=o("2f62"),I=o("59ca");o("e71f");var $=I.initializeApp({apiKey:"AIzaSyArs0EcU3-p3wYRQ3cGrQW2N79d9TMoTqA",authDomain:"cordelesmx-2db1f.firebaseapp.com",databaseURL:"https://cordelesmx-2db1f.firebaseio.com",projectId:"cordelesmx-2db1f",storageBucket:"cordelesmx-2db1f.appspot.com",messagingSenderId:"1037073273377",appId:"1:1037073273377:web:ffde00be16f2a3ee718960"}),B=(I.analytics,$.firestore()),D={valor:null},R={},J={send_mail:function(t,e){var o=t.commit;return new Promise((function(t,n){B.collection("mail").add({to:"link@cordelesmx.com",message:{subject:"Correo desde la pagina web",html:'\n                            <h1>Esto es una prueba</h1>\n                            El usuario "'.concat(e.nombre,'", con el teléfono "').concat(e.telefono,'" y el correo "').concat(e.correo,'"\n                            dejó el siguiente mensaje: ').concat(e.mensaje,"\n                        ")}}).then((function(e){o("si","si"),t(e)})).catch((function(t){n(t)}))}))}},U={si:function(t,e){t.valor=e}},X={state:D,getters:R,actions:J,mutations:U};n["default"].use(z["a"]);var H=new z["a"].Store({state:{},mutations:{},actions:{},modules:{mail:X}}),K=o("5f5b");o("2dd8");n["default"].use(K["a"]),n["default"].config.productionTip=!1,new n["default"]({router:q,store:H,render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var n=o("9c0c"),a=o.n(n);a.a},"6cd0":function(t,e,o){t.exports=o.p+"img/cordel.8831cb72.jpg"},"765f":function(t,e,o){"use strict";var n=o("d23e"),a=o.n(n);a.a},"9c0c":function(t,e,o){},aef4:function(t,e,o){},b22d:function(t,e,o){t.exports=o.p+"img/montana_costales.5ecc1d1c.jpeg"},c519:function(t,e,o){t.exports=o.p+"img/Jarciería.3a043790.jpeg"},cf05:function(t,e,o){t.exports=o.p+"img/logo.1c184500.png"},cf94:function(t,e,o){},d23e:function(t,e,o){},d56f:function(t,e,o){t.exports=o.p+"img/Cable_polipropileno.a3bb6e3a.jpg"},d6d2:function(t,e,o){"use strict";var n=o("aef4"),a=o.n(n);a.a},e659:function(t,e,o){},f326:function(t,e,o){t.exports=o.p+"img/Cable.0f8005c8.jpg"}});
//# sourceMappingURL=app.a15cd0f2.js.map