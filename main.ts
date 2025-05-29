
//11-1번 문제
// 매개변수, 리턴타입 정의 필요 
function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

// 테스트 코드
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined


//11-2번 문제
// 매개변수, 리턴타입 정의 필요 
function isNumberArray<T>(array: T[]):boolean {
  return array.every((item)=> typeof item ==="number");
  
}

// 테스트 코드
console.log(isNumberArray([1, 2, 3])); // true
console.log(isNumberArray(["a", "b", "c"])); // false
console.log(isNumberArray([])); // true (빈 배열은 숫자 배열로 간주)


// 11-3번 문제
// 조건부 타입 정의
type IsArray<T> = T extends Array<any> ? true: false;

// 조건부 타입을 활용한 함수
function checkArrayType<T>(value: T): string {
  if (Array.isArray(value)){
    return "This is an Array";
  }else {
    return "This is not an Array";
  }
}

// 테스트 코드
console.log(checkArrayType([1, 2, 3])); // "This is an array."
console.log(checkArrayType("Hello")); // "This is not an array."
console.log(checkArrayType({ key: "value" })); // "This is not an array."



//11-4번 문제
// Mapped Type 정의
type WithDefault<T> = {
  [K in keyof T] ?: [T[K], T[K]]
};

// 테스트 코드
type Original = { id: number; name: string; isActive: boolean };
type WithDefaults = WithDefault<Original>;

// 기대 결과:
// type WithDefaults = {
//   id: [number, number];
//   name: [string, string];
//   isActive: [boolean, boolean];
// }


//11-5번 문제
function createObject<K extends string | number | symbol, V>(key: K, value: V): Record<K, V> {
  return { [key]: value } as Record<K, V>;
}

console.log(createObject("id", 123)); // { id: 123 }
console.log(createObject("name", "Alice")); // { name: "Alice" }


// 11-6번 문제
// 매개변수, 리턴 타입 정의 필요 
function pluck<T>(array: Object[], key:string): T[] {
  if ( array.every(item => key in item)){
    return array.map(item => item[key]);
  }
  else return [];
}

// 테스트 코드
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

console.log(pluck(users, "id")); // [1, 2]
console.log(pluck(users, "name")); // ["Alice", "Bob"]



//literal 타입
let direction: "left" | "right"
direction = "left"
direction = "right"

type Direction = "left" | "right"
type Margin = `margin-${Direction}`

let margin: Margin
margin = "margin-right"


// 12-1번 문제
type Button =  "primary" | "secondary" | "danger";

function getButtonClass(style: Button): string {
  return `btn-${style}`;
  // 여기에 구현
}

// 테스트 코드
console.log(getButtonClass("primary")); // "btn-primary"
console.log(getButtonClass("secondary")); // "btn-secondary"
console.log(getButtonClass("danger")); // "btn-danger"
// console.log(getButtonClass("unknown")); // 오류 발생


// 12-2문제
type ServerStatus = "loading" | "success" | "error"; 

function handleRequestState(state: ServerStatus): string {
  // 여기에 구현
  switch(state){
    case "loading" : return "Loading, please wait...";
    case "success" : return "Request successful!";
    case "error" : return "There was an error processing your request.";
    default : return "오류발생";
  }
}

// 테스트 코드
console.log(handleRequestState("loading")); // "Loading, please wait..."
console.log(handleRequestState("success")); // "Request successful!"
console.log(handleRequestState("error")); // "There was an error processing your request."
// console.log(handleRequestState("unknown")); // 오류 발생






//----------------------------------

// 6-1번 문제
type Product6 = {
  id: number,
  name: string,
  price: number
};


type Discount = {
  discountPercentage: number
};

type DiscountedProduct6 = Product6 & Discount;


function calculateDiscountedPrice(item: DiscountedProduct6): number {
  return item.price * (1 - item.discountPercentage / 100);
}

// 테스트 코드
const discountedProduct6: DiscountedProduct6 = {
  id: 101,
  name: "Laptop",
  price: 1000,
  discountPercentage: 20,
};

console.log(calculateDiscountedPrice(discountedProduct6)); // 800




// 6-2번 문제
// ContactInfo 타입 정의
type ContactInfo = {
  phone: string,
  address: string
}

// OrderInfo 타입 정의
type OrderInfo = {
  orderId: number,
  items: string[]
}


function printOrderSummary(order: ContactInfo & OrderInfo): string {
  return `(order: ${order.orderId}) (Phone: ${order.phone})`
}

// 테스트 코드
const orderDetails = {
  phone: "123-456-7890",
  address: "123 Main St",
  orderId: 2023,
  items: ["Laptop", "Mouse"]
};

console.log(printOrderSummary(orderDetails)); // "Order 2023 (Phone: 123-456-7890)"


// 6-3번 문제
// 기본 사용자 정보 타입 정의
type Profile = {
  id: number,
  name: string,
  email: string
}

// 사용자 활동 기록 타입 정의
type Activity = {
  lastLogin: Date,
  actions: string[]
}


// 사용자 데이터를 병합하는 함수
function mergeUserData(
  profile: Profile,
  activity: Activity
): Profile & Activity {
  return { ...profile, ...activity };
}

// 사용자 요약 정보를 반환하는 함수
function getUserSummary(user: Profile & Activity): string {
  return `사용자 [${user.id}] - [${user.name}]([${user.email}]) - 마지막 로그인: [${user.lastLogin.toISOString()}]`;
}



// 테스트 코드
const profile = { id: 1, name: "Alice", email: "alice@example.com" };
const activity = {
  lastLogin: new Date("2024-01-01T10:00:00Z"),
  actions: ["login", "viewed dashboard", "logout"],
};

const mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser));
// 출력 예시: "사용자 1 - Alice (alice@example.com) - 마지막 로그인: 2024-01-01T10:00:00Z"



// 9-1번 문제
// 매개변수, 리턴타입 정의필요 
function processInput(input: number[] | string[] | { message: string }): string | number {
  if (Array.isArray(input)) {
    if (typeof input[0] === "number") {
      return (input as number[]).reduce((result9:number, input_num) => result9 + input_num, 0);
    }
    else if (typeof input[0] === "string") {
      return (input as string[]).join('');
    } else {
      throw new Error("에러 발생");
    }
  }
  else if ("message" in input) {
      return (input as {message:string}).message.toUpperCase();
  }    
  else { throw new Error("에러 발생");}
}

// 테스트 코드
console.log(processInput([1, 2, 3])); // 6
console.log(processInput(["hello", "world"])); // "helloworld"
console.log(processInput({ message: "TypeScript" })); // "TYPESCRIPT"
// console.log(processInput(42)); // 에러 발생



// 9-2번 문제
// 클래스 정의
class Car {
  public brand:string;
  constructor(brand:string){
    this.brand=brand;
  }
}

class Bike {
  public type:string;
  constructor(type:string){
    this.type=type;
  }
}

function processVehicle(vehicle: Car | Bike): string {
  if (vehicle instanceof Car){
    return vehicle.brand.toUpperCase();
  }
  else if (vehicle instanceof Bike){
    return `Bike: ${vehicle.type}`;
  }
  else throw new Error("에러 발생");
}

// 테스트 코드
const myCar = new Car("Tesla");
const myBike = new Bike("Mountain");

console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"
// console.log(processVehicle("unknown")); // 에러 발생



//9-3번 문제
type Admin1 = { type: "admin"; permissions: string[] };
type User1 = { type: "user"; email: string };

function processUser(user: Admin1 | User1): string {
  if ("permissions" in user) {
    return user.permissions.join(",");
  } else if ("email" in user) {
    return user.email;
  } else {
    return "에러 입니다.";
  }

}

// 테스트 코드
console.log(processUser({ type: "admin", permissions: ["read", "write"] })); // "read,write"
console.log(processUser({ type: "user", email: "user@example.com" })); // "user@example.com"



// 9-4번 문제
type Rectangle = { width: number; height: number };
type Circle = { radius: number };

// 사용자 정의 타입 가드
function isRectangle(shape: unknown): shape is Rectangle {
  return (shape as Rectangle).width !== undefined && (shape as Rectangle).height !==undefined;
}

function calculateArea(shape: Rectangle | Circle): number {
  if (isRectangle(shape)){
    return shape.width * shape.height;
  }else {
    return shape.radius**2*Math.PI;
  } 
}

// 테스트 코드
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)


// 9-5번 문제
type Square = {
  type:"square";
  side: number;
}

type Circle1 = {
  type:"circle";
  radius: number;
}

type Shape = Square | Circle1

// 넓이를 계산하는 함수
function calculateArea1(shape: Shape): number {
  switch(shape.type){
    case ("square") : return shape.side**2
    case ("circle") : return shape.radius**2*Math.PI;
    default : const exhaustive_check : never = shape;
    throw new Error("해당 타입이 없습니다.")
  }

  // 여기에 구현
}

// 테스트 코드
console.log(calculateArea1({ type:"square", side: 5 })); // 기대 출력: 25
console.log(calculateArea1({ type:"circle",  radius: 7 })); // 기대 출력: 153.93804002589985

//-------------------------------------------------------


//3-1번 문제
// 인터페이스 작성

// 타입 작성
interface User {
  id: number,
  name: string
}

type UserWithEmail = {
  id: number,
  name: string,
  email?: string
}


const user: User = {
  id: 1,
  name: "Alice",
};

const userWithEmail: UserWithEmail = {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
};


//3-2번 문제
// User 타입을 작성하세요.
// 여기에 작성
type User2 = {
  id: number,
  name: string,
  address:
  { city: string, zipCode: number }
}


// User 타입을 사용하여 아래 객체를 작성하세요.
const user2: User2 = {
  id: 1,
  name: "Alice",
  address: {
    city: "Seoul",
    zipCode: 12345,
  },
};


console.log(user2);


//3-3번 문제
// User 인터페이스 작성
// 여기에 작성

interface User3 {
  id: number,
  name: string,
  email?: string
}

// Admin 인터페이스 작성 (User 확장)
// 여기에 작성

interface Admin extends User3 {
  role: string
}

const normalUser: User3 = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const adminUser: Admin = {
  id: 2,
  name: "Bob",
  role: "Administrator",
};


console.log(adminUser);


//3-4번 문제
// Product 타입 작성
// 여기에 작성
type Product1 = {
  id: number,
  name: string,
  price: number
}

// DiscountedProduct 타입 작성 (Product 확장)
// 여기에 작성

type DiscountedProduct1 = Product1 & {
  discount: number;
};

const normalProduct: Product1 = {
  id: 1,
  name: "Laptop",
  price: 1000,
};

const discountedProduct: DiscountedProduct1 = {
  id: 2,
  name: "Smartphone",
  price: 800,
  discount: 10,
};


//3-5번 문제
// Product 타입 작성
interface Product2 {
  id: number,
  name: string,
  price: number
}

interface Order1 {
  orderId: number,
  products: Product2[],
  totalPrice: number
}


// Order 타입을 사용하여 아래 객체를 작성하세요.
const order: Order1 = {
  orderId: 101,
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mouse", price: 50 },
  ],
  totalPrice: 1050,
};


//3-6번 문제
// BaseUser 인터페이스 작성
interface BaseUser {
  id: number,
  name: string
}


type AdminUser = BaseUser & {
  role: string
}

type GuestUser = BaseUser & {
  visitCount: number
}

// 아래 객체를 작성하세요.
const admin: AdminUser = {
  id: 1,
  name: "Alice",
  role: "Administrator",
};

const guest: GuestUser = {
  id: 2,
  name: "Bob",
  visitCount: 5,
};


//4-1번 문제
// 작업 상태를 나타내는 enum을 작성하세요.
const enum TaskStatus {
  Pending = "Pending",
  InProgress = "InProgress",
  Completed = "Completed"
}


function getStatusMessage(status: TaskStatus): string {
  switch (status) {
    case (TaskStatus.Pending): return "작업이 대기중입니다"
    case (TaskStatus.InProgress): return "작업이 진행 중입니다"
    case (TaskStatus.Completed): return "작업이 완료되었습니다"
    default: return ""
  }
}

// 테스트 코드
console.log(getStatusMessage(TaskStatus.Pending)); // "작업이 대기 중입니다."
console.log(getStatusMessage(TaskStatus.InProgress)); // "작업이 진행 중입니다."
console.log(getStatusMessage(TaskStatus.Completed)); // "작업이 완료되었습니다."



//4-2번 문제
// 로그 수준을 나타내는 enum 작성
enum TaskStatus1 {
  Pending = "Pending",
  InProgress = "InProgress",
  Completed = "Completed",
  Failed = "Failed"
}

function processTask1(status: TaskStatus1, input: unknown): string {
  if (typeof input !== "string") {
    throw new Error("입력값은 문자열이어야 합니다.")
  }
  switch (status) {
    case TaskStatus1.Pending: return input.toUpperCase();
    case TaskStatus1.InProgress: return input.toLowerCase();
    case TaskStatus1.Completed: return `완료:${input}`;
    case TaskStatus1.Failed: throw new Error("작업이 실패했습니다");
    default: throw new Error("알수없음");

  }
}

// 테스트 코드
console.log(processTask1(TaskStatus1.Pending, "task1"));
// 기대 출력: "TASK1"

console.log(processTask1(TaskStatus1.InProgress, "TaskA"));
// 기대 출력: "taska"

console.log(processTask1(TaskStatus1.Completed, "Report1"));
// 기대 출력: "완료: Report1"

// console.log(processTask1(TaskStatus1.Failed, "TaskX")); 
// // 에러: 작업이 실패했습니다.

// console.log(processTask1(TaskStatus1.Pending, 42)); 
// // 에러: 입력값은 문자열이어야 합니다.



//4-3번 문제
// 로그 수준을 나타내는 enum 작성
enum LogM {
  Info = "Info",
  Error = "Error",
  Debug = "Debug",
};

// 로그 함수 타입을 정의하세요.
type FnLogM = (message: string, level: LogM) => void;

// 로그 함수 구현
const logMessage: FnLogM = (message: string, level: LogM) => {
  switch (level) {
    case LogM.Info: console.log(`[info] ${message}`); break;
    case LogM.Error: console.log(`[Error] ${message}`); break;
    case LogM.Debug: console.log(`[Debus] ${message}`); break;
    default: console.log("값이 없습니다");
  }
};


// 테스트 코드
logMessage("시스템이 시작되었습니다.", LogM.Info);
logMessage("네트워크 연결 실패!", LogM.Error);
logMessage("디버깅 모드 활성화", LogM.Debug);



//4-4번 문제
function processAny(input: any): string {
  return input.toString();
}

function processUnknown(input: unknown): string | number {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return 10 * input;
  } else {
    throw new Error("적정타입 없음");
  }
}

// 테스트 코드
console.log(processAny("hello")); // 기대 출력: "hello"
console.log(processAny(42)); // 기대 출력: "42"
console.log(processAny(true)); // 기대 출력: "true"

console.log(processUnknown("hello")); // 기대 출력: "HELLO"
console.log(processUnknown(42)); // 기대 출력: 420
// console.log(processUnknown(true)); // 에러 발생



//------------------------------------------------------


// 1-1번 문제
let userName: string; // 예: 이름
let userAge: number; // 예: 나이
let isAdmin: boolean; // 예: 관리자 여부

userName = "Alice";
userAge = 25;
isAdmin = true;


// 1-2번 문제
// 변수 선언과 초기값 지정
let productName: string = "상품명"; // 상품 이름
let productPrice: number = 1000; // 상품 가격
let isAvailable: boolean = true; // 상품 재고 여부

// 예시 출력
console.log(`상품명: ${productName}, 가격: ${productPrice}, 재고 여부: ${isAvailable}`);



//1-3번 문제
function addNumbers(num1: number, num2: number): number {
  return num1 + num2
}

console.log(addNumbers(5, 3));


//1-4번 문제
function stringifyValue(value): string {
  if (value === null || value === undefined) {
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

// let user: { name: string; age?: number; isAdmin: boolean }  = {
//   name: "Alice",
//   isAdmin: true,
// };

// user={
//   name: "Bob",
//   age:40,
//   isAdmin: false,
// }


//2-2번 문제
const readonly_list: readonly number[] = [1, 2, 3, 4];
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
): [string, number][] {
  return products.map(([name, price]) => [name, price]);
}

// 2. 재고가 있는 상품만 반환,리턴타입 정의필요 
function getAvailableProducts(
  products: [string, number, boolean][]
): [string, number, boolean][] {
  return products.filter(([name, price, isStock]) => isStock === true)

}


// 테스트 코드
console.log(getProductNamesAndPrices(products));
// 기대 출력: [["Laptop", 1000], ["Shoes", 50], ["Book", 20]]

console.log(getAvailableProducts(products));
// 기대 출력: [["Laptop", 1000, true], ["Book", 20, true]]


//2-4번 문제제
//매개변수, 리턴 타입 정의 필요
function updateUser(user: { name: string, age?: number }): { name: string, age: number } {
  // 나이가 제공되지 않으면 18로 설정
  return { ...user, age: user.age ?? 18 };
}

// 테스트 코드
console.log(updateUser({ name: "Charlie" })); // { name: "Charlie", age: 18 }
console.log(updateUser({ name: "Dana", age: 25 })); // { name: "Dana", age: 25 }


//2-5번 문제
// products 타입정의  필요 
const productss = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shoes", price: 50, category: "Fashion" },
  { name: "Book", price: 20 },
];

//매개변수, 리턴 타입 정의 필요
function getProductsByCategory(category: string): string[] {
  return productss.reduce((result: string[], product) => {
    if (product.category === category) {
      result.push(product.name);
    }
    return result;
  }, [])
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

//제네릭 타입 <T> => Type을 호출할때 Type이 결정됨.
type ArrayType<T> = T[]

const numberArray: ArrayType<number> = [1, 2, 3]
const StringArray: ArrayType<String> = ["a", "b", "c"]

//
// type CategoryResponse = {
//   status: string,
//   totalPage:number,
//   totalResult:number,
//   page:number,
//   data:{name:string}[]
// }

// type MovieResponse = {
//   status:string,
//   totalPage:number,
//   totalResult:number,
//   page:number,
//   data:{title:string,genre:string}[]
// }

type ApiResponse<T> = {
  staus: string,
  totalPage: number,
  totalResult: number,
  page: number,
  data: T[]
}

type CategoryResponse = ApiResponse<{ name: string }>
type MovieResponse = ApiResponse<{ title: string, genre: string }>

//function useState<T>(초기화값:T):[T,함수<T>]{
//   return [값, 함수]
// }

//useState를 쓸때는 <T> 제너릭을 선언하면서 만들자 -> <T>는 값이 들어오면서 정해짐
// const [value, setValue] = useState(true)
// const [value2, setValue2] = useState<boolean>(false)

// interface Length{
//   length:number
// }

// function getValue<T extends Length>(data:T){
//   console.log(data.length)
// }

// console.log(getValue("hello"));
// console.log(getValue([1,2,3]))


//1. 조건부 타입
type isString<T> = T extends string ? "yes" : "no"; //yes, no 자리에 type을 지정해주면 됨

type result1 = isString<string>

//2. mapped type
type Movie = {
  title: string,
  genre: string,
  rate: number;
};

type Subset<T> = {
  [K in keyof T]?: T[K]
}

const movie1: Subset<Movie> = { title: "기생충", genre: "액션" };
const movie2: Subset<Movie> = { rate: 2 }

interface Pair<T, U> {
  first: T,
  second: U,
  display(): void
}

const pair: Pair<string, number> = {
  first: "noona",
  second: 2,
  display() {
    console.log(this.first + "는 " + this.second + "살 입니다.")
  },
};


pair.display();

//literal 타입
// let direction: "left" | "right"
// direction = "left"
// direction = "right"

// type Direction = "left" | "right"
// type Margin = `margin-${Direction}`

// let margin: Margin
// margin = "margin-right"


//utility 타입
//1. Omit -> 특정 타입을 빼는 것
interface UserOmit {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number
}

// interface PublicUser {
//   id:number;
//   name:string;
//   email:string;
// }

type PublicUser = Omit<UserOmit, "password" | "age">

let userProfile: PublicUser = {
  id: 2,
  name: "noona",
  email: "asdf",
  // age:23,
  // password="3"
}

//2. Pick -> 필요한 타입만 가져옴
// interface BasicUserInfo {
//   id:number,
//   name:string
// }

type BasicUserInfo = Pick<User, "id" | "name">


//3. Partial -> ~일수도 있고, 아닐 수도 있고 모든 인수는 다 ?: 이렇게 변경됨

interface Address {
  street: string,
  city: string,
  country: string;
}


const updateAddress = (address: Partial<Address>) => {
  console.log(address);
}

updateAddress({ street: "234", city: "incheon", country: "KR" })



//record 타입 -> 정확히 무슨 key가 올지 모르지만, key의 타입과 value의 타입이 뭐인지 정도만 알때 사용, 동적 타입일때 사용
type StringNumberMap = Record<string, number>

const example: StringNumberMap = {
  apple: 3,
  orange: 5,
  mango: 5
}

type FruitColor = Record<"apple" | "orange" | "mango", string>

const fruitColor: FruitColor = {
  apple: "red",
  orange: "orange",
  mango: "green"
};

type UserRole = "admin" | "user" | "guest" | "owner"

// type RolePermission = {
//   admin:string,
//   user:string,
//   guest:string
// }

type RolePermission = Record<UserRole, string>

type Product12 = { id: string, name: string, price: number; };

type ProductInventory = Record<string, Product12>

const inventoryResponse: ProductInventory = {
  apple: { id: "2", name: "apple", price: 200 },
  orange: { id: "3", name: "orange", price: 2000 }
}


//1. typeof -> 원시타입만 typeof가 잡아냄
type SearchType = number | string;

function searchBykeyword(keyword: SearchType): string {
  // number로 들어오는 타입은 string으로 바꿔주기
  if (typeof keyword === "number") return keyword.toString()
  return keyword
}

console.log(searchBykeyword(3), typeof searchBykeyword(3));

//2. instanceof

type Period = {
  start: string,
  end: string
}

type SearchType1 = Period | Date

function getDate(day: SearchType1): Date {
  if (day instanceof Date) return day
  return new Date(day.start)
}

getDate({ start: "2024-01-01", end: "" })

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
type Track = {
  type: "track",
  title: string,
  releaseDate: string,

}

type Artist = {
  type: "artist",
  name: string,
  realeaseDate: string
}

//union 타입의 일부만 타입일치하면 넘어가는것을 방지 하기 위해 type:track과 같은 타입에 대한 명시적인 지시를 해주면 해결할 수 있음
const result: Track | Artist = {
  type: "track",
  title: "hey",
  releaseDate: "2025",
}

interface Radio {
  type: "radio",
  title: string,
  numberOfSongs: number
}


type SearchResult = Track | Artist | Radio

function getTypeName(result: SearchResult): string {
  if (result.type === "track") return "트랙"
  else if (result.type === "artist") return "아티스트"
  else if (result.type === "radio") return "라디오"
  else {
    exhaustiveCheck(result)
    return "결과"
  }
}

function exhaustiveCheck(params: never) {
  throw new Error("에러")
}


type Popularity = {
  rate: number
}

interface Review {
  review: number
}

type Filter = Popularity & Review

let filter: Filter = {
  rate: 2.3,
  review: 3
}


type Product = {
  id: string;
  name: string;
  price: number;
  discount?: number;
}

type DiscountProduct = Product & { discountRatio: number }

//void
function double(a, b) {
  console.log(a, b)
}

interface NewType {
  name: string;
  age: number;
  double: (a: number, b: number) => void //함수의 타입을 지정시 함수에 리턴타입이 없으면 void를 써줌, 함수타입 기본문법 "()=>" return 값있으면 ()=>number 이런식으로 쓴다.
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