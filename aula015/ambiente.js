let num = [5,8,2,9,3];
console.log(num);
num.push(7);
console.log(num);
console.log(num.length)
console.log(num.sort());

for(let i = 0; i<num.length; i++)
    console.log(num[i]);

for(let n in num)
    console.log(num[n])