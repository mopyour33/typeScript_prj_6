var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// 함수 작성
function updateUserForm(user, updates) {
    // 여기에 구현
    return Object.assign(Object.assign({}, user), updates);
    // const user_key = Object.keys(user);
    // const update_key = Object.keys(updates);
    // const common_key = update_key.filter(item => {console.log(item); return user_key.includes(item)});
    // console.log(common_key);
    // const updates_user:User12 = {...user};
    // for (const key of common_key){
    //   console.log(key);
    //   updates_user[key] = updates[key];
    // } 
    // return updates_user;
}
// 테스트 코드
const currentUser = { name: "Alice", email: "alice@example.com", password: "1234" };
const updatedForm = { email: "new-email@example.com" };
console.log(updateUserForm(currentUser, updatedForm));
// 함수 작성
function getProfileSummary(user) {
    return { "id": user.id, "name": user.name };
}
// 테스트 코드
const userProfile12 = { id: 1, name: "Alice", email: "alice@example.com", address: "123 Main St" };
console.log(getProfileSummary(userProfile12));
// 함수 작성
function filterSensitiveInfo(user123) {
    const { password } = user123, userInfo = __rest(user123, ["password"]);
    return userInfo;
    // return { "name" : user123.name, "email" : user123.email, "role" : user123.role}
}
;
// 테스트 코드
const userInfo = { name: "Alice", email: "alice@example.com", password: "1234", role: "admin" };
console.log(filterSensitiveInfo(userInfo));
// 1. `createTeamMember` 함수 작성
function createTeamMember(data) {
    var _a;
    // 여기에 구현
    return {
        "id": data.id,
        "name": data.name,
        "email": data.email,
        "role": data.role || "developer",
        "isActive": (_a = data.isActive) !== null && _a !== void 0 ? _a : true
    };
}
// 2. `filterTeamMembers` 함수 작성
function filterTeamMembers(members, filter) {
    // 여기에 구현
    return members.filter((member) => member.role === filter.role && member.isActive === filter.isActive);
}
// 3. `removeSensitiveInfo` 함수 작성
function removeSensitiveInfo(members) {
    // 여기에 구현
    const result = members.map((_a) => {
        var { email } = _a, memberExceptEmail = __rest(_a, ["email"]);
        return memberExceptEmail;
    });
    return result;
    // let result = [];
    // members.map((member)=> {
    //   let {email, ...memberExceptEmail} = member;
    //   result.push(memberExceptEmail);
    // })  
    // return result;
}
// 테스트 코드
const members = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "developer", isActive: true },
    { id: 2, name: "Bob", email: "bob@example.com", role: "designer", isActive: false },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "manager", isActive: true },
];
// // 1. 새 팀원 생성
const newMember = createTeamMember({ id: 4, name: "Diana" });
console.log(newMember);
// 기대 출력: { id: 4, name: "Diana", email: "", role: "developer", isActive: true }
// // 2. 필터링된 팀원 목록
const activeDesigners = filterTeamMembers(members, { role: "designer", isActive: true });
console.log(activeDesigners);
// 기대 출력: []
// 3. 민감한 정보 제거
const sanitizedMembers = removeSensitiveInfo(members);
console.log(sanitizedMembers);
// 배송비 데이터 정의
const shippingCosts = {
    US: 10,
    EU: 15,
    ASIA: 20,
    AFRICA: 25,
};
// 배송비 계산 함수 작성
function calculateShippingCost(region, costs) {
    // 여기에 구현
    if (!(region in costs)) {
        throw new Error("해당 지역은 존재하지 않습니다");
    }
    return costs[region];
}
// 테스트 코드
console.log(calculateShippingCost("US", shippingCosts)); // 10
console.log(calculateShippingCost("EU", shippingCosts)); // 15
console.log(calculateShippingCost("ASIA", shippingCosts)); // 20
console.log(calculateShippingCost("AFRICA", shippingCosts)); // 25
// console.log(calculateShippingCost("AUSTRALIA", shippingCosts)); // 에러 발생
// 14-2번 문제
// 학생 점수 데이터 정의
const scores = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
};
// 평균 점수 계산 함수 작성
function calculateAverageScore(scores) {
    // 여기에 구현
    const keyCount = Object.keys(scores).length;
    return (Object.values(scores)).reduce((sum, score) => sum + score, 0) / keyCount;
}
// 테스트 코드
console.log(calculateAverageScore(scores)); // 85
// 14-3번 문제
// 제품 가격 데이터 정의
const prices = {
    Laptop: 1000,
    Phone: 500,
    Tablet: 300,
};
// 가격 업데이트 함수 작성
function updateProductPrice(prices, product, newPrice) {
    // 여기에 구현
    console.log(product);
    // const update_price = {product:newPrice};
    return Object.assign(Object.assign({}, prices), { [product]: newPrice });
}
// 테스트 코드
console.log(updateProductPrice(prices, "Phone", 550));
// 기대 출력: { Laptop: 1000, Phone: 550, Tablet: 300 }
