function solution(progresses, speeds) {
    var queue=[]
    var time=0
    for(var i=0;i<progresses.length ; i++){
        var tmp=100-progresses[i]
        tmp=Math.ceil(tmp/speeds[i])

        console.log(tmp)

        if(tmp>time){
            time=tmp
            queue.push(1)
        }
        else{
            queue[queue.length-1]+=1
        }
    }

    return queue
}