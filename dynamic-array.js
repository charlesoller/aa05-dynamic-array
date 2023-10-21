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

    // Your code here
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
