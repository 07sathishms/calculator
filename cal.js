let sum =0;
let s = "";
function add(){
    value = parseInt(document.getElementById("n").value);
    s += value;
    s += "+";
   document.getElementById("sum").innerHTML = s;
   if(sum==0){
   sum += value;
   }else{
    sum += value;
   }
   console.log(sum);
}
function sub(){
    value = parseInt(document.getElementById("n").value);
    s += value;
    s += "-";
   document.getElementById("sum").innerHTML = s;
   console.log(sum);

    if(sum==0){
   sum = value;
   console.log(sum);
   }else{
    sum -= value;
    console.log(sum);
   }
    console.log(sum);
}
function mul(){
    value = parseInt(document.getElementById("n").value);
    s += value;
    s += "*";
   document.getElementById("sum").innerHTML = s;
   if(sum==0){
    sum = value;
    console.log(sum)
    }else{
     sum *= value;
    }
}
function div(){
    value = parseInt(document.getElementById("n").value);
    s += value;
    s += "/";
   document.getElementById("sum").innerHTML = s;
   if(sum==0){
    sum = value;
    console.log(sum)
    }else{
     sum /= value;
    }
}
function res(){
    value = parseInt(document.getElementById("n").value);
   
        document.getElementById("sum").innerHTML = s.substring(0,s.length-1)+""+"="+`${sum}`;
         console.log(sum)
    
    
    
}

