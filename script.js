const circle = document.getElementById("circle");
const gameArea = document.getElementById("gameArea");

let posX = 50;
let posY = 50;

const moveSpeed = 50;
const originalBackgroundColor = 'rgb(23, 85, 87)';

document.addEventListener('keydown', (event)=>{
    switch (event.code){
        case 'ArrowUp':
            if (posY > 0)
                posY = posY - moveSpeed;
            break;
        case 'ArrowDown':
            if (posY < window.innerHeight - circle.offsetHeight)
                posY = posY + moveSpeed;
            break;
        case "ArrowLeft":
            if (posX > 0)
                posX = posX - moveSpeed;
            break;
        case 'ArrowRight':
            if (posX < window.innerWidth - circle.offsetWidth)
                posX = posX + moveSpeed;
            break;
    }
    updateCirclePosition();
});

// Função que atualiza a posição do círculo
function updateCirclePosition(){
    circle.style.left = `${posX}px`;
    circle.style.top = `${posY}px`;
}

function createSquares(){
    clearshapes();
    gameArea.style.backgroundColor = 'red';
    
    for(let i =0; i<4; i++){
        const square =document.createElement('div');
        square.classList.add('square');
        square.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
        square.style.top = `${Math.random() * (window.innerWidth - 50)}px`;
        gameArea.appendChild(square);
    }
        
}

function createCircles(){
    clearshapes();
    gameArea.style.backgroundColor = 'brown';
    for(let i =0; i<5; i++){
        const smallCircle =document.createElement('div');
        smallCircle.classList.add('small-circle');
        smallCircle.style.left = `${Math.random() * (window.innerWidth - 30)}px`;
        smallCircle.style.top = `${Math.random() * (window.innerWidth - 30)}px`;
        gameArea.appendChild(smallCircle);    
    }
}

function clearshapes(){
    const shapes = document.querySelectorAll('.square, .small-circle');
    shapes.forEach(shape => shape.remove());
}

function resetGameArea(){
    clearshapes();
    gameArea.style.background = originalBackgroundColor;
}

document.addEventListener('keydown', (event) =>{
    if(event.code === 'Digit1'){
        createSquares();
    }else if(event.code === 'Digit2'){
        createCircles();
    }else if(event.code === 'Digit3'){
        resetGameArea();
    }
});
