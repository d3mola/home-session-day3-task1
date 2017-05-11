'use strict';


const reverseString = (str) => { 
	//var reversedString =  str.split('').reverse().join('');
	let arr = [];
	if (str === '') {
		return null;
	}else{
		for (let count = str.length-1; count >= 0; count--) {
		arr.push(str[count]);
	}
	}
	
	return arr.join('');
}
console.log(reverseString('gkgjk'))

module.exports = reverseString;