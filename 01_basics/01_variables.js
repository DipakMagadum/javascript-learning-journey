/* In JavaScript There are three ways to declare variables using const, let and, var

*/

const accountId = 13453929
console.log(accountId)

/* It is block scoped 
   can not be re-declared
   can not be updated */

  //  accountId = 8291919 // TypeError: Assignment to constant variable. not allowed 

  let accountEmail ="dipak@gmail.com"
  //console.log(accountEmail)

  /* It is block scoped
     can not be re-declared 
     but we can update it  */

     accountEmail = "xyz@gmail.com" // this is allowed 
    //  console.log(accountEmail)

     var accountPassword = 12345678
    //   console.log(accountPassword)
     
     /* It is function scoped
        we can both update and re-declared it */


        accountPassword = 87654321      // this is allowed  | value update 
        // console.log(accountPassword)  

 
        var accountPassword = 234567  // this also allowed  | variable re-declared 
        // console.log(accountPassword) 

        console.table([accountId, accountEmail, accountPassword]) /*  this will print output in tabular format*/


        /*
            Perfer not to use var 
            because of issue in block scope and functional scope
        */