

var STANDARD = 0;
var EGG = 1;
var scalings = {}
scalings[STANDARD] = standard
scalings[EGG] = egg

function apply(ingredient) {
    return scalings[ingredient.scaling](ingredient)
}

var exampleRecipe = {

    title: "Obstsalat",
    text: "do x and then do y",
    ingredients: [
        // what, amount in g, scaling acc, steps, einheit?
        {what: "Apfel", amount: 1000, scaling: STANDARD, factor: 80},
        {what: "Banane", amount: 650, scaling: EGG, factor: 80},
    ],


}

class Recipe {
    constructor(title, text, ingredients) {
        this.title = title
        this.text = text
        this.ingredients = ingredients
    }
}

function standard(ingredient) {
    return Math.round(ingredient.amount / ingredient.factor) * ingredient.factor
}

function egg(ingredient) {
    return Math.round(ingredient / ingredient.factor)
}

export {exampleRecipe, Recipe}