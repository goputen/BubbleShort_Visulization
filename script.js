let container = document.getElementById('container');
let arr = [];

random();

function random() {
    container.innerHTML = "";
    for (let i = 0; i < 30; i++) {
        arr[i] = Math.floor(Math.random() * 95) + 1;
        show();
    }

}


function sort() {
    let copy = [...arr];
    const swaps = bubbleSort(copy);
    play(swaps);

}


function play(swaps) {
    if (swaps.lenth == 0) {
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
    for (let i = 0; i < 30; i++) {

        for (let j = 0; j < 30; j++) {

            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swaps.push([j, j + 1]);
                console.log(swaps)

            }
        }
    }
    return swaps;
}

function show() {
    container.innerHTML = "";
    for (let i = 0; i < 30; i++) {
        let div = document.createElement('div');
        div.style.height = `${arr[i]}%`;
        div.classList.add('bar')
        container.appendChild(div);
    }
}