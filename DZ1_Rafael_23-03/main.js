const block2 = document.querySelector('.block');

let position = 0
let topPosition = 0


const moveBlock = function () {
    if(position <= 440 && topPosition == 0){
        position+= 16
        block2.style.left = `${position}px`
        setTimeout(moveBlock, 100)
    }
}
moveBlock()