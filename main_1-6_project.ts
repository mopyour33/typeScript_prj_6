//15-1번 문제
type ExtractReturnType<F> = F extends (...args: any[]) => infer R ? R : never;

// 테스트 코드
type Test1 = ExtractReturnType<() => string>; // 기대 결과: string
type Test2 = ExtractReturnType<(x: number) => boolean>; // 기대 결과: boolean
type Test3 = ExtractReturnType<(x: number, y: string) => { id: number }>; // 기대 결과: { id: number }


// 15-2번 문제
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key] as T[K];
}

// 테스트 코드
const user152 = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

console.log(getValue(user152, "name")); // "Alice"
console.log(getValue(user152, "email")); // "alice@example.com"


// 15-3번 문제
type RequestData<T> = T extends "text" ? string : T extends "json" ? Record<string,any> : T extends "binary" ? Uint8Array : never;

function processRequest<T extends "text" | "json" | "binary">(
  type: T,
  data: RequestData<T>
): string {
  if (type === "text") {
   return `Proceed: ${data}`; 
  }
  else if (type === "json") {
    return `Proceed: ${JSON.stringify(data)}`;
  }
  else if (type === "binary") {
    return `Proceed: ${(data as Uint8Array).join(",")}`
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




