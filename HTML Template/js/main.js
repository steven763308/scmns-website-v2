$('.interactive-menu-button a').click(function() {
  $(this).toggleClass('active');
});

var scroll = new SmoothScroll('a[href*="#"]');

$('.more-btn').click(function() {
  $('#hiden-gallery').toggleClass('hide');
  $('#hiden-gallery').toggleClass('open');
  if ( $('#hiden-gallery').is( ".open" ) ) {
    $(".more-btn-inside").text("Show Less.");
  }else {
    $(".more-btn-inside").text("Show More.");
  }
});

function slickify(){
  $('.blog-slider').slick({
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
            breakpoint: 991,
            settings: "unslick"
        }
      ] 
  });
  $(".slick-next").text("");
  $(".slick-next").addClass("icofont-long-arrow-right");
  $(".slick-prev").text("");
  $(".slick-prev").addClass("icofont-long-arrow-left");
}

slickify();
$(window).resize(function(){
  var $windowWidth = $(window).width();
  if ($windowWidth > 991) {
      slickify(); 
      $('#blog-btn').addClass('hide-me');  
  }else if($windowWidth < 991) {
    $('#blog-btn').removeClass('hide-me');
  }
});

$('#blog-btn').click(function() {
  $('.hiden-blog').toggleClass('hide-blog');
  $('.hiden-blog').toggleClass('open-blog');
  if ( $('.hiden-blog').is( ".open-blog" ) ) {
    $("#blog-btn").text("Show Less Stories.");
  }else {
    $("#blog-btn").text("Show More Stories.");
  }
});

//preload animation
window.addEventListener("load", () => {
  const pre = document.getElementById("preloader");

  // ✅ 延迟 2.5 秒再开始移除动画
  setTimeout(() => {
    pre.classList.add("hide");
  }, 2500); // 可改为 3000 即 3 秒

  // ✅ 动画滑出后彻底移除元素
  setTimeout(() => {
    pre.remove();
  }, 4000); // 此值 = 上面 2500 + 动画滑出时间 1500
});

// Back to Top 按钮逻辑
document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    // 显示/隐藏按钮
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });

    // 点击按钮 → 平滑回到顶部
    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});



