import assetHeroImage from '../images/oc-gonzalez-PDgZtSrgM6M-unsplash.jpg';
import createElement from './element';

function createImage(id, src, alt) {
  const image = document.createElement('img');

  if (id) image.id = id;

  image.alt = alt;
  image.src = src;
  return image;
}

function assembleHome() {
  const main = createElement('main');
  const section = createElement('section', undefined, 'hero');
  main.appendChild(section);
  const div = createElement('div', undefined, 'hero-text');
  section.appendChild(div);
  const h2 = createElement('h2', 'The grumpiest seafood in town!');
  div.appendChild(h2);
  const figure = createElement('figure', undefined, 'hero-figure');
  section.appendChild(figure);
  const img = createImage('hero-image', assetHeroImage, 'Grumpy fish');
  figure.appendChild(img);
  const figcaption = createElement('figcaption', 'Photo by OC Gonzales on Unsplash');
  figure.appendChild(figcaption);
  return main;
}

export default assembleHome;
