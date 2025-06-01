// 15-2번 문제
function getValue(obj, key) {
    return obj[key];
}
// 테스트 코드
var user152 = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
console.log(getValue(user152, "name")); // "Alice"
console.log(getValue(user152, "email")); // "alice@example.com"
function processRequest(type, data) {
    if (type === "text") {
        return "Proceed: ".concat(data);
    }
    else if (type === "json") {
        return "Proceed: ".concat(JSON.stringify(data));
    }
    else if (type === "binary") {
        return "Proceed: ".concat(data.join(","));
    }
    throw new Error("지원하지 않는 타입입니다.");
    // switch(type){
    //   case ("text") : return `Proceed: ${data}`;
    //   case ("json") : return `Proceed: ${data}`;
    //   case ("binary") : return `Proceed: ${data.join(",")}`;
    // }
}
// 테스트 코드
console.log(processRequest("text", "Hello")); // "Processed: Hello"
console.log(processRequest("json", { key: "value" })); // "Processed: [object Object]"
console.log(processRequest("binary", new Uint8Array([72, 101, 108, 108, 111]))); // "Processed: 72,101,108,108,111"
