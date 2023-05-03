// function logMessage(value: string){
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);


// Union Type으로 두개의 파라미터를 받을 수 있다.
var seh: string | number | boolean;
function logMessage(value: string | number) {
    console.log(value);

    if( typeof value === 'number'){
        value.toLocaleString();
    }
    if (typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person1 {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person1){
    someone.age
}