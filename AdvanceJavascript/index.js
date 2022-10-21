// const obj1 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         let roll_no = [1,2,3,4,5]
//         resolve(roll_no)
//     },2000)
// })

// const gbd = (indexData) =>{
//     return new Promise((resolve, reject) =>{
//         setTimeout((indexData) =>{
//             let b = {
//                 name: 'A',
//                 age: 18
//             }
//             resolve(`rollno: ${indexData}, name: ${b.name}, age: ${b.age}`)
//         },2000, indexData )
//     } )
// }


// async function gd(){
//     try{
//         const rollnoData = await obj1
//         console.log(rollnoData)

//         const gBd = await gbd(rollnoData[1])
//         console.log(gBdfwefd)

//         return gBd
//     }catch(error){
//         console.log(`Error is :${error}`)
//         // alert(`Error is :${error}`)
//     }
    
// }

// //while returning gBd
// const getName = gd().then((myName) =>{
//     console.log(myName)
// })


// //if not returning gBd
// // gd()

const a = [10,20,30,40,50]

a.forEach(function(val, ind, arr){
    console.log(arr[ind]+100)
})