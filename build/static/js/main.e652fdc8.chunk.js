(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{50:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(3),o=n.n(a),i=n(1),s=function(){return Object(i.jsx)("nav",{children:Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{type:"text"}),Object(i.jsx)("button",{children:"Click"})]})})},u=n(4),j=n(10),b=n.n(j),f=n(20),h=n(11),d=n.n(h),O=function(t){return"http://api.weatherapi.com/v1/current.json?key=".concat("50d2badf529046f1b5f91233210706","&q=").concat(t,"&aqi=no")},l=function(t){return"http://api.weatherapi.com/v1/forecast.json?key=".concat("50d2badf529046f1b5f91233210706","&q=").concat(t,"&days=5&aqi=no&alerts=no")},p=function(){var t=Object(u.b)();return Object(c.useEffect)((function(){var e;t((e="kiev",function(){var t=Object(f.a)(b.a.mark((function t(n){var c,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get(O(e));case 2:return c=t.sent,t.next=5,d.a.get(l(e));case 5:r=t.sent,n({type:"FETCH_WEATHER",payload:{current:c,forecast:r}});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[t]),Object(i.jsx)("section",{children:Object(i.jsx)("h1",{children:"Hello World"})})};var x=function(){return Object(i.jsxs)("section",{children:[Object(i.jsx)(s,{}),Object(i.jsx)(p,{})]})},v=n(6),w={currentWeather:[],weatherForecast:[],isLoading:!0},E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))},g=n(5),y=n(21),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.b,F=Object(g.c)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_WEATHER":return Object(v.a)(Object(v.a)({},t),{},{currentWeather:e.payload.current,weatherForecast:e.payload.forecast});default:return Object(v.a)({},t)}}),_(Object(g.a)(y.a)));o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(u.a,{store:F,children:Object(i.jsx)(x,{})})}),document.getElementById("root")),E()}},[[50,1,2]]]);
//# sourceMappingURL=main.e652fdc8.chunk.js.map