function* generator_function() {
    try {
        yield 1;
    } catch (e) {
        console.log('1st Exception');
    }

    try {
        yield 2;
    } catch (e) {
        console.log('2nd Exception');
    }
}

var generator = generator_function();

console.log(generator.next().value);
console.log(generator.throw('first exception').value);
console.log(generator.throw('exception string').done);