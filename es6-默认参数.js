 function indexof(arr,ele,starti=0){
      //if(starti===undefined){
       // starti=0;
      //}
      for(var i=starti;i<arr.length;i++){
        if(ele==arr[i]){
          return i;
        }else{
          return -1;
        }
      }
    }
    var arr=[1,34,65,45,3,5];
    console.log(indexof(arr,3));
