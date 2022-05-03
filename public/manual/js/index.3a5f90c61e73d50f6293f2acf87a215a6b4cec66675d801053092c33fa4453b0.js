(()=>{var l=class{initialize(){let e=document.querySelector(".sidebar"),t=document.querySelector(".navigation"),s=document.getElementById("main");t.scrollTop=Number(sessionStorage.getItem("nav-scroll")),s.scrollTop=Number(sessionStorage.getItem("main-scroll")),sessionStorage.removeItem("nav-scroll"),sessionStorage.removeItem("main-scroll");let o=!0;function n(){o=!1}for(let r of e.querySelectorAll("a"))r.target!=="_blank"&&r.addEventListener("click",n);window.addEventListener("beforeunload",()=>{sessionStorage.setItem("nav-scroll",t.scrollTop.toFixed(0)),o&&sessionStorage.setItem("main-scroll",s.scrollTop.toFixed(0))})}};var a=class{initialize(){let e=document.querySelector(".sidebar"),t=document.querySelector(".sidebar-button-open"),s=document.querySelector(".sidebar-button-close");t.addEventListener("click",()=>{e.classList.add("active"),t.classList.add("hidden")}),s.addEventListener("click",()=>{e.classList.remove("active"),t.classList.remove("hidden")}),document.body.addEventListener("click",o=>{let n=o.target;s.offsetParent!==null&&n!==t&&!e.contains(n)&&(e.classList.remove("active"),t.classList.remove("hidden"))})}};var c=class{setDarkModeEnabled(e){e?(localStorage.setItem("dark-mode","1"),document.body.classList.add("dark")):(localStorage.removeItem("dark-mode"),document.body.classList.remove("dark"))}initialize(){document.querySelector(".dark-mode").addEventListener("click",()=>this.setDarkModeEnabled(localStorage.getItem("dark-mode")===null));let t=window.matchMedia("(prefers-color-scheme: dark)");t.addEventListener("change",s=>this.setDarkModeEnabled(s.matches)),this.setDarkModeEnabled(t.matches||localStorage.getItem("dark-mode")!==null),document.body.style.visibility="visible",document.body.style.opacity=1}};var d=class{constructor(){this.viewport=null,this.fullscreenButton=null,this.preventScrolling=!1}showErrorMessage(e){let t=this.viewport,s=t.querySelector("canvas"),o=t.querySelector(".warning"),n=t.querySelector(".error"),r=n.querySelector("p");r.innerText=e,t.classList.remove("loading"),o.classList.add("hidden"),s.classList.add("hidden"),n.classList.remove("hidden")}showEpilepsyWarning(){let e=this.viewport,t=e.querySelector("canvas"),s=e.querySelector(".warning"),o=e.querySelector(".tp"),n=s.querySelector("a");o.classList.toggle("hidden"),t.classList.toggle("hidden"),s.classList.toggle("hidden"),n.addEventListener("click",r=>{r.preventDefault(),sessionStorage.setItem("epilepsy-warning","1"),s.classList.toggle("hidden"),t.classList.toggle("hidden"),o.classList.toggle("hidden")})}handleScroll(e){this.preventScrolling&&e.preventDefault()}toggleFullscreen(){document.fullscreenEnabled&&(document.fullscreenElement!==null?document.exitFullscreen():this.viewport.requestFullscreen())}handleEvent(e){switch(e.type){case"mouseenter":this.preventScrolling=!0;break;case"mouseleave":this.preventScrolling=!1;break;case"wheel":this.handleScroll(e);break;case"click":this.toggleFullscreen();break;case"fullscreenchange":this.fullscreenButton.classList.toggle("active");break;case"unhandledrejection":this.showErrorMessage(e.reason.message);break}}initialize(){let e=this.viewport=document.querySelector(".viewport");e!==null&&(window.addEventListener("unhandledrejection",this),document.getElementById("main").addEventListener("wheel",this),e.addEventListener("mouseenter",this),e.addEventListener("mouseleave",this),(this.fullscreenButton=e.querySelector(".fullscreen")).addEventListener("click",this),document.addEventListener("fullscreenchange",this),new MutationObserver((n,r)=>{for(let m of n)if(m.type==="childList"){e.classList.remove("loading");let h=sessionStorage.getItem("epilepsy-warning")!==null;e.dataset.epilepsyWarning&&!h&&this.showEpilepsyWarning(),r.disconnect()}}).observe(e,{childList:!0}))}};function u(i){let e;switch(i){case"three":case"three/examples/jsm/loaders/GLTFLoader.js":e=window.THREE;break;default:throw new Error(`Cannot require ${i}`)}return e}Object.assign(window,{require:u});window.addEventListener("DOMContentLoaded",i=>{let e=[new l,new a,new c,new d];for(let t of e)t.initialize()});window.addEventListener("load",i=>{document.body.classList.remove("preload")});})();
