function solution(nums) {
    let n=nums.length/2

    let set = new Set(nums)
    if (set.size<n){
        return set.size;
    }
    else{
        return n;
    }

}