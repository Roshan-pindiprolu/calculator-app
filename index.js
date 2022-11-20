function addMyAddition() {
    var value1 = document.getElementById("inputPassword1").value;
    var value2 = document.getElementById("inputPassword2").value;
    var add = parseInt(value1) + parseInt(value2);
    console.log(parseInt(add));
    var message = "The sum of "+value1+" and "+value2+" is "+add;
    document.getElementById("addValue").innerHTML = message;
}

function addMySubtraction() {
    var value1 = document.getElementById("inputPassword1").value;
    var value2 = document.getElementById("inputPassword2").value;
    var subtract = parseInt(value1) - parseInt(value2);
    console.log(parseInt(subtract));
    var message = "The subtraction of "+value1+" and "+value2+" is "+subtract;
    document.getElementById("subtractValue").innerHTML = message;
}

function addMyMultiply() {
    var value1 = document.getElementById("inputPassword1").value;
    var value2 = document.getElementById("inputPassword2").value;
    var multiply = parseInt(value1) * parseInt(value2);
    console.log(parseInt(multiply));
    var message = "The multiplication of "+value1+" and "+value2+" is "+multiply;
    document.getElementById("multiplicationValue").innerHTML = message;
}

function addMyDivision() {
    var value1 = document.getElementById("inputPassword1").value;
    var value2 = document.getElementById("inputPassword2").value;
    var divsion = parseInt(value1) / parseInt(value2);
    console.log(parseInt(divsion));
    var message = "The divsion of "+value1+" and "+value2+" is "+divsion;
    document.getElementById("divideValue").innerHTML = message;
}

function addMyRemainder() {
    var value1 = document.getElementById("inputPassword1").value;
    var value2 = document.getElementById("inputPassword2").value;
    var remainder = parseInt(value1) % parseInt(value2);
    console.log(parseInt(remainder));
    var message = "The remainder of "+value1+" and "+value2+" is "+remainder;
    document.getElementById("remainderValue").innerHTML = message;
}