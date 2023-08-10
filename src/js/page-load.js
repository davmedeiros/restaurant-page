const clearContainer = (container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
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

const buildMenu = (container) => {
    const dish = document.createElement('div');
    dish.classList.add('dish');
    container.appendChild(dish);
}

const switchTab = (clicked, tab, tabs) => {
    const main = document.querySelector('main');
    const activeTab = document.querySelector('nav button.active');
    activeTab.classList.remove('active');
    clicked.target.classList.toggle('active');
    clearContainer(main);

    switch (tab) {
        case tabs[0]:
            buildHome(main);
            break;
        case tabs[1]:
            buildMenu(main);
            break;
        case tabs[2]:
            buildHome(main);
            break;
        default:
            buildHome(main);
            break;
    }
}

const buildHeader = (container, ...tabs) => {   
    const header = document.createElement('header');
    const nav = document.createElement('nav');

    tabs.forEach(tab => {
        const button = document.createElement('button');
        button.id = tab;
        button.textContent = tab.toUpperCase();

        if (tab === tabs[0]) {
            button.classList.add('active');
        }

        button.addEventListener('click', (clicked) => switchTab(clicked, tab, tabs));
        nav.appendChild(button);
    });

    header.appendChild(nav);
    container.appendChild(header);
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