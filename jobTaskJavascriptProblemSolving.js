// var array = [1,2,3,4,5];
// var rotate = 4;
// console.log(array);

function rotateLeft (arr, num ) {

    for (var i = 0; i < num; i++) {
        var x = arr.shift();
        arr.push(x);
        
    }
    console.log(arr);

}

rotateLeft([1,2,3,4,5,6,7,8,9],4);

rotateLeft([3, 4, 5, 6, 7, 1, 2], 2);