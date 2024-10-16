const circle = document.getElementById("circle");
const gameArea = document.getElementById("gameArea");

let posX = 50;
let posY = 50;

const moveSpeed = 50;
const originalBackgroundColor = 'rgb(23, 85, 87)';

document.addEventListener('keydown', (event)=>{
    switch(event.code){
        case 'ArrowUp':
            if (posY > 0)
                posY = posY - moveSpeed;
            break;
        case 'ArrowDown':
            if (posY < window.innerHeight - circle.offsetHeight) 
                posY = posY+ moveSpeed;
            break;
            case "Arrowleft":
                if (posX > 0)
                    posX = posX-moveSpeed;
                break;
        
    }
})
