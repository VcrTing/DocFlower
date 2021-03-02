var data = (function() {
    var res = {};

    var name = 'VcrTing'

    function double(n) {
        return n * 2
    }

    res.name = name;
    res.double = double;

    return res;
})()