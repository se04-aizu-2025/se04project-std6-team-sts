export class TestEngine {
  /**
   * 配列が並んでいるかチェックし真偽値を返す
   * @param {number[]} array
   * @returns {boolean}
   */
  static isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        return false;
      }
    }
    return true;
  }
}
