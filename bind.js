var obj1={
    n1:10
}
function fnsum(n2,n3){
    var res=this.n1+n2+n3
    console.log(res)
}
//fnsum.bind(obj1,10,10)()
//var fn=fnsum.bind(obj1,2,3)
//fn()
fnsum.bind(obj1)(10,10)
