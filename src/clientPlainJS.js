// -- test functionAlity -- //
function funAlity() {
    console.log('Does this function function?'); // eslint-disable-line
}
funAlity();
// -- test functionParameters -- //
function funPara(param1, param2, param3) {
    var age = (param2 + param3);  // eslint-disable-line
    var message = (param1 + age);  // eslint-disable-line
    document.getElementById('playground')
        .innerHTML = message;
}

funPara('I am ', 30, 8); // -- Tried this with "" around I am

// still get errors with all 3 ways of trying it.
// wondering if fns can use strings within parameters
