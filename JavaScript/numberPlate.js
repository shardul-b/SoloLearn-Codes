let num="Mh 02 AC 5692";
num=num.slice(num.lastIndexOf(" ")+1,num.length)
num=sum(num);
num=sum(num.toString());
function sum(num){
num=num.split('').reduce(function(a,b){
    return parseInt(a)+parseInt(b);
});
return num;
}
console.log(num)
