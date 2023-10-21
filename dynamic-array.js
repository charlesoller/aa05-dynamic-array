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

    // Your code here
  }

  unshift(val) {
    let arr = new Array(this.length+1);
    arr[0] = val;
    for (let i = 0; i < this.length; i++) {
      arr[i+1] = this.data[i]
    }
    this.length = arr.length;
    this.data = arr;
  }

  indexOf(val) {

    // Your code here
  }

  resize() {

    // Your code here
  }

}


module.exports = DynamicArray;
