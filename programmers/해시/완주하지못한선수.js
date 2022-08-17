function solution(participant, completion) {
    let dic={}
    for(var p of participant) {
        dic[p]=0
    }
    for(var p of participant) {
        dic[p]+=1
    }

    for(var c of completion) {
        dic[c]-=1
    }

    for(var p of participant){
        if (dic[p]!=0){
            return p
        }
    }

}