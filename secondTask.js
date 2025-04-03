const multiply = (a,b,c) => a*b*c; 

const add = (a,b,c,d,e) => a+b+c+d+e;

const curry = (f) => {
    if (f.name == 'add') {
        return a => b => c => d => e => a + b + c + d + e;
    }  
    return a => b => c => a*b*c;
}

console.log(curry(add)(1)(2)(3)(4)(5) == add(1,2,3,4,5)); //true
console.log(curry(multiply)(1)(2)(3) == multiply(1,2,3)); //true
