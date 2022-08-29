// // // fetch data from json file


// class Api {
//     constructor(url) {
//         this.url = url
//     }

//     async get() {
//         return fetch(this.url)
//         .then(res => res.json)
//         .catch(err => console.log('Error', err))
//     }
// }

// class RecipesApi extends Api {
//     constructor(url) {
//         super(url);
//     }

//     async getRecipes() {
//         return await this.get()
//     }
// }




// // let photos;
// // async function getPhotos() {

// //     await fetch("../../data/recipes.json")
// //     .then((res) => res.json())
// //     .then((data) => (photos = data.photo));

// //     return({
// //         photos: [...photos],
        
// //     })
// // }

// // // async function displayPhotos


// // async function initPhotos() {
// //     const { photos } = await getPhotos();
// //     displayPhotos(photos);
// // }

// // initPhotos();


// // fetch data from json file
// let ingredients;
// async function getIngredients() {

//     await fetch("../../data/recipes.json")
//     .then((res) => res.json())
//     .then((data) => console.log(data.ingredients))
//     // .then((data) => (ingredients = data.ingredient));

//     return({
//         ingredients: [...ingredients],
        
//     })
// }

// // async function displayData(ingredients) {
// //     const ingredientsSection = document.querySelector(".ingredients-section");

// //     ingredients.forEach((ingredient) => {
// //         const ingredientModel = ingredientFactory(ingredient);
// //         const ingredientCardDOM = ingredientModel.getIngredientCardDOM();
// //         ingredientsSection.appendChild(ingredientCardDOM);
// //     });
// // }

// // async function initGetIngredients() {
// //     const { ingredients } = await getIngredients();
// //     displayData(ingredients);
// // }

// // initGetIngredients();