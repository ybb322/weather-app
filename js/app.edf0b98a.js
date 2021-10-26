(function(e){function t(t){for(var a,i,s=t[0],u=t[1],l=t[2],o=0,b=[];o<s.length;o++)i=s[o],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var u=n[s];0!==c[u]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/weather-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c=Object(a["f"])();function r(e,t,n,r,i,s){var u=Object(a["k"])("Weather"),l=Object(a["k"])("bodyStyle");return Object(a["h"])(),Object(a["d"])(a["a"],null,[Object(a["g"])(u),c,Object(a["g"])(l)],64)}var i=function(e){return Object(a["j"])("data-v-7dac53fa"),e=e(),Object(a["i"])(),e},s={id:"page"},u=i((function(){return Object(a["e"])("h1",{class:"main-title"},"Check the weather in any city of the world",-1)})),l={class:"input-container"},d={key:0,class:"city-not-found data-item"},o={key:1,class:"city-info"},b=Object(a["f"])("Weather in "),p=i((function(){return Object(a["e"])("br",null,null,-1)})),O=Object(a["f"])(),j={key:0,class:"target-city"},f={key:2,class:"data__weather data-item"},y={class:"data-value"},h={key:3,class:"data__container"},v={class:"data-main__container"},m={class:"data__degrees"},g={class:"degrees_true data-item"},w=Object(a["f"])("Temperature "),k=i((function(){return Object(a["e"])("br",null,null,-1)})),_={class:"data-value"},C={key:0,class:"data-unit"},x={class:"degrees_feels-like data-item"},F=Object(a["f"])("Feels like"),P=i((function(){return Object(a["e"])("br",null,null,-1)})),S={class:"data-value"},T={key:0,class:"data-unit"},D={class:"data__weather-container"},L={class:"data__wind data-item"},A=Object(a["f"])("Wind "),M=i((function(){return Object(a["e"])("br",null,null,-1)})),N=Object(a["f"])(),W={class:"data-value"},z={key:0,class:"data-unit"},H={class:"data-other__container"},J={class:"pressure data-item"},R=Object(a["f"])(" Pressure "),U=i((function(){return Object(a["e"])("br",null,null,-1)})),q=Object(a["f"])(),E={class:"data-value"},I=Object(a["f"])(),K={key:0,class:"data-unit"},V={class:"humidity data-item"},B=Object(a["f"])("Humidity "),G=i((function(){return Object(a["e"])("br",null,null,-1)})),Q=Object(a["f"])(),X={class:"data-value"},Y=Object(a["f"])(),Z={key:0,class:"data-unit"};function $(e,t,n,c,r,i){return Object(a["h"])(),Object(a["d"])("div",s,[u,Object(a["e"])("div",l,[Object(a["n"])(Object(a["e"])("input",{placeholder:"Enter a city...",spellcheck:"false",class:"city-input",type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.inputCity=e}),onKeydown:t[1]||(t[1]=Object(a["o"])((function(e){i.getApi(),i.titleCity()}),["enter"]))},null,544),[[a["m"],r.inputCity]]),Object(a["e"])("button",{class:"city-input__button",onClick:t[2]||(t[2]=function(e){i.getApi(),i.titleCity()})},"Check")]),r.cityNotFound?(Object(a["h"])(),Object(a["d"])("span",d,"City not found")):Object(a["c"])("",!0),r.dataDisplay?(Object(a["h"])(),Object(a["d"])("span",o,[b,p,O,r.targetCity?(Object(a["h"])(),Object(a["d"])("span",j,Object(a["l"])(r.targetCity)+", "+Object(a["l"])(r.countryOfCity),1)):Object(a["c"])("",!0)])):Object(a["c"])("",!0),r.dataDisplay?(Object(a["h"])(),Object(a["d"])("div",f,[Object(a["e"])("span",y,Object(a["l"])(r.weather),1)])):Object(a["c"])("",!0),r.dataDisplay?(Object(a["h"])(),Object(a["d"])("div",h,[Object(a["e"])("div",v,[Object(a["e"])("div",m,[Object(a["e"])("span",g,[w,k,Object(a["e"])("span",_,Object(a["l"])(r.degreesTrue),1),r.degreesTrue?(Object(a["h"])(),Object(a["d"])("span",C,"°")):Object(a["c"])("",!0)]),Object(a["e"])("span",x,[F,P,Object(a["e"])("span",S,Object(a["l"])(r.degreesFeelsLike),1),r.degreesFeelsLike?(Object(a["h"])(),Object(a["d"])("span",T,"°")):Object(a["c"])("",!0)])]),Object(a["e"])("div",D,[Object(a["e"])("div",L,[A,M,N,Object(a["e"])("span",W,Object(a["l"])(r.wind),1),r.wind?(Object(a["h"])(),Object(a["d"])("span",z," m/s")):Object(a["c"])("",!0)])])]),Object(a["e"])("div",H,[Object(a["e"])("div",J,[R,U,q,Object(a["e"])("span",E,Object(a["l"])(r.pressure),1),I,r.pressure?(Object(a["h"])(),Object(a["d"])("span",K,"mmHg")):Object(a["c"])("",!0)]),Object(a["e"])("div",V,[B,G,Q,Object(a["e"])("span",X,Object(a["l"])(r.humidity),1),Y,r.humidity?(Object(a["h"])(),Object(a["d"])("span",Z,"%")):Object(a["c"])("",!0)])])])):Object(a["c"])("",!0)])}var ee=n("1da1"),te=(n("96cf"),n("fb6a"),n("d3b7"),n("a4d3"),n("e01a"),{data:function(){return{citySelected:"1",errors:[],inputCity:"",cityNotFound:"",dataDisplay:!1,targetCity:"",countryOfCity:"",degreesTrue:"",degreesFeelsLike:"",weather:"",wind:"",pressure:"",humidity:""}},methods:{capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},getApi:function(){var e=this;return Object(ee["a"])(regeneratorRuntime.mark((function t(){var n,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,""!=e.inputCity){t.next=3;break}return t.abrupt("return",null);case 3:return e.inputCity=e.capitalizeFirstLetter(e.inputCity),n=e.inputCity,t.next=7,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=b20710ae17fb00084885578609ebaba4&units=metric"));case 7:return a=t.sent,t.next=10,a.json();case 10:if(c=t.sent,"404"!=c.cod){t.next=17;break}return e.cityNotFound=!0,e.dataDisplay=!1,t.abrupt("return",null);case 17:"404"!=c.cod&&(e.targetCity=e.inputCity,e.inputCity="",e.cityNotFound=!1,e.dataDisplay=!0,e.countryOfCity=c.sys.country,e.degreesTrue=c.main.temp,e.degreesFeelsLike=c.main.feels_like,e.weather=c.weather[0].description,e.wind=c.wind.speed,e.pressure=c.main.pressure,e.humidity=c.main.humidity);case 18:t.next=23;break;case 20:t.prev=20,t.t0=t["catch"](0),e.errors.push(t.t0);case 23:case"end":return t.stop()}}),t,null,[[0,20]])})))()},titleCity:function(){}}}),ne=(n("8f08"),n("6b0d")),ae=n.n(ne);const ce=ae()(te,[["render",$],["__scopeId","data-v-7dac53fa"]]);var re=ce,ie=n("647c"),se=n.n(ie),ue={name:"App",components:{Weather:re,bodyStyle:se.a}};const le=ae()(ue,[["render",r]]);var de=le;Object(a["b"])(de).mount("#app")},"647c":function(e,t,n){},"8f08":function(e,t,n){"use strict";n("8f73")},"8f73":function(e,t,n){}});
//# sourceMappingURL=app.edf0b98a.js.map