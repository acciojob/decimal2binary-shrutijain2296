function decimalToBinary(decimalNum) {
// write your code here
	let binaryStr = '';
	while(decimalNum > 0){
		const rem = decimalNum % 2;
		binaryStr = rem.toString() + binaryStr; 
		decimalNum = Math.floor(decimalNum/2);
	}
	return binaryStr;
}
module.exports = decimalToBinary;
// module.exports = threeSum;
