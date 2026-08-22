// =====================================================
// 1. TYPE ALIAS
// =====================================================

// User নামে একটি type তৈরি করলাম
type User = {
  name: string;
  age: number;
};

// Role নামে আরেকটি type তৈরি করলাম
type Role = {
  role: "admin" | "user";
};

type Language = {
  language: "JavaScript" | "Python";
};

// -----------------------------------------------------
// Type Intersection (&)
// -----------------------------------------------------

// User + Role দুইটি type combine করে নতুন type তৈরি হচ্ছে
//
// User এর properties:
// name
// age
//
// Role এর property:
// role
//
// তাই UserWithRole এর structure হবে:
// {
//   name: string;
//   age: number;
//   role: "admin" | "user";
// }



type UserWithRole = User & Role;


type UserWithRoleAndLang = User & Role & Language;

// UserWithRole এখন ব্যবহার করা হচ্ছে
const userOne: UserWithRole = {
  name: "Winter Spring",
  age: 74,
  role: "admin"
};

const userTwo: UserWithRole = {
  name: "Clouds",
  age: 55,
  role: "user"
};



// =====================================================
// 2. INTERFACE
// =====================================================

// User নামে একটি interface তৈরি করলাম



// -----------------------------------------------------
// Interface extends
// -----------------------------------------------------

// UserWithRoleInterface, UserInterface-কে extends করছে
//
// অর্থাৎ UserInterface-এর সব property এখানে চলে আসবে:
//
// name
// age
//
// তারপর আমরা নতুন property যোগ করছি:
//
// role
//
// Final structure:
//
// {
//   name: string;
//   age: number;
//   role: "admin" | "user";
// }
interface UserInterface {
  name: string;
  age: number;
}

interface UserLanguage {
    type:Language;
}


interface UserWithRole extends UserInterface {
  role: "admin" | "user";
}

interface UserWithRoleAndLang extends UserLanguage{
    language: "Javascript" | "Python"
}



// UserWithRoleInterface এখন ব্যবহার করা হচ্ছে
const userThree: UserWithRole = {
  name: "Winter Spring",
  age: 74,
  role: "admin"
};

const userFour: UserWithRole = {
  name: "Clouds",
  age: 55,
  role: "user"
};

const userFIve: UserWithRoleAndLang = {
    name:"Front End",
    age:17,
    role:"admin",
    language:"JavaScript"

};


// =====================================================
// 3. TYPE ALIAS - BOOLEAN
// =====================================================

// IsAdmin নামে একটি type তৈরি করলাম
type IsAdmin = boolean;

// এখন IsAdmin type ব্যবহার করছি
const isAdmin: IsAdmin = false;


// =====================================================
// 4. FUNCTION TYPE
// =====================================================

// Add নামে একটি function type তৈরি করলাম
//
// Function অবশ্যই:
// - দুইটি number parameter নেবে
// - number return করবে

type Add = (num1: number, num2: number) => number;


// Add type ব্যবহার করে function তৈরি করছি
const add: Add = (num1, num2) => {
  return num1 + num2;
};


// =====================================================
// 5. FUNCTION TYPE WITH INTERFACE
// =====================================================

// Interface দিয়েও function-এর structure define করা যায়
interface AddFunction {
  (num1: number, num2: number): number;
}


// AddFunction interface ব্যবহার করছি
const addTwo: AddFunction = (num1, num2) => {
  return num1 + num2;
};


// =====================================================
// 6. ARRAY TYPE
// =====================================================

// Friends নামে string array-এর type তৈরি করলাম
type Friends = string[];


// এখন Friends type ব্যবহার করছি
const friends: Friends = ["A", "B", "C"];


// =====================================================
// 7. ARRAY TYPE WITH INTERFACE
// =====================================================

// Interface দিয়েও array-এর structure define করা যায়
//
// index number হবে
// এবং প্রতিটি index-এর value string হবে
//
// যেমন:
// friends[0] → string
// friends[1] → string
// friends[2] → string

interface FriendsArray {
  [index: number]: string;
}


// FriendsArray interface ব্যবহার করছি
const friendsTwo: FriendsArray = ["A", "B", "C"];


// =====================================================
// OUTPUT
// =====================================================




console.log(friends);
console.log(add(5, 6));

console.log(userOne);
console.log(userTwo);

console.log(userThree);
console.log(userFour);

console.log(addTwo(10, 20));

console.log(friendsTwo);
console.log(userFIve)