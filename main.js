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
function calculateDiscountedPrice(item) {
    return item.price * (1 - item.discountPercentage / 100);
}
// 테스트 코드
var discountedProduct6 = {
    id: 101,
    name: "Laptop",
    price: 1000,
    discountPercentage: 20,
};
console.log(calculateDiscountedPrice(discountedProduct6)); // 800
function printOrderSummary(order) {
    return "(order: ".concat(order.orderId, ") (Phone: ").concat(order.phone, ")");
}
// 테스트 코드
var orderDetails = {
    phone: "123-456-7890",
    address: "123 Main St",
    orderId: 2023,
    items: ["Laptop", "Mouse"]
};
console.log(printOrderSummary(orderDetails)); // "Order 2023 (Phone: 123-456-7890)"
// 사용자 데이터를 병합하는 함수
function mergeUserData(profile, activity) {
    return __assign(__assign({}, profile), activity);
}
// 사용자 요약 정보를 반환하는 함수
function getUserSummary(user) {
    return "\uC0AC\uC6A9\uC790 [".concat(user.id, "] - [").concat(user.name, "]([").concat(user.email, "]) - \uB9C8\uC9C0\uB9C9 \uB85C\uADF8\uC778: [").concat(user.lastLogin, "]");
}
// 테스트 코드
var profile = { id: 1, name: "Alice", email: "alice@example.com" };
var activity = {
    lastLogin: new Date("2024-01-01T10:00:00Z"),
    actions: ["login", "viewed dashboard", "logout"],
};
var mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser));
// 출력 예시: "사용자 1 - Alice (alice@example.com) - 마지막 로그인: 2024-01-01T10:00:00Z"
// 9-1번 문제
// 매개변수, 리턴타입 정의필요 
function processInput(input) {
    if (Array.isArray(input)) {
        if (typeof input[0] === "number") {
            return input.reduce(function (result9, input_num) { return result9 + input_num; }, 0);
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
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    return Car;
}());
var Bike = /** @class */ (function () {
    function Bike(type) {
        this.type = type;
    }
    return Bike;
}());
function processVehicle(vehicle) {
    if (vehicle instanceof Car) {
        return vehicle.brand.toUpperCase();
    }
    else if (vehicle instanceof Bike) {
        return "Bike: ".concat(vehicle.type);
    }
    else
        throw new Error("에러 발생");
}
// 테스트 코드
var myCar = new Car("Tesla");
var myBike = new Bike("Mountain");
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
        return "undefined";
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
    else if (shape) {
        return Math.pow(shape.radius, 2) * Math.PI;
    }
    else {
        return 0;
    }
}
// 테스트 코드
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)
// 넓이를 계산하는 함수
function calculateArea1(shape) {
    switch (shape.type) {
        case ("square"): return Math.pow(shape.side, 2);
        case ("circle"): return Math.pow(shape.radius, 2) * Math.PI;
        default:
            var exhaustive_check = shape;
            throw new Error("해당 타입이 없습니다.");
    }
    // 여기에 구현
}
// 테스트 코드
console.log(calculateArea1({ type: "square", side: 5 })); // 기대 출력: 25
console.log(calculateArea1({ type: "circle", radius: 7 })); // 기대 출력: 153.93804002589985
var user = {
    id: 1,
    name: "Alice",
};
var userWithEmail = {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
};
// User 타입을 사용하여 아래 객체를 작성하세요.
var user2 = {
    id: 1,
    name: "Alice",
    address: {
        city: "Seoul",
        zipCode: 12345,
    },
};
console.log(user2);
var normalUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
var adminUser = {
    id: 2,
    name: "Bob",
    role: "Administrator",
};
console.log(adminUser);
var normalProduct = {
    id: 1,
    name: "Laptop",
    price: 1000,
};
var discountedProduct = {
    id: 2,
    name: "Smartphone",
    price: 800,
    discount: 10,
};
// Order 타입을 사용하여 아래 객체를 작성하세요.
var order = {
    orderId: 101,
    products: [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Mouse", price: 50 },
    ],
    totalPrice: 1050,
};
// 아래 객체를 작성하세요.
var admin = {
    id: 1,
    name: "Alice",
    role: "Administrator",
};
var guest = {
    id: 2,
    name: "Bob",
    visitCount: 5,
};
function getStatusMessage(status) {
    switch (status) {
        case ("\uC791\uC5C5\uC774 \uB300\uAE30\uC911\uC785\uB2C8\uB2E4" /* TaskStatus.Pending */): return "작업이 대기중입니다";
        case ("\uC791\uC5C5\uC774 \uC9C4\uD589 \uC911\uC785\uB2C8\uB2E4" /* TaskStatus.InProgress */): return "작업이 진행 중입니다";
        case ("\uC791\uC5C5\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4" /* TaskStatus.Completed */): return "작업이 완료되었습니다";
        default: return "";
    }
}
// 테스트 코드
console.log(getStatusMessage("\uC791\uC5C5\uC774 \uB300\uAE30\uC911\uC785\uB2C8\uB2E4" /* TaskStatus.Pending */)); // "작업이 대기 중입니다."
console.log(getStatusMessage("\uC791\uC5C5\uC774 \uC9C4\uD589 \uC911\uC785\uB2C8\uB2E4" /* TaskStatus.InProgress */)); // "작업이 진행 중입니다."
console.log(getStatusMessage("\uC791\uC5C5\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4" /* TaskStatus.Completed */)); // "작업이 완료되었습니다."
//4-2번 문제
// 로그 수준을 나타내는 enum 작성
var TaskStatus1;
(function (TaskStatus1) {
    TaskStatus1["Pending"] = "\uC791\uC5C5 \uB300\uAE30 \uC911";
    TaskStatus1["InProgress"] = "\uC791\uC5C5 \uC9C4\uD589 \uC911";
    TaskStatus1["Completed"] = "\uC791\uC5C5 \uC644\uB8CC";
    TaskStatus1["Failed"] = " \uC791\uC5C5\uC2E4\uD328";
})(TaskStatus1 || (TaskStatus1 = {}));
function processTask1(status, input) {
    if (typeof input !== "string") {
        throw new Error("입력값은 문자열이어야 합니다.");
    }
    switch (status) {
        case TaskStatus1.Pending: return input.toUpperCase();
        case TaskStatus1.InProgress: return input.toLowerCase();
        case TaskStatus1.Completed: return "\uC644\uB8CC:".concat(input);
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
var logMessage = function (message, level) {
    switch (level) {
        case LogM.Info:
            console.log("[info] ".concat(message));
            break;
        case LogM.Error:
            console.log("[Error] ".concat(message));
            break;
        case LogM.Debug:
            console.log("[Debus] ".concat(message));
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
    return __assign(__assign({}, user), { age: (_a = user.age) !== null && _a !== void 0 ? _a : 18 });
}
// 테스트 코드
console.log(updateUser({ name: "Charlie" })); // { name: "Charlie", age: 18 }
console.log(updateUser({ name: "Dana", age: 25 })); // { name: "Dana", age: 25 }
//2-5번 문제
// products 타입정의  필요 
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
var numberArray = [1, 2, 3];
var StringArray = ["a", "b", "c"];
var movie1 = { title: "기생충", genre: "액션" };
var movie2 = { rate: 2 };
var pair = {
    first: "noona",
    second: 2,
    display: function () {
        console.log(this.first + "는 " + this.second + "살 입니다.");
    },
};
pair.display();
//literal 타입
var direction;
direction = "left";
direction = "right";
var margin;
margin = "margin-right";
var userProfile = {
    id: 2,
    name: "noona",
    email: "asdf",
    // age:23,
    // password="3"
};
var updateAddress = function (address) {
    console.log(address);
};
updateAddress({ street: "234", city: "incheon", country: "KR" });
var example = {
    apple: 3,
    orange: 5,
    mango: 5
};
var fruitColor = {
    apple: "red",
    orange: "orange",
    mango: "green"
};
var inventoryResponse = {
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
