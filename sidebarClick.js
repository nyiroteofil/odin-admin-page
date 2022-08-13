const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(e => {
    
    e.addEventListener('click', () => {

        const feed = document.querySelector('.feed');

            let message = document.createElement('div');
            message.classList.add('message');
            
            if (feed.classList.contains('light')) {

                if (!message.classList.contains('light')) {
                    
                    message.classList.add('light');
                        
                }

            } else {

                if (!message.classList.contains('dark')) {
                    
                    message.classList.add('dark');
                        
                }

            }
            
            body.appendChild(message); 

            let popUpTitle = document.createElement('h1');
            popUpTitle.textContent = 'Hello there!';

            let popUpText = document.createElement('p');
            popUpText.textContent = 'Did you really thought that there will be anything here?'

            let popUpText2 = document.createElement('p');
            popUpText2.textContent = 'The joke is on you pal...'

            let exit = document.createElement('div');
            exit.textContent = 'Exit';
            exit.classList.add('exit');

            message.appendChild(popUpTitle);
            message.appendChild(popUpText);
            message.appendChild(popUpText2);
            message.appendChild(exit);

            exit.addEventListener('click', () => {

                body.removeChild(body.lastElementChild);

            })
    });
   
});      

/**button for mobile news opener */

const newsButton = document.querySelector('.mobileNewsOpen');
const newsTab = document.querySelector('.news')

let newsButtonClicked = false;

newsButton.addEventListener('click', () => {


    if (newsButtonClicked === false) {

        newsTab.style.gridColumnStart = "10";

        newsButtonClicked = true;


    } else {

        newsTab.style.gridColumnStart = '20';

        newsButtonClicked = false;

    }

});
   