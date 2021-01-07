export function getInsertionSortAnimations(array) {
    const animations = [];
  
    for (let i = 1; i < array.length; i++){
        let j = i;
        
        while (j > 0 && array[j] < array[j - 1]) {
            animations.push([j, j-1]);
            animations.push([j, j-1]);
            animations.push([j, array[j], array[j - 1]]);
            swap(j, j - 1, array);
            j -= 1;
        }

        animations.push([i, i-1]);
        animations.push([i, i-1]);
        animations.push([i, array[i], array[i]]);

    }
    return animations;
}
function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}