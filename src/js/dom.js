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

export { createElement, createImage, createMenu };
