parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"sBBS":[function(require,module,exports) {
var global = arguments[3];
var define;
var o,e=arguments[3];!function(n){var r="object"==typeof exports&&exports&&!exports.nodeType&&exports,t="object"==typeof module&&module&&!module.nodeType&&module,u="object"==typeof e&&e;u.global!==u&&u.window!==u&&u.self!==u||(n=u);var i,f,c=2147483647,l=36,s=1,p=26,a=38,d=700,h=72,v=128,g="-",w=/^xn--/,x=/[^\x20-\x7E]/,y=/[\x2E\u3002\uFF0E\uFF61]/g,m={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},C=l-s,b=Math.floor,j=String.fromCharCode;function A(o){throw new RangeError(m[o])}function I(o,e){for(var n=o.length,r=[];n--;)r[n]=e(o[n]);return r}function E(o,e){var n=o.split("@"),r="";return n.length>1&&(r=n[0]+"@",o=n[1]),r+I((o=o.replace(y,".")).split("."),e).join(".")}function F(o){for(var e,n,r=[],t=0,u=o.length;t<u;)(e=o.charCodeAt(t++))>=55296&&e<=56319&&t<u?56320==(64512&(n=o.charCodeAt(t++)))?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),t--):r.push(e);return r}function O(o){return I(o,function(o){var e="";return o>65535&&(e+=j((o-=65536)>>>10&1023|55296),o=56320|1023&o),e+=j(o)}).join("")}function S(o,e){return o+22+75*(o<26)-((0!=e)<<5)}function T(o,e,n){var r=0;for(o=n?b(o/d):o>>1,o+=b(o/e);o>C*p>>1;r+=l)o=b(o/C);return b(r+(C+1)*o/(o+a))}function L(o){var e,n,r,t,u,i,f,a,d,w,x,y=[],m=o.length,C=0,j=v,I=h;for((n=o.lastIndexOf(g))<0&&(n=0),r=0;r<n;++r)o.charCodeAt(r)>=128&&A("not-basic"),y.push(o.charCodeAt(r));for(t=n>0?n+1:0;t<m;){for(u=C,i=1,f=l;t>=m&&A("invalid-input"),((a=(x=o.charCodeAt(t++))-48<10?x-22:x-65<26?x-65:x-97<26?x-97:l)>=l||a>b((c-C)/i))&&A("overflow"),C+=a*i,!(a<(d=f<=I?s:f>=I+p?p:f-I));f+=l)i>b(c/(w=l-d))&&A("overflow"),i*=w;I=T(C-u,e=y.length+1,0==u),b(C/e)>c-j&&A("overflow"),j+=b(C/e),C%=e,y.splice(C++,0,j)}return O(y)}function M(o){var e,n,r,t,u,i,f,a,d,w,x,y,m,C,I,E=[];for(y=(o=F(o)).length,e=v,n=0,u=h,i=0;i<y;++i)(x=o[i])<128&&E.push(j(x));for(r=t=E.length,t&&E.push(g);r<y;){for(f=c,i=0;i<y;++i)(x=o[i])>=e&&x<f&&(f=x);for(f-e>b((c-n)/(m=r+1))&&A("overflow"),n+=(f-e)*m,e=f,i=0;i<y;++i)if((x=o[i])<e&&++n>c&&A("overflow"),x==e){for(a=n,d=l;!(a<(w=d<=u?s:d>=u+p?p:d-u));d+=l)I=a-w,C=l-w,E.push(j(S(w+I%C,0))),a=b(I/C);E.push(j(S(a,0))),u=T(n,m,r==t),n=0,++r}++n,++e}return E.join("")}if(i={version:"1.4.1",ucs2:{decode:F,encode:O},decode:L,encode:M,toASCII:function(o){return E(o,function(o){return x.test(o)?"xn--"+M(o):o})},toUnicode:function(o){return E(o,function(o){return w.test(o)?L(o.slice(4).toLowerCase()):o})}},"function"==typeof o&&"object"==typeof o.amd&&o.amd)o("punycode",function(){return i});else if(r&&t)if(module.exports==r)t.exports=i;else for(f in i)i.hasOwnProperty(f)&&(r[f]=i[f]);else n.punycode=i}(this);
},{}],"3oHu":[function(require,module,exports) {
"use strict";module.exports={isString:function(n){return"string"==typeof n},isObject:function(n){return"object"==typeof n&&null!==n},isNull:function(n){return null===n},isNullOrUndefined:function(n){return null==n}};
},{}],"ObZ4":[function(require,module,exports) {
"use strict";function r(r,e){return Object.prototype.hasOwnProperty.call(r,e)}module.exports=function(t,n,o,a){n=n||"&",o=o||"=";var s={};if("string"!=typeof t||0===t.length)return s;var p=/\+/g;t=t.split(n);var u=1e3;a&&"number"==typeof a.maxKeys&&(u=a.maxKeys);var c=t.length;u>0&&c>u&&(c=u);for(var i=0;i<c;++i){var y,l,f,v,b=t[i].replace(p,"%20"),d=b.indexOf(o);d>=0?(y=b.substr(0,d),l=b.substr(d+1)):(y=b,l=""),f=decodeURIComponent(y),v=decodeURIComponent(l),r(s,f)?e(s[f])?s[f].push(v):s[f]=[s[f],v]:s[f]=v}return s};var e=Array.isArray||function(r){return"[object Array]"===Object.prototype.toString.call(r)};
},{}],"XK8a":[function(require,module,exports) {
"use strict";var n=function(n){switch(typeof n){case"string":return n;case"boolean":return n?"true":"false";case"number":return isFinite(n)?n:"";default:return""}};module.exports=function(o,u,c,a){return u=u||"&",c=c||"=",null===o&&(o=void 0),"object"==typeof o?r(t(o),function(t){var a=encodeURIComponent(n(t))+c;return e(o[t])?r(o[t],function(e){return a+encodeURIComponent(n(e))}).join(u):a+encodeURIComponent(n(o[t]))}).join(u):a?encodeURIComponent(n(a))+c+encodeURIComponent(n(o)):""};var e=Array.isArray||function(n){return"[object Array]"===Object.prototype.toString.call(n)};function r(n,e){if(n.map)return n.map(e);for(var r=[],t=0;t<n.length;t++)r.push(e(n[t],t));return r}var t=Object.keys||function(n){var e=[];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.push(r);return e};
},{}],"SF0R":[function(require,module,exports) {
"use strict";exports.decode=exports.parse=require("./decode"),exports.encode=exports.stringify=require("./encode");
},{"./decode":"ObZ4","./encode":"XK8a"}],"j37I":[function(require,module,exports) {
"use strict";var t=require("punycode"),s=require("./util");function h(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}exports.parse=b,exports.resolve=O,exports.resolveObject=d,exports.format=q,exports.Url=h;var e=/^([a-z0-9.+-]+:)/i,a=/:[0-9]*$/,r=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,o=["<",">",'"',"`"," ","\r","\n","\t"],n=["{","}","|","\\","^","`"].concat(o),i=["'"].concat(n),l=["%","/","?",";","#"].concat(i),p=["/","?","#"],c=255,u=/^[+a-z0-9A-Z_-]{0,63}$/,f=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,m={javascript:!0,"javascript:":!0},v={javascript:!0,"javascript:":!0},g={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},y=require("querystring");function b(t,e,a){if(t&&s.isObject(t)&&t instanceof h)return t;var r=new h;return r.parse(t,e,a),r}function q(t){return s.isString(t)&&(t=b(t)),t instanceof h?t.format():h.prototype.format.call(t)}function O(t,s){return b(t,!1,!0).resolve(s)}function d(t,s){return t?b(t,!1,!0).resolveObject(s):s}h.prototype.parse=function(h,a,o){if(!s.isString(h))throw new TypeError("Parameter 'url' must be a string, not "+typeof h);var n=h.indexOf("?"),b=-1!==n&&n<h.indexOf("#")?"?":"#",q=h.split(b);q[0]=q[0].replace(/\\/g,"/");var O=h=q.join(b);if(O=O.trim(),!o&&1===h.split("#").length){var d=r.exec(O);if(d)return this.path=O,this.href=O,this.pathname=d[1],d[2]?(this.search=d[2],this.query=a?y.parse(this.search.substr(1)):this.search.substr(1)):a&&(this.search="",this.query={}),this}var j=e.exec(O);if(j){var x=(j=j[0]).toLowerCase();this.protocol=x,O=O.substr(j.length)}if(o||j||O.match(/^\/\/[^@\/]+@[^@\/]+/)){var A="//"===O.substr(0,2);!A||j&&v[j]||(O=O.substr(2),this.slashes=!0)}if(!v[j]&&(A||j&&!g[j])){for(var C,I,w=-1,U=0;U<p.length;U++){-1!==(k=O.indexOf(p[U]))&&(-1===w||k<w)&&(w=k)}-1!==(I=-1===w?O.lastIndexOf("@"):O.lastIndexOf("@",w))&&(C=O.slice(0,I),O=O.slice(I+1),this.auth=decodeURIComponent(C)),w=-1;for(U=0;U<l.length;U++){var k;-1!==(k=O.indexOf(l[U]))&&(-1===w||k<w)&&(w=k)}-1===w&&(w=O.length),this.host=O.slice(0,w),O=O.slice(w),this.parseHost(),this.hostname=this.hostname||"";var N="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!N)for(var R=this.hostname.split(/\./),S=(U=0,R.length);U<S;U++){var $=R[U];if($&&!$.match(u)){for(var z="",H=0,L=$.length;H<L;H++)$.charCodeAt(H)>127?z+="x":z+=$[H];if(!z.match(u)){var Z=R.slice(0,U),_=R.slice(U+1),E=$.match(f);E&&(Z.push(E[1]),_.unshift(E[2])),_.length&&(O="/"+_.join(".")+O),this.hostname=Z.join(".");break}}}this.hostname.length>c?this.hostname="":this.hostname=this.hostname.toLowerCase(),N||(this.hostname=t.toASCII(this.hostname));var P=this.port?":"+this.port:"",T=this.hostname||"";this.host=T+P,this.href+=this.host,N&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==O[0]&&(O="/"+O))}if(!m[x])for(U=0,S=i.length;U<S;U++){var B=i[U];if(-1!==O.indexOf(B)){var D=encodeURIComponent(B);D===B&&(D=escape(B)),O=O.split(B).join(D)}}var F=O.indexOf("#");-1!==F&&(this.hash=O.substr(F),O=O.slice(0,F));var G=O.indexOf("?");if(-1!==G?(this.search=O.substr(G),this.query=O.substr(G+1),a&&(this.query=y.parse(this.query)),O=O.slice(0,G)):a&&(this.search="",this.query={}),O&&(this.pathname=O),g[x]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){P=this.pathname||"";var J=this.search||"";this.path=P+J}return this.href=this.format(),this},h.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var h=this.protocol||"",e=this.pathname||"",a=this.hash||"",r=!1,o="";this.host?r=t+this.host:this.hostname&&(r=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(r+=":"+this.port)),this.query&&s.isObject(this.query)&&Object.keys(this.query).length&&(o=y.stringify(this.query));var n=this.search||o&&"?"+o||"";return h&&":"!==h.substr(-1)&&(h+=":"),this.slashes||(!h||g[h])&&!1!==r?(r="//"+(r||""),e&&"/"!==e.charAt(0)&&(e="/"+e)):r||(r=""),a&&"#"!==a.charAt(0)&&(a="#"+a),n&&"?"!==n.charAt(0)&&(n="?"+n),h+r+(e=e.replace(/[?#]/g,function(t){return encodeURIComponent(t)}))+(n=n.replace("#","%23"))+a},h.prototype.resolve=function(t){return this.resolveObject(b(t,!1,!0)).format()},h.prototype.resolveObject=function(t){if(s.isString(t)){var e=new h;e.parse(t,!1,!0),t=e}for(var a=new h,r=Object.keys(this),o=0;o<r.length;o++){var n=r[o];a[n]=this[n]}if(a.hash=t.hash,""===t.href)return a.href=a.format(),a;if(t.slashes&&!t.protocol){for(var i=Object.keys(t),l=0;l<i.length;l++){var p=i[l];"protocol"!==p&&(a[p]=t[p])}return g[a.protocol]&&a.hostname&&!a.pathname&&(a.path=a.pathname="/"),a.href=a.format(),a}if(t.protocol&&t.protocol!==a.protocol){if(!g[t.protocol]){for(var c=Object.keys(t),u=0;u<c.length;u++){var f=c[u];a[f]=t[f]}return a.href=a.format(),a}if(a.protocol=t.protocol,t.host||v[t.protocol])a.pathname=t.pathname;else{for(var m=(t.pathname||"").split("/");m.length&&!(t.host=m.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==m[0]&&m.unshift(""),m.length<2&&m.unshift(""),a.pathname=m.join("/")}if(a.search=t.search,a.query=t.query,a.host=t.host||"",a.auth=t.auth,a.hostname=t.hostname||t.host,a.port=t.port,a.pathname||a.search){var y=a.pathname||"",b=a.search||"";a.path=y+b}return a.slashes=a.slashes||t.slashes,a.href=a.format(),a}var q=a.pathname&&"/"===a.pathname.charAt(0),O=t.host||t.pathname&&"/"===t.pathname.charAt(0),d=O||q||a.host&&t.pathname,j=d,x=a.pathname&&a.pathname.split("/")||[],A=(m=t.pathname&&t.pathname.split("/")||[],a.protocol&&!g[a.protocol]);if(A&&(a.hostname="",a.port=null,a.host&&(""===x[0]?x[0]=a.host:x.unshift(a.host)),a.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===m[0]?m[0]=t.host:m.unshift(t.host)),t.host=null),d=d&&(""===m[0]||""===x[0])),O)a.host=t.host||""===t.host?t.host:a.host,a.hostname=t.hostname||""===t.hostname?t.hostname:a.hostname,a.search=t.search,a.query=t.query,x=m;else if(m.length)x||(x=[]),x.pop(),x=x.concat(m),a.search=t.search,a.query=t.query;else if(!s.isNullOrUndefined(t.search)){if(A)a.hostname=a.host=x.shift(),(k=!!(a.host&&a.host.indexOf("@")>0)&&a.host.split("@"))&&(a.auth=k.shift(),a.host=a.hostname=k.shift());return a.search=t.search,a.query=t.query,s.isNull(a.pathname)&&s.isNull(a.search)||(a.path=(a.pathname?a.pathname:"")+(a.search?a.search:"")),a.href=a.format(),a}if(!x.length)return a.pathname=null,a.search?a.path="/"+a.search:a.path=null,a.href=a.format(),a;for(var C=x.slice(-1)[0],I=(a.host||t.host||x.length>1)&&("."===C||".."===C)||""===C,w=0,U=x.length;U>=0;U--)"."===(C=x[U])?x.splice(U,1):".."===C?(x.splice(U,1),w++):w&&(x.splice(U,1),w--);if(!d&&!j)for(;w--;w)x.unshift("..");!d||""===x[0]||x[0]&&"/"===x[0].charAt(0)||x.unshift(""),I&&"/"!==x.join("/").substr(-1)&&x.push("");var k,N=""===x[0]||x[0]&&"/"===x[0].charAt(0);A&&(a.hostname=a.host=N?"":x.length?x.shift():"",(k=!!(a.host&&a.host.indexOf("@")>0)&&a.host.split("@"))&&(a.auth=k.shift(),a.host=a.hostname=k.shift()));return(d=d||a.host&&x.length)&&!N&&x.unshift(""),x.length?a.pathname=x.join("/"):(a.pathname=null,a.path=null),s.isNull(a.pathname)&&s.isNull(a.search)||(a.path=(a.pathname?a.pathname:"")+(a.search?a.search:"")),a.auth=t.auth||a.auth,a.slashes=a.slashes||t.slashes,a.href=a.format(),a},h.prototype.parseHost=function(){var t=this.host,s=a.exec(t);s&&(":"!==(s=s[0])&&(this.port=s.substr(1)),t=t.substr(0,t.length-s.length)),t&&(this.hostname=t)};
},{"punycode":"sBBS","./util":"3oHu","querystring":"SF0R"}],"Luc6":[function(require,module,exports) {
"use strict";var e=a(require("url"));function a(e){return e&&e.__esModule?e:{default:e}}var t=e.default.parse("https://fakeyou.github.io/zonky"),r=e.default.parse(window.location.href);if("/"!==r.pathname){var o=r.path.replace(t.path,""),c="".concat(t.href,"?redirect=").concat(o);window.location.replace(c)}
},{"url":"j37I"}]},{},["Luc6"], null)
//# sourceMappingURL=https://fakeyou.github.io/zonky/redirect.8c84f54e.map