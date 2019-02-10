function almostIncreasingSequence(sequence) {
    let t = 1;
    for(let i = 0; i < sequence.length - 1;i++){
        if(sequence[i] >= sequence[i+1]){
            if(t == 0 ) return false;
            t = t - 1;
            if(sequence.indexOf(sequence.splice(i,1)[0]) != -1) return false;
            i = 0;
            console.log(sequence);
        }        
    }
    return true;
}


function almostIncreasingSequence(sequence) {
    let t = 1;
    let length = sequence.length;
    for(let j = 1; j <= 2 ;j++){
        for(let i = 0; i < length; i++){
            console.log(sequence);
            if(sequence[i] >= sequence[i+1] && j == 1){
                if ((sequence[i+1] > sequence[i-1] && j == 1) || i == 0 ){
                    sequence.splice(i,1);
                }else{
                    sequence.splice(i+1,1);
                }
                break;
            }
            if(sequence[i] >= sequence[i+1] && j == 2){
                return false;
            }
        }
    }
    return true;
}
