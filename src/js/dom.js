import assetHeroImage from '../images/oc-gonzalez-PDgZtSrgM6M-unsplash.jpg';

function createMenu(...items) {
  const menu = document.createElement('menu');

  items.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('tab');
    li.textContent = item;
    menu.appendChild(li);
  });

  return menu;
}

function createNav() {
  const nav = document.createElement('nav');
  return nav;
}

function createHeader() {
  const header = document.createElement('header');
  return header;
}

function render() {
  const container = document.querySelector('#content');
}
