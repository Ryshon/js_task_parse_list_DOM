parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var t=document.querySelector("ul"),n=document.querySelectorAll("li");function a(t){var n=[];return t.forEach(function(t){n.push({name:t.textContent.trim(),position:t.getAttribute("data-position"),salary:i(t.getAttribute("data-salary")),age:t.getAttribute("data-age")})}),n}function r(t){return t.sort(function(t,n){return n.salary-t.salary})}var e=r(a(n));function o(n){var a=new Intl.NumberFormat("en-US");t.innerHTML="\n     ".concat(n.map(function(t){return'<li\n         data-position="'.concat(t.position,'"\n         data-salary="$').concat(a.format(t.salary),'"\n         data-age="').concat(t.age,'"\n       >\n       ').concat(t.name,"\n     </li>")}).join(""),"\n ")}function i(t){for(var n="",a=0;a<t.length;a++)"$"!==t[a]&&","!==t[a]&&(n+=t[a]);return+n}o(e);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.3f387e1f.js.map