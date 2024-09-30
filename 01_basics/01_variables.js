const accountId = 18201200
let accountEmail = "tarikul@gmail.com"
var accountPassword = "18201256523"
accountCity = "Kolkata"
let accountState; // It's execute undefined

// accountId = 5689456 // not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "tarikulji@gmail.com"
accountPassword = "89462536654"
accountCity = "Murshidabad"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

