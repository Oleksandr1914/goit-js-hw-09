!function(){var t=function(t){return document.querySelector(t)},n=t("[data-start]"),o=t("[data-stop]");n.addEventListener("click",(function(){if(n.classList.contains("rundomColor"))return;n.classList.add("rundomColor");var r=setInterval((function(){t("body").style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3);o.addEventListener("click",(function(){clearInterval(r),n.classList.remove("rundomColor")}))}))}();
//# sourceMappingURL=01-color-switcher.041ff539.js.map