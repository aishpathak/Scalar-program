//Given a string,return length of longest palindrome substring.
//ex:1 S = abacab
//ex2: abcde
function checkLongestSubstring(str){
    let max_lenth = 1;
    for(let i=0;i<str.length;i++){
        for(let j=i;i<str.length;j++){
            if(isPalindrome(str,i,j)){
                len = max(max_lenth,len);
            }
        }
    }
}