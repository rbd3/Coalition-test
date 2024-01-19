
  $(document).ready(function () {
    $('.carousel').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        

      }
    }
  ]
});
				
  });

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  

  function toggleActive(element) {
    // Remove "active" class from all links
    var links = document.querySelectorAll('.bottomnav a');
    links.forEach(function(link) {
      link.classList.remove('active');
    });

    // Add "active" class to the clicked link
    element.classList.add('active');
  }


