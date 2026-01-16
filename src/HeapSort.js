export class HeapSort {
  /**
   * ヒープソートを用いて配列を昇順に並べ替える
   * @param {number[]} array ソート対象の1次元整数配列
   * @returns {Generator<{operation: string, indices: number[]}, void, undefined>} ソートの各ステップを表すオブジェクトを生成するジェネレーター
   */
  *sort(array) {
    const n = array.length;

    // 配列全体をヒープ構造にする
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      yield* this.#siftDown(array, n, i);
    }

    // ヒープから最大値を取り出して末尾に移動する
    for (let i = n - 1; i > 0; i--) {
      // 先頭と末尾（未ソート部分の最後）を交換
      yield { operation: 'swap', indices: [0, i] };
      [array[0], array[i]] = [array[i], array[0]];

      // 先頭に移動してきた値を正しい位置まで沈める（対象範囲は i 個）
      yield* this.#siftDown(array, i, 0);
    }
  }

  /**
   * あるノードを起点に、ヒープの性質を満たすよう値を沈めていく
   * @param {number[]} array 対象配列
   * @param {number} heapSize ヒープとして扱う範囲のサイズ
   * @param {number} rootIndex 起点となる親ノードのインデックス
   * @return {Generator<{operation: string, indices: number[]}, void, undefined>}
   */
  *#siftDown(array, heapSize, rootIndex) {
    let largest = rootIndex;
    const left = 2 * rootIndex + 1;
    const right = 2 * rootIndex + 2;

    // 左の子と比較
    if (left < heapSize) {
      yield { operation: 'compare', indices: [left, largest] };
      if (array[left] > array[largest]) {
        largest = left;
      }
    }

    // 右の子と比較
    if (right < heapSize) {
      yield { operation: 'compare', indices: [right, largest] };
      if (array[right] > array[largest]) {
        largest = right;
      }
    }

    // もし親より大きい子がいたら交換して再帰的に沈める
    if (largest !== rootIndex) {
      yield { operation: 'swap', indices: [rootIndex, largest] };
      [array[rootIndex], array[largest]] = [array[largest], array[rootIndex]];

      // 交換先でもさらに沈める必要があるかチェック
      yield* this.#siftDown(array, heapSize, largest);
    }
  }
}
