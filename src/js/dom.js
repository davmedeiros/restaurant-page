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

function createHeading(level, text) {
  const heading = document.createElement(`h${level}`);
  heading.textContent = text;
  return heading;
}

function render() {
  const container = document.querySelector('#content');
  const header = createHeader();
  const h1 = createHeading(1, 'Grumpy Cook');
  header.appendChild(h1);
  const nav = createNav();
  header.appendChild(nav);
  const menu = createMenu('Home', 'Menu', 'Contact');
  nav.appendChild(menu);
  container.appendChild(header);
}

export default render;
