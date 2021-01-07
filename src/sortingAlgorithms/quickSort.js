export function getQuickSortAnimations(array) {
    const animations = [];
    quickSortHelper(array, 0, array.length - 1, animations)
    return animations;
}

function quickSortHelper(array, startIdx, endIdx, animations) {
    if (startIdx >= endIdx) return;
    const pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;

    while (rightIdx >= leftIdx) {
        //Change color of comparing indexes and revert
        animations.push([pivotIdx, leftIdx, rightIdx]);
        animations.push([pivotIdx, leftIdx, rightIdx]); 
        if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
            //Swap animations
            animations.push([leftIdx, rightIdx, array[leftIdx], array[rightIdx]]);
            swap(leftIdx, rightIdx, array);
        } else {
            // -1 mean we don't swap
            animations.push([leftIdx, rightIdx, -1, -1]);
        }
        if (array[leftIdx] <= array[pivotIdx])  leftIdx++;
        if (array[rightIdx] >= array[pivotIdx]) rightIdx--;
    }
    //Change color of comparing indexes and revert
    // Check if left index is greater than its length - 1
    if (leftIdx <= array.length - 1 ) {
        animations.push([pivotIdx, leftIdx, rightIdx]);
        animations.push([pivotIdx, leftIdx, rightIdx]);
    } else {
        animations.push([pivotIdx, pivotIdx, rightIdx]);
        animations.push([pivotIdx, pivotIdx, rightIdx]);
    }
    //Swap animations
    animations.push([pivotIdx, rightIdx, array[pivotIdx], array[rightIdx]]);
    swap(pivotIdx, rightIdx, array);

    const leftSubarrayIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
    if(leftSubarrayIsSmaller) {
        quickSortHelper(array, startIdx, rightIdx - 1, animations);
        quickSortHelper(array, rightIdx + 1, endIdx, animations);
    } else {
        quickSortHelper(array, rightIdx + 1, endIdx, animations);
        quickSortHelper(array, startIdx, rightIdx - 1, animations);
    }
}

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}