var MyClass = (function () {
    function MyClass() {
        this._count = 0;
    }
    MyClass.prototype.countUp = function () {
        this._count++;
    }
    MyClass.prototype.getCountUp = function () {
        return this._count;
    }
    return MyClass;
}());
var test = new MyClass();
test._count = 17;
console.log("countUp : " + test.getCountUp());