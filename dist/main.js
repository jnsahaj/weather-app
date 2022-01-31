(()=>{"use strict";const e=async e=>{const t=await fetch((n=e,`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=0b94a86a7ab72879839de5a724686c9f`),{mode:"cors"});var n;if(!t.ok)throw new Error(t.status);return t.json()},t=(e,t)=>"C"===t?1.8*e+32:5/9*(e-32),n=(()=>{const n={};return{getForecast:()=>n,loadContents:async t=>{n.unit="C",n.city=t;try{const o=await e(t);return n.temp=o.main.temp-273.15,n.feelsLike=o.main.feels_like-273.15,n.humidity=o.main.humidity,n.icon=o.weather[0].icon,n.main=o.weather[0].main,n.country=o.sys.country,n.time=((e,t)=>{const n=new Date(1e3*e+1e3*t);return n.setHours(n.getHours()-5),n.setMinutes(n.getMinutes()-30),n.toLocaleTimeString()})(o.dt,o.timezone),n.tempMax=o.main.temp_max-273.15,n.tempMin=o.main.temp_min-273.15,n.humidity=o.main.humidity,n.windSpeed=o.wind.speed,!0}catch(e){return!1}},toggleUnit:()=>(n.temp=t(n.temp,n.unit),n.feelsLike=t(n.feelsLike,n.unit),n.tempMax=t(n.tempMax,n.unit),n.tempMin=t(n.tempMin,n.unit),n.unit="C"===n.unit?"F":"C",n.unit)}})();(()=>{const e=document.querySelector("input.city"),t=document.querySelector(".search-city"),o=document.querySelector(".error-msg"),r=document.querySelector(".main"),i=document.querySelector("body"),c=document.querySelector(".temperature"),u=document.querySelector(".feels-like-temp"),a=document.querySelector(".unit-selector"),m=document.querySelector(".weather-icon"),s=document.querySelector(".weather-main"),d=document.querySelector(".location-info > .city"),l=document.querySelector(".country"),y=document.querySelector(".time"),p=document.querySelector(".temp-max > .content"),h=document.querySelector(".temp-min > .content"),C=document.querySelector(".humidity > .content"),S=document.querySelector(".wind > .content"),w=e=>{e?(i.style.pointerEvents="none",r.classList.remove("loaded")):(r.classList.add("loaded"),i.style.pointerEvents="auto")},x=e=>{o.textContent=`* ${e}`},q=()=>{const e=n.getForecast();c.textContent=`${Math.round(e.temp)}`,u.textContent=`${Math.round(e.feelsLike)}°`,a.textContent=`°${e.unit}`,p.textContent=`${Math.round(e.tempMax)}°`,h.textContent=`${Math.round(e.tempMin)}°`},g=async()=>{const t=(()=>{let t=e.value.toLowerCase();return t&&(t=t[0].toUpperCase()+t.slice(1),e.value=""),t})();if(!t)return void x("Please Enter a City");w(!0);const o=await n.loadContents(t);w(!1),o?(()=>{q();const e=n.getForecast();(e=>{const t=document.createElement("img");t.src=`http://openweathermap.org/img/wn/${e.icon}@4x.png`,m.childElementCount&&m.lastChild.remove(),m.appendChild(t)})(e),(e=>{s.textContent=e.main,d.textContent=`${e.city} ${e.country}`,l.textContent=e.country,y.textContent=e.time})(e),(e=>{C.textContent=`${e.humidity}%`,S.textContent=`${e.windSpeed} m/s`})(e)})():x("Location not found")},M=()=>{n.toggleUnit(),q()};return{init:()=>{e.value="London",g(),t.addEventListener("click",g),e.addEventListener("keyup",(({key:e})=>{"Enter"===e&&g()})),a.addEventListener("click",M)}}})().init()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBVVcsWUFBYyxHQUFHOUQsRUFBU1MsWUFDcEMyQyxFQUFXVSxZQUFjLEdBQUc5RCxFQUFTNkIsaUJBUXJDb0QsQ0FBZWpGLElBaUJma0YsR0FIRXRCLEVBQVUsdUJBTVIzQixFQUFhLEtBQ2pCLGVBQ0E4QixLQWVGLE1BQU8sQ0FDTG9CLEtBYlcsS0FFWGpELEVBQVdpQyxNQUFRLFNBQ25CRCxJQUVBN0IsRUFBVytDLGlCQUFpQixRQUFTbEIsR0FDckNoQyxFQUFXa0QsaUJBQWlCLFNBQVMsRUFBR0MsSUFBQUEsTUFDMUIsVUFBUkEsR0FBaUJuQixPQUV2QnZCLEVBQWN5QyxpQkFBaUIsUUFBU25ELE1BaEhqQyxHQ0FYLFEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL1dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9Gb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFdlYXRoZXIgPSAoKCkgPT4ge1xuICBjb25zdCBrZXkgPSAnMGI5NGE4NmE3YWI3Mjg3OTgzOWRlNWE3MjQ2ODZjOWYnO1xuXG4gIGNvbnN0IGdldFVybCA9IChjaXR5KSA9PiB7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0ke2tleX1gO1xuICAgIHJldHVybiB1cmw7XG4gIH07XG5cbiAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChjaXR5TmFtZSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2V0VXJsKGNpdHlOYW1lKSwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXREYXRhLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjtcblxuLy8gU2FtcGxlIEpzb25cbi8vXG4vLyB7XG4vLyAgIFwiY29vcmRcIjoge1xuLy8gICAgIFwibG9uXCI6IC0xMjIuMDgsXG4vLyAgICAgXCJsYXRcIjogMzcuMzlcbi8vICAgfSxcbi8vICAgXCJ3ZWF0aGVyXCI6IFtcbi8vICAgICB7XG4vLyAgICAgICBcImlkXCI6IDgwMCxcbi8vICAgICAgIFwibWFpblwiOiBcIkNsZWFyXCIsXG4vLyAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiY2xlYXIgc2t5XCIsXG4vLyAgICAgICBcImljb25cIjogXCIwMWRcIlxuLy8gICAgIH1cbi8vICAgXSxcbi8vICAgXCJiYXNlXCI6IFwic3RhdGlvbnNcIixcbi8vICAgXCJtYWluXCI6IHtcbi8vICAgICBcInRlbXBcIjogMjgyLjU1LFxuLy8gICAgIFwiZmVlbHNfbGlrZVwiOiAyODEuODYsXG4vLyAgICAgXCJ0ZW1wX21pblwiOiAyODAuMzcsXG4vLyAgICAgXCJ0ZW1wX21heFwiOiAyODQuMjYsXG4vLyAgICAgXCJwcmVzc3VyZVwiOiAxMDIzLFxuLy8gICAgIFwiaHVtaWRpdHlcIjogMTAwXG4vLyAgIH0sXG4vLyAgIFwidmlzaWJpbGl0eVwiOiAxNjA5Myxcbi8vICAgXCJ3aW5kXCI6IHtcbi8vICAgICBcInNwZWVkXCI6IDEuNSxcbi8vICAgICBcImRlZ1wiOiAzNTBcbi8vICAgfSxcbi8vICAgXCJjbG91ZHNcIjoge1xuLy8gICAgIFwiYWxsXCI6IDFcbi8vICAgfSxcbi8vICAgXCJkdFwiOiAxNTYwMzUwNjQ1LFxuLy8gICBcInN5c1wiOiB7XG4vLyAgICAgXCJ0eXBlXCI6IDEsXG4vLyAgICAgXCJpZFwiOiA1MTIyLFxuLy8gICAgIFwibWVzc2FnZVwiOiAwLjAxMzksXG4vLyAgICAgXCJjb3VudHJ5XCI6IFwiVVNcIixcbi8vICAgICBcInN1bnJpc2VcIjogMTU2MDM0MzYyNyxcbi8vICAgICBcInN1bnNldFwiOiAxNTYwMzk2NTYzXG4vLyAgIH0sXG4vLyAgIFwidGltZXpvbmVcIjogLTI1MjAwLFxuLy8gICBcImlkXCI6IDQyMDAwNjM1Myxcbi8vICAgXCJuYW1lXCI6IFwiTW91bnRhaW4gVmlld1wiLFxuLy8gICBcImNvZFwiOiAyMDBcbi8vICAgfVxuIiwiaW1wb3J0IFdlYXRoZXIgZnJvbSAnLi9XZWF0aGVyJztcblxuY29uc3QgY2hhbmdlVW5pdCA9IChudW0sIGN1cnJlbnRVbml0KSA9PiB7XG4gIGlmIChjdXJyZW50VW5pdCA9PT0gJ0MnKSByZXR1cm4gbnVtICogKDkgLyA1KSArIDMyO1xuICByZXR1cm4gKG51bSAtIDMyKSAqICg1IC8gOSk7XG59O1xuXG5jb25zdCBnZXREYXRlID0gKGR0LCB0aW1lem9uZSkgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZHQgKiAxMDAwICsgKHRpbWV6b25lICogMTAwMCkpO1xuICBkYXRlLnNldEhvdXJzKGRhdGUuZ2V0SG91cnMoKSAtIDUpO1xuICBkYXRlLnNldE1pbnV0ZXMoZGF0ZS5nZXRNaW51dGVzKCkgLSAzMCk7XG4gIHJldHVybiBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpO1xufTtcblxuY29uc3QgRm9yZWNhc3QgPSAoKCkgPT4ge1xuICBjb25zdCBmb3JlY2FzdCA9IHt9O1xuXG4gIGNvbnN0IGxvYWRDb250ZW50cyA9IGFzeW5jIChjaXR5TmFtZSkgPT4ge1xuICAgIGZvcmVjYXN0LnVuaXQgPSAnQyc7XG4gICAgZm9yZWNhc3QuY2l0eSA9IGNpdHlOYW1lO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IFdlYXRoZXIuZ2V0RGF0YShjaXR5TmFtZSk7XG4gICAgICAvLyB0ZW1wLWluZm9cbiAgICAgIGZvcmVjYXN0LnRlbXAgPSB3ZWF0aGVyRGF0YS5tYWluLnRlbXAgLSAyNzMuMTU7XG4gICAgICBmb3JlY2FzdC5mZWVsc0xpa2UgPSB3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2UgLSAyNzMuMTU7XG4gICAgICBmb3JlY2FzdC5odW1pZGl0eSA9IHdlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHk7XG4gICAgICBmb3JlY2FzdC5pY29uID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5pY29uO1xuICAgICAgLy8gbG9jYXRpb24taW5mb1xuICAgICAgZm9yZWNhc3QubWFpbiA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgICAgIGZvcmVjYXN0LmNvdW50cnkgPSB3ZWF0aGVyRGF0YS5zeXMuY291bnRyeTtcbiAgICAgIGZvcmVjYXN0LnRpbWUgPSBnZXREYXRlKHdlYXRoZXJEYXRhLmR0LCB3ZWF0aGVyRGF0YS50aW1lem9uZSk7XG4gICAgICAvLyBleHRyYS1pbmZvXG4gICAgICBmb3JlY2FzdC50ZW1wTWF4ID0gd2VhdGhlckRhdGEubWFpbi50ZW1wX21heCAtIDI3My4xNTtcbiAgICAgIGZvcmVjYXN0LnRlbXBNaW4gPSB3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluIC0gMjczLjE1O1xuICAgICAgZm9yZWNhc3QuaHVtaWRpdHkgPSB3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5O1xuICAgICAgZm9yZWNhc3Qud2luZFNwZWVkID0gd2VhdGhlckRhdGEud2luZC5zcGVlZDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b2dnbGVVbml0ID0gKCkgPT4ge1xuICAgIGZvcmVjYXN0LnRlbXAgPSBjaGFuZ2VVbml0KGZvcmVjYXN0LnRlbXAsIGZvcmVjYXN0LnVuaXQpO1xuICAgIGZvcmVjYXN0LmZlZWxzTGlrZSA9IGNoYW5nZVVuaXQoZm9yZWNhc3QuZmVlbHNMaWtlLCBmb3JlY2FzdC51bml0KTtcbiAgICBmb3JlY2FzdC50ZW1wTWF4ID0gY2hhbmdlVW5pdChmb3JlY2FzdC50ZW1wTWF4LCBmb3JlY2FzdC51bml0KTtcbiAgICBmb3JlY2FzdC50ZW1wTWluID0gY2hhbmdlVW5pdChmb3JlY2FzdC50ZW1wTWluLCBmb3JlY2FzdC51bml0KTtcbiAgICBmb3JlY2FzdC51bml0ID0gZm9yZWNhc3QudW5pdCA9PT0gJ0MnID8gJ0YnIDogJ0MnO1xuICAgIHJldHVybiBmb3JlY2FzdC51bml0O1xuICB9O1xuXG4gIGNvbnN0IGdldEZvcmVjYXN0ID0gKCkgPT4gZm9yZWNhc3Q7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRGb3JlY2FzdCxcbiAgICBsb2FkQ29udGVudHMsXG4gICAgdG9nZ2xlVW5pdCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcmVjYXN0O1xuIiwiaW1wb3J0IEZvcmVjYXN0IGZyb20gJy4vRm9yZWNhc3QnO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGNvbnN0ICRjaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dC5jaXR5Jyk7XG4gIGNvbnN0ICRzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWNpdHknKTtcbiAgY29uc3QgJGVycm9yTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1zZycpO1xuICBjb25zdCAkbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIC8vIHRlbXAtaW5mb1xuICBjb25zdCAkdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZScpO1xuICBjb25zdCAkZmVlbHNMaWtlVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlLXRlbXAnKTtcbiAgY29uc3QgJHVuaXRTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0LXNlbGVjdG9yJyk7XG4gIGNvbnN0ICR3ZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWljb24nKTtcbiAgLy8gbG9jYXRpb24taW5mb1xuICBjb25zdCAkd2VhdGhlck1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1tYWluJyk7XG4gIGNvbnN0ICRjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uLWluZm8gPiAuY2l0eScpO1xuICBjb25zdCAkY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJ5Jyk7XG4gIGNvbnN0ICR0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWUnKTtcbiAgLy8gZXh0cmEtaW5mb1xuICBjb25zdCAkdGVtcE1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLW1heCA+IC5jb250ZW50Jyk7XG4gIGNvbnN0ICR0ZW1wTWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtbWluID4gLmNvbnRlbnQnKTtcbiAgY29uc3QgJGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5ID4gLmNvbnRlbnQnKTtcbiAgY29uc3QgJHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kID4gLmNvbnRlbnQnKTtcblxuICBjb25zdCBnZXRDaXR5SW5wdXQgPSAoKSA9PiB7XG4gICAgbGV0IGNpdHlOYW1lID0gJGNpdHlJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChjaXR5TmFtZSkge1xuICAgICAgY2l0eU5hbWUgPSBjaXR5TmFtZVswXS50b1VwcGVyQ2FzZSgpICsgY2l0eU5hbWUuc2xpY2UoMSk7XG4gICAgICAkY2l0eUlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuICAgIHJldHVybiBjaXR5TmFtZTtcbiAgfTtcblxuICBjb25zdCBsb2FkaW5nID0gKGJlZ2luKSA9PiB7XG4gICAgaWYgKGJlZ2luKSB7XG4gICAgICBib2R5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAkbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJG1haW4uY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gICAgICBib2R5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNob3dFcnJvciA9IChtc2cpID0+IHtcbiAgICAkZXJyb3JNc2cudGV4dENvbnRlbnQgPSBgKiAke21zZ31gO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRlbXBlcmF0dXJlRE9NID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcmVjYXN0ID0gRm9yZWNhc3QuZ2V0Rm9yZWNhc3QoKTtcbiAgICAkdGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZm9yZWNhc3QudGVtcCl9YDtcbiAgICAkZmVlbHNMaWtlVGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZm9yZWNhc3QuZmVlbHNMaWtlKX3CsGA7XG4gICAgJHVuaXRTZWxlY3Rvci50ZXh0Q29udGVudCA9IGDCsCR7Zm9yZWNhc3QudW5pdH1gO1xuICAgICR0ZW1wTWF4LnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChmb3JlY2FzdC50ZW1wTWF4KX3CsGA7XG4gICAgJHRlbXBNaW4udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGZvcmVjYXN0LnRlbXBNaW4pfcKwYDtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVXZWF0aGVySWNvbiA9IChmb3JlY2FzdCkgPT4ge1xuICAgIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgd2VhdGhlckljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7Zm9yZWNhc3QuaWNvbn1ANHgucG5nYDtcbiAgICBpZiAoJHdlYXRoZXJJY29uLmNoaWxkRWxlbWVudENvdW50KSAkd2VhdGhlckljb24ubGFzdENoaWxkLnJlbW92ZSgpO1xuICAgICR3ZWF0aGVySWNvbi5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbik7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlTG9jYXRpb25ET00gPSAoZm9yZWNhc3QpID0+IHtcbiAgICAkd2VhdGhlck1haW4udGV4dENvbnRlbnQgPSBmb3JlY2FzdC5tYWluO1xuICAgICRjaXR5LnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3QuY2l0eX0gJHtmb3JlY2FzdC5jb3VudHJ5fWA7XG4gICAgJGNvdW50cnkudGV4dENvbnRlbnQgPSBmb3JlY2FzdC5jb3VudHJ5O1xuICAgICR0aW1lLnRleHRDb250ZW50ID0gZm9yZWNhc3QudGltZTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVFeHRyYURPTSA9IChmb3JlY2FzdCkgPT4ge1xuICAgICRodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0Lmh1bWlkaXR5fSVgO1xuICAgICR3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC53aW5kU3BlZWR9IG0vc2A7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlRE9NID0gKCkgPT4ge1xuICAgIHVwZGF0ZVRlbXBlcmF0dXJlRE9NKCk7XG4gICAgY29uc3QgZm9yZWNhc3QgPSBGb3JlY2FzdC5nZXRGb3JlY2FzdCgpO1xuICAgIHVwZGF0ZVdlYXRoZXJJY29uKGZvcmVjYXN0KTtcbiAgICB1cGRhdGVMb2NhdGlvbkRPTShmb3JlY2FzdCk7XG4gICAgdXBkYXRlRXh0cmFET00oZm9yZWNhc3QpO1xuICB9O1xuXG4gIGNvbnN0IHBvcHVsYXRlV2VhdGhlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjaXR5TmFtZSA9IGdldENpdHlJbnB1dCgpO1xuICAgIGlmICghY2l0eU5hbWUpIHtcbiAgICAgIHNob3dFcnJvcignUGxlYXNlIEVudGVyIGEgQ2l0eScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsb2FkaW5nKHRydWUpO1xuICAgIC8vIFdhaXQgZm9yIGRhdGEgYmVpbmcgZmV0Y2hlZFxuICAgIGNvbnN0IE9LID0gYXdhaXQgRm9yZWNhc3QubG9hZENvbnRlbnRzKGNpdHlOYW1lKTtcbiAgICBsb2FkaW5nKGZhbHNlKTtcbiAgICBpZiAoIU9LKSB7XG4gICAgICBzaG93RXJyb3IoJ0xvY2F0aW9uIG5vdCBmb3VuZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB1cGRhdGVET00oKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVVbml0ID0gKCkgPT4ge1xuICAgIEZvcmVjYXN0LnRvZ2dsZVVuaXQoKTtcbiAgICB1cGRhdGVUZW1wZXJhdHVyZURPTSgpO1xuICB9O1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgLy8gU2FtcGxlIFZhbHVlXG4gICAgJGNpdHlJbnB1dC52YWx1ZSA9ICdMb25kb24nO1xuICAgIHBvcHVsYXRlV2VhdGhlcigpO1xuXG4gICAgJHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBvcHVsYXRlV2VhdGhlcik7XG4gICAgJGNpdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICh7IGtleSB9KSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnRW50ZXInKSBwb3B1bGF0ZVdlYXRoZXIoKTtcbiAgICB9KTtcbiAgICAkdW5pdFNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlVW5pdCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVUk7XG4iLCJpbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL1VJJztcblxuVUkuaW5pdCgpO1xuIl0sIm5hbWVzIjpbImFzeW5jIiwiY2l0eU5hbWUiLCJyZXNwb25zZSIsImZldGNoIiwiY2l0eSIsIm1vZGUiLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsImNoYW5nZVVuaXQiLCJudW0iLCJjdXJyZW50VW5pdCIsImZvcmVjYXN0IiwiZ2V0Rm9yZWNhc3QiLCJsb2FkQ29udGVudHMiLCJ1bml0Iiwid2VhdGhlckRhdGEiLCJ0ZW1wIiwibWFpbiIsImZlZWxzTGlrZSIsImZlZWxzX2xpa2UiLCJodW1pZGl0eSIsImljb24iLCJ3ZWF0aGVyIiwiY291bnRyeSIsInN5cyIsInRpbWUiLCJkdCIsInRpbWV6b25lIiwiZGF0ZSIsIkRhdGUiLCJzZXRIb3VycyIsImdldEhvdXJzIiwic2V0TWludXRlcyIsImdldE1pbnV0ZXMiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJnZXREYXRlIiwidGVtcE1heCIsInRlbXBfbWF4IiwidGVtcE1pbiIsInRlbXBfbWluIiwid2luZFNwZWVkIiwid2luZCIsInNwZWVkIiwiZXJyIiwidG9nZ2xlVW5pdCIsIiRjaXR5SW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkc2VhcmNoQnRuIiwiJGVycm9yTXNnIiwiJG1haW4iLCJib2R5IiwiJHRlbXAiLCIkZmVlbHNMaWtlVGVtcCIsIiR1bml0U2VsZWN0b3IiLCIkd2VhdGhlckljb24iLCIkd2VhdGhlck1haW4iLCIkY2l0eSIsIiRjb3VudHJ5IiwiJHRpbWUiLCIkdGVtcE1heCIsIiR0ZW1wTWluIiwiJGh1bWlkaXR5IiwiJHdpbmRTcGVlZCIsImxvYWRpbmciLCJiZWdpbiIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInNob3dFcnJvciIsIm1zZyIsInRleHRDb250ZW50IiwidXBkYXRlVGVtcGVyYXR1cmVET00iLCJNYXRoIiwicm91bmQiLCJwb3B1bGF0ZVdlYXRoZXIiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImdldENpdHlJbnB1dCIsIk9LIiwid2VhdGhlckljb24iLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiY2hpbGRFbGVtZW50Q291bnQiLCJsYXN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsInVwZGF0ZVdlYXRoZXJJY29uIiwidXBkYXRlTG9jYXRpb25ET00iLCJ1cGRhdGVFeHRyYURPTSIsInVwZGF0ZURPTSIsImluaXQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==