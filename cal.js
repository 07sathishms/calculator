let sum =0;
let s = "";
function add(){
    value = parseInt(document.getElementById("n").value);
    s += value;
    s += "+";
    
   document.getElementById("sum").innerHTML = s;
   sum += value;
}
function sub(){
    value = parseInt(document.getElementById("n").value);
    s += value;
    s += "-";
   document.getElementById("sum").innerHTML = s;
    sum -= value;
}
function mul(){
    value = parseInt(document.getElementById("n").value);
    s += value;
    s += "*";
   document.getElementById("sum").innerHTML = s;
    sum *= value;
}
function div(){
    value = parseInt(document.getElementById("n").value);
    s += value;
    s += "/";
   document.getElementById("sum").innerHTML = s;
    sum /= value;
}
function res(){
    value = parseInt(document.getElementById("n").value);
    if(s.charAt(s.length-1)=='+'){
        sum += value;
    }else if(s.charAt(s.length-1)=='-'){
        sum -= value;
    }
    else if(s.charAt(s.length-1)=='*'){
        sum *= value;
    }else{
        sum /=value;
    }
    s += value;
    document.getElementById("sum").innerHTML = s+""+"="+sum;
    
}

