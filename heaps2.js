function MinHeap() {
    this.a = [0];
}

function swap(array, n, m) {
    array[n] = array.splice(m, 1, array[n])[0];    
}

MinHeap.prototype.swap = function(m, n) {
    this.a[m] = this.a.splice(m, 1, this.a[n])[0];
}

MinHeap.prototype.siftUp = function(i) {
    while (Math.floor((i - 1) / 2) >= 0) {
        if(this.a[i] < this.a[Math.floor((i - 1) / 2)]) this.swap(i, Math.floor((i - 1) / 2));
        i = Math.floor((i - 1) / 2);
    }
}

MinHeap.prototype.siftDown = function(i) {
    var mc;
    while( i * 2 <= this.a.length-1){
        mc = this.minChild(i);
        if(this.a[i] === this.a[mc]) return true;
        if(this.a[i] > this.a[mc]){
            this.swap( i, mc);
        }
        i = mc;
    } 
}

MinHeap.prototype.minChild = function (i) {
    if(i * 2 + 1 > this.a.length-1){
        return i * 2;
    } else {
        if(this.a[i * 2] < this.a[i * 2 + 1]){
            return i * 2;
        }else{
            return i * 2 + 1;
        }
    }
}

MinHeap.prototype.delMin = function() {
    this.a.splice(0,1,this.a.pop());
    this.siftDown(0);
}

MinHeap.prototype.minHeapPush = function (n) {
    this.siftUp(this.a.push(n) - 1);

}

MinHeap.prototype.heapify = function () {
    let i = Math.floor((this.a.length - 1)/2);
    while( i >= 0) {
        this.siftDown(i);
        i--;
    }
}

let x = [12,34,56,67,78,89,21,34];
let y = [9,8,7,6,5,4,5,3,2,1,0];
let z = [8,3,5,2,4,1,6,7,8,1];