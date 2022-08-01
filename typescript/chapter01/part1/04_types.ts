// object 表示一个js对象
let a: object;
a = {};
a = function () { };


// {}指定对象中可以包含哪些属性
// 在属性后面加?，表示属性是可选的
let b: { name: string, age?: number };

b = { name: "haha", age: 12 };
b = { name: "yui" };

// [propName: string]: any 表示任意类型的属性
let c: { name: string, [propName: string]: any };
c = { name: 'hahaha', a: 1, b: 2 }

// 设置函数结构的类型声明
let d: (a: number, b: number) => number;
d = function (n1, n2) {
    return n1 + n2
}

// string[] 表示字符串数组
let e: string[];
e = ["a", "b", "c"];

let f: Array<string>;
f = ["a", "b", "c"];

// 元组：固定长度的数组
let h: [string, number];
h = ["hello", 12];

// enum 枚举
enum Gender {
    Male,
    Female
}
let i: { name: string, gender: Gender };
i = {
    name: 'aaaa',
    gender: Gender.Male
}

console.log(i.gender === Gender.Male);

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
k = 5;
