console.log("Hello TypeScript"); 

#Variable:
----------------
// TYPE: 	number, string, boolean, void, null, undefined
let variableName:data_type = value;
let variableName:data_type;
let variableName = value; //will be set to ANY by default.
let variableName; // Variable’s type will be set to ANY and value will be set to undefined by default.

# Function:
---------------
function  function_name() { 
   // function body 
}
function function_name():return_type { 
   //block of statements 
   return value; 
}

function paramTest(rollNo:number,name:string) { 
   console.log(rollNo);
   console.log(name);
} 

// Optional parameter = param?:datatype
function dispDetails(fname:string, lname?:string) {  }

// Rest parameters
function showNames(...names:string[]) {    
   for(var i = 0;i<names.length;i++) { 
      console.log(names[i]);
   } 
} 
showNames("Rajeev","Gunjan","Vikram","Asmita"); 

// Default parameter
function displayDetails(name:string,sport:string = "Cricket") {  }

// Anonymous function
var sayHello = function(name:string) { 
   return "Hello "+name;  
} 

// Arrow Function
var calculateSquare = (num:number)=> {    
   num = num * num; 
   console.log(num); 
}
// Union Type
function unionTest(value:string|number):void{
  console.log(value); 
}

/*
Property -- Description
MAX_VALUE -- It specify the largest possible value.
MIN_VALUE -- It specify the smallest possible value.
NaN	-- Equal to a value that is not a number.
NEGATIVE_INFINITY -- A value that is less than MIN_VALUE.
POSITIVE_INFINITY -- A value that is greater than MAX_VALUE

Methods = Description
toExponential(fractionDigits) = It returns a string representing the number object in exponential notation.
toFixed(digits) = It limits the number of digits after decimal value.
toPrecision(digits) = It formats the number with given number of digits.
toString() = It converts number into string.
valueOf() = It converts other type of value into number.

*/

# TypeScript string object:
------------------------------
var str1:string = “value”;

function stringTest(str:string):void{
  console.log(str); 
}
var str:string = "Sahdev";
stringTest(str);

/*
charAt()	-- It returns the character at the specified index.
charCodeAt()	-- It returns a number indicating the Unicode value of the character at the given index.
concat()	-- It combines the text of two strings and returns a new string.
indexOf()	-- It returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.
lastIndexOf()	-- It returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.
localeCompare()	-- It returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
match()	-- It is used to match a regular expression against a string.
replace()	-- It is used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.
search()	-- It executes the search for a match between a regular expression and a specified string.
slice()	-- It extracts a section of a string and returns a new string.
split()	-- It splits a String object into an array of strings by separating the string into substrings.
substr()	-- It returns the characters in a string beginning at the specified location through the specified number of characters.
substring()	-- It returns the characters in a string between two indexes into the string.
toLocaleLowerCase()	-- The characters within a string are converted to lower case while respecting the current locale.
toLocaleUpperCase()	-- The characters within a string are converted to upper case while respecting the current locale.
toLowerCase()	-- It returns the calling string value converted to lower case.
toString()	-- It returns a string representing the specified object.
toUpperCase()	-- It returns the calling string value converted to uppercase.
valueOf()	-- It returns the primitive value of the specified object.

*/
Var b1:boolean = true; // By using boolean literals.
var b2:boolean = new Boolean(value); // By using Boolean() constructor.



# Interface:
--------------

interface IPerson { 
   firstName:string, 
   lastName:string, 
   sayHi: ()=>string 
} 
 
var customer:IPerson = { 
   firstName:"Foysal",
   lastName:"Mahmud", 
   sayHi: ():string =>{return "Hi"} 
} 
 
console.log("Customer Object Details: ");
console.log(customer.sayHi()); 
console.log(customer.firstName); 
console.log(customer.lastName); 

// Multiple inheritance
interface IPerson { 
   age:number;
   name:string;
} 
interface IEmployee { 
   empId:string; 
}
interface Engineer extends IPerson, IEmployee {}


# Class:
----------
class Employee { 
   //field 
   name:string; 
   //constructor 
   constructor(name:string) { 
      this.name = name; 
   }  
   //function 
   display():void { 
      console.log("Employee Name: "+this.name);
   } 
} 


# Abstract Class:
------------------
abstract class Department {
    constructor(public name: string) {
    }
    printName(): void {
        console.log("Department name: " + this.name);
    }
    abstract printMeeting(): void; 
}
 
class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); 
    }
    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();






















