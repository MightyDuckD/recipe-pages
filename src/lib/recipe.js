var STANDARD = 0;
var EGG = 1;
var scalings = {}
scalings[STANDARD] = standard
scalings[EGG] = egg

function apply(ingredient) {
    return scalings[ingredient.scaling](ingredient)
}



class Recipe {
    constructor(title, text, ingredients = [], steps = []) {
        this.title = title
        this.text = text
        this.ingredients = ingredients
        this.steps = steps
    }
}

class RecipeIngredient {
    constructor(what, amount, scaling) {
        this.what = what;
        this.amount = amount;
        this.scaling = scaling;
    }
}

class RecipeStep {
    constructor(desc, text) {
        this.desc = desc;
        this.text = text;
    }
}

function standard(ingredient) {
    return Math.round(ingredient.amount / ingredient.factor) * ingredient.factor
}

function egg(ingredient) {
    return Math.round(ingredient / ingredient.factor)
}

var exampleRecipe = {

    title: "Obstsalat",
    text: "do x and then do y",
    ingredients: [
        // what, amount in g, scaling acc, steps, einheit?
        {what: "Apfel", amount: 1000, scaling: STANDARD, factor: 80},
        {what: "Banane", amount: 650, scaling: EGG, factor: 80},
        {what: "Yoghurt", amount: 1000, scaling: STANDARD, factor: 100}
    ],
    steps: [
        new RecipeStep("cut salad", "cut @0 and @1 in bite size pieces"),
        new RecipeStep("prepare salad", "mix @s0 and @2 in a large bowl"),
    ]
}

export {exampleRecipe, Recipe, RecipeIngredient, RecipeStep}