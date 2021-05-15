const defaultGrid = 16;
const colors = ['blue', 'yellow', 'green', 'black'];
const myContainer = document.querySelector('.my-container');
// getting and using the screen's width like a width of my container
const myContainerWidht = window.screen.width * 0.8;
const myContainerHeight = myContainerWidht;
myContainer.style.width = `${myContainerWidht}px`;
myContainer.style.height = `${myContainerHeight}px`;

creatSquares(defaultGrid);

function changeBgColor(e) {
    e.target.style.backgroundColor = `${colors[Math.floor((Math.random())*4)]}`;
}

function restoreBgColor(e) {
    e.target.style.backgroundColor = "red";
}

const btnGrid = document.createElement('button');
btnGrid.textContent = 'Clear';
btnGrid.classList.add('btn-grid');
document.body.before(btnGrid, myContainer);

btnGrid.addEventListener('click', cleanContainer);

function creatSquares(squares) {
    myContainer.style.gridTemplateColumns = `repeat(${squares}, auto)`;
    myContainer.style.gridTemplateRows = `repeat(${squares}, auto)`;

    const divWidth = (myContainerWidht / squares)-2;
    const divHeight = (myContainerWidht / squares)-2;

    for(let i = 0; i < (squares * squares); i++ ) {

        const div = document.createElement('div');

        div.style.width = `${divWidth}px`;
        div.style.height = `${divHeight}px`;
        div.style.backgroundColor = "red";
        div.style.border = '1px solid black';
        div.classList.add('my-container__div');

        myContainer.append(div);
    }

    const divs = document.querySelectorAll('.my-container__div');
    Array.from(divs).forEach( element =>  {
    element.addEventListener('mouseenter',changeBgColor);
    element.addEventListener('mouseout',restoreBgColor);
});

}

function cleanContainer() {
    const newGrid = parseInt(prompt('How many squares do you want per row ?'));
    if(!isNaN(newGrid)) {
        if(newGrid < 80 && newGrid > 0) {
            myContainer.innerHTML = '';
            creatSquares(newGrid);
        }
        else alert('The number of squares must be between 1 and 80');
    }
    else alert('Type a number, please');
}