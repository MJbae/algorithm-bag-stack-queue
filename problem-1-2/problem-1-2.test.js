class Bag {
  #items = [];

  isEmpty() {
    return this.#items.length === 0;
  }

  add(item) {
    this.#items.push(item);
  }

  size() {
    return this.#items.length;
  }

  sum() {
    return this.#items.reduce((acc, cur) => acc + cur, 0);
  }

  [Symbol.iterator]() {
    let index = 0;
    const data = this.#items;
    return {
      next() {
        return index < data.length
          ? { done: false, value: data[index++] }
          : { done: true };
      },
    };
  }
}

const solution = (numbers) => {
  const bag = new Bag();
  numbers.forEach((e) => bag.add(e));
  return Math.floor(bag.sum() / bag.size());
};

test('숫자 배열의 평균을 반환한다', () => {
  expect(solution([1, 2, 3, 4, 5])).toEqual(3);
  expect(solution([1, 3, 5, 7, 9, 11])).toEqual(6);
  expect(solution([2, 4, 6, 8, 10, 12, 13, 14, 15])).toEqual(9);
});
