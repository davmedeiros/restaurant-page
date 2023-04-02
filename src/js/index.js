import 'normalize.css';
import '../css/style.css';
import assembleHeader from './header';

function loadPage() {
  const container = document.querySelector('#content');
  container.appendChild(assembleHeader());
}

loadPage();
