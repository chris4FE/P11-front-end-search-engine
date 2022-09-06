// Main search filter
function handleRecipe() {
    let recipeArr = [];
    const inputValue = searchInput.value.toLowerCase();
    if (inputValue.length >= 3) {
        for (let i = 0; i <= recipes.length -1; i += 1) {
            const recipeName = recipes[i].name.toLowerCase();
            const recipeDescription = recipes[i].name.toLowerCase();
            if (recipeName.includes(inputValue)) {
                recipeArr.push(recipes[i]);
            } else if (recipeDescription.includes(inputValue)) {
                recipeArr.push(recipes[i]);
            } else {
                for (let j = 0; j <= recipes [i].ingredients.length -1; j += 1) {
                    const recipeIngredients = recipes[i].ingredients[j].ingredients.toLowerCase();
                    if (recipeIngredients.includes(inputValue)) {
                        recipeArr.push(recipes[i]);
                        break;
                    }
                }
            }
        }
    }
}