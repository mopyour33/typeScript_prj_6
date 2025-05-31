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
    return __assign(__assign({}, user), updates);
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
var currentUser = { name: "Alice", email: "alice@example.com", password: "1234" };
var updatedForm = { email: "new-email@example.com" };
console.log(updateUserForm(currentUser, updatedForm));
// 함수 작성
function getProfileSummary(user) {
    return { "id": user.id, "name": user.name };
}
// 테스트 코드
var userProfile12 = { id: 1, name: "Alice", email: "alice@example.com", address: "123 Main St" };
console.log(getProfileSummary(userProfile12));
// 함수 작성
function filterSensitiveInfo(user123) {
    var password = user123.password, userInfo = __rest(user123, ["password"]);
    return userInfo;
    // return { "name" : user123.name, "email" : user123.email, "role" : user123.role}
}
;
// 테스트 코드
var userInfo = { name: "Alice", email: "alice@example.com", password: "1234", role: "admin" };
console.log(filterSensitiveInfo(userInfo));
// 1. `createTeamMember` 함수 작성
function createTeamMember(data) {
    var _a, _b, _c, _d;
    // 여기에 구현
    return {
        "id": data.id,
        "name": (_a = data.name) !== null && _a !== void 0 ? _a : '',
        "email": (_b = data.email) !== null && _b !== void 0 ? _b : '',
        "role": (_c = data.role) !== null && _c !== void 0 ? _c : "developer",
        "isActive": (_d = data.isActive) !== null && _d !== void 0 ? _d : true
    };
}
// 2. `filterTeamMembers` 함수 작성
function filterTeamMembers(members, filter) {
    // 여기에 구현
    return members.filter(function (member) { return member.role === filter.role && member.isActive === filter.isActive; });
}
// 3. `removeSensitiveInfo` 함수 작성
function removeSensitiveInfo(members) {
    // 여기에 구현
    var result = members.map(function (_a) {
        var email = _a.email, memberExceptEmail = __rest(_a, ["email"]);
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
var members = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "developer", isActive: true },
    { id: 2, name: "Bob", email: "bob@example.com", role: "designer", isActive: false },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "manager", isActive: true },
];
// // 1. 새 팀원 생성
var newMember = createTeamMember({ id: 4, name: "Diana" });
console.log(JSON.stringify(newMember, null, 2));
console.log('email:', newMember.email);
// console.log(newMember);
// 기대 출력: { id: 4, name: "Diana", email: "", role: "developer", isActive: true }
// // 2. 필터링된 팀원 목록
var activeDesigners = filterTeamMembers(members, { role: "designer", isActive: true });
console.log(activeDesigners);
// 기대 출력: []
// 3. 민감한 정보 제거
var sanitizedMembers = removeSensitiveInfo(members);
console.log(sanitizedMembers);
// 배송비 데이터 정의
var shippingCosts = {
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
var scores = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
};
// 평균 점수 계산 함수 작성
function calculateAverageScore(scores) {
    // 여기에 구현
    var keyCount = Object.keys(scores).length;
    return (Object.values(scores)).reduce(function (sum, score) { return sum + score; }, 0) / keyCount;
}
//테스트 코드
console.log(calculateAverageScore(scores)); // 85
// 14-3번 문제
// 제품 가격 데이터 정의
var prices = {
    Laptop: 1000,
    Phone: 500,
    Tablet: 300,
};
// 가격 업데이트 함수 작성
function updateProductPrice(prices, product, newPrice) {
    var _a;
    // 여기에 구현
    console.log(product);
    // const update_price = {product:newPrice};
    return __assign(__assign({}, prices), (_a = {}, _a[product] = newPrice, _a));
}
// 테스트 코드
console.log(updateProductPrice(prices, "Phone", 550));
// 기대 출력: { Laptop: 1000, Phone: 550, Tablet: 300 }
