$(document).ready(function() {
    //smooth scrolling
    $(".home-link a").click(function() {
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 900);
    });
    $(".about-link a").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 900);
    });
    $(".expertise-link a").click(function() {
        $('html, body').animate({
            scrollTop: $("#expertise").offset().top
        }, 900);
    });
    $(".portfolio-link a").click(function() {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 900);
    });
    $(".reviews-link a").click(function() {
        $('html, body').animate({
            scrollTop: $("#reviews").offset().top
        }, 900);
    });
    $(".contact-link a").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 900);
    });
    //portfolio gallery
    $('.multiple-items').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4
      });
      //blink
      $(".blink").animate({opacity:0},200,"linear",function(){
        $(this).animate({opacity:1},200);
      });

      setInterval(function() {
        $('.advice').fadeIn(500).fadeOut(1000);
    }, 1000);

    //REVIEVS 
    const reviews = [
        {
        id: 1,
        name: "Laura Vanderboom",
        job: "web developer",
        img:
            "./img/reviewers/person-1_rfzshl.jpg",
        text:
            "I'm umaty meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        },
        {
        id: 2,
        name: "Volodymyr Huha",
        job: "web designer",
        img:
            "./img/reviewers/lDYgQWz0_400x400.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        },
        {
        id: 3,
        name: "Alfred Negos",
        job: "intern",
        img:
            "./img/reviewers/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        },
        {
        id: 4,
        name: "Taras Shevchenko",
        job: "the boss",
        img:
            "./img/reviewers/artworks-PAWnIOo86Ujid56U-KTRm6g-t500x500.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
        },
    ];

    const img = document.getElementById("person-img");
    const author = document.getElementById("author");
    const job = document.getElementById("job");
    const info = document.getElementById("info");
    
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const randomBtn = document.querySelector(".random-btn");
    
    let currentItem = 0;
    
    window.addEventListener("DOMContentLoaded", function () {
        const item = reviews[currentItem];
        img.src = item.img;
        author.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.text;
    });

    function showPerson(person) {
        const item = reviews[person];
        img.src = item.img;
        author.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.text;
    }

    nextBtn.addEventListener("click", function () {
        currentItem++;
        if (currentItem > reviews.length - 1) {
        currentItem = 0;
        }
        showPerson(currentItem);
    });

    prevBtn.addEventListener("click", function () {
        currentItem--;
        if (currentItem < 0) {
        currentItem = reviews.length - 1;
        }
        showPerson(currentItem);
    });

    randomBtn.addEventListener("click", function () {
        console.log("hello");
    
        currentItem = Math.floor(Math.random() * reviews.length);
        showPerson(currentItem);
  });
});