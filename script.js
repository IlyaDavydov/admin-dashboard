const spotifyDiv = document.querySelector(".spoti");
const spotify = document.querySelector(".spoti img");
const wappDiv = document.querySelector(".wapp");
const wapp = document.querySelector(".wapp img");
const snapDiv = document.querySelector(".snap");
const snap = document.querySelector(".snap img");
const gitDiv = document.querySelector(".git");
const git = document.querySelector(".git img");
const instDiv = document.querySelector(".inst");
const inst = document.querySelector(".inst img");
const tgDiv = document.querySelector(".tg");
const tg = document.querySelector(".tg img");
const plus = document.querySelector(".plus");


/* SIDEBAR ICONS ROTATIONS */

spotifyDiv.addEventListener("mouseenter", function() {
    spotify.classList.add("active");
    spotify.src = "spotify-x.svg";
});

spotifyDiv.addEventListener('mouseleave', function() {
    spotifyDiv.classList.remove("active");
    spotify.src = "spotify.svg";
});

wappDiv.addEventListener("mouseenter", function() {
    wapp.classList.add("active");
    wapp.src = "whatsapp-x.svg";
});

wappDiv.addEventListener('mouseleave', function() {
    wappDiv.classList.remove("active");
    wapp.src = "whatsapp.svg";
});

snapDiv.addEventListener("mouseenter", function() {
    snap.classList.add("active");
    snap.src = "snapchat-x.svg";
});

snapDiv.addEventListener('mouseleave', function() {
    snapDiv.classList.remove("active");
    snap.src = "snapchat.svg";
});

gitDiv.addEventListener("mouseenter", function() {
    git.classList.add("active");
    git.src = "github-x.svg";
});

gitDiv.addEventListener('mouseleave', function() {
    gitDiv.classList.remove("active");
    git.src = "github.svg";
});

instDiv.addEventListener("mouseenter", function() {
    inst.classList.add("active");
    inst.src = "instagram-x.svg";
});

instDiv.addEventListener('mouseleave', function() {
    instDiv.classList.remove("active");
    inst.src = "instagram.svg";
});

tgDiv.addEventListener("mouseenter", function() {
    tg.classList.add("active");
    tg.src = "telegram-x.svg";
});

tgDiv.addEventListener('mouseleave', function() {
    tgDiv.classList.remove("active");
    tg.src = "telegram.svg";
});


/* TOGGLE PLUS DIV */ 
const classes = ['telegram-plus', 'spotify-plus', 'snapchat-plus', 'vk-plus', 'google-plus', 'linkedin-plus', 'github-plus', 'instagram-plus', 'whatsapp-plus', 'facebook-plus', 'yandex-plus', 'boburhub-plus']; 
const apps = ['telegram', 'spotify', 'snapchat', 'vk', 'google', 'linkedin', 'github', 'instagram', 'whatsapp', 'facebook', 'yandex', 'boburhub1']; 
const pictures = ['telegram-x.svg', 'spotify-x.svg', 'snapchat-x.svg', 'vk-x.svg', 'google-x.svg', 'linkedin-x.svg', 'github-x.svg', 'instagram-x.svg', 'whatsapp-x.svg', 'facebook-x.svg', 'yandex-x.svg', 'yandex-x.svg'];
const pictures2 = ['telegram-k.svg', 'spotify-k.svg', 'snapchat-k.svg', 'vk-k.svg', 'google-k.svg', 'linkedin-k.svg', 'github-k.svg', 'instagram-k.svg', 'whatsapp-k.svg', 'facebook-k.svg', 'yandex-k.svg', 'yandex-k.svg'];
const circles = ['telegram-circle', 'spotify-circle', 'snapchat-circle', 'vk-circle', 'google-circle', 'linkedin-circle', 'github-circle', 'instagram-circle', 'whatsapp-circle', 'facebook-circle', 'yandex-circle', 'boburhub-circle']; 
const buttons = ['telegram-button', 'spotify-button', 'snapchat-button', 'vk-button', 'google-button', 'linkedin-button', 'github-button', 'instagram-button', 'whatsapp-button', 'facebook-button', 'yandex-button', 'boburhub-button']; 
const paths = ['telegram-path', 'spotify-path', 'snapchat-path', 'vk-path', 'google-path', 'linkedin-path', 'github-path', 'instagram-path', 'whatsapp-path', 'facebook-path', 'yandex-path', 'boburhub-path']; 
let index = 0;
let intervalId;
const image = document.querySelector(".card.plus img");
const newDiv = document.createElement('div');
const newSpan = document.createElement('span');

function toggleClasses() {
    plus.classList.remove(classes[index]);
    index = (index + 1) % classes.length;
    image.src = pictures[index]; 
    plus.classList.add(classes[index]); 
    if (plus.classList.contains('boburhub-plus')) {
        image.style.opacity = '0';
        newDiv.classList.add('boburhub');
        newSpan.textContent = 'BH';
        newSpan.style.fontSize = "40px";
        newSpan.style.fontWeight = "500";
        newDiv.appendChild(newSpan);
        plus.appendChild(newDiv);
    }
    else {
        image.style.opacity = '1';
        newDiv.removeChild(newSpan);
        plus.removeChild(newDiv);
    }
}

let mouseEntered = false;

plus.addEventListener('mouseenter', function() {
    if (!mouseEntered) {
        intervalId = setInterval(toggleClasses, 250);
        mouseEntered = true;
    } 
});

plus.addEventListener('mouseleave', function() {
    mouseEntered = false;
    clearInterval(intervalId);
    image.src = "plus.svg";
    plus.classList.remove('telegram-plus', 'spotify-plus', 'snapchat-plus', 'vk-plus', 'google-plus', 'linkedin-plus', 'github-plus', 'instagram-plus', 'whatsapp-plus', 'facebook-plus', 'yandex-plus', 'boburhub-plus');
});

/* POP UP */

const popup = document.querySelector(".popup");
const sidebar = document.querySelector(".sidebar");
const nav = document.querySelector(".nav");
const content = document.querySelector(".content");
const info = document.querySelector(".info");

plus.addEventListener("click", function() {
    sidebar.style.filter = "blur(5px)";
    nav.style.filter = "blur(5px)";
    sidebar.style.filter = "blur(5px)";
    info.style.filter = "blur(5px)";
    content.style.filter = "blur(5px)";
    popup.style.zIndex = "1";
    popup.style.opacity = "1";
})

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const button = document.querySelector(".popup-button");
const select = document.querySelector(".select");
const selectImage = document.querySelector(".selectImage");
const circle = document.querySelectorAll("circle");
const path = document.querySelectorAll("path");

let count = 0;

right.addEventListener("click", function() {
    button.classList.remove(buttons[count]);
    select.classList.remove(classes[count]);
    circle.forEach(circle => circle.classList.remove(circles[count]));
    path.forEach(path => path.classList.remove(paths[count]));
    count = (count + 1) % buttons.length;
    selectImage.src = pictures[count];
    button.classList.add(buttons[count]);
    select.classList.add(classes[count]);
    circle.forEach(circle => circle.classList.add(circles[count]));
    path.forEach(path => path.classList.add(paths[count]));
    if (select.classList.contains('boburhub-plus')) {
        selectImage.style.opacity = '0';
        newDiv.classList.add('boburhub');
        newSpan.textContent = 'BH';
        newSpan.style.fontSize = "80px";
        newSpan.style.fontWeight = "500";
        newDiv.style.height = "200px";
        newDiv.style.width = "200px";
        newDiv.appendChild(newSpan);
        select.appendChild(newDiv);
    }
    else {
        selectImage.style.opacity = '1';
        newDiv.removeChild(newSpan);
        select.removeChild(newDiv);
    }
});

left.addEventListener("click", function() {
    button.classList.remove(buttons[count]);
    select.classList.remove(classes[count]);
    circle.forEach(circle => circle.classList.remove(circles[count]));
    path.forEach(path => path.classList.remove(paths[count]));
    count = (count - 1 + buttons.length) % buttons.length; 
    selectImage.src = pictures[count];
    button.classList.add(buttons[count]);
    select.classList.add(classes[count]);
    circle.forEach(circle => circle.classList.add(circles[count]));
    path.forEach(path => path.classList.add(paths[count]));
    if (select.classList.contains('boburhub-plus')) {
        selectImage.style.opacity = '0';
        newDiv.classList.add('boburhub');
        newSpan.textContent = 'BH';
        newSpan.style.fontSize = "80px";
        newSpan.style.fontWeight = "500";
        newDiv.style.height = "200px";
        newDiv.style.width = "200px";
        newDiv.appendChild(newSpan);
        select.appendChild(newDiv);
    }
    else {
        selectImage.style.opacity = '1';
        newDiv.removeChild(newSpan);
        select.removeChild(newDiv);
    }
});

/* SELECT BUTTON */

const contentgrid = document.querySelector(".content-grid");

button.addEventListener("click", function() {
    sidebar.style.filter = "none";
    nav.style.filter = "none";
    sidebar.style.filter = "none";
    info.style.filter = "none";
    content.style.filter = "none";
    popup.style.zIndex = "0";
    popup.style.opacity = "0";
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    const newCardImage = document.createElement("img");
    newCardImage.src = pictures2[count];
    newCard.appendChild(newCardImage);
    newCard.classList.add(apps[count]);
    const lastElement = contentgrid.lastElementChild;
    /*
    The problem with this code is that I wanted to add my friend's project - BoburHub - here, 
    but there is simply no logo for his project in SVG format. So, I manually built it using divs, CSS, spans, and so on,
    but this breaks the functionality of the entire program because all the other cards have an img element for this purpose.
    I managed to get it to work 90% of the time, and in most cases, BoburHub works correctly, but I recommend not adding a card with it.
    /*
    const logoBob = document.createElement("div");
    const spanBob = document.createElement("span");
    if (newCard.classList.contains('boburhub1')) {
        newCardImage.style.opacity = '0';
        spanBob.textContent = 'BH';
        spanBob.style.fontSize = "40px";
        spanBob.style.fontWeight = "500";
        logoBob.classList.add('boburhub');
        logoBob.style.height = "100px";
        logoBob.style.width = "100px";  
        logoBob.appendChild(spanBob);
        newCard.appendChild(logoBob);
    }
    else {
        newCardImage.style.opacity = '1';
        logoBob.removeChild(spanBob);
        logoBob.classList.remove('boburhub');
        newCard.removeChild(logoBob);
    }
    */
    contentgrid.insertBefore(newCard, lastElement);
})

