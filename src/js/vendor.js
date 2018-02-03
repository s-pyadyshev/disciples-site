'use strict';

@@include('dom-to-image.min.js');
@@include('FileSaver.min.js');
@@include('lazysizes.min.js');

function Tabs() {
  var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('is-active');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('is-active');
    }
  }

  var change = function(e) {
    clear();
    e.target.classList.add('is-active');
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('is-active');
  }

  bindAll();
}

var connectTabs = new Tabs();
