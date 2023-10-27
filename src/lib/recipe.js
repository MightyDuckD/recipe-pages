

var STANDARD = 0;
var EGG = 1;
var scalings = {}
scalings[STANDARD] = standard
scalings[EGG] = egg

function apply(ingredient) {
    return scalings[ingredient.scaling](ingredient)
}

var recipe = {

    title: "test",
    text: "do x and then do y",
    ingredients: [
        // what, amount in g, scaling acc, steps, einheit?
        {what: "Apfel", amount: 1000, scaling: STANDARD, factor: 80},
        {what: "Banane", amount: 650, scaling: EGG, factor: 80},
    ],


}


function standard(ingredient) {
    return Math.round(ingredient.amount / ingredient.factor) * ingredient.factor
}

function egg(ingredient) {
    return Math.round(ingredient / ingredient.factor)
}