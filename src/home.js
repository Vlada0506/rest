function loadHomePage() {
    const heading = document.createElement('h1');
    heading.textContent = 'Lorem10';
    const image = document.createElement('img');
    image.src = 'https://img.freepik.com/premium-vector/kids-menu_24908-40479.jpg';
    image.alt = "Меню";
    const par = document.createElement('p');
    par.textContent = 'Lorem15';

    const contentDiv = document.createElement('div');

    contentDiv.appendChild(heading);
    contentDiv.appendChild(image);
    contentDiv.appendChild(par);

    return contentDiv;
}

export default loadHomePage;

