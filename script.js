let container = document.getElementById('container');
let arr = [];
const arrayLength = 30;

random();

function random() {
    container.innerHTML = "";
    for (let i = 0; i < arrayLength; i++) {
        arr[i] = Math.floor(Math.random() * 95) + 1;
    }
    show();
}

function sort() {
    let copy = [...arr];
    const swaps = bubbleSort(copy);
    play(swaps);
}

function play(swaps) {
    if (swaps.length === 0) {
        return;
    }
    const [i, j] = swaps.shift();
    [arr[i], arr[j]] = [arr[j], arr[i]];
    show();
    setTimeout(() => {
        play(swaps);
    }, 130);
}

function bubbleSort(arr) {
    const swaps = [];
    let temp;
    for (let i = 0; i < arrayLength; i++) {
        for (let j = 0; j < arrayLength - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swaps.push([j, j + 1]);
            }
        }
    }
    return swaps;
}

function show() {
    container.innerHTML = "";
    for (let i = 0; i < arrayLength; i++) {
        let div = document.createElement('div');
        div.style.height = `${arr[i]}%`;
        div.classList.add('bar')
        container.appendChild(div);
    }
}