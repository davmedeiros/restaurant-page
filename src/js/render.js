import assembleHome from './home';
import assembleHeader from './header';

function render(page) {
  const container = document.querySelector('#content');

  switch (page) {
    case 'header':
      container.appendChild(assembleHeader());
      break;
    case 'home':
      container.appendChild(assembleHome());
      break;
    default:
      break;
  }
}

export default render;
