export class SelectionSort {
    /**
     * 配列をソートする関数
     * @param {number[]} array - ソート対象の数値配列 (例: [3, 1, 4])
     * @returns {number[]} ソートされた配列
     */
    sort(array) {
        let n = array.length;

        for (let i = 0; i < n; i++) {
            let minIndex = i;

            for (let j = i + 1; j < n; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }

            if (minIndex !== i) {
                [array[i], array[minIndex]] = [array[minIndex], array[i]];
            }
        }
        return array;
    }
}