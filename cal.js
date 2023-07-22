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
    if(s.charAt(s.length-1)=='+'){
        sum += value;
        s += value;
        document.getElementById("sum").innerHTML = s+""+"="+`${sum}`;
         console.log(sum)
    }
     if(s.charAt(s.length-1)=='-'){
        console.log(sum)
        sum = sum-value;
        s += value;
       document.getElementById("sum").innerHTML = s+""+"="+`${sum}`;
        console.log(sum)
    }
     if(s.charAt(s.length-1)=='*'){
        sum *= value;
        s += value;
        document.getElementById("sum").innerHTML = s+""+"="+`${sum}`;
         console.log(sum)
    }else{
        sum /=value;
        s += value;
        document.getElementById("sum").innerHTML = s+""+"="+`${sum}`;
         console.log(sum)
    }
    
    
}

