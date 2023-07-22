let sum =0;
let s = "";
function add(){
    value = parseInt(document.getElementById("n").value);
    s += value;
    s += "+";
   document.getElementById("sum").innerHTML = s;
   if(sum.length==0){
   sum = value;
   }else{
    sum += value;
   }
}
function sub(){
    value = parseInt(document.getElementById("n").value);
    s += value;
    s += "-";
   document.getElementById("sum").innerHTML = s;
   console.log(sum);

     if(sum.length==0){
   sum = value;
   console.log(sum)
   }else{
    sum += value;
   }
    console.log(sum);
}
function mul(){
    value = parseInt(document.getElementById("n").value);
    s += value;
    s += "*";
   document.getElementById("sum").innerHTML = s;
   if(sum.length==0){
    sum = value;
    console.log(sum)
    }else{
     sum += value;
    }
}
function div(){
    value = parseInt(document.getElementById("n").value);
    s += value;
    s += "/";
   document.getElementById("sum").innerHTML = s;
   if(sum.length==0){
    sum = value;
    console.log(sum)
    }else{
     sum += value;
    }
}
function res(){
    value = parseInt(document.getElementById("n").value);
    if(s.charAt(s.length-1)=="+"){
        sum += value;
    }
     if(s.charAt(s.length-1)=="-"){
        sum = sum-value;
    }
     if(s.charAt(s.length-1)=='*'){
        sum *= value;
    }else{
        sum /=value;
    }
    s += value;
    document.getElementById("sum").innerHTML = s+""+"="+sum;
    
}

