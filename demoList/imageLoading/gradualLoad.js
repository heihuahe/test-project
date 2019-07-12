/**
 * css filter模糊处理
 */
function cssFilter() {
  var placeholder = document.querySelector('.placeholder'),
      small = placeholder.querySelector('.img-small')
  
  // 1: load small image and show it
  var img = new Image();
  img.src = small.src;
  img.onload = function () {
   small.classList.add('loaded');
  };
  
  // 2: load large image
  var imgLarge = new Image();
  imgLarge.src = placeholder.dataset.large; 
  imgLarge.onload = function () {
    imgLarge.classList.add('loaded');
  };
  placeholder.appendChild(imgLarge);
}

/**
 * canvas 模糊处理
 */
// function drawCanvas() {
//   let smallImg = document.querySelector('.small-img'),
//       canvas = document.querySelector('.canvas'),
//       bigImg = document.querySelector('.big-img');
//   var ctx = canvas.getContext('2d');
//   smallImg.onload = function () {
//       StackBlur.image(smallImg, canvas, 20, true);
//       if (bigImg.getBoundingClientRect().top > 0 && bigImg.getBoundingClientRect().bottom < window.innerHeight) {
//           bigImg.setAttribute('src', bigImg.dataset.src);
//           bigImg.onload = function () {
//               canvas.classList.add('loaded');
//           }
//       }
//   }
// }
// function drawCanvasGauss() {
//   let smallImg = document.querySelector('.small-img'),
//       canvas = document.querySelector('.canvas'),
//       bigImg = document.querySelector('.big-img');
//   var ctx = canvas.getContext('2d');
//   smallImg.onload = function () {
//       ctx.drawImage(smallImg, 0, 0, 450, 300);
//       var data = ctx.getImageData(255, 0, 450, 300);
//       var emptyData = ctx.createImageData(255, 300);
//       emptyData = gaussBlur(data)
//       ctx.putImageData(emptyData, 255, 0);
//   }
// }


const EVENTS = ['scroll', 'wheel', 'mousewheel', 'resize']

  const Util = {
    throttle(action, delay) {
      let timeout = null
      let lastRun = 0
      return function() {
        if (timeout) {
          return
        }
        const elapsed = Date.now() - lastRun
        const context = this
        const args = arguments
        const runCallback = function() {
          lastRun = Date.now()
          timeout = false
          action.apply(context, args)
        }
        if (elapsed >= delay) {
          runCallback()
        } else {
          timeout = setTimeout(runCallback, delay)
        }
      }
    },
    on(el, ev, fn) {
      el.addEventListener(ev, fn)
    },
    off(el, ev, fn) {
      el.removeEventListener(ev, fn)
    },
  }

  const events = (el, bind) => {
    if(bind){
      EVENTS.forEach(evt => {
        Util.on(el, evt, lazy)
      })
    }else {
      EVENTS.forEach(evt => {
        Util.off(el, evt, lazy)
      })
    }
  }

  let windowHasBindEvents = false

  const lazy = Util.throttle(()=>{
    checkImage()
  }, 300)

  checkImage()


  function checkImage() {
    if(!windowHasBindEvents){
      windowHasBindEvents = true
      events(window, true)
    }

    const lazys = document.querySelectorAll('img.lazy')
    const l = lazys.length
    if(l>0){
      for (let i = 0; i < l; i++) {
        const rect = lazys[i].getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0 && rect.left < window.innerWidth && rect.right > 0) {
          loadImage(lazys[i]);
        }
      }
    }else {
      windowHasBindEvents = false
      events(window, false)
    }
  }

  function loadImage(item) {
    const img = new Image()
    if (item.dataset) {
      item.dataset.srcset && (img.srcset = item.dataset.srcset)
      item.dataset.sizes && (img.sizes = item.dataset.sizes)
    }
    img.src = item.dataset.src;
    img.className = 'origin';
    img.onload = _ => {
      item.classList.remove('lazy')
      mountImage(item, img)
    }
  }

  function mountImage(preview, img) {
    const parent = preview.parentNode
    parent.appendChild(img).addEventListener('animationend', function(e) {
      preview.classList.remove('origin')
      e.target.alt = preview.alt || '';
      preview.classList.add('hide')
      // parent.removeChild(preview);
      // e.target.classList.remove('origin');

    });

  }