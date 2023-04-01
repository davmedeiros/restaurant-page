import assetHeroImage from '../images/oc-gonzalez-PDgZtSrgM6M-unsplash.jpg';

function createElement(type, text, id, ...htmlClasses) {
  const element = document.createElement(type);
  element.textContent = text;

  htmlClasses.forEach((htmlClass) => {
    element.classList.add(htmlClass);
  });

  if (id) element.id = id;

  return element;
}

function createMenu(htmlClass, ...items) {
  const menu = document.createElement('menu');

  items.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add(htmlClass);
    li.textContent = item;
    menu.appendChild(li);
  });

  return menu;
}

function createImage(id, src, alt) {
  const image = document.createElement('img');

  if (id) image.id = id;

  image.alt = alt;
  image.src = src;
  return image;
}

function assembleHeader() {
  const header = createElement('header');
  const h1 = createElement(1, 'Grumpy Cook');
  header.appendChild(h1);
  const nav = createNav();
  header.appendChild(nav);
  const menu = createMenu('Home', 'Menu', 'Contact');
  nav.appendChild(menu);
  return header;
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
