const clearContainer = (container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const buildHeader = (container, ...tabs) => {   
    const header = document.createElement('header');
    const nav = document.createElement('nav');

    tabs.forEach(tab => {
        const button = document.createElement('button');
        button.id = tab;
        button.textContent = tab.toUpperCase();
        nav.appendChild(button);
    });

    header.appendChild(nav);
    container.appendChild(header);
}

const buildHome = (container) => {
    const main = document.createElement('main');
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Veggieterra';
    const about = document.createElement('p');
    about.id = 'about';
    about.textContent = 'If you enjoy eating your vegetables this is the restaurant for you!';
    main.appendChild(h1);
    main.appendChild(about);
    container.appendChild(main);
}

const loadPage = (page) => {
    const container = document.querySelector('body');
    clearContainer(container);
    buildHeader(container, 'home', 'menu', 'contact');
    buildHome(container);
}

export { loadPage };