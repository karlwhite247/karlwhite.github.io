var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
     
           // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

particlesJS("particles-js", {
  "particles": {
    "number": { 
      "value": 400, 
      "density": { 
        "enable": true, 
        "value_area": 800 
      } 
    },
    
    "color": { 
      "value": "#fff" 
    },
    "shape": {
      "type": "circle",
      "stroke": { 
        "width": 0, 
        "color": "#000000" 
      },
      "polygon": { 
        "nb_sides": 5 
      },
      "image": { 
        "src": "img/github.svg", 
        "width": 100, 
        "height": 100, 
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": { 
        "enable": false, 
        "speed": 1, 
        "opacity_min": 0.1, 
        "sync": false 
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": { 
        "enable": false, 
        "speed": 40, 
        "size_min": 0.1, 
        "sync": false 
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500, 
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": { 
        "enable": false, 
        "rotateX": 600, 
        "rotateY": 1200 
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { 
        "enable": true, 
        "mode": "bubble" 
      },
      "onclick": { 
        "enable": true, 
        "mode": "repulse" 
      },
      "resize": true
    },
    "modes": {
      "grab": { 
        "distance": 400, 
        "line_linked": { 
          "opacity": 0.5 
        } 
      },
      "bubble": { 
        "distance": 400, 
        "size": 4, 
        "duration": 0.3, 
        "opacity": 1, 
        "speed": 3 
      },
      "repulse": { 
        "distance": 200, 
        "duration": 0.4 
      },
      "push": { 
        "particles_nb": 4 
      },
      "remove": { 
        "particles_nb": 2 
      }
    }
  },
  "retina_detect": true
});
