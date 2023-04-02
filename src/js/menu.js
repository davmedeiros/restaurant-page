function createElement(type, text, id, ...htmlClasses) {
  const element = document.createElement(type);
  element.textContent = text;

  htmlClasses.forEach((htmlClass) => {
    element.classList.add(htmlClass);
  });

  if (id) element.id = id;

  return element;
}

function assembleMenu() {
  const main = createElement('main');
  const h2 = createElement('h2', 'Grumpy Shrimp');
  main.appendChild(h2);
  return main;
}

export default assembleMenu;
