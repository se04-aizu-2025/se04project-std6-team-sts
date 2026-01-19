export class QuickSort {
  /**
   * クイックソートを用いて配列を昇順に並べ替える
   * @param {number[]} array ソート対象の1次元整数配列
   * @returns {Generator<{operation: string, indices: number[]}, void, undefined>} ソートの各ステップを表すオブジェクトを生成するジェネレーター
   */
  *sort(array) {
    yield* this.#quickSort(array, 0, array.length - 1);
  }

  /**
   * 再帰的なソート処理
   * @param {number[]} array ソート対象の配列
   * @param {number} left ソート範囲の左端のインデックス
   * @param {number} right ソート範囲の右端のインデックス
   * @returns {Generator<{operation: string, indices: number[]}, void, undefined>} 
   */
  *#quickSort(array, left, right) {
    if (left < right) {
      // パーティション分割を行い、ピボットの位置を受け取る
      const pivotIndex = yield* this.#partition(array, left, right);

      // 左側
      yield* this.#quickSort(array, left, pivotIndex - 1);

      // 右側
      yield* this.#quickSort(array, pivotIndex + 1, right);
    }
  }

  /**
   * 配列をピボットを基準に分割し、ピボットの確定した位置を返す
   * @param {number[]} array ソート対象の配列
   * @param {number} left 分割範囲の左端のインデックス
   * @param {number} right 分割範囲の右端のインデックス
   * @returns {Generator<{operation: string, indices: number[]}, number, undefined>} 操作をyieldし、最終的にピボットのインデックスを返す
   */
  *#partition(array, left, right) {
    const pivot = array[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
      // compare
      yield { operation: 'compare', indices: [j, right] };

      if (array[j] < pivot) {
        i++;
        // swap
        yield { operation: 'swap', indices: [i, j] };
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    // swap
    yield { operation: 'swap', indices: [i + 1, right] };
    [array[i + 1], array[right]] = [array[right], array[i + 1]];

    return i + 1;
  }
}
