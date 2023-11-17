const recipes = [
    {
        nameFood: "Chili Con Carne",
        person: 4,
        type: "Mexican",
        time: "40 min",
        difficulty: "Easy",
        imageSRC: "./Images/chiliconcarne.jpg",
        ingredients: ["rice", "black bean", "hash meat", "peper", "onion", "butter", "chili powder", "cumin powder"],
        ustensils: ["Hoven", "casserole", "balance", "lid", "knive", "cutting board", "ladle"]
    },
    {
        nameFood: "Pizza Margherita",
        person: 2,
        type: "Italian",
        time: "30 min",
        difficulty: "Easy",
        imageSRC: "./Images/pizzamargherita.webp",
        ingredients: ["flour", "water", "yeast", "salt", "tomato", "sugar", "mozzarella", "oregano"],
        ustensils: ["Hoven", "balance", "mixing bowl"]
    }, 
    {
        nameFood: "Mushroom Pasta",
        person: 2,
        type: "Belgian",
        time: "20 min",
        difficulty: "Easy",
        imageSRC: "./Images/mushroompasta.webp",
        ingredients: ["pasta", "Cream 15%", "mushroom", "peper", "salt", "butter"],
        ustensils: ["casserole", "lid", "knive", "cutting board"]
    }, 
    {
        nameFood: "Bolognese Pasta",
        person: 4,
        type: "Italian",
        time: "40 min",
        difficulty: "Easy",
        imageSRC: "./Images/pastabolognese.jpg",
        ingredients: ["Spaghetti", "Tomato concentrate", "hash meat", "peper", "onion", "butter", "carrot", "oregano", "vino rosso"],
        ustensils: ["casserole", "balance", "lid", "knive", "cutting board", "ladle"]
    }, 
    {
        nameFood: "Croque-Monsieur",
        person: 1,
        type: "French",
        time: "15 min",
        difficulty: "Easy",
        imageSRC: "./Images/croquemonsieur.jpg",
        ingredients: ["bread", "ham", "emmental", "butter"],
        ustensils: ["pan", "spatula"]
    }, 
]

function searchIngredients() {
    $("#images-grid").empty();
    var searchInput = $("#input").val().toLowerCase();

    var foodNone = "There is no results for this ingredients.";

    for (var i = 0; i < recipes.length; i++) {
        if (
            searchInput === recipes[i].nameFood.toLowerCase() ||
            recipes[i].ingredients.some(
                (ingredient) => ingredient.toLowerCase() === searchInput
                )
        ) {
            $("#images-grid").append("<p>" + "Name: " + recipes[i].nameFood
            + "<br/>" + "Type: " + recipes[i].type
            + "<br/>" + "Number of persons: " + recipes[i].person
            + "<br/>" + "Time: " + recipes[i].time
            + "<br/>" + "Difficulty: " + recipes[i].difficulty + "</p>"
            + "<br/>" + "<a href='./recipepage.html'><img class='images-recipe' src='" + recipes[i].imageSRC + "'/></a>"
            );
        }
    }
    if ($("#images-grid").is(":empty")) {
        $("#images-grid").append("<p>" + foodNone + "</p>");
    }
};


$(document).ready(function() {
    $("#search-recipe").submit(function(event) {
        searchIngredients();
        event.preventDefault();
    });
});
