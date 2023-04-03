let myArray = [1,2,3,4,3,2]

function removeDuplicate(data){
    return [...new Set(data)]
}


console.log(removeDuplicate(myArray));
