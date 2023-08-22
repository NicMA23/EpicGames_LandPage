const insideMenu = document.querySelector('.inside-menu');
const open = document.querySelector('.menu-open');
const close = document.querySelector('.menu-close');
const languageMain = document.querySelector('.language_logo')
const langaugeMenu = document.querySelector('.language-main')

function updateMenuDisplay() {
    if (window.innerWidth < 795) {

        insideMenu.style.display = 'none';
        close.style.display = 'none';
        open.style.display = 'inherit';
        document.body.style.overflow = 'hidden';

        close.addEventListener('click', function (e) {

            insideMenu.style.display = 'none';
            close.style.display = 'none';
            open.style.display = 'inherit';

        });
    } else {

        insideMenu.style.display = 'none';
        close.style.display = 'none';
        open.style.display = 'none';
        document.body.style.overflow = 'auto';

        languageMain.addEventListener('mouseover', function (e) {

            langaugeMenu.style.display = 'block'

        })

    }
}

open.addEventListener('click', function (e) {

    insideMenu.style.display = 'block';
    close.style.display = 'inherit';
    open.style.display = 'none';
    document.body.style.overflow = 'hidden';

});

window.addEventListener('resize', updateMenuDisplay);

updateMenuDisplay();
