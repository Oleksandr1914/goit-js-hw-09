!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc"),u=function(e){return document.querySelector(e)},a=u('[name="delay"]'),c=u('[name="step"]'),f=u('[name="amount"]');function l(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}u(".form").addEventListener("submit",(function(n){var t=+a.value;n.preventDefault();for(var o=1;o<=f.value;o+=1)l(o,t).then((function(n){e(i).Notify.success(n)})).catch((function(n){e(i).Notify.failure(n)})),t+=+c.value}))}();
//# sourceMappingURL=03-promises.7eeef620.js.map
