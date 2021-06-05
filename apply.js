var obj1={
    n1:10
}
var obj2={
    n1:12
}
var obj3={
    n1:16
}
function fnsum(n2,n3){
    console.log(this.n1+n2+n3)
}
fnsum.apply(obj3,[10,10])