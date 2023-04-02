import assembleHome from './home';
import assembleHeader from './header';

function render(page) {
  const container = document.querySelector('#content');
  container.appendChild(assembleHeader());

  if (page === 'home') {
    container.appendChild(assembleHome());
  }
}

export default render;
