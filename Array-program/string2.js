/*
Given a character ch[],which contains only lower case alphabet. Sort given ch[] in alphabet order.
s=dabacdb
s=aabcd 
*/

// function sortCharacter(s){
//     let a = [];
//     let b="";
//     for(let i=0;i<s.length;i++){
//     if(s[i]>='a' && s[i]<='z'){
//         a.push(s.charCodeAt(i));
//     }
//     }
//     a.sort(function(a,b){return a-b;})
//     for(let i=0;i<a.length;i++){
//        b += String.fromCharCode(a[i])//97
//     }
//     return b;
// }
// console.log(sortCharacter("dabacdb"));















function sortCharacter(s){
    let a = Array(26).fill(0);
    let count = 0;
    let b = {};
    let c = "";
    for(let i=0;i<s.length;i++){
        index = (s.charCodeAt(i)-97); //3
        a[index]++;
    }
    for(let c='a';c<='z';c++){
        index = (c.charCodeAt(c)-97); //3
        let count = a[index];
        for(let j=0;j<count;j++){
            c +=c
        }
    }
    return c;
}
console.log(sortCharacter("dabacdb"));



//97,98,99,100
//{'a':2,}
// b[s[i]] = count 