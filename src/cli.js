import { InsertionSort } from "./InsertionSort.js";
import { SelectionSort } from "./SelectionSort.js";
import { HeapSort } from "./HeapSort.js";
import { QuickSort } from "./QuickSort.js";
import { generateRandomArray } from "./data-generator.js";
import { TestEngine } from "./TestEngine.js";

const args = process.argv.slice(2);

/** @type {string|undefined} */
const algorithm = args[0];
/** @type {string|undefined} */
const size_str = args[1];
if (algorithm === undefined || size_str === undefined) {
  console.log("使い方: node cli.js <algorithm> <size>");
  console.log("algorithm: insertion, selection, heap, quick");
  console.log("size: 配列のサイズ");
  process.exit(1);
}

const size = parseInt(size_str);

// ソーターを選択
let sorter;
switch (algorithm) {
  case "insertion":
    sorter = new InsertionSort();
    break;
  case "selection":
    sorter = new SelectionSort();
    break;
  case "heap":
    sorter = new HeapSort();
    break;
  case "quick":
    sorter = new QuickSort();
    break;
  default:
    console.log("利用可能なアルゴリズム: insertion, selection, heap, quick");
    process.exit(1);
}

// 配列を生成
const array = generateRandomArray(size);
console.log(`アルゴリズム: ${algorithm}`);
console.log(`配列サイズ: ${size}`);
console.log(`ソート前: [${array.join(", ")}]`);

// ソート実行
for (const { operation, indices } of sorter.sort(array)) {
  console.log(array);
}

console.log(`ソート後: [${array.join(", ")}]`);
console.log(
  `正しくソートされているか: ${TestEngine.isSorted(array) ? "はい" : "いいえ"}`,
);
