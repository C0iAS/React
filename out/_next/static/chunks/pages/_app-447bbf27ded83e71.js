(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1243)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9361).Z,i=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,c=e.unoptimized,l=void 0!==c&&c,h=e.priority,m=void 0!==h&&h,j=e.loading,S=e.lazyRoot,C=void 0===S?null:S,I=e.lazyBoundary,z=e.className,k=e.quality,E=e.width,L=e.height,R=e.style,N=e.objectFit,P=e.objectPosition,B=e.onLoadingComplete,U=e.placeholder,T=void 0===U?"empty":U,H=e.blurDataURL,Z=s(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),D=u.useContext(g.ImageConfigContext),q=u.useMemo((function(){var e=y||D||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:n})}),[D]),F=Z,V=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(V=F.layout),delete F.layout);var G=O;if("loader"in F){if(F.loader){var W=F.loader;G=function(e){e.config;var t=s(e,["config"]);return W(t)}}delete F.loader}var X="";if(function(e){return"object"===typeof e&&(_(e)||function(e){return void 0!==e.src}(e))}(t)){var K=_(t)?t.default:t;if(!K.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(H=H||K.blurDataURL,X=K.src,(!V||"fill"!==V)&&(L=L||K.height,E=E||K.width,!K.height||!K.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}var J=!m&&("lazy"===j||"undefined"===typeof j);((t="string"===typeof t?t:X).startsWith("data:")||t.startsWith("blob:"))&&(l=!0,J=!1);b.has(t)&&(J=!1);v&&(l=!0);var Y,Q=i(u.useState(!1),2),$=Q[0],ee=Q[1],te=i(p.useIntersection({rootRef:C,rootMargin:I||"200px",disabled:!J}),3),ne=te[0],re=te[1],ie=te[2],oe=!J||re,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le=!1,se={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:N,objectPosition:P},ue=A(E),de=A(L),fe=A(k);0;var pe=Object.assign({},R,se),ge="blur"!==T||$?{}:{backgroundSize:N||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(H,'")')};if("fill"===V)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof ue&&"undefined"!==typeof de){var he=de/ue,me=isNaN(he)?"100%":"".concat(100*he,"%");"responsive"===V?(ae.display="block",ae.position="relative",le=!0,ce.paddingTop=me):"intrinsic"===V?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",le=!0,ce.maxWidth="100%",Y="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ue,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===V&&(ae.display="inline-block",ae.position="relative",ae.width=ue,ae.height=de)}else 0;var ve={src:x,srcSet:void 0,sizes:void 0};oe&&(ve=w({config:q,src:t,unoptimized:l,layout:V,width:ue,quality:fe,sizes:n,loader:G}));var ye=t;0;var be,xe="imagesrcset",je="imagesizes";xe="imageSrcSet",je="imageSizes";var _e=(r(be={},xe,ve.srcSet),r(be,je,ve.sizes),be),we=u.default.useLayoutEffect,Ae=u.useRef(B),Oe=u.useRef(t);u.useEffect((function(){Ae.current=B}),[B]),we((function(){Oe.current!==t&&(ie(),Oe.current=t)}),[ie,t]);var Se=a({isLazy:J,imgAttributes:ve,heightInt:de,widthInt:ue,qualityInt:fe,layout:V,className:z,imgStyle:pe,blurStyle:ge,loading:j,config:q,unoptimized:l,placeholder:T,loader:G,srcString:ye,onLoadingCompleteRef:Ae,setBlurComplete:ee,setIntersection:ne,isVisible:oe,noscriptSizes:n},F);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:ae},le?u.default.createElement("span",{style:ce},Y?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Y}):null):null,u.default.createElement(M,Object.assign({},Se))),m?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+ve.src+ve.srcSet+ve.sizes,rel:"preload",as:"image",href:ve.srcSet?void 0:ve.src},_e))):null)};var a=n(6495).Z,c=n(2648).Z,l=n(1598).Z,s=n(7273).Z,u=l(n(7294)),d=c(n(5443)),f=n(9309),p=n(7190),g=n(9977),h=(n(3794),n(2392));var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1}||{},v=m.experimentalUnoptimized,y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1},b=new Set,x=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var j=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(C(n))),a=o.searchParams;a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(C(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(C(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function _(e){return void 0!==e.default}function w(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,a=e.width,c=e.quality,l=e.sizes,s=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,r){var i=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var c,l=/(^|\s)(1?\d?\d)vw/g,s=[];c=l.exec(r);c)s.push(parseInt(c[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,o(s));return{widths:a.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,i,l),d=u.widths,f=u.kind,p=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(e,r){return"".concat(s({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:s({config:t,src:n,quality:c,width:d[p]})}}function A(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function O(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=j.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function S(e,t,n,r,i,o){e&&e.src!==x&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===r&&o(!0),null==i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var M=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,i=e.layout,o=e.className,c=e.imgStyle,l=e.blurStyle,d=e.isLazy,f=e.placeholder,p=e.loading,g=e.srcString,h=e.config,m=e.unoptimized,v=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,x=e.setIntersection,j=e.onLoad,_=e.onError,A=(e.isVisible,e.noscriptSizes),O=s(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return p=d?"lazy":p,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},O,t,{decoding:"async","data-nimg":i,className:o,style:a({},c,l),ref:u.useCallback((function(e){x(e),(null==e?void 0:e.complete)&&S(e,g,0,f,y,b)}),[x,g,i,f,y,b]),onLoad:function(e){S(e.currentTarget,g,0,f,y,b),j&&j(e)},onError:function(e){"blur"===f&&b(!0),_&&_(e)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},O,w({config:h,src:g,unoptimized:m,layout:i,width:n,quality:r,sizes:A,loader:v}),{decoding:"async","data-nimg":i,style:c,className:o,loading:p}))))};function C(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(2648).Z,o=n(7273).Z,a=i(n(7294)),c=n(6273),l=n(2725),s=n(3462),u=n(1018),d=n(7190),f=n(1210),p=n(8684),g="undefined"!==typeof a.default.useTransition,h={};function m(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;h[t+"%"+n+(i?"%"+i:"")]=!0}}var v=a.default.forwardRef((function(e,t){var n,i=e.href,v=e.as,y=e.children,b=e.prefetch,x=e.passHref,j=e.replace,_=e.soft,w=e.shallow,A=e.scroll,O=e.locale,S=e.onClick,M=e.onMouseEnter,C=e.onTouchStart,I=e.legacyBehavior,z=void 0===I?!0!==Boolean(!1):I,k=o(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=y,!z||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var E=!1!==b,L=r(g?a.default.useTransition():[],2)[1],R=a.default.useContext(s.RouterContext),N=a.default.useContext(u.AppRouterContext);N&&(R=N);var P,B=a.default.useMemo((function(){var e=r(c.resolveHref(R,i,!0),2),t=e[0],n=e[1];return{href:t,as:v?c.resolveHref(R,v):n||t}}),[R,i,v]),U=B.href,T=B.as,H=a.default.useRef(U),Z=a.default.useRef(T);z&&(P=a.default.Children.only(n));var D=z?P&&"object"===typeof P&&P.ref:t,q=r(d.useIntersection({rootMargin:"200px"}),3),F=q[0],V=q[1],G=q[2],W=a.default.useCallback((function(e){Z.current===T&&H.current===U||(G(),Z.current=T,H.current=U),F(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[T,D,U,G,F]);a.default.useEffect((function(){var e=V&&E&&c.isLocalURL(U),t="undefined"!==typeof O?O:R&&R.locale,n=h[U+"%"+T+(t?"%"+t:"")];e&&!n&&m(R,U,T,{locale:t})}),[T,U,V,O,E,R]);var X={ref:W,onClick:function(e){z||"function"!==typeof S||S(e),z&&P.props&&"function"===typeof P.props.onClick&&P.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,a,l,s,u){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n)){e.preventDefault();var d=function(){"softPush"in t&&"softReplace"in t?t[o?i?"softReplace":"softPush":i?"replace":"push"](n):t[i?"replace":"push"](n,r,{shallow:a,locale:s,scroll:l})};u?u(d):d()}}(e,R,U,T,j,_,w,A,O,N?L:void 0)},onMouseEnter:function(e){z||"function"!==typeof M||M(e),z&&P.props&&"function"===typeof P.props.onMouseEnter&&P.props.onMouseEnter(e),c.isLocalURL(U)&&m(R,U,T,{priority:!0})},onTouchStart:function(e){z||"function"!==typeof C||C(e),z&&P.props&&"function"===typeof P.props.onTouchStart&&P.props.onTouchStart(e),c.isLocalURL(U)&&m(R,U,T,{priority:!0})}};if(!z||x||"a"===P.type&&!("href"in P.props)){var K="undefined"!==typeof O?O:R&&R.locale,J=R&&R.isLocaleDomain&&f.getDomainLocale(T,K,R.locales,R.domainLocales);X.href=J||p.addBasePath(l.addLocale(T,K,R&&R.defaultLocale))}return z?a.default.cloneElement(P,X):a.default.createElement("a",Object.assign({},k,X),n)}));t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!a,u=i.useRef(),d=r(i.useState(!1),2),f=d[0],p=d[1],g=r(i.useState(null),2),h=g[0],m=g[1];i.useEffect((function(){if(a){if(u.current&&(u.current(),u.current=void 0),s||f)return;return h&&h.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=c.get(r)))return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:i},l.push(n),c.set(n,t),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),c.delete(i);var t=l.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&l.splice(t,1)}}}(h,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==u.current||u.current(),u.current=void 0}}if(!f){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[h,s,n,t,f]);var v=i.useCallback((function(){p(!1)}),[]);return[m,f,v]};var i=n(7294),o=n(9311),a="function"===typeof IntersectionObserver;var c=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),i=r.default.createContext(null);t.AppRouterContext=i;var o=r.default.createContext(null);t.LayoutRouterContext=o;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a},6748:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),i=n(7294),o=n(5675),a=n.n(o),c=n(4952),l={src:"/_next/static/media/icon_close.e791344b.png",height:14,width:14,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEXIyMjHx8fHx8fExMRMaXGkQNMuAAAABXRSTlMiV10BAFLPwWwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAqSURBVAiZRYtBCgAwDMJSm/+/eXSw7iLBKIXdUhCUwI0gU4/+sGrH734AEAgAcRxJc38AAAAASUVORK5CYII="},s=n(7522),u=n.n(s),d=function(e){var t=e.product,n=(0,i.useContext)(c.Z).removeFromCart;return(0,r.jsxs)("div",{className:u().OrderItem,children:[(0,r.jsx)("figure",{children:(0,r.jsx)(a(),{src:null===t||void 0===t?void 0:t.images[0],width:36,height:36,alt:null===t||void 0===t?void 0:t.title})}),(0,r.jsx)("p",{children:null===t||void 0===t?void 0:t.title}),(0,r.jsxs)("p",{children:["$",null===t||void 0===t?void 0:t.price]}),(0,r.jsx)(a(),{className:(u().pointer,u()["more-clickable-area"]),src:l,alt:"close",onClick:function(){return function(e){n(e)}(t)}})]})}},4952:function(e,t,n){"use strict";var r=n(7294).createContext({});t.Z=r},1243:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return L}});var o=n(5893),a=n(7294),c=n(1664),l=n.n(c),s=n(5675),u=n.n(s),d=n(1737),f=n.n(d),p=function(){return(0,o.jsx)("div",{className:f().Menu,children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(l(),{href:"/",className:f().title,children:"My orders"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l(),{href:"/",children:"My account"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l(),{href:"/",children:"Sign out"})})]})})},g=n(6748),h=n(4952),m={src:"/_next/static/media/flechita.1c152575.svg",height:12,width:7},v=n(3507),y=n.n(v),b=function(){var e=(0,a.useContext)(h.Z),t=e.state,n=e.toggleOrder;return(0,o.jsx)("aside",{className:y().MyOrder,children:(0,o.jsxs)("div",{className:y()["MyOrder-container"],children:[(0,o.jsxs)("div",{className:y()["title-container"],children:[(0,o.jsx)(u(),{className:(y()["more-clickable-area"],y().pointer),src:m,alt:"arrow",onClick:function(){return n()}}),(0,o.jsx)("p",{className:y().title,children:"My order"})]}),(0,o.jsxs)("div",{className:y()["my-order-content"],children:[(0,o.jsx)("div",{className:y()["my-orders"],children:t.cart.map((function(e){return(0,o.jsx)(g.Z,{product:e},"orderItem-".concat(e.id))}))}),(0,o.jsxs)("div",{className:y().order,children:[(0,o.jsx)("p",{children:(0,o.jsx)("span",{children:"Total"})}),(0,o.jsxs)("p",{children:["$",t.cart.reduce((function(e,t){return e+t.price}),0)]})]}),(0,o.jsx)(l(),{className:y()["primary-button"],href:"/checkout",children:"Checkout"})]})]})})},x="/_next/static/media/icon_menu.b70fc14a.svg",j={src:"/_next/static/media/logo_yard_sale.ab5a49e4.svg",height:20,width:97},_={src:"/_next/static/media/icon_shopping_cart.665a6046.svg",height:25,width:24},w=n(201),A=n.n(w),O=function(){var e=(0,a.useContext)(h.Z),t=e.state,n=e.toggleOrder,r=e.toggleMenu;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("nav",{className:A().Nav,children:[(0,o.jsx)("div",{className:A().menu,children:(0,o.jsx)(u(),{src:x,alt:"menu",layout:"fill"})}),(0,o.jsxs)("div",{className:A()["navbar-left"],children:[(0,o.jsx)(l(),{href:"/",passHref:!0,children:(0,o.jsx)(u(),{src:j,alt:"logo",className:A()["nav-logo"]})}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(l(),{href:"/",children:"Linkll"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l(),{href:"/",children:"Clothes"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l(),{href:"/",children:"Electronics"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l(),{href:"/",children:"Furnitures"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l(),{href:"/",children:"Toys"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l(),{href:"/",children:"Others"})})]})]}),(0,o.jsx)("div",{className:A()["navbar-right"],children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{className:(A()["more-clickable-area"],A()["navbar-email"],A().pointer),onClick:function(){return r()},"aria-hidden":"true",children:"platzi@example.com"}),(0,o.jsxs)("li",{className:A()["navbar-shopping-cart"],onClick:function(){return n()},"aria-hidden":"true",children:[(0,o.jsx)(u(),{className:(A()["more-clickable-area"],A().pointer),src:_,alt:"shopping cart"}),t.cart.length>0?(0,o.jsx)("div",{children:t.cart.length}):null]})]})}),t.menuIsOpen&&(0,o.jsx)(p,{})]}),t.orderIsOpen&&(0,o.jsx)(b,{})]})},S=n(4298),M=n.n(S);function C(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function z(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k={cart:[],orderIsOpen:!1,menuIsOpen:!1},E=function(){var e=(0,a.useState)(k),t=e[0],n=e[1];return{state:t,addToCart:function(e){n(C(i({},t),{cart:t.cart.includes(e)?t.cart:z(t.cart).concat([e])}))},removeFromCart:function(e){n(C(i({},t),{cart:t.cart.filter((function(t){return t.id!==e.id}))}))},toggleOrder:function(){n(C(i({},t),{orderIsOpen:!t.orderIsOpen}))},toggleMenu:function(){n(C(i({},t),{menuIsOpen:!t.menuIsOpen}))}}};n(472);var L=function(e){var t=e.Component,n=e.pageProps,r=E();return(0,o.jsxs)(h.Z.Provider,{value:r,children:[(0,o.jsx)(M(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-T7BLJYQFLX"}),(0,o.jsx)(M(),{id:"google-analytics",strategy:"afterInteractive",children:"\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());      \n        gtag('config', 'G-T7BLJYQFLX');\n      "}),(0,o.jsx)(O,{}),(0,o.jsx)(t,i({},n))]})}},201:function(e){e.exports={Nav:"Header_Nav__wa9HR",menu:"Header_menu__53eqk","nav-logo":"Header_nav-logo__Ig_eA","navbar-left":"Header_navbar-left__zEVzI","navbar-right":"Header_navbar-right__2CNAT","navbar-email":"Header_navbar-email__G_f5P","navbar-shopping-cart":"Header_navbar-shopping-cart__t_WEj"}},1737:function(e){e.exports={Menu:"Menu_Menu__6xmVK"}},3507:function(e){e.exports={MyOrder:"MyOrder_MyOrder__GaUzh","title-container":"MyOrder_title-container__Y0bHP","MyOrder-container":"MyOrder_MyOrder-container__8un6k",title:"MyOrder_title__BOfoe","my-order-content":"MyOrder_my-order-content___FFAb","my-orders":"MyOrder_my-orders__tgbvY",order:"MyOrder_order__2Y38Q","primary-button":"MyOrder_primary-button__6PO1W"}},7522:function(e){e.exports={OrderItem:"OrderItem_OrderItem__fghRL"}},472:function(){},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)},4298:function(e,t,n){e.exports=n(699)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);