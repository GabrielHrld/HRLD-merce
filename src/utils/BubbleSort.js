export const bubbleSort = (array) => {
  const l = array.length;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l - 1 - i; j++) {
      if (array[j].price > array[j + 1].price) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
};

export const bubbleSortInverse = (array) => {
  const l = array.length;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l - 1 - i; j++) {
      if (array[j].price < array[j + 1].price) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
};

export const orderById = (array) => {
  const l = array.length;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l - 1 - i; j++) {
      if (array[j].id > array[j + 1].id) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
};
