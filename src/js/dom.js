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

function createHeading(level, text) {
  const heading = document.createElement(`h${level}`);
  heading.textContent = text;
  return heading;
}

function createHeader() {
  const header = document.createElement('header');
  return header;
}

function assembleHeader() {
  const header = createHeader();
  const h1 = createHeading(1, 'Grumpy Cook');
  header.appendChild(h1);
  const nav = createNav();
  header.appendChild(nav);
  const menu = createMenu('Home', 'Menu', 'Contact');
  nav.appendChild(menu);
  return header;
}

function createDiv(id) {
  const div = document.createElement('div');

  if (id) div.id = id;

  return div;
}

function createFigcaption(text) {
  const figcaption = document.createElement('figcaption');
  // TODO: Create logic for processing hyperlinks
  figcaption.textContent = text;
  return figcaption;
}

function createImage(id, src, alt) {
  const image = document.createElement('img');

  if (id) image.id = id;

  image.alt = alt;
  image.src = src;
  return image;
}

function createFigure(id) {
  const figure = document.createElement('figure');

  if (id) figure.id = id;

  return figure;
}

function createSection(id) {
  const section = document.createElement('section');

  if (id) section.id = id;

  return section;
}

function createMain() {
  const main = document.createElement('main');
  return main;
}

function assembleMain() {
  const main = createMain();
  const section = createSection('hero');
  main.appendChild(section);
  const div = createDiv('hero-text');
  section.appendChild(div);
  const h2 = createHeading(2, 'The grumpiest seafood in town!');
  div.appendChild(h2);
  const figure = createFigure('hero-figure');
  section.appendChild(figure);
  const img = createImage('hero-image', assetHeroImage, 'Grumpy fish');
  figure.appendChild(img);
  const figcaption = createFigcaption('Photo by OC Gonzales on Unsplash');
  figure.appendChild(figcaption);
  return main;
}

function render() {
  const container = document.querySelector('#content');
  container.appendChild(assembleHeader());
  container.appendChild(assembleMain());
}

export default render;
