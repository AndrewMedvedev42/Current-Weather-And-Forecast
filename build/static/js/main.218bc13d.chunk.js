(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var r,a,c,i,s,o,d,l=n(0),j=n.n(l),b=n(9),h=n.n(b),u=n(4),O=n(30),m=n(10),x=n.n(m),f=n(3),p=n(14),g=n.n(p),v=n(25),y=function(e){return"https://api.weatherapi.com/v1/current.json?key=".concat("50d2badf529046f1b5f91233210706","&q=").concat(e,"&aqi=no")},F=function(e){return"https://api.weatherapi.com/v1/forecast.json?key=".concat("50d2badf529046f1b5f91233210706","&q=").concat(e,"&days=6&aqi=no&alerts=no")},w=function(e){return function(){var t=Object(v.a)(g.a.mark((function t(n){var r,a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"IS_LOADING"}),t.prev=1,t.next=4,x.a.get(y(e));case 4:return r=t.sent,t.next=7,x.a.get(F(e));case 7:a=t.sent,n({type:"FETCH_WEATHER",payload:{current:r,forecast:a}}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),n({type:"FAILED_TO_FETCH_DATA",payload:{error:t.t0}});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()},T=n(5),D=n(1),_=function(){var e=Object(f.b)(),t=Object(l.useState)(""),n=Object(O.a)(t,2),r=n[0],a=n[1];return Object(D.jsx)(N,{className:"Nav",children:Object(D.jsxs)("div",{children:[Object(D.jsx)("input",{onChange:function(e){a(e.target.value),console.log(e.target.value)},type:"text"}),Object(D.jsx)("button",{value:r,type:"submit",onClick:function(){e(w(r))},children:"Search"})]})})},N=T.a.div(r||(r=Object(u.a)(["\n    padding:1.5rem;\n    .centerTitle{\n            text-align: center;\n        }\n    div{\n        display: flex;\n        justify-content: center;\n    }\n    input, button{\n        font-family: 'Exo 2', sans-serif;\n        font-size:1.5rem;\n        padding: 0.5rem 1.5rem;\n        outline: none;\n        border: none;\n        box-shadow:#0086b3 0.5rem 0.5rem 0px;\n    }\n    input{\n        width: 300px;\n        border: #1ac6ff solid 0.5rem;\n        border-top-left-radius: 2rem;\n        border-bottom-left-radius: 2rem;\n    }\n    button{\n        padding: 0.5rem 2rem;\n        cursor: pointer;\n        color: white;\n        background-color: #1ac6ff;\n        transition: 0.5s;\n        font-weight: bolder;\n        border-top-right-radius: 2rem;\n        border-bottom-right-radius: 2rem;\n    }\n    button:hover{\n        background-color: #00ace6;\n        letter-spacing: 1px;\n    }\n"]))),E=function(e){var t=e.date,n=(e.data,e.weatherByHours);return Object(D.jsxs)(k,{className:"DailyForecastSlot",children:[Object(D.jsx)("div",{children:Object(D.jsx)("article",{children:Object(D.jsx)("h2",{className:"ForecastDate",children:t})})}),Object(D.jsx)("section",{className:"ForecastDetails",children:n.map((function(e){var t=e.time.slice(11);return"09:00"===t||"12:00"===t||"15:00"===t||"18:00"===t||"21:00"===t||"23:00"===t||"00:00"===t||"03:00"===t||"06:00"===t?Object(D.jsx)(C,{data:e,time:t},t):void 0}))})]})},C=function(e){var t=e.data,n=e.time;return Object(D.jsxs)("div",{className:"Details",children:[Object(D.jsx)("img",{className:"Icon",src:t.condition.icon,alt:""}),Object(D.jsx)("p",{className:"Detail",children:n})]})},k=T.a.div(a||(a=Object(u.a)(["\n    margin: 1rem;\n    padding: 1rem;\n"]))),L=n(31),A=n(11),S=n.n(A),I=function(){var e=Object(f.c)((function(e){return e.currentWeather})),t=Object(f.c)((function(e){return e.weatherForecast})),n=Object(f.c)((function(e){return e.isLoading})),r=Object(f.c)((function(e){return e.isFailedToFetchData})),a=Object(f.c)((function(e){return e.isFailedToFetchDataMessage})),c=Object(f.b)();return Object(l.useEffect)((function(){c(w("kyoto"))}),[c]),Object(D.jsx)("section",{children:n?Object(D.jsxs)(H,{children:[Object(D.jsx)(L.a,{id:"iconAnimate",size:150}),Object(D.jsx)("h1",{children:"The weather is loading!"}),Object(D.jsx)("h4",{children:"if the page won't load that means that server isn't responding"}),Object(D.jsx)("h3",{children:"Try to reload page."})]}):[r?Object(D.jsxs)(B,{children:[Object(D.jsx)("h1",{children:"".concat(a.name,":").concat(a.message)}),Object(D.jsx)("h3",{children:"Try to fill your input correctly"})]}):Object(D.jsx)(S.a,{children:Object(D.jsxs)("section",{className:"MainContainer",children:[Object(D.jsxs)("div",{className:"leftSection",children:[Object(D.jsxs)(W,{className:"CurrentWeatherContainer",children:[Object(D.jsx)("h1",{className:"centerTitle",children:"Current weather"}),Object(D.jsxs)(S.a,{children:[Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:e.data.location.name}),Object(D.jsx)("h3",{children:e.data.location.localtime})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("h2",{children:e.data.current.condition.text}),Object(D.jsx)("img",{id:"icon",src:e.data.current.condition.icon,alt:""})]}),Object(D.jsxs)("div",{children:[Object(D.jsxs)("p",{children:["Temp: ",e.data.current.temp_c," C"]}),Object(D.jsxs)("p",{children:["Wind: ",e.data.current.wind_kph," km/h"]})]})]})]}),Object(D.jsx)(q,{children:Object(D.jsxs)("p",{children:["Weather data provided by ",Object(D.jsx)("a",{href:"https://www.weatherapi.com/",rel:"noreferrer",target:"_blank",children:"weatherapi.com"})]})})]}),Object(D.jsx)(M,{className:"ForecastContainer",children:Object(D.jsxs)(S.a,{children:[Object(D.jsxs)("h1",{className:"centerTitle",children:["Forecast for ",e.data.location.name]}),Object(D.jsx)("section",{className:"DailyForecast",children:t.data.forecast.forecastday.map((function(e){var t=e.date,n=e.date_epoch,r=e.day,a=e.hour;return Object(D.jsx)(E,{date:t,data:r,weatherByHours:a},n)}))})]})})]})})]})},H=T.a.div(c||(c=Object(u.a)(["\n    color: #0086b3;\n    height: 50vh;\n    display: flex;\n    text-align: center;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),W=T.a.div(i||(i=Object(u.a)(["\n    height: 480px;\n    margin: 1rem;\n    padding: 1rem;\n    border: #1ac6ff solid 1rem;\n    border-radius: 2rem;\n    box-shadow:#0086b3 0.5rem 0.5rem 0px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),M=T.a.div(s||(s=Object(u.a)(["\n    margin: 1rem;\n    padding: 1rem;\n    border: #1ac6ff solid 1rem;\n    border-radius: 2rem;\n    box-shadow:#0086b3 0.5rem 0.5rem 0px;\n"]))),q=T.a.div(o||(o=Object(u.a)(["\n    height: 100px;\n    display: flex;\n    text-align: center;\n    align-items: center;\n    margin: 1rem;\n    padding: 1rem;\n    border: #1ac6ff solid 1rem;\n    border-radius: 2rem;\n    box-shadow:#0086b3 0.5rem 0.5rem 0px;\n"]))),B=T.a.div(d||(d=Object(u.a)(["\n    color: #0086b3;\n    height: 50vh;\n    display: flex;\n    text-align: center;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"])));var P=function(){return Object(D.jsxs)("section",{children:[Object(D.jsx)(_,{}),Object(D.jsx)(I,{})]})},R=n(6),z={currentWeather:[],weatherForecast:[],countryDetails:[],isLoading:!0,isFailedToFetchData:!1,isFailedToFetchDataMessage:""},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},J=n(12),X=n(29),U=(n(60),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.b),V=Object(J.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_WEATHER":return Object(R.a)(Object(R.a)({},e),{},{currentWeather:t.payload.current,weatherForecast:t.payload.forecast,isFailedToFetchData:!1,isLoading:!1});case"IS_LOADING":return Object(R.a)(Object(R.a)({},e),{},{isLoading:!0});case"FAILED_TO_FETCH_DATA":return Object(R.a)(Object(R.a)({},e),{},{isFailedToFetchData:!0,isFailedToFetchDataMessage:t.payload.error,isLoading:!1});default:return Object(R.a)({},e)}}),U(Object(J.a)(X.a)));h.a.render(Object(D.jsx)(j.a.StrictMode,{children:Object(D.jsx)(f.a,{store:V,children:Object(D.jsx)(P,{})})}),document.getElementById("root")),G()}},[[61,1,2]]]);
//# sourceMappingURL=main.218bc13d.chunk.js.map