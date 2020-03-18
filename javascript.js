let thumbnail = document.querySelectorAll('.thumbnail .pic img');
let center = document.querySelector('.center .pic img')

thumbnail.forEach((item) => {
    item.addEventListener('click', (ev) => {
        center.src = ev.target.src
    })
})