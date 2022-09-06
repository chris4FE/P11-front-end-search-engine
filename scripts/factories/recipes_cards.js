// Get all recipes

export function getRecipeCard(data) {
  const filterByTitle = data.sort((a,b) => (a.name < b.name ? -1 ; 1));

  // Check ingredients
  function getIngredientsHtml(ingredients) {
    const column = document.createElement('div');
    column.classList.add('ingredients__detailled--bloc');
  
    let ingredientName;
  
    for (const ingredient of ingredients) {
      ingredientName = document.createElement('p');
      ingredientName.setAttribute('data-ingredient', ingredient.ingredient);
      if (ingredient.unit === '' || ingredient.unit== null) {
        if (ingredient.quantity) {
          ingredientName.innerHTML = `<strong>${ingredient.ingredient} :</strong> ${ingredient.quantity}`;
        } else {
          ingredientName.innerHTML = `<strong>${ingredient.ingredient}`;
        } 
      } else {
          ingredientName.innerHTML = `<strong>${ingredient.ingredient} : </strong> ${ingredient.quantity} ${ingredient.unit}`;
        }
      column.appendChild(ingredientName);
    }
    
    console.log(column.innerHTML);
    return column.innerHTML;

  }

  return filterByTitle.mP((data) => (
    `
    <article id="1" servings="1"><div class="blank-space"></div><header><h2 class="nom">Limonade de Coco</h2><span class="duration-icon"><i class="fa-regular fa-clock fa-lg"></i></span><h3 class="durée">10 min</h3></header><div class="informations" appliance="Blender" ustensils="cuillère à Soupe,verres,presse citron"><div class="ingredients__detailled--bloc"><p data-ingredient="Lait de coco"><strong>Lait de coco : </strong> 400 ml</p><p data-ingredient="Jus de citron"><strong>Jus de citron :</strong> 2</p><p data-ingredient="Crème de coco"><strong>Crème de coco : </strong> 2 cuillères à soupe</p><p data-ingredient="Sucre"><strong>Sucre : </strong> 30 grammes</p><p data-ingredient="Glaçons"><strong>Glaçons</strong></p></div><p class="description">Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée</p></div><div class="is-hidden"></div></article>
    `

  ))
  

}



// /* getRecipeCard is used in the index file */

// export function getRecipeCard(data) {
//     const { id, name, servings, ingredients, time, description,  appliance, ustensils } = data;
  
//     const article = document.createElement('article');
//     article.setAttribute('id', id);
//     article.setAttribute('servings', servings);
  
//     const blankImage = document.createElement('div');
//     blankImage.classList.add('blank-space');
  
//     const cardHeader = document.createElement('header');
  
//     const recipeName = document.createElement('h2');
//     recipeName.textContent = name;
//     recipeName.className = 'nom';
  
//     const spanIcon = document.createElement('span');
//     spanIcon.className = 'duration-icon';
  
//     const timeIcon = document.createElement('i');
//     timeIcon.className = 'fa-regular fa-clock fa-lg';
  
//     const recipeDuration = document.createElement('h3');
//     recipeDuration.textContent = `${time} min`;
//     recipeDuration.className = 'durée';
  
//     const cardInfo = document.createElement('div');
//     cardInfo.classList.add('informations');
//     cardInfo.setAttribute('appliance', appliance);
//     cardInfo.setAttribute('ustensils', ustensils);
  
//     const recipeIngredients = getIngredients(ingredients);
  
//     const recipeDescription = document.createElement('p');
//     recipeDescription.textContent = description;
//     recipeDescription.className = 'description';
  
//     const hidden = document.createElement('div');
//     hidden.classList.add('is-hidden');
  
//     /* Append section */
//     article.appendChild(blankImage);
//     article.appendChild(cardHeader);
//     cardHeader.appendChild(recipeName);
//     cardHeader.appendChild(spanIcon);
//     spanIcon.appendChild(timeIcon);
//     cardHeader.appendChild(recipeDuration);
//     article.appendChild(cardInfo);
//     cardInfo.appendChild(recipeIngredients);
//     cardInfo.appendChild(recipeDescription);
//     article.appendChild(hidden);

//     // article.classList.add('recipe-card');
//     // article.innerHTML = `

//     // <img src="" alt="">
//     // <div class="recipe-card-info">
//     //     <div class="recipe-card-info__title-and-duration">
//     //         <h2 class="recipe-card-info__title">${name}</h2>
//     //         <span><i class="fa-solid fa-clock"></i>${time} min</i></span>
//     //     </div>
//     //     <div class="recipe-card-info__ingredients-and-instructions">
//     //         ${getIngredientsHtml(ingredients)}
//     //     </div>
//     // </div>

//     // `;
  
//     return (article);
//   }

//   /* Fonction pour afficher le contenu de 'ingrédients'. */

// function getIngredients(ingredients) {
//     const column = document.createElement('div');
//     column.classList.add('ingredients__detailled--bloc');
  
//     let ingredientName;
  
//     for (const ingredient of ingredients) {
//       ingredientName = document.createElement('p');
//       ingredientName.setAttribute('data-ingredient', ingredient.ingredient);
//       if (ingredient.unit === '' || ingredient.unit== null) {
//         if (ingredient.quantity) {
//           ingredientName.innerHTML = `<strong>${ingredient.ingredient} :</strong> ${ingredient.quantity}`;
//         } else {
//           ingredientName.innerHTML = `<strong>${ingredient.ingredient}`;
//         } 
//       } else {
//           ingredientName.innerHTML = `<strong>${ingredient.ingredient} : </strong> ${ingredient.quantity} ${ingredient.unit}`;
//         }
//       column.appendChild(ingredientName);
//     }
    
//     console.log(column.innerHTML);
//     return column;

//   }

//   function getIngredientsHtml(ingredients) {
//     const column = document.createElement('div');
//     column.classList.add('ingredients__detailled--bloc');
  
//     let ingredientName;
  
//     for (const ingredient of ingredients) {
//       ingredientName = document.createElement('p');
//       ingredientName.setAttribute('data-ingredient', ingredient.ingredient);
//       if (ingredient.unit === '' || ingredient.unit== null) {
//         if (ingredient.quantity) {
//           ingredientName.innerHTML = `<strong>${ingredient.ingredient} :</strong> ${ingredient.quantity}`;
//         } else {
//           ingredientName.innerHTML = `<strong>${ingredient.ingredient}`;
//         } 
//       } else {
//           ingredientName.innerHTML = `<strong>${ingredient.ingredient} : </strong> ${ingredient.quantity} ${ingredient.unit}`;
//         }
//       column.appendChild(ingredientName);
//     }
    
//     console.log(column.innerHTML);
//     return column.innerHTML;

//   }