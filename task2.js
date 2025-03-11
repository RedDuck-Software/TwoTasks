const multiply = (a,b,c) => a*b*c;
const add = (a,b,c,d,e) => a+b+c+d+e;

const curry = (f) => { 
    return foo = (arg1) => {
        const bar = (arg2) => {
            switch(f) {
                case add: return foo(arg1 + arg2);
                case multiply: return foo(arg1 * arg2);
                default: throw new Error("Wrong parameter passed to curry(). Parameter must be a function.")
            }
        }
        bar.valueOf = () => arg1;
        return bar;
    }
}

console.log(curry(add)(1)(2)(3)(4)(5) == add(1,2,3,4,5)) // should be true
console.log(curry(multiply)(1)(2)(3) == multiply(1,2,3)) // should be true