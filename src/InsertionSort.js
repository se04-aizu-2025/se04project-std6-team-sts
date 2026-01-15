export class InsertionSort {
  /**
   * 挿入ソートを用いて配列を昇順に並べ替える
   * @param {number[]} array ソート対象の1次元整数配列
   * @returns {Generator<{operation: string, indices: number[]}, void, undefined>} ソートの各ステップを表すオブジェクトを生成するジェネレーター
   */
  static *sort(array) {
    const n = array.length;

    for (let i = 1; i < n; i++) {
      let j = i;

      while (j > 0) {
        yield { operation: 'compare', indices: [j - 1, j] };

        if (array[j - 1] > array[j]) {
          yield { operation: 'swap', indices: [j - 1, j] };

          [array[j - 1], array[j]] = [array[j], array[j - 1]];

          j--;
        } else {
          break;
        }
      }
    }
  }
}

