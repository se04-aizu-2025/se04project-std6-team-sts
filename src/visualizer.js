import { InsertionSort } from "./InsertionSort.js";
import { SelectionSort } from "./SelectionSort.js";
import { HeapSort } from "./HeapSort.js";
import { QuickSort } from "./QuickSort.js";
import { generateRandomArray } from "./data-generator.js";

// DOM要素の取得
const sortSelect = document.getElementById("sort-algorithm");
const arraySizeInput = document.getElementById("array-size");
const speedInput = document.getElementById("speed");
const generateButton = document.getElementById("generate-button");
const startButton = document.getElementById("start-button");
const visualization = document.getElementById("visualization");

/** @type {number[]} */
let array = [];
let isRunning = false;

/**
 * バーを描画する
 * @param {number[]} indices - ハイライトするインデックス
 * @param {string} type - ハイライトのタイプ (comparing, swapping, sorted)
 */
function renderBars(indices = [], type = "") {
  visualization.innerHTML = "";

  const maxValue = Math.max(...array);
  array.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.className = `bar${indices.includes(index) ? ` ${type}` : ""}`;
    bar.style.height = `${(value / maxValue) * 100}%`;

    visualization.appendChild(bar);
  });
}

/**
 * 新しい配列を生成して描画する
 */
function generateNewArray() {
  if (isRunning) return;

  array = generateRandomArray(parseInt(arraySizeInput.value));
  renderBars();
}

/**
 * ソートを開始して各ステップをアニメーション表示する
 */
async function startSorting() {
  if (isRunning) return;
  isRunning = true;

  // 選択されたアルゴリズムのソーターを作成
  let sorter;
  switch (sortSelect.value) {
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
  }
  const generator = sorter.sort(array);

  // ソートの各ステップを実行
  for (const { operation, indices } of generator) {
    renderBars(indices, operation === "compare" ? "comparing" : "swapping");
    await new Promise((resolve) =>
      setTimeout(
        resolve,
        parseInt(speedInput.max) - parseInt(speedInput.value) + 1,
      ),
    );
  }

  // ソート完了
  isRunning = false;
  renderBars(
    Array.from({ length: array.length }, (_, i) => i),
    "sorted",
  );
}

// イベントリスナーの登録
generateButton.addEventListener("click", generateNewArray);
startButton.addEventListener("click", startSorting);
arraySizeInput.addEventListener("change", generateNewArray);

// 初期配列を生成
generateNewArray();
