$((function(){$(".bike-slider, .gallery__list").slick({arrows:!1,dots:!0,fade:!0,autoplay:!0,autoplaySpeed:2e3})})),$(".menu, .bike__column").on("click","a",(function(e){e.preventDefault();var t=$(this).attr("href"),a=$(t).offset().top;$("body,html").animate({scrollTop:a},1500)}));