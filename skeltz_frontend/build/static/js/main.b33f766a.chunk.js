(this.webpackJsonpskeltz_frontend=this.webpackJsonpskeltz_frontend||[]).push([[0],{1036:function(e,t){},1039:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(170),s=c.n(r),i=(c(358),c(8)),l=(c.p,c(21)),o=c(1),d=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=(t[0],t[1]);return Object(a.useEffect)((function(){return c(!0)}),[]),Object(o.jsx)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4",children:Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:[Object(o.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}),")"]})})},j=c(22),b=c.n(j),x=c(42),h=c(12),u=c.n(h),m=function(e){var t=e.setKit,c=Object(a.useState)(""),n=Object(i.a)(c,2),r=n[0],s=n[1],l="".concat("https://kunaikit.herokuapp.com/","api/search/").concat(r);return Object(a.useEffect)((function(){r?(function(){var e=Object(x.a)(b.a.mark((function e(c){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.a.get(c).then((function(e){t(e.data),console.log(e.data)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(l),console.log("searching"+window.location.hash.includes("#/kit"))):t([])}),[r]),Object(o.jsx)("div",{className:"inline-flex flex-col justify-center",children:Object(o.jsxs)("div",{class:"pt-2 relative mx-auto text-gray-600",children:[Object(o.jsx)("input",{class:"border-4 border-black bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none",type:"search",onChangeCapture:function(e){return s(e.target.value)},name:"search",placeholder:"Search by title, user or category"}),Object(o.jsx)("button",{type:"submit",class:"absolute right-0 top-0 mt-5 mr-4",children:Object(o.jsx)("svg",{class:"text-black h-4 w-4 fill-current",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 56.966 56.966",style:{"enable-background":"new 0 0 56.966 56.966;"},xmlSpace:"preserve",width:"512px",height:"512px",children:Object(o.jsx)("path",{d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"})})})]})})};function g(e){var t=e.setPassData;return Object(o.jsx)("div",{className:"mt-6 mb-6",children:Object(o.jsxs)("div",{className:"flex justify-between",children:[Object(o.jsx)("div",{children:Object(o.jsx)(l.b,{to:"/",children:Object(o.jsx)("a",{children:Object(o.jsx)("h1",{className:"font-bold tracking-tighter text-black  dark:text-white text-5xl title-font",children:"Skeltz"})})})}),Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"flex flex-row gap-4",children:[Object(o.jsx)("div",{children:Object(o.jsx)(m,{setKit:t})}),Object(o.jsx)("div",{children:Object(o.jsx)(d,{})}),Object(o.jsx)("div",{children:Object(o.jsx)(l.b,{to:"/signin",children:Object(o.jsx)("a",{children:Object(o.jsx)("button",{className:"flex items-center px-6 py-2 font-semibold text-black dark:text-white transition duration-500 ease-in-out transform hover:bg-gray-200 dark:hover:bg-gray-700 border-3 dark:border-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2",children:"Sign In"})})})}),Object(o.jsx)("div",{children:Object(o.jsx)(l.b,{to:"/signin",children:Object(o.jsx)("a",{children:Object(o.jsx)("button",{className:"flex items-center px-6 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-indigo-500 dark:bg-indigo-700 hover:bg-indigo-700 dark:hover:bg-indigo-900 border-2 dark:border-gray-200 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2",children:"Get Started"})})})})]})})]})})}var f=c(7);function O(e){var t=e.setPassData;return Object(o.jsx)("div",{className:"mt-6 mb-6",children:Object(o.jsxs)("div",{className:"flex justify-between",children:[Object(o.jsx)("div",{className:"mx-3",children:Object(o.jsx)(l.b,{to:"/dashboard",children:Object(o.jsx)("a",{children:Object(o.jsx)("h1",{className:"font-bold tracking-tighter text-black dark:text-white text-5xl title-font",children:"Skeltz"})})})}),Object(o.jsx)("div",{children:Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"flex flex-row gap-4",children:[Object(o.jsx)(m,{setKit:t}),Object(o.jsx)(d,{}),Object(o.jsx)(l.b,{to:"/account",children:Object(o.jsx)("a",{children:Object(o.jsxs)("button",{className:"flex gap-2 items-center px-6 py-2 font-semibold text-black dark:text-white transition duration-500 ease-in-out transform hover:bg-gray-200 dark:hover:bg-gray-700 rounded-sm border-2 border-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2",children:[Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{"fill-rule":"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z","clip-rule":"evenodd"})}),Object(o.jsx)("div",{children:"My Account"})]})})}),Object(o.jsx)(l.b,{to:"/create",children:Object(o.jsx)("button",{className:"flex hover:scale-110 gap-2 items-center px-6 py-2 font-semibold text-white dark:text-white transition duration-600 ease-in-out transform rounded-sm bg-black  ring-offset-current ring-offset-2",children:"Create Kit"})}),Object(o.jsx)("button",{children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(o.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})})]})})})]})})}c(348),c(349),c(383);var p=c(121);c.p;function v(e){var t=e.passData,c=Object(a.useState)(!1),n=Object(i.a)(c,2),r=n[0],s=n[1],l=Object(a.useState)([]),d=Object(i.a)(l,2),j=d[0],h=d[1],m="https://kunaikit.herokuapp.com",g=Object(a.useState)([]),O=Object(i.a)(g,2),w=O[0],k=O[1];return Object(a.useEffect)((function(){function e(){return(e=Object(x.a)(b.a.mark((function e(){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://kunaikit.herokuapp.com/api/getkit/");case 2:c=e.sent,console.log(c.data.items.length),k(c.data.items),t.length>0&&(t.map((function(e,c){t[c]=JSON.stringify(e)})),k(t)),console.log(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[v,r,t]),Object(a.useEffect)((function(){console.log(j)}),[j]),Object(o.jsx)("div",{children:Object(o.jsx)("body",{children:Object(o.jsxs)("div",{className:"my-4 flex flex-row justify-between  border-4 border-white",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"px-4 py-6 flex flex-col justify-evenly border-4 border-white",children:[Object(o.jsx)("h3",{className:"my-1 flow-root",children:Object(o.jsx)("button",{type:"button",className:"px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500","aria-controls":"filter-section-mobile-1","aria-expanded":"false",children:Object(o.jsx)("span",{className:"font-medium text-gray-900",children:"Category"})})}),Object(o.jsxs)("div",{className:"space-y-3",children:[Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("input",{id:"filter-mobile-category-0",name:"category[]",value:"Web Dev",type:"checkbox",onChange:function(e){e.target.checked?h([].concat(Object(f.a)(j),[e.target.value])):h(j.filter((function(t){return t!==e.target.value})))},className:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"}),Object(o.jsx)("label",{htmlFor:"filter-mobile-category-0",className:"ml-3 min-w-0 flex-1 text-gray-500",children:"Web Dev\ud83d\udd78"})]}),Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("input",{id:"filter-mobile-category-4",name:"category[]",value:"Data Science",type:"checkbox",onChange:function(e){e.target.checked?h([].concat(Object(f.a)(j),[e.target.value])):h(j.filter((function(t){return t!==e.target.value})))},className:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"}),Object(o.jsx)("label",{htmlFor:"filter-mobile-category-4",className:"ml-3 min-w-0 flex-1 text-gray-500",children:"Data Science\ud83d\udcca"})]}),Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("input",{id:"filter-mobile-category-4",name:"category[]",value:"Graphic Design",type:"checkbox",onChange:function(e){e.target.checked?h([].concat(Object(f.a)(j),[e.target.value])):h(j.filter((function(t){return t!==e.target.value})))},className:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"}),Object(o.jsx)("label",{htmlFor:"filter-mobile-category-4",className:"ml-3 min-w-0 flex-1 text-gray-500",children:"Graphic Design\ud83c\udfa8"})]}),Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("input",{id:"filter-mobile-category-4",name:"category[]",value:"Digital Marketing",type:"checkbox",onChange:function(e){e.target.checked?h([].concat(Object(f.a)(j),[e.target.value])):h(j.filter((function(t){return t!==e.target.value})))},className:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"}),Object(o.jsx)("label",{htmlFor:"filter-mobile-category-4",className:"ml-3 min-w-0 flex-1 text-gray-500",children:"Digital Marketing\ud83d\udcc8"})]}),Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("input",{id:"filter-mobile-category-4",name:"category[]",value:"Writing",onChange:function(e){e.target.checked?h([].concat(Object(f.a)(j),[e.target.value])):h(j.filter((function(t){return t!==e.target.value})))},type:"checkbox",className:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"}),Object(o.jsx)("label",{htmlFor:"filter-mobile-category-4",className:"ml-3 min-w-0 flex-1 text-gray-500",children:"Writing\ud83d\udcdd"})]}),Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("input",{id:"filter-mobile-category-4",name:"category[]",value:"Web 3",onChange:function(e){e.target.checked?h([].concat(Object(f.a)(j),[e.target.value])):h(j.filter((function(t){return t!==e.target.value})))},type:"checkbox",className:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"}),Object(o.jsx)("label",{htmlFor:"filter-mobile-category-4",className:"ml-3 min-w-0 flex-1 text-gray-500",children:"Web 3 \ud83c\udf10"})]}),Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("input",{id:"filter-mobile-category-4",name:"category[]",value:"Bootstrapping",onChange:function(e){e.target.checked?h([].concat(Object(f.a)(j),[e.target.value])):h(j.filter((function(t){return t!==e.target.value})))},type:"checkbox",className:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"}),Object(o.jsx)("label",{htmlFor:"filter-mobile-category-4",className:"ml-3 min-w-0 flex-1 text-gray-500",children:"Bootstrapping\ud83d\udd28"})]}),Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("input",{id:"filter-mobile-category-4",name:"category[]",value:"Startups",onChange:function(e){e.target.checked?h([].concat(Object(f.a)(j),[e.target.value])):h(j.filter((function(t){return t!==e.target.value})))},type:"checkbox",className:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"}),Object(o.jsx)("label",{htmlFor:"filter-mobile-category-4",className:"ml-3 min-w-0 flex-1 text-gray-500",children:"Startups\ud83e\udd84"})]})]})]})}),Object(o.jsx)("div",{className:" ml-24 flex flex-1 flex-col justify-evenly ",children:w.map((function(e,t){if(j.includes(JSON.parse(e).categories)||0===j.length)return Object(o.jsx)("div",{className:"mx-4 w-full sm:w-9/12",children:Object(o.jsxs)("div",{className:"p-2 my-6 sm:p-4 bg-white  shadow-2xl border-4 border-black rounded-md",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"mb-2 text-2xl sm:text-3xl font-semibold leading-none tracking-tighter text-black  title-font",children:JSON.parse(e).title})}),Object(o.jsx)("div",{onClick:function(){window.location.href=m+"/#/kit/"+JSON.parse(e).id},children:Object(o.jsx)("p",{className:"py-2 text-base leading-relaxed text-gray-700 ",children:Object(o.jsx)(p.a,{children:JSON.parse(e).markdown_data.substring(0,210)+"..."})})}),Object(o.jsxs)("div",{className:"flex justify-between",children:[Object(o.jsxs)("div",{className:"flex flew-row gap-4",children:[Object(o.jsx)("div",{className:"relative w-12 h-12",children:Object(o.jsx)("img",{className:"rounded-full border border-gray-100 shadow-sm",src:JSON.parse(e).profile_image,alt:"User Avatar",width:320,height:320})}),Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"text-base font-medium leading-relaxed max-w-prose text-gray-700 ",children:JSON.parse(e).user})})]}),Object(o.jsxs)("div",{className:"flex flex-row",children:[Object(o.jsx)("button",{onClick:function(){u.a.get(m+"/api/up/"+JSON.parse(e).id).then((function(){s(!r)}))},children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 11l7-7 7 7M5 19l7-7 7 7"})})}),Object(o.jsx)("p",{className:"font-semibold text-black text-xl",children:JSON.parse(e).upvotes.length})]})]})]})})}))})]})})})}var w=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("header",{className:"mx-4 sm:mx-auto sm:max-w-5xl",children:Object(o.jsx)(g,{setPassData:n})}),Object(o.jsx)("body",{children:Object(o.jsx)(v,{passData:c})})]})},k=c(10),y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,1056)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))},N=c(347),S=c(344),C=c(1053),D=c(325),M=c.n(D);var _=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)("\n  ## Create your kit here in markdown\n  "),s=Object(i.a)(r,2),l=s[0],d=s[1],j=Object(a.useState)([]),b=Object(i.a)(j,2),x=b[0],h=b[1],m=Object(a.useState)(""),g=Object(i.a)(m,2),f=g[0],p=g[1],w=Object(a.useState)(""),k=Object(i.a)(w,2),y=(k[0],k[1],Object(a.useState)(!1)),D=Object(i.a)(y,2),_=D[0],W=D[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(O,{setPassData:h}),x.length>0?Object(o.jsx)(v,{passData:x}):Object(o.jsx)("div",{className:"flex flex-row justify-center",children:Object(o.jsxs)("div",{className:"my-4 mx-4 max-w-4xl min-h-screen flex flex-1 flex-col p-10 border-solid border-black border-4 rounded-md",children:[Object(o.jsx)("input",{type:"text",className:"my-2 border-solid border-black border-4 rounded-md",placeholder:"Title",onChange:function(e){return n(e.target.value)}}),_?Object(o.jsx)(C.a,{children:Object(o.jsx)(S.Markdown,{children:l})}):Object(o.jsx)(C.a,{children:Object(o.jsx)(N.MarkdownEditor,{className:"my-2 border-solid border-black border-4 rounded-md",placeholder:"Make your kit",value:l,onChange:d})}),Object(o.jsxs)("span",{className:"flex-row justify-between",children:[Object(o.jsxs)("select",{name:"categories",id:"category",onChange:function(e){return p(e.target.value)},className:"my-2 max-w-xs border-solid border-black border-4 rounded-md",children:[Object(o.jsx)("option",{children:"Select a category"}),Object(o.jsx)("option",{value:"Web Dev",children:"Web Dev"}),Object(o.jsx)("option",{value:"Data Science",children:"Data Science"}),Object(o.jsx)("option",{value:"Graphic Design",children:"Graphic Design"}),Object(o.jsx)("option",{value:"Digital Marketing",children:"Digital Marketing"}),Object(o.jsx)("option",{value:"Writing",children:"Writing"}),Object(o.jsx)("option",{value:"Web 3",children:"Web 3"}),Object(o.jsx)("option",{value:"Bootstrapping",children:"Bootstrapping"}),Object(o.jsx)("option",{value:"Startups",children:"Startups"})]}),Object(o.jsx)("button",{onClick:function(){return W(!_)},children:"Preview"}),Object(o.jsx)("button",{className:"my-2 mx-2 p-2 max-w-md bg-black rounded-lg text-white",onClick:function(){if(""===f||"Select a category"===f)alert("Select a category!");else{var e={title:c,markdown_data:l,categories:f};u.a.post("https://kunaikit.herokuapp.com/api/addkit/",e,{headers:{"X-CSRFToken":M.a.get("csrftoken")}}).then((function(e){console.log(e),console.log(JSON.parse(e.data.kit).id),console.log(e.data.kit.id);var t=JSON.parse(e.data.kit).id;window.location.href="".concat("https://kunaikit.herokuapp.com/","#/kit/").concat(t)})).catch((function(e){console.log(e)}))}},children:"Submit"})]})]})})]})};var W=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("header",{className:"mx-4 sm:mx-auto sm:max-w-5xl",children:Object(o.jsx)(O,{setPassData:n})}),Object(o.jsx)("body",{children:Object(o.jsx)(v,{passData:c})})]})};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(l.a,{children:Object(o.jsxs)(k.c,{children:[Object(o.jsx)(k.a,{exact:!0,path:"/",component:w}),Object(o.jsx)(k.a,{path:"/signin",component:function(){return Object(o.jsxs)("div",{className:"mt-6 mb-6",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(o.jsx)(l.b,{to:"/",children:Object(o.jsx)("a",{children:Object(o.jsx)("h1",{className:"font-bold tracking-tighter text-black dark:text-white text-5xl title-font",children:"Skeltz"})})}),Object(o.jsx)(d,{})]})}),Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"flex justify-center",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"mt-12 text-2xl font-semibold text-black dark:text-white tracking-ringtighter sm:text-3xl title-font",children:"Sign in to your account"}),Object(o.jsx)("hr",{className:"my-6 border-blueGray-300"}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"button",onClick:function(){window.location.href="https://kunaikit.herokuapp.com/accounts/twitter/login"},className:"inline-flex w-full px-4 py-3 font-semibold text-black dark:text-black hover:text-white dark:hover:text-white transition duration-500 ease-in-out transform bg-white border rounded-lg border-blueGray-300 hover:bg-indigo-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ",children:Object(o.jsxs)("div",{className:"flex items-center justify-center mx-auto",children:[Object(o.jsx)("div",{className:"flex items-center justify-center ",children:Object(o.jsx)("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:Object(o.jsx)("path",{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"})})}),Object(o.jsx)("span",{className:"ml-4 ",children:" Sign in with Twitter "})]})})})]})})})]})}}),Object(o.jsx)(k.a,{path:"/dashboard",component:W}),Object(o.jsx)(k.a,{path:"/create",component:_}),Object(o.jsx)(k.a,{path:"/account",component:function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),s=Object(i.a)(r,2),l=s[0],d=s[1],j=Object(a.useState)(""),b=Object(i.a)(j,2),x=b[0],h=b[1];return Object(a.useEffect)((function(){u.a.get("https://kunaikit.herokuapp.com/api/getuser/").then((function(e){n(e.data)}))}),[]),Object(a.useEffect)((function(){var e=(c.profile_image_url_https?c.profile_image_url_https:"https://img.icons8.com/windows/32/000000/guest-male--v1.png").replace("_normal","");h(e)}),[c]),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)(O,{setPassData:d})}),l.length>0?Object(o.jsx)(v,{passData:l}):Object(o.jsx)("div",{class:"flex items-center h-screen w-full text-center justify-center",children:Object(o.jsx)("div",{class:"w-5/12",children:Object(o.jsxs)("div",{className:"p-2 sm:p-4 bg-white dark:bg-black shadow-2xl border-2 border-gray-500",children:[Object(o.jsx)("div",{class:"photo-wrapper flex justify-center p-2 text-center",children:Object(o.jsx)("img",{className:"img-responsive",id:"profile-photo",class:"rounded-full border border-gray-100 shadow-sm",src:x,alt:"User Avatar",width:128,height:128})}),Object(o.jsxs)("div",{class:"p-2 text-center",children:[Object(o.jsx)("h3",{className:"mb-2 text-xl text-center sm:text-2xl font-semibold leading-none tracking-tighter text-black dark:text-white title-font",children:c.name}),Object(o.jsx)("div",{class:"text-center text-gray-400 text-xs font-semibold",children:Object(o.jsx)("p",{children:Object(o.jsx)("a",{href:c.url,children:"Twitter"})})}),Object(o.jsx)("table",{class:" flex justify-center py-2 text-base leading-relaxed text-gray-700 dark:text-gray-400 my-3",children:Object(o.jsxs)("tbody",{children:[Object(o.jsx)("tr",{children:Object(o.jsx)("td",{class:"px-2 py-2",children:"@"+c.screen_name})}),Object(o.jsx)("tr",{children:Object(o.jsx)("td",{class:"px-2 py-2",children:c.description})})]})})]})]})})})]})}}),Object(o.jsx)(k.a,{path:"/kit/:slug",component:function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),s=Object(i.a)(r,2),l=s[0],d=s[1],j=Object(a.useState)(0),h=Object(i.a)(j,2),m=h[0],g=h[1],f=Object(a.useState)(""),w=Object(i.a)(f,2),y=w[0],N=w[1],S=Object(a.useState)(!1),C=Object(i.a)(S,2),D=C[0],M=C[1],_="https://kunaikit.herokuapp.com",W=Object(k.f)().slug,B="https://kunaikit.herokuapp.com/api/getkit/".concat(W),F="https://kunaikit.herokuapp.com/api/votes/".concat(W);return Object(a.useEffect)((function(){function e(){return(e=Object(x.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(B);case 2:return t=e.sent,n(JSON.parse(t.data.kit)),e.next=6,u.a.get(F);case 6:a=e.sent,console.log(a.data),g(a.data.upvotes),console.log(c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[W,D]),Object(a.useEffect)((function(){function e(){return(e=Object(x.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(_+"/api/getuser/");case 2:t=e.sent,N(t.data.screen_name);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[W]),Object(o.jsxs)("div",{children:[Object(o.jsx)("header",{children:Object(o.jsx)(O,{setPassData:d})}),Object(o.jsx)("body",{children:l.length>0?Object(o.jsx)(v,{passData:l}):Object(o.jsx)("div",{className:"my-4 flex justify-center",children:Object(o.jsx)("div",{className:"mx-4 w-full sm:w-9/12",children:Object(o.jsxs)("div",{className:"p-2 sm:p-4 bg-white shadow-2xl border-4 border-black rounded-md",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"mb-2 text-2xl sm:text-3xl font-semibold leading-none tracking-tighter text-black title-font",children:c.title?c.title:"Loading"})}),Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"py-2 text-base leading-relaxed text-gray-700",children:Object(o.jsx)(p.a,{children:c.markdown_data?c.markdown_data:"Loading"})})}),Object(o.jsxs)("div",{className:"flex justify-between",children:[Object(o.jsxs)("div",{className:"flex flew-row gap-4",children:[Object(o.jsx)("div",{class:"relative w-12 h-12",children:Object(o.jsx)("img",{className:"rounded-full border border-gray-100 shadow-sm",src:c.profile_image,alt:"User Avatar",width:32,height:32})}),Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"text-base font-medium leading-relaxed max-w-prose text-gray-700",children:c.user})})]}),Object(o.jsxs)("div",{className:"flex flex-row align-middle",children:[c.user===y?Object(o.jsx)("button",{type:"button",onClick:function(){u.a.get(_+"/api/deletekit/"+W).then((function(){window.alert("Kit deleted"),window.location.href=_+"#/"})).catch((function(e){window.alert(e)}))},children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 flex",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})}):Object(o.jsx)(o.Fragment,{}),Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 flex",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"})}),Object(o.jsx)("button",{onClick:function(){u.a.get(_+"/api/up/"+c.id).then((function(){M(!D)}))},children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 flex",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(o.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 11l7-7 7 7M5 19l7-7 7 7"})})}),Object(o.jsx)("p",{className:"font-semibold text-black text-xl",children:m})]})]})]})})})})]})}})]})})}),document.getElementById("root")),y()},358:function(e,t,c){},408:function(e,t){}},[[1039,1,2]]]);
//# sourceMappingURL=main.b33f766a.chunk.js.map