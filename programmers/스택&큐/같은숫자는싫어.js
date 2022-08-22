function solution(arr)
{
    var answer=[]

    var tmp=-1
    for(var i of arr){
        if (tmp != i){
            tmp=i
            answer.push(i)
        }
    }


    return answer;
}