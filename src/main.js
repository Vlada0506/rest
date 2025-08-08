import loadHomePage from "./home";
import loadMenuPage from ".";

console.log('Work');
loadHomePage();

const homeButton = document.querySelector('header nav button:nth-child(1)');
const menuButton = document.querySelector('header nav button:nth-child(2)');
const contentDiv = document.getElementById('content');

function clearContent() {
    contentDiv.innerHTML = '';
}

homeButton.addEventListener('click', () => { clearContent(); contentDiv.appendChild(loadHomePage()); });
menuButton.addEventListener('click', () => { clearContent(); contentDiv.appendChild(loadMenuPage()); });
