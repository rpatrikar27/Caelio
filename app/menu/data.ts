export interface MenuItem {
  id: string;
  name: string;
  price: string;
  desc: string;
  category: 'Food' | 'Coffee' | 'Desserts';
  subCategory: string;
  type: 'veg' | 'egg' | 'non-veg';
  tag?: 'Bestseller' | 'Recommended' | 'Popular' | 'Signature' | 'Chef Recommendation';
  image?: string;
}

export interface SubCategoryGroup {
  name: string;
  description?: string;
  items: MenuItem[];
}

export interface MenuCategoryGroup {
  id: 'food' | 'coffee' | 'desserts';
  name: string;
  tagline: string;
  icon: string;
  subCategories: SubCategoryGroup[];
}

export const menuData: MenuItem[] = [
  // --- FOOD ---
  // Beverages
  {
    id: 'f-bev-1',
    name: 'Peach Iced Tea',
    price: '₹160',
    desc: 'A highly fragrant Assam tea infusion blended with sweet peach pulp, served icy cold with fresh mint leaves.',
    category: 'Food',
    subCategory: 'Beverages',
    type: 'veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc'
  },
  {
    id: 'f-bev-2',
    name: 'Green Apple Iced Tea',
    price: '₹160',
    desc: 'Sparkling green apple skins and cooling mountain tea combined for a delightfully crisp, restorative beverage.',
    category: 'Food',
    subCategory: 'Beverages',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd'
  },

  // Breakfast
  {
    id: 'f-[#120A07]-1',
    name: 'Fresh Fruits Bowl',
    price: '₹110',
    desc: 'A refreshing bowl of hand-cut seasonal fruits bursting with natural sweetness.',
    category: 'Food',
    subCategory: 'Breakfast',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2'
  },
  {
    id: 'f-[#120A07]-2',
    name: 'Vegetarian Breakfast Platter',
    price: '₹280',
    desc: 'Baked beans, grilled mushrooms, toast, hash browns, masala smashed paneer and a sweet cupcake.',
    category: 'Food',
    subCategory: 'Breakfast',
    type: 'veg',
    tag: 'Bestseller',
    image: '/images/bento_breakfast.jpg'
  },
  {
    id: 'f-[#120A07]-3',
    name: 'Non-Vegetarian Breakfast Platter',
    price: '₹290',
    desc: 'Choice of eggs with baked beans, grilled mushrooms, chicken sausage, toast and grilled tomato.',
    category: 'Food',
    subCategory: 'Breakfast',
    type: 'non-veg',
    tag: 'Chef Recommendation',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666'
  },
  {
    id: 'f-[#120A07]-4',
    name: 'Smashed Avocado Open Toast',
    price: '₹180',
    desc: 'Creamy smashed avocado on toasted bread served with fresh salad.',
    category: 'Food',
    subCategory: 'Breakfast',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8'
  },
  {
    id: 'f-[#120A07]-5',
    name: 'Rustic Mushroom Open Toast',
    price: '₹185',
    desc: 'Juicy mushrooms and vegetables with herbs and spices on crisp toast.',
    category: 'Food',
    subCategory: 'Breakfast',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569'
  },
  {
    id: 'f-[#120A07]-6',
    name: 'Chunky Chicken Supreme Open Toast',
    price: '₹200',
    desc: 'Tender chunky chicken with tangy flavors on toasted bread, served with salad.',
    category: 'Food',
    subCategory: 'Breakfast',
    type: 'non-veg',
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2'
  },
  {
    id: 'f-[#120A07]-7',
    name: 'Paneer Bhurji with Brioche Bun',
    price: '₹250',
    desc: 'Spicy paneer bhurji paired with buttery masala brioche bun, chutney and onions.',
    category: 'Food',
    subCategory: 'Breakfast',
    type: 'veg',
    tag: 'Chef Recommendation',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950'
  },

  // Energy Bowls
  {
    id: 'f-eb-1',
    name: 'Veg Energy Bowl',
    price: '₹180',
    desc: 'Chickpeas, cucumber, cherry tomatoes, baked vegetables and paneer with creamy dressing.',
    category: 'Food',
    subCategory: 'Energy Bowls',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999'
  },
  {
    id: 'f-eb-2',
    name: 'Egg Energy Bowl',
    price: '₹180',
    desc: 'Fresh vegetables, chickpeas, boiled eggs and paneer with creamy dressing.',
    category: 'Food',
    subCategory: 'Energy Bowls',
    type: 'egg',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'
  },
  {
    id: 'f-eb-3',
    name: 'Chicken Energy Bowl',
    price: '₹220',
    desc: 'Protein-packed bowl with baked chicken, chickpeas, vegetables and paneer with creamy dressing.',
    category: 'Food',
    subCategory: 'Energy Bowls',
    type: 'non-veg',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'
  },

  // Eggs
  {
    id: 'f-egg-1',
    name: 'Sunny Side Up',
    price: '₹179',
    desc: 'Two perfectly fried sunny-side-up eggs served with fresh bread loaf and a crisp garden salad.',
    category: 'Food',
    subCategory: 'Eggs',
    type: 'egg',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8'
  },
  {
    id: 'f-egg-2',
    name: 'Creamy Scrambled Eggs',
    price: '₹179',
    desc: 'Soft, creamy scrambled eggs made with fresh cream, seasoned with salt and pepper, served with bread loaf and salad.',
    category: 'Food',
    subCategory: 'Eggs',
    type: 'egg',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141'
  },
  {
    id: 'f-egg-3',
    name: 'Boiled Eggs',
    price: '₹149',
    desc: 'Two perfectly boiled eggs seasoned with salt and pepper for a simple, wholesome start.',
    category: 'Food',
    subCategory: 'Eggs',
    type: 'egg',
    image: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063'
  },
  {
    id: 'f-egg-4',
    name: 'French Omelette',
    price: '₹189',
    desc: 'A light, fluffy French omelette with a creamy center, served with bread loaf and fresh salad.',
    category: 'Food',
    subCategory: 'Eggs',
    type: 'egg',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47'
  },
  {
    id: 'f-egg-5',
    name: 'Caelio Special Mushroom Cheese Omelette',
    price: '₹239',
    desc: 'Fluffy three-egg omelette filled with sautéed mushrooms and melted cheese, served with bread loaf and salad.',
    category: 'Food',
    subCategory: 'Eggs',
    type: 'egg',
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71'
  },
  {
    id: 'f-egg-6',
    name: 'Caelio Special Popeye Omelette',
    price: '₹239',
    desc: 'Spinach and cheese stuffed fluffy omelette with bread loaf and fresh salad.',
    category: 'Food',
    subCategory: 'Eggs',
    type: 'egg',
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9'
  },

  // Sandwiches & Toasties
  {
    id: 'f-sand-1',
    name: 'Exotic Vegetable Harvest Melt',
    price: '₹240',
    desc: 'Loaded with exotic vegetables, cheese and signature sauce, served with fries and salad.',
    category: 'Food',
    subCategory: 'Sandwiches & Toasties',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af'
  },
  {
    id: 'f-sand-2',
    name: 'Assorted Mushroom Sandwich',
    price: '₹240',
    desc: 'Flavorful mushrooms and vegetables in toasted sourdough with fries and salad.',
    category: 'Food',
    subCategory: 'Sandwiches & Toasties',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569'
  },
  {
    id: 'f-sand-3',
    name: 'Crispy Chicken Supreme',
    price: '₹250',
    desc: 'Crispy chicken breast, melted cheese and flavorful sauces in sourdough.',
    category: 'Food',
    subCategory: 'Sandwiches & Toasties',
    type: 'non-veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980'
  },
  {
    id: 'f-sand-4',
    name: 'Cheese Mushroom Canape',
    price: '₹180',
    desc: 'Crispy canapés topped with creamy cheese and mushrooms.',
    category: 'Food',
    subCategory: 'Sandwiches & Toasties',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270'
  },
  {
    id: 'f-sand-5',
    name: 'Baked Beans Canape',
    price: '₹180',
    desc: 'Crunchy bites topped with spicy baked beans.',
    category: 'Food',
    subCategory: 'Sandwiches & Toasties',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'
  },
  {
    id: 'f-sand-6',
    name: 'Spicy Minced Chicken Canape',
    price: '₹190',
    desc: 'Crispy canapés loaded with spicy minced chicken.',
    category: 'Food',
    subCategory: 'Sandwiches & Toasties',
    type: 'non-veg',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec'
  },

  // Burgers
  {
    id: 'f-burg-1',
    name: 'Classic Veg Burger',
    price: '₹160',
    desc: 'Juicy vegetable patty with fresh fillings served with crispy French fries.',
    category: 'Food',
    subCategory: 'Burgers',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349'
  },
  {
    id: 'f-burg-2',
    name: 'Nashville Paneer Heat Burger',
    price: '₹180',
    desc: 'Spicy paneer burger layered with cheese and served with crispy fries.',
    category: 'Food',
    subCategory: 'Burgers',
    type: 'veg',
    tag: 'Chef Recommendation',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
  },
  {
    id: 'f-burg-3',
    name: 'Smokey Ranch Chicken Burger',
    price: '₹190',
    desc: 'Smoky chicken patty with signature ranch sauce and crispy fries.',
    category: 'Food',
    subCategory: 'Burgers',
    type: 'non-veg',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90'
  },
  {
    id: 'f-burg-4',
    name: 'Crispy Fried Chicken Beast Burger',
    price: '₹210',
    desc: 'Crunchy fried chicken loaded with hot spicy sauce and served with fries.',
    category: 'Food',
    subCategory: 'Burgers',
    type: 'non-veg',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1615557960916-5f4791effe9d'
  },

  // Sides & Fries
  {
    id: 'f-side-1',
    name: 'French Fries',
    price: '₹130',
    desc: 'Crispy golden fries served with ketchup and mayo.',
    category: 'Food',
    subCategory: 'Sides & Fries',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d'
  },
  {
    id: 'f-side-2',
    name: 'Peri Peri Fries',
    price: '₹160',
    desc: 'Spicy peri peri fries tossed with special seasoning.',
    category: 'Food',
    subCategory: 'Sides & Fries',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d'
  },
  {
    id: 'f-side-3',
    name: 'Garlic Fries',
    price: '₹180',
    desc: 'Fries tossed with garlic and herbs.',
    category: 'Food',
    subCategory: 'Sides & Fries',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713'
  },
  {
    id: 'f-side-4',
    name: 'Cheese Fries',
    price: '₹200',
    desc: 'Fries topped with cheese and herbs.',
    category: 'Food',
    subCategory: 'Sides & Fries',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707'
  },
  {
    id: 'f-side-5',
    name: 'Nachos',
    price: '₹180',
    desc: 'Nachos topped with salsa, cheese, beans and jalapenos.',
    category: 'Food',
    subCategory: 'Sides & Fries',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d'
  },
  {
    id: 'f-side-6',
    name: 'Chicken Nachos',
    price: '₹210',
    desc: 'Nachos topped with chicken, cheese and sauce.',
    category: 'Food',
    subCategory: 'Sides & Fries',
    type: 'non-veg',
    image: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063'
  },
  {
    id: 'f-side-7',
    name: 'Veg Pops',
    price: '₹170',
    desc: 'Crispy veg pops served with dip.',
    category: 'Food',
    subCategory: 'Sides & Fries',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8'
  },
  {
    id: 'f-side-8',
    name: 'Cheese Pops',
    price: '₹180',
    desc: 'Cheesy pops served with dip.',
    category: 'Food',
    subCategory: 'Sides & Fries',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270'
  },
  {
    id: 'f-side-9',
    name: 'Stick on My Mouth',
    price: '₹220',
    desc: 'Spicy potato sticks served with dip.',
    category: 'Food',
    subCategory: 'Sides & Fries',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752'
  },
  {
    id: 'f-side-10',
    name: 'Chicken Nuggets',
    price: '₹220',
    desc: 'Crispy chicken nuggets served with dip.',
    category: 'Food',
    subCategory: 'Sides & Fries',
    type: 'non-veg',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710'
  },

  // Pizza
  {
    id: 'f-piz-1',
    name: 'Margherita Pizza',
    price: '₹249',
    desc: 'Pizza pasta sauce, mozzarella cheese, basil leaves.',
    category: 'Food',
    subCategory: 'Pizza',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002'
  },
  {
    id: 'f-piz-2',
    name: 'Cheese Corn Pizza',
    price: '₹299',
    desc: 'Pizza pasta sauce, corn, mozzarella cheese.',
    category: 'Food',
    subCategory: 'Pizza',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591'
  },
  {
    id: 'f-piz-3',
    name: 'Farmhouse Pizza',
    price: '₹349',
    desc: 'Bell peppers, mushroom, black olives, pizza pasta sauce and mozzarella cheese.',
    category: 'Food',
    subCategory: 'Pizza',
    type: 'veg',
    tag: 'Chef Recommendation',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3'
  },
  {
    id: 'f-piz-4',
    name: 'Mexican Hot Pizza',
    price: '₹249',
    desc: 'Mozzarella cheese, pizza pasta sauce, corn and chipotle seasoning.',
    category: 'Food',
    subCategory: 'Pizza',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee'
  },
  {
    id: 'f-piz-5',
    name: 'Paneer Makhni Pizza',
    price: '₹329',
    desc: 'Makhni sauce, paneer, capsicum, pizza pasta sauce and mozzarella cheese.',
    category: 'Food',
    subCategory: 'Pizza',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'
  },

  // Pasta
  {
    id: 'f-pas-1',
    name: 'Aglio e Olio',
    price: '₹240',
    desc: 'Garlic-infused creamy spaghetti with cheese served with crispy garlic bread.',
    category: 'Food',
    subCategory: 'Pasta',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141'
  },
  {
    id: 'f-pas-2',
    name: 'Truffle & Mushroom',
    price: '₹240',
    desc: 'Creamy truffle mushroom spaghetti with garlic bread.',
    category: 'Food',
    subCategory: 'Pasta',
    type: 'veg',
    tag: 'Signature',
    image: '/images/bento_pasta.jpg'
  },
  {
    id: 'f-pas-3',
    name: 'Pesto Crema & Capers',
    price: '₹250',
    desc: 'Fresh basil pesto in a creamy sauce with garlic bread.',
    category: 'Food',
    subCategory: 'Pasta',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601'
  },
  {
    id: 'f-pas-4',
    name: 'Penne Alfredo',
    price: '₹230',
    desc: 'Classic creamy white sauce pasta with vegetables and garlic bread.',
    category: 'Food',
    subCategory: 'Pasta',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804'
  },
  {
    id: 'f-pas-5',
    name: 'Penne Pink Sauce',
    price: '₹240',
    desc: 'Tangy pink sauce pasta packed with vegetables and garlic bread.',
    category: 'Food',
    subCategory: 'Pasta',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141'
  },

  // Meal Combos
  {
    id: 'f-combo-1',
    name: 'Classic Veg Burger Combo',
    price: '₹329',
    desc: 'Classic Veg Burger + French Fries + Mocktail.',
    category: 'Food',
    subCategory: 'Meal Combos',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349'
  },
  {
    id: 'f-combo-2',
    name: 'Crispy Chicken Burger Combo',
    price: '₹429',
    desc: 'Crispy Chicken Burger + Chicken Nuggets + Mocktail.',
    category: 'Food',
    subCategory: 'Meal Combos',
    type: 'non-veg',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1610614819513-58e34989848b'
  },

  // --- COFFEE ---
  // Cold Brew
  {
    id: 'c-cb-1',
    name: 'Straight Up Cold Brew',
    price: '₹170',
    desc: 'Pure slow-steeped cold brew coffee.',
    category: 'Coffee',
    subCategory: 'Cold Brew',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c'
  },
  {
    id: 'c-cb-2',
    name: 'Cranberry Cold Brew',
    price: '₹190',
    desc: 'Cold brew with cranberry notes.',
    category: 'Coffee',
    subCategory: 'Cold Brew',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085'
  },
  {
    id: 'c-cb-3',
    name: 'Rosella Brewit',
    price: '₹200',
    desc: 'Floral rosella infused cold brew.',
    category: 'Coffee',
    subCategory: 'Cold Brew',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd'
  },
  {
    id: 'c-cb-4',
    name: 'Ginger Ale Cold Brew',
    price: '₹190',
    desc: 'Cold brew mixed with ginger ale.',
    category: 'Coffee',
    subCategory: 'Cold Brew',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38'
  },
  {
    id: 'c-cb-5',
    name: 'Orange sunrise Cold Brew',
    price: '₹200',
    desc: 'Citrusy orange cold brew.',
    category: 'Coffee',
    subCategory: 'Cold Brew',
    type: 'veg',
    tag: 'Recommended',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772'
  },
  {
    id: 'c-cb-6',
    name: 'Cold Brew Tonic',
    price: '₹180',
    desc: 'Cold brew topped with tonic water.',
    category: 'Coffee',
    subCategory: 'Cold Brew',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c'
  },
  {
    id: 'c-cb-7',
    name: 'Vietnamese Cold Brew',
    price: '₹200',
    desc: 'Bold cold brew with vietnamese style.',
    category: 'Coffee',
    subCategory: 'Cold Brew',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd'
  },
  {
    id: 'c-cb-8',
    name: 'Basil Cold Brew',
    price: '₹200',
    desc: 'Herbal basil infused cold brew.',
    category: 'Coffee',
    subCategory: 'Cold Brew',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085'
  },

  // Cold Coffee & Frappe
  {
    id: 'c-cf-1',
    name: 'Classic Frappe',
    price: '₹200',
    desc: 'Blended iced coffee smooth and refreshing.',
    category: 'Coffee',
    subCategory: 'Cold Coffee & Frappe',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699'
  },
  {
    id: 'c-cf-2',
    name: 'Mocha Frappe',
    price: '₹220',
    desc: 'Chocolate coffee frappe with ice.',
    category: 'Coffee',
    subCategory: 'Cold Coffee & Frappe',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e'
  },
  {
    id: 'c-cf-3',
    name: 'Hazelnut Frappe',
    price: '₹220',
    desc: 'Nutty hazelnut flavored coffee frappe.',
    category: 'Coffee',
    subCategory: 'Cold Coffee & Frappe',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6'
  },
  {
    id: 'c-cf-4',
    name: 'Biscoff Frappe',
    price: '₹230',
    desc: 'Creamy frappe with Biscoff flavor.',
    category: 'Coffee',
    subCategory: 'Cold Coffee & Frappe',
    type: 'veg',
    tag: 'Chef Recommendation',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772'
  },
  {
    id: 'c-cf-5',
    name: 'Nutella Frappe',
    price: '₹230',
    desc: 'Chocolate-Hazelnut nutella blended frappe.',
    category: 'Coffee',
    subCategory: 'Cold Coffee & Frappe',
    type: 'veg',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699'
  },
  {
    id: 'c-cf-6',
    name: 'Tiramisu Frappe',
    price: '₹230',
    desc: 'Dessert-inspired coffee frappe.',
    category: 'Coffee',
    subCategory: 'Cold Coffee & Frappe',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e'
  },
  {
    id: 'c-cf-7',
    name: 'Caelio Cold Coffee',
    price: '₹190',
    desc: 'Chilled coffee with a creamy finish.',
    category: 'Coffee',
    subCategory: 'Cold Coffee & Frappe',
    type: 'veg',
    tag: 'Signature',
    image: '/images/hero_coffee.jpg'
  },

  // Cold With Espresso
  {
    id: 'c-ce-1',
    name: 'Iced Americano',
    price: '₹130',
    desc: 'Espresso over ice with water.',
    category: 'Coffee',
    subCategory: 'Cold With Espresso',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c'
  },
  {
    id: 'c-ce-2',
    name: 'Iced Latte',
    price: '₹160',
    desc: 'Espresso, milk and ice.',
    category: 'Coffee',
    subCategory: 'Cold With Espresso',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735'
  },
  {
    id: 'c-ce-3',
    name: 'Hazelnut Iced Latte',
    price: '₹180',
    desc: 'Iced latte with hazelnut flavor.',
    category: 'Coffee',
    subCategory: 'Cold With Espresso',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38'
  },
  {
    id: 'c-ce-4',
    name: 'Vanilla Iced Latte',
    price: '₹180',
    desc: 'Iced latte with vanilla notes.',
    category: 'Coffee',
    subCategory: 'Cold With Espresso',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e'
  },
  {
    id: 'c-ce-5',
    name: 'Caramel Iced Latte',
    price: '₹180',
    desc: 'Iced latte with caramel flavor.',
    category: 'Coffee',
    subCategory: 'Cold With Espresso',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699'
  },
  {
    id: 'c-ce-6',
    name: 'Espresso Tonic',
    price: '₹180',
    desc: 'Espresso topped with tonic water.',
    category: 'Coffee',
    subCategory: 'Cold With Espresso',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd'
  },
  {
    id: 'c-ce-7',
    name: 'Espresso Ginger Ale',
    price: '₹180',
    desc: 'Espresso mixed with ginger ale.',
    category: 'Coffee',
    subCategory: 'Cold With Espresso',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085'
  },
  {
    id: 'c-ce-8',
    name: 'Orange Espresso',
    price: '₹190',
    desc: 'Espresso with fresh orange notes.',
    category: 'Coffee',
    subCategory: 'Cold With Espresso',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772'
  },

  // Shakes
  {
    id: 'c-shk-1',
    name: 'Choco Chip Shake',
    price: '₹230',
    desc: 'Creamy shake with chocolate chips.',
    category: 'Coffee',
    subCategory: 'Shakes',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699'
  },
  {
    id: 'c-shk-2',
    name: 'Oreo Shake',
    price: '₹230',
    desc: 'Rich shake blended with oreo cookies.',
    category: 'Coffee',
    subCategory: 'Shakes',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc'
  },
  {
    id: 'c-shk-3',
    name: 'Kitkat Shake',
    price: '₹240',
    desc: 'Chocolate shake with kitkat pieces.',
    category: 'Coffee',
    subCategory: 'Shakes',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69'
  },
  {
    id: 'c-shk-4',
    name: 'Brownie Shake',
    price: '₹240',
    desc: 'Thick shake blended with brownies.',
    category: 'Coffee',
    subCategory: 'Shakes',
    type: 'veg',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699'
  },
  {
    id: 'c-shk-5',
    name: 'Mango Shake',
    price: '₹230',
    desc: 'Refreshing Mango milkshake.',
    category: 'Coffee',
    subCategory: 'Shakes',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696'
  },
  {
    id: 'c-shk-6',
    name: 'Strawberry Shake',
    price: '₹230',
    desc: 'Sweet strawberry flavored shake.',
    category: 'Coffee',
    subCategory: 'Shakes',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1553787499-6f9133860278'
  },
  {
    id: 'c-shk-7',
    name: 'Blueberry Shake',
    price: '₹230',
    desc: 'Fruity blueberry milkshake.',
    category: 'Coffee',
    subCategory: 'Shakes',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888'
  },
  {
    id: 'c-shk-8',
    name: 'Banana Caramel Shake',
    price: '₹240',
    desc: 'Banana shake with caramel flavor.',
    category: 'Coffee',
    subCategory: 'Shakes',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1553787499-6f9133860278'
  },
  {
    id: 'c-shk-9',
    name: 'Kiwi Banana Shake',
    price: '₹240',
    desc: 'Tropical kiwi and banana blend.',
    category: 'Coffee',
    subCategory: 'Shakes',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696'
  },

  // Matcha
  {
    id: 'c-[#120A07]-1',
    name: 'Iced Matcha Latte',
    price: '₹230',
    desc: 'Premium matcha with chilled milk.',
    category: 'Coffee',
    subCategory: 'Matcha',
    type: 'veg',
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a'
  },
  {
    id: 'c-[#120A07]-2',
    name: 'Warm Matcha Latte',
    price: '₹230',
    desc: 'Hot Matcha Blended with milk.',
    category: 'Coffee',
    subCategory: 'Matcha',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3'
  },
  {
    id: 'c-[#120A07]-3',
    name: 'Mango Matcha Cloud',
    price: '₹260',
    desc: 'Mango and matcha layered drink.',
    category: 'Coffee',
    subCategory: 'Matcha',
    type: 'veg',
    tag: 'Chef Recommendation',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3'
  },
  {
    id: 'c-[#120A07]-4',
    name: 'Mango Matcha',
    price: '₹250',
    desc: 'Refreshing mango matcha fusion.',
    category: 'Coffee',
    subCategory: 'Matcha',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a'
  },
  {
    id: 'c-[#120A07]-5',
    name: 'Strawberry Matcha',
    price: '₹250',
    desc: 'Sweet strawberry and matcha blend.',
    category: 'Coffee',
    subCategory: 'Matcha',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574'
  },
  {
    id: 'c-[#120A07]-6',
    name: 'Blueberry Matcha',
    price: '₹250',
    desc: 'Blueberry flavored matcha drink.',
    category: 'Coffee',
    subCategory: 'Matcha',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a'
  },
  {
    id: 'c-[#120A07]-7',
    name: 'Tonic Matcha',
    price: '₹250',
    desc: 'Matcha mixed with tonic water.',
    category: 'Coffee',
    subCategory: 'Matcha',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3'
  },

  // Iced Teas
  {
    id: 'c-it-1',
    name: 'Lemon Iced Tea',
    price: '₹170',
    desc: 'Refreshing black tea with lemon.',
    category: 'Coffee',
    subCategory: 'Iced Teas',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc'
  },
  {
    id: 'c-it-2',
    name: 'Peach Iced Tea',
    price: '₹180',
    desc: 'Iced tea infused with peach flavor.',
    category: 'Coffee',
    subCategory: 'Iced Teas',
    type: 'veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc'
  },
  {
    id: 'c-it-3',
    name: 'Green Apple Iced Tea',
    price: '₹180',
    desc: 'Iced tea with green apple notes.',
    category: 'Coffee',
    subCategory: 'Iced Teas',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd'
  },

  // Mocktails
  {
    id: 'c-mock-1',
    name: 'Virgin Mojito',
    price: '₹180',
    desc: 'Minty lime cooler without alcohol.',
    category: 'Coffee',
    subCategory: 'Mocktails',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd'
  },
  {
    id: 'c-mock-2',
    name: 'Peach Mojito',
    price: '₹180',
    desc: 'Peach flavored mint cooler.',
    category: 'Coffee',
    subCategory: 'Mocktails',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc'
  },
  {
    id: 'c-mock-3',
    name: 'Green Apple Mojito',
    price: '₹180',
    desc: 'Refreshing green apple mojito.',
    category: 'Coffee',
    subCategory: 'Mocktails',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd'
  },
  {
    id: 'c-mock-4',
    name: 'Kiwi Mojito',
    price: '₹180',
    desc: 'Kiwi flavored sparkling mojito.',
    category: 'Coffee',
    subCategory: 'Mocktails',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd'
  },
  {
    id: 'c-mock-5',
    name: 'Blueberry Mojito',
    price: '₹180',
    desc: 'Blueberry mint mocktail.',
    category: 'Coffee',
    subCategory: 'Mocktails',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd'
  },
  {
    id: 'c-mock-6',
    name: 'Blue Lagoon',
    price: '₹180',
    desc: 'Citrusy blue Mocktail.',
    category: 'Coffee',
    subCategory: 'Mocktails',
    type: 'veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87'
  },

  // Hot Coffee
  {
    id: 'c-hc-1',
    name: 'Cappuccino',
    price: '₹160',
    desc: 'Espresso with steamed milk and thick foam.',
    category: 'Coffee',
    subCategory: 'Hot Coffee',
    type: 'veg',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213'
  },
  {
    id: 'c-hc-2',
    name: 'Latte',
    price: '₹170',
    desc: 'Smooth espresso with creamy steamed milk.',
    category: 'Coffee',
    subCategory: 'Hot Coffee',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213'
  },
  {
    id: 'c-hc-3',
    name: 'Flat White',
    price: '₹160',
    desc: 'Rich espresso with velvety microfoam.',
    category: 'Coffee',
    subCategory: 'Hot Coffee',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61'
  },
  {
    id: 'c-hc-4',
    name: 'Mocha',
    price: '₹180',
    desc: 'Espresso blended with chocolate and milk.',
    category: 'Coffee',
    subCategory: 'Hot Coffee',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e'
  },
  {
    id: 'c-hc-5',
    name: 'Hazelnut Latte',
    price: '₹200',
    desc: 'Latte flavored with hazelnut syrup.',
    category: 'Coffee',
    subCategory: 'Hot Coffee',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6'
  },
  {
    id: 'c-hc-6',
    name: 'Caramel Latte',
    price: '₹200',
    desc: 'Creamy latte with caramel sweetness.',
    category: 'Coffee',
    subCategory: 'Hot Coffee',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699'
  },
  {
    id: 'c-hc-7',
    name: 'Vanilla Latte',
    price: '₹200',
    desc: 'Classic latte infused with vanilla.',
    category: 'Coffee',
    subCategory: 'Hot Coffee',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e'
  },
  {
    id: 'c-hc-8',
    name: 'Doppio',
    price: '₹100',
    desc: 'Double shot of espresso.',
    category: 'Coffee',
    subCategory: 'Hot Coffee',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04'
  },
  {
    id: 'c-hc-9',
    name: 'Hot Americano',
    price: '₹120',
    desc: 'Espresso diluted with hot water.',
    category: 'Coffee',
    subCategory: 'Hot Coffee',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd'
  },
  {
    id: 'c-hc-10',
    name: 'Hot Chocolate',
    price: '₹160',
    desc: 'Rich and creamy chocolate drink.',
    category: 'Coffee',
    subCategory: 'Hot Coffee',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed'
  },
  {
    id: 'c-hc-11',
    name: 'Cold Chocolate',
    price: '₹190',
    desc: 'Chilled chocolate drink with a smooth finish.',
    category: 'Coffee',
    subCategory: 'Hot Coffee',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699'
  },

  // Caelio Special Coffee
  {
    id: 'c-spec-1',
    name: 'Mont Blanc',
    price: '₹220',
    desc: 'Specialty whipped espresso layered with ice cream foam and raw cocoa dust.',
    category: 'Coffee',
    subCategory: 'Caelio Special Coffee',
    type: 'veg',
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c'
  },
  {
    id: 'c-spec-2',
    name: 'Tiger Bomb',
    price: '₹240',
    desc: 'Double ristretto layered with condensed milk and dark caramel.',
    category: 'Coffee',
    subCategory: 'Caelio Special Coffee',
    type: 'veg',
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd'
  },
  {
    id: 'c-spec-3',
    name: 'Hot Chocolate',
    price: '₹160',
    desc: 'Rich and creamy chocolate drink with velvety cocoa finish.',
    category: 'Coffee',
    subCategory: 'Caelio Special Coffee',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed'
  },
  {
    id: 'c-spec-4',
    name: 'Cold Chocolate',
    price: '₹190',
    desc: 'Chilled chocolate drink with a smooth finish.',
    category: 'Coffee',
    subCategory: 'Caelio Special Coffee',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699'
  },
  {
    id: 'c-spec-5',
    name: 'Special Caelio Honey Cold Brew',
    price: '₹190',
    desc: 'Slow brewed coffee infused with organic mountain honey.',
    category: 'Coffee',
    subCategory: 'Caelio Special Coffee',
    type: 'veg',
    tag: 'Chef Recommendation',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085'
  },

  // --- DESSERTS ---
  // Moody Desserts
  {
    id: 'd-md-1',
    name: 'Caelio Signature Lotus Tres Leches',
    price: '₹249',
    desc: 'Soft vanilla sponge soaked in three kinds of milk, layered with Lotus Biscoff spread, whipped cream and biscuit crumble.',
    category: 'Desserts',
    subCategory: 'Moody Desserts',
    type: 'veg',
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9'
  },
  {
    id: 'd-md-2',
    name: 'Belgian Chocolate Lava Cake',
    price: '₹249',
    desc: 'Warm molten chocolate cake served with vanilla ice cream, chocolate soil and cocoa dusting.',
    category: 'Desserts',
    subCategory: 'Moody Desserts',
    type: 'veg',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c'
  },
  {
    id: 'd-md-3',
    name: 'Tiramisu Coffee Pot',
    price: '₹279',
    desc: 'Espresso-soaked biscuits layered with mascarpone cream and finished with premium cocoa dust.',
    category: 'Desserts',
    subCategory: 'Moody Desserts',
    type: 'veg',
    tag: 'Chef Recommendation',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9'
  },
  {
    id: 'd-md-4',
    name: 'Hot Chocolate Cookie Skillet',
    price: '₹289',
    desc: 'Freshly baked chocolate chip cookie skillet served hot with vanilla ice cream and chocolate sauce.',
    category: 'Desserts',
    subCategory: 'Moody Desserts',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35'
  },
  {
    id: 'd-md-5',
    name: 'San Sebastian Burnt Cheesecake',
    price: '₹299',
    desc: 'Creamy Spanish-style burnt cheesecake served with salted caramel sauce and vanilla bean cream.',
    category: 'Desserts',
    subCategory: 'Moody Desserts',
    type: 'veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad'
  }
];

export const categoryStructure: MenuCategoryGroup[] = [
  {
    id: 'food',
    name: 'Food',
    tagline: 'Gourmet Sourdough, Artisanal Pizzas, Pastas & Kitchen Offerings',
    icon: '🍽️',
    subCategories: [
      {
        name: 'Beverages',
        description: 'Chilled herbal infusions & refreshing iced tea extractions',
        items: menuData.filter(i => i.category === 'Food' && i.subCategory === 'Beverages')
      },
      {
        name: 'Breakfast',
        description: 'Hearty morning platters, avocado sourdough toasts & savory bhurji brioche',
        items: menuData.filter(i => i.category === 'Food' && i.subCategory === 'Breakfast')
      },
      {
        name: 'Energy Bowls',
        description: 'Nutrient-rich macro power bowls with baked vegetables & protein',
        items: menuData.filter(i => i.category === 'Food' && i.subCategory === 'Energy Bowls')
      },
      {
        name: 'Eggs',
        description: 'Certified organic farm eggs cooked to order with sourdough loaf & crisp salad',
        items: menuData.filter(i => i.category === 'Food' && i.subCategory === 'Eggs')
      },
      {
        name: 'Sandwiches & Toasties',
        description: 'Pressed sourdough creations, melts & crispy canapés',
        items: menuData.filter(i => i.category === 'Food' && i.subCategory === 'Sandwiches & Toasties')
      },
      {
        name: 'Burgers',
        description: 'Gourmet brioche bun burgers served with crispy French fries',
        items: menuData.filter(i => i.category === 'Food' && i.subCategory === 'Burgers')
      },
      {
        name: 'Sides & Fries',
        description: 'Hand-seasoned golden fries, loaded nachos & crispy appetizers',
        items: menuData.filter(i => i.category === 'Food' && i.subCategory === 'Sides & Fries')
      },
      {
        name: 'Pizza',
        description: 'Hand-stretched pizza pasta sauce sourdough pizzas with mozzarella',
        items: menuData.filter(i => i.category === 'Food' && i.subCategory === 'Pizza')
      },
      {
        name: 'Pasta',
        description: 'Imported Italian wheat pasta cooked al dente with garlic bread',
        items: menuData.filter(i => i.category === 'Food' && i.subCategory === 'Pasta')
      },
      {
        name: 'Meal Combos',
        description: 'Complete burger, fries & mocktail pairing meals',
        items: menuData.filter(i => i.category === 'Food' && i.subCategory === 'Meal Combos')
      }
    ]
  },
  {
    id: 'coffee',
    name: 'Coffee',
    tagline: 'Single Origin Arabica, Cold Brews, Ceremonial Matcha & Signature Concoctions',
    icon: '☕',
    subCategories: [
      {
        name: 'Cold Brew',
        description: 'Slow 18-hour cold extractions infused with botanical fruits & ginger',
        items: menuData.filter(i => i.category === 'Coffee' && i.subCategory === 'Cold Brew')
      },
      {
        name: 'Cold Coffee & Frappe',
        description: 'Thick, creamy frozen blends & signature chilled espresso shakes',
        items: menuData.filter(i => i.category === 'Coffee' && i.subCategory === 'Cold Coffee & Frappe')
      },
      {
        name: 'Cold With Espresso',
        description: 'Iced lattes, crisp espresso tonics & fresh orange ristrettos',
        items: menuData.filter(i => i.category === 'Coffee' && i.subCategory === 'Cold With Espresso')
      },
      {
        name: 'Shakes',
        description: 'Decadent dessert milkshakes with chocolate, brownies & fresh fruits',
        items: menuData.filter(i => i.category === 'Coffee' && i.subCategory === 'Shakes')
      },
      {
        name: 'Matcha',
        description: 'First-harvest shade-grown stoneground ceremonial green tea from Uji, Kyoto',
        items: menuData.filter(i => i.category === 'Coffee' && i.subCategory === 'Matcha')
      },
      {
        name: 'Iced Teas',
        description: 'Crisp cold-steeped tea extractions with lemon, peach & apple',
        items: menuData.filter(i => i.category === 'Coffee' && i.subCategory === 'Iced Teas')
      },
      {
        name: 'Mocktails',
        description: 'Refreshing muddled mint mojitos, blue lagoon & citrus coolers',
        items: menuData.filter(i => i.category === 'Coffee' && i.subCategory === 'Mocktails')
      },
      {
        name: 'Hot Coffee',
        description: 'Double shot espresso extractions with silky microfoam & steamed milk',
        items: menuData.filter(i => i.category === 'Coffee' && i.subCategory === 'Hot Coffee')
      },
      {
        name: 'Caelio Special Coffee',
        description: 'Signature Mont Blanc, Tiger Bomb & honey-infused specialty cold brews',
        items: menuData.filter(i => i.category === 'Coffee' && i.subCategory === 'Caelio Special Coffee')
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    tagline: 'House Baked Patisserie, Spanish Cheesecake & Coffee Desserts',
    icon: '🍰',
    subCategories: [
      {
        name: 'Moody Desserts',
        description: 'Signature Lotus Tres Leches, Belgian lava cake, Tiramisu pot & San Sebastian cheesecake',
        items: menuData.filter(i => i.category === 'Desserts' && i.subCategory === 'Moody Desserts')
      }
    ]
  }
];
