function decimalToBinary(n) {
// write your code here
	let ans = '';
	while(n > 0){
		const rem = n%2;
		ans = rem + ans;
		n = Math.floor(n/2);
	}
	return ans;
}

module.exports = threeSum;
