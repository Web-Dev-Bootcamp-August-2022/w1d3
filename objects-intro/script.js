// console.log('hello objects 👋')
// objects - unordered collections of any keyed values

const emptyObj = {}

// key: value
const dog = {
	name: 'Rufus',
	age: 4,
	hobbies: ['eating', 'running'],
	address: {
		street: 'Friedrichstr.',
		city: 'Berlin'
	}
}
// accessing values
// dot notation
// console.log(dog.age)
// accessing nested values
// access an array
// console.log(dog.hobbies[0])
// access a nested object
// console.log(dog.address.city)

// accessing a key using a variable


// const input = prompt('which property of the dog do you want to know?')
// if 'key' is a variable we have to use the bracket notation
// console.log(dog[input])


// change values
dog.age = 5
// add key value pairs / properties
dog.weight = 20
// console.log(dog)

// deleting property in an object
delete dog.age
// console.log(dog)

// checking if a key exists
// console.log(dog.length)
// if (dog.name !== undefined) {
// 	console.log('this key exists')
// }
// check if the key name exists
// <name of the key as a string> in <name of the object>
// if ('name' in dog) {
// 	console.log('the key name exists')
// }

// looping over objects

const person = {
	name: 'Alice',
	age: 33
}

// for in loop
for (let x in person) {
	// console.log(person[x])
}

const keys = Object.keys(person)
// this returns an array containing all the keys of person
console.log(keys)

// now we can use 'for of' to iterate over the array 'keys'
for (let key of keys) {
	console.log(person[key])
}

const values = Object.values(person)
// this returns an array containing all the values of person
console.log(values)

const entries = Object.entries(person)
// this returns an array containing arrays with the key value pairs
console.log(entries)

const persons = [
	{
		name: 'Alice',
		age: 33
	},
	{
		name: 'Bob',
		age: 29
	}
]
// iterate over persons and log every name
// we can use for of to iterate over the array
for (let person of persons) {
	console.log(person.name)
}

// having spaces in a key
const user = {
	'user name': 'marco'
}
// access this key - we have to use the brackets
console.log(user['user name'])

