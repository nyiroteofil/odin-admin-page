const feed = document.querySelector('.feed');
const themeButton = document.querySelector('.theme');

themeButton.addEventListener('click', () => {

    if (feed.classList.contains('light')) {

        let light = document.querySelectorAll('.light');
        
        light.forEach(e => {
            e.classList.remove('light');
            e.classList.add('dark')
        })

    }   else {

        let dark = document.querySelectorAll('.dark');

        dark.forEach(e => {
            e.classList.remove('dark');
            e.classList.add('light');
        });
    }
});