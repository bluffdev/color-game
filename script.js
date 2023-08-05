const cells = document.querySelectorAll('.cell');
const colorText = document.querySelector('#colorText');

let winningColorIndex = Math.floor(Math.random() * (8 - 0 + 1) + 0);
let winningHexColor = "";
let colorSet = new Set();

let won = false;

function changeAllCellColors(hexCode) {
    cells.forEach((cell) => {
        cell.style.backgroundColor = hexCode;
    })
}

function initCells() {
    winningColorIndex = Math.floor(Math.random() * (8 - 0 + 1) + 0);

    cells.forEach((cell, index) => {
        let randomHexColor = "#" + ((1<<24)*Math.random() | 0).toString(16);

        while (colorSet.has(randomHexColor)) {
            randomHexColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
        }

        colorSet.add(randomHexColor);
        cell.style.backgroundColor = randomHexColor;

        if (index === winningColorIndex) {
            winningHexColor = randomHexColor; 
            colorText.textContent = `Hex Color: ${winningHexColor}`;
        }

        function handleCellClick() {
            if (won) return;

            if (index === winningColorIndex) {
                setAllCellsVisible();
                changeAllCellColors(winningHexColor);
                colorText.textContent = `You Won!!! ${winningHexColor}`;
                won = true;
            } else {
                cell.style.opacity = '0';
                setTimeout(() => {
                    cell.style.visibility = 'hidden';
                }, 300);
            }
        }

        cell.addEventListener('click', handleCellClick);
    });
};

function setAllCellsVisible() {
    cells.forEach((cell) => {
        cell.style.opacity = '1';
        cell.style.visibility = 'visible';
    });
};

const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', (e) => {
    initCells();
    setAllCellsVisible();
    colorSet.clear();
    won = false;
});

initCells();