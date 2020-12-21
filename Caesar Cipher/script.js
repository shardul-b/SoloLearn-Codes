//Created by Shardul Birje
"use strict";

alert("What's new:\n1)I tried to code the whole thing using ES6\n2)This is my first code in strict mode\n3)Got rid of minus as suggested by BroFarOps sir\n4)Updated the UI \n5)Got rid of space..Well i know its quite wrong to do so..but until i work for a better solution..I'm publishing this\n5)Got rid of Special Characters\n6)Solved the issue of repeating string in output as suggested by Andre Daniel and marjel101");
var letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];



//for checking blank input
const check_space=(inp)=>{
    if(inp==""){
       return true;
    }
    else{
        return false;
    }
}
//For preventing space in input
const remove_space=(param)=>{
   let space=param.replace(/\s/g,""); 
   return space;
}
//For finding special characters
const remove_special=(param)=>{
    let spec=(/^[a-z A-Z]*$/);
    var check=spec.test(param);
    return check;
}
//Checking for key
const check_number=(num)=>{
    if(num>0 && num<26)
    return true;
    else
    return false;
}
//Encryption 
const encrypt=()=>{
    var encrypt_text="";
    var inp_index;
   var inp=document.getElementById("input");
    var input =inp.value.toUpperCase();
    let first=check_space(input);
   let space= remove_space(input);
    let special=remove_special(space);
    var key=parseInt(document.getElementById("key").value);
   let c=check_number(key);
    if(special && c && !first){
    for (let i of space)
    {
       inp_index=letters.indexOf(i)+key;
       if(inp_index>25)
          {
            inp_index%=26;
          }
       encrypt_text+=letters[inp_index];
    }
 document.getElementById("encrypt").innerHTML=`Encrypted Text:${encrypt_text}`;
  }  
else if(special==false){
  document.getElementById("encrypt").innerHTML="Incorrect Text";
    document.getElementById("input").value="";
}
else if(c==false)
{
    document.getElementById("encrypt").innerHTML="Incorrect Key";
    document.getElementById("key").value="";
}
else if(first==true)
{
    document.getElementById("encrypt").innerHTML="Input can't be blank";
}
}
//Decryption
const decrypt=()=>{
    var decrypt_text="";
    var inp_index;
    var inp=document.getElementById("inpdec");
    var input =inp.value.toUpperCase();
    let first=check_space(input);
    let space= remove_space(input);
    let special=remove_special(space);
    var key=parseInt(document.getElementById("keydec").value);
    let c=check_number(key);
    if(special && c && !first){
    for(let i of space)
    {
      inp_index=letters.indexOf(i)-key;
      if(inp_index<0)
      {
          inp_index=Math.abs(inp_index+26);
      }
    decrypt_text+=letters[inp_index];
      
    }
    document.getElementById("decrypt").innerHTML=`Decrypted Text: ${decrypt_text}`;
    }
    else if(special==false){
    document.getElementById("decrypt").innerHTML="Incorrect Text";
    document.getElementById("inpdec").value="";
}
else if(c==false)
{
    document.getElementById("decrypt").innerHTML="Incorrect Key";
    document.getElementById("keydec").value="";
}
else if(first==true)
{
    document.getElementById("decrypt").innerHTML="Input can't be blank";
}
}
/*
I made this when i was a bit off track while solving the string repeat bug 
//Clearing previous inputs
const clean=()=>{
    document.getElementById("encrypt").innerHTML="";
document.getElementById("input").value=""; 
 
document.getElementById("key").value=""; 

}
const clean1=()=>{
   document.getElementById("inpdec").value=""; 
document.getElementById("keydec").value="";    document.getElementById("decrypt").innerHTML=""; 
}
*/
//for information button
const info=()=>{   
document.getElementById("about").style.display="block";
}
//back button
const back=()=>{
document.getElementById("about").style.display="none";
document.getElementById("info").background="#66a6ff";
}

//Old code

//Created by $hardul Birje
/*alert("For decryption key should be same as encryption..")
var letters;
var encrypt_text=[];
var decrypt_text=[];
function encrypt()
{
    var inp_index;
    letters=new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
   var inp=document.getElementById("input");
    var input =inp.value.toUpperCase();
    var key=parseInt(document.getElementById("key").value);
    for(var i=0;i<input.length;i++)
    {
      inp_index=letters.indexOf(input[i])+key;
      if(inp_index>25)
      {
        inp_index%=26;
      }
      encrypt_text[i]=letters[inp_index];
      
    }
    var encrypted=encrypt_text.toString();
    var encrypt=encrypted.split(",").join("");
    
   document.getElementById("encrypt").innerHTML="<hr/>Encrypted Text: "+encrypt;
    
    
}
function decrypt()
{
    letters=new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
    var inp=document.getElementById("inpdec");
    var input =inp.value.toUpperCase();
    var key=parseInt(document.getElementById("keydec").value);
    for(var i=0;i<input.length;i++)
    {
      inp_index=letters.indexOf(input[i])-key;
      if(inp_index<0)
      {
          inp_index=Math.abs(inp_index+26);
      }
    decrypt_text[i]=letters[inp_index];
      
    }
    var decrypted=decrypt_text.toString();
    var decrypt=decrypted.split(",").join("");
    document.getElementById("decrypt").innerHTML="<hr/>Decrypted Text: "+decrypt;
    
}
function checknum()
{
    var k=parseInt(document.getElementById("key").value)
    var ke=document.getElementById("key");
    var dec_k=parseInt(document.getElementById("keydec").value);
    var dec_ke=document.getElementById("keydec");
    if(k>26)
    {
              
                    document.getElementById("button").disabled=true;
    ke.style.color="red";
    alert("Key should be from 1-26")
    }
    else
    {
        document.getElementById("button").disabled = false;
        ke.style.color="#000000";
    }
    if(dec_k>26)
    {
        document.getElementById("button1").disabled=true;
        dec_ke.style.color="red";
        alert("Key should be from 1-26")
    }
    else
    {
                document.getElementById("button1").disabled = false;
       dec_ke.style.color="#000000";
    }
}
function clean()
{
    document.getElementById("encrypt").innerHTML="";
    document.getElementById("decrypt").innerHTML="";
}*/