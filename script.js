function decimalToBinary(decimalNum) {
// write your code here
	let binaryStr = '';
	while(n > 0){
		const rem = decimalNum % 2;
		binaryStr = rem.toString() + binaryStr; 
		decimalNum = Math.floor(decimalNum/2);
	}
	return binaryStr;
}

module.exports = threeSum;
