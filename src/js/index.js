import 'normalize.css';
import '../css/style.css';
import assembleHeader from './header';
import assembleHome from './home';

function loadPage() {
  const container = document.querySelector('#content');
  container.appendChild(assembleHeader());
  container.appendChild(assembleHome());
}

loadPage();
