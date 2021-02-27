const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


 readline.question('Please enter value for N : ',  (n  ) => {
	n =Number(n)
	if(  !Number.isFinite(n) || n < 0)
	console.log('Please enter positive number');
	else		
    GenrateFibonacciSequence(n);
	 readline.close();
 });



 
function GenrateFibonacciSequence(n)
{
let fibbonachi =[];
let nextValue;
	
	for(var i= 0 ; i<n ; i++)
	{
		if(i<2)
		{
			nextValue = i
		}
		else
		{
			nextValue = fibbonachi[i-2] + fibbonachi[i-1] 
		}
		fibbonachi.push(nextValue);    
	}
	console.log( 'Fibonacci Sequence :' fibbonachi.toString());
}