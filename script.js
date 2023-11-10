const number = document.querySelector(".duck");

function duck() {
    document.getElementById("duck").style.right = Math.random() * window.innerWidth + 'px';
    document.getElementById("duck").style.bottom = Math.random() * window.innerWidth + 'px';
}
let cube = document.querySelector('.obj');
let moveBy = 10;

window.addEventListener('load', () => {
    cube.style.position = 'absolute';
    cube.style.bottom = 0;
    cube.style.right = 0;
});
window.addEventListener('keydown', (e) => {
    switch(e.key){
        case 'ArrowUp':
            cube.style.bottom = parseInt(cube.style.bottom) + moveBy + 'px';
            break;
        
        case 'ArrowDown':
            cube.style.bottom = parseInt(cube.style.bottom) - moveBy + 'px';
            break;
        
        case 'ArrowLeft':
            cube.style.right = parseInt(cube.style.right) + moveBy + 'px';
            break;
                
        case 'ArrowRight':
            cube.style.right = parseInt(cube.style.right) - moveBy + 'px';
            break;
    }
});