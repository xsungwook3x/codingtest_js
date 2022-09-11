function solution(numbers) {
    var newL=[]
    for(var a of numbers){
        var tmp=`${a}`.repeat(3);

        newL.push(tmp)
    }
    newL.sort()
    newL.reverse()
  
    var answer = '';
    for(var a of newL){
        var l =parseInt(a.length/3);
        answer+=a.slice(0,l)
    }
    
    if(answer[0]==='0'){
        return '0'
    }
    return answer;
}