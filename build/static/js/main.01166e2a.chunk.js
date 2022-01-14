(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c,a=n(0),r=n.n(a),s=n(7),i=n.n(s),o=n(23),d=n(29),l=n(3),j=n(11),u=n.n(j),b=n(24),h=n(12),m=n.n(h),f=function(e){return"https://api.weatherapi.com/v1/current.json?key=".concat("50d2badf529046f1b5f91233210706","&q=").concat(e,"&aqi=no")},O=function(e){return"https://api.weatherapi.com/v1/forecast.json?key=".concat("50d2badf529046f1b5f91233210706","&q=").concat(e,"&days=6&aqi=no&alerts=no")},p=function(e){return function(){var t=Object(b.a)(u.a.mark((function t(n){var c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"IS_LOADING"}),t.next=3,m.a.get(f(e));case 3:return c=t.sent,t.next=6,m.a.get(O(e));case 6:a=t.sent,n({type:"FETCH_WEATHER",payload:{current:c,forecast:a}});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=n(10),g=n(1),w=function(){var e=Object(l.b)(),t=Object(a.useState)(""),n=Object(d.a)(t,2),c=n[0],r=n[1];return Object(g.jsx)(N,{className:"Nav",children:Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{onChange:function(e){r(e.target.value),console.log(e.target.value)},type:"text"}),Object(g.jsx)("button",{value:c,type:"submit",onClick:function(){e(p(c))},children:"Search"})]})})},N=x.a.div(c||(c=Object(o.a)(["\n    padding:1.5rem;\n    .centerTitle{\n            text-align: center;\n        }\n    div{\n        display: flex;\n        justify-content: center;\n    }\n    input, button{\n        font-family: 'Exo 2', sans-serif;\n        font-size:1.5rem;\n        padding: 0.5rem 1.5rem;\n        outline: none;\n        border: none;\n        box-shadow:#0086b3 0.5rem 0.5rem 0px;\n    }\n    input{\n        width: 300px;\n        border: #1ac6ff solid 0.5rem;\n        border-top-left-radius: 2rem;\n        border-bottom-left-radius: 2rem;\n    }\n    button{\n        padding: 0.5rem 2rem;\n        cursor: pointer;\n        color: white;\n        background-color: #1ac6ff;\n        transition: 0.5s;\n        font-weight: bolder;\n        border-top-right-radius: 2rem;\n        border-bottom-right-radius: 2rem;\n    }\n    button:hover{\n        background-color: #00ace6;\n        letter-spacing: 1px;\n    }\n"]))),v=function(e){var t=e.date,n=(e.data,e.weatherByHours);return Object(g.jsxs)("article",{className:"forecast-slot",children:[Object(g.jsx)("h2",{className:"forecast-date center-title",children:t}),Object(g.jsx)("section",{className:"forecast-schedule-list",children:n.map((function(e){var t=e.time.slice(11);return"09:00"===t||"12:00"===t||"15:00"===t||"18:00"===t||"21:00"===t||"23:00"===t||"00:00"===t||"03:00"===t||"06:00"===t?Object(g.jsx)(y,{data:e,time:t},t):void 0}))})]})},y=function(e){var t=e.data,n=e.time;return Object(g.jsxs)("div",{className:"forecast-details",children:[Object(g.jsx)("img",{className:"icon",src:t.condition.icon,alt:""}),Object(g.jsx)("p",{className:"forecast-time",children:n})]})},_=n(30),E=(n(58),function(){var e=Object(l.c)((function(e){return e.currentWeather})),t=Object(l.c)((function(e){return e.weatherForecast})),n=Object(l.c)((function(e){return e.isLoading})),c=Object(l.b)();return Object(a.useEffect)((function(){c(p("kyoto"))}),[c]),Object(g.jsx)("section",{className:"main-section",children:n?Object(g.jsxs)("section",{className:"loading-message",children:[Object(g.jsx)(_.a,{className:"loading-icon",id:"loading-icon",size:150}),Object(g.jsx)("h1",{className:"message",children:"The weather is loading!"})]}):Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("section",{className:"weather-results-section",children:[Object(g.jsxs)("section",{className:"section current-weather-section",children:[Object(g.jsx)("h1",{className:"title center-title",children:"Current weather"}),Object(g.jsx)("h2",{className:"location-name",children:e.data.location.name}),Object(g.jsx)("h3",{className:"location-localtime",children:e.data.location.localtime}),Object(g.jsx)("h2",{className:"condition-text",children:e.data.current.condition.text}),Object(g.jsx)("img",{className:"weather-icon",id:"icon",src:e.data.current.condition.icon,alt:""}),Object(g.jsxs)("p",{className:"temperature-text",children:["Temp: ",e.data.current.temp_c," C"]}),Object(g.jsxs)("p",{className:"wind-speed",children:["Wind: ",e.data.current.wind_kph," km/h"]})]}),Object(g.jsxs)("section",{className:"section forecast-section",children:[Object(g.jsxs)("h1",{className:"title",children:["Forecast for ",e.data.location.name]}),Object(g.jsx)("section",{className:"forecast-list",children:t.data.forecast.forecastday.map((function(e){var t=e.date,n=e.date_epoch,c=e.day,a=e.hour;return Object(g.jsx)(v,{date:t,data:c,weatherByHours:a},n)}))})]}),Object(g.jsx)("section",{className:"section app-details-section",children:Object(g.jsxs)("p",{children:["Weather data provided by ",Object(g.jsx)("a",{href:"https://www.weatherapi.com/",rel:"noreferrer",target:"_blank",children:" weatherapi.com"})]})})]})})})});var k=function(){return Object(g.jsxs)("section",{children:[Object(g.jsx)(w,{}),Object(g.jsx)(E,{})]})},F=n(6),T={currentWeather:[],weatherForecast:[],countryDetails:[],isLoading:!0},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},L=n(8),S=n(28),I=(n(60),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||L.b),W=Object(L.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_WEATHER":return Object(F.a)(Object(F.a)({},e),{},{currentWeather:t.payload.current,weatherForecast:t.payload.forecast,isLoading:!1});case"IS_LOADING":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!0});default:return Object(F.a)({},e)}}),I(Object(L.a)(S.a)));i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(l.a,{store:W,children:Object(g.jsx)(k,{})})}),document.getElementById("root")),C()}},[[61,1,2]]]);
//# sourceMappingURL=main.01166e2a.chunk.js.map