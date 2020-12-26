var a=[];
var e=[];
function buttonsub(){
    for(var b = 1; b<=4; b++){
        var a1 = document.getElementById("st"+b).value;
        console.log(a1);
a.push(a1);
    };
    console.log(a);
var c = a.length;
console.log(c);
for(d = 0; d<c; d++){
  e.push("<h4>Name is: "+a[d]+"</h4>");
  console.log(e)  ;
}
    document.getElementById("empty").innerHTML=e;
var f = e.join(" ");
console.log(f);
document.getElementById("nocomma").innerHTML=f;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}
function buttons(){
    a.sort();
var e1 =[];
    console.log(a);
    var j = a.length;
console.log(j);
for(g = 0; g<j; g++){
  e1.push("<h4>Name is: "+a[g]+"</h4>");
  console.log(e1)  ;
}
    document.getElementById("empty").innerHTML=e1;
var e2 = e1.join(" ");
console.log(e2);
document.getElementById("nocomma").innerHTML=e2;
    document.getElementById("empty").innerHTML=a;
}