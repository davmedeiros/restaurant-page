import 'normalize.css';
import './style.css';

const element = document.createElement('h1');
element.textContent = 'Hello, World!';
element.classList.add('hello');
document.body.appendChild(element);
