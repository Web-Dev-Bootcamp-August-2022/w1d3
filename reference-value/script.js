// primitives are passed by value
// objects are passed by reference
const numbers = [1, 2, 3, 4, 5]

function double(arr) {
	// create a copy
	const copy = arr
	for (let i = 0; i < copy.length; i++) {
		copy[i] = copy[i] * 2
	}
	return copy
}

const doubled = double(numbers)
console.log('doubled: ', doubled)
console.log('original: ', numbers)

const str = 'abc'
let copy = str
copy = 'xyz'
console.log('copy: ', copy)
console.log('original: ', str)

const arr = [1, 2, 3]
// to create shallow a copy of an arr
// use : arr.slice()
// or: [...arr]

// to create a deep copy of arr 
// we use JSON.stringify and JSON.parse()
const deepCopy = JSON.parse(JSON.stringify(arr))


const copyArr = [...arr]
console.log(copyArr)
copyArr.push(4)
console.log(copyArr)
console.log(arr)

const arr3 = [2]
const arr4 = [2]
console.log(arr3 === arr4)
// we change the array (object) to a string
// before comparing it
const str3 = JSON.stringify(arr3)
const str4 = JSON.stringify(arr4)
console.log(str3 === str4)
console.log(str3)
const obj3 = JSON.parse(str3)
console.log(obj3)