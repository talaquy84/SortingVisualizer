export function getBubbleSortAnimations(array) {
  let isSorted = false;
  let counter = 0;
  const animations = [];

  while (!isSorted) {
    isSorted = true;
    for ( let i = 0; i < array.length - 1 - counter; i++) {
      //Change color of comparing bar and revert
      animations.push([i, i + 1]);
      animations.push([i, i + 1]);
      
      if (array[i] > array[i+1]) {
        //swap if current is greater than behind number
        animations.push([i, array[i], array[i+1]]);
        swap(i, i+1, array);
        isSorted = false;
      } else {
        animations.push([i, array[i], array[i+1]]);
      }
    }
    counter++;
  }
  return animations;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}