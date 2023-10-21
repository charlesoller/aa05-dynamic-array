class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(this.capacity)
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if(this.length === this.capacity) this.resize();
    this.data[this.length] = val;
    this.length++;
  }


  pop() {
    if(this.length < 1) return undefined
    let arr = new Array(this.length - 1);
    let lastEle = this.data[this.length - 1];
    for(let i = 0; i < this.data.length - 1; i++){
      arr[i] = this.data[i]
    }
    this.data = arr;
    this.length--;
    return lastEle;
  }

  shift() {
    if(this.length < 1) return undefined
    let arr = new Array(this.length - 1);
    let firstEle = this.data[0];
    for(let i = 0; i < this.data.length; i++){
      arr[i] = this.data[i + 1];
    }
    this.data = arr;
    this.length--;
    return firstEle;
  }

  unshift(val) {
    if(this.length >= this.capacity) this.resize();
    let arr = new Array(this.length + 1);
    arr[0] = val;
    for (let i = 0; i < this.length; i++) {
      arr[i+1] = this.data[i]
    }
    this.length = arr.length;
    this.data = arr;
  }

  indexOf(val) {
    for(let i = 0; i < this.data.length; i++){
      if(this.data[i] === val){
        return i;
      }
    }
    return -1;
  }

  resize() {
    this.capacity *= 2
    let arr = new Array(this.capacity)
    for(let i = 0; i < this.data.length; i++){
      arr[i] = this.data[i]
    }
    this.data = arr;
  }
}


module.exports = DynamicArray;
