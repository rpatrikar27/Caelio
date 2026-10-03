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
  notes?: string;
}

export interface SubCategoryGroup {
  name: string;
  description?: string;
  items: MenuItem[];
  addOns?: { name: string; price: string }[];
}

export interface MenuCategoryGroup {
  id: 'food' | 'coffee' | 'desserts';
  name: string;
  tagline: string;
  icon: string;
  subCategories: SubCategoryGroup[];
}

export const menuData: MenuItem[] = [
  // ==========================================
  // --- FOOD ---
  // ==========================================

  // 1. Breakfast (Page 2)
  {
    id: 'f-bk-1',
    name: 'Fresh Fruit Bowl',
    price: '₹160',
    desc: 'A refreshing bowl of hand-cut seasonal fruits bursting with natural sweetness.',
    category: 'Food',
    subCategory: 'Breakfast',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2'
  },
  {
    id: 'f-bk-2',
    name: 'Vegetarian Platter',
    price: '₹280',
    desc: 'Baked beans, grilled mushrooms, toast, hash brown, smashed paneer and sweet cupcake.',
    category: 'Food',
    subCategory: 'Breakfast',
    type: 'veg',
    tag: 'Bestseller',
    image: '/images/bento_breakfast.jpg'
  },
  {
    id: 'f-bk-3',
    name: 'Non-vegetarian Platter',
    price: '₹300',
    desc: 'Choice of eggs, baked beans, grilled mushrooms, chicken sausage, toast, grilled tomato.',
    category: 'Food',
    subCategory: 'Breakfast',
    type: 'non-veg',
    tag: 'Chef Recommendation',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666'
  },
  {
    id: 'f-bk-4',
    name: 'Smashed Avacado Open Toast',
    price: '₹180',
    desc: 'Creamy smashed Avacado on toasted bread served with fresh salad.',
    category: 'Food',
    subCategory: 'Breakfast',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8'
  },
  {
    id: 'f-bk-5',
    name: 'Rustic Mushroom Open Toast',
    price: '₹185',
    desc: 'Juicy mushroom filling with herb and spices on crispy toast served with salad.',
    category: 'Food',
    subCategory: 'Breakfast',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569'
  },
  {
    id: 'f-bk-6',
    name: 'Chunky Chicken Supreme Open Toast',
    price: '₹200',
    desc: 'Tender chunky chicken with tangy flavours on toasted bread served with salad.',
    category: 'Food',
    subCategory: 'Breakfast',
    type: 'non-veg',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af'
  },
  {
    id: 'f-bk-7',
    name: 'Paneer Bhurji with Brioche Bun',
    price: '₹250',
    desc: 'Spicy paneer bhurji paired with buttery masala brioche Bun.',
    category: 'Food',
    subCategory: 'Breakfast',
    type: 'veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641'
  },
  {
    id: 'f-bk-8',
    name: 'Egg Bhurji with Brioche Bun',
    price: '₹250',
    desc: 'Spicy Egg bhurji paired with buttery masala brioche Bun.',
    category: 'Food',
    subCategory: 'Breakfast',
    type: 'egg',
    image: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063'
  },

  // 2. Energy Bowls (Page 3)
  {
    id: 'f-eb-1',
    name: 'Veg Energy Bowl',
    price: '₹180',
    desc: 'Lettuce, Chickpeas, cucumber, cherry tomatoes, baked vegetables and paneer.',
    category: 'Food',
    subCategory: 'Energy Bowls',
    type: 'veg',
    tag: 'Recommended',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999'
  },
  {
    id: 'f-eb-2',
    name: 'Egg Energy Bowl',
    price: '₹180',
    desc: 'Lettuce, Chickpeas, cucumber, cherry tomatoes and boiled egg.',
    category: 'Food',
    subCategory: 'Energy Bowls',
    type: 'egg',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'
  },
  {
    id: 'f-eb-3',
    name: 'Chicken Energy Bowl',
    price: '₹220',
    desc: 'Protein-packed bowl with crispy chicken, chickpeas, vegetables.',
    category: 'Food',
    subCategory: 'Energy Bowls',
    type: 'non-veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'
  },

  // 3. Choice of Eggs (Page 4)
  {
    id: 'f-egg-1',
    name: 'Sunny Side Up',
    price: '₹179',
    desc: 'Two perfectly fried Sunny -side-up eggs served with bread and fresh salad.',
    category: 'Food',
    subCategory: 'Choice of Eggs',
    type: 'egg',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8'
  },
  {
    id: 'f-egg-2',
    name: 'Creamy Scrambled Eggs',
    price: '₹179',
    desc: 'Soft creamy scrambled eggs seasoned with salt and pepper, served with bread and fresh salad.',
    category: 'Food',
    subCategory: 'Choice of Eggs',
    type: 'egg',
    image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589'
  },
  {
    id: 'f-egg-3',
    name: 'Boiled Eggs',
    price: '₹149',
    desc: 'Two perfectly boiled eggs seasoned with salt and pepper served with fresh salad.',
    category: 'Food',
    subCategory: 'Choice of Eggs',
    type: 'egg',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f'
  },
  {
    id: 'f-egg-4',
    name: 'French Omelette',
    price: '₹189',
    desc: 'A light, fluffy French Omelette with a creamy center served with bread and fresh salad.',
    category: 'Food',
    subCategory: 'Choice of Eggs',
    type: 'egg',
    tag: 'Recommended',
    image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71'
  },
  {
    id: 'f-egg-5',
    name: 'CAELIO Special Mushroom Cheese Omelette',
    price: '₹239',
    desc: 'Fluffy 3 eggs Omelette filled with sauted mushrooms and cheese, served with bread and fresh salad.',
    category: 'Food',
    subCategory: 'Choice of Eggs',
    type: 'egg',
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666'
  },

  // 4. Pasta & Spaghetti (Page 5)
  {
    id: 'f-pasta-1',
    name: 'Aglio e Olio',
    price: '₹240',
    desc: 'Garlic -infused creamy spaghetti with parmasan cheese.',
    category: 'Food',
    subCategory: 'Pasta & Spaghetti',
    type: 'veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141'
  },
  {
    id: 'f-pasta-2',
    name: 'Truffle & Mushroom',
    price: '₹280',
    desc: 'Creamy truffle mushroom spaghetti with garlic bread.',
    category: 'Food',
    subCategory: 'Pasta & Spaghetti',
    type: 'veg',
    tag: 'Chef Recommendation',
    image: '/images/bento_pasta.jpg'
  },
  {
    id: 'f-pasta-3',
    name: 'Pesto Crema & Capers',
    price: '₹280',
    desc: 'Fresh pesto in creamy sauce with garlic bread.',
    category: 'Food',
    subCategory: 'Pasta & Spaghetti',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601'
  },
  {
    id: 'f-pasta-4',
    name: 'Salsa di Curry',
    price: '₹280',
    desc: 'Spaghetti in our special Inhouse Madras curry sauce.',
    category: 'Food',
    subCategory: 'Pasta & Spaghetti',
    type: 'veg',
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691'
  },
  {
    id: 'f-pasta-5',
    name: 'Penne Alfredo',
    price: '₹230',
    desc: 'Classic creamy white sauce pasta with vegetables and garlic bread.',
    category: 'Food',
    subCategory: 'Pasta & Spaghetti',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a'
  },
  {
    id: 'f-pasta-6',
    name: 'Pink Sauce Pasta',
    price: '₹240',
    desc: 'Tangy pink sauce pasta packed with vegetables and garlic bread.',
    category: 'Food',
    subCategory: 'Pasta & Spaghetti',
    type: 'veg',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb'
  },

  // 5. Special Fries (Page 6)
  {
    id: 'f-fries-1',
    name: 'Classic Salted Fries',
    price: '₹140',
    desc: 'Golden crispy fries served with ketchup and house dip.',
    category: 'Food',
    subCategory: 'Special Fries',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594'
  },
  {
    id: 'f-fries-2',
    name: 'Smokey Peri Peri Fries',
    price: '₹160',
    desc: 'Crispy fries tossed in smoky peri peri seasoning with special dip.',
    category: 'Food',
    subCategory: 'Special Fries',
    type: 'veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d'
  },
  {
    id: 'f-fries-3',
    name: 'Saoji Spiced Garlic Fries',
    price: '₹180',
    desc: 'Nagpur-style Saoji spices with crunchy garlic and signature dip.',
    category: 'Food',
    subCategory: 'Special Fries',
    type: 'veg',
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713'
  },
  {
    id: 'f-fries-4',
    name: 'Parmesan Herb Fries',
    price: '₹200',
    desc: 'Herb-seasoned fries finished with rich parmesan flavor.',
    category: 'Food',
    subCategory: 'Special Fries',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877'
  },

  // 6. Nachos (Page 6)
  {
    id: 'f-nacho-1',
    name: 'Chilly Milly Mexican Nachos',
    price: '₹180',
    desc: 'Loaded nachos with spicy Mexican salsa, vegetables and sauces.',
    category: 'Food',
    subCategory: 'Nachos',
    type: 'veg',
    tag: 'Recommended',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d'
  },
  {
    id: 'f-nacho-2',
    name: 'Melted Cheese Chicken Nachos',
    price: '₹220',
    desc: 'Nachos topped with melted cheese, chicken and Mexican salsa.',
    category: 'Food',
    subCategory: 'Nachos',
    type: 'non-veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063'
  },

  // 7. Deep & Fried (Page 6)
  {
    id: 'f-fried-1',
    name: 'Veg Pops',
    price: '₹170',
    desc: 'Crispy potato pops served with two signature dips.',
    category: 'Food',
    subCategory: 'Deep & Fried',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8'
  },
  {
    id: 'f-fried-2',
    name: 'Nord Not Cheese Pops',
    price: '₹180',
    desc: 'Cheesy spicy veg pops fried until golden.',
    category: 'Food',
    subCategory: 'Deep & Fried',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5'
  },
  {
    id: 'f-fried-3',
    name: 'Stick On My Mouth',
    price: '₹220',
    desc: 'Crunchy potato sticks with bold spices and two special dips.',
    category: 'Food',
    subCategory: 'Deep & Fried',
    type: 'veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713'
  },
  {
    id: 'f-fried-4',
    name: 'Crispy Fried Chicken Nuggets',
    price: '₹230',
    desc: 'Golden chicken nuggets served with signature dip.',
    category: 'Food',
    subCategory: 'Deep & Fried',
    type: 'non-veg',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710'
  },

  // 8. Sourdough Sandwiches & Canapes (Page 7)
  {
    id: 'f-sand-1',
    name: 'Exotic Vegetable Harvest Melt',
    price: '₹240',
    desc: 'Loaded with exotic vegetables, cheese and Signature sauce in Sourdough with potato chips.',
    category: 'Food',
    subCategory: 'Sourdough Sandwiches & Canapes',
    type: 'veg',
    tag: 'Recommended',
    image: '/images/bento_bread.jpg'
  },
  {
    id: 'f-sand-2',
    name: 'Assorted Mushroom Sandwich',
    price: '₹240',
    desc: 'Seasoned Grilled mushroom, cheese in Sourdough with potato chips.',
    category: 'Food',
    subCategory: 'Sourdough Sandwiches & Canapes',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af'
  },
  {
    id: 'f-sand-3',
    name: 'Crispy Chicken Supreme',
    price: '₹250',
    desc: 'Crispy chicken breast, melted cheese and flavourful sauces in Sourdough with potato chips.',
    category: 'Food',
    subCategory: 'Sourdough Sandwiches & Canapes',
    type: 'non-veg',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1603903631889-b5f3ba4d5b9b'
  },
  {
    id: 'f-sand-4',
    name: 'Cheese Mushroom Canape (6 Pieces)',
    price: '₹180',
    desc: 'Crispy canapés topped with creamy cheese mushroom filling.',
    category: 'Food',
    subCategory: 'Sourdough Sandwiches & Canapes',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270'
  },
  {
    id: 'f-sand-5',
    name: 'Spicy Minced Chicken Canape (6 Pieces)',
    price: '₹190',
    desc: 'Crispy canapés loaded with spicy chicken filling.',
    category: 'Food',
    subCategory: 'Sourdough Sandwiches & Canapes',
    type: 'non-veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947'
  },

  // 9. Burgers (Page 7)
  {
    id: 'f-burg-1',
    name: 'Classic Veg Burger',
    price: '₹160',
    desc: 'Juicy Veg patty, cheese slice and vegetables with potato chips.',
    category: 'Food',
    subCategory: 'Burgers',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
  },
  {
    id: 'f-burg-2',
    name: 'Nashville Paneer Heat Burger',
    price: '₹180',
    desc: 'Crispy Paneer patty, Cheese slice and vegetables with potato chips.',
    category: 'Food',
    subCategory: 'Burgers',
    type: 'veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349'
  },
  {
    id: 'f-burg-3',
    name: 'Crispy Fried Chicken Beast Burger',
    price: '₹210',
    desc: 'Crunchy fried chicken loaded with hot spicy sauce and cheese with potato chips.',
    category: 'Food',
    subCategory: 'Burgers',
    type: 'non-veg',
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b'
  },

  // 10. Special Food Combos (Page 8)
  {
    id: 'f-combo-1',
    name: '01 | Classic Veg Burger Combo',
    price: '₹329',
    desc: 'Classic Veg Burger + French Fries + Mocktail. Fresh veggies patty with crisp lettuce, tomato, onion and special sauce in a soft bun, served with crispy golden fries and your choice of refreshing mocktail.',
    category: 'Food',
    subCategory: 'Special Food Combos',
    type: 'veg',
    tag: 'Recommended',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
  },
  {
    id: 'f-combo-2',
    name: '02 | Crispy Chicken Burger Combo',
    price: '₹429',
    desc: 'Crispy Chicken Burger + Chicken Nuggets + Mocktail. Juicy crispy chicken fillet with lettuce, cheese and mayo in a soft bun, served with crunchy chicken nuggets, signature dip, and your choice of refreshing mocktail.',
    category: 'Food',
    subCategory: 'Special Food Combos',
    type: 'non-veg',
    tag: 'Chef Recommendation',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b'
  },

  // ==========================================
  // --- COFFEE & BEVERAGES ---
  // ==========================================

  // 1. Signature Hot Coffee Collection (Page 12)
  {
    id: 'c-hot-1',
    name: 'Velvet Cappuccino',
    price: '₹170',
    desc: 'A rich espresso crowned with silky steamed milk and a velvety foam finish.',
    category: 'Coffee',
    subCategory: 'Signature Hot Coffee',
    type: 'veg',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213'
  },
  {
    id: 'c-hot-2',
    name: 'Golden Latte',
    price: '₹170',
    desc: 'Smooth espresso blended with creamy steamed milk for a perfectly balanced cup.',
    category: 'Coffee',
    subCategory: 'Signature Hot Coffee',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f'
  },
  {
    id: 'c-hot-3',
    name: 'Cloud Flat White',
    price: '₹170',
    desc: 'Double-shot espresso with micro-foamed milk, delivering a bold yet silky texture.',
    category: 'Coffee',
    subCategory: 'Signature Hot Coffee',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61'
  },
  {
    id: 'c-hot-4',
    name: 'Midnight Mocha',
    price: '₹180',
    desc: 'Premium espresso meets luxurious chocolate and steamed milk for a decadent delight.',
    category: 'Coffee',
    subCategory: 'Signature Hot Coffee',
    type: 'veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e'
  },
  {
    id: 'c-hot-5',
    name: 'Hazelnut Harmony Latte',
    price: '₹200',
    desc: 'A creamy latte infused with roasted hazelnut syrup and aromatic espresso.',
    category: 'Coffee',
    subCategory: 'Signature Hot Coffee',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772'
  },
  {
    id: 'c-hot-6',
    name: 'Caramel Royale Latte',
    price: '₹200',
    desc: 'Smooth espresso layered with buttery caramel and steamed milk for a sweet finish.',
    category: 'Coffee',
    subCategory: 'Signature Hot Coffee',
    type: 'veg',
    tag: 'Recommended',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213'
  },
  {
    id: 'c-hot-7',
    name: 'Vanilla Velvet Latte',
    price: '₹200',
    desc: 'Classic espresso paired with rich vanilla and creamy milk for timeless comfort.',
    category: 'Coffee',
    subCategory: 'Signature Hot Coffee',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c'
  },
  {
    id: 'c-hot-8',
    name: 'Shot Doppio',
    price: '₹100',
    desc: 'Intense shots of premium espresso with a bold aroma and smooth finish.',
    category: 'Coffee',
    subCategory: 'Signature Hot Coffee',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04'
  },
  {
    id: 'c-hot-9',
    name: 'Classic Americano',
    price: '₹140',
    desc: 'Fresh espresso blended with hot water for a clean, rich, and full-bodied coffee.',
    category: 'Coffee',
    subCategory: 'Signature Hot Coffee',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd'
  },

  // 2. Espresso Refreshers (Page 13)
  {
    id: 'c-ref-1',
    name: 'Arctic Americano',
    price: '₹150',
    desc: 'Bold espresso served over ice for a crisp and refreshing coffee experience.',
    category: 'Coffee',
    subCategory: 'Espresso Refreshers',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c'
  },
  {
    id: 'c-ref-2',
    name: 'Silk Iced Latte',
    price: '₹170',
    desc: 'Smooth espresso combined with chilled milk for a cool and creamy classic.',
    category: 'Coffee',
    subCategory: 'Espresso Refreshers',
    type: 'veg',
    tag: 'Bestseller',
    image: '/images/hero_coffee.jpg'
  },
  {
    id: 'c-ref-3',
    name: 'Sparkling Espresso Tonic',
    price: '₹240',
    desc: 'A vibrant mix of rich espresso and tonic water with a refreshing citrus finish.',
    category: 'Coffee',
    subCategory: 'Espresso Refreshers',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5'
  },
  {
    id: 'c-ref-4',
    name: 'Ginger Spark Espresso',
    price: '₹240',
    desc: 'Fresh espresso topped with ginger ale for a bold, fizzy, and spicy twist.',
    category: 'Coffee',
    subCategory: 'Espresso Refreshers',
    type: 'veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574'
  },
  {
    id: 'c-ref-5',
    name: 'Citrus Sunrise Espresso',
    price: '₹220',
    desc: 'Bright orange flavors blended with premium espresso for a sweet and tangy fusion.',
    category: 'Coffee',
    subCategory: 'Espresso Refreshers',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735'
  },
  {
    id: 'c-ref-6',
    name: 'Redbull Espresso',
    price: '₹250',
    desc: 'Bold espresso combined with Red Bull for an energetic and refreshing kick.',
    category: 'Coffee',
    subCategory: 'Espresso Refreshers',
    type: 'veg',
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c'
  },

  // 3. Signature Iced Teas (Page 13)
  {
    id: 'c-tea-1',
    name: 'Citrus Chill Iced Tea',
    price: '₹140',
    desc: 'Classic lemon iced tea with a refreshing citrus kick and cool finish.',
    category: 'Coffee',
    subCategory: 'Signature Iced Teas',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc'
  },
  {
    id: 'c-tea-2',
    name: 'Peach Sunset Tea',
    price: '₹140',
    desc: 'A fragrant black tea infused with juicy peach flavors and served over ice.',
    category: 'Coffee',
    subCategory: 'Signature Iced Teas',
    type: 'veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87'
  },
  {
    id: 'c-tea-3',
    name: 'Green Apple Splash Tea',
    price: '₹140',
    desc: 'Crisp green apple and chilled tea combined for a perfectly refreshing sip.',
    category: 'Coffee',
    subCategory: 'Signature Iced Teas',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd'
  },

  // 4. Artisan Cold Brews (Page 14)
  {
    id: 'c-cb-1',
    name: 'Midnight Straight Brew',
    price: '₹160',
    desc: 'Slow-steeped specialty coffee with a naturally smooth and bold flavor.',
    category: 'Coffee',
    subCategory: 'Artisan Cold Brews',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c'
  },
  {
    id: 'c-cb-2',
    name: 'Cranberry Coffee Twist',
    price: '₹190',
    desc: 'Cold brew infused with tart cranberry notes for a fruity coffee experience.',
    category: 'Coffee',
    subCategory: 'Artisan Cold Brews',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87'
  },
  {
    id: 'c-cb-3',
    name: 'Rosella Bloom Brew',
    price: '₹190',
    desc: 'Refreshing cold brew paired with floral rosella and subtle berry sweetness.',
    category: 'Coffee',
    subCategory: 'Artisan Cold Brews',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813'
  },
  {
    id: 'c-cb-4',
    name: 'Ginger Spark Cold Brew',
    price: '₹190',
    desc: 'Smooth coffee finished with spicy ginger ale for a lively, fizzy kick.',
    category: 'Coffee',
    subCategory: 'Artisan Cold Brews',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574'
  },
  {
    id: 'c-cb-5',
    name: 'Orange Zest Cold Brew',
    price: '₹190',
    desc: 'Bright citrus orange perfectly complements the rich notes of slow-brewed coffee.',
    category: 'Coffee',
    subCategory: 'Artisan Cold Brews',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735'
  },
  {
    id: 'c-cb-6',
    name: 'Tonic Breeze Cold Brew',
    price: '₹190',
    desc: 'A crisp combination of cold brew coffee and tonic water with a refreshing finish.',
    category: 'Coffee',
    subCategory: 'Artisan Cold Brews',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5'
  },
  {
    id: 'c-cb-7',
    name: 'Vietnamese Velvet Brew',
    price: '₹190',
    desc: 'Strong cold brew blended with creamy sweet milk for an authentic Vietnamese-style delight.',
    category: 'Coffee',
    subCategory: 'Artisan Cold Brews',
    type: 'veg',
    tag: 'Bestseller',
    image: '/images/pairing_saigon.jpg'
  },
  {
    id: 'c-cb-8',
    name: 'Honey Cold Brew (Special)',
    price: '₹190',
    desc: 'Strong cold brew blended with creamy organic honey and basil Indian style delight.',
    category: 'Coffee',
    subCategory: 'Artisan Cold Brews',
    type: 'veg',
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c'
  },

  // 5. Signature Coffee Frappes (Page 15)
  {
    id: 'c-frap-1',
    name: 'Classic Frost Frappe',
    price: '₹240',
    desc: 'Blended espresso, milk, and ice for a creamy café-style refreshment.',
    category: 'Coffee',
    subCategory: 'Signature Coffee Frappes',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699'
  },
  {
    id: 'c-frap-2',
    name: 'Mocha Frost Frappe',
    price: '₹260',
    desc: 'Smooth coffee and rich chocolate blended into a perfectly chilled treat.',
    category: 'Coffee',
    subCategory: 'Signature Coffee Frappes',
    type: 'veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e'
  },
  {
    id: 'c-frap-3',
    name: 'Hazelnut Bliss Frappe',
    price: '₹260',
    desc: 'Creamy coffee shake with roasted hazelnut flavors and a velvety finish.',
    category: 'Coffee',
    subCategory: 'Signature Coffee Frappes',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772'
  },
  {
    id: 'c-frap-4',
    name: 'Biscoff Cookie Crunch Frappe',
    price: '₹280',
    desc: 'Creamy espresso blended with caramelized Biscoff cookies for irresistible crunch.',
    category: 'Coffee',
    subCategory: 'Signature Coffee Frappes',
    type: 'veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87'
  },
  {
    id: 'c-frap-5',
    name: 'Nutella Indulgence Frappe',
    price: '₹280',
    desc: 'A luxurious blend of espresso, Nutella, milk, and ice topped with chocolate goodness.',
    category: 'Coffee',
    subCategory: 'Signature Coffee Frappes',
    type: 'veg',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699'
  },
  {
    id: 'c-frap-6',
    name: 'Tiramisu Delight Frappe',
    price: '₹280',
    desc: 'Inspired by the classic Italian dessert with coffee, cocoa, and creamy sweetness.',
    category: 'Coffee',
    subCategory: 'Signature Coffee Frappes',
    type: 'veg',
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e'
  },

  // 6. Signature Shakes (Page 16)
  {
    id: 'c-shk-1',
    name: 'Choco Chip Bliss',
    price: '₹240',
    desc: 'Rich chocolate shake blended with crunchy choco chips for a smooth and indulgent treat.',
    category: 'Coffee',
    subCategory: 'Signature Shakes',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699'
  },
  {
    id: 'c-shk-2',
    name: 'Oreo Dream Shake',
    price: '₹280',
    desc: 'Creamy milkshake loaded with crushed Oreo cookies and velvety vanilla goodness.',
    category: 'Coffee',
    subCategory: 'Signature Shakes',
    type: 'veg',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
  },
  {
    id: 'c-shk-3',
    name: 'KitKat Crunch',
    price: '₹280',
    desc: 'A delicious fusion of creamy milk and crispy KitKat chunks with a chocolate finish.',
    category: 'Coffee',
    subCategory: 'Signature Shakes',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699'
  },
  {
    id: 'c-shk-4',
    name: 'Brownie Heaven',
    price: '₹280',
    desc: 'Thick chocolate shake blended with fudgy brownie pieces for the ultimate dessert experience.',
    category: 'Coffee',
    subCategory: 'Signature Shakes',
    type: 'veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e'
  },
  {
    id: 'c-shk-5',
    name: 'Mango Paradise',
    price: '₹280',
    desc: 'Refreshing tropical mango shake made with ripe mangoes and creamy milk.',
    category: 'Coffee',
    subCategory: 'Signature Shakes',
    type: 'veg',
    tag: 'Recommended',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696'
  },
  {
    id: 'c-shk-6',
    name: 'Strawberry Velvet',
    price: '₹280',
    desc: 'Fresh strawberry milkshake with a sweet, fruity flavor and silky texture.',
    category: 'Coffee',
    subCategory: 'Signature Shakes',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888'
  },
  {
    id: 'c-shk-7',
    name: 'Blueberry Bliss',
    price: '₹280',
    desc: 'A smooth blueberry shake bursting with juicy berries and creamy richness.',
    category: 'Coffee',
    subCategory: 'Signature Shakes',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888'
  },
  {
    id: 'c-shk-8',
    name: 'Caramel Banana Royale',
    price: '₹280',
    desc: 'Sweet banana blended with buttery caramel for a rich and satisfying shake.',
    category: 'Coffee',
    subCategory: 'Signature Shakes',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699'
  },
  {
    id: 'c-shk-9',
    name: 'Kiwi Banana Fusion',
    price: '₹280',
    desc: 'A refreshing blend of tangy kiwi and creamy banana with a tropical twist.',
    category: 'Coffee',
    subCategory: 'Signature Shakes',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696'
  },

  // 7. Matcha Collection (Page 17)
  {
    id: 'c-mat-1',
    name: 'Classic Iced Matcha Latte',
    price: '₹240',
    desc: 'Premium ceremonial matcha whisked with chilled milk for a smooth and refreshing drink.',
    category: 'Coffee',
    subCategory: 'Matcha Collection',
    type: 'veg',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a'
  },
  {
    id: 'c-mat-2',
    name: 'Warm Zen Matcha Latte',
    price: '₹240',
    desc: 'Comforting hot matcha with creamy steamed milk and earthy green tea notes.',
    category: 'Coffee',
    subCategory: 'Matcha Collection',
    type: 'veg',
    image: '/images/pairing_kyoto.jpg'
  },
  {
    id: 'c-mat-3',
    name: 'Mango Cloud Matcha',
    price: '₹240',
    desc: 'Fluffy mango cream layered over vibrant matcha for a tropical and creamy indulgence.',
    category: 'Coffee',
    subCategory: 'Matcha Collection',
    type: 'veg',
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a'
  },
  {
    id: 'c-mat-4',
    name: 'Tropical Mango Matcha',
    price: '₹240',
    desc: 'Sweet ripe mango blended with premium matcha for a refreshing fusion of flavors.',
    category: 'Coffee',
    subCategory: 'Matcha Collection',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a'
  },
  {
    id: 'c-mat-5',
    name: 'Citrus Sunrise Matcha',
    price: '₹240',
    desc: 'Fresh orange and earthy matcha come together for a bright, refreshing, and unique beverage.',
    category: 'Coffee',
    subCategory: 'Matcha Collection',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a'
  },

  // 8. Premium Mocktails (Page 18)
  {
    id: 'c-mock-1',
    name: 'Mint Breeze Mojito',
    price: '₹180',
    desc: 'Fresh mint, lime, and sparkling soda create a timeless cooling refresher.',
    category: 'Coffee',
    subCategory: 'Premium Mocktails',
    type: 'veg',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd'
  },
  {
    id: 'c-mock-2',
    name: 'Peach Paradise Mojito',
    price: '₹180',
    desc: 'Sweet peach and mint blended with sparkling fizz for a tropical delight.',
    category: 'Coffee',
    subCategory: 'Premium Mocktails',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87'
  },
  {
    id: 'c-mock-3',
    name: 'Apple Orchard Mojito',
    price: '₹180',
    desc: 'Crisp green apple flavors balanced with mint and citrus freshness.',
    category: 'Coffee',
    subCategory: 'Premium Mocktails',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc'
  },
  {
    id: 'c-mock-4',
    name: 'Kiwi Crush Mojito',
    price: '₹180',
    desc: 'Tangy kiwi, mint, and soda come together in a vibrant tropical cooler.',
    category: 'Coffee',
    subCategory: 'Premium Mocktails',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd'
  },
  {
    id: 'c-mock-5',
    name: 'Blueberry Spark Mojito',
    price: '₹180',
    desc: 'Juicy blueberries mixed with mint and sparkling soda for a refreshing twist.',
    category: 'Coffee',
    subCategory: 'Premium Mocktails',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87'
  },
  {
    id: 'c-mock-6',
    name: 'Blue Lagoon Splash',
    price: '₹180',
    desc: 'An eye-catching blue citrus cooler with sweet and tangy flavors that refresh every sip.',
    category: 'Coffee',
    subCategory: 'Premium Mocktails',
    type: 'veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd'
  },

  // 9. Special Coffee & Chocolate (Page 19)
  {
    id: 'c-spec-1',
    name: '01 | Mont Blanc',
    price: '₹220',
    desc: "Inspired by the elegance of the French dessert, Mont Blanc is our signature indulgence crafted with rich espresso, velvety steamed milk, and luscious cream. Finished with delicate notes of chocolate and a silky texture. Tasting notes: Rich · Creamy · Indulgent.",
    category: 'Coffee',
    subCategory: 'Special Coffee & Chocolate',
    type: 'veg',
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1572442388796-11668ba67e53',
    notes: 'Rich · Creamy · Indulgent'
  },
  {
    id: 'c-spec-2',
    name: '02 | Tiger Bomb',
    price: '₹240',
    desc: 'A bold and powerful coffee creation for those who love intense flavours. Combines robust espresso with creamy milk and decadent chocolate notes, delivering an explosive burst of energy. Tasting notes: Bold · Powerful · Irresistible.',
    category: 'Coffee',
    subCategory: 'Special Coffee & Chocolate',
    type: 'veg',
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e',
    notes: 'Bold · Powerful · Irresistible'
  },
  {
    id: 'c-spec-3',
    name: '03 | Hot Chocolate',
    price: '₹160',
    desc: 'A comforting classic made with premium cocoa and perfectly steamed milk. Smooth, rich, and deeply satisfying warmth of pure chocolate bliss with every sip. Tasting notes: Warm · Velvety · Comforting.',
    category: 'Coffee',
    subCategory: 'Special Coffee & Chocolate',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed',
    notes: 'Warm · Velvety · Comforting'
  },
  {
    id: 'c-spec-4',
    name: '04 | Cold Chocolate',
    price: '₹190',
    desc: "An indulgent blend of premium chocolate, chilled milk, and ice, crafted to perfection. Creamy, refreshing, and decadently smooth companion for every chocolate lover. Tasting notes: Creamy · Refreshing · Chocolatey.",
    category: 'Coffee',
    subCategory: 'Special Coffee & Chocolate',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699',
    notes: 'Creamy · Refreshing · Chocolatey'
  },
  {
    id: 'c-spec-5',
    name: '05 | Special Caelio Honey Cold Brew',
    price: '₹190',
    desc: 'Our signature slow-steeped cold brew coffee delicately infused with natural honey for a smooth, naturally sweet finish with subtle floral notes. Tasting notes: Smooth · Naturally Sweet · Exclusively Caelio.',
    category: 'Coffee',
    subCategory: 'Special Coffee & Chocolate',
    type: 'veg',
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c',
    notes: 'Smooth · Naturally Sweet · Exclusively Caelio'
  },

  // ==========================================
  // --- DESSERTS ---
  // ==========================================

  // Brownie Collection (Page 9)
  {
    id: 'd-brw-1',
    name: '01 | Classic Fudge',
    price: '₹179',
    desc: 'Warm, rich and intensely fudgy chocolate brownie, served with creamy vanilla ice cream and finished with silky chocolate sauce.',
    category: 'Desserts',
    subCategory: 'Brownie Collection',
    type: 'veg',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c'
  },
  {
    id: 'd-brw-2',
    name: '02 | Biscoff Brownie',
    price: '₹229',
    desc: 'Warm fudgy brownie layered with smooth Biscoff spread, crunchy Biscoff crumble and creamy vanilla ice cream.',
    category: 'Desserts',
    subCategory: 'Brownie Collection',
    type: 'veg',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51'
  },
  {
    id: 'd-brw-3',
    name: '03 | Nutella Hazelnut',
    price: '₹239',
    desc: 'A decadent warm chocolate brownie generously finished with Nutella, roasted hazelnuts and creamy vanilla ice cream.',
    category: 'Desserts',
    subCategory: 'Brownie Collection',
    type: 'veg',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1589218436045-ee320057f443'
  },
  {
    id: 'd-brw-4',
    name: '04 | Brownie Sizzler ★',
    price: '₹299',
    desc: 'Our signature brownie served sizzling hot with vanilla ice cream, chocolate sauce and a dramatic tableside finish.',
    category: 'Desserts',
    subCategory: 'Brownie Collection',
    type: 'veg',
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87'
  },
  {
    id: 'd-brw-5',
    name: '05 | Salted Caramel',
    price: '₹229',
    desc: 'Warm fudgy chocolate brownie paired with vanilla ice cream, silky salted caramel and caramelised nuts for the perfect balance.',
    category: 'Desserts',
    subCategory: 'Brownie Collection',
    type: 'veg',
    tag: 'Recommended',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff'
  }
];

export const energyBowlAddOns = [
  { name: 'Extra paneer', price: '₹60' },
  { name: 'Extra boiled egg', price: '₹60' },
  { name: 'Extra Chicken', price: '₹80' }
];

export const categoryStructure: MenuCategoryGroup[] = [
  {
    id: 'food',
    name: 'Food',
    tagline: 'Thoughtfully Crafted. Happily Served. Where Every Bite Feels Like Art.',
    icon: '🍽️',
    subCategories: [
      {
        name: 'Breakfast',
        description: 'Hearty morning platters, avocado sourdough toasts & savory bhurji brioche',
        items: menuData.filter((i) => i.category === 'Food' && i.subCategory === 'Breakfast')
      },
      {
        name: 'Energy Bowls',
        description: 'Nutrient-rich macro power bowls with baked vegetables & protein',
        items: menuData.filter((i) => i.category === 'Food' && i.subCategory === 'Energy Bowls'),
        addOns: energyBowlAddOns
      },
      {
        name: 'Choice of Eggs',
        description: 'Certified farm eggs cooked to order with sourdough & fresh salad',
        items: menuData.filter((i) => i.category === 'Food' && i.subCategory === 'Choice of Eggs')
      },
      {
        name: 'Pasta & Spaghetti',
        description: 'Classic Italian pastas and in-house special curry creations with garlic bread',
        items: menuData.filter((i) => i.category === 'Food' && i.subCategory === 'Pasta & Spaghetti')
      },
      {
        name: 'Special Fries',
        description: 'Golden crispy fries seasoned with Nagpur Saoji spices, parmesan & herbs',
        items: menuData.filter((i) => i.category === 'Food' && i.subCategory === 'Special Fries')
      },
      {
        name: 'Nachos',
        description: 'Crunchy loaded tortilla chips with Mexican salsa, melted cheese & chicken',
        items: menuData.filter((i) => i.category === 'Food' && i.subCategory === 'Nachos')
      },
      {
        name: 'Deep & Fried',
        description: 'Crispy potato pops, spiced sticks & golden chicken nuggets with house dips',
        items: menuData.filter((i) => i.category === 'Food' && i.subCategory === 'Deep & Fried')
      },
      {
        name: 'Sourdough Sandwiches & Canapes',
        description: 'Artisanal sourdough melts & bite-sized crispy party canapés with potato chips',
        items: menuData.filter((i) => i.category === 'Food' && i.subCategory === 'Sourdough Sandwiches & Canapes')
      },
      {
        name: 'Burgers',
        description: 'Gourmet burgers with fresh vegetables, Nashville paneer & crispy chicken',
        items: menuData.filter((i) => i.category === 'Food' && i.subCategory === 'Burgers')
      },
      {
        name: 'Special Food Combos',
        description: 'Great Food. Better Together — burger, fries, nuggets & refreshing mocktail combos',
        items: menuData.filter((i) => i.category === 'Food' && i.subCategory === 'Special Food Combos')
      }
    ]
  },
  {
    id: 'coffee',
    name: 'Coffee & Beverages',
    tagline: 'Thoughtfully Brewed for Brighter Days. Single Origin, Cold Brews & Vibrant Sips.',
    icon: '☕',
    subCategories: [
      {
        name: 'Signature Hot Coffee',
        description: 'Double-shot espresso extractions with silky microfoam & steamed milk',
        items: menuData.filter((i) => i.category === 'Coffee' && i.subCategory === 'Signature Hot Coffee')
      },
      {
        name: 'Espresso Refreshers',
        description: 'Chilled iced lattes, sparkling tonics, citrus sunrise & Red Bull espresso',
        items: menuData.filter((i) => i.category === 'Coffee' && i.subCategory === 'Espresso Refreshers')
      },
      {
        name: 'Signature Iced Teas',
        description: 'Crisp cold-steeped teas with lemon, juicy peach & green apple splash',
        items: menuData.filter((i) => i.category === 'Coffee' && i.subCategory === 'Signature Iced Teas')
      },
      {
        name: 'Artisan Cold Brews',
        description: 'Slow 18-hour cold extractions infused with botanical fruits, tonic & spices',
        items: menuData.filter((i) => i.category === 'Coffee' && i.subCategory === 'Artisan Cold Brews')
      },
      {
        name: 'Signature Coffee Frappes',
        description: 'Chilled blended espresso frappes with Biscoff, Nutella & Tiramisu',
        items: menuData.filter((i) => i.category === 'Coffee' && i.subCategory === 'Signature Coffee Frappes')
      },
      {
        name: 'Signature Shakes',
        description: 'Decadent dessert milkshakes loaded with Oreo, KitKat, brownie & tropical fruits',
        items: menuData.filter((i) => i.category === 'Coffee' && i.subCategory === 'Signature Shakes')
      },
      {
        name: 'Matcha Collection',
        description: 'Pure ceremonial stoneground green tea from Uji, Kyoto with mango & citrus',
        items: menuData.filter((i) => i.category === 'Coffee' && i.subCategory === 'Matcha Collection')
      },
      {
        name: 'Premium Mocktails',
        description: 'Refreshing muddled mint mojitos, blue lagoon & citrus coolers',
        items: menuData.filter((i) => i.category === 'Coffee' && i.subCategory === 'Premium Mocktails')
      },
      {
        name: 'Special Coffee & Chocolate',
        description: 'Signature Mont Blanc, Tiger Bomb, rich hot/cold chocolate & honey cold brew',
        items: menuData.filter((i) => i.category === 'Coffee' && i.subCategory === 'Special Coffee & Chocolate')
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Brownie Collection',
    tagline: 'Warm Fudgy Indulgence. Made for Real Moments.',
    icon: '🍫',
    subCategories: [
      {
        name: 'Brownie Collection',
        description: 'Warm fudgy brownies, Biscoff, Nutella hazelnut, salted caramel & sizzling brownie',
        items: menuData.filter((i) => i.category === 'Desserts' && i.subCategory === 'Brownie Collection')
      }
    ]
  }
];
