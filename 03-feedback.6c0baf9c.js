!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}}));var i=o("hKHmD"),u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f.default(e,t,r[t])}))}return e};var a,f=(a=o("hKHmD"))&&a.__esModule?a:{default:a};var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var c="Expected a function",s=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,p=/^0o[0-7]+$/i,m=parseInt,b="object"==typeof t&&t&&t.Object===Object&&t,g="object"==typeof self&&self&&self.Object===Object&&self,y=b||g||Function("return this")(),O=Object.prototype.toString,j=Math.max,S=Math.min,h=function(){return y.Date.now()};function w(e,t,r){var n,o,i,u,a,f,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(c);function p(t){var r=n,i=o;return n=o=void 0,l=t,u=e.apply(i,r)}function m(e){return l=e,a=setTimeout(g,t),s?p(e):u}function b(e){var r=e-f;return void 0===f||r>=t||r<0||d&&e-l>=i}function g(){var e=h();if(b(e))return y(e);a=setTimeout(g,function(e){var r=t-(e-f);return d?S(r,i-(e-l)):r}(e))}function y(e){return a=void 0,v&&n?p(e):(n=o=void 0,u)}function O(){var e=h(),r=b(e);if(n=arguments,o=this,f=e,r){if(void 0===a)return m(f);if(d)return a=setTimeout(g,t),p(f)}return void 0===a&&(a=setTimeout(g,t)),u}return t=_(t)||0,x(r)&&(s=!!r.leading,i=(d="maxWait"in r)?j(_(r.maxWait)||0,t):i,v="trailing"in r?!!r.trailing:v),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=f=o=a=void 0},O.flush=function(){return void 0===a?u:y(h())},O}function x(t){var r=void 0===t?"undefined":e(l)(t);return!!t&&("object"==r||"function"==r)}function _(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(l)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==O.call(t)}(t))return NaN;if(x(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=x(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var n=v.test(t);return n||p.test(t)?m(t.slice(2),n?2:8):d.test(t)?NaN:+t}var N="feedback-form-state",T=document.querySelector(".feedback-form"),D={},M=JSON.parse(localStorage.getItem(N));form.elements.email.value=(null==M?void 0:M.email)||"",form.elements.message.value=(null==M?void 0:M.message)||"",T.addEventListener("submit",(function(e){e.preventDefault();var t=localStorage.getItem(N),r=JSON.parse(t);e.currentTarget.reset(),localStorage.removeItem(N),console.log(r)})),T.addEventListener("input",(function(t){D[t.target.name]=t.target.value;var r=JSON.parse(localStorage.getItem(N));localStorage.setItem(N,JSON.stringify(e(u)({},r,e(i)({},t.target.name,t.target.value))))}))}();
//# sourceMappingURL=03-feedback.6c0baf9c.js.map
