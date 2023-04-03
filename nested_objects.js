const person = {
    name: "Mithun",
    age: "21",
    address: {
        street : "BB, Block B, Industrial Area.",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh",
    },
};

// 1 method

// function receiveObject(person){
//     const {name} = person
//     const {address} = person
//     const{street} = address
//     return {name , street}
// }
// console.log(receiveObject(person))



// *****************************************************
// 2 method

function receiveObject({name , address:{street}}){
   return {name , street}
}
console.log(receiveObject(person))