function bonelessMagicSquare(arr){
    //3, 5, 7, 9, 11, . . . , 2n + 3 e Z

    //El nodo del centro es el indice del centro del arreglo
    //las "12 en punto" es el indice 0, y así en
    //sentido de las manecillas del reloj
    let magicNumber;
    let n = arr.length;
    if((n - 3) % 2 == 0){
        arr = insertSort(arr);
        magicNumber = arr[0] + arr[Math.floor(n/2)] + arr[n-1];
        for(let i = 0; i < n; i++){
            if(magicNumber != arr[i] + arr[Math.floor(n/2)] + arr[n - i - 1]){
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

function insertSort(arr){
    let n = arr.length;
        let k = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > k){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = k;
    }
    return arr;
}

/*
    for a
        arr.slice(a)
        for b
            arr.splice(b)
            for c
                arr.splice(c)
                a + b + c = Sum && a!=b!=c
*/