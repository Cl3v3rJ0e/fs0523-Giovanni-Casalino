let tombola = document.querySelector('#container');

let celleArea = tombola.querySelector('.celle-area');

for(let i = 1; i <= 76; i++){
    let cella = document.createElement('div');
    cella.classList.add('cella');
    cella.innerText = i;

    celleArea.appendChild(cella);
}

let randomButton = document.createElement('button')

randomButton.addEventListener('click', function(){
    Math.floor(Math.random() * 76)+1
})

celleArea.appendChild(randomButton)

randomButton.classList.add('random-button')
randomButton.innerText = 'Random Button'

console.dir(randomButton);






