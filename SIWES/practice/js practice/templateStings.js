// template strings/literals

const recipient = "James"
const sender = "Per Harald Borgon"
// Refactor the email string to use template strings
const email = `
   Hey ${recipient} !
   How is it going ?
   Cheers ${sender}
`
console.log(email)