import "./_lib/modernizr";
import "../scss/application.scss";

import Website from "./_modules/website";
import Home from "./_modules/home";


window.addEventListener('load', function () {
  Website.signature();
  Website.init();
  Home.init();
});