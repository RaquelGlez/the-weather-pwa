(this["webpackJsonpthe-weather"]=this["webpackJsonpthe-weather"]||[]).push([[0],{11:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),i=t(5),r=t.n(i),s=(t(11),t(2)),l=t(0),o=function(){return Object(l.jsx)("div",{className:"lds-dual-ring"})},h=function(e){var a=e.msg,t={padding:"1rem",marginBottom:"1rem",textAlign:"center",color:"#fff",fontWeight:"bold",width:"100%",backgroundColor:e.bgColor};return Object(l.jsx)("div",{style:t,children:Object(l.jsx)("p",{children:a})})},d=function(e){var a=e.handleSearch,t=Object(n.useState)(""),c=Object(s.a)(t,2),i=c[0],r=c[1],o=Object(n.useState)(!1),h=Object(s.a)(o,2),d=h[0],u=h[1],j=Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})});return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"weatherForm__container",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i?(u(!1),a(i),r("")):u(!0)},className:"weatherForm__form",children:[Object(l.jsx)("input",{type:"text",placeholder:"City",value:i,onChange:function(e){r(e.target.value)},className:"weatherForm__input-city"}),Object(l.jsx)("button",{type:"submit","aria-label":"Search",className:"weatherForm__input-btn",children:j})]})}),d&&Object(l.jsx)("p",{className:"weatherForm__error",children:"Enter a city"})]})},u={thunderstorm:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-cloud-lightning",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{d:"M13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1zM7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2z"})}),drizzle:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-cloud-drizzle",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{d:"M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z"})}),rain:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-cloud-rain-heavy",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{d:"M4.176 11.032a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm.229-7.005a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1z"})}),snow:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-snow2",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{d:"M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793v-1.086l-.646.647a.5.5 0 0 1-.707-.708L7.5 10.293V8.866l-1.236.713-.495 1.85a.5.5 0 1 1-.966-.26l.237-.882-.94.542-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495.94-.542-.882-.237a.5.5 0 1 1 .258-.966l1.85.495L7 8l-1.236-.713-1.849.495a.5.5 0 1 1-.258-.966l.883-.237-.94-.542-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 0 1 .966-.258l.495 1.849.94.542-.236-.883a.5.5 0 0 1 .966-.258l.495 1.849 1.236.713V5.707L6.147 4.354a.5.5 0 1 1 .707-.708l.646.647V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 0 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v1.086l.647-.647a.5.5 0 1 1 .707.708L8.5 5.707v1.427l1.236-.713.495-1.85a.5.5 0 1 1 .966.26l-.236.882.94-.542.495-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495-.94.542.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l1.236.713 1.849-.495a.5.5 0 0 1 .259.966l-.883.237.94.542 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-.94-.542.236.883a.5.5 0 0 1-.966.258L9.736 9.58 8.5 8.866v1.427l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647v1.086l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z"})}),fog:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-cloud-fog2",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{d:"M8.5 4a4.002 4.002 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 13H.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 4zM0 8.5A.5.5 0 0 1 .5 8h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"})}),sun:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-sun",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{d:"M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"})}),clouds:Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-clouds",viewBox:"0 0 16 16",children:[Object(l.jsx)("path",{d:"M16 7.5a2.5 2.5 0 0 1-1.456 2.272 3.513 3.513 0 0 0-.65-.824 1.5 1.5 0 0 0-.789-2.896.5.5 0 0 1-.627-.421 3 3 0 0 0-5.22-1.625 5.587 5.587 0 0 0-1.276.088 4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5z"}),Object(l.jsx)("path",{d:"M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.502 4.502 0 0 1 7 5zm3.5 4.5a3.5 3.5 0 0 0-6.89-.873.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953.5.5 0 0 1-.624-.492V9.5z"})]}),cloud:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-cloud",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{d:"M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"})})},j=function(e,a){for(var t=[],n=e;n<=a;n++)t.push(n);return t},b=function(e){var a,t=e.detail,n=t.city,c=t.description,i=t.descriptionId,r=t.temperature;return Object(l.jsxs)("div",{className:"weatherMain__container",children:[Object(l.jsx)("p",{className:"weatherMain__temp",children:"".concat(Math.round(r),"\xb0")}),Object(l.jsx)("p",{className:"weatherMain__city",children:n}),Object(l.jsxs)("div",{className:"weatherMain__description",children:[Object(l.jsx)("div",{className:"weatherMain__description-icon",children:(a=i,j(200,232).includes(a)?u.thunderstorm:j(300,321).includes(a)?u.drizzle:j(500,531).includes(a)?u.rain:j(600,622).includes(a)?u.snow:j(700,781).includes(a)?u.fog:800===a?u.sun:j(801,804).includes(a)?u.clouds:u.cloud)}),Object(l.jsx)("p",{className:"weatherMain__description-text",children:c})]})]})},m=function(e){var a=e.detail,t=a.cloudy,n=a.humidity,c=a.wind;return Object(l.jsxs)("div",{className:"weatherData_container",children:[Object(l.jsxs)("div",{className:"weatherData__item",children:[Object(l.jsx)("p",{children:"Cloudy"}),Object(l.jsx)("p",{children:"".concat(Math.round(t),"%")})]}),Object(l.jsxs)("div",{className:"weatherData__item",children:[Object(l.jsx)("p",{children:"Humidity"}),Object(l.jsx)("p",{children:"".concat(Math.round(n),"%")})]}),Object(l.jsxs)("div",{className:"weatherData__item",children:[Object(l.jsx)("p",{children:"Wind"}),Object(l.jsx)("p",{children:"".concat(Math.round(c),"km/h")})]})]})},w=t(4),v=t.n(w),g=t(6),f=function(){var e=Object(g.a)(v.a.mark((function e(a){var t,n,c,i,r,s,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"b9e5e789defa6dd8cb5acfa22f21efff","https://api.openweathermap.org/data/2.5/weather?units=metric",t="".concat("https://api.openweathermap.org/data/2.5/weather?units=metric","&appid=").concat("b9e5e789defa6dd8cb5acfa22f21efff","&q=").concat(encodeURI(a)),e.next=5,fetch(t);case 5:if((n=e.sent).ok){e.next=14;break}if(c=n.url,i=n.status,r=n.statusText,400!==i){e.next=13;break}throw 400,400;case 13:throw Error("".concat(i," ").concat(r," in fetch ").concat(c));case 14:return e.next=16,n.json();case 16:return s=e.sent,l={temperature:s.main.temp,city:s.name,descriptionId:s.weather[0].id,description:s.weather[0].description,cloudy:s.clouds.all,humidity:s.main.humidity,wind:s.wind.speed},e.abrupt("return",l);case 19:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),x=function(){var e=Object(n.useState)("Mexico"),a=Object(s.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)(null),r=Object(s.a)(i,2),u=r[0],j=r[1],w=Object(n.useState)(!1),v=Object(s.a)(w,2),g=v[0],x=v[1],p=Object(n.useState)(400),O=Object(s.a)(p,2),_=O[0],z=O[1],N=Object(n.useState)(null),M=Object(s.a)(N,2),C=M[0],y=M[1];Object(n.useEffect)((function(){A(t)}),[t]);var A=function(e){x(!0),f(e).then((function(e){j(e),y(""),z(""),x(!1)})).catch((function(e){400===e?(z(e),y("")):(y("Unable to update weather"),z("")),x(!1)}))};return Object(l.jsxs)("div",{className:"manager__container",children:[Object(l.jsx)("h1",{className:"manager__title",children:"the.weather"}),g&&Object(l.jsx)("div",{className:"manager__loader",children:Object(l.jsx)(o,{})}),!_&&(C?Object(l.jsx)("div",{className:"manager__message",children:Object(l.jsx)(h,{msg:C,bgColor:"rgba(223, 92, 92, 0.4)"})}):Object(l.jsx)("div",{className:"manager__weatherMain",children:Object(l.jsx)(b,{detail:u})})),Object(l.jsx)("div",{className:"manager__bg-right"}),Object(l.jsx)("div",{className:"manager__section-form",children:Object(l.jsx)(d,{handleSearch:function(e){c(e)}})}),!_&&!C&&Object(l.jsx)("div",{className:"manager__weatherData",children:Object(l.jsx)(m,{detail:u})})]})};var p=function(){return Object(l.jsx)("div",{className:"App ",children:Object(l.jsx)(x,{})})},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,i=a.getLCP,r=a.getTTFB;t(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");O?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):_(a,e)}))}}(),z()}},[[14,1,2]]]);
//# sourceMappingURL=main.0905dafb.chunk.js.map