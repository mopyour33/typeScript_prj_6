
//12-1번 문제
type User12 = {
  name: string;
  email: string;
  password: string;
};


// 함수 작성
function updateUserForm(
  user: User12,
  updates: Partial<User12>
): User12 {
  // 여기에 구현
  return {...user,...updates};
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
// 기대 출력: { name: "Alice", email: "new-email@example.com", password: "1234" }


//12-2번 문제
type UserProfile = {
  id: number;
  name: string;
  email: string;
  address: string;
};

type Pick12 = Pick<UserProfile, "id" | "name">;

// 함수 작성
function getProfileSummary(
  user: UserProfile
): Pick12 {
  return { "id":user.id, "name":user.name }
}

// 테스트 코드
const userProfile12 = { id: 1, name: "Alice", email: "alice@example.com", address: "123 Main St" };

console.log(getProfileSummary(userProfile12));
// 기대 출력: { id: 1, name: "Alice" }


// 12-3번 문제
type User123 = {
  name: string;
  email: string;
  password: string;
  role: string;
};

type Omit123 = Omit<User123,"password">;

// 함수 작성
function filterSensitiveInfo(
  user123: User123
): Omit123 {
  const {password, ...userInfo} = user123;
  return userInfo;
  // return { "name" : user123.name, "email" : user123.email, "role" : user123.role}
};

// 테스트 코드
const userInfo = { name: "Alice", email: "alice@example.com", password: "1234", role: "admin" };

console.log(filterSensitiveInfo(userInfo));
// 기대 출력: { name: "Alice", email: "alice@example.com", role: "admin" }


// 12-4번 문제
type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: "developer" | "designer" | "manager";
  isActive: boolean;
};


// 1. `createTeamMember` 함수 작성
function createTeamMember(data: Partial<TeamMember>): TeamMember {
  // 여기에 구현
  return {
    "id":data.id,
    "name":data.name,
    "email":data.email,
    "role": data.role || "developer",
    "isActive":data.isActive ?? true
  }
}

// 2. `filterTeamMembers` 함수 작성
function filterTeamMembers(
  members: TeamMember[],
  filter: Pick<TeamMember, "role" | "isActive">, 
): TeamMember[] {
  // 여기에 구현
  return members.filter((member)=> member.role === filter.role && member.isActive === filter.isActive);
}

// 3. `removeSensitiveInfo` 함수 작성
function removeSensitiveInfo(
  members: TeamMember[]
): Omit<TeamMember,"email">[] {
  // 여기에 구현
  const result = members.map(({email,...memberExceptEmail}) => memberExceptEmail );
  return result;
  // let result = [];
  // members.map((member)=> {
  //   let {email, ...memberExceptEmail} = member;
  //   result.push(memberExceptEmail);
  // })  
  // return result;
}

// 테스트 코드
const members: TeamMember[] = [
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
// 기대 출력: [{ id: 1, name: "Alice", role: "developer", isActive: true }, ...]



//14-1번 문제
// 지역 코드 타입 정의
type RegionCode = "US" | "EU" | "ASIA" | "AFRICA";

// 배송비 데이터 정의
const shippingCosts: Record<RegionCode,number> = {
  US: 10,
  EU: 15,
  ASIA: 20,
  AFRICA: 25,
};

// 배송비 계산 함수 작성
function calculateShippingCost(
  region: RegionCode,
  costs: Record<RegionCode,number>
): number {
  // 여기에 구현
  if (!(region in costs)){
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
const scores: Record<string,number> = {
  Alice: 85,
  Bob: 92,
  Charlie: 78,
};

// 평균 점수 계산 함수 작성
function calculateAverageScore(scores: Record<string,number>): number {
  // 여기에 구현
  const keyCount = Object.keys(scores).length;
  return (Object.values(scores)).reduce((sum, score) => sum + score,0)/keyCount;
}

// 테스트 코드
console.log(calculateAverageScore(scores)); // 85



// 14-3번 문제
// 제품 가격 데이터 정의
const prices: Record<string,number> = {
  Laptop: 1000,
  Phone: 500,
  Tablet: 300,
};

// 가격 업데이트 함수 작성
function updateProductPrice(
  prices: Record<string,number>,
  product: string,
  newPrice: number
): Record<string,number> {
  // 여기에 구현
  console.log(product);
  // const update_price = {product:newPrice};
  return {...prices, [product]:newPrice};
}

// 테스트 코드
console.log(updateProductPrice(prices, "Phone", 550));
// 기대 출력: { Laptop: 1000, Phone: 550, Tablet: 300 }