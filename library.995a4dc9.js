!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r),r("5xtVg");var o=r("l5bVx"),l=e(r("WMajR")).template({1:function(t,n,a,r,l){var i,u=null!=n?n:t.nullContext||{},c=t.hooks.helperMissing,d="function",s=t.escapeExpression,f=t.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"\n<li class='gallery__item' data-id="+s((void 0===(i=null!=(i=f(a,"id")||(null!=n?f(n,"id"):n))?i:c)?"undefined":e(o)(i))===d?i.call(u,{name:"id",hash:{},data:l,loc:{start:{line:3,column:34},end:{line:3,column:40}}}):i)+">\n    <div class='block__image'>\n        <img class='gallery__image' src='https://image.tmdb.org/t/p/w500"+s((void 0===(i=null!=(i=f(a,"poster_path")||(null!=n?f(n,"poster_path"):n))?i:c)?"undefined":e(o)(i))===d?i.call(u,{name:"poster_path",hash:{},data:l,loc:{start:{line:5,column:72},end:{line:5,column:87}}}):i)+"' alt='"+s((void 0===(i=null!=(i=f(a,"title")||(null!=n?f(n,"title"):n))?i:c)?"undefined":e(o)(i))===d?i.call(u,{name:"title",hash:{},data:l,loc:{start:{line:5,column:94},end:{line:5,column:103}}}):i)+"'\n            loading='lazy' />\n    </div>\n    <div class='info_movie'>\n        <h2 class='name_movie'>"+s((void 0===(i=null!=(i=f(a,"title")||(null!=n?f(n,"title"):n))?i:c)?"undefined":e(o)(i))===d?i.call(u,{name:"title",hash:{},data:l,loc:{start:{line:9,column:31},end:{line:9,column:40}}}):i)+"\n        </h2>\n        <p class='genre_movie'>"+s((void 0===(i=null!=(i=f(a,"genres")||(null!=n?f(n,"genres"):n))?i:c)?"undefined":e(o)(i))===d?i.call(u,{name:"genres",hash:{},data:l,loc:{start:{line:11,column:31},end:{line:11,column:41}}}):i)+s((void 0===(i=null!=(i=f(a,"release_date")||(null!=n?f(n,"release_date"):n))?i:c)?"undefined":e(o)(i))===d?i.call(u,{name:"release_date",hash:{},data:l,loc:{start:{line:11,column:41},end:{line:11,column:57}}}):i)+"<span class='reting'>"+s((void 0===(i=null!=(i=f(a,"vote_average")||(null!=n?f(n,"vote_average"):n))?i:c)?"undefined":e(o)(i))===d?i.call(u,{name:"vote_average",hash:{},data:l,loc:{start:{line:11,column:78},end:{line:11,column:95}}}):i)+"</span></p>\n    </div>\n</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:1,column:0},end:{line:15,column:9}}}))?o:""},useData:!0}),i=r("iU1Pc");function u(){var t=localStorage.getItem("wathedlist-films"),n=localStorage.getItem("queuee-films"),a=JSON.parse(t),r=JSON.parse(n),o={buttonLibraryWatched:document.querySelector(".js-library-watch"),buttonLibraryQueue:document.querySelector(".js-library-queue"),containerLibrary:document.querySelector(".js-gallery-library"),buttonLoadMoreWatched:document.querySelector(".watched"),buttonLoadMoreQueue:document.querySelector(".queue")};o.buttonLibraryWatched.style.backgroundColor="#ff6b01",o.buttonLoadMoreWatched.style.display="none",o.buttonLoadMoreQueue.style.display="none";var u=0,c=0;function d(e,t){u=0,c=0,e.length<=6?o.containerLibrary.innerHTML=l(e):(o.containerLibrary.innerHTML=l(e.slice(0,6)),t.style.display="block")}if(a&&0!=a.length)d(a,o.buttonLoadMoreWatched);else{o.containerLibrary.innerHTML='\n   <div >        \n          <img src="https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_1280.jpg"\n          alt="movie" loading="lazy" />     \n   </div>\n      '}function s(t,n){u+=6,c+=12,t.length<=u?(n.style.display="none",e(i).Notify.failure("Sorry, no more movies here")):o.containerLibrary.insertAdjacentHTML("beforeend",l(t.slice(u,c)))}o.buttonLoadMoreWatched.addEventListener("click",(function(){return s(a,o.buttonLoadMoreWatched)})),o.buttonLoadMoreQueue.addEventListener("click",(function(){return s(r,o.buttonLoadMoreQueue)}));o.buttonLibraryQueue.addEventListener("click",(function(){if(o.buttonLibraryWatched.style.backgroundColor="transparent",o.buttonLibraryQueue.style.backgroundColor="#ff6b01",r&&0!=r.length)o.buttonLoadMoreWatched.style.display="none",d(r,o.buttonLoadMoreQueue);else{o.containerLibrary.innerHTML='\n   <div >        \n          <img src="https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_1280.jpg"\n          alt="movie" loading="lazy" />     \n   </div>\n      '}}));o.buttonLibraryWatched.addEventListener("click",(function(){if(o.buttonLibraryQueue.style.backgroundColor="transparent",o.buttonLibraryWatched.style.backgroundColor="#ff6b01",a&&0!=a.length)o.buttonLoadMoreQueue.style.display="none",d(a,o.buttonLoadMoreWatched);else{o.containerLibrary.innerHTML='\n   <div >        \n          <img src="https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_1280.jpg"\n          alt="movie" loading="lazy" />     \n   </div>\n      '}}))}u();var c=r("bpxeT"),d=r("8nrFW"),s=r("2TvXO"),f=(i=r("iU1Pc"),r("IdLUO"));r("ioPGL");var p=r("5HWQb"),m=r("b4XhL");r("twtVq");var g,y,h=r("b62ED"),b=r("6LjOC"),v=(document.querySelector(".js-search-form"),document.querySelector(".js-gallery-library")),L=(document.querySelector(".js-movie-info"),document.querySelector(".js-container-movie")),S=(new(0,f.FilmSearch),new(0,m.Trending),new(0,b.GetFullMovieInfo)),_=(document.querySelector("#search__input"),"wathedlist-films"),O="queuee-films",M=JSON.parse(localStorage.getItem(_)),x=(JSON.parse(localStorage.getItem(O)),{lines:13,length:38,width:17,radius:45,scale:1,corners:1,speed:1,rotate:1,animation:"spinner-line-fade-more",direction:1,color:"#ff6b01",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"fixed"}),E=(y=e(c)(e(s).mark((function t(n){var a,r,o;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=new(0,h.Spinner)(x).spin(),v.prepend(a.el),"UL"!==n.target.nodeName){t.next=4;break}return t.abrupt("return");case 4:return S.id=n.target.closest("li").dataset.id,g=S.id,t.prev=6,t.next=9,S.fetchFilmsByID();case 9:(r=t.sent).data.title&&(r.data.title=r.data.title.toUpperCase()),r.data.original_title&&(r.data.original_title=r.data.original_title.toUpperCase()),r.data.poster_path||(r.data.poster_path="/vkcajIqORuKfd8uV2GYULlHut9o.jpg"),o=[],r.data.genres.map((function(e){o.push(e.name)})),r.data.genres=e(d)(o),L.innerHTML=(0,p.default)(r.data),r.data,setTimeout((function(){var e=document.querySelector(".js-Wathed"),t=document.querySelector(".js-Queuee"),n=M.find((function(e){return e.id==g}));n?(e.textContent="REMOVED FROM WATCHED",t.textContent="ADD TO WATCHED/QUEUE"):(e.textContent="REMOVED FROM QUEUE",t.textContent="ADD TO WATCHED/QUEUE")}),0),t.next=24;break;case 21:t.prev=21,t.t0=t.catch(6),e(i).Notify.failure(console.log(t.t0));case 24:a.stop();case 25:case"end":return t.stop()}}),t,null,[[6,21]])}))),function(e){return y.apply(this,arguments)});v.addEventListener("click",E),document.querySelector(".modal__container").addEventListener("click",(function(e){if(e.target.classList.contains("js-Wathed")){var t=JSON.parse(localStorage.getItem(_)),n=JSON.parse(localStorage.getItem(O));if(t.find((function(e){return e.id==g}))){var a=t.filter((function(e){return e.id!=g}));localStorage.setItem(_,JSON.stringify(a)),u()}else{var r=n.filter((function(e){return e.id!=g}));localStorage.setItem(O,JSON.stringify(r)),u()}}if(e.target.classList.contains("js-Queuee")){var o=JSON.parse(localStorage.getItem(_)),l=JSON.parse(localStorage.getItem(O)),i=o.find((function(e){return e.id==g})),c=l.find((function(e){return e.id==g}));if(i){var d=o.filter((function(e){return e.id!=g}));localStorage.setItem(_,JSON.stringify(d)),l.push(i),localStorage.setItem(O,JSON.stringify(l)),u()}else{var s=l.filter((function(e){return e.id!=g}));localStorage.setItem(O,JSON.stringify(s)),o.push(c),localStorage.setItem(_,JSON.stringify(o)),u()}}}))}();
//# sourceMappingURL=library.995a4dc9.js.map
