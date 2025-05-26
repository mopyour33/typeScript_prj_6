var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 1-1번 문제
var userName; // 예: 이름
var userAge; // 예: 나이
var isAdmin; // 예: 관리자 여부
userName = "Alice";
userAge = 25;
isAdmin = true;
// 1-2번 문제
// 변수 선언과 초기값 지정
var productName = "상품명"; // 상품 이름
var productPrice = 1000; // 상품 가격
var isAvailable = true; // 상품 재고 여부
// 예시 출력
console.log("\uC0C1\uD488\uBA85: ".concat(productName, ", \uAC00\uACA9: ").concat(productPrice, ", \uC7AC\uACE0 \uC5EC\uBD80: ").concat(isAvailable));
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
    switch (typeof value) {
        case ("string"): return true;
        case ("number"): return true;
        case ("boolean"): return true;
        case ("undefined"): return true;
        default: return false;
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
var user = {
    name: "Alice",
    isAdmin: true,
};
user = {
    name: "Bob",
    age: 40,
    isAdmin: false,
};
//2-2번 문제
var readonly_list = [1, 2, 3, 4];
// 숫자만 담을 수 있는 읽기 전용 배열을 작성하세요.
// 아래 코드는 오류가 발생해야 합니다.
//numbers.push(4);
//numbers[0] = 42;
//2-3번 문제
var products = [
    ["Laptop", 1000, true],
    ["Shoes", 50, false],
    ["Book", 20, true],
];
// 1. 상품 이름과 가격만 반환,리턴타입 정의필요 
function getProductNamesAndPrices(products) {
    return products.map(function (_a) {
        var name = _a[0], price = _a[1];
        return [name, price];
    });
}
// 2. 재고가 있는 상품만 반환,리턴타입 정의필요 
function getAvailableProducts(products) {
    return products.filter(function (_a) {
        var name = _a[0], price = _a[1], isStock = _a[2];
        return isStock === true;
    });
}
// 여기에 구현
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
    if (user.age === null || user.age === undefined) {
        user.age = 18;
    }
    return __assign(__assign({}, user), { age: (_a = user.age) !== null && _a !== void 0 ? _a : 18 });
}
// 테스트 코드
console.log(updateUser({ name: "Charlie" })); // { name: "Charlie", age: 18 }
console.log(updateUser({ name: "Dana", age: 25 })); // { name: "Dana", age: 25 }
//2-5번 문제
// proudcts 타입정의  필요 
var productss = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Shoes", price: 50, category: "Fashion" },
    { name: "Book", price: 20 },
];
//매개변수, 리턴 타입 정의 필요
function getProductsByCategory(category) {
    return productss.reduce(function (result, product) {
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
var result = {
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
var filter = {
    rate: 2.3,
    review: 3
};
//void
function double(a, b) {
    console.log(a, b);
}
//any,unknown =>any는 다됨(왠만하면 쓰지 말것) , unknown은 최초 값이 들어가는 순간 타입 확정 
var s = 'noona';
var t = 3;
var anyType;
var unknownType;
anyType = "hello";
unknownType = "hello";
console.log(anyType.toUpperCase());
if (typeof unknownType === "string") {
    console.log(unknownType.toUpperCase());
}
//enum을 통해서 타입 및 값을 통제하는게 가능
var gender = "Female" /* Gender.FEMALE */;
var h = { name: 'aoaoao', age: 34 };
var i = { name: 'aoaoao', age: 34 };
var american = { nationality: "american", name: "jacob", age: 23 };
var ameican = { nationality: "american", name: "jacob", age: 23, period: new Date("") };
var g = { name: "asd", age: 12 };
//object는 객체안에 각각 하나에 타입을 지정해줌
var d = {}; //안씀
var e = { name: "noona" }; //읽기만 가능한 속성 => readonly
var f = { name: "noona", age: 23 }; //age 같은 경우는 들어올 수도 있고 안들어올 수 도 있을때 선택적 속성을 활용 => age?:{type}
console.log(e.name);
var fruit = ['banana', 'apple']; // 배열은 뒤에 []만 넣어주면 됨
var numbers = [1, 2, 3, 4]; //이렇게도 배열을 선언할 수 있지만 잘 안씀
var student = [{ name: "noona", age: 12 }, { name: "johne" }]; // 객체는 배열형태로 받을때 이렇게 사용
var tuple;
tuple = ["noona", 23];
var a = 3;
a = 2;
var b = null;
var c = undefined;
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
