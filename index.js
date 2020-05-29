/*
Is Match
Tells you if the keys and values in properties are contained in object.
Example:
var stooge = {name: 'moe', age: 32};
isMatch(stooge, {age: 32});
=> true
*/

const isMatch = (objOne, objTwo) => {
	for (const key in objOne) {
		if (!objTwo.hasOwnProperty(key) || objOne[key] !== objTwo[key]) {
			return false;
		}
	}
	return true;
};

module.exports = isMatch;