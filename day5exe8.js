function maxOfThree(a , b ,c){
    let max =a
    if(a<b){
     max = b;
    }
    if(b<c){
     max = c
    }
  return max ;
}
console.log(maxOfThree(10 , 19 ,20))