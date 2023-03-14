const logoContainer1 = document.querySelector('.first')
const logoContainer2 = document.querySelector('.second')
let offset = window.pageYOffset;

const firstContainer = document.getElementById('firstCardContainer')
const secondContainer = document.getElementById('secondtCardContainer')

const card = document.querySelectorAll(".card")


function pageAnimations() {
    const interval = setInterval(() => {

        if (offset >= 300) {
            card.forEach(item => {
                item.classList.add('cardmove')
            })

            logoContainer1.classList.add('fade1')
            logoContainer2.classList.add('fade2')
        } else {
            logoContainer1.classList.remove('fade1')
            logoContainer2.classList.remove('fade2')
        }

        if (offset >= 700) {
            firstContainer.classList.add('firstCotnainerAnimation')
        } else {
            firstContainer.classList.remove('firstCotnainerAnimation')
        }

        if (offset >= 1000) {
            secondContainer.classList.add('firstCotnainerAnimation')
        } else {
            secondContainer.classList.remove('firstCotnainerAnimation')
        }
    }, 100);
}


window.addEventListener('scroll', () => {
    offset = window.pageYOffset;
})

pageAnimations();


let flag = 1;
let burgerButton = document.getElementById('burg-btn');
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
let line3 = document.getElementById('line3');
const burgermenu = document.querySelector('.navbar-links-burger');


burgerButton.addEventListener('click', function (burger) {
    if (flag === 1) {
        burgermenu.classList.add('burgerAnim')
        line1.style.transition = "1s";
        line3.style.transition = "1s";
        line2.style.opacity = 0;
        line1.style.transform = "rotateZ(50deg)";
        line1.style.top = "50%";
        line3.style.top = "50%";
        line2.style.transition = "1s";
        line3.style.transform = "rotateZ(-50deg)";
        flag = 0;
        document.body.style.overflow = "hidden";
    } else {
        burgermenu.classList.remove('burgerAnim')
        document.body.style.overflowY = "scroll";
        line1.style.transition = "1s";
        line3.style.transition = "1s";
        line2.style.transition = "1s";
        line1.style.transform = "rotateZ(0deg)";
        line3.style.transform = "rotateZ(0deg)";
        line1.style.top = "20%";
        line3.style.top = "68%";
        line2.style.opacity = 1;
        flag = 1;
    }

});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 766) {
        burgermenu.classList.remove('burgerAnim')
        line1.style.transform = "rotateZ(0deg)";
        line3.style.transform = "rotateZ(0deg)";
        line1.style.top = "20%";
        line3.style.top = "68%";
        line2.style.opacity = 1;
        flag = 1;
        document.body.style.overflowY = "scroll";
        document.body.style.overflowX = "hidden";
    }
});

let aboutButton = document.querySelector('.read-more-button');
const aboutCotainer = document.getElementById('aboutContainer');
const xButton = document.querySelector('.xbtn');

aboutButton.addEventListener('click', () => {
    aboutCotainer.style.display = "block";
    document.body.style.overflow = "hidden"
});

xButton.addEventListener('click', () => {
    aboutCotainer.style.display = "none";
    document.body.style.overflowY = "scroll"
});