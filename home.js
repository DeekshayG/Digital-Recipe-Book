const recipes = {
  'mysore-masala-dosa': {
    name: 'Mysore Masala Dosa',
    description: 'Crispy dosa with a spicy chutney and potato filling.',
    image:"C:\Users\Deekshay\OneDrive\图片\Camera Roll\mysore_masala_dosa.jpg",
    ingredients: [
      '2 cups dosa batter',
      '1 cup mashed potatoes',
      '1 onion, finely chopped',
      '1 tbsp red chutney',
      '1 tsp mustard seeds',
      'Curry leaves',
      'Salt to taste'
    ],
    method: 'Spread dosa batter on a hot pan. Add red chutney, potato filling, and fold. Serve hot.'
  },
  'neer-dosa': {
    name: 'Neer Dosa',
    description: 'Soft and thin rice crepes served with coconut chutney.',
    image: "./images/neer_dosa.jpg",
    ingredients: [
      '1 cup rice, soaked',
      '1.5 cups water',
      'Salt to taste'
    ],
    method: 'Blend soaked rice with water. Spread thinly on a hot pan and cook. Serve with chutney.'
  },
  'mangalore-buns': {
    name: 'Mangalore Buns',
    description: 'Soft, sweet, and fluffy banana puris.',
    image: './images/mangalore_buns.jpg',
    ingredients: [
      '2 ripe bananas',
      '2 cups all-purpose flour',
      '2 tbsp yogurt',
      '1 tsp sugar',
      '1/4 tsp baking soda',
      'A pinch of salt',
      'Oil for frying'
    ],
    method: 'Mash bananas and mix with yogurt, sugar, and salt. Add flour and baking soda. Roll into puris and deep fry until golden.'
  },
  'bisi-bele-bath': {
    name: 'Bisi Bele Bath',
    description: 'A traditional spicy and tangy rice dish.',
    image: 'images/bisi_bele_bath.jpg',
    ingredients: [
      '1 cup rice',
      '1/2 cup toor dal',
      '1/2 cup mixed vegetables',
      '2 tbsp Bisi Bele Bath powder',
      'Tamarind juice',
      'Jaggery, salt to taste',
      'Tempering: mustard seeds, curry leaves, dry red chili'
    ],
    method: 'Cook rice and dal. Boil vegetables. Mix tamarind, spices, and jaggery. Combine with rice and dal. Temper and serve.'
  },
  'maddur-vada': {
    name: 'Maddur Vada',
    description: 'Crispy and savory fritters from Maddur.',
    image: 'images/maddur_vada.jpg',
    ingredients: [
      '1 cup rice flour',
      '1 cup semolina',
      '1/4 cup maida',
      '1 onion, finely chopped',
      'Green chilies and curry leaves',
      'Salt to taste',
      'Oil for frying'
    ],
    method: 'Mix all ingredients with water. Shape into discs and deep fry until crispy and golden.'
  },
  'raagi-mudde': {
    name: 'Raagi Mudde',
    description: 'Traditional finger millet balls served with sambar or curry.',
    image: 'images/raagi_mudde.jpg',
    ingredients: [
      '1 cup raagi flour',
      '2 cups water',
      'Salt to taste'
    ],
    method: 'Boil water with salt. Add raagi flour and stir until a thick dough forms. Shape into balls and serve hot.'
  },
  'rava-idli': {
    name: 'Rava Idli',
    description: 'Soft and spongy steamed semolina cakes.',
    image: 'images/rava_idli.jpg',
    ingredients: [
      '1 cup semolina (rava)',
      '1/2 cup yogurt',
      '1 tsp baking soda',
      '1/4 cup grated carrots',
      '1/4 cup chopped coriander',
      'Salt to taste'
    ],
    method: 'Mix rava, yogurt, and vegetables. Add baking soda. Steam in idli molds and serve with chutney.'
  },
  'udupi-sambar': {
    name: 'Udupi Sambar',
    description: 'Flavorful lentil-based vegetable curry.',
    image: 'images/udupi_sambar.jpg',
    ingredients: [
      '1/2 cup toor dal',
      '1/2 cup tamarind juice',
      '1/2 cup mixed vegetables',
      '2 tbsp Udupi sambar powder',
      'Salt to taste',
      'Coriander leaves for garnish'
    ],
    method: 'Cook dal and vegetables. Mix with tamarind and spices. Simmer until thick. Garnish with coriander and serve.'
  },
  'chitranna': {
    name: 'Chitranna',
    description: 'Flavorful lemon rice with spices and peanuts.',
    image: 'images/chitranna.jpg',
    ingredients: [
      '2 cups cooked rice',
      '1 lemon (juice)',
      '1/4 cup peanuts',
      '1 tsp mustard seeds',
      'Green chilies and curry leaves',
      'Salt to taste'
    ],
    method: 'Heat oil. Add mustard, chilies, curry leaves, and peanuts. Mix with rice, lemon juice, and salt.'
  },
  'obbattu': {
    name: 'Obbattu',
    description: 'Sweet flatbread stuffed with jaggery and dal mixture.',
    image: 'images/obbattu.jpg',
    ingredients: [
      '1 cup chana dal',
      '1 cup jaggery',
      '2 cups all-purpose flour',
      '1/2 tsp turmeric',
      'Ghee for frying'
    ],
    method: 'Cook dal and mix with jaggery. Roll flour into discs. Stuff with filling and fry with ghee until golden.'
  }
};

// Show Recipe Detail Page
function viewRecipe(recipeId) {
  const recipe = recipes[recipeId];
  if (recipe) {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('recipe-detail-page').style.display = 'block';

    document.getElementById('recipe-name').textContent = recipe.name;
    document.getElementById('recipe-description').textContent = recipe.description;
   // document.getElementById('recipe-image').src = recipe.image;

    const ingredientsList = document.getElementById('recipe-ingredients');
    ingredientsList.innerHTML = ''; // Clear existing list
    recipe.ingredients.forEach(ingredient => {
      const li = document.createElement('li');
      li.textContent = ingredient;
      ingredientsList.appendChild(li);
    });

    document.getElementById('recipe-method').textContent = recipe.method;
  }
}

// Go Back to Home Page
function goBack() {
  document.getElementById('recipe-detail-page').style.display = 'none';
  document.getElementById('home-page').style.display = 'block';
}