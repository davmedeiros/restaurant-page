import assembleContact from './contact';
import assembleHeader from './header';
import assembleHome from './home';
import assembleMenu from './menu';

function createElement(type, text, id, ...htmlClasses) {
  const element = document.createElement(type);
  element.textContent = text;

  htmlClasses.forEach((htmlClass) => {
    element.classList.add(htmlClass);
  });

  if (id) element.id = id;

  return element;
}

function switchTab(item) {
  const container = document.querySelector('#content');
  const main = document.querySelector('main');
  const header = document.querySelector('header');

  if (main) {
    main.remove();
  }

  if (!header) {
    container.appendChild(assembleHeader());
  }

  switch (item) {
    case 'Home':
      container.appendChild(assembleHome());
      break;
    case 'Menu':
      container.appendChild(assembleMenu());
      break;
    case 'Contact':
      container.appendChild(assembleContact());
      break;
    default:
      break;
  }
}

function createMenu(htmlClass, items) {
  const menu = document.createElement('menu');

  items.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add(htmlClass);
    li.textContent = item;
    li.addEventListener('click', () => {
      switchTab(item);
    });
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

export { createElement, createImage, createMenu };
