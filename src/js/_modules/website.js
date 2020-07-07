const Website = {
  init: () => {
    var isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0;
    var ua = window.navigator.userAgent;
    var iOS = !!ua.match(/iP(ad|hone)/i);
    var webkit = !!ua.match(/WebKit/i);
    var isiOS = iOS && webkit && !ua.match(/CriOS/i);

    var touch = isTouch ? 'touch' : 'no-touch';
    var os = isiOS ? 'ios' : 'no-ios';
    document.documentElement.classList.add(touch);
    document.documentElement.classList.add(os);

    Website.resize();
    Website.blank();
    
    console.log(
      'Website designed and coded by Giacomo Nanni',
    );
    console.log('https://giacomonanni.info');
  },

  blank: () => {
    var a = document.getElementsByTagName('a');
    [...a].forEach(link => {
      if (link.getAttribute('target')) {
        return;
      } else if (link.host !== window.location.host) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener');
      } else {
        link.setAttribute('target', '_self');
      }
    });
  },

  resize: () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }
};

export default Website;
