
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
 