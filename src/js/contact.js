import createElement from './element';

function assembleContact() {
  const main = createElement('main');
  const h2 = createElement('h2', 'Chef Gervasio Grumpy');
  main.appendChild(h2);
  const p = createElement('p', '555-4321');
  main.appendChild(p);
  return main;
}

export default assembleContact;
