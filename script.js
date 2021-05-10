// var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
// var numbers = [0,1,2,3,4,5,6,7,8,9]
// var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', ':', ';', '"', "'", '|', '<' ,'>', ',', '.', '?', '/', '~', '`']
var lowercaseVar = 'abcdefghijklmnopqrstuvwxyz'
var uppercaseVar = lowercaseVar.toUpperCase()
var numberVar = '0123456789'
var symbolVar = '~`! @#$%^&*()_-+={[}]|\:;"\'<,>.?/'
var submit = document.getElementsByTagName('button')
var displayPass = document.getElementById('display-pass')


function choice(){
    var choiceVar = ''
    var lowercase = document.getElementById('lower-case')
    var uppercase = document.getElementById('upper-case')
    var num = document.getElementById('num')
    var sym = document.getElementById('sym')

    console.log('check',lowercase.checked, uppercase.checked, num.checked, sym.checked)
    if (lowercase.checked) choiceVar = choiceVar + lowercaseVar
    if (uppercase.checked) choiceVar = choiceVar + uppercaseVar
    if (num.checked) choiceVar = choiceVar + numberVar
    if (sym.checked) choiceVar = choiceVar + symbolVar
    return(choiceVar)

}

function generatePassword(){
    var password = []
    var length = document.getElementById('length')

    charl=choice().length
    console.log('charl',charl)

    for (i=0; i<length.value; i++){
        lowerS=(lowercaseVar.charAt(Math.floor(Math.random())))
        upperS=(choice().charAt(Math.floor(Math.random() * charl)))
        console.log('each',upperS)
        password.push(upperS)
        
    }
    password = password.join('')
    displayPass.value = password   
 
}

function copyText(){
    var copy = document.getElementById('copy')
    displayPass.select()
    document.execCommand("copy")
    copy.innerHTML='Copied "'+displayPass.value+'"'
}


