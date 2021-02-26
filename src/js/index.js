import "./_lib/modernizr";
import "../scss/application.scss";
import jquery from "jquery";

window.$ = window.jQuery = jquery;

import Website from "./_modules/website";
import Home from "./_modules/home";

$(function () {
  Website.signature();
  Website.init();
  Home.init();
});
