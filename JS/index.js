// var myObject= {key1:"a", key2:true, key3:5}
// var object_as_string = JSON.stringify(myObject)

// console.log(object_as_string)
// console.log(typeof(object_as_string))

// var object_as_string_as_object = JSON.parse(object_as_string)
// console.log(object_as_string_as_object)
// console.log(typeof(object_as_string_as_object))
const bioData={
    myName : 'ayan',
    myLname: 'chowdhury',
    myAge : 18
}
let{myname, mylname, myage, degree='btech'} = bioData      
// console.log(myage)

const d = new Date()
console.log(d.toLocaleDateString())

const colors = ['red', 'green', 'blue', 'white']
const a = colors.includes('red')
console.log(a)

