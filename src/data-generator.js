/**
 * 指定された個数分のランダムな整数(0~99)を含む配列を生成する
 * @param {number} count 生成する配列の大きさ
 * @returns {number[]} ランダムな整数を含む配列
 */
export function generateRandomArray(count) {
  const array = [];
  for (let i = 0; i < count; i++) {
    const randomNum = Math.floor(Math.random() * 100);
    array.push(randomNum);
  }

  return array;
}
