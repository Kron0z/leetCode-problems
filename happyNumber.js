var isHappy = function(n) {
    let split = n.toString().split('').reduce((total,current) => {
        current = Number(current)
        current = current * current
        total = Number(total)
        return  total + current 


    }, 0)
    let counter = 0
    while (split !== 1 && counter !== 100){
        split = split.toString().split('').reduce((total,current) => {
            current = Number(current)
            current = current * current
            return  total + current 
    
    
        }, 0)
        counter ++
    }
    return split === 1
};

console.log(isHappy(2))