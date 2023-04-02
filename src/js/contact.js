import { createElement } from './dom';

function assembleContact() {
  const main = createElement('main');
  const h2 = createElement('h2', 'Chef Gervasio Grumpy');
  main.appendChild(h2);
  return main;
}

export default assembleContact;
