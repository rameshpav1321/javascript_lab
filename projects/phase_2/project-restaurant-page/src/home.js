function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    const restaurantName = document.createElement('p');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = "The Indian Kitchen";
    const restaurantLogo = document.createElement('img');
    restaurantLogo.classList.add('logo');
    restaurantLogo.src = "images/logo.jpeg";
    restaurantLogo.alt = "restaurant logo";
    header.append(restaurantName, restaurantLogo);
    return header;
}

function createMain() {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-div');
    const floatingDiv = document.createElement('div');
    floatingDiv.classList.add('floating-div');
    mainDiv.appendChild(floatingDiv)
    const content = "Do you wanna try spicy, rich, flavourful food with a diverse list of items? " +
        "Then look no further than our restaurant 'The Indian Kitchen' " +
        "Serving authentic Indian food that you will love and keep asking for more...since 1994 !!! "
    floatingDiv.appendChild(createContent(content));
    floatingDiv.appendChild(createImage("images/chef_1.jpeg", "chef-1"));
    return mainDiv;
}

function createContent(content) {
    const para = document.createElement('p');
    para.textContent = content;
    return para;
}

function createImage(image, title) {
    const img = document.createElement('img');
    img.classList.add(title);
    img.src = image;
    return img;

}

function loadHome() {
    const body = document.querySelector('body');
    body.appendChild(createHeader());
    body.appendChild(createMain());
}

export default loadHome;
