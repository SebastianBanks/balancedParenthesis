function balancedParanthesis(string) {
    let rightP = 0
    let leftP = 0

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "(") {
            leftP += 1
        } else if (string[i] === ")") {
            rightP += 1
        } else {
            continue
        }
    }

    if (rightP === leftP) {
        return true
    } else {
        return false
    }
}

console.log(balancedParanthesis("()"))
console.log(balancedParanthesis("(Oh Noes!)("))
console.log(balancedParanthesis("((There's a bonus open paren here.)"))
console.log(balancedParanthesis(")"))
console.log(balancedParanthesis("("))
console.log(balancedParanthesis("(This has (too many closes.) ) )"))
console.log(balancedParanthesis("Hey...there are no parens here!"))