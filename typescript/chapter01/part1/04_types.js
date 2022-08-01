// object 表示一个js对象
var a;
a = {};
a = function () { };
// {}指定对象中可以包含哪些属性
// 在属性后面加?，表示属性是可选的
var b;
b = { name: "haha", age: 12 };
b = { name: "yui" };
// [propName: string]: any 表示任意类型的属性
var c;
c = { name: 'hahaha', a: 1, b: 2 };
// 设置函数结构的类型声明
var d;
d = function (n1, n2) {
    return n1 + n2;
};
// string[] 表示字符串数组
var e;
e = ["a", "b", "c"];
var f;
f = ["a", "b", "c"];
// 元组：固定长度的数组
var h;
h = ["hello", 12];
// enum 枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: 'aaaa',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
