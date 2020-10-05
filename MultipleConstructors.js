function Foobar(foobar) {
    this.foobar = foobar;
}

Foobar.prototype = {
    foobar: null
};

Foobar.fromComponents = function(foo, bar) {
    var foobar = `${foo} ${bar}` ;
    return new Foobar(foobar);
};

var empty = Foobar.prototype;
console.log(empty);

var foo = new Foobar('John');
console.log(foo);

var bar = Foobar.fromComponents('Jane', 'Smith');
console.log(bar);
