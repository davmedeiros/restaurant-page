import assetHeroImage from '../images/oc-gonzalez-PDgZtSrgM6M-unsplash.jpg';

function createMenu(parent = document.body, ...items) {
  const menu = document.createElement('menu');

  items.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('tab');
    li.textContent = item;
    menu.appendChild(li);
  });

  parent.appendChild(menu);
}

function createNav(parent = document.body) {
  const nav = document.createElement('nav');
  parent.appendChild(nav);
}

function createHeader() {
  const header = document.createElement('header');
}
