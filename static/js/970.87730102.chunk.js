"use strict";(self.webpackChunksmarty_weather=self.webpackChunksmarty_weather||[]).push([[970],{3970:function(n,e,i){i.r(e),i.d(e,{default:function(){return Ln}});var t,o,r,a,s=i(9439),c=i(2791),d=i(9434),h=i(3141),l=i(168),p=i(6444),u=p.ZP.div(t||(t=(0,l.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n\n  /* @media screen and (min-width: 320px) {\n    width: 320px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 768px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 1280px;\n  } */\n"]))),g=function(n){return n.location.city},x=function(n){return n.location.country},f=function(n){return n.location.image},m=function(n){return n.location.longitude},y=function(n){return n.location.latitude},b=function(n){return n.location.weather},w=function(n){return n.location.weatherAdditional},j=function(n){return n.location.daytime},v=function(n){return n.location.timezone},z=function(n){return n.location.astrodata},k=function(n){return n.location.weather.daily},P=i(6525),M=i(7604),Z=i(184),_=function(n){var e=n.children,i=function(n){var e=window.matchMedia(n),i=(0,c.useState)(e.matches),t=(0,s.Z)(i,2),o=t[0],r=t[1];return(0,c.useEffect)((function(){var n=function(n){return r(n.matches)};return e.addListener(n),function(){return e.removeListener(n)}})),o}("(min-width: 500px)"),t=(0,d.v9)(g),o=(0,d.v9)(f),r=(0,c.useState)(""),a=(0,s.Z)(r,2),l=a[0],p=a[1],x=(0,c.useState)(""),m=(0,s.Z)(x,2),y=m[0],b=m[1],w=(0,d.I0)();return(0,c.useEffect)((function(){t&&w((0,h.lW)())}),[t,w]),(0,c.useEffect)((function(){if(1===o.length&&(p(o[0].landscape),b(o[0].portrait)),o.length>1){var n=Math.floor(Math.random()*o.length);p(o[n].landscape),b(o[n].portrait)}}),[o]),(0,Z.jsx)(u,{style:{backgroundImage:"url(".concat(i?null!==l&&void 0!==l?l:M:null!==y&&void 0!==y?y:P,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:e})},L=i(3623),H=i(601),C=i(4336),E=i(5667),W=i(466),I=i(8602),S=p.ZP.div(o||(o=(0,l.Z)(["\n  width: 100%;\n  height: 250px;\n"]))),F=function(){var n=(0,d.v9)(k),e=n.time.map((function(n){return n})),i=n.temperature_2m_min.map((function(n){return n})),t=n.temperature_2m_max.map((function(n){return n})),o=e.map((function(n,e){return{date:"".concat(n),min_temperature:"".concat(i[e]),max_temperature:"".concat(t[e])}}));return console.log(o),(0,Z.jsx)(S,{children:(0,Z.jsx)(H.h,{width:"100%",height:"100%",children:(0,Z.jsxs)(C.T,{width:200,height:200,data:o,fill:"rgba(233, 201, 57, 0.25)",margin:{top:5,right:0,left:0,bottom:5},children:[(0,Z.jsx)(E.u,{}),(0,Z.jsx)(W.K,{dataKey:"date"}),(0,Z.jsx)(I.u,{type:"monotone",stackId:"1",dataKey:"min_temperature",stroke:"#E9C939",strokeWidth:3,fill:"rgba(233, 201, 57, 0.25)"}),(0,Z.jsx)(I.u,{type:"monotone",stackId:"1",dataKey:"max_temperature",stroke:"#4be939",strokeWidth:3,fill:"rgba(235, 209, 131, 0.267)"})]})})})},B=p.ZP.div(r||(r=(0,l.Z)(["\n  padding: 32px;\n  background: rgba(255, 255, 255, 0.23);\n  border-radius: 30px;\n  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */\n  /* box-shadow: 0px 5px 10px 0px rgba(0, 255, 255, 0.7); */\n  box-shadow: inset -5px -5px 9px rgba(255, 255, 255, 0.45),\n    inset 5px 5px 9px rgba(94, 104, 121, 0.3);\n  backdrop-filter: blur(5.3px);\n  -webkit-backdrop-filter: blur(5.3px);\n  border: 1px solid rgba(255, 255, 255, 0.77);\n\n  /* &:hover {\n    box-shadow: 0px 10px 20px 2px rgba(0, 255, 255, 0.7);\n  } */\n"]))),T=p.ZP.div(a||(a=(0,l.Z)([""])));function D(){var n=(0,d.v9)(z),e=(0,d.I0)();return(0,c.useEffect)((function(){n||e((0,h.FU)())}),[e,n]),n?(0,Z.jsxs)(T,{children:[(0,Z.jsxs)("p",{children:["Is moon up:",(0,Z.jsx)("span",{children:n.is_moon_up?"Yes":"No"})]}),(0,Z.jsxs)("p",{children:["Moon illumination:",(0,Z.jsxs)("span",{children:[n.moon_illumination," %"]})]}),(0,Z.jsxs)("p",{children:["Moon phase:",(0,Z.jsx)("span",{children:n.moon_phase})]}),(0,Z.jsxs)("p",{children:["Moonrise:",(0,Z.jsx)("span",{children:n.moonrise})]}),(0,Z.jsxs)("p",{children:["Moonset:",(0,Z.jsx)("span",{children:n.moonset})]}),(0,Z.jsxs)("p",{children:["Is sun up:",(0,Z.jsx)("span",{children:n.is_sun_up?"Yes":"No"})]}),(0,Z.jsxs)("p",{children:["Sunrise:",(0,Z.jsx)("span",{children:n.sunrise})]}),(0,Z.jsxs)("p",{children:["Sunset:",(0,Z.jsx)("span",{children:n.sunset})]})]}):(0,Z.jsx)("div",{children:"No astro data available"})}var G,N,A,K,O,U,V,Y,J,Q,R,q=c.memo(D),X=function(){var n=(0,d.v9)(b),e=(0,d.v9)(w),i=(0,c.useState)(!1),t=(0,s.Z)(i,2),o=t[0],r=t[1];return n&&e?(0,Z.jsxs)(B,{children:[(0,Z.jsxs)("p",{children:["Max temperature:",(0,Z.jsxs)("span",{children:[n.daily.temperature_2m_max[0]," \xb0C"]})]}),(0,Z.jsxs)("p",{children:["Min temperature:",(0,Z.jsxs)("span",{children:[n.daily.temperature_2m_min[0]," \xb0C"]})]}),(0,Z.jsxs)("p",{children:["Clouds:",(0,Z.jsxs)("span",{children:[e.cloud," %"]})]}),(0,Z.jsxs)("p",{children:["Max windgusts:",(0,Z.jsxs)("span",{children:[n.daily.windgusts_10m_max[0]," km/h"]})]}),(0,Z.jsxs)("p",{children:["Max windspeed:",(0,Z.jsxs)("span",{children:[n.daily.windspeed_10m_max[0]," km/h"]})]}),(0,Z.jsxs)("p",{children:["Wind direction:",(0,Z.jsx)("span",{children:e.wind_dir})]}),(0,Z.jsxs)("p",{children:["Pressure:",(0,Z.jsxs)("span",{children:[e.pressure_mb," millibars"]})]}),(0,Z.jsxs)("p",{children:["Shortwave radiation:",(0,Z.jsxs)("span",{children:[n.daily.shortwave_radiation_sum[0]," MJ/m\xb2"]})]}),(0,Z.jsxs)("p",{children:["UV:",(0,Z.jsxs)("span",{children:["Index ",e.uv," "]})]}),(0,Z.jsx)("button",{type:"button",onClick:function(){r(!o)},children:"Display astrodata"}),o&&(0,Z.jsx)(q,{})]}):(0,Z.jsx)("div",{children:"No weather data available"})},$=i(7067),nn=i(8292),en=i(8707),tn=i(5468),on=i(5547),rn=i(1156),an=i(6562),sn=i(3684),cn=i(3943),dn=i(395),hn=i(130),ln=i(2909),pn=[{code:1e3,day:"Sunny",night:"Clear",icon:113,png:[$,an]},{code:1003,day:"Partly cloudy",night:"Partly cloudy",icon:116,png:[nn,sn]},{code:1006,day:"Cloudy",night:"Cloudy",icon:119,png:[nn,sn]},{code:1009,day:"Overcast",night:"Overcast",icon:122,png:[nn,sn]},{code:1030,day:"Mist",night:"Mist",icon:143,png:[rn,dn]},{code:1063,day:"Patchy rain possible",night:"Patchy rain possible",icon:176,png:[en,cn]},{code:1066,day:"Patchy snow possible",night:"Patchy snow possible",icon:179,png:[tn,hn]},{code:1069,day:"Patchy sleet possible",night:"Patchy sleet possible",icon:182,png:[tn,hn]},{code:1072,day:"Patchy freezing drizzle possible",night:"Patchy freezing drizzle possible",icon:185,png:[en,cn]},{code:1087,day:"Thundery outbreaks possible",night:"Thundery outbreaks possible",icon:200,png:[on,ln]},{code:1114,day:"Blowing snow",night:"Blowing snow",icon:227,png:[tn,hn]},{code:1117,day:"Blizzard",night:"Blizzard",icon:230,png:[tn,hn]},{code:1135,day:"Fog",night:"Fog",icon:248,png:[rn,dn]},{code:1147,day:"Freezing fog",night:"Freezing fog",icon:260,png:[rn,dn]},{code:1150,day:"Patchy light drizzle",night:"Patchy light drizzle",icon:263,png:[en,cn]},{code:1153,day:"Light drizzle",night:"Light drizzle",icon:266,png:[en,cn]},{code:1168,day:"Freezing drizzle",night:"Freezing drizzle",icon:281,png:[en,cn]},{code:1171,day:"Heavy freezing drizzle",night:"Heavy freezing drizzle",icon:284,png:[en,cn]},{code:1180,day:"Patchy light rain",night:"Patchy light rain",icon:293,png:[en,cn]},{code:1183,day:"Light rain",night:"Light rain",icon:296,png:[en,cn]},{code:1186,day:"Moderate rain at times",night:"Moderate rain at times",icon:299,png:[en,cn]},{code:1189,day:"Moderate rain",night:"Moderate rain",icon:302,png:[en,cn]},{code:1192,day:"Heavy rain at times",night:"Heavy rain at times",icon:305,png:[en,cn]},{code:1195,day:"Heavy rain",night:"Heavy rain",icon:308,png:[en,cn]},{code:1198,day:"Light freezing rain",night:"Light freezing rain",icon:311,png:[en,cn]},{code:1201,day:"Moderate or heavy freezing rain",night:"Moderate or heavy freezing rain",icon:314,png:[en,cn]},{code:1204,day:"Light sleet",night:"Light sleet",icon:317,png:[tn,hn]},{code:1207,day:"Moderate or heavy sleet",night:"Moderate or heavy sleet",icon:320,png:[tn,hn]},{code:1210,day:"Patchy light snow",night:"Patchy light snow",icon:323,png:[tn,hn]},{code:1213,day:"Light snow",night:"Light snow",icon:326,png:[tn,hn]},{code:1216,day:"Patchy moderate snow",night:"Patchy moderate snow",icon:329,png:[tn,hn]},{code:1219,day:"Moderate snow",night:"Moderate snow",icon:332,png:[tn,hn]},{code:1222,day:"Patchy heavy snow",night:"Patchy heavy snow",icon:335,png:[tn,hn]},{code:1225,day:"Heavy snow",night:"Heavy snow",icon:338,png:[tn,hn]},{code:1237,day:"Ice pellets",night:"Ice pellets",icon:350,png:[tn,hn]},{code:1240,day:"Light rain shower",night:"Light rain shower",icon:353,png:[en,cn]},{code:1243,day:"Moderate or heavy rain shower",night:"Moderate or heavy rain shower",icon:356,png:[en,cn]},{code:1246,day:"Torrential rain shower",night:"Torrential rain shower",icon:359,png:[en,cn]},{code:1249,day:"Light sleet showers",night:"Light sleet showers",icon:362,png:[tn,hn]},{code:1252,day:"Moderate or heavy sleet showers",night:"Moderate or heavy sleet showers",icon:365,png:[tn,hn]},{code:1255,day:"Light snow showers",night:"Light snow showers",icon:368,png:[tn,hn]},{code:1258,day:"Moderate or heavy snow showers",night:"Moderate or heavy snow showers",icon:371,png:[tn,hn]},{code:1261,day:"Light showers of ice pellets",night:"Light showers of ice pellets",icon:374,png:[tn,hn]},{code:1264,day:"Moderate or heavy showers of ice pellets",night:"Moderate or heavy showers of ice pellets",icon:377,png:[tn,hn]},{code:1273,day:"Patchy light rain with thunder",night:"Patchy light rain with thunder",icon:386,png:[on,ln]},{code:1276,day:"Moderate or heavy rain with thunder",night:"Moderate or heavy rain with thunder",icon:389,png:[on,ln]},{code:1279,day:"Patchy light snow with thunder",night:"Patchy light snow with thunder",icon:392,png:[on,ln]},{code:1282,day:"Moderate or heavy snow with thunder",night:"Moderate or heavy snow with thunder",icon:395,png:[on,ln]}],un=p.ZP.div(G||(G=(0,l.Z)(["\n  width: 70%;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  gap: 32px;\n  margin: 0 auto;\n  border-radius: 30px;\n  padding: 32px;\n  background: rgba(255, 255, 255, 0.63);\n  /* box-shadow: inset -5px -5px 9px rgba(255, 255, 255, 0.45),\n    inset 5px 5px 9px rgba(94, 104, 121, 0.3); */\n  box-shadow: -5px -5px 80px #fff, 5px 5px 20px #babecc;\n  backdrop-filter: blur(2.3px);\n  -webkit-backdrop-filter: blur(2.3px);\n  border: 1px solid rgba(255, 255, 255, 0.77);\n"]))),gn=p.ZP.div(N||(N=(0,l.Z)(["\n  display: flex;\n  /* flex-direction: row-reverse; */\n  justify-content: space-between;\n\n  /* align-items: flex-end; */\n  gap: 16px;\n"]))),xn=p.ZP.div(A||(A=(0,l.Z)(["\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: flex-end;\n  gap: 16px;\n  border-radius: 30px;\n  background: rgba(255, 255, 255, 0.28);\n  border-radius: 16px;\n  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */\n  /* box-shadow: -2px -2px 5px white, 3px 3px 5px rgba(0, 0, 0, 0.1); */\n  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n"]))),fn=p.ZP.div(K||(K=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  & img {\n    width: 220px;\n  }\n"]))),mn=p.ZP.p(O||(O=(0,l.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 20px;\n  line-height: ",";\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    font-size: 32px;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights[1]}),(function(n){return n.theme.lineHeights.main}),(function(n){return n.theme.colors.mainDark})),yn=p.ZP.div(U||(U=(0,l.Z)(["\n  padding: 10px;\n  color: ",";\n  font-family: ",";\n  font-weight: ",";\n  font-size: 20px;\n  line-height: ",";\n  background-color: ",";\n  border-radius: ",";\n"])),(function(n){return n.theme.colors.mainLight}),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights[0]}),(function(n){return n.theme.lineHeights.main}),(function(n){return n.theme.colors.mainAccentPink}),(function(n){return n.theme.radii.main})),bn=p.ZP.div(V||(V=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),wn=p.ZP.div(Y||(Y=(0,l.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: ",";\n  padding: 10px;\n\n  font-family: ",";\n  font-weight: ",";\n  font-size: 20px;\n  line-height: ",";\n  color: ",";\n  background-color: ",";\n"])),(function(n){return n.theme.radii.main}),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights[0]}),(function(n){return n.theme.lineHeights.main}),(function(n){return"blue"===n.color?n.theme.colors.accentBlue:"pink"===n.color?n.theme.colors.accentPink:n.theme.colors.accentViolet}),(function(n){return"blue"===n.color?n.theme.colors.bgBlue:"pink"===n.color?n.theme.colors.bgPink:n.theme.colors.bgViolet})),jn=p.ZP.div(J||(J=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n"]))),vn=p.ZP.span(Q||(Q=(0,l.Z)(["\n  font-size: 20px;\n  font-family: ",";\n  font-weight: ",";\n  line-height: ",";\n  color: ",";\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights[0]}),(function(n){return n.theme.lineHeights.main}),(function(n){return n.theme.colors.textGrey})),zn=p.ZP.div(R||(R=(0,l.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  font-family: ",";\n\n  font-weight: ",";\n  font-size: 96px;\n  line-height: ",";\n  color: ",";\n\n  & img {\n    width: 40px;\n  }\n\n  & span {\n    font-weight: ",";\n    font-size: 24px;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights[1]}),(function(n){return n.theme.lineHeights.main}),(function(n){return n.theme.colors.mainDark}),(function(n){return n.theme.fontWeights[0]})),kn=i(4293),Pn=i(535),Mn=function(){var n=(0,d.v9)(b),e=(0,d.v9)(w),i=(0,d.v9)(j),t=(0,d.v9)(g),o=(0,d.v9)(x),r=(0,c.useState)(!1),a=(0,s.Z)(r,2),h=a[0],l=a[1],p=(0,c.useState)(null),u=(0,s.Z)(p,2),f=u[0],m=u[1];(0,c.useEffect)((function(){if(e){var n=e.condition.code,t=pn.find((function(e){return e.code===n})).png;m(i?t[0]:t[1])}}),[i,e]);return(0,Z.jsx)(un,{children:n&&e?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(gn,{children:[(0,Z.jsx)(fn,{children:(0,Z.jsx)("img",{src:f,alt:e.condition.text,loading:"lazy"})}),(0,Z.jsxs)(jn,{children:[(0,Z.jsxs)(mn,{children:[t,", ",o]}),(0,Z.jsxs)(zn,{children:[(0,Z.jsx)("img",{src:e.temp_c>=0?kn:Pn,alt:"temperature",loading:"lazy"}),e.temp_c," ",(0,Z.jsx)("span",{children:"\xb0C"})]}),(0,Z.jsxs)(vn,{children:["Feels like ",e.feelslike_c," \xb0C"]})]})]}),(0,Z.jsxs)(xn,{children:[(0,Z.jsx)(yn,{children:(0,Z.jsx)("span",{children:e.condition.text})}),(0,Z.jsxs)(bn,{children:[(0,Z.jsxs)(wn,{color:"blue",children:["Precipitation:",(0,Z.jsxs)("span",{children:[n.daily.precipitation_sum[0]," mm"]})]}),(0,Z.jsxs)(wn,{color:"pink",children:["Humidity:",(0,Z.jsxs)("span",{children:[e.humidity," %"]})]}),(0,Z.jsxs)(wn,{color:"violet",children:["Windspeed:",(0,Z.jsxs)("span",{children:[n.current_weather.windspeed," km/h"]})]})]}),(0,Z.jsx)(F,{}),(0,Z.jsx)("button",{type:"button",onClick:function(){l(!h)},children:"Display weather"})]}),h&&(0,Z.jsx)(X,{})]}):(0,Z.jsx)("div",{children:"No data to display"})})},Zn=i(7194),_n=i(21),Ln=function(){var n=(0,Zn.E)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:void 0,suppressLocationOnMount:!1}),e=n.coords,i=n.isGeolocationAvailable,t=n.isGeolocationEnabled,o=(0,d.I0)(),r=(0,d.v9)(y),a=(0,d.v9)(m),s=(0,d.v9)(v),l=(0,d.v9)(b),p=(0,d.v9)(w);return(0,c.useEffect)((function(){e&&(o((0,_n.ob)(e.latitude)),o((0,_n.Q)(e.longitude)),o((0,h.Bs)()))}),[e,o]),(0,c.useEffect)((function(){p||e&&(o((0,h.FU)()),o((0,h.yT)()),o((0,h.dE)()))}),[o,p,e]),(0,c.useEffect)((function(){l||s&&o((0,h.ui)())}),[o,s,l]),(0,Z.jsxs)("main",{children:[(0,Z.jsx)(_,{}),(0,Z.jsx)(L.W,{children:i?t?r&&a?(0,Z.jsx)(Mn,{}):(0,Z.jsx)("div",{children:"Loading..."}):(0,Z.jsx)("div",{children:"Geolocation is not enabled"}):(0,Z.jsx)("div",{children:"Your browser does not support Geolocation"})})]})}},8292:function(n,e,i){n.exports=i.p+"static/media/day-clouds-min.15e9dea62f0154da6218.png"},8707:function(n,e,i){n.exports=i.p+"static/media/day-rain-min.91de59f0024d3448c687.png"},5468:function(n,e,i){n.exports=i.p+"static/media/day-snow-min.b3f7b30faf8d8e44f0a2.png"},5547:function(n,e,i){n.exports=i.p+"static/media/day-storm-min.5c60632e2334c8548d7a.png"},7067:function(n,e,i){n.exports=i.p+"static/media/day-sun-min.3cd4308d29ec1e3ad911.png"},1156:function(n,e,i){n.exports=i.p+"static/media/day-wind-min.b6bc200ec76b5e7ed52c.png"},3684:function(n,e,i){n.exports=i.p+"static/media/night-clouds-min.2a7a47e316e4d0cf39fc.png"},6562:function(n,e,i){n.exports=i.p+"static/media/night-moon-min.af8740f0edb561d454dd.png"},3943:function(n,e,i){n.exports=i.p+"static/media/night-rain-min.753119edfeefd098305f.png"},130:function(n,e,i){n.exports=i.p+"static/media/night-snow-min.0f2d7b1c6c5220f72ec4.png"},2909:function(n,e,i){n.exports=i.p+"static/media/night-storm-min.190e7e193f49ebb2df48.png"},395:function(n,e,i){n.exports=i.p+"static/media/night-wind-min.b43ee2d469d0eb648e9c.png"},4293:function(n,e,i){n.exports=i.p+"static/media/thermomater-max-min.5cb386569b105d9a400b.png"},535:function(n,e,i){n.exports=i.p+"static/media/thermomater-min-min.7f6139665f74752f3887.png"},6525:function(n,e,i){n.exports=i.p+"static/media/umbrella-red-wallpaper-mob.3da8545f7852e93f9205.jpg"},7604:function(n,e,i){n.exports=i.p+"static/media/umbrella-red-wallpaper.95ebfd2b200936d409c6.jpg"}}]);
//# sourceMappingURL=970.87730102.chunk.js.map