// 1-1번 문제
let userName:string; // 예: 이름
let userAge:number; // 예: 나이
let isAdmin:boolean; // 예: 관리자 여부

userName = "Alice";
userAge = 25;
isAdmin = true;


// 1-2번 문제
// 변수 선언과 초기값 지정
let productName:string =  "상품명"; // 상품 이름
let productPrice:number = 1000; // 상품 가격
let isAvailable:boolean = true; // 상품 재고 여부

// 예시 출력
console.log(`상품명: ${productName}, 가격: ${productPrice}, 재고 여부: ${isAvailable}`);



//1-3번 문제
function addNumbers(num1: number, num2: number):number {
    return num1+num2
}

console.log(addNumbers(5, 3)); 


//1-4번 문제
function stringifyValue(value):string {
  if (value === null  || value === undefined){
    return "값이 없습니다"
  }
  else return value.toString()
}

// 함수 호출
console.log(stringifyValue("Hello")); // "Hello"
console.log(stringifyValue(null)); // "값이 없습니다"
console.log(stringifyValue(undefined)); // "값이 없습니다"


//1-5번 문제
function compareValues(a: unknown, b: unknown): string {
  if (a === b) {
    return "엄격한 동등성";
  } else if (a == b) {
    return "느슨한 동등성";
  } else {
    return "동등하지 않음";
  }
}

// 함수 호출 예시
console.log(compareValues(5, "5")); // 느슨한 동등성
console.log(compareValues(null, undefined)); // 느슨한 동등성
console.log(compareValues(false, 0)); // 느슨한 동등성
console.log(compareValues(NaN, NaN)); // 동등하지 않음
console.log(compareValues(42, 42)); // 엄격한 동등성


//1-6번 문제
function isPrimitive(value: unknown): boolean {

    return value === null || (value !== Object(value))
    switch(typeof value){
        case("string") : return true
        case("number") : return true
        case("boolean") : return true
        case("undefined") : return true
        default : return false
    }
    
}

// 함수 호출 예시
console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false


//2-1번 문제

let user: { name: string; age?: number; isAdmin: boolean }  = {
  name: "Alice",
  isAdmin: true,
};

user={
  name: "Bob",
  age:40,
  isAdmin: false,
}


//2-2번 문제
const readonly_list:readonly number[] = [1,2,3,4];
// 숫자만 담을 수 있는 읽기 전용 배열을 작성하세요.


// 아래 코드는 오류가 발생해야 합니다.
 //numbers.push(4);
 //numbers[0] = 42;


//2-3번 문제
const products: [string, number, boolean][] = [
  ["Laptop", 1000, true],
  ["Shoes", 50, false],
  ["Book", 20, true],
];

// 1. 상품 이름과 가격만 반환,리턴타입 정의필요 
function getProductNamesAndPrices(
  products: [string, number, boolean][]
):[string,number][] {
  return products.map(([name, price]) => [name, price]);
}

// 2. 재고가 있는 상품만 반환,리턴타입 정의필요 
function getAvailableProducts(
  products: [string, number, boolean][]
):[string,number,boolean][]{
  return products.filter(([name, price, isStock ]) => isStock === true )

}
// 여기에 구현

// 테스트 코드
console.log(getProductNamesAndPrices(products));
// 기대 출력: [["Laptop", 1000], ["Shoes", 50], ["Book", 20]]

console.log(getAvailableProducts(products));
// 기대 출력: [["Laptop", 1000, true], ["Book", 20, true]]


//2-4번 문제제
//매개변수, 리턴 타입 정의 필요
function updateUser(user:{name:string, age?:number}):{name:string, age:number} {
  // 나이가 제공되지 않으면 18로 설정
  if (user.age === null || user.age ===undefined){
    user.age=18;
  }

  return {...user, age: user.age ?? 18};
}

// 테스트 코드
console.log(updateUser({ name: "Charlie" })); // { name: "Charlie", age: 18 }
console.log(updateUser({ name: "Dana", age: 25 })); // { name: "Dana", age: 25 }


//2-5번 문제
// proudcts 타입정의  필요 
const productss = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shoes", price: 50, category: "Fashion" },
  { name: "Book", price: 20 },
];

//매개변수, 리턴 타입 정의 필요
function getProductsByCategory(category:string):string[] {
  return productss.reduce((result:string[], product) => {
    if (product.category === category){
      result.push(product.name);
    }
    return result;
  },[])
}

// 테스트 코드
console.log(getProductsByCategory("Electronics")); // ["Laptop"]
console.log(getProductsByCategory("Fashion")); // ["Shoes"]
console.log(getProductsByCategory("Books")); // []







// string
// number
// boolean
// null
// undefined
// --------------
// symbol //절대 수정불가
// bigint

// type Track ={
//     title:string,
//     releaseDate:string,

// }

// type Artist={
//     name:string,
//     realeaseDate:string
// }


// //Union Type
// type SearchResult = Track | Artist

// //Union Type(Interface)
// interface SearchResponse {
//     searchResult : Track | Artist
// }

// let results:SearchResult[]=[{title:"hello",realeaseDate:"2024"}.{name:"hello",realeaseDate:"2025"}]


// function getName(result:Track|Artist){
//     return result.name
//     //return result.realeaseDate
    
// }

//1. typeof -> 원시타입만 typeof가 잡아냄냄
type SearchType= number | string;

function searchBykeyword(keyword:SearchType):string{
    // number로 들어오는 타입은 string으로 바꿔주기
    if(typeof keyword === "number") return keyword.toString()
    return keyword
}

console.log(searchBykeyword(3), typeof searchBykeyword(3));

//2. instanceof

type Period ={
    start:string,
    end:string
}

type SearchType1 = Period | Date

function getDate(day:SearchType1):Date {
    if(day instanceof Date) return day
    return new Date(day.start)
}

getDate({start:"2024-01-01", end:""})

// //3. in     Object 내에 타입 검사
// type Track ={
//     title:string,
//     releaseDate:string,

// }

// type Artist={
//     name:string,
//     realeaseDate:string
// }

// function getName(result: Track|Artist){
//     if("title" in result) return result.title
//     if("name" in result) return result.name
// }

// //4. is  변수의 타입을 내가 지정해줌. -> 반드시 조건문과 함께 써서 변수가 해당 타입이 될 수밖에 없게 만드는 것이 핵심!
// // function 타입가드(변수 : any): 변수 is 특정타입 {
// //     return 조건식;
// // }

// function isTrack(result:Track|Artist):result is Track{
//  return (result as Track).title !== undefined
// }

// function isArtist(result:Track|Artist): result is Artist {
//     return (result as Artist).name !==undefined
// }

// function printInfo(result:Track|Artist){
//     if(isTrack(result)){
//         console.log(result.title)
//     }else if (isArtist(result)){
//         console.log(result.name)
//     }
// }

//union 타입은 합집합의 개념(일부만 타입이 일치해도 에러를 잡지 못하기 때문에 문제가 될 수 있음)
type Track ={
    type:"track",
    title:string,
    releaseDate:string,

}

type Artist={
    type:"artist",
    name:string,
    realeaseDate:string
}

//union 타입의 일부만 타입일치하면 넘어가는것을 방지 하기 위해 type:track과 같은 타입에 대한 명시적인 지시를 해주면 해결할 수 있음
const result:Track|Artist={
    type:"track",
    title:"hey",
    releaseDate:"2025",
}

interface Radio {
    type:"radio",
    title:string,
    numberOfSongs:number
}


type SearchResult = Track|Artist|Radio

function getTypeName ( result:SearchResult):string{
    if(result.type==="track") return "트랙"
    else if(result.type ==="artist") return "아티스트"
    else if(result.type === "radio") return "라디오"
    else {
        exhaustiveCheck(result)
        return "결과"
    }
}

function exhaustiveCheck(params:never){
    throw new Error("에러")
}


type Popularity ={
    rate:number
}

interface Review {
    review :number
}

type Filter = Popularity & Review

let filter:Filter={
    rate:2.3,
    review:3
}


type Product ={
    id:string;
    name:string;
    price:number;
    discount?:number;
}

type DiscountProduct = Product & {discountRatio :number }

//void
function double (a,b){
    console.log(a,b)
}

interface NewType{
    name:string;
    age:number;
    double : (a:number,b:number) => void //함수의 타입을 지정시 함수에 리턴타입이 없으면 void를 써줌, 함수타입 기본문법 "()=>" return 값있으면 ()=>number 이런식으로 쓴다.
}


//any,unknown =>any는 다됨(왠만하면 쓰지 말것) , unknown은 최초 값이 들어가는 순간 타입 확정 
let s: any = 'noona'
let t: unknown = 3
let anyType: any
let unknownType: unknown

anyType = "hello"
unknownType = "hello"

console.log(anyType.toUpperCase())

if (typeof unknownType === "string") {
    console.log(unknownType.toUpperCase())
}


//const enum > enum을 상수로 취급해 tree shaking 가능


//enum
//Female, Male
const enum Gender {
    FEMALE = "Female",
    MALE = "Male",
}

//enum을 통해서 타입 및 값을 통제하는게 가능
let gender: Gender = Gender.FEMALE;

//enum에서 값을 지정해주지 않으면 index값이 나온다.
// const enum SearchType {
//     Date = "Date", //0
//     KEYWORD = "Keyword", //1
//     ORDER = "Order", //2
// }

// console.log("hey", SearchType.Date);





//interface, type

//interface는 객체타입만 정의할 때 쓰일 수 있음
interface IStudent {
    name: string;
    age?: number;
}

//type은 원시 및 튜플 타입도 정의가능
type TStudent = {
    name: string,
    age?: number
}

let h: IStudent = { name: 'aoaoao', age: 34 }
let i: TStudent = { name: 'aoaoao', age: 34 }

interface IPerson {
    name: string;
    age: number;
}

interface IForeigner extends IPerson { // IPerson의 name, age를 상속

    // name:string
    // age:number
    nationality: string;
}

type TForeigner = IPerson & { nationality: string, period: Date } //IPerson의 name,age를 상속

interface INewForeigner extends TForeigner { }

let american: IForeigner = { nationality: "american", name: "jacob", age: 23 }
let ameican: TForeigner = { nationality: "american", name: "jacob", age: 23, period: new Date("") }


let g: { name: string | number | boolean, age?: number } = { name: "asd", age: 12 }


//object는 객체안에 각각 하나에 타입을 지정해줌
let d: object = {} //안씀
let e: { readonly name: string } = { name: "noona" } //읽기만 가능한 속성 => readonly
let f: { name: string, age?: number } = { name: "noona", age: 23 } //age 같은 경우는 들어올 수도 있고 안들어올 수 도 있을때 선택적 속성을 활용 => age?:{type}


console.log(e.name)

let fruit: string[] = ['banana', 'apple'] // 배열은 뒤에 []만 넣어주면 됨
let numbers: Array<number> = [1, 2, 3, 4] //이렇게도 배열을 선언할 수 있지만 잘 안씀
let student: { name: string, age?: number }[] = [{ name: "noona", age: 12 }, { name: "johne" }]// 객체는 배열형태로 받을때 이렇게 사용

let tuple: [string | number, number]
tuple = ["noona", 23]


let a: number = 3
a = 2

let b: null = null

let c: undefined = undefined

// function double(n: number): number { //리턴값이 없을때는 함수에 설정된 타입을 지우면 됨 => function double(n:number){}
//     return n * 2
// }

// console.log(double(4));

// console.log(double(3));

// function isPrimitive(value: unknown) {
//     console.log(value)
//     console.log(Object(value))
// }


// isPrimitive("hello");
// isPrimitive(42);
// isPrimitive(false);
// isPrimitive(null);
// isPrimitive(undefined);
// isPrimitive({});
// isPrimitive([]);