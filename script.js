function isSameType(value1, value2) {
   if(typeof(value1)===typeof(value2)) return true;
   if(value1==NaN && value2==NaN) return true;
	return false;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
