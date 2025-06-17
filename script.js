const favouriteRecipe = {
    recipeTitle: "Хычины с зеленью и сыром",
    servings: 5,
    ingredients: [
        "кефир 250 мл",
        "мука 400 г",
        "сыр сулугуни 100 г",
        "сыр имеретинский 120 г",
        "масло сливочное 30 г",
        "петрушка 1 пучок",
        "укроп 1 пучок",
        "соль",
    ],
    directions: "Замешиваем тесто. Натираем сыр. Раскатываем тесто и начиняем. Жарим на сковородке."
  };
  console.log("Название рецепта:", favouriteRecipe.recipeTitle);
  console.log("Порции:", favouriteRecipe.servings);
  console.log("Ингредиенты:");
  
  for (let i = 0; i < favouriteRecipe.ingredients.length; i++) {
    console.log(` - ${favouriteRecipe.ingredients[i]}`);
  }
  
  console.log("Указания:", favouriteRecipe.directions);