import { SelectionSort } from "./SelectionSort.js";

function start() {
    const sorter = new SelectionSort();

    let data = [1, 3, 4, 2, 7, 9, 8, 6];

    console.log(data);
    const generator = sorter.sort(data);
    for (let step of generator) {
        console.log(step.type, step.indices);
        if (step.type === 'compare') {

        } else if (step.type === 'swap') {
            console.log(data);
        } else {

        }
    }
    console.log(data);
}

start();