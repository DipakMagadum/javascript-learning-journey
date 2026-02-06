// JavaScript supports various datatypes, which can be broadly categorized into primitive and non-primitive types.

// Primitive datatypes => Primitive datatypes represent single values and are immutable.

// string => Represents text enclosed in single or double quotes.
 
    let UserName = "Dipak";

// Nmuber =>  Represents numeric values (integers and decimals).

    let age = 23;

// Boolean => Represents a logical value (true or false).

    let isLoggedIn = false ;

// Undefined => A variable that has been declared but not assigned a value.

    let Password;

// Null => Represents an intentional absence of any value.

    let empty = null;

// Symbol =>  Represents unique and immutable values, often used as object keys.

    let sym = Symbol('unique');

// BigInt => Represents integers larger than Number.MAX_SAFE_INTEGER.

    let bigNumber = 123456789012345678901234567890n;

console.table([UserName, age, isLoggedIn, Password, empty, sym, bigNumber]);

// Non-Primitive Datatypes => Non-primitive types are objects and can store collections of data or more complex entities.

// Object => Represents key-value pairs.

    let obj ={
        
        UserName: "Dipak" ,
        age: 23
    };
    console.log(obj);


// Array => Represents an ordered list of values,can store values of any data type (numbers, strings, objects, even other arrays)

    let a = ["Dipak", 23, 2.3];
    console.log(a);

// Function => Represents reusable blocks of code.

    function Greeting (){

        console.log("Wellcome, to my Javascript Learning Journey");
    }

    Greeting (); // this call the function and run it 








