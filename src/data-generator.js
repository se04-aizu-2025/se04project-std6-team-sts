/**
 * 指定された個数分の一意に定まったランダムな整数を含む配列を生成する
 * @param {number} count 生成する配列の大きさ
 * @returns {number[]} ランダムな整数を含む配列
 */
export function generateRandomArray(count) {
  const array = Array.from({ length: count }, (_, i) => i + 1);

  // Fisher–Yates アルゴリズムを使用して配列をシャッフル
  for (let i = array.length - 1; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomNum]] = [array[randomNum], array[i]];
  }

  return array;
}
