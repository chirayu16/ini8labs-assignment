import './polyfills.server.mjs';
import{a as Ae,b as Me,c as Fe,d as Oe,e as Ne,h as Le,n as je}from"./chunk-ZD2WPAUP.mjs";import{Aa as y,Ba as j,Ca as C,Da as _,E as ge,F as ve,H as ye,J as be,K as c,L as l,Ma as xe,N as M,P as a,Q as x,T as p,U as d,Ua as Se,W as we,Ya as T,c as he,da as g,db as Te,f as ue,fa as w,ja as Ce,ka as K,la as De,n as Z,o as fe,q as me,qa as S,ra as Ie,sa as ke,ta as Re,v as pe,wa as Ee,x as _e,za as v}from"./chunk-W6UU6YKC.mjs";import{a as E}from"./chunk-5XUXGTUW.mjs";var A=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=d({type:i})}static{this.\u0275inj=l({})}}return i})();var Y;try{Y=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Y=!1}var N=(()=>{class i{constructor(e){this._platformId=e,this.isBrowser=this._platformId?Te(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||Y)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static{this.\u0275fac=function(n){return new(n||i)(a(Ce))}}static{this.\u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var O;function Dt(){if(O==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>O=!0}))}finally{O=O||!1}return O}function G(i){return Dt()?i:!!i.capture}function Pe(i){return i.composedPath?i.composedPath()[0]:i.target}function Be(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function Q(i){return Array.isArray(i)?i:[i]}function q(i){return i instanceof w?i.nativeElement:i}var Ve=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=d({type:i})}static{this.\u0275inj=l({})}}return i})(),Ge=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=d({type:i})}static{this.\u0275inj=l({imports:[A,Ve,A,Ve]})}}return i})();var et=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=d({type:i})}static{this.\u0275inj=l({imports:[Ge]})}}return i})();var tt=new Set,D,Tt=(()=>{class i{constructor(e,n){this._platform=e,this._nonce=n,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Mt}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&At(e,this._nonce),this._matchMedia(e)}static{this.\u0275fac=function(n){return new(n||i)(a(N),a(De,8))}}static{this.\u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function At(i,t){if(!tt.has(i))try{D||(D=document.createElement("style"),t&&D.setAttribute("nonce",t),D.setAttribute("type","text/css"),document.head.appendChild(D)),D.sheet&&(D.sheet.insertRule(`@media ${i} {body{ }}`,0),tt.add(i))}catch(e){console.error(e)}}function Mt(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var nt=(()=>{class i{constructor(e,n){this._mediaMatcher=e,this._zone=n,this._queries=new Map,this._destroySubject=new ue}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return it(Q(e)).some(s=>this._registerQuery(s).mql.matches)}observe(e){let s=it(Q(e)).map(o=>this._registerQuery(o).observable),r=fe(s);return r=me(r.pipe(_e(1)),r.pipe(ge(1),pe(0))),r.pipe(Z(o=>{let m={matches:!1,breakpoints:{}};return o.forEach(({matches:k,query:R})=>{m.matches=m.matches||k,m.breakpoints[R]=k}),m}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),r={observable:new he(o=>{let m=k=>this._zone.run(()=>o.next(k));return n.addListener(m),()=>{n.removeListener(m)}}).pipe(ve(n),Z(({matches:o})=>({query:e,matches:o})),ye(this._destroySubject)),mql:n};return this._queries.set(e,r),r}static{this.\u0275fac=function(n){return new(n||i)(a(Tt),a(g))}}static{this.\u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function it(i){return i.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}function ot(i){return i.buttons===0||i.detail===0}function at(i){let t=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var I=function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i}(I||{}),st="cdk-high-contrast-black-on-white",rt="cdk-high-contrast-white-on-black",ie="cdk-high-contrast-active",ct=(()=>{class i{constructor(e,n){this._platform=e,this._document=n,this._breakpointSubscription=x(nt).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return I.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let n=this._document.defaultView||window,s=n&&n.getComputedStyle?n.getComputedStyle(e):null,r=(s&&s.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return I.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return I.BLACK_ON_WHITE}return I.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(ie,st,rt),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===I.BLACK_ON_WHITE?e.add(ie,st):n===I.WHITE_ON_BLACK&&e.add(ie,rt)}}static{this.\u0275fac=function(n){return new(n||i)(a(N),a(T))}}static{this.\u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function Lt(){return!0}var jt=new M("mat-sanity-checks",{providedIn:"root",factory:Lt}),re=(()=>{class i{constructor(e,n,s){this._sanityChecks=n,this._document=s,this._hasDoneGlobalChecks=!1,e._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(e){return Be()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[e]}static{this.\u0275fac=function(n){return new(n||i)(a(ct),a(jt,8),a(T))}}static{this.\u0275mod=d({type:i})}static{this.\u0275inj=l({imports:[A,A]})}}return i})();var f=function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i}(f||{}),ne=class{constructor(t,e,n,s=!1){this._renderer=t,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=s,this.state=f.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},lt=G({passive:!0,capture:!0}),se=class{constructor(){this._events=new Map,this._delegateEventHandler=t=>{let e=Pe(t);e&&this._events.get(t.type)?.forEach((n,s)=>{(s===e||s.contains(e))&&n.forEach(r=>r.handleEvent(t))})}}addHandler(t,e,n,s){let r=this._events.get(e);if(r){let o=r.get(n);o?o.add(s):r.set(n,new Set([s]))}else this._events.set(e,new Map([[n,new Set([s])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,lt)})}removeHandler(t,e,n){let s=this._events.get(t);if(!s)return;let r=s.get(e);r&&(r.delete(n),r.size===0&&s.delete(e),s.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,lt)))}},dt={enterDuration:225,exitDuration:150},Pt=800,ht=G({passive:!0,capture:!0}),ut=["mousedown","touchstart"],ft=["mouseup","mouseleave","touchend","touchcancel"],mt=class i{static{this._eventManager=new se}constructor(t,e,n,s){this._target=t,this._ngZone=e,this._platform=s,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,s.isBrowser&&(this._containerElement=q(n))}fadeInRipple(t,e,n={}){let s=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=E(E({},dt),n.animation);n.centered&&(t=s.left+s.width/2,e=s.top+s.height/2);let o=n.radius||Bt(t,e,s),m=t-s.left,k=e-s.top,R=r.enterDuration,h=document.createElement("div");h.classList.add("mat-ripple-element"),h.style.left=`${m-o}px`,h.style.top=`${k-o}px`,h.style.height=`${o*2}px`,h.style.width=`${o*2}px`,n.color!=null&&(h.style.backgroundColor=n.color),h.style.transitionDuration=`${R}ms`,this._containerElement.appendChild(h);let ae=window.getComputedStyle(h),wt=ae.transitionProperty,ce=ae.transitionDuration,W=wt==="none"||ce==="0s"||ce==="0s, 0s"||s.width===0&&s.height===0,b=new ne(this,h,n,W);h.style.transform="scale3d(1, 1, 1)",b.state=f.FADING_IN,n.persistent||(this._mostRecentTransientRipple=b);let L=null;return!W&&(R||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let le=()=>{L&&(L.fallbackTimer=null),clearTimeout(de),this._finishRippleTransition(b)},$=()=>this._destroyRipple(b),de=setTimeout($,R+100);h.addEventListener("transitionend",le),h.addEventListener("transitioncancel",$),L={onTransitionEnd:le,onTransitionCancel:$,fallbackTimer:de}}),this._activeRipples.set(b,L),(W||!R)&&this._finishRippleTransition(b),b}fadeOutRipple(t){if(t.state===f.FADING_OUT||t.state===f.HIDDEN)return;let e=t.element,n=E(E({},dt),t.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",t.state=f.FADING_OUT,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let e=q(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,ut.forEach(n=>{i._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ft.forEach(e=>{this._triggerElement.addEventListener(e,this,ht)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===f.FADING_IN?this._startFadeOutTransition(t):t.state===f.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let e=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=f.VISIBLE,!n&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=f.HIDDEN,e!==null&&(t.element.removeEventListener("transitionend",e.onTransitionEnd),t.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),t.element.remove()}_onMousedown(t){let e=ot(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Pt;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!at(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=t.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let e=t.state===f.VISIBLE||t.config.terminateOnPointerUp&&t.state===f.FADING_IN;!t.config.persistent&&e&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(ut.forEach(e=>i._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(ft.forEach(e=>t.removeEventListener(e,this,ht)),this._pointerUpEventsRegistered=!1))}};function Bt(i,t,e){let n=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),s=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(n*n+s*s)}var pt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=d({type:i})}static{this.\u0275inj=l({imports:[re,et,re]})}}return i})();var z=class i{constructor(t){this.http=t}apiUrl="http://localhost:5000/api/users";getUsers(){return this.http.get(`${this.apiUrl}/users`)}addUser(t){return this.http.post(this.apiUrl,t)}updateUser(t){return this.http.put(`${this.apiUrl}/${t.id}`,t)}deleteUser(t){return this.http.delete(`${this.apiUrl}/${t.id}`)}static \u0275fac=function(e){return new(e||i)(a(Ae))};static \u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})};var V=class i{constructor(t){this.userService=t}users=[];ngOnInit(){this.userService.getUsers().subscribe(t=>{this.users=t,console.log(this.users)})}static \u0275fac=function(e){return new(e||i)(S(z))};static \u0275cmp=p({type:i,selectors:[["app-user-list"]],standalone:!0,features:[_],decls:2,vars:0,template:function(e,n){e&1&&(v(0,"p"),C(1,"user-list works!"),y())},dependencies:[pt]})};var H=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-user-form"]],standalone:!0,features:[_],decls:2,vars:0,template:function(e,n){e&1&&(v(0,"p"),C(1,"user-form works!"),y())}})};var U=class i{title="user-app";static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-root"]],standalone:!0,features:[_],decls:2,vars:0,template:function(e,n){e&1&&j(0,"app-user-form")(1,"app-user-list")},dependencies:[H,V]})};var gt=[];var Vt="@",Ht=(()=>{class i{constructor(e,n,s,r,o){this.doc=e,this.delegate=n,this.zone=s,this.animationType=r,this.moduleImpl=o,this._rendererFactoryPromise=null,this.scheduler=x(ke,{optional:!0}),this.loadingSchedulerFn=x(Ut,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-LAPEZY6X.mjs").then(s=>s),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(s=>{throw new be(5300,!1)}).then(({\u0275createEngine:s,\u0275AnimationRendererFactory:r})=>{this._engine=s(this.animationType,this.doc);let o=new r(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(e,n){let s=this.delegate.createRenderer(e,n);if(s.\u0275type===0)return s;typeof s.throwOnSyntheticProps=="boolean"&&(s.throwOnSyntheticProps=!1);let r=new oe(s);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let m=o.createRenderer(e,n);r.use(m),this.scheduler?.notify(10)}).catch(o=>{r.use(s)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(n){Ie()}}static{this.\u0275prov=c({token:i,factory:i.\u0275fac})}}return i})(),oe=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,n,s){this.delegate.insertBefore(t,e,n,s)}removeChild(t,e,n){this.delegate.removeChild(t,e,n)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,s){this.delegate.setAttribute(t,e,n,s)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,s){this.delegate.setStyle(t,e,n,s)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){this.shouldReplay(e)&&this.replay.push(s=>s.setProperty(t,e,n)),this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n){return this.shouldReplay(e)&&this.replay.push(s=>s.listen(t,e,n)),this.delegate.listen(t,e,n)}shouldReplay(t){return this.replay!==null&&t.startsWith(Vt)}},Ut=new M("");function vt(i="animations"){return Ee("NgAsyncAnimations"),we([{provide:Re,useFactory:(t,e,n)=>new Ht(t,e,n,i),deps:[T,Fe,g]},{provide:K,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var yt={providers:[xe({eventCoalescing:!0}),je(gt),Ne(),vt(),Me()]};var Wt={providers:[Le()]},bt=Se(yt,Wt);var $t=()=>Oe(U,bt),ds=$t;export{ds as a};