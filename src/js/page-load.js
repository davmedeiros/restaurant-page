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

const loadPage = (page) => {
    const container = document.querySelector('body');
    clearContainer(container);
    buildHeader(container, 'home', 'menu', 'contact');
}

export { loadPage };