const triangle = function () {
    let tri = {
        "leg": [],
        "hypotenuse": null,
        "adjacent angle": null,
        "adjacent angle": null,
        "angle": null
    }
    if (arguments[3] == "leg" && arguments[1] == "leg") {
        tri.leg = [arguments[0], arguments[2]];
    }
    else {
        tri[arguments[3]] = arguments[2];
        tri[arguments[1]] = arguments[0];    
    }

    if (tri.leg.length == 2) {
        
    }
}

const solveTwoLeg = function(a, b) {
    let c = Math.sqrt(a * a + b * b);
    let alpha = Math.atan(a / b);
    let beta = 90 - alpha
    
    // check for falseresults here

    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
    console.log(`alpha = ${alpha}`);
    console.log(`beta = ${beta}`);

    return true
}

const solveLegHypotenuse = function() {

}

const solveLegAdjacent = function() {

}

const solveLegOpposite = function() {

}

const solveHypotenuseAndlge = function() {

}
