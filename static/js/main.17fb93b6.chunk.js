(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{50:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(3),o=n.n(a),s=n(1),i=function(){return Object(s.jsx)("nav",{children:Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{type:"text"}),Object(s.jsx)("button",{children:"Click"})]})})},u=n(4),j=n(10),b=n.n(j),f=n(20),h=n(11),d=n.n(h),l=function(e){return"http://api.weatherapi.com/v1/current.json?key=50d2badf529046f1b5f91233210706&q=".concat(e,"&aqi=no")},O=function(e){return"http://api.weatherapi.com/v1/forecast.json?key=50d2badf529046f1b5f91233210706&q=".concat(e,"&days=5&aqi=no&alerts=no")},p=function(){var e=Object(u.b)();return Object(c.useEffect)((function(){var t;e((t="kiev",function(){var e=Object(f.a)(b.a.mark((function e(n){var c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(l(t)),console.log(O(t)),e.next=4,d.a.get(l(t));case 4:return c=e.sent,e.next=7,d.a.get(O(t));case 7:r=e.sent,n({type:"FETCH_WEATHER",payload:{current:c,forecast:r}});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[e]),Object(s.jsx)("section",{children:Object(s.jsx)("h1",{children:"Hello World"})})};var x=function(){return Object(s.jsxs)("section",{children:[Object(s.jsx)(i,{}),Object(s.jsx)(p,{})]})},v=n(6),g={currentWeather:[],weatherForecast:[],isLoading:!0},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))},E=n(5),y=n(21),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||E.b,F=Object(E.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_WEATHER":return Object(v.a)(Object(v.a)({},e),{},{currentWeather:t.payload.current,weatherForecast:t.payload.forecast});default:return Object(v.a)({},e)}}),_(Object(E.a)(y.a)));o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(u.a,{store:F,children:Object(s.jsx)(x,{})})}),document.getElementById("root")),w()}},[[50,1,2]]]);
//# sourceMappingURL=main.17fb93b6.chunk.js.map