// Given a string Return true if it is a palindrome or not
//abba -> true
//malyalam-> true

function palindrome(str){
    str = [...str];
    let i=0;
    let j=str.length-1;
    while(i<j){
        if(str[i] != str[j-i]){
            return false;
        }
        i++;
        j--;
    }
        return true;
    }

    console.log(palindrome("abbaas"));