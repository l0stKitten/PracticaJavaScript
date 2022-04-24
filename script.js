// EJERCICIO 1
function square(x){
  return (x*x);  
}

function double(x){
  return (x*2);
}

function composedValue (fx, gx,x){
  return fx(gx(x));
}
console.log("EJERCICIO1: ")
console.log(composedValue(square,double,3));


// EJERCICIO 2
function compose(f1,f2){
  return R.compose(f1,f2);
}

var f3 = compose(square,double);
var f4 = compose(double,square);
console.log("\nEJERCICIO2: ")
console.log("f3(5):", f3(5)); // 100
console.log("f4(5):", f4(5)); // 50
console.log("f3(10):", f3(10)); //400
console.log("f4(10)", f4(10)); //200

//EJERCICIO 3 
function isEven ( num ) { return ( num%2 == 0) ; }
  function find ( arr , f ){
    const a = [];
    for (var i = 0; i < arr.length; i++){
    if (f(arr[i]) == true){
      a.push(arr[i])
    }
  }
  return a;
}
console.log("\nEjercicio 3: ")
console.log("isEven 3 :", isEven (3)) // false
console.log("isEven 4 :", isEven (4)) // true
result = find ([1 , 3, 5, 4, 2] , isEven );
console.log ("find result :", result ); // [4 , 2]


//EJERCICIO 4
// VERSIÓN 1
function mymap (arr , f){
  return arr.map(f)
}
result1 = mymap ([1 , 2 , 3 , 4, 5] , square );
result2 = mymap ([1 , 4 , 9 , 16 , 25] , Math . sqrt );
console.log("\nEjercicio 4.v1: ")
console .log (" result1 :", result1 ); // [1 , 4, 9, 16 , 25]
console .log (" result2 :", result2 ); // [1 , 2, 3, 4, 5]

// VERSIÓN 2

function mymapS (arr , f){
  const b = [];
  for(var i = 0; i < arr.length; i++){
    b.push(f(arr[i]))
  }
  return b
}
result1 = mymapS ([1 , 2 , 3 , 4, 5] , square );
result2 = mymapS ([1 , 4 , 9 , 16 , 25] , Math.sqrt );
console.log("\nEjercicio 4.v2: ")
console.log (" result1 :", result1 ); // [1 , 4, 9, 16 , 25]
console.log (" result2 :", result2 ); // [1 , 2, 3, 4, 5]

// EJERCICIO 5 
function isEven(num){
  return (num>>1<<1 == num);
}

function isOdd(num){
  return (num>>1<<1 != num);
}
function find(arr, fx){
  let rp = [];
  if (! arr.length){
    return rp;
  }
  
  if ( fx(arr[0]) ){
    rp = rp.concat( [arr[0]] );
  }
  return rp.concat(find(arr.slice(1), fx));
}

let b = [2,4,6];
let a = [3,5,7];
let c = a.concat(b);
c.sort((a,b)=>a-b);//Ordena el arreglo de forma numérica
a = a.concat( b[1] );
console.log("\nEjercicio 5")
console.log(c);
console.log( find(c, isEven));
console.log( find(c, isOdd));
console.log()



//EJERCICIO 6 
function square(num){
  return num*num;
}

function mymap(arr, fx){
  let rp = [];
  if (! arr.length){
    return rp;
  }
  rp = rp.concat( [fx(arr[0])] );
  
  return rp.concat(mymap(arr.slice(1), fx));
}


c.sort((a,b)=>a-b);//Ordena el arreglo de forma numérica
console.log("Ejercicio 6")
console.log(c);
console.log( mymap(c, square));
console.log( mymap(c, Math.sqrt));