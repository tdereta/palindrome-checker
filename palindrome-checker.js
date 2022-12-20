function removeNonAlphaChar(str) {
    return str.replace(/[\W_]/g, "").toUpperCase()
}

function flipTheWord(str) {
    const flip = removeNonAlphaChar(str)
    return flip.split('').reverse().join('').toUpperCase()
}

function palindrome(str) {
    if (removeNonAlphaChar(str) === flipTheWord(str)) {
        return true
    } else {
        return false
    }
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));