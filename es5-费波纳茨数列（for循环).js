function fn(n){
if(n<3){
   return 1;
  }else{
    var f1=1,f2=1,fn;
    for(var i=3;i<=n;i++){
       fn=f1+f2;
       f1=f2;
       f2=fn;
     }
     return fs;
   }
}
fn(100);
