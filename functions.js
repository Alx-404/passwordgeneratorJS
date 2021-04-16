lc="abcdefghijklmnopqrstuvwyz"
uc="ABCDEFGHIJKLMNOPQRSTUVWYZ"
di="1234567890"
sp="!@#$%&*ç{}[]/"

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function copyPassword(){
    navigator.clipboard.writeText(document.getElementById("passwordprint").value);
}

function generatePassword(){
    selectedChars=""
    selectedFeatures= []

    var length = document.getElementById("length").value

    var chkDigitis = document.getElementById("digitis").checked
    var chkUppercase = document.getElementById("uppercase").checked
    var chkLowercase = document.getElementById("lowercase").checked
    var chkSpecialChars = document.getElementById("specialchars").checked
    
    
    if(chkDigitis){
        selectedChars+=di
        selectedFeatures.push(di)
    }
    
    if(chkUppercase){
        selectedChars+=uc
        selectedFeatures.push(uc)
    }
    
    if(chkLowercase){
        selectedChars+=lc
        selectedFeatures.push(lc)
    }
    
    if(chkSpecialChars){
        selectedChars+=sp
        selectedFeatures.push(sp)
    }

    numberOfSelectedFeatures = selectedFeatures.length
    chkForSelectedFeatures = numberOfSelectedFeatures > 0

    if (chkForSelectedFeatures) {
    
        password=""
        for (var i=1;i<=length;i++){
            char=selectedChars[getRandomInt(0,selectedChars.length)]
            password+=char
        }

        document.getElementById("passwordprint").value=password

    }
}
            