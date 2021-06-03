var information={
    name:"sagar",
    phone:"9999",
    email:"truptirekha@gmail.com"
}
function fn(){
    
     //console.log(information);
     information.city="bangalore",
     console.log(information);
     information.phone='888888',
     delete information.city;
     console.log(information);

}
fn()
