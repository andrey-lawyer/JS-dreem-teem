!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in l){var n=l[e];delete l[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){l[e]=n},n.parcelRequired7c6=o),o("5xtVg");var a=o("l5bVx"),r=e(o("WMajR")).template({1:function(n,t,l,o,r){var i,u=null!=t?t:n.nullContext||{},d=n.hooks.helperMissing,c="function",s=n.escapeExpression,b=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"\n<li class='gallery__item' data-id="+s((void 0===(i=null!=(i=b(l,"id")||(null!=t?b(t,"id"):t))?i:d)?"undefined":e(a)(i))===c?i.call(u,{name:"id",hash:{},data:r,loc:{start:{line:3,column:34},end:{line:3,column:40}}}):i)+">\n    <div class='block__image'>\n        <img class='gallery__image' src='https://image.tmdb.org/t/p/w500"+s((void 0===(i=null!=(i=b(l,"poster_path")||(null!=t?b(t,"poster_path"):t))?i:d)?"undefined":e(a)(i))===c?i.call(u,{name:"poster_path",hash:{},data:r,loc:{start:{line:5,column:72},end:{line:5,column:87}}}):i)+"' alt='"+s((void 0===(i=null!=(i=b(l,"title")||(null!=t?b(t,"title"):t))?i:d)?"undefined":e(a)(i))===c?i.call(u,{name:"title",hash:{},data:r,loc:{start:{line:5,column:94},end:{line:5,column:103}}}):i)+"'\n            loading='lazy' />\n    </div>\n    <div class='info_movie'>\n        <h2 class='name_movie'>"+s((void 0===(i=null!=(i=b(l,"title")||(null!=t?b(t,"title"):t))?i:d)?"undefined":e(a)(i))===c?i.call(u,{name:"title",hash:{},data:r,loc:{start:{line:9,column:31},end:{line:9,column:40}}}):i)+"\n        </h2>\n        <p class='genre_movie'>"+s((void 0===(i=null!=(i=b(l,"genres")||(null!=t?b(t,"genres"):t))?i:d)?"undefined":e(a)(i))===c?i.call(u,{name:"genres",hash:{},data:r,loc:{start:{line:11,column:31},end:{line:11,column:41}}}):i)+s((void 0===(i=null!=(i=b(l,"release_date")||(null!=t?b(t,"release_date"):t))?i:d)?"undefined":e(a)(i))===c?i.call(u,{name:"release_date",hash:{},data:r,loc:{start:{line:11,column:41},end:{line:11,column:57}}}):i)+"<span class='reting'>"+s((void 0===(i=null!=(i=b(l,"vote_average")||(null!=t?b(t,"vote_average"):t))?i:d)?"undefined":e(a)(i))===c?i.call(u,{name:"vote_average",hash:{},data:r,loc:{start:{line:11,column:78},end:{line:11,column:95}}}):i)+"</span></p>\n    </div>\n</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,l,o){var a;return null!=(a=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:15,column:9}}}))?a:""},useData:!0}),i=o("iU1Pc"),u=localStorage.getItem("wathedlist-films"),d=localStorage.getItem("queuee-films"),c=JSON.parse(u),s=JSON.parse(d);console.log(s);var b={buttonLibraryWatched:document.querySelector(".js-library-watch"),buttonLibraryQueue:document.querySelector(".js-library-queue"),containerLibrary:document.querySelector(".js-gallery-library"),buttonLoadMoreWatched:document.querySelector(".watched"),buttonLoadMoreQueue:document.querySelector(".queue")};b.buttonLibraryWatched.style.backgroundColor="#ff6b01",b.buttonLoadMoreWatched.style.display="none",b.buttonLoadMoreQueue.style.display="none";var y=0,m=0;function p(e,n){y=0,m=0,e.length<=6?b.containerLibrary.innerHTML=r(e):(b.containerLibrary.innerHTML=r(e.slice(0,6)),n.style.display="block")}if(console.log(c),c)p(c,b.buttonLoadMoreWatched);else{b.containerLibrary.innerHTML='\n   <div >        \n          <img src="https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_1280.jpg"\n          alt="movie" loading="lazy" />     \n   </div>\n      '}function f(n,t){y+=6,m+=12,n.length<=y?(t.style.display="none",e(i).Notify.failure("Sorry, no more movies here")):b.containerLibrary.insertAdjacentHTML("beforeend",r(n.slice(y,m)))}b.buttonLoadMoreWatched.addEventListener("click",(function(){return f(c,b.buttonLoadMoreWatched)})),b.buttonLoadMoreQueue.addEventListener("click",(function(){return f(s,b.buttonLoadMoreQueue)}));b.buttonLibraryQueue.addEventListener("click",(function(){if(s)b.buttonLoadMoreWatched.style.display="none",p(s,b.buttonLoadMoreQueue),b.buttonLibraryWatched.style.backgroundColor="transparent",b.buttonLibraryQueue.style.backgroundColor="#ff6b01";else{b.containerLibrary.innerHTML='\n   <div >        \n          <img src="https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_1280.jpg"\n          alt="movie" loading="lazy" />     \n   </div>\n      '}}));b.buttonLibraryWatched.addEventListener("click",(function(){if(c)b.buttonLoadMoreQueue.style.display="none",p(c,b.buttonLoadMoreWatched),b.buttonLibraryQueue.style.backgroundColor="transparent",b.buttonLibraryWatched.style.backgroundColor="#ff6b01";else{b.containerLibrary.innerHTML='\n   <div >        \n          <img src="https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_1280.jpg"\n          alt="movie" loading="lazy" />     \n   </div>\n      '}}))}();
//# sourceMappingURL=library.5c023de3.js.map