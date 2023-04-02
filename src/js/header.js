import { createElement, createMenu } from './dom';
import assembleHome from './home';
import assembleContact from './contact';

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
