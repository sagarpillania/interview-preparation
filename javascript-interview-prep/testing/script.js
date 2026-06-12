function sum(a,b){
    return a+b;
}

// console.log(sum(3,4));


function captializeChar(str){
    if(!str) return "";
    return str.charAt(0).toUpperCase()+str.slice(1);
}

// console.log(captializeChar("delhi"));

function reverseString(str){
    if(!str) return "";
    return str.split('').reverse().join('');
}


module.exports={sum,captializeChar,reverseString};