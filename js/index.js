const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Image Sources

const logo = document.getElementById("logo-img");
logo.setAttribute('src', "img/logo.png")

const codeImg = document.querySelector('#cta-img');

codeImg.src = siteContent.cta["img-src"];

const middleImg = document.querySelector('#middle-img')
middleImg.src = siteContent[`main-content`]["middle-img-src"];

// Nav

const nav = document.querySelector("nav");

const navArray = Array.from(document.querySelectorAll('a'))

for (let i in navArray) {
  navArray[i].textContent = siteContent.nav[`nav-item-${i}`];
}


// cta

const cta = document.querySelector(".cta");
cta.querySelector('h1').innerHTML = 'DOM </br> IS </br> AWESOME';
cta.querySelector('button').textContent = siteContent.cta.button;


// Main

const main = document.querySelector('.main-content');

main.querySelectorAll('h4')[0].textContent = siteContent[`main-content`]["features-h4"];
main.querySelectorAll('p')[0].textContent = siteContent[`main-content`]["features-content"];

main.querySelectorAll('h4')[1].textContent = siteContent[`main-content`]["about-h4"];
main.querySelectorAll('p')[1].textContent = siteContent[`main-content`]["about-content"];

main.querySelectorAll('h4')[2].textContent = siteContent[`main-content`]["services-h4"];
main.querySelectorAll('p')[2].textContent = siteContent[`main-content`]["services-content"];

main.querySelectorAll('h4')[3].textContent = siteContent[`main-content`]["product-h4"];
main.querySelectorAll('p')[3].textContent = siteContent[`main-content`]["product-content"];

main.querySelectorAll('h4')[4].textContent = siteContent[`main-content`]["vision-h4"];
main.querySelectorAll('p')[4].textContent = siteContent[`main-content`]["vision-content"];


// Contact

const contact = document.querySelector(".contact");
contact.querySelector('h4').textContent = siteContent.contact["contact-h4"];
contact.querySelectorAll('p')[0].textContent = siteContent.contact["address"];
contact.querySelectorAll('p')[1].textContent = siteContent.contact["phone"];
contact.querySelectorAll('p')[2].textContent = siteContent.contact["email"];


// Footer

const footer = document.querySelector("footer");
footer.querySelector('p').textContent = siteContent.footer["copyright"];


// Add New Content

// Create Nav Element
for (let i in navArray) {
  nav.querySelectorAll('a')[i].setAttribute('style', 'color:green')
}

const newNavElement1 = document.createElement('a');
newNavElement1.textContent = 'Sign In';
// newNavElement1.setAttribute('style', 'color:green')
newNavElement1.href = "#";
nav.prepend(newNavElement1)

const newNavElement2 = document.createElement('a');
newNavElement2.textContent = 'Sign Up';
// newNavElement2.setAttribute('style', 'color:green')
newNavElement2.href = "#";

nav.prepend(newNavElement2);