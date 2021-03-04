document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    let options = {
        "duration": 500,
        "indicators": true,
    };
    var instances = M.Carousel.init(elems, options);

    instances.forEach(instance => {
        setInterval(function () {
            instance.next();
        }, 2500);
    });
    
  });