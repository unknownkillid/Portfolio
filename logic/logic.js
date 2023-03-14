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

