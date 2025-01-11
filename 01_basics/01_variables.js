const accountId = 1
let accountEmail = "Akash@gmail.com"
var accountPassword = "123"
accountCity = "Amravati"
let accountState 

// accountId = 2 // Not Allowed

accountEmail = "Shubham@gmail.com"
accountPassword = "456"
accountCity = "Nagpur"

console.log(accountId);

console.table([accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to user var
because of issue in block scope and functional scope 
*/

// *const* is use only for fix value 
// for other variable like that varaible value is changeable use *Let* keyword