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
    return array.every(function (item) { return typeof item === "number"; });
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
var userWithDefaults = {
    id: [1, 0],
    name: ["Alice", "Unknown"],
    isActive: [true, false]
};
// 기대 결과:
// type WithDefaults = {
//   id: [number, number];
//   name: [string, string];
//   isActive: [boolean, boolean];
// }
//11-5번 문제
function createObject(key, value) {
    var _a;
    return _a = {}, _a[key] = value, _a;
}
console.log(createObject("id", 123)); // { id: 123 }
console.log(createObject("name", "Alice")); // { name: "Alice" }
// 11-6번 문제
// 매개변수, 리턴 타입 정의 필요 
function pluck(user116, key) {
    return user116.map(function (item) { return item[key]; });
}
// 테스트 코드
var users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];
console.log(pluck(users, "id")); // [1, 2]
console.log(pluck(users, "name")); // ["Alice", "Bob"]
//literal 타입
var direction;
direction = "left";
direction = "right";
var margin;
margin = "margin-right";
function getButtonClass(style) {
    return "btn-".concat(style);
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
// console.log(handleRequestState("unknown")); // 오류 발생
