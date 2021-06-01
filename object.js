/*var student =
{
 fname:'longson',
 lname: 'jones',
 age:21,
 address: 'jos',
 weight: 6.5,
 fullname: function(){
     return this.fname + "" + this.lname
 }
}

console.log(`The student name is ${student.fname} and the age is ${student.age}`)

let fullname = student.fullname()
console.log(student.fullname())
console.log(Object.values(student))*/

/*var student = {
    name: {
        surname: 'longson',
        midname: 'ederson'
        lastname: 'Junior'
    },
    address: {
        no: '22',
        street: 'beverly hills',
        city: 'jos'
    },
    age: 40,
}
student.name.surname = 'femi'
console.log(student.name)*/

var students = [
    {
        id: 1,
        name: 'lee',
        age: 34
    },
    {
        id: 2,
        name: 'ferdinand',
        age: 90
    }
]


console.log(students.filter((s)=> s.id == 1))

for(let s of students){
        console.log(s.name)
    }


    for(let i=0; i < students.length; i++){
        console.log(students[i].name)
    }
    