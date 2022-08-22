function solution(s){

    var list=[];
    var sl=Array.from(s);
    var n =sl.length
    if(n%2!=0){
        return false;
    }
    for(var i=0;i<n;i++){
        var tmp=sl[i]

        if(tmp==='('){
            list.push(tmp)
        }
        else{
            if(list.length === 0){
                return false;
            }
            list.pop()
        }

    }

    if(list.length===0){
        return true
    }
    else{
        return false
    }

}


// function solution(s){
//     let cum = 0
//     for (let paren of s) {
//         cum += paren === '('? 1: -1
//         if(cum < 0) {
//             return false
//         }
//     }
//     return cum === 0? true: false;
// }