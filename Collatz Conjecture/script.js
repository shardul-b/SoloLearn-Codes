/*The Collatz conjecture
1. Take any natural number
2. If it's even, half it, otherwise triple it and add one
3. Repeat step 2. until you reach 4, 2, 1 sequence
4. You will ALWAYS reach 1, eventually.

Example:
x = 17

17 * 3 + 1 = 52
52 / 2 = 26
26 / 2 = 13
13 * 3 + 1 = 40
40 / 2 = 20
20 / 2 = 10
10 / 2 = 5
5 * 3 + 1 = 16
16 / 2 = 8
8 / 2 = 4
4 / 2 = 2
2 / 2 = 1
*/
'use strict'
let count=0;
const selector=value=>document.querySelector(value);
function check(){
    selector("#output").innerHTML="Output:";
    let inp=input.value;
    sequence(parseInt(inp));
}
//console.log(final)
function sequence(input){
    count++;
   // selector("#output").innerHTML+=count+" : "+input+"<br/>";
    //console.log(selector("#output"))
    if(input%2==0){
      selector("#output").innerHTML+="<br/>"+input+' \/  2 = '+Math.floor(input/2)
      input=Math.floor(input/2)
        
    }else{
        selector("#output").innerHTML+=`<br/>${input} * 3 + 1 = ${(input*3)+1}`;
        input=(input*3)+1
    }
    if(input!=1){
        sequence(input)
    }
    //input!=1?selector("#output").innerHTML+=(++count)+" : "+input:sequence(input)+'\n';
}

function remove(){
count=0;    
document.getElementById("output").innerHTML='';
}