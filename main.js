(()=>{"use strict";const e=async e=>{const t=await fetch((n=e,`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=0b94a86a7ab72879839de5a724686c9f`),{mode:"cors"});var n;if(!t.ok)throw new Error(t.status);return t.json()},t=(e,t)=>"C"===t?1.8*e+32:5/9*(e-32),n=(()=>{const n={};return{getForecast:()=>n,loadContents:async t=>{n.unit="C",n.city=t;try{const o=await e(t);return n.temp=o.main.temp-273.15,n.feelsLike=o.main.feels_like-273.15,n.humidity=o.main.humidity,n.icon=o.weather[0].icon,n.main=o.weather[0].main,n.country=o.sys.country,n.time=((e,t)=>{const n=new Date(1e3*e+1e3*t);return n.setHours(n.getHours()-5),n.setMinutes(n.getMinutes()-30),n.toLocaleTimeString()})(o.dt,o.timezone),n.tempMax=o.main.temp_max-273.15,n.tempMin=o.main.temp_min-273.15,n.humidity=o.main.humidity,n.windSpeed=o.wind.speed,!0}catch(e){return!1}},toggleUnit:()=>(n.temp=t(n.temp,n.unit),n.feelsLike=t(n.feelsLike,n.unit),n.tempMax=t(n.tempMax,n.unit),n.tempMin=t(n.tempMin,n.unit),n.unit="C"===n.unit?"F":"C",n.unit)}})();(()=>{const e=document.querySelector("input.city"),t=document.querySelector(".search-city"),o=document.querySelector(".main"),i=document.querySelector("body"),r=document.querySelector(".temperature"),c=document.querySelector(".feels-like-temp"),u=document.querySelector(".unit-selector"),a=document.querySelector(".weather-icon"),m=document.querySelector(".weather-main"),s=document.querySelector(".location-info > .city"),d=document.querySelector(".country"),l=document.querySelector(".time"),y=document.querySelector(".temp-max > .content"),p=document.querySelector(".temp-min > .content"),h=document.querySelector(".humidity > .content"),C=document.querySelector(".wind > .content"),w=e=>{e?(i.style.pointerEvents="none",o.classList.remove("loaded")):(o.classList.add("loaded"),i.style.pointerEvents="auto")},S=()=>{const e=n.getForecast();r.textContent=`${Math.round(e.temp)}`,c.textContent=`${Math.round(e.feelsLike)}°`,u.textContent=`°${e.unit}`,y.textContent=`${Math.round(e.tempMax)}°`,p.textContent=`${Math.round(e.tempMin)}°`},x=async()=>{const t=(()=>{let t=e.value.toLowerCase();return t=t[0].toUpperCase()+t.slice(1),e.value="",t})();w(!0);const o=await n.loadContents(t);w(!1),o?(()=>{S();const e=n.getForecast();(e=>{const t=document.createElement("img");t.src=`http://openweathermap.org/img/wn/${e.icon}@4x.png`,a.childElementCount&&a.lastChild.remove(),a.appendChild(t)})(e),(e=>{m.textContent=e.main,s.textContent=`${e.city} ${e.country}`,d.textContent=e.country,l.textContent=e.time})(e),(e=>{h.textContent=`${e.humidity}%`,C.textContent=`${e.windSpeed} m/s`})(e)})():console.log("Location not found")},q=()=>{n.toggleUnit(),S()};return{init:()=>{e.value="London",x(),t.addEventListener("click",x),e.addEventListener("keyup",(({key:e})=>{"Enter"===e&&x()})),u.addEventListener("click",q)}}})().init()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUFxQkEsRUFia0JBLE1BQU9DLElBQ3JCLE1BQU1DLFFBQWlCQyxPQU5UQyxFQU1zQkgsRUFMeEIscURBQXFERyw0Q0FLbEIsQ0FBRUMsS0FBTSxTQU4xQyxJQUFDRCxFQU9kLElBQUtGLEVBQVNJLEdBQ1osTUFBTSxJQUFJQyxNQUFNTCxFQUFTTSxRQUUzQixPQUFPTixFQUFTTyxRQ1hkQyxFQUFhLENBQUNDLEVBQUtDLElBQ0gsTUFBaEJBLEVBQWtDLElBQU5ELEVBQWdCLEdBQzNCLEVBQUksR0FBakJBLEVBQU0sSUF3RGhCLEVBOUNpQixNQUNmLE1BQU1FLEVBQVcsR0FzQ2pCLE1BQU8sQ0FDTEMsWUFIa0IsSUFBTUQsRUFJeEJFLGFBdENtQmYsTUFBT0MsSUFDMUJZLEVBQVNHLEtBQU8sSUFDaEJILEVBQVNULEtBQU9ILEVBQ2hCLElBQ0UsTUFBTWdCLFFBQW9CLEVBQWdCaEIsR0FlMUMsT0FiQVksRUFBU0ssS0FBT0QsRUFBWUUsS0FBS0QsS0FBTyxPQUN4Q0wsRUFBU08sVUFBWUgsRUFBWUUsS0FBS0UsV0FBYSxPQUNuRFIsRUFBU1MsU0FBV0wsRUFBWUUsS0FBS0csU0FDckNULEVBQVNVLEtBQU9OLEVBQVlPLFFBQVEsR0FBR0QsS0FFdkNWLEVBQVNNLEtBQU9GLEVBQVlPLFFBQVEsR0FBR0wsS0FDdkNOLEVBQVNZLFFBQVVSLEVBQVlTLElBQUlELFFBQ25DWixFQUFTYyxLQXZCQyxFQUFDQyxFQUFJQyxLQUNuQixNQUFNQyxFQUFPLElBQUlDLEtBQVUsSUFBTEgsRUFBd0IsSUFBWEMsR0FHbkMsT0FGQUMsRUFBS0UsU0FBU0YsRUFBS0csV0FBYSxHQUNoQ0gsRUFBS0ksV0FBV0osRUFBS0ssYUFBZSxJQUM3QkwsRUFBS00sc0JBbUJRQyxDQUFRcEIsRUFBWVcsR0FBSVgsRUFBWVksVUFFcERoQixFQUFTeUIsUUFBVXJCLEVBQVlFLEtBQUtvQixTQUFXLE9BQy9DMUIsRUFBUzJCLFFBQVV2QixFQUFZRSxLQUFLc0IsU0FBVyxPQUMvQzVCLEVBQVNTLFNBQVdMLEVBQVlFLEtBQUtHLFNBQ3JDVCxFQUFTNkIsVUFBWXpCLEVBQVkwQixLQUFLQyxPQUMvQixFQUNQLE1BQU9DLEdBQ1AsT0FBTyxJQWtCVEMsV0FkaUIsS0FDakJqQyxFQUFTSyxLQUFPUixFQUFXRyxFQUFTSyxLQUFNTCxFQUFTRyxNQUNuREgsRUFBU08sVUFBWVYsRUFBV0csRUFBU08sVUFBV1AsRUFBU0csTUFDN0RILEVBQVN5QixRQUFVNUIsRUFBV0csRUFBU3lCLFFBQVN6QixFQUFTRyxNQUN6REgsRUFBUzJCLFFBQVU5QixFQUFXRyxFQUFTMkIsUUFBUzNCLEVBQVNHLE1BQ3pESCxFQUFTRyxLQUF5QixNQUFsQkgsRUFBU0csS0FBZSxJQUFNLElBQ3ZDSCxFQUFTRyxRQWxDSCxHQ1pOLE1BQ1QsTUFBTStCLEVBQWFDLFNBQVNDLGNBQWMsY0FDcENDLEVBQWFGLFNBQVNDLGNBQWMsZ0JBQ3BDRSxFQUFRSCxTQUFTQyxjQUFjLFNBQy9CRyxFQUFPSixTQUFTQyxjQUFjLFFBRTlCSSxFQUFRTCxTQUFTQyxjQUFjLGdCQUMvQkssRUFBaUJOLFNBQVNDLGNBQWMsb0JBQ3hDTSxFQUFnQlAsU0FBU0MsY0FBYyxrQkFDdkNPLEVBQWVSLFNBQVNDLGNBQWMsaUJBRXRDUSxFQUFlVCxTQUFTQyxjQUFjLGlCQUN0Q1MsRUFBUVYsU0FBU0MsY0FBYywwQkFDL0JVLEVBQVdYLFNBQVNDLGNBQWMsWUFDbENXLEVBQVFaLFNBQVNDLGNBQWMsU0FFL0JZLEVBQVdiLFNBQVNDLGNBQWMsd0JBQ2xDYSxFQUFXZCxTQUFTQyxjQUFjLHdCQUNsQ2MsRUFBWWYsU0FBU0MsY0FBYyx3QkFDbkNlLEVBQWFoQixTQUFTQyxjQUFjLG9CQVNwQ2dCLEVBQVdDLElBQ1hBLEdBQ0ZkLEVBQUtlLE1BQU1DLGNBQWdCLE9BQzNCakIsRUFBTWtCLFVBQVVDLE9BQU8sWUFFdkJuQixFQUFNa0IsVUFBVUUsSUFBSSxVQUNwQm5CLEVBQUtlLE1BQU1DLGNBQWdCLFNBSXpCSSxFQUF1QixLQUMzQixNQUFNM0QsRUFBVyxnQkFDakJ3QyxFQUFNb0IsWUFBYyxHQUFHQyxLQUFLQyxNQUFNOUQsRUFBU0ssUUFDM0NvQyxFQUFlbUIsWUFBYyxHQUFHQyxLQUFLQyxNQUFNOUQsRUFBU08sY0FDcERtQyxFQUFja0IsWUFBYyxJQUFJNUQsRUFBU0csT0FDekM2QyxFQUFTWSxZQUFjLEdBQUdDLEtBQUtDLE1BQU05RCxFQUFTeUIsWUFDOUN3QixFQUFTVyxZQUFjLEdBQUdDLEtBQUtDLE1BQU05RCxFQUFTMkIsYUE4QjFDb0MsRUFBa0I1RSxVQUN0QixNQUFNQyxFQXREYSxNQUNuQixJQUFJQSxFQUFXOEMsRUFBVzhCLE1BQU1DLGNBR2hDLE9BRkE3RSxFQUFXQSxFQUFTLEdBQUc4RSxjQUFnQjlFLEVBQVMrRSxNQUFNLEdBQ3REakMsRUFBVzhCLE1BQVEsR0FDWjVFLEdBa0RVZ0YsR0FDakJoQixHQUFRLEdBRVIsTUFBTWlCLFFBQVcsZUFBc0JqRixHQUN2Q2dFLEdBQVEsR0FDSGlCLEVBZFcsTUFDaEJWLElBQ0EsTUFBTTNELEVBQVcsZ0JBckJPLENBQUNBLElBQ3pCLE1BQU1zRSxFQUFjbkMsU0FBU29DLGNBQWMsT0FDM0NELEVBQVlFLElBQU0sb0NBQW9DeEUsRUFBU1UsY0FDM0RpQyxFQUFhOEIsbUJBQW1COUIsRUFBYStCLFVBQVVqQixTQUMzRGQsRUFBYWdDLFlBQVlMLElBa0J6Qk0sQ0FBa0I1RSxHQWZNLENBQUNBLElBQ3pCNEMsRUFBYWdCLFlBQWM1RCxFQUFTTSxLQUNwQ3VDLEVBQU1lLFlBQWMsR0FBRzVELEVBQVNULFFBQVFTLEVBQVNZLFVBQ2pEa0MsRUFBU2MsWUFBYzVELEVBQVNZLFFBQ2hDbUMsRUFBTWEsWUFBYzVELEVBQVNjLE1BWTdCK0QsQ0FBa0I3RSxHQVRHLENBQUNBLElBQ3RCa0QsRUFBVVUsWUFBYyxHQUFHNUQsRUFBU1MsWUFDcEMwQyxFQUFXUyxZQUFjLEdBQUc1RCxFQUFTNkIsaUJBUXJDaUQsQ0FBZTlFLElBYWYrRSxHQUhFQyxRQUFRQyxJQUFJLHVCQU1WaEQsRUFBYSxLQUNqQixlQUNBMEIsS0FlRixNQUFPLENBQ0x1QixLQWJXLEtBRVhoRCxFQUFXOEIsTUFBUSxTQUNuQkQsSUFFQTFCLEVBQVc4QyxpQkFBaUIsUUFBU3BCLEdBQ3JDN0IsRUFBV2lELGlCQUFpQixTQUFTLEVBQUdDLElBQUFBLE1BQzFCLFVBQVJBLEdBQWlCckIsT0FFdkJyQixFQUFjeUMsaUJBQWlCLFFBQVNsRCxNQXJHakMsR0NBWCxRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9XZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvRm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBXZWF0aGVyID0gKCgpID0+IHtcbiAgY29uc3Qga2V5ID0gJzBiOTRhODZhN2FiNzI4Nzk4MzlkZTVhNzI0Njg2YzlmJztcblxuICBjb25zdCBnZXRVcmwgPSAoY2l0eSkgPT4ge1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHtrZXl9YDtcbiAgICByZXR1cm4gdXJsO1xuICB9O1xuXG4gIGNvbnN0IGdldERhdGEgPSBhc3luYyAoY2l0eU5hbWUpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdldFVybChjaXR5TmFtZSksIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0RGF0YSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXI7XG5cbi8vIFNhbXBsZSBKc29uXG4vL1xuLy8ge1xuLy8gICBcImNvb3JkXCI6IHtcbi8vICAgICBcImxvblwiOiAtMTIyLjA4LFxuLy8gICAgIFwibGF0XCI6IDM3LjM5XG4vLyAgIH0sXG4vLyAgIFwid2VhdGhlclwiOiBbXG4vLyAgICAge1xuLy8gICAgICAgXCJpZFwiOiA4MDAsXG4vLyAgICAgICBcIm1haW5cIjogXCJDbGVhclwiLFxuLy8gICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImNsZWFyIHNreVwiLFxuLy8gICAgICAgXCJpY29uXCI6IFwiMDFkXCJcbi8vICAgICB9XG4vLyAgIF0sXG4vLyAgIFwiYmFzZVwiOiBcInN0YXRpb25zXCIsXG4vLyAgIFwibWFpblwiOiB7XG4vLyAgICAgXCJ0ZW1wXCI6IDI4Mi41NSxcbi8vICAgICBcImZlZWxzX2xpa2VcIjogMjgxLjg2LFxuLy8gICAgIFwidGVtcF9taW5cIjogMjgwLjM3LFxuLy8gICAgIFwidGVtcF9tYXhcIjogMjg0LjI2LFxuLy8gICAgIFwicHJlc3N1cmVcIjogMTAyMyxcbi8vICAgICBcImh1bWlkaXR5XCI6IDEwMFxuLy8gICB9LFxuLy8gICBcInZpc2liaWxpdHlcIjogMTYwOTMsXG4vLyAgIFwid2luZFwiOiB7XG4vLyAgICAgXCJzcGVlZFwiOiAxLjUsXG4vLyAgICAgXCJkZWdcIjogMzUwXG4vLyAgIH0sXG4vLyAgIFwiY2xvdWRzXCI6IHtcbi8vICAgICBcImFsbFwiOiAxXG4vLyAgIH0sXG4vLyAgIFwiZHRcIjogMTU2MDM1MDY0NSxcbi8vICAgXCJzeXNcIjoge1xuLy8gICAgIFwidHlwZVwiOiAxLFxuLy8gICAgIFwiaWRcIjogNTEyMixcbi8vICAgICBcIm1lc3NhZ2VcIjogMC4wMTM5LFxuLy8gICAgIFwiY291bnRyeVwiOiBcIlVTXCIsXG4vLyAgICAgXCJzdW5yaXNlXCI6IDE1NjAzNDM2MjcsXG4vLyAgICAgXCJzdW5zZXRcIjogMTU2MDM5NjU2M1xuLy8gICB9LFxuLy8gICBcInRpbWV6b25lXCI6IC0yNTIwMCxcbi8vICAgXCJpZFwiOiA0MjAwMDYzNTMsXG4vLyAgIFwibmFtZVwiOiBcIk1vdW50YWluIFZpZXdcIixcbi8vICAgXCJjb2RcIjogMjAwXG4vLyAgIH1cbiIsImltcG9ydCBXZWF0aGVyIGZyb20gJy4vV2VhdGhlcic7XG5cbmNvbnN0IGNoYW5nZVVuaXQgPSAobnVtLCBjdXJyZW50VW5pdCkgPT4ge1xuICBpZiAoY3VycmVudFVuaXQgPT09ICdDJykgcmV0dXJuIG51bSAqICg5IC8gNSkgKyAzMjtcbiAgcmV0dXJuIChudW0gLSAzMikgKiAoNSAvIDkpO1xufTtcblxuY29uc3QgZ2V0RGF0ZSA9IChkdCwgdGltZXpvbmUpID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGR0ICogMTAwMCArICh0aW1lem9uZSAqIDEwMDApKTtcbiAgZGF0ZS5zZXRIb3VycyhkYXRlLmdldEhvdXJzKCkgLSA1KTtcbiAgZGF0ZS5zZXRNaW51dGVzKGRhdGUuZ2V0TWludXRlcygpIC0gMzApO1xuICByZXR1cm4gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbn07XG5cbmNvbnN0IEZvcmVjYXN0ID0gKCgpID0+IHtcbiAgY29uc3QgZm9yZWNhc3QgPSB7fTtcblxuICBjb25zdCBsb2FkQ29udGVudHMgPSBhc3luYyAoY2l0eU5hbWUpID0+IHtcbiAgICBmb3JlY2FzdC51bml0ID0gJ0MnO1xuICAgIGZvcmVjYXN0LmNpdHkgPSBjaXR5TmFtZTtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBXZWF0aGVyLmdldERhdGEoY2l0eU5hbWUpO1xuICAgICAgLy8gdGVtcC1pbmZvXG4gICAgICBmb3JlY2FzdC50ZW1wID0gd2VhdGhlckRhdGEubWFpbi50ZW1wIC0gMjczLjE1O1xuICAgICAgZm9yZWNhc3QuZmVlbHNMaWtlID0gd2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlIC0gMjczLjE1O1xuICAgICAgZm9yZWNhc3QuaHVtaWRpdHkgPSB3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5O1xuICAgICAgZm9yZWNhc3QuaWNvbiA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWNvbjtcbiAgICAgIC8vIGxvY2F0aW9uLWluZm9cbiAgICAgIGZvcmVjYXN0Lm1haW4gPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW47XG4gICAgICBmb3JlY2FzdC5jb3VudHJ5ID0gd2VhdGhlckRhdGEuc3lzLmNvdW50cnk7XG4gICAgICBmb3JlY2FzdC50aW1lID0gZ2V0RGF0ZSh3ZWF0aGVyRGF0YS5kdCwgd2VhdGhlckRhdGEudGltZXpvbmUpO1xuICAgICAgLy8gZXh0cmEtaW5mb1xuICAgICAgZm9yZWNhc3QudGVtcE1heCA9IHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXggLSAyNzMuMTU7XG4gICAgICBmb3JlY2FzdC50ZW1wTWluID0gd2VhdGhlckRhdGEubWFpbi50ZW1wX21pbiAtIDI3My4xNTtcbiAgICAgIGZvcmVjYXN0Lmh1bWlkaXR5ID0gd2VhdGhlckRhdGEubWFpbi5odW1pZGl0eTtcbiAgICAgIGZvcmVjYXN0LndpbmRTcGVlZCA9IHdlYXRoZXJEYXRhLndpbmQuc3BlZWQ7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlVW5pdCA9ICgpID0+IHtcbiAgICBmb3JlY2FzdC50ZW1wID0gY2hhbmdlVW5pdChmb3JlY2FzdC50ZW1wLCBmb3JlY2FzdC51bml0KTtcbiAgICBmb3JlY2FzdC5mZWVsc0xpa2UgPSBjaGFuZ2VVbml0KGZvcmVjYXN0LmZlZWxzTGlrZSwgZm9yZWNhc3QudW5pdCk7XG4gICAgZm9yZWNhc3QudGVtcE1heCA9IGNoYW5nZVVuaXQoZm9yZWNhc3QudGVtcE1heCwgZm9yZWNhc3QudW5pdCk7XG4gICAgZm9yZWNhc3QudGVtcE1pbiA9IGNoYW5nZVVuaXQoZm9yZWNhc3QudGVtcE1pbiwgZm9yZWNhc3QudW5pdCk7XG4gICAgZm9yZWNhc3QudW5pdCA9IGZvcmVjYXN0LnVuaXQgPT09ICdDJyA/ICdGJyA6ICdDJztcbiAgICByZXR1cm4gZm9yZWNhc3QudW5pdDtcbiAgfTtcblxuICBjb25zdCBnZXRGb3JlY2FzdCA9ICgpID0+IGZvcmVjYXN0O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0Rm9yZWNhc3QsXG4gICAgbG9hZENvbnRlbnRzLFxuICAgIHRvZ2dsZVVuaXQsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JlY2FzdDtcbiIsImltcG9ydCBGb3JlY2FzdCBmcm9tICcuL0ZvcmVjYXN0JztcblxuY29uc3QgVUkgPSAoKCkgPT4ge1xuICBjb25zdCAkY2l0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQuY2l0eScpO1xuICBjb25zdCAkc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1jaXR5Jyk7XG4gIGNvbnN0ICRtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgLy8gdGVtcC1pbmZvXG4gIGNvbnN0ICR0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlJyk7XG4gIGNvbnN0ICRmZWVsc0xpa2VUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UtdGVtcCcpO1xuICBjb25zdCAkdW5pdFNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXQtc2VsZWN0b3InKTtcbiAgY29uc3QgJHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaWNvbicpO1xuICAvLyBsb2NhdGlvbi1pbmZvXG4gIGNvbnN0ICR3ZWF0aGVyTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLW1haW4nKTtcbiAgY29uc3QgJGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24taW5mbyA+IC5jaXR5Jyk7XG4gIGNvbnN0ICRjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50cnknKTtcbiAgY29uc3QgJHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpO1xuICAvLyBleHRyYS1pbmZvXG4gIGNvbnN0ICR0ZW1wTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtbWF4ID4gLmNvbnRlbnQnKTtcbiAgY29uc3QgJHRlbXBNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcC1taW4gPiAuY29udGVudCcpO1xuICBjb25zdCAkaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHkgPiAuY29udGVudCcpO1xuICBjb25zdCAkd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQgPiAuY29udGVudCcpO1xuXG4gIGNvbnN0IGdldENpdHlJbnB1dCA9ICgpID0+IHtcbiAgICBsZXQgY2l0eU5hbWUgPSAkY2l0eUlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgY2l0eU5hbWUgPSBjaXR5TmFtZVswXS50b1VwcGVyQ2FzZSgpICsgY2l0eU5hbWUuc2xpY2UoMSk7XG4gICAgJGNpdHlJbnB1dC52YWx1ZSA9ICcnO1xuICAgIHJldHVybiBjaXR5TmFtZTtcbiAgfTtcblxuICBjb25zdCBsb2FkaW5nID0gKGJlZ2luKSA9PiB7XG4gICAgaWYgKGJlZ2luKSB7XG4gICAgICBib2R5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAkbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJG1haW4uY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gICAgICBib2R5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRlbXBlcmF0dXJlRE9NID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcmVjYXN0ID0gRm9yZWNhc3QuZ2V0Rm9yZWNhc3QoKTtcbiAgICAkdGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZm9yZWNhc3QudGVtcCl9YDtcbiAgICAkZmVlbHNMaWtlVGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZm9yZWNhc3QuZmVlbHNMaWtlKX3CsGA7XG4gICAgJHVuaXRTZWxlY3Rvci50ZXh0Q29udGVudCA9IGDCsCR7Zm9yZWNhc3QudW5pdH1gO1xuICAgICR0ZW1wTWF4LnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChmb3JlY2FzdC50ZW1wTWF4KX3CsGA7XG4gICAgJHRlbXBNaW4udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGZvcmVjYXN0LnRlbXBNaW4pfcKwYDtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVXZWF0aGVySWNvbiA9IChmb3JlY2FzdCkgPT4ge1xuICAgIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgd2VhdGhlckljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7Zm9yZWNhc3QuaWNvbn1ANHgucG5nYDtcbiAgICBpZiAoJHdlYXRoZXJJY29uLmNoaWxkRWxlbWVudENvdW50KSAkd2VhdGhlckljb24ubGFzdENoaWxkLnJlbW92ZSgpO1xuICAgICR3ZWF0aGVySWNvbi5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbik7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlTG9jYXRpb25ET00gPSAoZm9yZWNhc3QpID0+IHtcbiAgICAkd2VhdGhlck1haW4udGV4dENvbnRlbnQgPSBmb3JlY2FzdC5tYWluO1xuICAgICRjaXR5LnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3QuY2l0eX0gJHtmb3JlY2FzdC5jb3VudHJ5fWA7XG4gICAgJGNvdW50cnkudGV4dENvbnRlbnQgPSBmb3JlY2FzdC5jb3VudHJ5O1xuICAgICR0aW1lLnRleHRDb250ZW50ID0gZm9yZWNhc3QudGltZTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVFeHRyYURPTSA9IChmb3JlY2FzdCkgPT4ge1xuICAgICRodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0Lmh1bWlkaXR5fSVgO1xuICAgICR3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC53aW5kU3BlZWR9IG0vc2A7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlRE9NID0gKCkgPT4ge1xuICAgIHVwZGF0ZVRlbXBlcmF0dXJlRE9NKCk7XG4gICAgY29uc3QgZm9yZWNhc3QgPSBGb3JlY2FzdC5nZXRGb3JlY2FzdCgpO1xuICAgIHVwZGF0ZVdlYXRoZXJJY29uKGZvcmVjYXN0KTtcbiAgICB1cGRhdGVMb2NhdGlvbkRPTShmb3JlY2FzdCk7XG4gICAgdXBkYXRlRXh0cmFET00oZm9yZWNhc3QpO1xuICB9O1xuXG4gIGNvbnN0IHBvcHVsYXRlV2VhdGhlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjaXR5TmFtZSA9IGdldENpdHlJbnB1dCgpO1xuICAgIGxvYWRpbmcodHJ1ZSk7XG4gICAgLy8gV2FpdCBmb3IgZGF0YSBiZWluZyBmZXRjaGVkXG4gICAgY29uc3QgT0sgPSBhd2FpdCBGb3JlY2FzdC5sb2FkQ29udGVudHMoY2l0eU5hbWUpO1xuICAgIGxvYWRpbmcoZmFsc2UpO1xuICAgIGlmICghT0spIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMb2NhdGlvbiBub3QgZm91bmQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdXBkYXRlRE9NKCk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlVW5pdCA9ICgpID0+IHtcbiAgICBGb3JlY2FzdC50b2dnbGVVbml0KCk7XG4gICAgdXBkYXRlVGVtcGVyYXR1cmVET00oKTtcbiAgfTtcblxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIC8vIFNhbXBsZSBWYWx1ZVxuICAgICRjaXR5SW5wdXQudmFsdWUgPSAnTG9uZG9uJztcbiAgICBwb3B1bGF0ZVdlYXRoZXIoKTtcblxuICAgICRzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwb3B1bGF0ZVdlYXRoZXIpO1xuICAgICRjaXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoeyBrZXkgfSkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ0VudGVyJykgcG9wdWxhdGVXZWF0aGVyKCk7XG4gICAgfSk7XG4gICAgJHVuaXRTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVVuaXQpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFVJO1xuIiwiaW1wb3J0IFVJIGZyb20gJy4vbW9kdWxlcy9VSSc7XG5cblVJLmluaXQoKTtcbiJdLCJuYW1lcyI6WyJhc3luYyIsImNpdHlOYW1lIiwicmVzcG9uc2UiLCJmZXRjaCIsImNpdHkiLCJtb2RlIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJjaGFuZ2VVbml0IiwibnVtIiwiY3VycmVudFVuaXQiLCJmb3JlY2FzdCIsImdldEZvcmVjYXN0IiwibG9hZENvbnRlbnRzIiwidW5pdCIsIndlYXRoZXJEYXRhIiwidGVtcCIsIm1haW4iLCJmZWVsc0xpa2UiLCJmZWVsc19saWtlIiwiaHVtaWRpdHkiLCJpY29uIiwid2VhdGhlciIsImNvdW50cnkiLCJzeXMiLCJ0aW1lIiwiZHQiLCJ0aW1lem9uZSIsImRhdGUiLCJEYXRlIiwic2V0SG91cnMiLCJnZXRIb3VycyIsInNldE1pbnV0ZXMiLCJnZXRNaW51dGVzIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiZ2V0RGF0ZSIsInRlbXBNYXgiLCJ0ZW1wX21heCIsInRlbXBNaW4iLCJ0ZW1wX21pbiIsIndpbmRTcGVlZCIsIndpbmQiLCJzcGVlZCIsImVyciIsInRvZ2dsZVVuaXQiLCIkY2l0eUlucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJHNlYXJjaEJ0biIsIiRtYWluIiwiYm9keSIsIiR0ZW1wIiwiJGZlZWxzTGlrZVRlbXAiLCIkdW5pdFNlbGVjdG9yIiwiJHdlYXRoZXJJY29uIiwiJHdlYXRoZXJNYWluIiwiJGNpdHkiLCIkY291bnRyeSIsIiR0aW1lIiwiJHRlbXBNYXgiLCIkdGVtcE1pbiIsIiRodW1pZGl0eSIsIiR3aW5kU3BlZWQiLCJsb2FkaW5nIiwiYmVnaW4iLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ1cGRhdGVUZW1wZXJhdHVyZURPTSIsInRleHRDb250ZW50IiwiTWF0aCIsInJvdW5kIiwicG9wdWxhdGVXZWF0aGVyIiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZXRDaXR5SW5wdXQiLCJPSyIsIndlYXRoZXJJY29uIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImNoaWxkRWxlbWVudENvdW50IiwibGFzdENoaWxkIiwiYXBwZW5kQ2hpbGQiLCJ1cGRhdGVXZWF0aGVySWNvbiIsInVwZGF0ZUxvY2F0aW9uRE9NIiwidXBkYXRlRXh0cmFET00iLCJ1cGRhdGVET00iLCJjb25zb2xlIiwibG9nIiwiaW5pdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9