(function ($) {
    "use strict";
  
  
    // Sticky Section
    var fixed_top = $(".page-contains-area");
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 1800) {
        fixed_top.addClass("animated fadeInDown section-fixed");
      } else {
        fixed_top.removeClass("animated fadeInDown section-fixed");
      }
    });
  
  
  
    //Hide Loading Box (Preloader)
    function handlePreloader() {
      if ($('.loader-wrap').length) {
        $('.loader-wrap').delay(1000).fadeOut(500);
      }
    }
  
    if ($(".preloader-close").length) {
      $(".preloader-close").on("click", function () {
        $('.loader-wrap').delay(200).fadeOut(500);
      })
    }
  
  
  
  
  
    function thmSwiperInit() {
      // swiper slider
      if ($(".thm-swiper__slider").length) {
        $(".thm-swiper__slider").each(function () {
          let elm = $(this);
          let options = elm.data('swiper-options');
          let thmSwiperSlider = new Swiper(elm, options);
        });
      }
    }
  
  
  
    function thmOwlInit() {
      // owl slider
  
      if ($(".thm-owl__carousel").length) {
        $(".thm-owl__carousel").each(function () {
          let elm = $(this);
          let options = elm.data('owl-options');
          let thmOwlCarousel = elm.owlCarousel(options);
        });
      }
  
      if ($(".thm-owl__carousel--custom-nav").length) {
        $(".thm-owl__carousel--custom-nav").each(function () {
          let elm = $(this);
          let owlNavPrev = elm.data('owl-nav-prev');
          let owlNavNext = elm.data('owl-nav-next');
          $(owlNavPrev).on("click", function (e) {
            elm.trigger('prev.owl.carousel');
            e.preventDefault();
          })
  
          $(owlNavNext).on("click", function (e) {
            elm.trigger('next.owl.carousel');
            e.preventDefault();
          })
        });
      }
  
    }
  
  
  
  
    function dynamicCurrentMenuClass(selector) {
      let FileName = window.location.href.split("/").reverse()[0];
  
      selector.find("li").each(function () {
        let anchor = $(this).find("a");
        if ($(anchor).attr("href") == FileName) {
          $(this).addClass("current");
        }
      });
      // if any li has .current elmnt add class
      selector.children("li").each(function () {
        if ($(this).find(".current").length) {
          $(this).addClass("current");
        }
      });
      // if no file name return
      if ("" == FileName) {
        selector.find("li").eq(0).addClass("current");
      }
  
  
    }
  
  
  
    if ($(".main-menu__list").length) {
      // dynamic current class
      let mainNavUL = $(".main-menu__list");
      dynamicCurrentMenuClass(mainNavUL);
    }
  
  
    if ($(".service-details__sidebar-service-list").length) {
      // dynamic current class
      let mainNavUL = $(".service-details__sidebar-service-list");
      dynamicCurrentMenuClass(mainNavUL);
    }
  
  
    if ($(".main-menu__list").length && $(".mobile-nav__container").length) {
      let navContent = document.querySelector(".main-menu__list").outerHTML;
      let mobileNavContainer = document.querySelector(".mobile-nav__container");
      mobileNavContainer.innerHTML = navContent;
    }
  
  
  
    if ($(".sticky-header__content").length) {
      let navContent = document.querySelector(".main-menu").innerHTML;
      let mobileNavContainer = document.querySelector(".sticky-header__content");
      mobileNavContainer.innerHTML = navContent;
    }
  
  
  
  
    if ($(".mobile-nav__container .main-menu__list").length) {
      let dropdownAnchor = $(
        ".mobile-nav__container .main-menu__list .dropdown > a"
      );
      dropdownAnchor.each(function () {
        let self = $(this);
        let toggleBtn = document.createElement("BUTTON");
        toggleBtn.setAttribute("aria-label", "dropdown toggler");
        toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
        self.append(function () {
          return toggleBtn;
        });
        self.find("button").on("click", function (e) {
          e.preventDefault();
          let self = $(this);
          self.toggleClass("expanded");
          self.parent().toggleClass("expanded");
          self.parent().parent().children("ul").slideToggle();
        });
      });
    }
  
  
  
    if ($(".mobile-nav__toggler").length) {
      $(".mobile-nav__toggler").on("click", function (e) {
        e.preventDefault();
        $(".mobile-nav__wrapper").toggleClass("expanded");
        $("body").toggleClass("locked");
      });
    }
  
  
    //Fact Counter + Text Count
    if ($(".count-box").length) {
      $(".count-box").appear(
        function () {
          var $t = $(this),
            n = $t.find(".count-text").attr("data-stop"),
            r = parseInt($t.find(".count-text").attr("data-speed"), 10);
  
          if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
              countNum: $t.find(".count-text").text()
            }).animate({
              countNum: n
            }, {
              duration: r,
              easing: "linear",
              step: function () {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find(".count-text").text(this.countNum);
              }
            });
          }
        }, {
          accY: 0
        }
      );
    }
  
  
  
    // Service Style1 Tab
    if ($('.service-style1-tab').length) {
      $('.service-style1-tab .tabs-button-box .tab-btn-item').on('click', function (e) {
        e.preventDefault();
        var target = $($(this).attr('data-tab'));
  
        if ($(target).hasClass('actve-tab')) {
          return false;
        } else {
          $('.service-style1-tab .tabs-button-box .tab-btn-item').removeClass('active-btn-item');
          $(this).addClass('active-btn-item');
          $('.service-style1-tab .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');
          $(target).addClass('tab-content-box-item-active');
        }
      });
    }
  
  
    // Money Exchange Value Tab
    if ($('.money-exchange-value-tab').length) {
      $('.money-exchange-value-tab .tabs-button-box .tab-btn-item').on('click', function (e) {
        e.preventDefault();
        var target = $($(this).attr('data-tab'));
  
        if ($(target).hasClass('actve-tab')) {
          return false;
        } else {
          $('.money-exchange-value-tab .tabs-button-box .tab-btn-item').removeClass('active-btn-item');
          $(this).addClass('active-btn-item');
          $('.money-exchange-value-tab .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');
          $(target).addClass('tab-content-box-item-active');
        }
      });
    }
  
  
    // Emi Calculator Tab
    if ($('.emi-calculator-tab').length) {
      $('.emi-calculator-tab .tabs-button-box .tab-btn-item').on('click', function (e) {
        e.preventDefault();
        var target = $($(this).attr('data-tab'));
  
        if ($(target).hasClass('actve-tab')) {
          return false;
        } else {
          $('.emi-calculator-tab .tabs-button-box .tab-btn-item').removeClass('active-btn-item');
          $(this).addClass('active-btn-item');
          $('.emi-calculator-tab .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');
          $(target).addClass('tab-content-box-item-active');
        }
      });
    }
  
  
  
    //Price Range Slider
    if ($('.price-range-slider').length) {
      $(".price-range-slider").slider({
        range: true,
        min: 0,
        max: 200000,
        values: [0, 150000],
        slide: function (event, ui) {
          $("input.property-amount").val(ui.values[0] + " - " + ui.values[1]);
        }
      });
  
      $("input.property-amount").val($(".price-range-slider").slider("values", 0) + " - $" + $(".price-range-slider").slider("values", 1));
    }
  
  
    //Loan Term Range Slider
    if ($('.loan-term-range-slider').length) {
      $(".loan-term-range-slider").slider({
        range: true,
        min: 0,
        max: 30,
        values: [0, 20],
        slide: function (event, ui) {
          $("input.loan-term-range").val(ui.values[0] + " - " + ui.values[1]);
        }
      });
  
      $("input.loan-term-range").val($(".loan-term-range-slider").slider("values", 0) + " - " + $(".loan-term-range-slider").slider("values", 1));
    }
  
  
    //Interest Rate Range Slider
    if ($('.interest-rate-range-slider').length) {
      $(".interest-rate-range-slider").slider({
        range: true,
        max: 100,
        values: [0, 14],
        slide: function (event, ui) {
          $("input.interest-rate-range").val(ui.values[0] + " - " + ui.values[1]);
        }
      });
  
      $("input.interest-rate-range").val($(".interest-rate-range-slider").slider("values", 0) + " - " + $(".interest-rate-range-slider").slider("values", 1));
    }
  
  
    //===Language switcher===
    function languageSwitcher() {
      if ($("#polyglot-language-options").length) {
        $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
          effect: 'slide',
          animSpeed: 100,
          testMode: true,
          onChange: function (evt) {
            alert("The selected language is: " + evt.selectedItem);
          }
  
        });
      };
    }
  
  
    // Banking Tab
    if ($('.banking-tab').length) {
      $('.banking-tab .tabs-button-box .tab-btn-item').on('click', function (e) {
        e.preventDefault();
        var target = $($(this).attr('data-tab'));
  
        if ($(target).hasClass('actve-tab')) {
          return false;
        } else {
          $('.banking-tab .tabs-button-box .tab-btn-item').removeClass('active-btn-item');
          $(this).addClass('active-btn-item');
          $('.banking-tab .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');
          $(target).addClass('tab-content-box-item-active');
        }
      });
    }
  
  
    // === Round Progress Bar===
    if ($('.dial').length) {
      $('.dial').appear(function () {
        var elm = $(this);
        var color = elm.attr('data-fgColor');
        var perc = elm.attr('value');
        elm.knob({
          'value': 0,
          'min': 0,
          'max': 100,
          'skin': 'tron',
          'readOnly': true,
          'thickness': 0.12,
          'dynamicDraw': true,
          'displayInput': false
        });
        $({
          value: 0
        }).animate({
          value: perc
        }, {
          duration: 2000,
          easing: 'swing',
          progress: function () {
            elm.val(Math.ceil(this.value)).trigger('change');
          }
        });
        $(this).append(function () {});
      }, {
        accY: 20
      });
    }
  
  
  
    // ===Project //  masonary===
    function projectMasonaryLayout() {
      if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
          layoutMode: 'masonry'
        });
      }
      if ($('.post-filter').length) {
        $('.post-filter li').children('.filter-text').on('click', function () {
          var Self = $(this);
          var selector = Self.parent().attr('data-filter');
          $('.post-filter li').removeClass('active');
          Self.parent().addClass('active');
          $('.filter-layout').isotope({
            filter: selector,
            animationOptions: {
              duration: 500,
              easing: 'linear',
              queue: false
            }
          });
          return false;
        });
      }
  
      if ($('.post-filter.has-dynamic-filters-counter').length) {
        // var allItem = $('.single-filter-item').length;
        var activeFilterItem = $('.post-filter.has-dynamic-filters-counter').find('li');
        activeFilterItem.each(function () {
          var filterElement = $(this).data('filter');
          var count = $('.filter-layout').find(filterElement).length;
          $(this).children('.filter-text').append('<span class="count">' + count + '</span>');
        });
      };
    }
  
  
    //Add One Page nav
    if ($('.scroll-nav').length) {
      $('.scroll-nav').onePageNav();
    }
  
  
    // Branch Atm Tab
    if ($('.branch-atm-tab').length) {
      $('.branch-atm-tab .tabs-button-box .tab-btn-item').on('click', function (e) {
        e.preventDefault();
        var target = $($(this).attr('data-tab'));
  
        if ($(target).hasClass('actve-tab')) {
          return false;
        } else {
          $('.branch-atm-tab .tabs-button-box .tab-btn-item').removeClass('active-btn-item');
          $(this).addClass('active-btn-item');
          $('.branch-atm-tab .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');
          $(target).addClass('tab-content-box-item-active');
        }
      });
    }
  
  
  
    // Branch Atm Tab
    if ($('.features-style2-tab').length) {
      $('.features-style2-tab .tabs-button-box .tab-btn-item').on('click', function (e) {
        e.preventDefault();
        var target = $($(this).attr('data-tab'));
  
        if ($(target).hasClass('actve-tab')) {
          return false;
        } else {
          $('.features-style2-tab .tabs-button-box .tab-btn-item').removeClass('active-btn-item');
          $(this).addClass('active-btn-item');
          $('.features-style2-tab .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');
          $(target).addClass('tab-content-box-item-active');
        }
      });
    }
  
  
  
    // Customer Care Numbers Tab
    if ($('.customer-care-numbers-tab').length) {
      $('.customer-care-numbers-tab .tabs-button-box .tab-btn-item').on('click', function (e) {
        e.preventDefault();
        var target = $($(this).attr('data-tab'));
  
        if ($(target).hasClass('actve-tab')) {
          return false;
        } else {
          $('.customer-care-numbers-tab .tabs-button-box .tab-btn-item').removeClass('active-btn-item');
          $(this).addClass('active-btn-item');
          $('.customer-care-numbers-tab .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');
          $(target).addClass('tab-content-box-item-active');
        }
      });
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
    //====== Magnific Popup
    if ($(".video-popup").length) {
      $(".video-popup").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: true,
  
        fixedContentPos: false
      });
    }
  
  
  
    if ($(".img-popup").length) {
      var groups = {};
      $(".img-popup").each(function () {
        var id = parseInt($(this).attr("data-group"), 10);
  
        if (!groups[id]) {
          groups[id] = [];
        }
  
        groups[id].push(this);
      });
  
      $.each(groups, function () {
        $(this).magnificPopup({
          type: "image",
          closeOnContentClick: true,
          closeBtnInside: false,
          gallery: {
            enabled: true
          }
        });
      });
    }
  
  
    //Bottom Parallax
    if ($('.bottom-parallax').length) {
      var windowpos = $(window).scrollTop();
      var siteFooter = $('.footer-area').height();
      var sitebodyHeight = $('.boxed_wrapper').height();
      var finalHeight = sitebodyHeight - siteFooter - 1000;
      if (windowpos >= finalHeight) {
        $('body').addClass('parallax-visible');
      } else {
        $('body').removeClass('parallax-visible');
      }
    }
  
  
  
    // AOS Animation
    if ($("[data-aos]").length) {
      AOS.init({
        duration: '1000',
        disable: 'false',
        easing: 'ease',
        mirror: true
      });
    }
  
  
    //Contact Form Validation
    if ($("#contact-form").length) {
      $("#contact-form").validate({
        submitHandler: function (form) {
          var form_btn = $(form).find('button[type="submit"]');
          var form_result_div = '#form-result';
          $(form_result_div).remove();
          form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
          var form_btn_old_msg = form_btn.html();
          form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
          $(form).ajaxSubmit({
            dataType: 'json',
            success: function (data) {
              if (data.status = 'true') {
                $(form).find('.form-control').val('');
              }
              form_btn.prop('disabled', false).html(form_btn_old_msg);
              $(form_result_div).html(data.message).fadeIn('slow');
              setTimeout(function () {
                $(form_result_div).fadeOut('slow')
              }, 6000);
            }
          });
        }
      });
    }
  
  
    if ($("#datepicker").length) {
      $("#datepicker").datepicker();
    }
  
  
  
    if ($(".odometer").length) {
      var odo = $(".odometer");
      odo.each(function () {
        $(this).appear(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
        });
      });
    }
  
  
    if ($(".banner-bg-slide").length) {
      $(".banner-bg-slide").each(function () {
        var Self = $(this);
        var bgSlideOptions = Self.data("options");
        var bannerTwoSlides = Self.vegas(bgSlideOptions);
      });
    }
  
  
    if ($(".wow").length) {
      var wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true // act on asynchronously loaded content (default is true)
      });
      wow.init();
    }
  
  
  
    if ($(".search-toggler").length) {
      $(".search-toggler").on("click", function (e) {
        e.preventDefault();
        $(".search-popup").toggleClass("active");
        $(".mobile-nav__wrapper").removeClass("expanded");
        $("body").toggleClass("locked");
      });
    }
  
  
  
    //Accordion Box
    if ($('.accordion-box').length) {
      $(".accordion-box").on('click', '.acc-btn', function () {
  
        var outerBox = $(this).parents('.accordion-box');
        var target = $(this).parents('.accordion');
  
        if ($(this).hasClass('active') !== true) {
          $(outerBox).find('.accordion .acc-btn').removeClass('active');
        }
  
        if ($(this).next('.acc-content').is(':visible')) {
          return false;
        } else {
          $(this).addClass('active');
          $(outerBox).children('.accordion').removeClass('active-block');
          $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
          target.addClass('active-block');
          $(this).next('.acc-content').slideDown(300);
        }
      });
    }
  
  
  
  
  
  
  
  
    function SmoothMenuScroll() {
      var anchor = $(".scrollToLink");
      if (anchor.length) {
        anchor.children("a").bind("click", function (event) {
          if ($(window).scrollTop() > 10) {
            var headerH = "90";
          } else {
            var headerH = "90";
          }
          var target = $(this);
          $("html, body")
            .stop()
            .animate({
                scrollTop: $(target.attr("href")).offset().top - headerH + "px"
              },
              600,
              "easeInSine"
            );
          anchor.removeClass("current");
          anchor.removeClass("current-menu-ancestor");
          anchor.removeClass("current_page_item");
          anchor.removeClass("current-menu-parent");
          target.parent().addClass("current");
          event.preventDefault();
        });
      }
    }
    SmoothMenuScroll();
  
  
    function OnePageMenuScroll() {
      var windscroll = $(window).scrollTop();
      if (windscroll >= 117) {
        var menuAnchor = $(".one-page-scroll-menu .scrollToLink").children("a");
        menuAnchor.each(function () {
          var sections = $(this).attr("href");
          $(sections).each(function () {
            if ($(this).offset().top <= windscroll + 100) {
              var Sectionid = $(sections).attr("id");
              $(".one-page-scroll-menu").find("li").removeClass("current");
              $(".one-page-scroll-menu").find("li").removeClass("current-menu-ancestor");
              $(".one-page-scroll-menu").find("li").removeClass("current_page_item");
              $(".one-page-scroll-menu").find("li").removeClass("current-menu-parent");
              $(".one-page-scroll-menu")
                .find("a[href*=\\#" + Sectionid + "]")
                .parent()
                .addClass("current");
            }
          });
        });
      } else {
        $(".one-page-scroll-menu li.current").removeClass("current");
        $(".one-page-scroll-menu li:first").addClass("current");
      }
    }
  
  
  
  
  
  
  
    // window load event
    $(window).on("load", function () {
  
      thmSwiperInit();
      thmOwlInit();
      handlePreloader();
      languageSwitcher();
      projectMasonaryLayout();
  
  
      //Jquery Spinner / Quantity Spinner
      if ($('.quantity-spinner').length) {
        $("input.quantity-spinner").TouchSpin({
          verticalbuttons: true
        });
      }
  
      //Jquery Curved Circle
      if ($('.curved-circle').length) {
        $('.curved-circle').circleType({
          position: 'absolute',
          dir: 1,
          radius: 70,
          forceHeight: true,
          forceWidth: true
        });
      }
  
    });
  
  
  
  
    // window scroll event
    $(window).on("scroll", function () {
  
      //Stricked Menu Fixed
      if ($(".stricked-menu").length) {
        var headerScrollPos = 130;
        var stricky = $(".stricked-menu");
        if ($(window).scrollTop() > headerScrollPos) {
          stricky.addClass("stricky-fixed");
        } else if ($(this).scrollTop() <= headerScrollPos) {
          stricky.removeClass("stricky-fixed");
        }
      }
  
      //Scroll To Top
      if ($(".scroll-to-top").length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
          $(".scroll-to-top").fadeIn(500);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
          $(".scroll-to-top").fadeOut(500);
        }
      }
  
      OnePageMenuScroll();
  
  
    });
  
  
  
  
    if ($(".scroll-to-target").length) {
      $(".scroll-to-target").on("click", function () {
        var target = $(this).attr("data-target");
        // animate
        $("html, body").animate({
            scrollTop: $(target).offset().top
          },
          100
        );
  
        return false;
      });
    }
  
  
    if ($('.paroller').length) {
      $('.paroller').paroller({
        factor: -0.1, // multiplier for scrolling speed and offset, +- values for direction control  
        factorLg: -0.1, // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
        type: 'foreground', // background, foreground  
        direction: 'vertical' // vertical, horizontal  
      });
    }
  
  
  
    if ($('.paroller-2').length) {
      $('.paroller-2').paroller({
        factor: 0.05, // multiplier for scrolling speed and offset, +- values for direction control  
        factorLg: 0.05, // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
        type: 'foreground', // background, foreground  
        direction: 'horizontal' // vertical, horizontal  
      });
    }
  
  
  
    $(document).ready(function () {
      $('select:not(.ignore)').niceSelect();
    });
  })(jQuery);


  const BASE_URL = "https://growsphereback.onrender.com"; // Replace with your actual backend URL

// Periodically check session status
setInterval(async () => {
  const response = await fetch(`${BASE_URL}/check-session`);
  const data = await response.json();
  if (!data.active) {
    alert("Your session has expired. Please sign in again.");
    window.location.href = "/index.html";
  }
}, 30000); // Check every 30 seconds

// Fetch user data on page load
document.addEventListener("DOMContentLoaded", () => {
  fetch(`${BASE_URL}/user-data`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.error(data.error);
        return;
      }
      document.querySelector(".username").textContent = data.username;
    })
    .catch((error) => console.error("Error fetching user data:", error));
});

// Fetch all-time earnings
document.addEventListener("DOMContentLoaded", () => {
  const allTimeEarningsElement = document.getElementById("all-time-earnings");

  fetch(`${BASE_URL}/all-time-earnings`)
    .then((response) => {
      if (!response.ok) throw new Error("Failed to fetch all-time earnings");
      return response.json();
    })
    .then((data) => {
      const totalEarnings = parseFloat(data.totalEarnings).toFixed(2);
      allTimeEarningsElement.textContent = `$${totalEarnings}`;
    })
    .catch((error) => {
      console.error("Error fetching all-time earnings:", error);
      allTimeEarningsElement.textContent = "$0"; // Fallback
    });
});

// Fetch dashboard data
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch(`${BASE_URL}/dashboard`);
    const data = await response.json();

    document.getElementById("active-package").textContent = data.activePackage;
    document.getElementById("gsp-cash").textContent = `$${data.gspCash.toFixed(2)}`;
    document.getElementById("sale-commission").textContent = `$${data.saleCommission.toFixed(2)}`;
    document.getElementById("todays-referrals").textContent = data.todaysReferrals;
    document.getElementById("total-referrals").textContent = data.totalReferrals;
  } catch (error) {
    console.error("Error loading dashboard:", error);
  }
});

// Generate referral link
fetch(`${BASE_URL}/generate-referral-link`)
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("referral-link").value = data.referralLink;
  });

/* const resetLocalStorage = () => {
      // Clear specific keys or all localStorage
      localStorage.removeItem("clickedTaskDate");
      localStorage.removeItem("clickedTaskIndex");
      localStorage.removeItem("rewardAmount");
  
      console.log("LocalStorage reset completed!");
    };
  
    // Call resetLocalStorage here to ensure a fresh start
    resetLocalStorage(); */

document.addEventListener("DOMContentLoaded", () => {
  const choose = document.getElementById("choose");
  const claimBtn = document.getElementById("claim-btn");
  const message = document.getElementById("task-message");
  const gspCashEl = document.getElementById("gsp-cash");

  let rewardAmount = 0;

  const today = new Date().toLocaleDateString();
  const savedTaskDate = localStorage.getItem("clickedTaskDate");

  // Restore state if task was clicked today
  if (savedTaskDate === today) {
    const savedTaskIndex = localStorage.getItem("clickedTaskIndex");
    const clickedTask = document.querySelector(`.task[data-index="${savedTaskIndex}"]`);
    clickedTask.innerHTML = `<div class="inner">
                              <div class="front"></div>
                              <div class="back">$${localStorage.getItem("rewardAmount")}</div>
                            </div>`;
    clickedTask.classList.add("flipped");
    claimBtn.disabled = true;
    rewardAmount = parseFloat(localStorage.getItem("rewardAmount"));
    message.textContent = "You have already completed today's task!";
  }

  // Handle task click
  choose.addEventListener("click", () => {
    if (localStorage.getItem("clickedTaskDate") === today) {
      message.textContent = "You can only click one task per day!";
      return;
    }

    // Generate random reward between $0.5 and $1.5
    rewardAmount = parseFloat((Math.random() * (1.5 - 0.5) + 0.5).toFixed(2));

    // Flip the task and display reward
    choose.innerHTML = `<div class="inner">
                          <div class="front"></div>
                          <div class="back">$${rewardAmount}</div>
                        </div>`;
    choose.classList.add("flipped");

    // Disable further clicks
    choose.style.pointerEvents = "none";

    // Enable claim button
    claimBtn.disabled = false;

    // Save state in local storage
    localStorage.setItem("clickedTaskIndex", choose.getAttribute("data-index"));
    localStorage.setItem("clickedTaskDate", today);
    localStorage.setItem("rewardAmount", rewardAmount);

    // Update message
    message.textContent = `You won $${rewardAmount}! Click "Claim Reward" to add to your GSP Cash.`;
  });

  // Claim reward
  claimBtn.addEventListener("click", async () => {
    try {
      const response = await fetch(`${BASE_URL}/claim-daily-task`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rewardAmount }),
      });

      if (!response.ok) {
        throw new Error("Failed to claim reward.");
      }

      const data = await response.json();
      const newGspCash = data.gspCash;

      // Update the GSP Cash display
      gspCashEl.textContent = `$${newGspCash.toFixed(2)}`;

      claimBtn.disabled = true;
      message.textContent = "Reward claimed! Redirecting you...";

      // Redirect to social media
      setTimeout(() => {
        window.location.href = "https://chat.whatsapp.com/EqPaCBNtoE8JL7ii52EUAe"; // Update to your desired URL
      }, 2000);
    } catch (error) {
      console.error("Error claiming reward:", error);
      message.textContent = "Failed to claim reward. Please try again.";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const activityList = document.getElementById("activity-list");

  // Display loading message
  activityList.innerHTML = "<li>Loading activities...</li>";

  // Fetch activities
  fetch(`${BASE_URL}/activity`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((activities) => {
      activityList.innerHTML = ""; // Clear the loading message

      if (activities.length === 0) {
        activityList.innerHTML = "<li>No activities found.</li>";
        return;
      }

      activities.forEach((activity) => {
        const listItem = document.createElement("li");
        const icon = document.createElement("span");
        const description = document.createElement("div");
        const timestamp = document.createElement("div");

        // Add classes
        icon.classList.add("icon");
        description.classList.add("description");
        timestamp.classList.add("timestamp");

        // Determine icon and styling
        switch (activity.activity_type) {
          case "Referral":
            icon.textContent = "👥";
            icon.style.color = "blue"; // Add color for distinction
            break;
          case "Withdrawal":
            icon.textContent = "💸";
            icon.style.color = "green";
            break;
          case "Task Completion":
            icon.textContent = "💼";
            icon.style.color = "orange";
            break;
          default:
            icon.textContent = "🔔";
            icon.style.color = "gray";
        }

        // Populate content
        description.innerHTML = `<strong>${activity.activity_type}:</strong> ${activity.activity_description}`;
        if (activity.related_username) {
          description.innerHTML += ` (Referred: <strong>${activity.related_username}</strong>)`;
        }
        timestamp.textContent = new Date(activity.created_at).toLocaleString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });

        // Append to list item
        listItem.appendChild(icon);
        listItem.appendChild(description);
        listItem.appendChild(timestamp);

        // Add to list
        activityList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching activities:", error);
      activityList.innerHTML = "<li>Error loading activities. Please try again later.</li>";
    });
});
document.addEventListener("DOMContentLoaded", () => {
  fetch(`${BASE_URL}/dashboard-data`)
    .then((response) => {
      if (!response.ok) throw new Error("Failed to fetch dashboard data.");
      return response.json();
    })
    .then((data) => {
      const { referralCount, dailyEarning, allTimeEarning, weeks } = data;

      const chartData = {
        labels: weeks,
        datasets: [
          {
            label: "Referrals",
            data: referralCount,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            tension: 0.4,
          },
          {
            label: "Daily Earnings ($)",
            data: dailyEarning,
            borderColor: "rgba(255, 159, 64, 1)",
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            tension: 0.4,
          },
          {
            label: "All-Time Earnings ($)",
            data: allTimeEarning,
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            tension: 0.4,
          },
        ],
      };

      const config = {
        type: "line",
        data: chartData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Weeks",
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Values",
              },
            },
          },
        },
      };

      const ctx = document.getElementById("combinedChart").getContext("2d");
      new Chart(ctx, config);
    })
    .catch((err) => {
      console.error("Error loading chart data:", err);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const itemsContainer = document.getElementById("items-container");
  const uploadForm = document.getElementById("upload-form");

  // Fetch and display items
  async function fetchItems() {
    try {
      const res = await fetch(`${BASE_URL}/get-items`);
      if (!res.ok) throw new Error("Failed to fetch items.");
      
      const items = await res.json();

      itemsContainer.innerHTML = items.map((item) => `
        <div class="item">
          <img src="${item.item_image || 'default-image.png'}" alt="${item.item_name}" />
          <h3>${item.item_name}</h3>
          <p>${item.item_description}</p>
          <p>Price: $${item.item_price}</p>
          <p>Uploaded by: ${item.uploader_name}</p>
          <p>Contact: ${item.uploader_contact}</p>
          <div class="comments">
            <h4>Comments</h4>
            <div id="comments-${item.id}"></div>
            <textarea id="comment-input-${item.id}" placeholder="Add a comment"></textarea>
            <button onclick="addComment(${item.id})">Post</button>
          </div>
        </div>
      `).join("");

      items.forEach((item) => fetchComments(item.id));
    } catch (error) {
      console.error("Error fetching items:", error);
      itemsContainer.innerHTML = "<p>Error loading items. Please try again later.</p>";
    }
  }

  // Add a comment
  async function addComment(itemId) {
    const commentInput = document.getElementById(`comment-input-${itemId}`);
    const comment = commentInput.value.trim();

    if (!comment) {
      showTemporaryMessage("Comment cannot be empty.","warning");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/add-comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ item_id: itemId, comment }),
      });

      if (!res.ok) throw new Error("Failed to add comment.");
      
      commentInput.value = "";
      fetchComments(itemId);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  }

  // Fetch comments for an item
  async function fetchComments(itemId) {
    try {
      const res = await fetch(`${BASE_URL}/get-comments/${itemId}`);
      if (!res.ok) throw new Error("Failed to fetch comments.");

      const comments = await res.json();

      const commentsDiv = document.getElementById(`comments-${itemId}`);
      commentsDiv.innerHTML = comments.map(c => `
        <div class="comment">
          <p><strong>${c.commenter_name}:</strong> ${c.comment}</p>
        </div>
      `).join("");
    } catch (error) {
      console.error(`Error fetching comments for item ${itemId}:`, error);
    }
  }

  // Handle item upload
  uploadForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(uploadForm);
      const res = await fetch(`${BASE_URL}/upload-item`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to upload item.");

      showTemporaryMessage("Item uploaded successfully!","success");
      uploadForm.reset();
      fetchItems();
    } catch (error) {
      console.error("Error uploading item:", error);
      showTemporaryMessage("Error uploading item. Please try again.","warning");
    }
  });

  // Initialize
  fetchItems();
});

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch(`${BASE_URL}/profile`, {
      method: "GET",
      credentials: "include", // Include session cookie
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }

    const user = await response.json();

    // Populate user data
    document.getElementById("first-name").textContent = user.first_name || "--";
    document.getElementById("last-name").textContent = user.last_name || "--";
    document.getElementById("username").textContent = user.username || "--";
    document.getElementById("email").textContent = user.email || "--";
    document.getElementById("phone-number").textContent = user.phone_number || "--";
    document.getElementById("country").textContent = user.country || "--";
    document.getElementById("active-package").textContent = user.active_package || "--";
    document.getElementById("coupon-code").textContent = user.coupon_code || "--";

  } catch (error) {
    console.error("Error loading profile:", error);
    showTemporaryMessage("Error fetching user profile. Please try again later.","warning");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Fetch balances and update UI
  async function fetchBalances() {
    try {
      const response = await fetch(`${BASE_URL}/get-balances`);
      if (!response.ok) throw new Error("Failed to fetch balances.");
      
      const data = await response.json();
      document.getElementById("sale-commission").textContent = `$${data.sale_commission.toFixed(2)}`;
      document.getElementById("gsp-cash").textContent = `$${data.gsp_cash.toFixed(2)}`;
    } catch (error) {
      console.error("Error fetching balances:", error);
      document.getElementById("withdraw-message").textContent = "Error fetching balances. Please try again later.";
    }
  }

  // Handle withdrawal
  async function handleWithdrawal(type) {
    try {
      const response = await fetch(`${BASE_URL}/withdraw`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type }),
      });

      const message = await response.text();
      document.getElementById("withdraw-message").textContent = message;

      // Update UI if withdrawal is successful
      if (message.toLowerCase().includes("successful")) {
        if (type === "sale_commission") {
          document.getElementById("sale-commission").textContent = "$0.00";
        } else if (type === "gsp_cash") {
          document.getElementById("gsp-cash").textContent = "$0.00";
        }
      }
    } catch (error) {
      console.error("Error processing withdrawal:", error);
      document.getElementById("withdraw-message").textContent = "Error processing withdrawal. Please try again later.";
    }
  }

  // Add event listeners for withdrawal buttons
  document.getElementById("withdraw-sale").addEventListener("click", () => handleWithdrawal("sale_commission"));
  document.getElementById("withdraw-gsp").addEventListener("click", () => handleWithdrawal("gsp_cash"));

  // Initial fetch for balances
  fetchBalances();
});
function showTemporaryMessage(message, type) { let messageContainer = document.getElementById("message-container");if (!messageContainer) {messageContainer = document.createElement("div");messageContainer.id = "message-container"; messageContainer.style.position = "fixed"; messageContainer.style.top = "10px"; messageContainer.style.right = "10px"; messageContainer.style.zIndex = "1000";document.body.appendChild(messageContainer);}const messageElement = document.createElement("div");messageElement.textContent = message;messageElement.style.padding = "10px 20px";messageElement.style.margin = "5px";messageElement.style.borderRadius = "5px";messageElement.style.color = "white";messageElement.style.fontWeight = "bold";messageElement.style.opacity = "1";messageElement.style.transition = "opacity 0.5s ease"; if (type === "success") { messageElement.style.backgroundColor = "#4caf50"; } else if (type === "warning") { messageElement.style.backgroundColor = "#f44336";   } messageContainer.appendChild(messageElement);setTimeout(() => { messageElement.style.opacity = "0"; setTimeout(() => {    messageContainer.removeChild(messageElement); }, 500);}, 4000);}
