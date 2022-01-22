let list = document.querySelectorAll('.navigation li');
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');



window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('active')) {
        navigation.classList.toggle('active')
        main.classList.toggle('active')
    }
})

//add hovered class in selected list item
function activeLink() {
    list.forEach((item) => {
        item.classList.remove('hovered')
        this.classList.add('hovered')
    })
}
list.forEach((item) => {
    item.addEventListener('mouseover', activeLink)
})

toggle.onclick = function () {
    navigation.classList.toggle('active')
    main.classList.toggle('active')
    if (navigation.classList.contains('active') && main.classList.contains('active')) {
        localStorage.setItem('active', true)

    } else {
        localStorage.removeItem('active')
    }
}