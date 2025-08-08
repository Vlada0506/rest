function loadMenuPage() {
    const heading = document.createElement('h2');
    heading.textContent = 'Наше меню';
    const menuList = document.createElement('ul');
    menuList.innerHTML = `
    <li>Блюдо 1 - 50 руб.</li>
    <li>Блюдо 2 - 60 руб.</li>
    <li>Блюдо 3 - 70 руб.</li>
    `;

    const contentDiv = document.createElement('div');
    contentDiv.appendChild(heading);
    contentDiv.appendChild(menuList);

    return contentDiv;
}
export default loadMenuPage;

