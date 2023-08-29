function factorial (n)
{
    if(n==1)
        return 1;
    else
        return n*factorial(n);
}

console.log(factorial(3));