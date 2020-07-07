import 'nodelist-foreach-polyfill';
import 'mdn-polyfills/Array.prototype.forEach';
import 'mdn-polyfills/Array.prototype.find';
import 'mdn-polyfills/Array.prototype.includes';
import 'mdn-polyfills/String.prototype.includes';
import lazySizes from 'lazysizes';
import jquery from "jquery";

window.$ = window.jQuery = jquery;

import Website from './_modules/website';
import Home from './_modules/home';

$(document).ready(function() {
  Website.init();
  Home.init();
});
