(function () {
    // 定义一个表示人的类
    class Person {
        // TS可以在属性前添加属性的修饰符
        /**
         * public 修饰的属性可以在任意位置访问(修改) 默认值
         * private 私有属性，只能在类内部进行访问(修改)
         *  - 通过在类中添加方法使得私有属性可以被外部访问
         * protected 受保护的属性，只能在当前类和当前类的子类中访问
         * */
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        /**
         * getter 方法用来读取属性
         * setter 方法用来设置属性
         *   - 它们被称为属性的存取器
         * */
        // TS中设置getter方法
        get name() {
            return this._name;
        }

        set name(value) {
            this._name = value;
        }

        get age() {
            return this._age;
        }

        set age(value) {
            this._age = value >= 0 ? value : this._age;
        }
    }

    const per = new Person('哈哈', 20);
    /**
     * 现在属性是在对象中设置的，属性可以任意的被修改
     * 属性可以任意被修改将会导致对象中的数据变得非常不安全
     * */
    per.name = "孙悟空";
    per.age = -10;
    console.log(per);

    class A {
        protected num: number;

        constructor(num: number) {
            this.num = num;
        }
    }

    class B extends A {
        this() {
            console.log(this.num);
        }
    }

    const b = new B(123);
    // b.num = 33;

    class C{
        constructor(public name:string,public age:number) {

        }
    }
    const c = new C('aaa',123)
    console.log(c);
})()