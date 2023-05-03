// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

// type과 interface차이, type은 어떤 형태가 들어가야하는지 나타난다
var seho: Person ={
    name:'세호',
    age: 30
}

type MyString = string;
var stra: MyString= 'hello';

type Todo = {id:string; title: string; done: boolean};
function getTodo(todo: Todo){

}

// 타입 별칭은 확장이 되지 않는다. 가능한한 interface로 선언해서 쓰자