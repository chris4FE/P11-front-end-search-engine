/* getRecipeCard is used in the index file */

export function getRecipeCard(data) {
    const { id, name, servings, ingredients, time, description,  appliance, ustensils } = data;
  
    const article = document.createElement('article');
    article.setAttribute('id', id);
    article.setAttribute('servings', servings);
  
    const blankImage = document.createElement('div');
    blankImage.classList.add('blank-space');
  
    const cardHeader = document.createElement('header');
  
    const recipeName = document.createElement('h2');
    recipeName.textContent = name;
    recipeName.className = 'nom';
  
    const spanIcon = document.createElement('span');
    spanIcon.className = 'duration-icon';
  
    const timeIcon = document.createElement('i');
    timeIcon.className = 'fa-regular fa-clock fa-lg';
  
    const recipeDuration = document.createElement('h3');
    recipeDuration.textContent = `${time} min`;
    recipeDuration.className = 'durée';
  
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('informations');
    cardInfo.setAttribute('appliance', appliance);
    cardInfo.setAttribute('ustensils', ustensils);
  
    const recipeIngredients = getIngredients(ingredients);
  
    const recipeDescription = document.createElement('p');
    recipeDescription.textContent = description;
    recipeDescription.className = 'description';
  
    const hidden = document.createElement('div');
    hidden.classList.add('is-hidden');
  
    /* Append section */
    article.appendChild(blankImage);
    article.appendChild(cardHeader);
    cardHeader.appendChild(recipeName);
    cardHeader.appendChild(spanIcon);
    spanIcon.appendChild(timeIcon);
    cardHeader.appendChild(recipeDuration);
    article.appendChild(cardInfo);
    cardInfo.appendChild(recipeIngredients);
    cardInfo.appendChild(recipeDescription);
    article.appendChild(hidden);

    // article.classList.add('recipe-card');
    // article.innerHTML = `

    // <img src="" alt="">
    // <div class="recipe-card-info">
    //     <div class="recipe-card-info__title-and-duration">
    //         <h2 class="recipe-card-info__title">${name}</h2>
    //         <span><i class="fa-solid fa-clock"></i>${time} min</i></span>
    //     </div>
    //     <div class="recipe-card-info__ingredients-and-instructions">
    //         <p class="recipe-card-info__ingredients">Lait de coco: 400ml<br> Jus de citron: 2 <br>Créme de coco: 4 cuillères <br>Sucre: 20g Glaçons: 2</p>
    //         <p class="recipe-card-info__instructions">Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2...
    //         </p>
    //     </div>
    // </div>

    // `;
  
    return (article);
  }

  /* Fonction pour afficher le contenu de 'ingrédients'. */

function getIngredients(ingredients) {
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
    
    return column;
  }