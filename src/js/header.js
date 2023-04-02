import { createElement, createMenu } from './dom';

function assembleHeader() {
  const header = createElement('header');
  const h1 = createElement('h1', 'Grumpy Cook');
  header.appendChild(h1);
  const nav = createElement('nav');
  header.appendChild(nav);
  const menu = createMenu('tab', 'Home', 'Menu', 'Contact');
  nav.appendChild(menu);
  return header;
}

export default assembleHeader;
