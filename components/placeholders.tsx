//This file is ONLY FOR PLACEHOLDERS. If you do not need a new placeholder, DO NOT TOUCH!!!

export function GenerateRecipes(){
    const recipes = [];

    for (let i = 1; i <= 20; i++) {
        const recipe = {
            name: `Recipe ${i}`,
            thumbnail: 'https://culturedvultures.com/wp-content/uploads/2023/02/2023-02-20_22.42.14-803x452.jpg', // Replace with your actual image URLs
        };
        recipes.push(recipe);
    }

    return recipes;
}