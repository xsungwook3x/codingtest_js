function solution(array, commands) {
    var answer = [];
    commands.forEach(e => {

        var tmp=array.slice((e[0]-1),e[1])
        tmp.sort((a,b)=>(a - b))
        answer.push(tmp[e[2]-1])
        console.log(tmp)
    })
    
    return answer;
    
}