import{b as X,e as ha,n as Aa,a as I,t as q}from"../chunks/Dy1yiGIk.js";import{a0 as Sa,b as wa,h as B,a as Y,f as ya,g as $,a3 as Ma,a6 as za,a4 as Ea,s as Ca,a2 as j,am as Na,d as x,an as ka,ao as Ba,ap as Ia,aq as Ta,K as ca,ar as aa,as as qa,N as G,O as la,q as U,z as ta,at as ia,m as C,I as Q,Q as _,R as m,T as p,aj as La,M as Ha}from"../chunks/Di78Viuv.js";import{i as Oa,c as Va,d as na,n as ja,a as Qa,s as D}from"../chunks/CZpLx1zZ.js";import{i as ua}from"../chunks/CbvuwCew.js";import{o as Pa}from"../chunks/BZd_suUp.js";import{i as Ra}from"../chunks/BK2oF3bE.js";import{p as y}from"../chunks/BQOroE4T.js";function Da(a,i){if(i){const t=document.body;a.autofocus=!0,Sa(()=>{document.activeElement===t&&a.focus()})}}function Fa(a,i,t,e,o){var s=a,r="",n;wa(()=>{if(r===(r=i()??"")){B&&Y();return}n!==void 0&&(Na(n),n=void 0),r!==""&&(n=ya(()=>{if(B){$.data;for(var u=Y(),c=u;u!==null&&(u.nodeType!==8||u.data!=="");)c=u,u=Ma(u);if(u===null)throw za(),Ea;X($,c),s=Ca(u);return}var v=r+"";v=`<svg>${v}</svg>`;var f=ha(v);for(f=j(f),X(j(f),f.lastChild);j(f);)s.before(j(f))}))})}function fa(a){var i,t,e="";if(typeof a=="string"||typeof a=="number")e+=a;else if(typeof a=="object")if(Array.isArray(a)){var o=a.length;for(i=0;i<o;i++)a[i]&&(t=fa(a[i]))&&(e&&(e+=" "),e+=t)}else for(t in a)a[t]&&(e&&(e+=" "),e+=t);return e}function Ja(){for(var a,i,t=0,e="",o=arguments.length;t<o;t++)(a=arguments[t])&&(i=fa(a))&&(e&&(e+=" "),e+=i);return e}function Ga(a){return typeof a=="object"?Ja(a):a??""}const ea=[...` 	
\r\f \v\uFEFF`];function Ua(a,i,t){var e=a==null?"":""+a;if(t){for(var o in t)if(t[o])e=e?e+" "+o:o;else if(e.length)for(var s=o.length,r=0;(r=e.indexOf(o,r))>=0;){var n=r+s;(r===0||ea.includes(e[r-1]))&&(n===e.length||ea.includes(e[n]))?e=(r===0?"":e.substring(0,r))+e.substring(n+1):r=n}}return e===""?null:e}function sa(a,i=!1){var t=i?" !important;":";",e="";for(var o in a){var s=a[o];s!=null&&s!==""&&(e+=" "+o+": "+s+t)}return e}function F(a){return a[0]!=="-"||a[1]!=="-"?a.toLowerCase():a}function Wa(a,i){if(i){var t="",e,o;if(Array.isArray(i)?(e=i[0],o=i[1]):e=i,a){a=String(a).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,r=0,n=!1,u=[];e&&u.push(...Object.keys(e).map(F)),o&&u.push(...Object.keys(o).map(F));var c=0,v=-1;const M=a.length;for(var f=0;f<M;f++){var g=a[f];if(n?g==="/"&&a[f-1]==="*"&&(n=!1):s?s===g&&(s=!1):g==="/"&&a[f+1]==="*"?n=!0:g==='"'||g==="'"?s=g:g==="("?r++:g===")"&&r--,!n&&s===!1&&r===0){if(g===":"&&v===-1)v=f;else if(g===";"||f===M-1){if(v!==-1){var N=F(a.substring(c,v).trim());if(!u.includes(N)){g!==";"&&f++;var w=a.substring(c,f).trim();t+=" "+w+";"}}c=f+1,v=-1}}}}return e&&(t+=sa(e)),o&&(t+=sa(o,!0)),t=t.trim(),t===""?null:t}return a==null?null:String(a)}function Za(a,i,t,e,o,s){var r=a.__className;if(B||r!==t){var n=Ua(t,e,s);(!B||n!==a.getAttribute("class"))&&(n==null?a.removeAttribute("class"):i?a.className=n:a.setAttribute("class",n)),a.__className=t}else if(s&&o!==s)for(var u in s){var c=!!s[u];(o==null||c!==!!o[u])&&a.classList.toggle(u,c)}return s}function J(a,i={},t,e){for(var o in t){var s=t[o];i[o]!==s&&(t[o]==null?a.style.removeProperty(o):a.style.setProperty(o,s,e))}}function Ka(a,i,t,e){var o=a.__style;if(B||o!==i){var s=Wa(i,e);(!B||s!==a.getAttribute("style"))&&(s==null?a.removeAttribute("style"):a.style.cssText=s),a.__style=i}else e&&(Array.isArray(e)?(J(a,t==null?void 0:t[0],e[0]),J(a,t==null?void 0:t[1],e[1],"important")):J(a,t,e));return e}const L=Symbol("class"),H=Symbol("style"),da=Symbol("is custom element"),va=Symbol("is html");function Xa(a,i){i?a.hasAttribute("selected")||a.setAttribute("selected",""):a.removeAttribute("selected")}function W(a,i,t,e){var o=ga(a);B&&(o[i]=a.getAttribute(i),i==="src"||i==="srcset"||i==="href"&&a.nodeName==="LINK")||o[i]!==(o[i]=t)&&(i==="loading"&&(a[Ia]=t),t==null?a.removeAttribute(i):typeof t!="string"&&pa(a).includes(i)?a[i]=t:a.setAttribute(i,t))}function Ya(a,i,t,e,o=!1){var s=ga(a),r=s[da],n=!s[va];let u=B&&r;u&&x(!1);var c=i||{},v=a.tagName==="OPTION";for(var f in i)f in t||(t[f]=null);t.class?t.class=Ga(t.class):t[L]&&(t.class=null),t[H]&&(t.style??(t.style=null));var g=pa(a);for(const l in t){let d=t[l];if(v&&l==="value"&&d==null){a.value=a.__value="",c[l]=d;continue}if(l==="class"){var N=a.namespaceURI==="http://www.w3.org/1999/xhtml";Za(a,N,d,e,i==null?void 0:i[L],t[L]),c[l]=d,c[L]=t[L];continue}if(l==="style"){Ka(a,d,i==null?void 0:i[H],t[H]),c[l]=d,c[H]=t[H];continue}var w=c[l];if(d!==w){c[l]=d;var M=l[0]+l[1];if(M!=="$$")if(M==="on"){const A={},z="$$"+l;let b=l.slice(2);var k=Qa(b);if(Oa(b)&&(b=b.slice(0,-7),A.capture=!0),!k&&w){if(d!=null)continue;a.removeEventListener(b,c[z],A),c[z]=null}if(d!=null)if(k)a[`__${b}`]=d,na([b]);else{let O=function(V){c[l].call(this,V)};c[z]=Va(b,a,O,A)}else k&&(a[`__${b}`]=void 0)}else if(l==="style")W(a,l,d);else if(l==="autofocus")Da(a,!!d);else if(!r&&(l==="__value"||l==="value"&&d!=null))a.value=a.__value=d;else if(l==="selected"&&v)Xa(a,d);else{var h=l;n||(h=ja(h));var S=h==="defaultValue"||h==="defaultChecked";if(d==null&&!r&&!S)if(s[l]=null,h==="value"||h==="checked"){let A=a;const z=i===void 0;if(h==="value"){let b=A.defaultValue;A.removeAttribute(h),A.defaultValue=b,A.value=A.__value=z?b:null}else{let b=A.defaultChecked;A.removeAttribute(h),A.defaultChecked=b,A.checked=z?b:!1}}else a.removeAttribute(l);else S||g.includes(h)&&(r||typeof d!="string")?a[h]=d:typeof d!="function"&&W(a,h,d)}}}return u&&x(!0),c}function ga(a){return a.__attributes??(a.__attributes={[da]:a.nodeName.includes("-"),[va]:a.namespaceURI===ka})}var oa=new Map;function pa(a){var i=oa.get(a.nodeName);if(i)return i;oa.set(a.nodeName,i=[]);for(var t,e=a,o=Element.prototype;o!==e;){t=Ta(e);for(var s in t)t[s].set&&i.push(s);e=Ba(e)}return i}var $a=Aa("<svg><!></svg>");function ra(a,i){ca(i,!1);let t=y(i,"src",8),e=y(i,"size",8,"1em"),o=y(i,"viewBox",24,()=>{}),s=y(i,"color",8,"currentColor"),r=y(i,"title",24,()=>{}),n=y(i,"className",8,""),u=ta(),c=ta({});aa(()=>(Q(s()),Q(t())),()=>{U(c,{}),s()&&(t().a.stroke!=="none"&&ia(c,C(c).stroke="currentColor"),t().a.fill!=="none"&&ia(c,C(c).fill="currentColor"))}),aa(()=>(Q(r()),Q(t())),()=>{U(u,(r()?`<title>${r()}</title>`:"")+t().c)}),qa(),Ra();var v=$a();let f;var g=_(v);Fa(g,()=>C(u)),m(v),G(()=>f=Ya(v,f,{width:e(),height:e(),viewBox:o(),style:s()?"color: "+s()+";":"","stroke-width":"0",class:n(),...t().a,...C(c),xmlns:"http://www.w3.org/2000/svg"})),I(a,v),la()}const xa={a:{viewBox:"0 0 448 512"},c:'<path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"></path>'},at={a:{viewBox:"0 0 448 512"},c:'<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>'};var tt=q('<img alt="imagen de la entidad">'),it=q('<span class="material-symbols-outlined">source_environment</span>'),et=q('<div class="item svelte-pxmg1t"><div class="info svelte-pxmg1t"><!> <div class="description svelte-pxmg1t"><p class="title"> </p> <p class="subtitle"> </p></div></div> <p class="date"> </p></div>');function E(a,i){let t=y(i,"date",8,""),e=y(i,"picture",8,void 0),o=y(i,"title",8,""),s=y(i,"subtitle",8,"");var r=et(),n=_(r),u=_(n);{var c=S=>{var l=tt();G(()=>W(l,"src",e())),I(S,l)},v=S=>{var l=it();I(S,l)};ua(u,S=>{e()?S(c):S(v,!1)})}var f=p(u,2),g=_(f),N=_(g,!0);m(g);var w=p(g,2),M=_(w,!0);m(w),m(f),m(n);var k=p(n,2),h=_(k,!0);m(k),m(r),G(()=>{D(N,o()),D(M,s()),D(h,t())}),I(a,r)}function st(a,i){U(i,C(i)==="light"?"dark":"light",!0),localStorage.setItem("theme",C(i)),document.documentElement.classList.toggle("dark",C(i)==="dark")}var ot=q('<span class="material-symbols-outlined">dark_mode</span>'),rt=q('<span class="material-symbols-outlined">light_mode</span>'),ct=q('<nav><ul><li><button><span class="material-symbols-outlined">home</span></button></li> <li><button aria-label="linkedin button"><!></button></li> <li><button aria-label="github button"><!></button></li> <li><button aria-label="button theme-mode"><!></button></li></ul></nav> <div class="container"><section class="hero"><div><h1>Hola, Soy Alejo 👋</h1> <p>He liderado migraciones exitosas on-premise y en la nube, optimizando sistemas e infraestructura para mayor eficiencia y escalabilidad.</p></div> <img src="/alejo-cloud/profile.svg" alt=""></section> <section class="about"><h3>Más allá de la nube</h3> <p>Cuento con habilidades de liderazgo y comunicación efectiva, lo que me permite trabajar con equipos multidisciplinarios y alinear soluciones técnicas con las necesidades del negocio. Tengo un enfoque estratégico y resolutivo, adaptándome a los cambios tecnológicos para diseñar infraestructuras escalables y eficientes.</p></section> <section class="work svelte-pzlsw3"><h3>Mi trabajo</h3> <!> <!> <!> <!> <!> <!> <!></section> <div class="education svelte-pzlsw3"><section class="about"><h3>Skills</h3> <div class="skills"><span>AWS</span> <span>Microsoft Azure</span> <span>GCP</span></div></section> <section class="general-section svelte-pzlsw3"><h3>Mis certificaciones</h3> <!></section> <section class="general-section svelte-pzlsw3"><h3>Mi educación</h3> <!></section></div></div>',1);function pt(a,i){ca(i,!0);let t=La("dark");Pa(()=>{e()});function e(){document.documentElement.classList.toggle("dark",C(t)==="dark")}var o=ct(),s=Ha(o),r=_(s),n=p(_(r),2),u=_(n),c=_(u);ra(c,{src:xa,className:"nav-icon"}),m(u),m(n);var v=p(n,2),f=_(v),g=_(f);ra(g,{src:at,className:"nav-icon"}),m(f),m(v);var N=p(v,2),w=_(N);w.__click=[st,t];var M=_(w);{var k=T=>{var R=ot();I(T,R)},h=T=>{var R=rt();I(T,R)};ua(M,T=>{C(t)=="light"?T(k):T(h,!1)})}m(w),m(N),m(r),m(s);var S=p(s,2),l=p(_(S),4),d=p(_(l),2);E(d,{date:"Oct 2021 - actualidad",picture:"https://media.licdn.com/dms/image/v2/C4E0BAQFypsb1Ke2ARg/company-logo_100_100/company-logo_100_100/0/1631366537945/banco_pichincha_ca_logo?e=1748476800&v=beta&t=1nK3_RowVaBsIWPgzTml9fS4ZnnaCXgAOiPuaEMQxvQ",title:"Ingeniero Cloud",subtitle:"Banco Pichincha"});var A=p(d,2);E(A,{date:"Jun 2020 - Jun 2021",picture:"https://media.licdn.com/dms/image/v2/D4E0BAQFxoLrcvAz8qA/company-logo_100_100/company-logo_100_100/0/1697647868407/nequi_logo?e=1748476800&v=beta&t=FXiApflj6SaaZAb8MLSppZxfDb-sM4JqGH5l-MULbVc",title:"Ingeniero Cloud",subtitle:"Nequi"});var z=p(A,2);E(z,{date:"Jun 2019 - Jun 2020",picture:"https://media.licdn.com/dms/image/v2/C4E0BAQHl8X6uU5aSwQ/company-logo_100_100/company-logo_100_100/0/1630641994231/bancolombia_logo?e=1748476800&v=beta&t=Tr5ioAz9PH35Kh-cJ6H-iivEKsdOrN3KdmfW6py2opM",title:"Ingeniero Cloud",subtitle:"Bancolombia"});var b=p(z,2);E(b,{date:"Abr 2019 - Jun 2019",picture:"https://media.licdn.com/dms/image/v2/D4E0BAQE587T-fI_MdA/company-logo_100_100/company-logo_100_100/0/1683832574398/ceibasoftware_logo?e=1748476800&v=beta&t=MRbSwEJV5dxGUnOwuZoipzQAoAajkAgGCnMfdwWnbZ0",title:"Arquitecto desarrollador",subtitle:"Ceiba Software"});var O=p(b,2);E(O,{date:"Jun 2018 - Mar 2019",picture:"https://media.licdn.com/dms/image/v2/C560BAQGgpdtBbGHT9A/company-logo_100_100/company-logo_100_100/0/1630666856311/quipux_logo?e=1748476800&v=beta&t=1Oph9RqLDcSVolqmExIj0bYDfpsuEEWBwEr3Mp7juyg",title:"Ingeniero de software",subtitle:"Quipux"});var V=p(O,2);E(V,{date:"Dic 2016 - Sept 2017",title:"Ingeniero de mecatrónica",subtitle:"Vestimundo S.A"});var _a=p(V,2);E(_a,{date:"Jun 2016 - Dic 2016",title:"Practicante de mecatrónica",subtitle:"Crystal S.A.S"}),m(l);var Z=p(l,2),P=p(_(Z),2),ma=p(_(P),2);E(ma,{date:"Feb 2022 - Feb 2025",picture:"https://media.licdn.com/dms/image/v2/D4E0BAQE0fp2sCqnVLg/company-logo_100_100/company-logo_100_100/0/1738855736997/amazon_web_services_logo?e=1748476800&v=beta&t=pfdQMeP_M9FIaE6nvquhHOHxsMujZjqdhSBZPOlX4A4",title:"AWS Certified Solutions Architect - Associate",subtitle:"Amazon Web Services (AWS)"}),m(P);var K=p(P,2),ba=p(_(K),2);E(ba,{date:"2011 - 2017",picture:"https://media.licdn.com/dms/image/v2/C4E0BAQEXFU6ObS2Nzw/company-logo_100_100/company-logo_100_100/0/1651332306878/udea__logo?e=1748476800&v=beta&t=cPZu8Fn-m4tMTNq9yX6cjlTTvDLHGAEkioVm69k-8t0",title:"Ingeniero Electrónico",subtitle:"Universidad de Antioquia"}),m(K),m(Z),m(S),I(a,o),la()}na(["click"]);export{pt as component};
