import assembleHome from './home';
import assembleHeader from './header';
import assembleContact from './contact';

function render(page) {
  const container = document.querySelector('#content');
  const main = document.querySelector('main');

  if (main) {
    while (main.lastChild) {
      main.removeChild(main.lastChild);
    }
  }

  switch (page) {
    case 'header':
      container.appendChild(assembleHeader());
      break;
    case 'home':
      container.appendChild(assembleHome());
      break;
    case 'contact':
      container.appendChild(assembleContact());
      break;
    default:
      break;
  }
}

export default render;
