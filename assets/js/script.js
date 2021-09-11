const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const cards = $$('.card')
const cardImage = $$('.card-image')
const act = $$('.card .active')
const cardName = $$('.card-name')

cards.forEach((card, index) => {
    card.onclick = function () {
        cards.forEach((course) => {
            course.classList.remove('active')
        })
        this.classList.add('active')

        cardName.forEach((name) => {
            name.classList.remove('show')
        })
        cardName[index].classList.add('show')
    }
});