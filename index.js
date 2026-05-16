import{a as m,S as g,i as o}from"./assets/vendor-GgwdjDaY.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",d="55877928-5048cf5b75a61a83a7743c80d";function h(s){return m.get(y,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),p=document.querySelector(".loader"),L=new g(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const r=s.map(({webformatURL:a,largeImageURL:n,tags:e,likes:t,views:i,comments:u,downloads:f})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${n}">
              <img
                class="gallery-image"
                src="${a}"
                alt="${e}"
              />
            </a>

            <div class="gallery-info">
              <p class="gallery-info-item">
                <span class="gallery-info-title">Likes</span>
                <span>${t}</span>
              </p>
              <p class="gallery-info-item">
                <span class="gallery-info-title">Views</span>
                <span>${i}</span>
              </p>
              <p class="gallery-info-item">
                <span class="gallery-info-title">Comments</span>
                <span>${u}</span>
              </p>
              <p class="gallery-info-item">
                <span class="gallery-info-title">Downloads</span>
                <span>${f}</span>
              </p>
            </div>
          </li>
        `).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function v(){c.innerHTML=""}function S(){p.classList.add("is-visible")}function q(){p.classList.remove("is-visible")}const l=document.querySelector(".form"),P=l.elements["search-text"];l.addEventListener("submit",w);function w(s){s.preventDefault();const r=P.value.trim();if(!r){o.error({message:"Please enter a search query!",position:"topRight"});return}v(),S(),h(r).then(a=>{if(a.hits.length===0){o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(a.hits)}).catch(()=>{o.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q(),l.reset()})}
//# sourceMappingURL=index.js.map
