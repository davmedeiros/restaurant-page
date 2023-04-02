import assembleHome from './home';
import assembleContact from './contact';
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

  if (main) {
    main.remove();
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

function assembleHeader() {
  const header = createElement('header');
  const h1 = createElement('h1', 'Grumpy Cook');
  header.appendChild(h1);
  const nav = createElement('nav');
  header.appendChild(nav);
  const functions = [assembleHome, assembleContact];
  const menu = createMenu('tab', ['Home', 'Menu', 'Contact'], functions);
  nav.appendChild(menu);
  return header;
}

export default assembleHeader;
