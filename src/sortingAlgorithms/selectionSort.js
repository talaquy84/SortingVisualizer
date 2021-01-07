export function getSelectionSortAnimations(array) {
    let startIdx = 0;
    const animations = [];
  
    while (startIdx < array.length - 1) {
        let smallestIdx = startIdx;
        for (let i = startIdx + 1; i < array.length; i++) {
            //Change color of comparing bar and revert
            animations.push([smallestIdx, i]);
            animations.push([smallestIdx, i]);
            animations.push([smallestIdx, i, -1, -1]);
            if (array[smallestIdx] > array[i]) smallestIdx = i;
            
        }
        animations.push([startIdx, smallestIdx]);
        animations.push([startIdx, smallestIdx]);
        animations.push([startIdx, smallestIdx, array[startIdx], array[smallestIdx]]);
        swap(startIdx, smallestIdx, array)
        startIdx++;
    }
    return animations;
}

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}