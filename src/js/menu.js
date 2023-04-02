import createElement from './element';

function assembleMenu() {
  const main = createElement('main');
  const h2 = createElement('h2', 'Grumpy Shrimp');
  main.appendChild(h2);
  return main;
}

export default assembleMenu;
