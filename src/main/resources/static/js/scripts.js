!function(e){"use strict";var t=e("#preloader");e(window).on("load",function(){setTimeout(function(){t.fadeOut("slow",function(){e(this).remove()})},300)}),window.innerWidth<=1364&&e(".page-container").addClass("sbar_collapsed"),e(".nav-btn").on("click",function(){e(".page-container").toggleClass("sbar_collapsed")});var n=function(){var t=(window.innerHeight>0?window.innerHeight:this.screen.height)-5;(t-=67)<1&&(t=1),t>67&&e(".main-content").css("min-height",t+"px")};if(e(window).ready(n),e(window).on("resize",n),e("#menu").metisMenu(),e(".menu-inner").slimScroll({height:"auto"}),e(".nofity-list").slimScroll({height:"435px"}),e(".timeline-area").slimScroll({height:"500px"}),e(".recent-activity").slimScroll({height:"calc(100vh - 114px)"}),e(".settings-list").slimScroll({height:"calc(100vh - 158px)"}),e(window).on("scroll",function(){var t=e(window).scrollTop();e("#sticky-header").innerHeight();t>1?e("#sticky-header").addClass("sticky-menu"):e("#sticky-header").removeClass("sticky-menu")}),e('[data-toggle="popover"]').popover(),window.addEventListener("load",function(){var e=document.getElementsByClassName("needs-validation");Array.prototype.filter.call(e,function(e){e.addEventListener("submit",function(t){!1===e.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.classList.add("was-validated")},!1)})},!1),e("#dataTable").length&&e("#dataTable").DataTable({responsive:!0}),e("#dataTable2").length&&e("#dataTable2").DataTable({responsive:!0}),e("#dataTable3").length&&e("#dataTable3").DataTable({responsive:!0}),e("ul#nav_menu").slicknav({prependTo:"#mobile_menu"}),e(".form-gp input").on("focus",function(){e(this).parent(".form-gp").addClass("focused")}),e(".form-gp input").on("focusout",function(){0===e(this).val().length&&e(this).parent(".form-gp").removeClass("focused")}),e(".settings-btn, .offset-close").on("click",function(){e(".offset-area").toggleClass("show_hide"),e(".settings-btn").toggleClass("active")}),e(".testimonial-carousel").owlCarousel({margin:50,loop:!0,autoplay:!1,nav:!1,dots:!0,responsive:{0:{items:1},450:{items:1},768:{items:2},1000:{items:2},1360:{items:1},1600:{items:2}}}),e("#full-view").length){var l=document.getElementById("full-view"),s=document.getElementById("full-view-exit");l.addEventListener("click",function(t){var n;t.preventDefault(),(n=document.documentElement).requestFullscreen?n.requestFullscreen():n.webkitRequestFullscreen?n.webkitRequestFullscreen():n.mozRequestFullScreen?n.mozRequestFullScreen():n.msRequestFullscreen?n.msRequestFullscreen():console.log("Fullscreen API is not supported."),e("body").addClass("expanded")}),s.addEventListener("click",function(t){t.preventDefault(),document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():console.log("Fullscreen API is not supported."),e("body").removeClass("expanded")})}}(jQuery);