const array = [1 , 2.3 , 'hello' , true]
array.push(100)
array.pop()
const newarray = array.slice(1, )
console.log(newarray)

const numbers = [10, 20, 30, 40, 50, 60]


const changenumbers = numbers.map(function (item){return item/2})
console.log(changenumbers)

const ages = [25, 30, 45, 60, 75]
const newages = ages.map(function(item){return item*2}) 

const newestages = newages.reduce((prev, next)=> {
    return prev + next
})
console.log(newages)
console.log(newestages)