// Q no-1

var a = 10
var b = 20
var c = 30

var sum = (a+b+c)
console.log(sum)
  

// Q no-2

// legal variables

var name = "Shoukat "
var lastName = "Hassan"
var $age = "29"
var _profession = "web and mobile app developer"
var contact = "0323 3233432"

var legal_variables = (name+lastName+$age+_profession+contact)
console.log(legal_variables)


// illegal variables

// var full name = (space is illegal in variables names)
// var #id = ( special characters are illegal for creating variables except $ 0r _ )
// var 4number =(you can't start variables names with numbers but you can use numbers between variables names)
// var last-name = (illegal)
// var 32bit = illegal


// Q no-3

var a ="Variable names can only contain numbers, Alphabet,$ and _";
var b = "Variables must begin with a $, _ or Alphabet.";
var c = " Variable names are case sensitive.";
var d = "Variable names should not be JS keywords"

var display = (a+b+c+d)
document.write(display)
