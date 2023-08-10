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
    const placeholder = document.createElement('p');
    placeholder.textContent = 'Imagine lots of vegetables here...';
    dish.appendChild(placeholder);
    container.appendChild(dish);
}

const buildContact = (container) => {
    const h2 = document.createElement('h2');
    h2.textContent = 'Contact instructions:';
    const steps = document.createElement('ol');
    const step1 = document.createElement('li');
    const step2 = document.createElement('li');
    const step3 = document.createElement('li');
    step1.textContent = 'Look at the mirror with a candle and spin 3 times.';
    step2.textContent = 'Scream "GIVE ME ALL THE VEGGIES!"';
    step3.textContent = 'Wait until the next morning.';
    steps.appendChild(step1);
    steps.appendChild(step2);
    steps.appendChild(step3);
    container.appendChild(h2);
    container.appendChild(steps);
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
            buildContact(main);
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