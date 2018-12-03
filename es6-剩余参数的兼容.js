function calc(sname){  
  //用数组的slice方法赋值一个数组,当传入一个参数是，默认从这个参数到最后
  var arr=Array.prototype.slice.call(arguments,1);
  arr.reduce(function(prev,elem){
     return pre+elem;
    },0)
}
cacl('lili',100,34,45,54);
