function fnArray(){
    //var studentInformation=["sagar","zoya","sneha","sameer"]
   // console.log(studentInformation)
   // studentInformation.push("trupti")
    //console.log(studentInformation)
   // studentInformation.pop("sameer")
    //console.log(studentInformation)
    //studentInformation.unshift("lalit")
    //studentInformation.length("lalit")
   // console.log(studentInformation.length)
   var number=[23,45,67,12,2,5,09,99,100,56]
   var number1=number.filter((data,index)=>{
       return data>50
   })
   console.log(number1)
}
fnArray()