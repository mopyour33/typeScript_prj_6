// //12-1번 문제
// type User12 = {
//   name: string;
//   email: string;
//   password: string;
// };
// // 함수 작성
// function updateUserForm(
//   user: User12,
//   updates: Partial<User12>
// ): User12 {
//   // 여기에 구현
//   return {...user,...updates};
//   // const user_key = Object.keys(user);
//   // const update_key = Object.keys(updates);
//   // const common_key = update_key.filter(item => {console.log(item); return user_key.includes(item)});
//   // console.log(common_key);
//   // const updates_user:User12 = {...user};
//   // for (const key of common_key){
//   //   console.log(key);
//   //   updates_user[key] = updates[key];
//   // } 
//   // return updates_user;
// }
// // 테스트 코드
// const currentUser = { name: "Alice", email: "alice@example.com", password: "1234" };
// const updatedForm = { email: "new-email@example.com" };
// console.log(updateUserForm(currentUser, updatedForm));
// // 기대 출력: { name: "Alice", email: "new-email@example.com", password: "1234" }
// //12-2번 문제
// type UserProfile = {
//   id: number;
//   name: string;
//   email: string;
//   address: string;
// };
// type Pick12 = Pick<UserProfile, "id" | "name">;
// // 함수 작성
// function getProfileSummary(
//   user: UserProfile
// ): Pick12 {
//   return { "id":user.id, "name":user.name }
// }
// // 테스트 코드
// const userProfile12 = { id: 1, name: "Alice", email: "alice@example.com", address: "123 Main St" };
// console.log(getProfileSummary(userProfile12));
// // 기대 출력: { id: 1, name: "Alice" }
// // 12-3번 문제
// type User123 = {
//   name: string;
//   email: string;
//   password: string;
//   role: string;
// };
// type Omit123 = Omit<User123,"password">;
// // 함수 작성
// function filterSensitiveInfo(
//   user123: User123
// ): Omit123 {
//   const {password, ...userInfo} = user123;
//   return userInfo;
//   // return { "name" : user123.name, "email" : user123.email, "role" : user123.role}
// };
// // 테스트 코드
// const userInfo = { name: "Alice", email: "alice@example.com", password: "1234", role: "admin" };
// console.log(filterSensitiveInfo(userInfo));
// // 기대 출력: { name: "Alice", email: "alice@example.com", role: "admin" }
// // 12-4번 문제
// type TeamMember = {
//   id: number;
//   name: string;
//   email: string;
//   role: "developer" | "designer" | "manager";
//   isActive: boolean;
// };
// // 1. `createTeamMember` 함수 작성
// function createTeamMember(data: Partial<TeamMember>): TeamMember {
//   // 여기에 구현
//   return {
//     "id":data.id,
//     "name":data.name,
//     "email":data.email,
//     "role": data.role || "developer",
//     "isActive":data.isActive ?? true
//   }
// }
// // 2. `filterTeamMembers` 함수 작성
// function filterTeamMembers(
//   members: TeamMember[],
//   filter: Pick<TeamMember, "role" | "isActive">, 
// ): TeamMember[] {
//   // 여기에 구현
//   return members.filter((member)=> member.role === filter.role && member.isActive === filter.isActive);
// }
// // 3. `removeSensitiveInfo` 함수 작성
// function removeSensitiveInfo(
//   members: TeamMember[]
// ): Omit<TeamMember,"email">[] {
//   // 여기에 구현
//   const result = members.map(({email,...memberExceptEmail}) => memberExceptEmail );
//   return result;
//   // let result = [];
//   // members.map((member)=> {
//   //   let {email, ...memberExceptEmail} = member;
//   //   result.push(memberExceptEmail);
//   // })  
//   // return result;
// }
// // 테스트 코드
// const members: TeamMember[] = [
//   { id: 1, name: "Alice", email: "alice@example.com", role: "developer", isActive: true },
//   { id: 2, name: "Bob", email: "bob@example.com", role: "designer", isActive: false },
//   { id: 3, name: "Charlie", email: "charlie@example.com", role: "manager", isActive: true },
// ];
// // // 1. 새 팀원 생성
// const newMember = createTeamMember({ id: 4, name: "Diana" });
// console.log(newMember);
// // 기대 출력: { id: 4, name: "Diana", email: "", role: "developer", isActive: true }
// // // 2. 필터링된 팀원 목록
// const activeDesigners = filterTeamMembers(members, { role: "designer", isActive: true });
// console.log(activeDesigners);
// // 기대 출력: []
// // 3. 민감한 정보 제거
// const sanitizedMembers = removeSensitiveInfo(members);
// console.log(sanitizedMembers);
// // 기대 출력: [{ id: 1, name: "Alice", role: "developer", isActive: true }, ...]
// //14-1번 문제
// // 지역 코드 타입 정의
// type RegionCode = "US" | "EU" | "ASIA" | "AFRICA";
// // 배송비 데이터 정의
// const shippingCosts: Record<RegionCode,number> = {
//   US: 10,
//   EU: 15,
//   ASIA: 20,
//   AFRICA: 25,
// };
// // 배송비 계산 함수 작성
// function calculateShippingCost(
//   region: RegionCode,
//   costs: Record<RegionCode,number>
// ): number {
//   // 여기에 구현
//   if (!(region in costs)){
//     throw new Error("해당 지역은 존재하지 않습니다");
//   }
//  return costs[region];
// }
// // 테스트 코드
// console.log(calculateShippingCost("US", shippingCosts)); // 10
// console.log(calculateShippingCost("EU", shippingCosts)); // 15
// console.log(calculateShippingCost("ASIA", shippingCosts)); // 20
// console.log(calculateShippingCost("AFRICA", shippingCosts)); // 25
// // console.log(calculateShippingCost("AUSTRALIA", shippingCosts)); // 에러 발생
// // 14-2번 문제
// // 학생 점수 데이터 정의
// const scores: Record<string,number> = {
//   Alice: 85,
//   Bob: 92,
//   Charlie: 78,
// };
// // 평균 점수 계산 함수 작성
// function calculateAverageScore(scores: Record<string,number>): number {
//   // 여기에 구현
//   const keyCount = Object.keys(scores).length;
//   return (Object.values(scores)).reduce((sum, score) => sum + score,0)/keyCount;
// }
// // 테스트 코드
// console.log(calculateAverageScore(scores)); // 85
// // 14-3번 문제
// // 제품 가격 데이터 정의
// const prices: Record<string,number> = {
//   Laptop: 1000,
//   Phone: 500,
//   Tablet: 300,
// };
// // 가격 업데이트 함수 작성
// function updateProductPrice(
//   prices: Record<string,number>,
//   product: string,
//   newPrice: number
// ): Record<string,number> {
//   // 여기에 구현
//   console.log(product);
//   // const update_price = {product:newPrice};
//   return {...prices, [product]:new};
// }
// // 테스트 코드
// console.log(updateProductPrice(prices, "Phone", 550));
// // 기대 출력: { Laptop: 1000, Phone: 550, Tablet: 300 }
//-----------------------------------------
//11-1번 문제
// 매개변수, 리턴타입 정의 필요 
function getFirstElement(array) {
    return array[0];
}
// 테스트 코드
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined
//11-2번 문제
// 매개변수, 리턴타입 정의 필요 
function isNumberArray(array) {
    return array.every((item) => typeof item === "number");
}
// 테스트 코드
console.log(isNumberArray([1, 2, 3])); // true
console.log(isNumberArray(["a", "b", "c"])); // false
console.log(isNumberArray([])); // true (빈 배열은 숫자 배열로 간주)
// 조건부 타입을 활용한 함수
function checkArrayType(value) {
    if (Array.isArray(value)) {
        return "This is an Array";
    }
    else {
        return "This is not an Array";
    }
}
// 테스트 코드
console.log(checkArrayType([1, 2, 3])); // "This is an array."
console.log(checkArrayType("Hello")); // "This is not an array."
console.log(checkArrayType({ key: "value" })); // "This is not an array."
// 기대 결과:
// type WithDefaults = {
//   id: [number, number];
//   name: [string, string];
//   isActive: [boolean, boolean];
// }
//11-5번 문제
function createObject(key, value) {
    return { [key]: value };
}
console.log(createObject("id", 123)); // { id: 123 }
console.log(createObject("name", "Alice")); // { name: "Alice" }
// 11-6번 문제
// 매개변수, 리턴 타입 정의 필요 
function pluck(array, key) {
    if (array.every(item => key in item)) {
        return array.map(item => item[key]);
    }
    else
        return [];
}
// 테스트 코드
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];
console.log(pluck(users, "id")); // [1, 2]
console.log(pluck(users, "name")); // ["Alice", "Bob"]
//literal 타입
let direction;
direction = "left";
direction = "right";
let margin;
margin = "margin-right";
function getButtonClass(style) {
    return `btn-${style}`;
    // 여기에 구현
}
// 테스트 코드
console.log(getButtonClass("primary")); // "btn-primary"
console.log(getButtonClass("secondary")); // "btn-secondary"
console.log(getButtonClass("danger")); // "btn-danger"
function handleRequestState(state) {
    // 여기에 구현
    switch (state) {
        case "loading": return "Loading, please wait...";
        case "success": return "Request successful!";
        case "error": return "There was an error processing your request.";
        default: return "오류발생";
    }
}
// 테스트 코드
console.log(handleRequestState("loading")); // "Loading, please wait..."
console.log(handleRequestState("success")); // "Request successful!"
console.log(handleRequestState("error")); // "There was an error processing your request."
function calculateDiscountedPrice(item) {
    return item.price * (1 - item.discountPercentage / 100);
}
// 테스트 코드
const discountedProduct6 = {
    id: 101,
    name: "Laptop",
    price: 1000,
    discountPercentage: 20,
};
console.log(calculateDiscountedPrice(discountedProduct6)); // 800
function printOrderSummary(order) {
    return `(order: ${order.orderId}) (Phone: ${order.phone})`;
}
// 테스트 코드
const orderDetails = {
    phone: "123-456-7890",
    address: "123 Main St",
    orderId: 2023,
    items: ["Laptop", "Mouse"]
};
console.log(printOrderSummary(orderDetails)); // "Order 2023 (Phone: 123-456-7890)"
// 사용자 데이터를 병합하는 함수
function mergeUserData(profile, activity) {
    return Object.assign(Object.assign({}, profile), activity);
}
// 사용자 요약 정보를 반환하는 함수
function getUserSummary(user) {
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
function processInput(input) {
    if (Array.isArray(input)) {
        if (typeof input[0] === "number") {
            return input.reduce((result9, input_num) => result9 + input_num, 0);
        }
        else if (typeof input[0] === "string") {
            return input.join('');
        }
        else {
            throw new Error("에러 발생");
        }
    }
    else if ("message" in input) {
        return input.message.toUpperCase();
    }
    else {
        throw new Error("에러 발생");
    }
}
// 테스트 코드
console.log(processInput([1, 2, 3])); // 6
console.log(processInput(["hello", "world"])); // "helloworld"
console.log(processInput({ message: "TypeScript" })); // "TYPESCRIPT"
// console.log(processInput(42)); // 에러 발생
// 9-2번 문제
// 클래스 정의
class Car {
    constructor(brand) {
        this.brand = brand;
    }
}
class Bike {
    constructor(type) {
        this.type = type;
    }
}
function processVehicle(vehicle) {
    if (vehicle instanceof Car) {
        return vehicle.brand.toUpperCase();
    }
    else if (vehicle instanceof Bike) {
        return `Bike: ${vehicle.type}`;
    }
    else
        throw new Error("에러 발생");
}
// 테스트 코드
const myCar = new Car("Tesla");
const myBike = new Bike("Mountain");
console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"
function processUser(user) {
    if ("permissions" in user) {
        return user.permissions.join(",");
    }
    else if ("email" in user) {
        return user.email;
    }
    else {
        return "에러 입니다.";
    }
}
// 테스트 코드
console.log(processUser({ type: "admin", permissions: ["read", "write"] })); // "read,write"
console.log(processUser({ type: "user", email: "user@example.com" })); // "user@example.com"
// 사용자 정의 타입 가드
function isRectangle(shape) {
    return shape.width !== undefined && shape.height !== undefined;
}
function calculateArea(shape) {
    if (isRectangle(shape)) {
        return shape.width * shape.height;
    }
    else {
        return shape.radius ** 2 * Math.PI;
    }
}
// 테스트 코드
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)
// 넓이를 계산하는 함수
function calculateArea1(shape) {
    switch (shape.type) {
        case ("square"): return shape.side ** 2;
        case ("circle"): return shape.radius ** 2 * Math.PI;
        default:
            const exhaustive_check = shape;
            throw new Error("해당 타입이 없습니다.");
    }
    // 여기에 구현
}
// 테스트 코드
console.log(calculateArea1({ type: "square", side: 5 })); // 기대 출력: 25
console.log(calculateArea1({ type: "circle", radius: 7 })); // 기대 출력: 153.93804002589985
const user = {
    id: 1,
    name: "Alice",
};
const userWithEmail = {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
};
// User 타입을 사용하여 아래 객체를 작성하세요.
const user2 = {
    id: 1,
    name: "Alice",
    address: {
        city: "Seoul",
        zipCode: 12345,
    },
};
console.log(user2);
const normalUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
const adminUser = {
    id: 2,
    name: "Bob",
    role: "Administrator",
};
console.log(adminUser);
const normalProduct = {
    id: 1,
    name: "Laptop",
    price: 1000,
};
const discountedProduct = {
    id: 2,
    name: "Smartphone",
    price: 800,
    discount: 10,
};
// Order 타입을 사용하여 아래 객체를 작성하세요.
const order = {
    orderId: 101,
    products: [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Mouse", price: 50 },
    ],
    totalPrice: 1050,
};
// 아래 객체를 작성하세요.
const admin = {
    id: 1,
    name: "Alice",
    role: "Administrator",
};
const guest = {
    id: 2,
    name: "Bob",
    visitCount: 5,
};
function getStatusMessage(status) {
    switch (status) {
        case ("Pending" /* TaskStatus.Pending */): return "작업이 대기중입니다";
        case ("InProgress" /* TaskStatus.InProgress */): return "작업이 진행 중입니다";
        case ("Completed" /* TaskStatus.Completed */): return "작업이 완료되었습니다";
        default: return "";
    }
}
// 테스트 코드
console.log(getStatusMessage("Pending" /* TaskStatus.Pending */)); // "작업이 대기 중입니다."
console.log(getStatusMessage("InProgress" /* TaskStatus.InProgress */)); // "작업이 진행 중입니다."
console.log(getStatusMessage("Completed" /* TaskStatus.Completed */)); // "작업이 완료되었습니다."
//4-2번 문제
// 로그 수준을 나타내는 enum 작성
var TaskStatus1;
(function (TaskStatus1) {
    TaskStatus1["Pending"] = "Pending";
    TaskStatus1["InProgress"] = "InProgress";
    TaskStatus1["Completed"] = "Completed";
    TaskStatus1["Failed"] = "Failed";
})(TaskStatus1 || (TaskStatus1 = {}));
function processTask1(status, input) {
    if (typeof input !== "string") {
        throw new Error("입력값은 문자열이어야 합니다.");
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
var LogM;
(function (LogM) {
    LogM["Info"] = "Info";
    LogM["Error"] = "Error";
    LogM["Debug"] = "Debug";
})(LogM || (LogM = {}));
;
// 로그 함수 구현
const logMessage = (message, level) => {
    switch (level) {
        case LogM.Info:
            console.log(`[info] ${message}`);
            break;
        case LogM.Error:
            console.log(`[Error] ${message}`);
            break;
        case LogM.Debug:
            console.log(`[Debus] ${message}`);
            break;
        default: console.log("값이 없습니다");
    }
};
// 테스트 코드
logMessage("시스템이 시작되었습니다.", LogM.Info);
logMessage("네트워크 연결 실패!", LogM.Error);
logMessage("디버깅 모드 활성화", LogM.Debug);
//4-4번 문제
function processAny(input) {
    return input.toString();
}
function processUnknown(input) {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    else if (typeof input === "number") {
        return 10 * input;
    }
    else {
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
let userName; // 예: 이름
let userAge; // 예: 나이
let isAdmin; // 예: 관리자 여부
userName = "Alice";
userAge = 25;
isAdmin = true;
// 1-2번 문제
// 변수 선언과 초기값 지정
let productName = "상품명"; // 상품 이름
let productPrice = 1000; // 상품 가격
let isAvailable = true; // 상품 재고 여부
// 예시 출력
console.log(`상품명: ${productName}, 가격: ${productPrice}, 재고 여부: ${isAvailable}`);
//1-3번 문제
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(5, 3));
//1-4번 문제
function stringifyValue(value) {
    if (value === null || value === undefined) {
        return "값이 없습니다";
    }
    else
        return value.toString();
}
// 함수 호출
console.log(stringifyValue("Hello")); // "Hello"
console.log(stringifyValue(null)); // "값이 없습니다"
console.log(stringifyValue(undefined)); // "값이 없습니다"
//1-5번 문제
function compareValues(a, b) {
    if (a === b) {
        return "엄격한 동등성";
    }
    else if (a == b) {
        return "느슨한 동등성";
    }
    else {
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
function isPrimitive(value) {
    return value === null || (value !== Object(value));
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
const readonly_list = [1, 2, 3, 4];
// 숫자만 담을 수 있는 읽기 전용 배열을 작성하세요.
// 아래 코드는 오류가 발생해야 합니다.
//numbers.push(4);
//numbers[0] = 42;
//2-3번 문제
const products = [
    ["Laptop", 1000, true],
    ["Shoes", 50, false],
    ["Book", 20, true],
];
// 1. 상품 이름과 가격만 반환,리턴타입 정의필요 
function getProductNamesAndPrices(products) {
    return products.map(([name, price]) => [name, price]);
}
// 2. 재고가 있는 상품만 반환,리턴타입 정의필요 
function getAvailableProducts(products) {
    return products.filter(([name, price, isStock]) => isStock === true);
}
// 테스트 코드
console.log(getProductNamesAndPrices(products));
// 기대 출력: [["Laptop", 1000], ["Shoes", 50], ["Book", 20]]
console.log(getAvailableProducts(products));
// 기대 출력: [["Laptop", 1000, true], ["Book", 20, true]]
//2-4번 문제제
//매개변수, 리턴 타입 정의 필요
function updateUser(user) {
    var _a;
    // 나이가 제공되지 않으면 18로 설정
    return Object.assign(Object.assign({}, user), { age: (_a = user.age) !== null && _a !== void 0 ? _a : 18 });
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
function getProductsByCategory(category) {
    return productss.reduce((result, product) => {
        if (product.category === category) {
            result.push(product.name);
        }
        return result;
    }, []);
}
// 테스트 코드
console.log(getProductsByCategory("Electronics")); // ["Laptop"]
console.log(getProductsByCategory("Fashion")); // ["Shoes"]
console.log(getProductsByCategory("Books")); // []
const numberArray = [1, 2, 3];
const StringArray = ["a", "b", "c"];
const movie1 = { title: "기생충", genre: "액션" };
const movie2 = { rate: 2 };
const pair = {
    first: "noona",
    second: 2,
    display() {
        console.log(this.first + "는 " + this.second + "살 입니다.");
    },
};
pair.display();
let userProfile = {
    id: 2,
    name: "noona",
    email: "asdf",
    // age:23,
    // password="3"
};
const updateAddress = (address) => {
    console.log(address);
};
updateAddress({ street: "234", city: "incheon", country: "KR" });
const example = {
    apple: 3,
    orange: 5,
    mango: 5
};
const fruitColor = {
    apple: "red",
    orange: "orange",
    mango: "green"
};
const inventoryResponse = {
    apple: { id: "2", name: "apple", price: 200 },
    orange: { id: "3", name: "orange", price: 2000 }
};
function searchBykeyword(keyword) {
    // number로 들어오는 타입은 string으로 바꿔주기
    if (typeof keyword === "number")
        return keyword.toString();
    return keyword;
}
console.log(searchBykeyword(3), typeof searchBykeyword(3));
function getDate(day) {
    if (day instanceof Date)
        return day;
    return new Date(day.start);
}
getDate({ start: "2024-01-01", end: "" });
//union 타입의 일부만 타입일치하면 넘어가는것을 방지 하기 위해 type:track과 같은 타입에 대한 명시적인 지시를 해주면 해결할 수 있음
const result = {
    type: "track",
    title: "hey",
    releaseDate: "2025",
};
function getTypeName(result) {
    if (result.type === "track")
        return "트랙";
    else if (result.type === "artist")
        return "아티스트";
    else if (result.type === "radio")
        return "라디오";
    else {
        exhaustiveCheck(result);
        return "결과";
    }
}
function exhaustiveCheck(params) {
    throw new Error("에러");
}
let filter = {
    rate: 2.3,
    review: 3
};
//void
function double(a, b) {
    console.log(a, b);
}
//any,unknown =>any는 다됨(왠만하면 쓰지 말것) , unknown은 최초 값이 들어가는 순간 타입 확정 
let s = 'noona';
let t = 3;
let anyType;
let unknownType;
anyType = "hello";
unknownType = "hello";
console.log(anyType.toUpperCase());
if (typeof unknownType === "string") {
    console.log(unknownType.toUpperCase());
}
//enum을 통해서 타입 및 값을 통제하는게 가능
let gender = "Female" /* Gender.FEMALE */;
let h = { name: 'aoaoao', age: 34 };
let i = { name: 'aoaoao', age: 34 };
let american = { nationality: "american", name: "jacob", age: 23 };
let ameican = { nationality: "american", name: "jacob", age: 23, period: new Date("") };
let g = { name: "asd", age: 12 };
//object는 객체안에 각각 하나에 타입을 지정해줌
let d = {}; //안씀
let e = { name: "noona" }; //읽기만 가능한 속성 => readonly
let f = { name: "noona", age: 23 }; //age 같은 경우는 들어올 수도 있고 안들어올 수 도 있을때 선택적 속성을 활용 => age?:{type}
console.log(e.name);
let fruit = ['banana', 'apple']; // 배열은 뒤에 []만 넣어주면 됨
let numbers = [1, 2, 3, 4]; //이렇게도 배열을 선언할 수 있지만 잘 안씀
let student = [{ name: "noona", age: 12 }, { name: "johne" }]; // 객체는 배열형태로 받을때 이렇게 사용
let tuple;
tuple = ["noona", 23];
let a = 3;
a = 2;
let b = null;
let c = undefined;
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
