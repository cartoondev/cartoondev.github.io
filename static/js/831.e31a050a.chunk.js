"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[831],{831:(e,n,t)=>{t.r(n),t.d(n,{MainPage:()=>s});const a={...JSON.parse('{"apiKey":"p1kjn3nm82"}')};var i=t(9950),r=t(6455),p=t(4414);function s(){const e=(0,i.useRef)(null);return(0,i.useLayoutEffect)((()=>{if(!document.getElementById("naverMapsScript")){const n=document.createElement("script");n.id="naverMapsScript",n.src=`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${a.apiKey}`,n.onload=()=>{const n={center:new naver.maps.LatLng(33.385,126.57)},t=new naver.maps.Map("map",n);e.current=t},document.head.appendChild(n)}}),[]),(0,i.useEffect)((()=>{navigator.geolocation.watchPosition((n=>{var t,a;if(!e.current)return;const i={lat:n.coords.latitude,lng:n.coords.longitude};new naver.maps.Marker({position:i,map:null!==(t=e.current)&&void 0!==t?t:void 0}),null===(a=e.current)||void 0===a||a.setCenter(i)}))}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(r.mg,{children:[(0,p.jsx)("title",{children:"MainPage"}),(0,p.jsx)("meta",{name:"description",content:"A Boilerplate application mainpage"})]}),(0,p.jsx)("div",{id:"map",style:{width:"100%",height:"100%"}})]})}}}]);