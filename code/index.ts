function sum(a:number , b:number):number{
    return a+b;
}
// default parameter & optional parameter
const greet = (name:String="John" , id?:number)=>{
    return `Welcom ${name} , ${id}`
};

console.log(greet());

console.log(sum(5 , 10));

const numbers:number[] = [1 , 2 , 3 , 5]
