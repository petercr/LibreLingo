(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{26:function(e,t,n){"use strict";var c=n(0),a=n(4),b=n(37),l=n(29);function r(e){Object(c.h)(e,"svelte-1pzbbln","@keyframes svelte-1pzbbln-spinner{to{transform:rotate(360deg)}}.lluis-button.svelte-1pzbbln{display:inline-block}div.svelte-1pzbbln>*{display:flex;border-radius:var(--button-radius-small);padding:6px 20px;margin:4px;transition-property:filter;transition-duration:.1s;transition-timing-function:ease-in-out}div.svelte-1pzbbln>* .icon{width:unset;height:unset;margin-right:8px}div.svelte-1pzbbln>*:hover,div.svelte-1pzbbln>*:focus{filter:brightness(1.2)}div.svelte-1pzbbln>*:active{filter:brightness(0.9);transform:scale(0.9)}.spinner.svelte-1pzbbln{display:flex;width:16px;height:16px;align-items:center;justify-content:center;animation:svelte-1pzbbln-spinner .6s linear infinite}.spinner.svelte-1pzbbln .icon{display:block;margin:0 !important}div[data-style=primary].svelte-1pzbbln>*{border:1px solid var(--button-primary-border);color:var(--button-primary-text-color) !important;background-color:var(--button-primary-background-color) !important}div[data-style=secondary].svelte-1pzbbln>*{border:1px solid var(--button-secondary-border);color:var(--button-secondary-text-color) !important;background-color:var(--button-secondary-background-color) !important}div[data-style=key].svelte-1pzbbln>*{margin:6px;padding:6px 0;text-align:center;width:calc(1em + 22px);border:1px solid var(--button-key-border);color:var(--button-key-text-color) !important;background-color:var(--button-key-background-color) !important}.small.svelte-1pzbbln>*{font-size:16px;padding:3px 12px}.large.svelte-1pzbbln>*{font-size:20px;padding:9px 14px}")}function s(e){let t;const n=e[10].default,a=Object(c.z)(n,e,e[12],null);return{c(){a&&a.c()},l(e){a&&a.l(e)},m(e,n){a&&a.m(e,n),t=!0},p(e,b){a&&a.p&&(!t||4096&b)&&Object(c.pb)(a,n,e,e[12],t?Object(c.I)(n,e[12],b,null):Object(c.H)(e[12]),null)},i(e){t||(Object(c.mb)(a,e),t=!0)},o(e){Object(c.nb)(a,e),t=!1},d(e){a&&a.d(e)}}}function o(e){let t,n,a;return n=new l.a({props:{icon:"spinner"}}),{c(){t=Object(c.D)("span"),Object(c.w)(n.$$.fragment),this.h()},l(e){t=Object(c.p)(e,"SPAN",{class:!0});var a=Object(c.n)(t);Object(c.o)(n.$$.fragment,a),a.forEach(c.C),this.h()},h(){Object(c.j)(t,"class","spinner svelte-1pzbbln")},m(e,b){Object(c.O)(e,t,b),Object(c.S)(n,t,null),a=!0},p:c.T,i(e){a||(Object(c.mb)(n.$$.fragment,e),a=!0)},o(e){Object(c.nb)(n.$$.fragment,e),a=!1},d(e){e&&Object(c.C)(t),Object(c.A)(n)}}}function i(e){let t,n,a,b;const l=[o,s],r=[];function i(e,t){return e[2]?0:1}return t=i(e),n=r[t]=l[t](e),{c(){n.c(),a=Object(c.E)()},l(e){n.l(e),a=Object(c.E)()},m(e,n){r[t].m(e,n),Object(c.O)(e,a,n),b=!0},p(e,b){let s=t;t=i(e),t===s?r[t].p(e,b):(Object(c.L)(),Object(c.nb)(r[s],1,1,()=>{r[s]=null}),Object(c.m)(),n=r[t],n?n.p(e,b):(n=r[t]=l[t](e),n.c()),Object(c.mb)(n,1),n.m(a.parentNode,a))},i(e){b||(Object(c.mb)(n),b=!0)},o(e){Object(c.nb)(n),b=!1},d(e){r[t].d(e),e&&Object(c.C)(a)}}}function j(e){let t;return{c(){t=Object(c.D)("a"),this.h()},l(e){t=Object(c.p)(e,"A",{class:!0,href:!0}),Object(c.n)(t).forEach(c.C),this.h()},h(){Object(c.j)(t,"class","hidden-link"),Object(c.j)(t,"href",e[3])},m(e,n){Object(c.O)(e,t,n)},p(e,n){8&n&&Object(c.j)(t,"href",e[3])},d(e){e&&Object(c.C)(t)}}}function O(e){let t,n,a,l,r;n=new b.a({props:{href:e[0],type:e[4],target:e[6],tabIndex:e[7],disabled:e[8],$$slots:{default:[i]},$$scope:{ctx:e}}}),n.$on("click",e[11]);let s=null!=e[3]&&j(e);return{c(){t=Object(c.D)("div"),Object(c.w)(n.$$.fragment),a=Object(c.hb)(),s&&s.c(),l=Object(c.E)(),this.h()},l(e){t=Object(c.p)(e,"DIV",{class:!0,"data-style":!0});var b=Object(c.n)(t);Object(c.o)(n.$$.fragment,b),b.forEach(c.C),a=Object(c.r)(e),s&&s.l(e),l=Object(c.E)(),this.h()},h(){Object(c.j)(t,"class","lluis-button svelte-1pzbbln"),Object(c.j)(t,"data-style",e[5]),Object(c.lb)(t,"small","small"===e[1]),Object(c.lb)(t,"large","large"===e[1])},m(e,b){Object(c.O)(e,t,b),Object(c.S)(n,t,null),Object(c.O)(e,a,b),s&&s.m(e,b),Object(c.O)(e,l,b),r=!0},p(e,[a]){const b={};1&a&&(b.href=e[0]),16&a&&(b.type=e[4]),64&a&&(b.target=e[6]),128&a&&(b.tabIndex=e[7]),256&a&&(b.disabled=e[8]),4100&a&&(b.$$scope={dirty:a,ctx:e}),n.$set(b),(!r||32&a)&&Object(c.j)(t,"data-style",e[5]),2&a&&Object(c.lb)(t,"small","small"===e[1]),2&a&&Object(c.lb)(t,"large","large"===e[1]),null!=e[3]?s?s.p(e,a):(s=j(e),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null)},i(e){r||(Object(c.mb)(n.$$.fragment,e),r=!0)},o(e){Object(c.nb)(n.$$.fragment,e),r=!1},d(e){e&&Object(c.C)(t),Object(c.A)(n),e&&Object(c.C)(a),s&&s.d(e),e&&Object(c.C)(l)}}}function d(e,t,n){let{$$slots:c={},$$scope:b}=t;const l=Object(a.b)();let{href:r=null}=t,{size:s="normal"}=t,{loading:o=!1}=t,{asHref:i=null}=t,{type:j="button"}=t,{style:O="secondary"}=t,{target:d}=t,{tabIndex:u}=t,{disabled:p=!1}=t;return e.$$set=e=>{"href"in e&&n(0,r=e.href),"size"in e&&n(1,s=e.size),"loading"in e&&n(2,o=e.loading),"asHref"in e&&n(3,i=e.asHref),"type"in e&&n(4,j=e.type),"style"in e&&n(5,O=e.style),"target"in e&&n(6,d=e.target),"tabIndex"in e&&n(7,u=e.tabIndex),"disabled"in e&&n(8,p=e.disabled),"$$scope"in e&&n(12,b=e.$$scope)},[r,s,o,i,j,O,d,u,p,l,c,()=>l("click"),b]}class u extends c.b{constructor(e){super(),Object(c.N)(this,e,d,O,c.bb,{href:0,size:1,loading:2,asHref:3,type:4,style:5,target:6,tabIndex:7,disabled:8},r)}}t.a=u},364:function(e,t,n){"use strict";n.r(t);var c=n(0),a=(n(38),n(36)),b=n(26),l=n(76);function r(e){let t,n;return{c(){t=Object(c.D)("p"),n=Object(c.kb)(e[0]),this.h()},l(a){t=Object(c.p)(a,"P",{class:!0});var b=Object(c.n)(t);n=Object(c.s)(b,e[0]),b.forEach(c.C),this.h()},h(){Object(c.j)(t,"class","help is-danger")},m(e,a){Object(c.O)(e,t,a),Object(c.g)(t,n)},p(e,t){1&t&&Object(c.eb)(n,e[0])},d(e){e&&Object(c.C)(t)}}}function s(e){let t;return{c(){t=Object(c.kb)("Log in")},l(e){t=Object(c.s)(e,"Log in")},m(e,n){Object(c.O)(e,t,n)},d(e){e&&Object(c.C)(t)}}}function o(e){let t,n,o,i,j,O,d,u,p,f,m,h,g,$,v,w,y,x,D,C;function k(t){e[4](t)}n=new a.a({});let z={name:"Username",icon:"user",id:"username"};function E(t){e[5](t)}void 0!==e[1]&&(z.value=e[1]),f=new l.a({props:z}),c.l.push(()=>Object(c.k)(f,"value",k));let _={name:"Password",icon:"lock",id:"password",type:"password"};void 0!==e[2]&&(_.value=e[2]),g=new l.a({props:_}),c.l.push(()=>Object(c.k)(g,"value",E));let I=null!==e[0]&&r(e);return y=new b.a({props:{type:"submit",$$slots:{default:[s]},$$scope:{ctx:e}}}),y.$on("click",e[3]),{c(){t=Object(c.hb)(),Object(c.w)(n.$$.fragment),o=Object(c.hb)(),i=Object(c.D)("section"),j=Object(c.D)("div"),O=Object(c.D)("form"),d=Object(c.D)("h2"),u=Object(c.kb)("Log in"),p=Object(c.hb)(),Object(c.w)(f.$$.fragment),h=Object(c.hb)(),Object(c.w)(g.$$.fragment),v=Object(c.hb)(),I&&I.c(),w=Object(c.hb)(),Object(c.w)(y.$$.fragment),this.h()},l(e){Object(c.Z)('[data-svelte="svelte-nuxzs8"]',document.head).forEach(c.C),t=Object(c.r)(e),Object(c.o)(n.$$.fragment,e),o=Object(c.r)(e),i=Object(c.p)(e,"SECTION",{class:!0});var a=Object(c.n)(i);j=Object(c.p)(a,"DIV",{class:!0});var b=Object(c.n)(j);O=Object(c.p)(b,"FORM",{});var l=Object(c.n)(O);d=Object(c.p)(l,"H2",{class:!0});var r=Object(c.n)(d);u=Object(c.s)(r,"Log in"),r.forEach(c.C),p=Object(c.r)(l),Object(c.o)(f.$$.fragment,l),h=Object(c.r)(l),Object(c.o)(g.$$.fragment,l),v=Object(c.r)(l),I&&I.l(l),w=Object(c.r)(l),Object(c.o)(y.$$.fragment,l),l.forEach(c.C),b.forEach(c.C),a.forEach(c.C),this.h()},h(){document.title="Log in - LibreLingo",Object(c.j)(d,"class","is-size-2"),Object(c.j)(j,"class","container"),Object(c.j)(i,"class","section")},m(a,b){Object(c.O)(a,t,b),Object(c.S)(n,a,b),Object(c.O)(a,o,b),Object(c.O)(a,i,b),Object(c.g)(i,j),Object(c.g)(j,O),Object(c.g)(O,d),Object(c.g)(d,u),Object(c.g)(O,p),Object(c.S)(f,O,null),Object(c.g)(O,h),Object(c.S)(g,O,null),Object(c.g)(O,v),I&&I.m(O,null),Object(c.g)(O,w),Object(c.S)(y,O,null),x=!0,D||(C=Object(c.Q)(O,"submit",Object(c.Y)(e[3])),D=!0)},p(e,[t]){const n={};!m&&2&t&&(m=!0,n.value=e[1],Object(c.d)(()=>m=!1)),f.$set(n);const a={};!$&&4&t&&($=!0,a.value=e[2],Object(c.d)(()=>$=!1)),g.$set(a),null!==e[0]?I?I.p(e,t):(I=r(e),I.c(),I.m(O,w)):I&&(I.d(1),I=null);const b={};64&t&&(b.$$scope={dirty:t,ctx:e}),y.$set(b)},i(e){x||(Object(c.mb)(n.$$.fragment,e),Object(c.mb)(f.$$.fragment,e),Object(c.mb)(g.$$.fragment,e),Object(c.mb)(y.$$.fragment,e),x=!0)},o(e){Object(c.nb)(n.$$.fragment,e),Object(c.nb)(f.$$.fragment,e),Object(c.nb)(g.$$.fragment,e),Object(c.nb)(y.$$.fragment,e),x=!1},d(e){e&&Object(c.C)(t),Object(c.A)(n,e),e&&Object(c.C)(o),e&&Object(c.C)(i),Object(c.A)(f),Object(c.A)(g),I&&I.d(),Object(c.A)(y),D=!1,C()}}}function i(e,t,n){let c=null,a="",b="";return[c,a,b,async()=>{try{await window._Login(a,b)}catch(e){n(0,c=e)}},function(e){a=e,n(1,a)},function(e){b=e,n(2,b)}]}class j extends c.b{constructor(e){super(),Object(c.N)(this,e,i,o,c.bb,{})}}t.default=j},38:function(e,t,n){"use strict";(function(e){var c=n(48),a=n(39),b=n(32),l=n(8);let r,s,o;const i=t=>{const a=new(void 0!==e.env.JEST_WORKER_ID?n(30):n(30).default)(t).setMaxListeners(c.a.database.maxNumberOfListeners);return a.changes({since:"now",live:!0,include_docs:!0}).on("change",()=>{if(void 0!==e.env.JEST_WORKER_ID)return;n(33).default.update(e=>({...e,dbUpdatedAt:Date.now()}))}),a};if(!0===Object(l.a)()){const e=n(33).default,t=n(30).default;s=new t(`${c.a.database.remote}/${b.a.get("loginDb")}`,{skip_setup:!0,live:!0}),r=i(c.a.database.local),window._DB=r,b.a.get("loginDb")===Object(a.a)("JohnDoe")&&e.update(e=>({...e,user:{name:"JohnDoe"},online:!0})),b.a.get("loginDb")&&c.a.features.authEnabled?fetch(c.a.database.remote+"/_session",{credentials:"include"}).then(e=>e.json()).then(t=>{null!==t.userCtx.name&&(e.update(e=>({...e,user:{name:t.userCtx.name}})),l())}):e.update(e=>({...e,online:!1})),window._fakeLogin=()=>{b.a.set("loginDb",Object(a.a)("JohnDoe"),{expires:c.a.database.auth.expireDays}),window.location.href="/"},window._Login=async(t,n)=>{if(!1===window._test_credentials_correct)throw new Error("Incorrect username or password");if(!0===window._test_credentials_correct)return window._fakeLogin();const l=await(await fetch(c.a.database.remote+"/_session",{method:"post",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})})).json();if(l.error){if("unauthorized"===l.error)throw new Error("Username or password is incorrect");throw new Error("Couldn't log in. Please try again later")}e.update(e=>({...e,online:null})),b.a.set("loginDb",Object(a.a)(t),{expires:c.a.database.auth.expireDays}),window.location.reload(!1),window.location.href=""},window._Logout=async()=>{try{o&&(await o.cancel(),await fetch(c.a.database.remote+"/_session",{method:"delete"}))}finally{b.a.remove("loginDb"),e.update(e=>({...e,user:null,online:null})),await r.destroy(),window.location.reload(!1)}};const l=()=>{o=r.sync(s).on("complete",(function(){e.update(e=>({...e,online:!0}))})).on("error",(function(){e.update(e=>({...e,online:!1}))}))}}void 0!==e.env.JEST_WORKER_ID&&(r=i(c.a.database.local),r.__reset=async()=>{const e=await r.allDocs();await Promise.all(e.rows.map((function(e){return r.remove(e.id,e.value.rev)})))}),t.a=r}).call(this,n(20))},39:function(e,t,n){"use strict";t.a=e=>"userdb-"+(e=>e.split("").map(e=>e.charCodeAt(0).toString(16)).join(""))(e)},56:function(e,t){},76:function(e,t,n){"use strict";var c=n(0),a=n(29);function b(e){let t,n,a;return{c(){t=Object(c.D)("input"),this.h()},l(e){t=Object(c.p)(e,"INPUT",{class:!0,type:!0,name:!0,id:!0}),this.h()},h(){Object(c.j)(t,"class","input"),Object(c.j)(t,"type","text"),Object(c.j)(t,"name",e[2]),Object(c.j)(t,"id",e[2]),Object(c.lb)(t,"is-danger",null!=e[5])},m(b,l){Object(c.O)(b,t,l),Object(c.fb)(t,e[0]),n||(a=Object(c.Q)(t,"input",e[7]),n=!0)},p(e,n){4&n&&Object(c.j)(t,"name",e[2]),4&n&&Object(c.j)(t,"id",e[2]),1&n&&t.value!==e[0]&&Object(c.fb)(t,e[0]),32&n&&Object(c.lb)(t,"is-danger",null!=e[5])},d(e){e&&Object(c.C)(t),n=!1,a()}}}function l(e){let t,n,a;return{c(){t=Object(c.D)("input"),this.h()},l(e){t=Object(c.p)(e,"INPUT",{class:!0,type:!0,name:!0,id:!0}),this.h()},h(){Object(c.j)(t,"class","input"),Object(c.j)(t,"type","password"),Object(c.j)(t,"name",e[2]),Object(c.j)(t,"id",e[2]),Object(c.lb)(t,"is-danger",null!=e[5])},m(b,l){Object(c.O)(b,t,l),Object(c.fb)(t,e[0]),n||(a=Object(c.Q)(t,"input",e[8]),n=!0)},p(e,n){4&n&&Object(c.j)(t,"name",e[2]),4&n&&Object(c.j)(t,"id",e[2]),1&n&&t.value!==e[0]&&Object(c.fb)(t,e[0]),32&n&&Object(c.lb)(t,"is-danger",null!=e[5])},d(e){e&&Object(c.C)(t),n=!1,a()}}}function r(e){let t,n;return{c(){t=Object(c.D)("p"),n=Object(c.kb)(e[5]),this.h()},l(a){t=Object(c.p)(a,"P",{class:!0});var b=Object(c.n)(t);n=Object(c.s)(b,e[5]),b.forEach(c.C),this.h()},h(){Object(c.j)(t,"class","help is-danger")},m(e,a){Object(c.O)(e,t,a),Object(c.g)(t,n)},p(e,t){32&t&&Object(c.eb)(n,e[5])},d(e){e&&Object(c.C)(t)}}}function s(e){let t,n,s,o,i,j,O,d,u,p,f="text"===e[4]&&b(e),m="password"===e[4]&&l(e);d=new a.a({props:{size:"small",icon:e[3],left:!0}});let h=null!=e[5]&&r(e);return{c(){t=Object(c.D)("div"),n=Object(c.D)("label"),s=Object(c.kb)(e[1]),o=Object(c.hb)(),i=Object(c.D)("div"),f&&f.c(),j=Object(c.hb)(),m&&m.c(),O=Object(c.hb)(),Object(c.w)(d.$$.fragment),u=Object(c.hb)(),h&&h.c(),this.h()},l(a){t=Object(c.p)(a,"DIV",{class:!0});var b=Object(c.n)(t);n=Object(c.p)(b,"LABEL",{class:!0,for:!0});var l=Object(c.n)(n);s=Object(c.s)(l,e[1]),l.forEach(c.C),o=Object(c.r)(b),i=Object(c.p)(b,"DIV",{class:!0});var r=Object(c.n)(i);f&&f.l(r),j=Object(c.r)(r),m&&m.l(r),O=Object(c.r)(r),Object(c.o)(d.$$.fragment,r),r.forEach(c.C),u=Object(c.r)(b),h&&h.l(b),b.forEach(c.C),this.h()},h(){Object(c.j)(n,"class","label"),Object(c.j)(n,"for",e[2]),Object(c.j)(i,"class","control has-icons-left"),Object(c.j)(t,"class","field")},m(e,a){Object(c.O)(e,t,a),Object(c.g)(t,n),Object(c.g)(n,s),Object(c.g)(t,o),Object(c.g)(t,i),f&&f.m(i,null),Object(c.g)(i,j),m&&m.m(i,null),Object(c.g)(i,O),Object(c.S)(d,i,null),Object(c.g)(t,u),h&&h.m(t,null),p=!0},p(e,[a]){(!p||2&a)&&Object(c.eb)(s,e[1]),(!p||4&a)&&Object(c.j)(n,"for",e[2]),"text"===e[4]?f?f.p(e,a):(f=b(e),f.c(),f.m(i,j)):f&&(f.d(1),f=null),"password"===e[4]?m?m.p(e,a):(m=l(e),m.c(),m.m(i,O)):m&&(m.d(1),m=null);const o={};8&a&&(o.icon=e[3]),d.$set(o),null!=e[5]?h?h.p(e,a):(h=r(e),h.c(),h.m(t,null)):h&&(h.d(1),h=null)},i(e){p||(Object(c.mb)(d.$$.fragment,e),p=!0)},o(e){Object(c.nb)(d.$$.fragment,e),p=!1},d(e){e&&Object(c.C)(t),f&&f.d(),m&&m.d(),Object(c.A)(d),h&&h.d()}}}function o(e,t,n){let{name:c}=t,{id:a}=t,{icon:b}=t,{type:l="text"}=t,{value:r}=t,{formStatus:s={}}=t,o=null;return e.$$set=e=>{"name"in e&&n(1,c=e.name),"id"in e&&n(2,a=e.id),"icon"in e&&n(3,b=e.icon),"type"in e&&n(4,l=e.type),"value"in e&&n(0,r=e.value),"formStatus"in e&&n(6,s=e.formStatus)},e.$$.update=()=>{68&e.$$.dirty&&n(5,o=s[a])},[r,c,a,b,l,o,s,function(){r=this.value,n(0,r)},function(){r=this.value,n(0,r)}]}class i extends c.b{constructor(e){super(),Object(c.N)(this,e,o,s,c.bb,{name:1,id:2,icon:3,type:4,value:0,formStatus:6})}}t.a=i}}]);