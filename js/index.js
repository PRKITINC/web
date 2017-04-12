//I don't know why but this script has to be added individually to the beginning of each
//html page, I can't just add it to the defaults.html for some reason. Todo: research how
//to add this to defaults.html
$(document).ready(function() {

    //this is for the nav bar
    $('#open-nav').on("click", function() {
        document.body.classList.toggle("nav-open");
        return false;
    });

    //this is for the hero section
    $(window).resize(function() {
        $('.hero').height($(window).height() - 170);
    }).resize();

    //for the press-links
    $(".press .press-link").on("click", function() {
        var t = $(this).data("target");
        $(".press .press-link").removeClass("active"), $(this).addClass("active"), $(".press .content p").removeClass("active"), $(".press .content p." + t).addClass("active")
    })

    $(".testimonial-cards, .press-links-mobile").slick({
        dots: !0,
        infinite: !0,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })

    //the following code is for the modal that is not currently being implemented
    /*
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    }
    span.onclick = function() {
      modal.style.display = "none";
      var vid = document.getElementById("my-player");
      vid.pause();
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        var vid = document.getElementById("my-player");
        vid.pause();
      }
    }
    */

    //the following code is for the registration page
    console.log("ready")
    $("#myButton").click(function() {
        console.log("success")
        let form = document.getElementById("input")
        if (form.elements[1].value != form.elements[2].value) {
            alert("Passwords do not match!")
        } else {
            $.post("http://162.243.143.124/user/register", $('form').serialize());
            window.location.href = "http://www.google.com";
            done((data) => {
                alert(data);
            })
        }
    })

});

//all parallax code is underneath this comment
