const clearContainer = (container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const switchTab = (clicked) => {
    const tabs = document.querySelectorAll('nav button');

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    clicked.target.classList.toggle('active');
}

const buildHeader = (container, ...tabs) => {   
    const header = document.createElement('header');
    const nav = document.createElement('nav');

    tabs.forEach(tab => {
        const button = document.createElement('button');
        button.id = tab;
        button.textContent = tab.toUpperCase();
        button.addEventListener('click', switchTab);
        nav.appendChild(button);
    });

    header.appendChild(nav);
    container.appendChild(header);
}

const buildHome = (container) => {
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Veggieterra';
    const about = document.createElement('p');
    about.id = 'about';
    about.textContent = 'If you enjoy eating your vegetables this is the restaurant for you!';
    container.appendChild(h1);
    container.appendChild(about);
}

const loadPage = (page) => {
    const body = document.querySelector('body');
    clearContainer(body);
    buildHeader(body, 'home', 'menu', 'contact');
    const main = document.createElement('main');
    body.appendChild(main);
    buildHome(main);
}

export { loadPage };