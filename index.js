// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).resolve=r()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var r=void 0!==Object.keys;function e(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var n=e();var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function a(t,r){return null!=t&&i.call(t,r)}var u="function"==typeof Symbol?Symbol:void 0,l="function"==typeof u?u.toStringTag:"";var c,f=n&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return o.call(t);e=t[l],r=a(t,l);try{t[l]=void 0}catch(r){return o.call(t)}return n=o.call(t),r?t[l]=e:delete t[l],n}:function(t){return o.call(t)};function p(t){return"[object Arguments]"===f(t)}c=function(){return p(arguments)}();var s=c,g="function"==typeof Object.defineProperty?Object.defineProperty:null;var y=Object.defineProperty;function b(t){return"number"==typeof t}function v(t){var r,e="";for(r=0;r<t;r++)e+="0";return e}function d(t,r,e){var n=!1,o=r-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=e?t+v(o):v(o)+t,n&&(t="-"+t)),t}var m=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function w(t){var r,e,n;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(e=t.arg,n=parseInt(e,10),!isFinite(n)){if(!b(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===t.specifier||10!==r)&&(n=4294967295+n+1),n<0?(e=(-n).toString(r),t.precision&&(e=d(e,t.precision,t.padRight)),e="-"+e):(e=n.toString(r),n||t.precision?t.precision&&(e=d(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===r&&(t.alternate&&(e="0x"+e),e=t.specifier===h.call(t.specifier)?h.call(e):m.call(e)),8===r&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function S(t){return"string"==typeof t}var _=Math.abs,j=String.prototype.toLowerCase,O=String.prototype.toUpperCase,T=String.prototype.replace,E=/e\+(\d)$/,x=/e-(\d)$/,k=/^(\d+)$/,I=/^(\d+)e/,P=/\.0$/,V=/\.0*e/,A=/(\..*[^0])0*e/;function F(t){var r,e,n=parseFloat(t.arg);if(!isFinite(n)){if(!b(t.arg))throw new Error("invalid floating-point number. Value: "+e);n=t.arg}switch(t.specifier){case"e":case"E":e=n.toExponential(t.precision);break;case"f":case"F":e=n.toFixed(t.precision);break;case"g":case"G":_(n)<1e-4?((r=t.precision)>0&&(r-=1),e=n.toExponential(r)):e=n.toPrecision(t.precision),t.alternate||(e=T.call(e,A,"$1e"),e=T.call(e,V,"e"),e=T.call(e,P,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=T.call(e,E,"e+0$1"),e=T.call(e,x,"e-0$1"),t.alternate&&(e=T.call(e,k,"$1."),e=T.call(e,I,"$1.e")),n>=0&&t.sign&&(e=t.sign+e),e=t.specifier===O.call(t.specifier)?O.call(e):j.call(e)}function N(t){var r,e="";for(r=0;r<t;r++)e+=" ";return e}function $(t,r,e){var n=r-t.length;return n<0?t:t=e?t+N(n):N(n)+t}var C=String.fromCharCode,B=isNaN,L=Array.isArray;function R(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function G(t){var r,e,n,o,i,a,u,l,c;if(!L(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",u=1,l=0;l<t.length;l++)if(S(n=t[l]))a+=n;else{if(r=void 0!==n.precision,!(n=R(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),e=n.flags,c=0;c<e.length;c++)switch(o=e.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,B(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,B(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=w(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!B(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=B(i)?String(n.arg):C(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=F(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=d(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=$(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function X(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function Z(t){var r,e,n,o;for(e=[],o=0,n=W.exec(t);n;)(r=t.slice(o,W.lastIndex-n[0].length)).length&&e.push(r),e.push(X(n)),o=W.lastIndex,n=W.exec(t);return(r=t.slice(o)).length&&e.push(r),e}function M(t){return"string"==typeof t}function Y(t){var r,e;if(!M(t))throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=[Z(t)],e=1;e<arguments.length;e++)r.push(arguments[e]);return G.apply(null,r)}var U,H=Object.prototype,z=H.toString,D=H.__defineGetter__,q=H.__defineSetter__,J=H.__lookupGetter__,K=H.__lookupSetter__;U=function(){try{return g({},"x",{}),!0}catch(t){return!1}}()?y:function(t,r,e){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===z.call(t))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===z.call(e))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(J.call(t,r)||K.call(t,r)?(n=t.__proto__,t.__proto__=H,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&D&&D.call(t,r,e.get),a&&q&&q.call(t,r,e.set),t};var Q=U;function tt(t,r,e){Q(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function rt(t){return"string"==typeof t}var et=e();function nt(){return et&&"symbol"==typeof Symbol.toStringTag}var ot=Object.prototype.toString;var it="function"==typeof Symbol?Symbol:void 0,at="function"==typeof it?it.toStringTag:"";var ut=nt()?function(t){var r,e,n;if(null==t)return ot.call(t);e=t[at],r=a(t,at);try{t[at]=void 0}catch(r){return ot.call(t)}return n=ot.call(t),r?t[at]=e:delete t[at],n}:function(t){return ot.call(t)},lt=String.prototype.valueOf;var ct=nt();function ft(t){return"object"==typeof t&&(t instanceof String||(ct?function(t){try{return lt.call(t),!0}catch(t){return!1}}(t):"[object String]"===ut(t)))}function pt(t){return rt(t)||ft(t)}function st(t,r,e){Q(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function gt(t,r,e){Q(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function yt(t){return"number"==typeof t}tt(pt,"isPrimitive",rt),tt(pt,"isObject",ft);var bt=e();function vt(){return bt&&"symbol"==typeof Symbol.toStringTag}var dt=Object.prototype.toString;var mt="function"==typeof Symbol?Symbol:void 0,ht="function"==typeof mt?mt.toStringTag:"";var wt=vt()?function(t){var r,e,n;if(null==t)return dt.call(t);e=t[ht],r=a(t,ht);try{t[ht]=void 0}catch(r){return dt.call(t)}return n=dt.call(t),r?t[ht]=e:delete t[ht],n}:function(t){return dt.call(t)},St=Number,_t=St.prototype.toString;var jt=vt();function Ot(t){return"object"==typeof t&&(t instanceof St||(jt?function(t){try{return _t.call(t),!0}catch(t){return!1}}(t):"[object Number]"===wt(t)))}function Tt(t){return yt(t)||Ot(t)}function Et(t){return t!=t}function xt(t){return yt(t)&&Et(t)}function kt(t){return Ot(t)&&Et(t.valueOf())}function It(t){return xt(t)||kt(t)}function Pt(t,r,e){Q(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}gt(Tt,"isPrimitive",yt),gt(Tt,"isObject",Ot),st(It,"isPrimitive",xt),st(It,"isObject",kt);var Vt=Number.POSITIVE_INFINITY,At=St.NEGATIVE_INFINITY,Ft=Math.floor;function Nt(t){return Ft(t)===t}function $t(t){return t<Vt&&t>At&&Nt(t)}function Ct(t){return yt(t)&&$t(t)}function Bt(t){return Ot(t)&&$t(t.valueOf())}function Lt(t){return Ct(t)||Bt(t)}Pt(Lt,"isPrimitive",Ct),Pt(Lt,"isObject",Bt);var Rt=Object.prototype.propertyIsEnumerable;var Gt=!Rt.call("beep","0");function Wt(t,r){var e;return null!=t&&(!(e=Rt.call(t,r))&&Gt&&pt(t)?!xt(r=+r)&&Ct(r)&&r>=0&&r<t.length:e)}var Xt=e();var Zt=Object.prototype.toString;var Mt="function"==typeof Symbol?Symbol:void 0,Yt="function"==typeof Mt?Mt.toStringTag:"";var Ut=Xt&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return Zt.call(t);e=t[Yt],r=a(t,Yt);try{t[Yt]=void 0}catch(r){return Zt.call(t)}return n=Zt.call(t),r?t[Yt]=e:delete t[Yt],n}:function(t){return Zt.call(t)};var Ht=Array.isArray?Array.isArray:function(t){return"[object Array]"===Ut(t)};var zt=s?p:function(t){return null!==t&&"object"==typeof t&&!Ht(t)&&"number"==typeof t.length&&Nt(t.length)&&t.length>=0&&t.length<=4294967295&&a(t,"callee")&&!Wt(t,"callee")},Dt=Array.prototype.slice;function qt(t){return null!==t&&"object"==typeof t}!function(t,r,e){Q(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}(qt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!Ht(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(qt));var Jt=Wt((function(){}),"prototype"),Kt=!Wt({toString:null},"toString");function Qt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Nt(t.length)&&t.length>=0&&t.length<=9007199254740991}function tr(t,r,e){Q(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function rr(t){return"string"==typeof t}var er=e();function nr(){return er&&"symbol"==typeof Symbol.toStringTag}var or=Object.prototype.toString;var ir="function"==typeof Symbol?Symbol:void 0,ar="function"==typeof ir?ir.toStringTag:"";var ur=nr()?function(t){var r,e,n;if(null==t)return or.call(t);e=t[ar],r=a(t,ar);try{t[ar]=void 0}catch(r){return or.call(t)}return n=or.call(t),r?t[ar]=e:delete t[ar],n}:function(t){return or.call(t)},lr=String.prototype.valueOf;var cr=nr();function fr(t){return"object"==typeof t&&(t instanceof String||(cr?function(t){try{return lr.call(t),!0}catch(t){return!1}}(t):"[object String]"===ur(t)))}function pr(t){return rr(t)||fr(t)}function sr(t,r,e){var n,o;if(!Qt(t)&&!rr(t))throw new TypeError(Y("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!Ct(e))throw new TypeError(Y("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(It(r)){for(;o<n;o++)if(It(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}tr(pr,"isPrimitive",rr),tr(pr,"isObject",fr);var gr=/./;function yr(t,r,e){Q(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function br(t){return"boolean"==typeof t}var vr=e();function dr(){return vr&&"symbol"==typeof Symbol.toStringTag}var mr=Object.prototype.toString;var hr="function"==typeof Symbol?Symbol:void 0,wr="function"==typeof hr?hr.toStringTag:"";var Sr=dr()?function(t){var r,e,n;if(null==t)return mr.call(t);e=t[wr],r=a(t,wr);try{t[wr]=void 0}catch(r){return mr.call(t)}return n=mr.call(t),r?t[wr]=e:delete t[wr],n}:function(t){return mr.call(t)},_r=Boolean,jr=Boolean.prototype.toString;var Or=dr();function Tr(t){return"object"==typeof t&&(t instanceof _r||(Or?function(t){try{return jr.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===Sr(t)))}function Er(t){return br(t)||Tr(t)}function xr(){return new Function("return this;")()}yr(Er,"isPrimitive",br),yr(Er,"isObject",Tr);var kr="object"==typeof self?self:null,Ir="object"==typeof window?window:null,Pr="object"==typeof global?global:null,Vr="object"==typeof globalThis?globalThis:null;var Ar=function(t){if(arguments.length){if(!br(t))throw new TypeError(Y("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return xr()}if(Vr)return Vr;if(kr)return kr;if(Ir)return Ir;if(Pr)return Pr;throw new Error("unexpected error. Unable to resolve global object.")}(),Fr=Ar.document&&Ar.document.childNodes,Nr=Int8Array;var $r=e();var Cr=Object.prototype.toString;var Br="function"==typeof Symbol?Symbol:void 0,Lr="function"==typeof Br?Br.toStringTag:"";var Rr=$r&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return Cr.call(t);e=t[Lr],r=a(t,Lr);try{t[Lr]=void 0}catch(r){return Cr.call(t)}return n=Cr.call(t),r?t[Lr]=e:delete t[Lr],n}:function(t){return Cr.call(t)};function Gr(){return/^\s*function\s*([^(]*)/i}var Wr=/^\s*function\s*([^(]*)/i;function Xr(t){var r,e,n,o;if(("Object"===(e=Rr(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Wr.exec(n.toString()))return r[1]}return qt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}!function(t,r,e){Q(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}(Gr,"REGEXP",Wr);var Zr="function"==typeof gr||"object"==typeof Nr||"function"==typeof Fr?function(t){return Xr(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?Xr(t).toLowerCase():r};function Mr(t){return t.constructor&&t.constructor.prototype===t}var Yr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ur="undefined"==typeof window?void 0:window;var Hr=function(){var t;if("undefined"===Zr(Ur))return!1;for(t in Ur)try{-1===sr(Yr,t)&&a(Ur,t)&&null!==Ur[t]&&"object"===Zr(Ur[t])&&Mr(Ur[t])}catch(t){return!0}return!1}(),zr="undefined"!=typeof window;var Dr,qr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Dr=r?function(){return 2!==(t(arguments)||"").length}(1,2)?function(r){return zt(r)?t(Dt.call(r)):t(r)}:t:function(t){var r,e,n,o,i,u,l;if(o=[],zt(t)){for(l=0;l<t.length;l++)o.push(l.toString());return o}if("string"==typeof t){if(t.length>0&&!a(t,"0"))for(l=0;l<t.length;l++)o.push(l.toString())}else{if(!1==(n="function"==typeof t)&&!qt(t))return o;e=Jt&&n}for(i in t)e&&"prototype"===i||!a(t,i)||o.push(String(i));if(Kt)for(r=function(t){if(!1===zr&&!Hr)return Mr(t);try{return Mr(t)}catch(t){return!1}}(t),l=0;l<qr.length;l++)u=qr[l],r&&"constructor"===u||!a(t,u)||o.push(String(u));return o};var Jr=Dr;function Kr(t){return"function"===Zr(t)}var Qr=Object,te=Object.getPrototypeOf,re=e();var ee=Object.prototype.toString;var ne="function"==typeof Symbol?Symbol:void 0,oe="function"==typeof ne?ne.toStringTag:"";var ie,ae=re&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return ee.call(t);e=t[oe],r=a(t,oe);try{t[oe]=void 0}catch(r){return ee.call(t)}return n=ee.call(t),r?t[oe]=e:delete t[oe],n}:function(t){return ee.call(t)};ie=Kr(Object.getPrototypeOf)?te:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===ae(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var ue=ie;var le=e();var ce=Object.prototype.toString;var fe="function"==typeof Symbol?Symbol:void 0,pe="function"==typeof fe?fe.toStringTag:"";var se=le&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return ce.call(t);e=t[pe],r=a(t,pe);try{t[pe]=void 0}catch(r){return ce.call(t)}return n=ce.call(t),r?t[pe]=e:delete t[pe],n}:function(t){return ce.call(t)},ge=Object.prototype;function ye(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!Ht(t)}(t)&&(r=function(t){return null==t?null:(t=Qr(t),ue(t))}(t),!r||!a(t,"constructor")&&a(r,"constructor")&&Kr(r.constructor)&&"[object Function]"===se(r.constructor)&&a(r,"isPrototypeOf")&&Kr(r.isPrototypeOf)&&(r===ge||function(t){var r;for(r in t)if(!a(t,r))return!1;return!0}(t)))}var be=["same","promoted","bool","signed_integer","unsigned_integer","integer","floating_point","real_floating_point","complex_floating_point","real","numeric","default"];function ve(){return be.slice()}function de(){return{same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integer:5,floating_point:6,real_floating_point:7,complex_floating_point:8,real:9,numeric:10,default:11}}function me(t,r,e){Q(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})}!function(t,r,e){Q(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}(ve,"enum",de),function(t,r){var e,n,o;for(e=Jr(r),o=0;o<e.length;o++)me(t,n=e[o],r[n])}(ve,{same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integer:5,floating_point:6,real_floating_point:7,complex_floating_point:8,real:9,numeric:10,default:11});var he=function(t,r){var e,n,o,i,u,l,c,f=!0;if(!qt(t))throw new TypeError(Y("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!ye(r))throw new TypeError(Y("invalid argument. Options argument must be an object. Value: `%s`.",r));if(a(r,"duplicates")&&!br(f=r.duplicates))throw new TypeError(Y("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(n=(e=Jr(t)).length,u={},f)for(c=0;c<n;c++)a(u,i=t[o=e[c]])?(l=u[i],Ht(l)?u[i].push(o):u[i]=[l,o]):u[i]=o;else for(c=0;c<n;c++)u[t[o=e[c]]]=o;return u}({same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integer:5,floating_point:6,real_floating_point:7,complex_floating_point:8,real:9,numeric:10,default:11},{duplicates:!1});var we={same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integer:5,floating_point:6,real_floating_point:7,complex_floating_point:8,real:9,numeric:10,default:11};return function(t){var r=typeof t;return"string"===r?null===function(t){var r=we[t];return"number"==typeof r?r:null}(t)?null:t:"number"===r?function(t){var r=he[t];return"string"==typeof r?r:null}(t):null}}));
//# sourceMappingURL=index.js.map
