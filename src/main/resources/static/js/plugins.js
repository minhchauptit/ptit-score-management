!function(){for(var n,e=function(){},t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],u=t.length,r=window.console=window.console||{};u--;)r[n=t[u]]||(r[n]=e)}(),function(n){"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(e)}):"object"==typeof module&&"object"==typeof module.exports?exports=n(require("jquery")):n(jQuery)}(function(n){n.easing.jswing=n.easing.swing;var e=Math.pow,t=Math.sqrt,u=Math.sin,r=Math.cos,i=Math.PI,o=1.70158,a=1.525*o,c=2*i/3,s=2*i/4.5;function f(n){var e=7.5625,t=2.75;return n<1/t?e*n*n:n<2/t?e*(n-=1.5/t)*n+.75:n<2.5/t?e*(n-=2.25/t)*n+.9375:e*(n-=2.625/t)*n+.984375}n.extend(n.easing,{def:"easeOutQuad",swing:function(e){return n.easing[n.easing.def](e)},easeInQuad:function(n){return n*n},easeOutQuad:function(n){return 1-(1-n)*(1-n)},easeInOutQuad:function(n){return n<.5?2*n*n:1-e(-2*n+2,2)/2},easeInCubic:function(n){return n*n*n},easeOutCubic:function(n){return 1-e(1-n,3)},easeInOutCubic:function(n){return n<.5?4*n*n*n:1-e(-2*n+2,3)/2},easeInQuart:function(n){return n*n*n*n},easeOutQuart:function(n){return 1-e(1-n,4)},easeInOutQuart:function(n){return n<.5?8*n*n*n*n:1-e(-2*n+2,4)/2},easeInQuint:function(n){return n*n*n*n*n},easeOutQuint:function(n){return 1-e(1-n,5)},easeInOutQuint:function(n){return n<.5?16*n*n*n*n*n:1-e(-2*n+2,5)/2},easeInSine:function(n){return 1-r(n*i/2)},easeOutSine:function(n){return u(n*i/2)},easeInOutSine:function(n){return-(r(i*n)-1)/2},easeInExpo:function(n){return 0===n?0:e(2,10*n-10)},easeOutExpo:function(n){return 1===n?1:1-e(2,-10*n)},easeInOutExpo:function(n){return 0===n?0:1===n?1:n<.5?e(2,20*n-10)/2:(2-e(2,-20*n+10))/2},easeInCirc:function(n){return 1-t(1-e(n,2))},easeOutCirc:function(n){return t(1-e(n-1,2))},easeInOutCirc:function(n){return n<.5?(1-t(1-e(2*n,2)))/2:(t(1-e(-2*n+2,2))+1)/2},easeInElastic:function(n){return 0===n?0:1===n?1:-e(2,10*n-10)*u((10*n-10.75)*c)},easeOutElastic:function(n){return 0===n?0:1===n?1:e(2,-10*n)*u((10*n-.75)*c)+1},easeInOutElastic:function(n){return 0===n?0:1===n?1:n<.5?-e(2,20*n-10)*u((20*n-11.125)*s)/2:e(2,-20*n+10)*u((20*n-11.125)*s)/2+1},easeInBack:function(n){return 2.70158*n*n*n-o*n*n},easeOutBack:function(n){return 1+2.70158*e(n-1,3)+o*e(n-1,2)},easeInOutBack:function(n){return n<.5?e(2*n,2)*(7.189819*n-a)/2:(e(2*n-2,2)*((a+1)*(2*n-2)+a)+2)/2},easeInBounce:function(n){return 1-f(1-n)},easeOutBounce:f,easeInOutBounce:function(n){return n<.5?(1-f(1-2*n))/2:(1+f(2*n-1))/2}})});