export class SelectionSort {
  /**
   * 配列をソートする関数
   * @param {number[]} array - ソート対象の数値配列 (例: [3, 1, 4])
   * @returns {Generator<{operation: string, indices: number[]}, void, undefined>} ソートの各ステップを表すオブジェクトを生成するジェネレーター
   */
  *sort(array) {
    let n = array.length;

    for (let i = 0; i < n; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
        yield { operation: 'compare', indices: [minIndex, j] };
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        yield { operation: 'swap', indices: [i, minIndex] };
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
    }
  }
}
