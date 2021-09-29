(this.webpackJsonpskeltz_frontend=this.webpackJsonpskeltz_frontend||[]).push([[0],{1038:function(e,t){},1042:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(171),i=c.n(a),s=(c(360),c.p,c(20)),l=c(10),o=c(1),d=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=(t[0],t[1]);return Object(n.useEffect)((function(){return c(!0)}),[]),Object(o.jsx)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4",children:Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:[Object(o.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}),")"]})})};function j(){return Object(o.jsx)("div",{className:"mt-6 mb-6",children:Object(o.jsxs)("div",{className:"flex justify-between",children:[Object(o.jsx)("div",{children:Object(o.jsx)(s.b,{to:"/",children:Object(o.jsx)("a",{children:Object(o.jsx)("h1",{className:"font-bold tracking-tighter text-black  dark:text-white text-5xl title-font",children:"Skeltz"})})})}),Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"flex flex-row gap-4",children:[Object(o.jsx)("div",{children:Object(o.jsx)(d,{})}),Object(o.jsx)("div",{children:Object(o.jsx)(s.b,{to:"/signin",children:Object(o.jsx)("a",{children:Object(o.jsx)("button",{className:"flex items-center px-6 py-2 font-semibold text-black dark:text-white transition duration-500 ease-in-out transform hover:bg-gray-200 dark:hover:bg-gray-700 border-3 dark:border-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2",children:"Sign In"})})})}),Object(o.jsx)("div",{children:Object(o.jsx)(s.b,{to:"/signin",children:Object(o.jsx)("a",{children:Object(o.jsx)("button",{className:"flex items-center px-6 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-indigo-500 dark:bg-indigo-700 hover:bg-indigo-700 dark:hover:bg-indigo-900 border-2 dark:border-gray-200 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2",children:"Get Started"})})})})]})})]})})}var b=c(7),x=c(41),h=c.n(x),u=c(81);function m(){return Object(o.jsx)("div",{className:"mt-6 mb-6",children:Object(o.jsxs)("div",{className:"flex justify-between",children:[Object(o.jsx)("div",{className:"mx-3",children:Object(o.jsx)(s.b,{to:"/dashboard",children:Object(o.jsx)("a",{children:Object(o.jsx)("h1",{className:"font-bold tracking-tighter text-black dark:text-white text-5xl title-font",children:"Skeltz"})})})}),Object(o.jsx)("div",{children:Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"flex flex-row gap-4",children:[Object(o.jsx)(d,{}),Object(o.jsx)(s.b,{to:"/account",children:Object(o.jsx)("a",{children:Object(o.jsxs)("button",{className:"flex gap-2 items-center px-6 py-2 font-semibold text-black dark:text-white transition duration-500 ease-in-out transform hover:bg-gray-200 dark:hover:bg-gray-700 rounded-sm border-2 border-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2",children:[Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{"fill-rule":"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z","clip-rule":"evenodd"})}),Object(o.jsx)("div",{children:"My Account"})]})})}),Object(o.jsx)(s.b,{to:"/create",children:Object(o.jsx)("button",{className:"flex gap-2 items-center px-6 py-2 font-semibold text-black dark:text-white transition duration-500 ease-in-out transform hover:bg-gray-200 dark:hover:bg-gray-700 rounded-sm border-2 border-gray-500 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2",children:"Create Kit"})}),Object(o.jsx)("button",{children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(o.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})})]})})})]})})}var f=c(31),g=c.n(f),O=(c(350),c(351),c(385),c(123)),p=c.p+"static/media/thispersondoesnotexist.795aab94.jpg";function v(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),i=Object(l.a)(a,2),s=i[0],d=i[1],j="https://kunaikit.herokuapp.com";console.log("url: "+p);var x=Object(n.useState)([]),m=Object(l.a)(x,2),f=m[0],k=m[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://kunaikit.herokuapp.com/api/getkit/");case 2:t=e.sent,console.log(t.data.items.length),k(t.data.items),console.log(f);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[v,c]),Object(n.useEffect)((function(){console.log(s)}),[s]),Object(o.jsx)("div",{children:Object(o.jsx)("body",{children:Object(o.jsxs)("div",{className:"my-4 flex flex-row justify-between  border-4 border-white",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"px-4 py-6 flex flex-col justify-evenly border-4 border-white",children:[Object(o.jsx)("h3",{className:"my-1 flow-root",children:Object(o.jsx)("button",{type:"button",className:"px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500","aria-controls":"filter-section-mobile-1","aria-expanded":"false",children:Object(o.jsx)("span",{className:"font-medium text-gray-900",children:"Category"})})}),Object(o.jsxs)("div",{className:"space-y-3",children:[Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("input",{id:"filter-mobile-category-0",name:"category[]",value:"Web Dev",type:"checkbox",onChange:function(e){e.target.checked?d([].concat(Object(b.a)(s),[e.target.value])):d(s.filter((function(t){return t!==e.target.value})))},className:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"}),Object(o.jsx)("label",{htmlFor:"filter-mobile-category-0",className:"ml-3 min-w-0 flex-1 text-gray-500",children:"Web Dev\ud83d\udd78"})]}),Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("input",{id:"filter-mobile-category-4",name:"category[]",value:"Data Science",type:"checkbox",onChange:function(e){e.target.checked?d([].concat(Object(b.a)(s),[e.target.value])):d(s.filter((function(t){return t!==e.target.value})))},className:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"}),Object(o.jsx)("label",{htmlFor:"filter-mobile-category-4",className:"ml-3 min-w-0 flex-1 text-gray-500",children:"Data Science\ud83d\udcca"})]}),Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("input",{id:"filter-mobile-category-4",name:"category[]",value:"Graphic Design",type:"checkbox",onChange:function(e){e.target.checked?d([].concat(Object(b.a)(s),[e.target.value])):d(s.filter((function(t){return t!==e.target.value})))},className:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"}),Object(o.jsx)("label",{htmlFor:"filter-mobile-category-4",className:"ml-3 min-w-0 flex-1 text-gray-500",children:"Graphic Design\ud83c\udfa8"})]}),Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("input",{id:"filter-mobile-category-4",name:"category[]",value:"Digital Marketing",type:"checkbox",onChange:function(e){e.target.checked?d([].concat(Object(b.a)(s),[e.target.value])):d(s.filter((function(t){return t!==e.target.value})))},className:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"}),Object(o.jsx)("label",{htmlFor:"filter-mobile-category-4",className:"ml-3 min-w-0 flex-1 text-gray-500",children:"Digital Marketing\ud83d\udcc8"})]}),Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("input",{id:"filter-mobile-category-4",name:"category[]",value:"Writing",onChange:function(e){e.target.checked?d([].concat(Object(b.a)(s),[e.target.value])):d(s.filter((function(t){return t!==e.target.value})))},type:"checkbox",className:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"}),Object(o.jsx)("label",{htmlFor:"filter-mobile-category-4",className:"ml-3 min-w-0 flex-1 text-gray-500",children:"Writing\ud83d\udcdd"})]}),Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("input",{id:"filter-mobile-category-4",name:"category[]",value:"Web 3",onChange:function(e){e.target.checked?d([].concat(Object(b.a)(s),[e.target.value])):d(s.filter((function(t){return t!==e.target.value})))},type:"checkbox",className:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"}),Object(o.jsx)("label",{htmlFor:"filter-mobile-category-4",className:"ml-3 min-w-0 flex-1 text-gray-500",children:"Web 3 \ud83c\udf10"})]}),Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("input",{id:"filter-mobile-category-4",name:"category[]",value:"Bootstrapping",onChange:function(e){e.target.checked?d([].concat(Object(b.a)(s),[e.target.value])):d(s.filter((function(t){return t!==e.target.value})))},type:"checkbox",className:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"}),Object(o.jsx)("label",{htmlFor:"filter-mobile-category-4",className:"ml-3 min-w-0 flex-1 text-gray-500",children:"Bootstrapping\ud83d\udd28"})]}),Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("input",{id:"filter-mobile-category-4",name:"category[]",value:"Startups",onChange:function(e){e.target.checked?d([].concat(Object(b.a)(s),[e.target.value])):d(s.filter((function(t){return t!==e.target.value})))},type:"checkbox",className:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"}),Object(o.jsx)("label",{htmlFor:"filter-mobile-category-4",className:"ml-3 min-w-0 flex-1 text-gray-500",children:"Startups\ud83e\udd84"})]})]})]})}),Object(o.jsx)("div",{className:" ml-24 flex flex-1 flex-col justify-evenly ",children:f.map((function(e,t){if(s.includes(JSON.parse(e).categories)||0===s.length)return Object(o.jsx)("div",{className:"mx-4 w-full sm:w-9/12",children:Object(o.jsxs)("div",{className:"p-2 my-6 sm:p-4 bg-white  shadow-2xl border-4 border-black rounded-md",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"mb-2 text-2xl sm:text-3xl font-semibold leading-none tracking-tighter text-black  title-font",children:JSON.parse(e).title})}),Object(o.jsx)("div",{onClick:function(){window.location.href=j+"/#/kit/"+JSON.parse(e).id},children:Object(o.jsx)("p",{className:"py-2 text-base leading-relaxed text-gray-700 ",children:Object(o.jsx)(O.a,{children:JSON.parse(e).markdown_data.substring(0,210)+"..."})})}),Object(o.jsxs)("div",{className:"flex justify-between",children:[Object(o.jsxs)("div",{className:"flex flew-row gap-4",children:[Object(o.jsx)("div",{className:"relative w-12 h-12",children:Object(o.jsx)("img",{className:"rounded-full border border-gray-100 shadow-sm",src:JSON.parse(e).profile_image,alt:"User Avatar",width:320,height:320})}),Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"text-base font-medium leading-relaxed max-w-prose text-gray-700 ",children:JSON.parse(e).user})})]}),Object(o.jsxs)("div",{className:"flex flex-row",children:[Object(o.jsx)("button",{onClick:function(){g.a.get(j+"/api/up/"+JSON.parse(e).id).then((function(){r(!c)}))},children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 11l7-7 7 7M5 19l7-7 7 7"})})}),Object(o.jsx)("p",{className:"font-semibold text-black text-xl",children:JSON.parse(e).upvotes.length})]})]})]})})}))})]})})})}var k=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("header",{className:"mx-4 sm:mx-auto sm:max-w-5xl",children:Object(o.jsx)(j,{})}),Object(o.jsx)("body",{children:Object(o.jsx)(v,{})})]})},y=c(9),w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,1059)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))},N=c(348),S=c(345),C=c(1056),M=c(326),D=c.n(M);var F=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)("\n  ## Create your kit here in markdown\n  "),i=Object(l.a)(a,2),s=i[0],d=i[1],j=Object(n.useState)(""),b=Object(l.a)(j,2),x=b[0],h=b[1],u=Object(n.useState)(""),f=Object(l.a)(u,2),O=(f[0],f[1],Object(n.useState)(!1)),p=Object(l.a)(O,2),v=p[0],k=p[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(m,{}),Object(o.jsx)("div",{className:"flex flex-row justify-center",children:Object(o.jsxs)("div",{className:"my-4 mx-4 max-w-4xl min-h-screen flex flex-1 flex-col p-10 border-solid border-black border-4 rounded-md",children:[Object(o.jsx)("input",{type:"text",className:"my-2 border-solid border-black border-4 rounded-md",placeholder:"Title",onChange:function(e){return r(e.target.value)}}),v?Object(o.jsx)(C.a,{children:Object(o.jsx)(S.Markdown,{children:s})}):Object(o.jsx)(C.a,{children:Object(o.jsx)(N.MarkdownEditor,{className:"my-2 border-solid border-black border-4 rounded-md",placeholder:"Make your kit",value:s,onChange:d})}),Object(o.jsxs)("span",{className:"flex-row justify-between",children:[Object(o.jsxs)("select",{name:"categories",id:"category",onChange:function(e){return h(e.target.value)},className:"my-2 max-w-xs border-solid border-black border-4 rounded-md",children:[Object(o.jsx)("option",{children:"Select a category"}),Object(o.jsx)("option",{value:"Web Dev",children:"Web Dev"}),Object(o.jsx)("option",{value:"Data Science",children:"Data Science"}),Object(o.jsx)("option",{value:"Graphic Design",children:"Graphic Design"}),Object(o.jsx)("option",{value:"Digital Marketing",children:"Digital Marketing"}),Object(o.jsx)("option",{value:"Writing",children:"Writing"}),Object(o.jsx)("option",{value:"Web 3",children:"Web 3"}),Object(o.jsx)("option",{value:"Bootstrapping",children:"Bootstrapping"}),Object(o.jsx)("option",{value:"Startups",children:"Startups"})]}),Object(o.jsx)("button",{onClick:function(){return k(!v)},children:"Preview"}),Object(o.jsx)("button",{className:"my-2 mx-2 p-2 max-w-md bg-black rounded-lg text-white",onClick:function(){if(""===x||"Select a category"===x)alert("Select a category!");else{var e={title:c,markdown_data:s,categories:x};g.a.post("https://kunaikit.herokuapp.com/api/addkit/",e,{headers:{"X-CSRFToken":D.a.get("csrftoken")}}).then((function(e){console.log(e),console.log(JSON.parse(e.data.kit).id),console.log(e.data.kit.id);var t=JSON.parse(e.data.kit).id;window.location.href="".concat("https://kunaikit.herokuapp.com/","#/kit/").concat(t)})).catch((function(e){console.log(e)}))}},children:"Submit"})]})]})})]})};var W=c(21),J=c(27),_=c(116),B=c(62),z=c(66),E=c(349),I=c.n(E),L={position:"fixed",pointerEvents:"none",width:"100%",height:"100%",top:0,left:0},A=function(e){Object(B.a)(c,e);var t=Object(z.a)(c);function c(e){var n;return Object(J.a)(this,c),(n=t.call(this,e)).makeShot=function(e,t){n.animationInstance&&n.animationInstance(Object(W.a)(Object(W.a)({},t),{},{origin:{y:.7},particleCount:Math.floor(200*e)}))},n.fire=function(){n.makeShot(.25,{spread:26,startVelocity:55}),n.makeShot(.2,{spread:60}),n.makeShot(.35,{spread:100,decay:.91,scalar:.8}),n.makeShot(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),n.makeShot(.1,{spread:120,startVelocity:45})},n.handlerFire=function(){n.fire()},n.getInstance=function(e){n.animationInstance=e},n.animationInstance=null,n}return Object(_.a)(c,[{key:"render",value:function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"z-10",onClick:this.props.playConfetti?this.handlerFire:null,children:Object(o.jsx)(I.a,{refConfetti:this.getInstance,style:L})})})}}]),c}(r.a.Component);var G=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("header",{className:"mx-4 sm:mx-auto sm:max-w-5xl",children:Object(o.jsx)(m,{})}),Object(o.jsx)("body",{children:Object(o.jsx)(v,{})})]})};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(s.a,{children:Object(o.jsxs)(y.c,{children:[Object(o.jsx)(y.a,{exact:!0,path:"/",component:k}),Object(o.jsx)(y.a,{path:"/signin",component:function(){return Object(o.jsxs)("div",{className:"mt-6 mb-6",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(o.jsx)(s.b,{to:"/",children:Object(o.jsx)("a",{children:Object(o.jsx)("h1",{className:"font-bold tracking-tighter text-black dark:text-white text-5xl title-font",children:"Skeltz"})})}),Object(o.jsx)(d,{})]})}),Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"flex justify-center",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"mt-12 text-2xl font-semibold text-black dark:text-white tracking-ringtighter sm:text-3xl title-font",children:"Sign in to your account"}),Object(o.jsx)("hr",{className:"my-6 border-blueGray-300"}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"button",onClick:function(){window.location.href="https://kunaikit.herokuapp.com/accounts/twitter/login"},className:"inline-flex w-full px-4 py-3 font-semibold text-black dark:text-black hover:text-white dark:hover:text-white transition duration-500 ease-in-out transform bg-white border rounded-lg border-blueGray-300 hover:bg-indigo-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ",children:Object(o.jsxs)("div",{className:"flex items-center justify-center mx-auto",children:[Object(o.jsx)("div",{className:"flex items-center justify-center ",children:Object(o.jsx)("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:Object(o.jsx)("path",{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"})})}),Object(o.jsx)("span",{className:"ml-4 ",children:" Sign in with Twitter "})]})})})]})})})]})}}),Object(o.jsx)(y.a,{path:"/dashboard",component:G}),Object(o.jsx)(y.a,{path:"/create",component:F}),Object(o.jsx)(y.a,{path:"/account",component:function(){var e,t=Object(n.useState)({}),c=Object(l.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){g.a.get("https://kunaikit.herokuapp.com/api/getuser/").then((function(e){a(e.data)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)(m,{})}),Object(o.jsx)("div",{class:"flex items-center h-screen w-full text-center justify-center",children:Object(o.jsx)("div",{class:"w-5/12",children:Object(o.jsxs)("div",{className:"p-2 sm:p-4 bg-white dark:bg-black shadow-2xl border-2 border-gray-500",children:[Object(o.jsx)("div",{class:"photo-wrapper flex justify-center p-2 text-center",children:Object(o.jsx)("img",{className:"rounded-full border border-gray-100 shadow-sm",src:(e=r.profile_image_url_https,e.replace("_normal","")),alt:"User Avatar",width:128,height:128})}),Object(o.jsxs)("div",{class:"p-2 text-center",children:[Object(o.jsx)("h3",{className:"mb-2 text-xl text-center sm:text-2xl font-semibold leading-none tracking-tighter text-black dark:text-white title-font",children:r.name}),Object(o.jsx)("div",{class:"text-center text-gray-400 text-xs font-semibold",children:Object(o.jsx)("p",{children:r.description})}),Object(o.jsx)("table",{class:" flex justify-center py-2 text-base leading-relaxed text-gray-700 dark:text-gray-400 my-3",children:Object(o.jsxs)("tbody",{children:[Object(o.jsx)("tr",{children:Object(o.jsx)("td",{class:"px-2 py-2",children:"@"+r.screen_name})}),Object(o.jsx)("tr",{children:Object(o.jsx)("td",{class:"px-2 py-2",children:Object(o.jsx)("a",{href:r.url,children:"link"})})})]})})]})]})})})]})}}),Object(o.jsx)(y.a,{path:"/kit/:slug",component:function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),i=Object(l.a)(a,2),s=i[0],d=i[1];Object(n.useEffect)((function(){d(!0)}),[]);var j=Object(n.useState)(0),b=Object(l.a)(j,2),x=b[0],f=b[1],p=Object(n.useState)(!1),v=Object(l.a)(p,2),k=v[0],w=v[1],N=Object(y.f)().slug,S="https://kunaikit.herokuapp.com/api/getkit/".concat(N),C="https://kunaikit.herokuapp.com/api/votes/".concat(N);return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(S);case 2:return t=e.sent,r(JSON.parse(t.data.kit)),e.next=6,g.a.get(C);case 6:n=e.sent,console.log(n.data),f(n.data.upvotes),console.log(c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[N,k]),Object(o.jsxs)("div",{children:[Object(o.jsx)("header",{children:Object(o.jsx)(m,{})}),Object(o.jsxs)("body",{children:[s&&Object(o.jsx)(A,{playConfetti:s}),Object(o.jsx)("div",{className:"my-4 flex justify-center",children:Object(o.jsx)("div",{className:"mx-4 w-full sm:w-9/12",children:Object(o.jsxs)("div",{className:"p-2 sm:p-4 bg-white shadow-2xl border-4 border-black rounded-md",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"mb-2 text-2xl sm:text-3xl font-semibold leading-none tracking-tighter text-black title-font",children:c.title?c.title:"Loading"})}),Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"py-2 text-base leading-relaxed text-gray-700",children:Object(o.jsx)(O.a,{children:c.markdown_data?c.markdown_data:"Loading"})})}),Object(o.jsxs)("div",{className:"flex justify-between",children:[Object(o.jsxs)("div",{className:"flex flew-row gap-4",children:[Object(o.jsx)("div",{class:"relative w-12 h-12",children:Object(o.jsx)("img",{className:"rounded-full border border-gray-100 shadow-sm",src:c.profile_image,alt:"User Avatar",width:32,height:32})}),Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"text-base font-medium leading-relaxed max-w-prose text-gray-700",children:c.user})})]}),Object(o.jsxs)("div",{className:"flex flex-row align-middle",children:[Object(o.jsx)("button",{onClick:function(){g.a.get("https://kunaikit.herokuapp.com/api/up/"+c.id).then((function(){w(!k)}))},children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(o.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 11l7-7 7 7M5 19l7-7 7 7"})})}),Object(o.jsx)("p",{className:"font-semibold text-black text-xl",children:x})]})]})]})})})]})]})}})]})})}),document.getElementById("root")),w()},360:function(e,t,c){},410:function(e,t){}},[[1042,1,2]]]);
//# sourceMappingURL=main.b19b0eee.chunk.js.map