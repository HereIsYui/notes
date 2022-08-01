let a: number = 10;
// 可以使用 | 来连接多个类型（联合类型）
let b: "male" | "femail";
b = "male";

let c: unknown;
c = 10;
c = true;
c = "hello";

if (typeof c === "number") {
    a = c;
}

// 
a = c as number;
a = <number>c;