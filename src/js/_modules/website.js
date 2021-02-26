const Website = {
  init: () => {
    var isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
    var ua = window.navigator.userAgent;
    var iOS = !!ua.match(/iP(ad|hone)/i);
    var webkit = !!ua.match(/WebKit/i);
    var isiOS = iOS && webkit && !ua.match(/CriOS/i);

    var touch = isTouch ? "touch" : "no-touch";
    var os = isiOS ? "ios" : "no-ios";
    $("html").addClass(touch).addClass(os);

    Website.resize();
    Website.blank();
  },

  blank: () => {
    $("a").each((i, el) => {
      if ($(el).attr("target")) {
        return;
      } else if ($(el)[0].host !== window.location.host) {
        $(el).attr("target", "_blank").attr("rel", "noopener");
      } else {
        $(el).attr("target", "_self");
      }
    });
  },

  resize: () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  },

  signature: () => {
    console.log("Website coded by Giacomo Nanni");
    console.log("https://giacomonanni.info");
    console.log("hello@giacomonanni.info");
  },
};

export default Website;
