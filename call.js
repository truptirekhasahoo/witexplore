var obj1={
    n1:10
}
var obj2={
    n1:100
}
var obj3={
    n1:1000
}
function fnsum(n2,n3){
    var result=this.n1+n2+n3
    console.log(result)
}
fnsum.call (obj1,2,3)