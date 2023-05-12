// Given a String S. Toggle the case of every character 
// if uppercase convert to lower case if it is lower case convert to uper case.
// S = abcDe , o/p: ABCdE`
function changeCharcter(s){
    let output = "";
    for(let i=0;i<s.length;i++){
        if(s[i]>='a' && s[i]<='z'){
        output += String.fromCharCode(s.charCodeAt(i)-32);
        }
        else{
            if(s[i]>='A' && s[i]<='Z'){
                output += String.fromCharCode(s.charCodeAt(i)+32);
                }
        }
    }
    return output;
    }
    console.log(changeCharcter("aiSh"));