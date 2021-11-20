const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.nav-items')

const underline = $('.nav-items.active');

console.log([underline])

const line = $('.underline')

line.style.left = underline.offsetLeft + 'px';
line.style.width = underline.offsetWidth + 'px';

$('#nav').onmouseleave = function() {
    if($('.nav-items.active'))
    $('.nav-items.active').classList.remove('active');
}

tabs.forEach(function(tab, index) {
    tab.onmousemove = function() {
        if($('.nav-items.active')){
            $('.nav-items.active').classList.remove('active')
        }
        this.classList.add('active')
    }
})

tabs.forEach(function(tab, index) {
    tab.onclick = function() {
        $('.content.active').classList.remove('active');
        var content = $$('.content')[index]
        content.classList.add('active')
        line.style.left = $('.nav-items.active').offsetLeft + 'px';
        line.style.width = $('.nav-items.active').offsetWidth + 'px';
    }
})

reactRender

