export {}
let name = 'Adrian';
//tsc ./Test/basic.ts 
console.log(`Hi ${name}`)


let a = 10;
a = 20

let x = 10

let num1: number = 100
let myName: string = 'Adrian'

let learningTypeScript: boolean = true

let y;
console.log(y)

// arrays
let list1: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]

console.log(list1[1])

// tuple
let tuple1: [number, string]

tuple1 = [10, 'Hello']
//this is not allowed
//tuple1 = ['hello', 10]
console.log(tuple1[1].substring(1))

// Enum
enum Color {red=4, black=10, blue=12}
/* let c: Color = Color.black
console.log(c) */
let colorName : string = Color[10]

console.log(colorName)

// any
let anyVal: any
anyVal = 10
anyVal = 'Hello'
anyVal = true

// functions
function hello() {
    console.log('This is for testing')
}

hello()

function sum(num1:number, num2:number=10): number {
    //if (num2)
    return num1+num2
    //else
        //return num1
}

console.log(sum(3))

// interface

interface employee {
    firstName: string,
    lastName: string,
    ID: number
}

function getEmployeeDetails(empDetails: employee) {

    console.log(empDetails.firstName)
    console.log(empDetails.lastName)
    console.log(empDetails.ID)
}

getEmployeeDetails({
    firstName: 'Adrian',
    lastName: 'Rojas',
    ID: 1941
})

// Classes

class Employee{
    public employeeName: string

    constructor(name: string){
        this.employeeName = name
    }

    hello(){
        console.log(`Hello ${this.employeeName}`)
    }

}

let emp1 = new Employee('Adrian')

console.log(emp1.employeeName)
console.log(emp1.hello())


class Manager extends Employee{
    constructor(name: string) {
        super(name)
    }

    greet(){
        console.log(`Hello from manager ${this.employeeName}`)
    }

}

let manager1 = new Manager('John')
console.log(manager1.employeeName)
manager1.hello()
manager1.greet()