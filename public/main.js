!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";var a,r=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),l={};function o(e,t,n){for(var a=0;a<t.length;a++){var r={css:t[a][1],media:t[a][2],sourceMap:t[a][3]};l[e][a]?l[e][a](r):l[e].push(v(r,n))}}function u(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var r=n.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var l=i(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var s,c=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=c(t,r);else{var i=document.createTextNode(r),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(i,l[t]):e.appendChild(i)}}function f(e,t,n){var a=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var m=null,h=0;function v(e,t){var n,a,r;if(t.singleton){var i=h++;n=m||(m=u(t)),a=d.bind(null,n,i,!1),r=d.bind(null,n,i,!0)}else n=u(t),a=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r()),e=n.base?e+n.base:e,t=t||[],l[e]||(l[e]=[]),o(e,t,n),function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){l[e]||(l[e]=[]),o(e,t,n);for(var a=t.length;a<l[e].length;a++)l[e][a]();l[e].length=t.length,0===l[e].length&&delete l[e]}}}},function(e,t,n){var a;(a=n(9)).keys().forEach(a)},function(e,t,n){"use strict";t.__esModule=!0;var a=function(e,t){var n=this;this.init=function(){n.model.subscribe(n.view.render);var e=n.view.sendDatafromViewToController();n.model.sendDataFromControllerToModel(e),n.controllerState()},this.controllerState=function(){return n.view.addEventListeners(n.model.dispatchState,n.model.dispatchBallValueFirst,n.model.dispatchBallValueSecond)},this.view=e,this.model=t,this.init()};t.default=a},function(e,t,n){"use strict";t.__esModule=!0;var a=n(4),r=n(5),i=n(6),l=function(){var e=this;this.sendDataFromControllerToModel=function(t){return e.store.dispatch(i.loadFirstData(t))},this.subscribe=function(t){return e.store.subscribe((function(){return t(e.store.getState())}))},this.dispatchBallValueFirst=function(t){return e.store.dispatch(i.changeBallValueFirst(t))},this.dispatchBallValueSecond=function(t){return e.store.dispatch(i.changeBallValueSecond(t))},this.dispatchState=function(t){return e.store.dispatch(i.changeState(t))},this.store=a.default(r.default)};t.default=l},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t,n=[];return{getState:function(){return t},dispatch:function(a){t=e(a,t),n.forEach((function(e){return e()}))},subscribe:function(e){return n.push(e),n.filter((function(t){return t!==e}))}}}},function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};t.__esModule=!0;var r=function(e,t,n,a,r){return(t-n)*r/(a-n)-e.ballWidth/2},i=function(e){return e.step*e.widthScale/(e.max-e.min)},l=function(e,t){return Math.round((+t+ +e.ballWidth/2)*(e.max-e.min)/e.widthScale+ +e.min)};t.default=function(e,t){switch(e.type){case"LOAD_FIRST_DATA":return a(a(a({},t),e.amount),{left:e.amount.oneRunner?-e.amount.ballWidth/2:r(e.amount,e.amount.value1,e.amount.min,e.amount.max,e.amount.widthScale),right:r(e.amount,e.amount.value2,e.amount.min,e.amount.max,e.amount.widthScale)});case"CHANGE_BALL_VALUE_FIRST":return e.amount<=0-t.ballWidth/2&&(e.amount=0-t.ballWidth/2),e.amount>=t.right-i(t)&&(e.amount=t.right-i(t)),a(a({},t),{left:e.amount,value1:l(t,e.amount)});case"CHANGE_BALL_VALUE_SECOND":return e.amount>=t.widthScale-t.ballWidth/2&&(e.amount=t.widthScale-t.ballWidth/2),e.amount<=t.left&&(e.amount=t.left),a(a({},t),{right:e.amount,value2:l(t,e.amount)});case"CHANGE_STATE":var n=e.amount,o=n.value1,u=n.value2,s=n.min,c=n.max,d=n.step,f=n.disableValues,m=n.vertical,h=n.oneRunner;d=+(d=+d<=0?t.step:d)>=+c?t.step:d,o=o||t.value1,u=u||t.value2;var v=t.widthScale;m!==t.vertical&&!0===m&&(v/=3),m!==t.vertical&&!1===m&&(v*=3);var _=t.left,p=t.right;return(+o>=u-d||+o<+s)&&(o=t.value1),(+u<=+o+ +d||+u>+c)&&(u=t.value2),+s>=+c+ +d&&(s=t.min),o=+s>=+o?s:o,+s>+u&&(o=s,u=+s+ +d),+c<=+s+ +d&&(c=t.max),u=+c<=+u?c:u,+c<=+o&&(u=c,o=c-d),s===t.min&&c===t.max&&m===t.vertical&&o===t.value1&&u===t.value2||(_=r(t,o,s,c,v),p=r(t,u,s,c,v)),a(a({},t),{min:s,max:c,disableValues:f,vertical:m,oneRunner:h,step:d,value1:h?s:o,value2:u,left:h?-t.ballWidth/2:_,right:p,widthScale:v});default:return t}}},function(e,t,n){"use strict";t.__esModule=!0;var a=n(7);t.loadFirstData=function(e){return{type:a.LOAD_FIRST_DATA,amount:e}};t.changeBallValueFirst=function(e){return{type:a.CHANGE_BALL_VALUE_FIRST,amount:e}};t.changeBallValueSecond=function(e){return{type:a.CHANGE_BALL_VALUE_SECOND,amount:e}};t.changeState=function(e){return{type:a.CHANGE_STATE,amount:e}}},function(e,t,n){"use strict";t.__esModule=!0;t.LOAD_FIRST_DATA="LOAD_FIRST_DATA";t.CHANGE_BALL_VALUE_FIRST="CHANGE_BALL_VALUE_FIRST";t.CHANGE_BALL_VALUE_SECOND="CHANGE_BALL_VALUE_SECOND";t.CHANGE_STATE="CHANGE_STATE"},function(e,t,n){"use strict";t.__esModule=!0;var a=function(e){var t=this;this.init=function(){t.findDom(),t.getDataFromAttr()},this.getCoords=function(e){var t=e[0].getBoundingClientRect();return{top:t.top+pageYOffset,left:t.left+pageXOffset}},this.mousedown=function(e,n,a,r){var i=r.vertical,l=r.step,o=r.widthScale,u=r.max,s=r.min,c=r.ballWidth,d=t.getCoords(a),f=i?e.pageY-d.top:e.pageX-d.left,m=i?l*o/(3*(u-s)):l*o/(u-s),h=function(e){var a=i?e.pageY-f-t.$sliderCoords.top:e.pageX-f-t.$sliderCoords.left;a=m*Math.round(a/m)-c/2,n(a)},v=function(){$(document).off("mousemove",h),$(document).off("mouseup",v)};$(document).on("mousemove",h),$(document).on("mouseup",v)},this.findDom=function(){t.$slider&&["scale","min","max","step","range","between","begin","end","vertical",["ball1","ball_first"],["ball2","ball_second"],["ball1","ball_first"],["value1","value_first"],["value2","value_second"],["num1","num_first"],["num2","num_second"],["disableValues","values-runners"],["oneRunner","one-runner"]].forEach((function(e){"string"==typeof e?t["$"+e]=t.$slider.find(".slider__"+e):t["$"+e[0]]=t.$slider.find(".slider__"+e[1])}))},this.getDataFromAttr=function(){null!==t.$slider&&(t.data=JSON.parse(t.$slider.attr("data-options")),t.data.widthScale=t.$scale.width(),t.data.ballWidth=t.$ball1.width(),t.$sliderCoords=t.getCoords(t.$scale))},this.render=function(e){var n=e.value1,a=e.value2,r=e.min,i=e.max,l=e.step,o=e.disableValues,u=e.vertical,s=e.oneRunner,c=e.left,d=e.right,f=[["begin",r],["end",i],["num1",n],["num2",a]],m=[["min",r],["max",i],["value1",n],["value2",a],["step",l]],h=[["between",u?"height":"width",d-c],["between",u?"width":"height","0.75rem"],["between","left",u?"0":+c+ +t.$ball1.width()/2],["between","top",u?+c+ +t.$ball1.width()/2:"0"],["ball1","left",u?"50%":c],["ball1","transform",u?"translateX(-50%) translateY(0%)":"translateX(0%) translateY(-50%)"],["ball1","top",u?c:"50%"],["ball2","left",u?"50%":d],["ball2","transform",u?"translateX(-50%) translateY(0%)":"translateX(0%) translateY(-50%)"],["ball2","top",u?d:"50%"]];f.forEach((function(e){return t["$"+e[0]].html(e[1])})),m.forEach((function(e){return t["$"+e[0]].val(e[1])})),h.forEach((function(e){return t["$"+e[0]].css(e[1],e[2])})),t.disableValuesOverBalls(o),t.sliderVertical(u),t.enableOneBall(s)},this.sendDatafromViewToController=function(){return t.data},this.addEventListeners=function(e,n,a){var r=t.data,i={min:r.min,max:r.max,step:r.step,disableValues:r.disableValues,vertical:r.vertical,oneRunner:r.oneRunner,widthScale:r.widthScale,ballWidth:r.ballWidth};["min","max","value1","value2","step"].forEach((function(n){t["$"+n].change((function(){i[n]=t["$"+n].val(),e(i)}))})),["disableValues","vertical","oneRunner"].forEach((function(n){t["$"+n].change((function(){i[n]=!i[n],e(i)}))})),t.$ball1.mousedown((function(e){return t.mousedown(e,n,t.$ball1,i)})),t.$ball2.mousedown((function(e){return t.mousedown(e,a,t.$ball2,i)}))},this.disableValuesOverBalls=function(e){e?t.$num1.addClass("slider__num_hide"):t.$num1.removeClass("slider__num_hide"),e?t.$num2.addClass("slider__num_hide"):t.$num2.removeClass("slider__num_hide")},this.sliderVertical=function(e){["range","scale","between","begin","end"].forEach((function(n){return e?t["$"+n].addClass("slider__"+n+"_vertical"):t["$"+n].removeClass("slider__"+n+"_vertical")})),e?t.$num1.addClass("slider__num_vertical"):t.$num1.removeClass("slider__num_vertical"),e?t.$num2.addClass("slider__num_vertical"):t.$num2.removeClass("slider__num_vertical")},this.enableOneBall=function(e){e?t.$ball1.addClass("slider__ball_hide"):t.$ball1.removeClass("slider__ball_hide"),e?t.$value1.addClass("slider__value_white"):t.$value1.removeClass("slider__value_white")},this.$slider=e,this.init()};t.default=a},function(e,t,n){var a={"./components/slider/slider.scss":10,"./components/slider__panel/slider__panel.scss":12,"./components/slider__range/slider__range.scss":14,"./index.js":1,"./mvc/controller/controller.js":2,"./mvc/model/model.js":3,"./mvc/view/view.js":8,"./redux/actionCreators.js":6,"./redux/actions.js":7,"./redux/createStore.js":4,"./redux/reducer.js":5,"./script.js":16};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=9},function(e,t,n){var a=n(0),r=n(11);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},l=(a(e.i,r,i),r.locals?r.locals:{});e.exports=l},function(e,t,n){},function(e,t,n){var a=n(0),r=n(13);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},l=(a(e.i,r,i),r.locals?r.locals:{});e.exports=l},function(e,t,n){},function(e,t,n){var a=n(0),r=n(15);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},l=(a(e.i,r,i),r.locals?r.locals:{});e.exports=l},function(e,t,n){},function(e,t,n){"use strict";t.__esModule=!0;var a=n(8),r=n(3),i=n(2);!function(e){e.fn.slider=function(t){this.each((function(t,n){var l=new a.default(e(n)),o=new r.default;new i.default(l,o)}))},e(".slider").slider()}(jQuery)}]);