const accountId = 1345
let accountEmailId="ggg@gmail.com"
let accountPassword = "123"
let accountState

/* prefer not to use var
 becos of issue in block scope and functional scope 
 */

console.table([accountId ,accountEmailId,accountState,accountPassword])

accountEmailId="haha@gmail.com"
accountPassword = "12378"
console.table([accountId ,accountEmailId,accountState,accountPassword])