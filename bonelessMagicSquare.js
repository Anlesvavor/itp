function bonelessMagicSquare(arr){
    //3, 5, 7, 9, 11, . . . , 2n + 3 e Z

    //El nodo del centro es el indice del centro del arreglo
    //las "12 en punto" es el indice 0, y así en
    //sentido de las manecillas del reloj
    let magicNumber;
    let n = arr.length;
    if((n - 3) % 2 == 0){
        arr = insertSort(arr);
        magicNumber = arr[0] + arr[Math.ceil(n/2)] + arr[n-1];
        for(let i = 0; i < n; i++){
            console.log("a: " + arr[i]);
            console.log("b: " + arr[n- i - 1]);
            console.log("c: " + arr[Math.ceil(n/2)]);
            console.log(arr[i] + arr[Math.ceil(n/2)] + arr[n - i - 1]);
            if(magicNumber != arr[i] + arr[Math.ceil(n/2)] + arr[n - i - 1]){
                return 2;
            }
        }
        return 1;
    } else {
        return 3;
    }
}

function insertSort(arr){
    let n = arr.length;
    for(let i = 1; i <= n; i++){
        let k = arr[i];
        let j = i - 1;
        while(j > 0 && arr[j] > k){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = k;
    }
    return arr;
}