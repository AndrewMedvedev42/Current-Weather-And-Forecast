(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var r,c,a,i,s,o=n(0),d=n.n(o),u=n(10),j=n.n(u),l=n(4),b=n(30),h=n(3),O=n(9),f=n.n(O),m=n(15),x=n(11),p=n.n(x),g=function(e){return"https://api.weatherapi.com/v1/current.json?key=".concat("50d2badf529046f1b5f91233210706","&q=").concat(e,"&aqi=no")},y=function(e){return"https://api.weatherapi.com/v1/forecast.json?key=".concat("50d2badf529046f1b5f91233210706","&q=").concat(e,"&days=6&aqi=no&alerts=no")},v=function(e){return"https://restcountries.eu/rest/v2/name/".concat(e)},w=function(e){return function(){var t=Object(m.a)(f.a.mark((function t(n){var r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"IS_LOADING"}),t.next=3,p.a.get(g(e));case 3:return r=t.sent,t.next=6,p.a.get(y(e));case 6:c=t.sent,n({type:"FETCH_WEATHER",payload:{current:r,forecast:c}});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=n(5),F=n(1),C=function(){var e=Object(h.b)(),t=Object(o.useState)(""),n=Object(b.a)(t,2),r=n[0],c=n[1];return Object(F.jsx)(T,{className:"Nav",children:Object(F.jsxs)("div",{children:[Object(F.jsx)("input",{onChange:function(e){c(e.target.value),console.log(e.target.value)},type:"text"}),Object(F.jsx)("button",{value:r,type:"submit",onClick:function(){e(w(r))},children:"Search"})]})})},T=N.a.div(r||(r=Object(l.a)(["\n    padding:1.5rem;\n    .centerTitle{\n            text-align: center;\n        }\n    div{\n        display: flex;\n        justify-content: center;\n    }\n    input, button{\n        font-family: 'Exo 2', sans-serif;\n        font-size:1.5rem;\n        padding: 0.5rem 1.5rem;\n        outline: none;\n        border: none;\n        box-shadow:#0086b3 0.5rem 0.5rem 0px;\n    }\n    input{\n        width: 300px;\n        border: #1ac6ff solid 0.5rem;\n        border-top-left-radius: 2rem;\n        border-bottom-left-radius: 2rem;\n    }\n    button{\n        padding: 0.5rem 2rem;\n        cursor: pointer;\n        color: white;\n        background-color: #1ac6ff;\n        transition: 0.5s;\n        font-weight: bolder;\n        border-top-right-radius: 2rem;\n        border-bottom-right-radius: 2rem;\n    }\n    button:hover{\n        background-color: #00ace6;\n        letter-spacing: 1px;\n    }\n"]))),_=function(e){var t=e.date,n=(e.data,e.weatherByHours);return Object(F.jsxs)(D,{className:"DailyForecastSlot",children:[Object(F.jsx)("div",{children:Object(F.jsx)("article",{children:Object(F.jsx)("h2",{className:"ForecastDate",children:t})})}),Object(F.jsx)("section",{className:"ForecastDetails",children:n.map((function(e){var t=e.time.slice(11);return"09:00"===t||"12:00"===t||"15:00"===t||"18:00"===t||"21:00"===t||"23:00"===t||"00:00"===t||"03:00"===t||"06:00"===t?Object(F.jsx)(E,{data:e,time:t},t):void 0}))})]})},E=function(e){var t=e.data,n=e.time;return Object(F.jsxs)("div",{className:"Details",children:[Object(F.jsx)("img",{className:"Icon",src:t.condition.icon,alt:""}),Object(F.jsx)("p",{className:"Detail",children:n})]})},D=N.a.div(c||(c=Object(l.a)(["\n    margin: 1rem;\n    padding: 1rem;\n"]))),k=n(31),S=n(12),L=n.n(S),H=function(e){var t=e.country_name,n=Object(h.b)(),r=Object(h.c)((function(e){return e.countryDetails}));return Object(o.useEffect)((function(){n(function(e){return function(){var t=Object(m.a)(f.a.mark((function t(n){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get(v(e));case 2:r=t.sent,n({type:"FETCH_COUNTRY",payload:{country:r}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}),[n]),r[0]?Object(F.jsx)("img",{className:"countryFlag",src:r[0].data[0].flag,alt:"countryFlag"}):Object(F.jsx)("img",{src:"",alt:""})},I=function(){var e=Object(h.c)((function(e){return e.currentWeather})),t=Object(h.c)((function(e){return e.weatherForecast})),n=Object(h.c)((function(e){return e.isLoading})),r=Object(h.b)();return Object(o.useEffect)((function(){r(w("kyoto"))}),[r]),Object(F.jsx)("section",{children:n?Object(F.jsxs)(W,{children:[Object(F.jsx)(k.a,{id:"iconAnimate",size:150}),Object(F.jsx)("h1",{children:"The weather is loading!"}),Object(F.jsx)("h4",{children:"if the page won't load that means that server isn't responding"}),Object(F.jsx)("h3",{children:"Try to fill your input correctly or reload page."})]}):Object(F.jsx)(L.a,{children:Object(F.jsxs)("section",{className:"MainContainer",children:[Object(F.jsxs)(A,{className:"CurrentWeatherContainer",children:[Object(F.jsx)("h1",{className:"centerTitle",children:"Current weather"}),Object(F.jsxs)(L.a,{children:[Object(F.jsxs)("div",{children:[Object(F.jsxs)("div",{className:"countryData",children:[Object(F.jsx)("h2",{children:e.data.location.country}),Object(F.jsx)(H,{country_name:e.data.location.country})]}),Object(F.jsx)("h1",{children:e.data.location.name}),Object(F.jsx)("h3",{children:e.data.location.localtime})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)("h2",{children:e.data.current.condition.text}),Object(F.jsx)("img",{id:"icon",src:e.data.current.condition.icon,alt:""})]}),Object(F.jsxs)("div",{children:[Object(F.jsxs)("p",{children:["Temp: ",e.data.current.temp_c," C"]}),Object(F.jsxs)("p",{children:["Wind: ",e.data.current.wind_kph," km/h"]})]})]})]}),Object(F.jsx)(R,{className:"ForecastContainer",children:Object(F.jsxs)(L.a,{children:[Object(F.jsxs)("h1",{className:"centerTitle",children:["Forecast for ",e.data.location.name]}),Object(F.jsx)("section",{className:"DailyForecast",children:t.data.forecast.forecastday.map((function(e){var t=e.date,n=e.date_epoch,r=e.day,c=(e.astro,e.hour);return Object(F.jsx)(_,{date:t,data:r,weatherByHours:c},n)}))})]})})]})})})},W=N.a.div(a||(a=Object(l.a)(["\n    color: #0086b3;\n    height: 50vh;\n    display: flex;\n    text-align: center;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),A=N.a.div(i||(i=Object(l.a)(["\n    margin: 1rem;\n    padding: 1rem;\n    border: #1ac6ff solid 1rem;\n    border-radius: 2rem;\n    box-shadow:#0086b3 0.5rem 0.5rem 0px;\n"]))),R=N.a.div(s||(s=Object(l.a)(["\n    margin: 1rem;\n    padding: 1rem;\n    border: #1ac6ff solid 1rem;\n    border-radius: 2rem;\n    box-shadow:#0086b3 0.5rem 0.5rem 0px;\n"])));var q=function(){return Object(F.jsxs)("section",{children:[Object(F.jsx)(C,{}),Object(F.jsx)(I,{})]})},B=n(6),M={currentWeather:[],weatherForecast:[],countryDetails:[],isLoading:!0},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},U=n(13),z=n(29),G=(n(60),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||U.b),J=Object(U.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_WEATHER":return Object(B.a)(Object(B.a)({},e),{},{currentWeather:t.payload.current,weatherForecast:t.payload.forecast,isLoading:!1});case"IS_LOADING":return Object(B.a)(Object(B.a)({},e),{},{isLoading:!0});case"FETCH_COUNTRY":return Object(B.a)(Object(B.a)({},e),{},{countryDetails:[t.payload.country]});default:return Object(B.a)({},e)}}),G(Object(U.a)(z.a)));j.a.render(Object(F.jsx)(d.a.StrictMode,{children:Object(F.jsx)(h.a,{store:J,children:Object(F.jsx)(q,{})})}),document.getElementById("root")),P()}},[[61,1,2]]]);
//# sourceMappingURL=main.016596e5.chunk.js.map