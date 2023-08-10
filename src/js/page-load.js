const clearContainer = (container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const buildHeader = (container) => {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const home = document.createElement('button');
    home.id = 'home';
    home.textContent = home.id.toUpperCase();
    const menu = document.createElement('button');
    menu.id = 'menu';
    menu.textContent = menu.id.toUpperCase();
    const contact = document.createElement('button');
    contact.id = 'contact';
    contact.textContent = contact.id.toUpperCase();
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    header.appendChild(nav);
    container.appendChild(header);
}

const loadPage = (page) => {
    const content = document.querySelector('#content');
    clearContainer(content);
    buildHeader(content);
}

export { loadPage };