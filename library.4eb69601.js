function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in l){var t=l[e];delete l[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){l[e]=t},t.parcelRequired7c6=o),o("bTcpz");var a=e(o("amrNH")).template({1:function(e,t,n,l,o){var a,r=null!=t?t:e.nullContext||{},u=e.hooks.helperMissing,i="function",c=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"\n<li class='gallery__item' data-id="+c(typeof(a=null!=(a=d(n,"id")||(null!=t?d(t,"id"):t))?a:u)===i?a.call(r,{name:"id",hash:{},data:o,loc:{start:{line:3,column:34},end:{line:3,column:40}}}):a)+">\n    <div class='block__image'>\n        <img class='gallery__image' src='https://image.tmdb.org/t/p/w500"+c(typeof(a=null!=(a=d(n,"poster_path")||(null!=t?d(t,"poster_path"):t))?a:u)===i?a.call(r,{name:"poster_path",hash:{},data:o,loc:{start:{line:5,column:72},end:{line:5,column:87}}}):a)+"' alt='"+c(typeof(a=null!=(a=d(n,"title")||(null!=t?d(t,"title"):t))?a:u)===i?a.call(r,{name:"title",hash:{},data:o,loc:{start:{line:5,column:94},end:{line:5,column:103}}}):a)+"'\n            loading='lazy' />\n    </div>\n    <div class='info_movie'>\n        <h2 class='name_movie'>"+c(typeof(a=null!=(a=d(n,"title")||(null!=t?d(t,"title"):t))?a:u)===i?a.call(r,{name:"title",hash:{},data:o,loc:{start:{line:9,column:31},end:{line:9,column:40}}}):a)+"\n        </h2>\n        <p class='genre_movie'>"+c(typeof(a=null!=(a=d(n,"genres")||(null!=t?d(t,"genres"):t))?a:u)===i?a.call(r,{name:"genres",hash:{},data:o,loc:{start:{line:11,column:31},end:{line:11,column:41}}}):a)+c(typeof(a=null!=(a=d(n,"release_date")||(null!=t?d(t,"release_date"):t))?a:u)===i?a.call(r,{name:"release_date",hash:{},data:o,loc:{start:{line:11,column:41},end:{line:11,column:57}}}):a)+"<span class='reting'>"+c(typeof(a=null!=(a=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?a:u)===i?a.call(r,{name:"vote_average",hash:{},data:o,loc:{start:{line:11,column:78},end:{line:11,column:95}}}):a)+"</span></p>\n    </div>\n</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,l,o){var a;return null!=(a=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:15,column:9}}}))?a:""},useData:!0}),r=o("eWCmQ");const u=localStorage.getItem("wathedlist-films"),i=localStorage.getItem("queuee-films"),c=JSON.parse(u),d=JSON.parse(i);console.log(d);const s={buttonLibraryWatched:document.querySelector(".js-library-watch"),buttonLibraryQueue:document.querySelector(".js-library-queue"),containerLibrary:document.querySelector(".js-gallery-library"),buttonLoadMoreWatched:document.querySelector(".watched"),buttonLoadMoreQueue:document.querySelector(".queue")};s.buttonLibraryWatched.style.backgroundColor="#ff6b01",s.buttonLoadMoreWatched.style.display="none",s.buttonLoadMoreQueue.style.display="none";let y=0,p=0;function b(e,t){y=0,p=0,e.length<=6?s.containerLibrary.innerHTML=a(e):(s.containerLibrary.innerHTML=a(e.slice(0,6)),t.style.display="block")}function m(t,n){y+=6,p+=12,t.length<=y?(n.style.display="none",e(r).Notify.failure("Sorry, no more movies here")):s.containerLibrary.insertAdjacentHTML("beforeend",a(t.slice(y,p)))}b(c,s.buttonLoadMoreWatched),s.buttonLoadMoreWatched.addEventListener("click",(()=>m(c,s.buttonLoadMoreWatched))),s.buttonLoadMoreQueue.addEventListener("click",(()=>m(d,s.buttonLoadMoreQueue)));s.buttonLibraryQueue.addEventListener("click",(()=>{s.buttonLoadMoreWatched.style.display="none",b(d,s.buttonLoadMoreQueue),s.buttonLibraryWatched.style.backgroundColor="transparent",s.buttonLibraryQueue.style.backgroundColor="#ff6b01"}));s.buttonLibraryWatched.addEventListener("click",(()=>{s.buttonLoadMoreQueue.style.display="none",b(c,s.buttonLoadMoreWatched),s.buttonLibraryQueue.style.backgroundColor="transparent",s.buttonLibraryWatched.style.backgroundColor="#ff6b01"}));
//# sourceMappingURL=library.4eb69601.js.map
