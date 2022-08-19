function solution(clothes) {
    let dic={}
    for(let a of clothes){
        if(a[1] in dic){
            dic[a[1]]+=1
        }
        else{
            dic[a[1]]=2
        }
    }

    let answer=1

    for(var key in dic){
        answer*=dic[key]
    }
    return answer-1
}