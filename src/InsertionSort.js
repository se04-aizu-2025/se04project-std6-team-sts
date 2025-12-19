export class InsertionSort {
  /**
   * 挿入ソートを用いて配列を昇順に並べ替える
   * @param {number[]} array ソート対象の1次元整数配列
   * @returns {number[]} ソートされた配列
   */
  sort(array) {
    const n = array.length;

    for (let i = 1; i < n; i++) {
      let j = i - 1;
      const currentValue = array[i];

      while (j >= 0 && array[j] > currentValue) {
        array[j + 1] = array[j];
        j--;
      }

      array[j + 1] = currentValue;
    }

    return array;
  }
}
