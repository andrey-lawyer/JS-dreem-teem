function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o),o("bTcpz");var l=e(o("amrNH")).template({1:function(e,t,n,a,o){var l,r=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,c="function",s=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"\n<li class='gallery__item' data-id="+s(typeof(l=null!=(l=d(n,"id")||(null!=t?d(t,"id"):t))?l:i)===c?l.call(r,{name:"id",hash:{},data:o,loc:{start:{line:3,column:34},end:{line:3,column:40}}}):l)+">\n    <div class='block__image'>\n        <img class='gallery__image' src='https://image.tmdb.org/t/p/w500"+s(typeof(l=null!=(l=d(n,"poster_path")||(null!=t?d(t,"poster_path"):t))?l:i)===c?l.call(r,{name:"poster_path",hash:{},data:o,loc:{start:{line:5,column:72},end:{line:5,column:87}}}):l)+"' alt='"+s(typeof(l=null!=(l=d(n,"title")||(null!=t?d(t,"title"):t))?l:i)===c?l.call(r,{name:"title",hash:{},data:o,loc:{start:{line:5,column:94},end:{line:5,column:103}}}):l)+"'\n            loading='lazy' />\n    </div>\n    <div class='info_movie'>\n        <h2 class='name_movie'>"+s(typeof(l=null!=(l=d(n,"title")||(null!=t?d(t,"title"):t))?l:i)===c?l.call(r,{name:"title",hash:{},data:o,loc:{start:{line:9,column:31},end:{line:9,column:40}}}):l)+"\n        </h2>\n        <p class='genre_movie'>"+s(typeof(l=null!=(l=d(n,"genres")||(null!=t?d(t,"genres"):t))?l:i)===c?l.call(r,{name:"genres",hash:{},data:o,loc:{start:{line:11,column:31},end:{line:11,column:41}}}):l)+s(typeof(l=null!=(l=d(n,"release_date")||(null!=t?d(t,"release_date"):t))?l:i)===c?l.call(r,{name:"release_date",hash:{},data:o,loc:{start:{line:11,column:41},end:{line:11,column:57}}}):l)+"<span class='reting'>"+s(typeof(l=null!=(l=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?l:i)===c?l.call(r,{name:"vote_average",hash:{},data:o,loc:{start:{line:11,column:78},end:{line:11,column:95}}}):l)+"</span></p>\n    </div>\n</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var l;return null!=(l=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:15,column:9}}}))?l:""},useData:!0}),r=o("eWCmQ");const i=localStorage.getItem("wathedlist-films"),c=localStorage.getItem("queuee-films"),s=JSON.parse(i),d=JSON.parse(c);console.log(d);const u={buttonLibraryWatched:document.querySelector(".js-library-watch"),buttonLibraryQueue:document.querySelector(".js-library-queue"),containerLibrary:document.querySelector(".js-gallery-library"),buttonLoadMoreWatched:document.querySelector(".watched"),buttonLoadMoreQueue:document.querySelector(".queue")};u.buttonLibraryWatched.style.backgroundColor="#ff6b01",u.buttonLoadMoreWatched.style.display="none",u.buttonLoadMoreQueue.style.display="none";let p=0,m=0;function y(e,t){p=0,m=0,e.length<=6?u.containerLibrary.innerHTML=l(e):(u.containerLibrary.innerHTML=l(e.slice(0,6)),t.style.display="block")}if(console.log(s),s)y(s,u.buttonLoadMoreWatched);else{const e='\n   <div >        \n          <img src="https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_1280.jpg"\n          alt="movie" loading="lazy" />     \n   </div>\n      ';u.containerLibrary.innerHTML=e}function f(t,n){p+=6,m+=12,t.length<=p?(n.style.display="none",e(r).Notify.failure("Sorry, no more movies here")):u.containerLibrary.insertAdjacentHTML("beforeend",l(t.slice(p,m)))}u.buttonLoadMoreWatched.addEventListener("click",(()=>f(s,u.buttonLoadMoreWatched))),u.buttonLoadMoreQueue.addEventListener("click",(()=>f(d,u.buttonLoadMoreQueue)));u.buttonLibraryQueue.addEventListener("click",(()=>{if(d)u.buttonLoadMoreWatched.style.display="none",y(d,u.buttonLoadMoreQueue),u.buttonLibraryWatched.style.backgroundColor="transparent",u.buttonLibraryQueue.style.backgroundColor="#ff6b01";else{const e='\n   <div >        \n          <img src="https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_1280.jpg"\n          alt="movie" loading="lazy" />     \n   </div>\n      ';u.containerLibrary.innerHTML=e}}));u.buttonLibraryWatched.addEventListener("click",(()=>{if(s)u.buttonLoadMoreQueue.style.display="none",y(s,u.buttonLoadMoreWatched),u.buttonLibraryQueue.style.backgroundColor="transparent",u.buttonLibraryWatched.style.backgroundColor="#ff6b01";else{const e='\n   <div >        \n          <img src="https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_1280.jpg"\n          alt="movie" loading="lazy" />     \n   </div>\n      ';u.containerLibrary.innerHTML=e}}));r=o("eWCmQ");var h=o("2IMSy");o("31ngm");var b=o("l2kTn"),g=o("dcQfH");o("ezyJp");var v=o("dCvm9"),L=o("e3GYQ");document.querySelector(".js-search-form");const _=document.querySelector(".js-gallery-library"),M=(document.querySelector(".js-movie-info"),document.querySelector(".js-container-movie")),S=(new(0,h.FilmSearch),new(0,g.Trending),new(0,L.GetFullMovieInfo));document.querySelector("#search__input"),document.querySelector(".js-Wathed"),document.querySelector(".js-Queuee");let j;const q={lines:13,length:38,width:17,radius:45,scale:1,corners:1,speed:1,rotate:1,animation:"spinner-line-fade-more",direction:1,color:"#ff6b01",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"fixed"};_.addEventListener("click",(async t=>{const n=new(0,v.Spinner)(q).spin();if(_.prepend(n.el),"UL"!==t.target.nodeName){S.id=t.target.closest("li").dataset.id;try{const e=await S.fetchFilmsByID();e.data.title&&(e.data.title=e.data.title.toUpperCase()),e.data.original_title&&(e.data.original_title=e.data.original_title.toUpperCase()),e.data.poster_path||(e.data.poster_path="/vkcajIqORuKfd8uV2GYULlHut9o.jpg");const t=[];e.data.genres.map((e=>{t.push(e.name)})),e.data.genres=[...t],M.innerHTML=(0,b.default)(e.data),j=e.data}catch(t){e(r).Notify.failure(console.log(t))}n.stop()}else console.log("miss")}));document.querySelector(".modal__container").addEventListener("click",(e=>{if(e.target.classList.contains("js-Queuee")){let e=document.querySelector(".js-Queuee");e.disabled=!0,e.textContent="Removed from Queue"}if(e.target.classList.contains("js-Wathed")){const e=document.querySelector(".js-Wathed");e.disabled=!0,e.textContent="Removed from Watched"}}));
//# sourceMappingURL=library.751a5f11.js.map
