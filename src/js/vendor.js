'use strict';

@@include('dom-to-image.min.js');
@@include('FileSaver.min.js');
@@include('lazysizes.min.js');

const Tabs = () => {
  const bindAll() {
    const menuElements = document.querySelectorAll('[data-tab]');
    for (let i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  const clear() {
    const menuElements = document.querySelectorAll('[data-tab]');
    for (let i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('is-active');
      const id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('is-active');
    }
  }

  const change(event) {
    clear();
    event.target.classList.add('is-active');
    const id = event.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('is-active');
  }

  bindAll();
}

const connectTabs = new Tabs();
