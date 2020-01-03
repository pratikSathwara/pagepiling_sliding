      $(document).ready(function() {
        $('#pagepiling').pagepiling({
            anchors: ['home', 'about', 'skill', 'contact'],
            menu: '#myMenu',
            easing: 'swing',
            loopBottom: false,
            scrollingSpeed: 100,
            navigation: {
                'textColor': '#000',
                'bulletsColor': 'tomato',
                'position': 'right',
                'tooltips': ['home', 'about', 'skill', 'contact']
            },
          });
        });

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

$('.menu li a').click(function () {
  $('#myNav').css("height", "0%");
});

      function openserach() {
        document.getElementById("search_ip").style.height = "100%";
      }

      function closeserach() {
        document.getElementById("search_ip").style.height = "0%";
      }

$(document).ready(function() {
  $(".tab").click(function () {
    $(".menu li").removeClass("active");
    $(this).addClass("active");   
    });
});

/* Scroll Down end */
/* Scroll Top Function start */
      window.onscroll = function() {scrollFunction()};

         function scrollFunction() {
           if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
             document.getElementById("scroll_btn").style.display = "block";
           } else {
             document.getElementById("scroll_btn").style.display = "none";
           }
         }

         // When the user clicks on the button, scroll to the top of the document
         $(document).ready(function() {
             $("#scroll_btn").click(function(event) {
                 event.preventDefault();
                 $("html, body").animate({ scrollTop: 0 }, "slow");
                 return false;
             });

         });         

