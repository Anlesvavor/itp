function chessboard(char, n){
    s1 = " " + char;
    s2 = char + " ";
   // console.log(((" " + char).repeat(n) + "\n" + (char + " ").repeat(n) + "\n").repeat(Math.ceil((n/2))-1));
    for(let i = 0; i < n; i++){
        console.log(( i % 2 == 0 ? s1.repeat(n) : s2.repeat(n)));
    }
}