function swap(array, n, m) {
    array[n] = array.splice(m, 1, array[n])[0];    
}

function getParentIndex(array, n) {
    return Math.floor((array.indexOf(n) - 1) / 2);
}

function getParent(array, n) {
    return array[getParentIndex(array, n)];
}

Array.prototype.maxHeapFilter = function() {
}

Array.prototype.siftUp = function(i) {
    while (Math.floor((i - 1) / 2) >= 0) {
        if(this[i] < this[Math.floor((i - 1) / 2)]) swap(this, i, Math.floor((i - 1) / 2));
        i = Math.floor((i - 1) / 2);
    }
}

Array.prototype.siftDown = function(i) {
    var mc;
    while( i * 2 <= this.length-1){
        mc = this.minChild(i);
        if(this[i] === this[mc]) return true;
        if(this[i] > this[mc]){
            swap(this, i, mc);
        }
        i = mc;
    } 
}

Array.prototype.minChild = function (i) {
    if(i * 2 + 1 > this.length-1){
        return i * 2;
    } else {
        if(this[i * 2] < this[i * 2 + 1]){
            return i * 2;
        }else{
            return i * 2 + 1;
        }
    }
}

Array.prototype.delMin = function() {
    const r = this.splice(0,1,this.pop());
    this.siftDown(0);
    return r;
}

Array.prototype.minHeapFilter = function() {
    for(i = this.length - 1; i >= 0; i--) {
        //console.log(this[i]);
        //console.log(this[getParentIndex(this, this[i])]);
        if(this[i] < this[getParentIndex(this, this[i])]) {
            swap(this, i, getParentIndex(this, this[i]));
        }
    }
    return this;
}

Array.prototype.minHeapPush = function (n) {
    this.siftUp(this.push(n) - 1);

}

Array.prototype.heapify = function () {
    let i = Math.floor((this.length - 1)/2);
    while( i >= 0) {
        this.siftDown(i);
        i--;
    }
}


function heapsort(array) {
    let heap = [];
    let res = [];
    for(v of array){
        heap.minHeapPush(v);
    }
    for(v of array){
        res.push( heap.delMin() );
    }
    return res;
}
var r = [132,43,423,546,68,34];
var q = [8, 1, 2, 4, 6, 10];
console.log(q);
//console.log(r.minHeapFilter());
//console.log(q.minHeapFilter().sort((a, b) => a - b));


//hacer bubbling 
//hacer shifdown 
let qq = q.minHeapFilter();
//console.log(qq);
for(let  i = 0; i < qq.length; i++){
    console.log(qq);
    if(qq[i] > qq[i+1]) swap(qq, i, i+1);
}


//console.log(qq);



let x = [12,34,56,67,78,89,21,34];
let y = [9,8,7,6,5,4,5,3,2,1,0];
let z = [8,3,5,2,4,1,6,7,8,1];