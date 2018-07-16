var tns=function(){var t=window,vi=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,hi=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function mi(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function pi(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function yi(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function gi(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function xi(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function bi(t){return("insertRule"in t?t.cssRules:t.rules).length}function wi(t,e){return Math.atan2(t,e)*(180/Math.PI)}function Ci(t,e){var n=!1,i=Math.abs(90-Math.abs(t));return 90-e<=i?n="horizontal":i<=e&&(n="vertical"),n}function Ai(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),Mi=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Ti=i?function(t,e){Mi(t,e)||t.classList.add(e)}:function(t,e){Mi(t,e)||(t.className+=" "+e)},ki=i?function(t,e){Mi(t,e)&&t.classList.remove(e)}:function(t,e){Mi(t,e)&&(t.className=t.className.replace(e,""))};function Ni(t,e){return t.hasAttribute(e)}function r(t){return void 0!==t.item}function Ei(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Oi(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function Bi(t){t.style.cssText=""}function Ii(t){Ni(t,"hidden")||Ei(t,{hidden:""})}function Li(t){Ni(t,"hidden")&&Oi(t,"hidden")}function Si(t){return 0<t.offsetWidth&&0<t.offsetHeight}function Di(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function Ri(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var s=!!a&&{passive:!0};function Pi(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&s;t.addEventListener(n,e[n],i)}}function Wi(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&s;t.removeEventListener(n,e[n],i)}}function Hi(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var zi=function(h){h=mi({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1,useLocalStorage:!0},h||{});var N=document,m=window,s=13,l=32,u=33,c=34,f=35,d=36,v=37,p=38,y=39,g=40,o={},x=h.useLocalStorage;if(x){var t=navigator.userAgent,e=new Date;try{(o=m.localStorage)?(o.setItem(e,e),x=o.getItem(e)==e,o.removeItem(e)):x=!1,x||(o={})}catch(t){x=!1}x&&(o.tnsApp&&o.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){o.removeItem(t)}),localStorage.tnsApp=t)}function n(t,e){return o[t]?(r=o[t],0<=["true","false"].indexOf(r)?JSON.parse(r):r):(n=o,i=t,a=e,x&&n.setItem(i,a),a);var n,i,a,r}for(var i,a,r,b,w,C,A,M=n("tC",function(){var t=document,e=pi(),n=yi(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",s=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],l=0;l<3;l++)if(r=s[l],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?gi(e,n):i.remove(),a}()),T=n("tPL",function(){var t,e=document,n=pi(),i=yi(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var s=0;s<70;s++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?gi(n,i):a.remove(),t}()),E=n("tMQ",(a=document,r=pi(),b=yi(r),w=a.createElement("div"),C=a.createElement("style"),A="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",C.type="text/css",w.className="tns-mq-test",r.appendChild(C),r.appendChild(w),C.styleSheet?C.styleSheet.cssText=A:C.appendChild(a.createTextNode(A)),i=window.getComputedStyle?window.getComputedStyle(w).position:w.currentStyle.position,r.fake?gi(r,b):w.remove(),"absolute"===i)),k=n("tTf",Di("transform")),O=n("t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=pi(),a=yi(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?gi(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(k)),B=n("tTDu",Di("transitionDuration")),I=n("tTDe",Di("transitionDelay")),L=n("tADu",Di("animationDuration")),S=n("tADe",Di("animationDelay")),D=n("tTE",Ri(B,"Transition")),R=n("tAE",Ri(L,"Animation")),P=m.console&&"function"==typeof m.console.warn,W=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],H=W.length;H--;){var z=W[H];if("string"==typeof h[z]){var q=N.querySelector(h[z]);if(!q||!q.nodeName)return void(P&&console.warn("Can't find",h[z]));h[z]=q}}if(!(h.container.children.length<1)){if(h.responsive){var j={},F=h.responsive;for(var V in F){var Q=F[V];j[V]="number"==typeof Q?{items:Q}:Q}h.responsive=j,j=null,0 in h.responsive&&delete(h=mi(h,h.responsive[0])).responsive[0]}var X="carousel"===h.mode;if(!X){h.axis="horizontal",h.edgePadding=!1;var Y=h.animateIn,K=h.animateOut,U=h.animateDelay,G=h.animateNormal}var J,_,Z,$,tt,et,nt,it,at,rt="horizontal"===h.axis,ot=N.createElement("div"),st=N.createElement("div"),lt=h.container,ut=lt.parentNode,ct=lt.children,ft=ct.length,dt=h.responsive,vt=0,ht=sn(),mt=h.nested,pt=h.autoWidth,yt=cn("fixedWidth"),gt=cn("edgePadding"),xt=cn("gutter"),bt=ln(),wt=pt?1:Math.floor(cn("items")),Ct="page"===cn("slideBy")?wt:cn("slideBy"),At=h.viewportMax||h.fixedWidthViewportWidth,Mt=cn("arrowKeys"),Tt=cn("speed"),kt=h.rewind,Nt=!kt&&h.loop,Et=cn("autoHeight"),Ot=(at=document.createElement("style"),it&&at.setAttribute("media",it),document.querySelector("head").appendChild(at),at.sheet?at.sheet:at.styleSheet),Bt=h.lazyload,It=[],Lt=un("edgePadding"),St=Nt?(et=function(){{if(pt||yt&&!At)return ft-1;var t=yt?"fixedWidth":"items",e=[];if((yt||h[t]<ft)&&e.push(h[t]),dt)for(var n in dt){var i=dt[n][t];i&&(yt||i<ft)&&e.push(i)}return e.length||e.push(0),Math.ceil(yt?At/Math.min.apply(null,e):Math.max.apply(null,e))}}(),nt=X?Math.ceil((5*et-ft)/2):4*et-ft,nt=Math.max(et,nt),Lt?nt+1:nt):0,Dt=X?ft+2*St:ft+St,Rt=!(!yt&&!pt||Nt),Pt=yt?qn():null,Wt=!X||!Nt,Ht=rt?"left":"top",zt="",qt="",jt=rn(cn("startIndex")),Ft=jt,Vt=0,Qt=pt?null:an(),Xt=h.swipeAngle,Yt=!Xt||"?",Kt=!1,Ut=h.onInit,Gt=new Hi,Jt=lt.id,_t=" tns-slider tns-"+h.mode,Zt=lt.id||(tt=window.tnsId,window.tnsId=tt?tt+1:1,"tns"+window.tnsId),$t=cn("disable"),te=h.freezable,ee=pt?null:wn(),ne={click:Gn,keydown:function(t){switch((t=ii(t)).keyCode){case v:case p:case u:Ae.disabled||Gn(t,-1);break;case y:case g:case c:Me.disabled||Gn(t,1);break;case d:Un("first",t);break;case f:Un("last",t)}}},ie={click:function(t){Kt&&Kn();var e=(t=ii(t)).target||t.srcElement;for(;e!==Ne&&!Ni(e,"data-nav");)e=e.parentNode;Ni(e,"data-nav")&&Un(Be=[].indexOf.call(Te,e),t)},keydown:function(t){var e=N.activeElement;if(!Ni(e,"data-nav"))return;var n=(t=ii(t)).keyCode,i=[].indexOf.call(Te,e),a=Ee.length,r=Ee.indexOf(i);h.navContainer&&(a=ft,r=i);function o(t){return h.navContainer?t:Ee[t]}switch(n){case v:case u:0<r&&ni(Te[o(r-1)]);break;case p:case d:0<r&&ni(Te[o(0)]);break;case y:case c:r<a-1&&ni(Te[o(r+1)]);break;case g:case f:r<a-1&&ni(Te[o(a-1)]);break;case s:case l:Un(Be=i,t)}}},ae={mouseover:function(){Re&&(_n(),Pe=!0)},mouseout:function(){Pe&&(Jn(),Pe=!1)}},re={visibilitychange:function(){N.hidden?Re&&(_n(),He=!0):He&&(Jn(),He=!1)}},oe={keydown:function(t){switch((t=ii(t)).keyCode){case v:Gn(t,-1);break;case y:Gn(t,1)}}},se={touchstart:si,touchmove:li,touchend:ui,touchcancel:ui},le={mousedown:si,mousemove:li,mouseup:ui,mouseleave:ui},ue=un("controls"),ce=un("nav"),fe=!!pt||h.navAsThumbnails,de=un("autoplay"),ve=un("touch"),he=un("mouseDrag"),me="tns-slide-active",pe="tns-complete",ye={load:kn,error:kn};if(ue)var ge,xe,be=cn("controls"),we=cn("controlsText"),Ce=h.controlsContainer,Ae=h.prevButton,Me=h.nextButton;if(ce)var Te,ke=cn("nav"),Ne=h.navContainer,Ee=[],Oe=Ee,Be=-1,Ie=on(),Le=Ie,Se="tns-nav-active";if(de)var De,Re,Pe,We,He,ze=cn("autoplay"),qe=cn("autoplayTimeout"),je="forward"===h.autoplayDirection?1:-1,Fe=cn("autoplayText"),Ve=cn("autoplayHoverPause"),Qe=h.autoplayButton,Xe=cn("autoplayResetOnVisibility"),Ye=["<span class='tns-visually-hidden'>"," animation</span>"];if(ve||he)var Ke,Ue={},Ge={},Je=!1,_e=0,Ze=rt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};if(ve)var $e=cn("touch");if(he)var tn=cn("mouseDrag");ee&&(be=ke=$e=tn=Mt=ze=Ve=Xe=!1),k&&(Ht=k,zt="translate",O?(zt+=rt?"3d(":"3d(0px, ",qt=rt?", 0px, 0px)":", 0px)"):(zt+=rt?"X(":"Y(",qt=")")),function(){un("gutter");ot.className="tns-outer",st.className="tns-inner",st.id=Zt+"-iw",Et&&(st.className+=" tns-ah");""===lt.id&&(lt.id=Zt);_t+=T||pt?" tns-subpixel":" tns-no-subpixel",_t+=M?" tns-calc":" tns-no-calc",X&&(_t+=" tns-"+h.axis);if(lt.className+=_t,X){var t=N.createElement("div");t.className="tns-ovh",ot.appendChild(t),t.appendChild(st)}else ot.appendChild(st);if(ut.insertBefore(ot,lt),st.appendChild(lt),X&&D){var e={};e[D]=Kn,Pi(lt,e)}for(var n=0;n<ft;n++){var i=ct[n];i.id||(i.id=Zt+"-item"+n),Ti(i,"tns-item"),!X&&G&&Ti(i,G),Ei(i,{"aria-hidden":"true",tabindex:"-1"})}if(St){for(var a=N.createDocumentFragment(),r=N.createDocumentFragment(),o=St;o--;){var s=o%ft,l=ct[s].cloneNode(!0);if(Oi(l,"id"),r.insertBefore(l,r.firstChild),X){var u=ct[ft-1-s].cloneNode(!0);Oi(u,"id"),a.appendChild(u)}}lt.insertBefore(a,lt.firstChild),lt.appendChild(r),ct=lt.children}if(un("autoHeight")||!X||pt||!rt){var c=lt.querySelectorAll("img");Ai(c,function(t){var e=t.src;e.indexOf("data:image")<0?(Pi(t,ye),t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e):Ti(t,pe)}),vi(function(){On(function(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}(c),function(){$=!0,$t||(rt&&!pt||(Sn(),Tn(),pt&&(wt=cn("items"),Pt=qn(),ee=wn(),Qt=an(),ee&&(be=ke=$e=tn=Mt=ze=Ve=Xe=!1),gn()),rt||ci()),X&&Fn())})})}X&&rt&&!pt&&Fn();(function(){for(var t=jt,e=jt+Math.min(ft,wt);t<e;t++){var n=ct[t];Ei(n,{"aria-hidden":"false"}),Oi(n,["tabindex"]),Ti(n,me),X||(n.style.left=100*(t-jt)/wt+"%",Ti(n,Y),ki(n,G))}if(X&&rt&&(T||pt?(xi(Ot,"#"+Zt+" > .tns-item","font-size:"+m.getComputedStyle(ct[0]).fontSize+";",bi(Ot)),xi(Ot,"#"+Zt,"font-size:0;",bi(Ot))):Ai(ct,function(t,e){var n;t.style.marginLeft=(n=e,M?M+"("+100*n+"% / "+Dt+")":100*n/Dt+"%")})),E){var i=fn(h.edgePadding,h.gutter,h.fixedWidth,h.speed);xi(Ot,"#"+Zt+"-iw",i,bi(Ot)),X&&(i=rt&&!pt?"width:"+dn(h.fixedWidth,h.gutter,h.items)+";":"",B&&(i+=pn(Tt)),xi(Ot,"#"+Zt,i,bi(Ot))),i=rt&&!pt?vn(h.fixedWidth,h.gutter,h.items):"",h.gutter&&(i+=hn(h.gutter)),X||(B&&(i+=pn(Tt)),L&&(i+=yn(Tt))),i&&xi(Ot,"#"+Zt+" > .tns-item",i,bi(Ot))}else{st.style.cssText=fn(gt,xt,yt),X&&rt&&!pt&&(lt.style.width=dn(yt,xt,wt));var i=rt&&!pt?vn(yt,xt,wt):"";xt&&(i+=hn(xt)),i&&xi(Ot,"#"+Zt+" > .tns-item",i,bi(Ot))}if(dt&&E)for(var a in dt){var r=dt[a],i="",o="",s="",l="",u=pt?null:cn("items",a),c=cn("fixedWidth",a),f=cn("speed",a),d=cn("edgePadding",a),v=cn("gutter",a);("edgePadding"in r||"gutter"in r)&&(o="#"+Zt+"-iw{"+fn(d,v,c,f)+"}"),X&&rt&&!pt&&("fixedWidth"in r||"items"in r||yt&&"gutter"in r)&&(s="width:"+dn(c,v,u)+";"),B&&"speed"in r&&(s+=pn(f)),s&&(s="#"+Zt+"{"+s+"}"),("fixedWidth"in r||yt&&"gutter"in r||!X&&"items"in r)&&(l+=vn(c,v,u)),"gutter"in r&&(l+=hn(v)),!X&&"speed"in r&&(B&&(l+=pn(f)),L&&(l+=yn(f))),l&&(l="#"+Zt+" > .tns-item{"+l+"}"),(i=o+s+l)&&Ot.insertRule("@media (min-width: "+a/16+"em) {"+i+"}",Ot.cssRules.length)}})(),pt||gn();dt&&Cn()}();var en=Nt?X?function(){var t=Vt,e=Qt;t+=Ct,e-=Ct,gt?(t+=1,e-=1):yt&&bt%(yt+xt)&&(e-=1),St&&(e<jt?jt-=ft:jt<t&&(jt+=ft))}:function(){if(Qt<jt)for(;Vt+ft<=jt;)jt-=ft;else if(jt<Vt)for(;jt<=Qt-ft;)jt+=ft}:function(){jt=Math.max(Vt,Math.min(Qt,jt))},nn=X?function(){var e,n,i,a,t,r,o,s,l,u,c;B||!Tt?(Vn(),Tt&&Si(lt)||Kn()):(e=lt,n=Ht,i=zt,a=qt,t=jn(),r=Tt,o=Kn,s=Math.min(r,10),l=0<=t.indexOf("%")?"%":"px",t=t.replace(l,""),u=Number(e.style[n].replace(i,"").replace(a,"").replace(l,"")),c=(t-u)/r*s,setTimeout(function t(){r-=s,u+=c,e.style[n]=i+u+l+a,0<r?setTimeout(t,s):o()},s)),rt||ci()}:function(){It=[];var t={};t[D]=t[R]=Kn,Wi(ct[Ft],t),Pi(ct[jt],t),Qn(Ft,Y,K,!0),Qn(jt,G,Y),D&&R&&Tt&&Si(lt)||Kn()};return{getInfo:di,events:Gt,goTo:Un,play:function(){ze&&!Re&&($n(),We=!1)},pause:function(){Re&&(ti(),We=!0)},isOn:J,updateSliderHeight:Ln,rebuild:function(){return zi(h)},destroy:function(){if(Wi(m,{resize:xn}),Wi(N,oe),Ot.disabled=!0,Nt)for(var t=St;t--;)X&&ct[0].remove(),ct[ct.length-1].remove();var e=["tns-item",me];X||(e=e.concat("tns-normal",Y));for(var n=ft;n--;){var i=ct[n];0<=i.id.indexOf(Zt+"-item")&&(i.id=""),e.forEach(function(t){ki(i,t)})}if(Oi(ct,["style","aria-hidden","tabindex"]),ct=Zt=ft=Dt=St=null,be&&(Wi(Ce,ne),h.controlsContainer&&(Oi(Ce,["aria-label","tabindex"]),Oi(Ce.children,["aria-controls","aria-disabled","tabindex"])),Ce=Ae=Me=null),ke&&(Wi(Ne,ie),h.navContainer&&(Oi(Ne,["aria-label"]),Oi(Te,["aria-selected","aria-controls","tabindex"])),Ne=Te=null),ze&&(clearInterval(De),Qe&&Wi(Qe,{click:ei}),Wi(lt,ae),Wi(lt,re),h.autoplayButton&&Oi(Qe,["data-action"])),lt.id=Jt||"",lt.className=lt.className.replace(_t,""),Bi(lt),X&&D){var a={};a[D]=Kn,Wi(lt,a)}Wi(lt,se),Wi(lt,le),ut.insertBefore(lt,ot),ot.remove(),ot=st=lt=jt=Ft=wt=Ct=Ie=Le=ue=Ee=Oe=this.getInfo=this.events=this.goTo=this.play=this.pause=this.destroy=null,this.isOn=J=!1}}}function an(){if(yt||pt){if(yt)return Math.floor(-Pt/(yt+xt))+1;for(var t=Dt-1,e=t;_[t]>-Pt;)e=--t;return e}return Nt||X?Math.max(0,Dt-Math.ceil(cn("items"))):Dt-1}function rn(t){return t=t?Math.max(0,Math.min(Nt?ft-1:ft-wt,t)):0,X?t+St:t}function on(t){for(null==t&&(t=jt),X&&(t-=St);t<0;)t+=ft;return Math.floor(t%ft)}function sn(){return m.innerWidth||N.documentElement.clientWidth||N.body.clientWidth}function ln(){var t=function t(e){return e.clientWidth||t(e.parentNode)}(ut);return gt?t-(2*gt-xt):t}function un(t){if(h[t])return!0;if(dt)for(var e in dt)if(dt[e][t])return!0;return!1}function cn(t,e){e=e||ht;var n,i={slideBy:"page",edgePadding:!1};if(!X&&t in i)n=i[t];else if("items"===t&&yt)n=Math.floor(e/(yt+xt));else if("autoHeight"===t&&"outer"===mt)n=!0;else if(n=h[t],dt)for(var a in dt)a<=e&&t in dt[a]&&(n=dt[a][t]);return"slideBy"===t&&"page"===n&&(n=cn("items")),X||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function fn(t,e,n,i){var a="";if(t){var r=t;e&&(r-=e),a=rt?"margin: 0 "+r+"px 0 "+t+"px;":"margin: "+t+"px 0 "+r+"px 0;"}else if(e&&!n){var o="-"+e+"px";a="margin: 0 "+(rt?o+" 0 0":"0 "+o+" 0")+";"}return B&&i&&(a+=pn(i)),a}function dn(t,e,n){return t?(t+e)*Dt+"px":M?M+"("+100*Dt+"% / "+n+")":100*Dt/n+"%"}function vn(t,e,n){var i;if(t)i=t+e+"px";else{X||(n=Math.floor(n));var a=X?Dt:n;i=M?M+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==mt?i+";":i+" !important;"}function hn(t){var e="";!1!==t&&(e=(rt?"padding-":"margin-")+(rt?"right":"bottom")+": "+t+"px;");return e}function mn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function pn(t){return mn(B,18)+"transition-duration:"+t/1e3+"s;"}function yn(t){return mn(L,17)+"animation-duration:"+t/1e3+"s;"}function gn(){if(de){var t=ze?"stop":"start";Qe?Ei(Qe,{"data-action":t}):h.autoplayButtonOutput&&(ot.insertAdjacentHTML("afterbegin",'<button data-action="'+t+'" type="button">'+Ye[0]+t+Ye[1]+Fe[0]+"</button>"),Qe=ot.querySelector("[data-action]")),Qe&&Pi(Qe,{click:ei}),ze?($n(),Ve&&Pi(lt,ae),Xe&&Pi(lt,re)):Qe&&Ii(Qe)}if(ce){var e=X?St:0;if(Ne){Ei(Ne,{"aria-label":"Carousel Pagination"}),Te=Ne.children;for(var n=0;n<ft;n++){var i=Te[n];i&&Ei(i,{"data-nav":n,tabindex:"-1","aria-selected":"false","aria-controls":ct[e+n].id})}}else{var a="",r=fe?"":"hidden";for(n=0;n<ft;n++)a+='<button data-nav="'+n+'" tabindex="-1" aria-selected="false" aria-controls="'+ct[e+n].id+'" '+r+' type="button"></button>';a='<div class="tns-nav" aria-label="Carousel Pagination">'+a+"</div>",ot.insertAdjacentHTML("afterbegin",a),Ne=ot.querySelector(".tns-nav"),Te=Ne.children}if(fi(),B){var o=B.substring(0,B.length-18).toLowerCase(),s="transition: all "+Tt/1e3+"s";o&&(s="-"+o+"-"+s),xi(Ot,"[aria-controls^="+Zt+"-item]",s,bi(Ot))}Ei(Te[Ie],{tabindex:"0","aria-selected":"true"}),Ti(Te[Ie],Se),Pi(Ne,ie),ke||Ii(Ne)}ue&&(Ce||Ae&&Me?(Ce&&(Ae=Ce.children[0],Me=Ce.children[1],Ei(Ce,{"aria-label":"Carousel Navigation",tabindex:"0"}),Ei(Ce.children,{"aria-controls":Zt,tabindex:"-1"})),Ei(Ae,{"data-controls":"prev"}),Ei(Me,{"data-controls":"next"})):(ot.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+Zt+'" type="button">'+we[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+Zt+'" type="button">'+we[1]+"</button></div>"),Ce=ot.querySelector(".tns-controls"),Ae=Ce.children[0],Me=Ce.children[1]),ge=Rn(Ae),xe=Rn(Me),Hn(),Ce?Pi(Ce,ne):(Pi(Ae,ne),Pi(Me,ne)),be||Ii(Ce)),$e&&Pi(lt,se),tn&&Pi(lt,le),Mt&&Pi(N,oe),"inner"===mt?Gt.on("outerResized",function(){bn(),Gt.emit("innerLoaded",di())}):Pi(m,{resize:xn}),"outer"===mt?Gt.on("innerLoaded",En):!Et&&X||$t||En(),pt||Tn(),An(),Gt.on("indexChanged",Bn),"function"==typeof Ut&&Ut(di()),"inner"===mt&&Gt.emit("innerLoaded",di()),$t&&Mn(!0),J=!0}function xn(t){vi(function(){bn(ii(t))})}function bn(t){if(J){ht=sn(),"outer"===mt&&Gt.emit("outerResized",di(t));var e,n,i=vt,a=gt,r=xt,o=jt,s=wt,l=ee,u=!1;if(gt=cn("edgePadding"),xt=cn("gutter"),bt=ln(),dt&&Cn(),i!==vt&&Gt.emit("newBreakpointStart",di(t)),rt&&!pt||$t||(Sn(),rt||(ci(),u=!0)),(yt||pt)&&(Pt=qn(),Qt=an()),i!==vt||yt||pt){var c=Mt,f=Et,d=yt,v=$t;if(wt=cn("items"),Ct=cn("slideBy"),$t=cn("disable"),Rt&&(u=!0),ee=wn(),wt!==s&&(yt||pt||(Qt=an()),en()),$t!==v&&Mn($t),ee!==l&&(ee?Vn(jn(rn(0))):u=!0,An()),i!==vt&&(Tt=cn("speed"),yt=cn("fixedWidth"),$t||yt===d||(u=!0),(Et=cn("autoHeight"))!==f&&(Et||(st.style.height=""))),(Mt=!ee&&cn("arrowKeys"))!==c&&(Mt?Pi(N,oe):Wi(N,oe)),ue){var h=be,m=we;be=!ee&&cn("controls"),we=cn("controlsText"),be!==h&&(be?Li(Ce):Ii(Ce)),we!==m&&(Ae.innerHTML=we[0],Me.innerHTML=we[1])}if(ce){var p=ke;(ke=!ee&&cn("nav"))!==p&&(ke?(Li(Ne),fi()):Ii(Ne))}if(ve){var y=$e;($e=!ee&&cn("touch"))!==y&&X&&($e?Pi(lt,se):Wi(lt,se))}if(he){var g=tn;(tn=!ee&&cn("mouseDrag"))!==g&&X&&(tn?Pi(lt,le):Wi(lt,le))}if(de){var x=ze,b=Ve,w=Xe,C=Fe;if(ee?ze=Ve=Xe=!1:(ze=cn("autoplay"))?(Ve=cn("autoplayHoverPause"),Xe=cn("autoplayResetOnVisibility")):Ve=Xe=!1,Fe=cn("autoplayText"),qe=cn("autoplayTimeout"),ze!==x&&(ze?(Qe&&Li(Qe),Re||We||$n()):(Qe&&Ii(Qe),Re&&ti())),Ve!==b&&(Ve?Pi(lt,ae):Wi(lt,ae)),Xe!==w&&(Xe?Pi(N,re):Wi(N,re)),Qe&&Fe!==C){var A=ze?1:0,M=Qe.innerHTML,T=M.length-C[A].length;M.substring(T)===C[A]&&(Qe.innerHTML=M.substring(0,T)+Fe[A])}}if(!E){if(ee||gt===a&&xt===r||(st.style.cssText=fn(gt,xt,yt)),rt&&!yt){X&&(lt.style.width=dn(!1,null,wt));var k=vn(yt,xt,wt)+hn(xt);n=bi(e=Ot)-1,"deleteRule"in e?e.deleteRule(n):e.removeRule(n),xi(Ot,"#"+Zt+" > .tns-item",k,bi(Ot))}yt||(u=!0)}jt!==o&&(Gt.emit("indexChanged",di()),u=!0),(wt!==s||pt)&&(Bn(),function(){if(!X){for(var t=jt+Math.min(ft,wt),e=Dt;e--;){var n=ct[e];jt<=e&&e<t?(Ti(n,"tns-moving"),n.style.left=100*(e-jt)/wt+"%",Ti(n,Y),ki(n,G)):n.style.left&&(n.style.left="",Ti(n,G),ki(n,Y)),ki(n,K)}setTimeout(function(){Ai(ct,function(t){ki(t,"tns-moving")})},300)}}(),navigator.msMaxTouchPoints&&setSnapInterval())}u&&(Fn(),Ft=jt),!Et&&X||$t||En(),i!==vt&&Gt.emit("newBreakpointEnd",di(t))}}function wn(){return!!$t||!!te&&(yt||pt?Nt?(yt?(yt+xt)*ft:_[ft])-xt<=bt:!Pt:ft<=wt)}function Cn(){var t=vt=0;for(var e in dt)e<=ht&&(vt=t+1),t++}function An(){var t="tns-transparent";if(ee){if(!Z){if(gt&&(st.style.margin="0px"),St)for(var e=St;e--;)X&&Ti(ct[e],t),Ti(ct[Dt-e-1],t);Z=!0}}else if(Z){if(gt&&E&&(st.style.margin=""),St)for(e=St;e--;)X&&ki(ct[e],t),ki(ct[Dt-e-1],t);Z=!1}}function Mn(t){var e=ct.length;if(t){if(Ot.disabled=!0,lt.className=lt.className.replace(_t.substring(1),""),Bi(lt),Nt)for(var n=St;n--;)X&&Ii(ct[n]),Ii(ct[e-n-1]);if(rt&&X||Bi(st),!X)for(var i=jt,a=jt+ft;i<a;i++){Bi(r=ct[i]),ki(r,Y),ki(r,G)}}else{if(Ot.disabled=!1,lt.className+=_t,rt&&!pt||(Sn(),pt&&(Pt=qn(),Qt=an())),Fn(),Nt)for(n=St;n--;)X&&Li(ct[n]),Li(ct[e-n-1]);if(!X)for(i=jt,a=jt+ft;i<a;i++){var r=ct[i],o=i<jt+wt?Y:G;r.style.left=100*(i-jt)/wt+"%",Ti(r,o)}}}function Tn(){if(Bt&&!$t){var t=jt;if(pt)for(var e=jt+1,n=e,i=_[jt]+bt+gt-xt;_[e]<i;)n=++e;else n=jt+wt;for(gt&&(t-=1,pt||(n+=1)),t=Math.floor(Math.max(t,0)),n=Math.ceil(Math.min(n,Dt));t<n;t++)Ai(ct[t].querySelectorAll(".tns-lazy-img"),function(t){var e,n={};n[D]=function(t){t.stopPropagation()},Pi(t,n),Mi(t,"loaded")||(t.src=(e="data-src",t.getAttribute(e)),Ti(t,"loaded"))})}}function kn(t){var e=ai(t);Ti(e,pe),Wi(e,ye)}function Nn(t,e){for(var n=[],i=t,a=Math.min(t+e,Dt);i<a;i++)Ai(ct[i].querySelectorAll("img"),function(t){n.push(t)});return n}function En(){var t=Et?Nn(jt,wt):Nn(St,ft);vi(function(){On(t,Ln)})}function On(n,t){return $?t():(n.forEach(function(t,e){Mi(t,pe)&&n.splice(e,1)}),n.length?void vi(function(){On(n,t)}):t())}function Bn(){Tn(),function(){for(var t=jt+Math.min(ft,wt),e=Dt;e--;){var n=ct[e];jt<=e&&e<t?Ni(n,"tabindex")&&(Ei(n,{"aria-hidden":"false"}),Oi(n,["tabindex"]),Ti(n,me)):(Ni(n,"tabindex")||Ei(n,{"aria-hidden":"true",tabindex:"-1"}),Mi(n,me)&&ki(n,me))}}(),Hn(),fi(),function(){if(ke&&(Ie=-1!==Be?Be:on(),Be=-1,Ie!==Le)){var t=Te[Le],e=Te[Ie];Ei(t,{tabindex:"-1","aria-selected":"false"}),Ei(e,{tabindex:"0","aria-selected":"true"}),ki(t,Se),Ti(e,Se),Le=Ie}}()}function In(t,e){for(var n=[],i=t,a=Math.min(t+e,Dt);i<a;i++)n.push(ct[i].offsetHeight);return Math.max.apply(null,n)}function Ln(){var t=Et?In(jt,wt):In(St,ft);st.style.height!==t&&(st.style.height=t+"px")}function Sn(){_=[0];for(var t,e=rt?"left":"top",n=ct[0].getBoundingClientRect()[e],i=1;i<Dt;i++)t=ct[i].getBoundingClientRect()[e],_.push(t-n)}function Dn(t){return t.nodeName.toLowerCase()}function Rn(t){return"button"===Dn(t)}function Pn(t){return"true"===t.getAttribute("aria-disabled")}function Wn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Hn(){if(be&&!kt&&!Nt){var t=ge?Ae.disabled:Pn(Ae),e=xe?Me.disabled:Pn(Me),n=jt<=Vt,i=!kt&&Qt<=jt;n&&!t&&Wn(ge,Ae,!0),!n&&t&&Wn(ge,Ae,!1),i&&!e&&Wn(xe,Me,!0),!i&&e&&Wn(xe,Me,!1)}}function zn(t,e){B&&(t.style[B]=e)}function qn(){var t=-((yt?(yt+xt)*Dt-xt:_[Dt-1]+ct[Dt-1].getBoundingClientRect().width-xt)-bt);return 0<t&&(t=0),t}function jn(t){var e;(null==t&&(t=jt),rt&&!pt)?e=yt?-(yt+xt)*t:100*-t/(k?Dt:wt):e=-_[t];return Rt&&(e=Math.max(e,Pt)),e+=!rt||pt||yt?"px":"%"}function Fn(t){zn(lt,"0s"),Vn(t),setTimeout(function(){zn(lt,"")},10)}function Vn(t){null==t&&(t=jn()),lt.style[Ht]=zt+t+qt}function Qn(t,e,n,i){var a=t+wt;Nt||(a=Math.min(a,Dt));for(var r=t;r<a;r++){var o=ct[r];i||(o.style.left=100*(r-jt)/wt+"%"),U&&I&&(o.style[I]=o.style[S]=U*(r-t)/1e3+"s"),ki(o,e),Ti(o,n),i&&It.push(o)}}function Xn(t,e){Wt&&en(),(jt!==Ft||e)&&(Gt.emit("indexChanged",di()),Gt.emit("transitionStart",di()),Re&&t&&0<=["click","keydown"].indexOf(t.type)&&ti(),Kt=!0,nn())}function Yn(t){return t.toLowerCase().replace(/-/g,"")}function Kn(t){if(X||Kt){if(Gt.emit("transitionEnd",di(t)),!X&&0<It.length)for(var e=0;e<It.length;e++){var n=It[e];n.style.left="",S&&I&&(n.style[S]="",n.style[I]=""),ki(n,K),Ti(n,G)}if(!t||!X&&t.target.parentNode===lt||t.target===lt&&Yn(t.propertyName)===Yn(Ht)){if(!Wt){var i=jt;en(),jt!==i&&(Gt.emit("indexChanged",di()),Fn())}Et&&En(),"inner"===mt&&Gt.emit("innerLoaded",di()),Kt=!1,Ft=jt}}}function Un(t,e){if(!ee)if("prev"===t)Gn(e,-1);else if("next"===t)Gn(e,1);else{Kt&&Kn();var n=on(),i=0;if("first"===t?i=-n:"last"===t?i=X?ft-wt-n:ft-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(ft-1,t))),i=t-n)),!X&&i&&Math.abs(i)<wt){var a=0<i?1:-1;i+=Vt<=jt+i-ft?ft*a:2*ft*a*-1}jt+=i,X&&Nt&&(jt<Vt&&(jt+=ft),Qt<jt&&(jt-=ft)),on(jt)!==on(Ft)&&Xn(e)}}function Gn(t,e){var n;if(Kt&&Kn(),!e){for(var i=(t=ii(t)).target||t.srcElement;i!==Ce&&[Ae,Me].indexOf(i)<0;)i=i.parentNode;var a=[Ae,Me].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(kt){if(jt===Vt&&-1===e)return void Un("last",t);if(jt===Qt&&1===e)return void Un("first",t)}e&&(jt+=Ct*e,pt&&(jt=Math.floor(jt)),Xn(n||t&&"keydown"===t.type?t:null))}function Jn(){De=setInterval(function(){Gn(null,je)},qe),Re=!0}function _n(){clearInterval(De),Re=!1}function Zn(t,e){Ei(Qe,{"data-action":t}),Qe.innerHTML=Ye[0]+t+Ye[1]+e}function $n(){Jn(),Qe&&Zn("stop",Fe[1])}function ti(){_n(),Qe&&Zn("start",Fe[0])}function ei(){Re?(ti(),We=!0):($n(),We=!1)}function ni(t){t.focus()}function ii(t){return ri(t=t||m.event)?t.changedTouches[0]:t}function ai(t){return t.target||m.event.srcElement}function ri(t){return 0<=t.type.indexOf("touch")}function oi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function si(t){Kt&&Kn(),Je=!0,X&&(hi(_e),_e=0);var e=ii(t);Gt.emit(ri(t)?"touchStart":"dragStart",di(t)),!ri(t)&&0<=["img","a"].indexOf(Dn(ai(t)))&&oi(t),Ge.x=Ue.x=parseInt(e.clientX),Ge.y=Ue.y=parseInt(e.clientY),X&&(Ke=parseFloat(lt.style[Ht].replace(zt,"").replace(qt,"")),zn(lt,"0s"))}function li(t){if(Je){var e=ii(t);Ge.x=parseInt(e.clientX),Ge.y=parseInt(e.clientY),X&&!_e&&(_e=vi(function(){!function t(e){if(!Yt)return void(Je=!1);hi(_e);Je&&(_e=vi(function(){t(e)}));"?"===Yt&&Ge.x!==Ue.x&&Ge.y!==Ue.y&&(Yt=Ci(wi(Ge.y-Ue.y,Ge.x-Ue.x),Xt)===h.axis);if(Yt){try{e.type&&Gt.emit(ri(e)?"touchMove":"dragMove",di(e))}catch(t){}var n=Ke,i=Ze(Ge,Ue);if(!rt||yt||pt)n+=i,n+="px";else{var a=k?i*wt*100/(bt*Dt):100*i/bt;n+=a,n+="%"}lt.style[Ht]=zt+n+qt}}(t)}))}}function ui(i){if(Xt&&(Yt="?"),Je){X&&(hi(_e),zn(lt,"")),Je=!1;var t=ii(i);Ge.x=parseInt(t.clientX),Ge.y=parseInt(t.clientY);var a=Ze(Ge,Ue);if(5<=Math.abs(a)){if(!ri(i)){var n=ai(i);Pi(n,{click:function t(e){oi(e),Wi(n,{click:t})}})}X?_e=vi(function(){if(rt&&!pt){var t=-a*wt/bt;t=0<a?Math.floor(t):Math.ceil(t),jt+=t}else{var e=-(Ke+a);if(e<=0)jt=Vt;else if(e>=_[_.length-1])jt=Qt;else for(var n=0;n<Dt&&e>=_[n];)e>_[jt=n]&&a<0&&(jt+=1),n++}Xn(i,a),Gt.emit(ri(i)?"touchEnd":"dragEnd",di(i))}):("?"===Yt&&Ge.x!==Ue.x&&Ge.y!==Ue.y&&(Yt=Ci(wi(Ge.y-Ue.y,Ge.x-Ue.x),Xt)===h.axis),Yt&&Gn(i,0<a?-1:1))}}}function ci(){st.style.height=_[jt+wt]-_[jt]+"px"}function fi(){ke&&!fe&&(!function(){Ee=[];for(var t=on()%wt;t<ft;)X&&!Nt&&ft<t+wt&&(t=ft-wt),Ee.push(t),t+=wt;(Nt&&Ee.length*wt<ft||!Nt&&0<Ee[0])&&Ee.unshift(0)}(),Ee!==Oe&&(Ai(Te,function(t,e){Ee.indexOf(e)<0?Ii(t):Li(t)}),Oe=Ee))}function di(t){return{container:lt,slideItems:ct,navContainer:Ne,navItems:Te,controlsContainer:Ce,hasControls:ue,prevButton:Ae,nextButton:Me,items:wt,slideBy:Ct,cloneCount:St,slideCount:ft,slideCountNew:Dt,index:jt,indexCached:Ft,navCurrentIndex:Ie,navCurrentIndexCached:Le,visibleNavIndexes:Ee,visibleNavIndexesCached:Oe,sheet:Ot,event:t||{}}}P&&console.warn("No slides found in",h.container)};return zi}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
