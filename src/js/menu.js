import createElement from './element';

function assembleMenu() {
  const main = createElement('main');
  const h2 = createElement('h2', 'Dishes');
  main.appendChild(h2);
  const dishes = ['Grumpy Shrimp', 'Grumpy Fish'];

  dishes.forEach((dish) => {
    const p = createElement('p', dish);
    main.appendChild(p);
  });

  return main;
}

export default assembleMenu;
