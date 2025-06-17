const CONTENT_BREAKING_NEWS = "BREAKING NEWS: 5 people arrested for non designing responsively ***** Sprite popularity drops even further after new, less sugary, drink introduction.*****"
const CONTENT_ARTICLE_TEASERS = [
  "This is an article about first party that happened this weekend",
  "This is an article about second party that happened this weekend",
  "This is an article about third party that happened this weekend" ];

const acceptCookies = () => {
  document.body.classList.remove('no-scroll');
  document.querySelector('.cookieLayer__base').classList.add('cookieLayer__base--accepted');
};

const dynamicContent = () => {
  const teasers = document.querySelectorAll('.teaser__text');
  const marqueeBar = document.querySelector('marquee');

  // mock content delay
  setTimeout(() => marqueeBar.innerHTML = CONTENT_BREAKING_NEWS, 3000);

  // create dynamic content
  teasers.forEach((teaser, index) => {
    teaser.innerHTML = CONTENT_ARTICLE_TEASERS[index];
  });
};

const cookieLayerInit = () => {
  Vue.component('CookieLayer', {
    template: `<div class="cookieLayer__content">
        <h2 class="cookieLayer__title">{{ title }}</h2>
        <p class="cookieLayer__text">{{ text1 }}</p>
        <p class="cookieLayer__text">{{ text2 }}</p>
        <button class="cookieLayer__button" button v-on:click="$emit('accept')">{{ buttonLabel }}</button>
        <div class="cookieLayer__disclaimer">{{ disclaimer }}</div>
      </div>`,
      data: function () {
        return {
          title: 'Do you like cookies ?',
          text1: 'This is the best chocolate chip cookies recipe ever! No funny ingredients, no chilling time, etc. Just a simple, straightforward, amazingly delicious, doughy yet still fully cooked, chocolate chip cookie that turns out perfectly every single time!',
          text2: 'The first step in making these easy chocolate chip cookies to to combine the dry ingredients in a medium size bowl. Next, cream together butter and sugars. Add the eggs & vanilla and beat to combine. Add dry ingredients and stir until just combined. Then add the chocolate chips and beat until they are evenly distributed throughout the dough.',
          buttonLabel: 'I solemny swear I will bake these cookies',
          disclaimer: 'This box is made using Vue.js and is super awesome !!! ............. or is it ???'
        }
      },
  });

  const vueApp = new Vue({
    el: '#cookie-vue',
    data: { 
      displayCookieBox: true,
    },
    methods: {
      acceptCookies() {
        this.displayCookieBox = false;
        document.body.classList.remove('no-scroll');
      }
    },
    mounted() {
      document.body.classList.add('no-scroll');
    }
  });
};

const layoutTrashing = (n) => {
  for (let i = 0; i < n; i++) {
    const container = document.querySelector('header');
    console.log(container.clientTop);
  }
};

const JSblocking = () => {
  let n = 1000000;
  while (n) { n--;}
}

const initApp = () => {
  const lazyLoadInstance = new LazyLoad();
  
  layoutTrashing(20);
  dynamicContent();
  setTimeout(() => console.log('Hello World!'), 3000);
  JSblocking();
  cookieLayerInit();
  lazyLoadInstance.update();
};

initApp();



    // Adobe Target pre-hiding code snippet 
    ;(function(win, doc, style, timeout) {
      var STYLE_ID = 'at-body-style';

      function getParent() {
        return doc.getElementsByTagName('head')[0];
      }

      function addStyle(parent, id, def) {
        if (!parent) {
          return;
        }

        var style = doc.createElement('style');
        style.id = id;
        style.innerHTML = def;
        parent.appendChild(style);
      }

      function removeStyle(parent, id) {
        if (!parent) {
          return;
        }

        var style = doc.getElementById(id);

        if (!style) {
          return;
        }

        parent.removeChild(style);
      }

      addStyle(getParent(), STYLE_ID, style);
      setTimeout(function() {
        removeStyle(getParent(), STYLE_ID);
      }, timeout);
    }(window, document, "body {opacity: 0 !important}", 3000));

    // advertisment mock
    const initAd = () => {
      const adSpace = document.querySelector('.main__advertising');
      const gif = '<div style="width:400px;max-width:100%;"><div style="height:0;padding-bottom:52.4%;position:relative;"><iframe width="500" height="262" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameBorder="0" src="https://imgflip.com/embed/6wy03z"></iframe></div></div>';
      setTimeout(() => adSpace.innerHTML = gif, 3000);
    };
    // Slow JS
    function wait(ms) {
      var start = Date.now(),
      now = start;
      while (now - start < ms) {
        now = Date.now();
      }
    };

    // async CSS
    function loadMobileCSS() {
      $('head').append(`<link rel="stylesheet" type="text/css" href="styles/mobile.css">`);
    };

    wait(2000);
    window.addEventListener('load', () => {
      initAd();
      loadMobileCSS();
    });
 