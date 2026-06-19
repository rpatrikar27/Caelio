export interface MenuItem {
  name: string;
  price: string;
  desc: string;
  type: 'veg' | 'egg' | 'non-veg';
  tag?: 'Bestseller' | 'Recommended' | 'Popular' | 'Signature' | 'Chef Recommendation';
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
  accent: string;
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'coffee',
    name: '☕ Coffee',
    accent: 'Indian Arabica heirloom single-origin beans, meticulously roasted and brewed hot or slow cold-extracted.',
    items: [
      { name: 'Velvet Cappuccino', price: '₹160', desc: 'Double espresso with silky steamed milk and a dense, velvety microfoam finish.', type: 'veg', tag: 'Bestseller' },
      { name: 'Golden Latte', price: '₹160', desc: 'Smooth house-espresso blended with creamy, lightly texturized warm milk.', type: 'veg', tag: 'Popular' },
      { name: 'Cloud Flat White', price: '₹160', desc: 'Double-shot espresso extraction combined with velvety micro-foamed milk.', type: 'veg' },
      { name: 'Midnight Mocha', price: '₹180', desc: 'Premium espresso meets luxurious liquid cocoa and texturized steamed milk.', type: 'veg', tag: 'Recommended' },
      { name: 'Hazelnut Harmony Latte', price: '₹200', desc: 'A soothing milk latte infused with roasted Piedmont hazelnut reduction.', type: 'veg', tag: 'Chef Recommendation' },
      { name: 'Caramel Royale Latte', price: '₹200', desc: 'Fresh espresso layered with house-crafted organic salted caramel and warm milk.', type: 'veg' },
      { name: 'Vanilla Velvet Latte', price: '₹200', desc: 'Classic espresso paired with sweet scraped vanilla bean pod infusion and creamy milk.', type: 'veg' },
      { name: 'Shot Doppio', price: '₹100', desc: 'Two concentrated shots of single-origin Indian heirloom estate espresso with thick crema.', type: 'veg' },
      { name: 'Classic Americano', price: '₹120', desc: 'Two shots of premium espresso diluted with pure hot water for a clean, rich body.', type: 'veg' },
      { name: 'Midnight Straight Brew', price: '₹160', desc: 'Slow-extracted specialty Chikmagalur beans, clean and exceptionally smooth with low acidity.', type: 'veg', tag: 'Bestseller' },
      { name: 'Cranberry Coffee Twist', price: '₹180', desc: 'Signature cold brew blended with tart cranberry extract for an ultra-clean, fruity coffee finish.', type: 'veg', tag: 'Signature' },
      { name: 'Rosella Bloom Brew', price: '₹180', desc: 'Our cold brew paired with floral organic hibiscus leaves and delicate dark berry reduction.', type: 'veg' },
      { name: 'Ginger Spark Cold Brew', price: '₹180', desc: 'Smooth, full-bodied cold brew combined with premium sparkling ginger extract.', type: 'veg' },
      { name: 'Orange Zest Cold Brew', price: '₹180', desc: 'Hand-peeled local orange syrup and fresh orange cold juice paired beautifully with cold brew.', type: 'veg', tag: 'Recommended' },
      { name: 'Tonic Breeze Cold Brew', price: '₹180', desc: 'A crisp combination of slow cold coffee concentrate, premium tonic water, and star anise.', type: 'veg' },
      { name: 'Vietnamese Velvet Brew', price: '₹180', desc: 'Strong cold brew poured directly over sweet condensed milk for an authentic, rich indulgence.', type: 'veg', tag: 'Chef Recommendation' }
    ]
  },
  {
    id: 'cold-coffee-frappes',
    name: '🥤 Cold Coffee & Frappes',
    accent: 'Thick, creamy frozen blends and cooling, effervescent botanical ristretto fusions.',
    items: [
      { name: 'Classic Frost Frappe', price: '₹240', desc: 'Blended house espresso, cold farm milk, and simple syrup spun with crystal ice blocks.', type: 'veg' },
      { name: 'Mocha Frost Frappe', price: '₹260', desc: 'Rich Dutch cocoa powder and sweet espresso whipped together in chocolate-coffee bliss.', type: 'veg' },
      { name: 'Hazelnut Bliss Frappe', price: '₹260', desc: 'Decadent frozen espresso shake with roasted hazelnut butter and premium cream.', type: 'veg', tag: 'Popular' },
      { name: 'Biscoff Cookie Crunch Frappe', price: '₹280', desc: 'Fresh espresso blended with caramelized Speculoos cookies, topped with Biscoff dust crumbs.', type: 'veg', tag: 'Chef Recommendation' },
      { name: 'Nutella Indulgence Frappe', price: '₹280', desc: 'A luxurious chocolate-heavy blend of espresso, authentic Nutella, and cold cream.', type: 'veg', tag: 'Signature' },
      { name: 'Tiramisu Delight Frappe', price: '₹280', desc: 'Inspired by Italy\'s finest cake—creamy mascarpone cheese notes, espresso, and cocoa.', type: 'veg' },
      { name: 'Arctic Americano', price: '₹120', desc: 'Double ristretto pulled directly over mountain spring ice blocks and clear glacier water.', type: 'veg' },
      { name: 'Silk Iced Latte', price: '₹160', desc: 'Smooth, bold espresso combined gently with chilled pasture-fed milk over a dense stack of ice.', type: 'veg' },
      { name: 'Sparkling Espresso Tonic', price: '₹240', desc: 'A high-contrast layering of hot espresso dropped dynamically over chilled tonic and Meyer lemon.', type: 'veg', tag: 'Signature' },
      { name: 'Ginger Spark Espresso', price: '₹240', desc: 'Freshly pulled single-origin espresso floated over artisanal fizzy ginger ale.', type: 'veg' },
      { name: 'Citrus Sunrise Espresso', price: '₹220', desc: 'Naturally sweet fresh orange juice and cold water layers crowned with heirloom espresso.', type: 'veg', tag: 'Recommended' }
    ]
  },
  {
    id: 'matcha',
    name: '🍵 Matcha',
    accent: 'Stoneground ceremonial Japanese Uji matcha whisked traditionally. Pure Zen in a cup.',
    items: [
      { name: 'Classic Iced Matcha Latte', price: '₹240', desc: 'Highest stoneground first-harvest Japanese matcha whisked masterfully over iced milk.', type: 'veg', tag: 'Bestseller' },
      { name: 'Warm Zen Matcha Latte', price: '₹240', desc: 'Comforting green tea powder combined with velvety steamed milk and a whisked foam top.', type: 'veg', tag: 'Signature' },
      { name: 'Mango Cloud Matcha', price: '₹240', desc: 'A stunning bicolor layer of sweet yellow Alphonso mango coulis and ceremonial matcha froth.', type: 'veg', tag: 'Popular' },
      { name: 'Tropical Mango Matcha', price: '₹240', desc: 'Diced mangoes and premium green whisked matcha served over ice with a sweet, tropical finish.', type: 'veg' },
      { name: 'Citrus Sunrise Matcha', price: '₹240', desc: 'Freshly squeezed sweet orange juices topped with green traditional matcha froth for a bright citrus spark.', type: 'veg', tag: 'Recommended' }
    ]
  },
  {
    id: 'shakes',
    name: '🧋 Shakes',
    accent: 'Ultra-creamy milk sessions decorated with fresh fruits and artisanal sweet ingredients.',
    items: [
      { name: 'Choco Chip Bliss', price: '₹240', desc: 'Decadent milk shake blended with premium dark chocolate, cocoa syrup, and roasted cocoa nibs.', type: 'veg' },
      { name: 'Oreo Dream Shake', price: '₹280', desc: 'Creamy high-fat vanilla bean milkshake loaded with crunchy crushed black Oreo cookies.', type: 'veg' },
      { name: 'KitKat Crunch', price: '₹280', desc: 'A playful fusion of premium cold milk, crushed crispy wafer KitKat bars, and fudge ribbons.', type: 'veg' },
      { name: 'Brownie Heaven', price: '₹280', desc: 'Thick, dense chocolate milkshake blended with an entire slice of our signature fudge brownie.', type: 'veg', tag: 'Bestseller' },
      { name: 'Mango Paradise', price: '₹280', desc: 'Chilled tropical shake highlighting sweet, sun-ripened Indian Alphonso mangos.', type: 'veg' },
      { name: 'Strawberry Velvet', price: '₹280', desc: 'Artisanal garden strawberry preserve milk shake featuring a delicate pink hue.', type: 'veg' },
      { name: 'Blueberry Bliss', price: '₹280', desc: 'Whole wild blueberries slow-simmered, blended with organic yogurt and sweet cream.', type: 'veg', tag: 'Popular' },
      { name: 'Caramel Banana Royale', price: '₹280', desc: 'Ripe sweet bananas whipped with a buttery salted caramel reduction and real vanilla pods.', type: 'veg' },
      { name: 'Kiwi Banana Fusion', price: '₹280', desc: 'A tart, refreshing blend of fresh green kiwi pulp and smooth sweet banana.', type: 'veg' }
    ]
  },
  {
    id: 'refreshers-mocktails',
    name: '🍹 Refreshers & Mocktails',
    accent: 'Sophisticated botanical blends, hand-muddled organic herbs, and sparkling mineral waters.',
    items: [
      { name: 'Mint Breeze Mojito', price: '₹160', desc: 'Fresh spearmint leaves, crushed Key limes, and raw cane sugar, topped with botanical soda.', type: 'veg' },
      { name: 'Peach Paradise Mojito', price: '₹160', desc: 'Rich peach nectar, fresh lime wedges, organic garden basil, and sparkling water.', type: 'veg' },
      { name: 'Apple Orchard Mojito', price: '₹160', desc: 'Crisp green Granny Smith apples muddled with fresh mint sprigs, lime, and ginger-infused fizz.', type: 'veg' },
      { name: 'Kiwi Crush Mojito', price: '₹160', desc: 'Muddled organic green kiwi, lemon juice, whole peppermint sprigs, and botanical ginger tonic.', type: 'veg' },
      { name: 'Blueberry Spark Mojito', price: '₹160', desc: 'Loaded wild blueberries mashed with cooling mint leaves, simple syrup, and sparkling soda.', type: 'veg', tag: 'Recommended' },
      { name: 'Blue Lagoon Splash', price: '₹160', desc: 'Curacao-infused blue botanical orange peel reduction, key lime, and a carbonated lift.', type: 'veg', tag: 'Popular' }
    ]
  },
  {
    id: 'iced-tea',
    name: '🫖 Iced Tea',
    accent: 'Fragrant single-estate tea leaf extractions cold-steeped over twelve hours.',
    items: [
      { name: 'Citrus Chill Iced Tea', price: '₹140', desc: 'Classic Nilgiri black tea extraction blended with fresh Meyer lemon juice and simple botanical sugars.', type: 'veg', tag: 'Popular' },
      { name: 'Peach Sunset Tea', price: '₹140', desc: 'A highly fragrant Assam tea infusion blended with sweet peach pulp, served icy cold with fresh mint leaves.', type: 'veg', tag: 'Bestseller' },
      { name: 'Green Apple Splash Tea', price: '₹140', desc: 'Sparkling green apple skins and cooling mountain tea combined for a delightfully crisp, restorative beverage.', type: 'veg' }
    ]
  },
  {
    id: 'breakfast',
    name: '🥐 Breakfast',
    accent: 'Fresh fruits, nutrient-rich Greek yogurts, gourmet open sourdough toasts, and hearty platters.',
    items: [
      { name: 'Fresh Fruits Bowl', price: '₹229', desc: 'Seasonal exotic fruits tossed lightly with organic wildflower honey and fresh mint.', type: 'veg' },
      { name: 'Coffee & Chocolate Yogurt Bowl', price: '₹269', desc: 'Thick Greek yogurt infused with our espresso extraction, dark chocolate chips, and raw organic honey.', type: 'veg' },
      { name: 'Tropical Fruit Yogurt Bowl', price: '₹269', desc: 'Creamy vanilla-bean Greek yogurt layered with fresh tropical mango pulp and chia seed pudding.', type: 'veg' },
      { name: 'Vegetarian Breakfast Platter', price: '₹349', desc: 'Roasted herb potato wedges, creamy baked beans, sautéed mushrooms, grilled tomatoes, and avocado with sourdough.', type: 'veg', tag: 'Chef Recommendation' },
      { name: 'Non-Vegetarian Breakfast Platter', price: '₹349', desc: 'Smoked chicken stripes, fluffy scrambled eggs, grilled sausages, baked beans, and buttered brioche slices.', type: 'non-veg' },
      { name: 'Smashed Avocado Open Toast', price: '₹299', desc: 'Ripe hass avocado mashed with hand-squeezed Key lime juice, sea salt, red chili, and wild sprouts on sourdough.', type: 'veg' },
      { name: 'Rustic Mushroom Open Toast', price: '₹299', desc: 'Sautéed button mushrooms flambéed with thyme and white wine reduction on herb-infused cream cheese on sourdough.', type: 'veg' },
      { name: 'Chunky Chicken Supreme Open Toast', price: '₹299', desc: 'Tender shredded chicken breast tossed in a light herb mayonnaise, sweet sun-ripened tomatoes, and melted provolone.', type: 'non-veg' },
      { name: 'Paneer Bhurji with Brioche Bun', price: '₹299', desc: 'Mouthwatering scrambled cottage cheese spiced with ginger, green chilies, and fresh coriander on butter-toasted brioche.', type: 'veg', tag: 'Chef Recommendation' }
    ]
  },
  {
    id: 'egg-specials',
    name: '🍳 Egg Specials',
    accent: 'Artisanal egg dishes made with certified organic pasture farm eggs, cooked to custom order.',
    items: [
      { name: 'Sunny Side Up', price: '₹249', desc: 'Two farm-fresh organic eggs cooked sunny-side-up, seasoned with sea salt and fresh-cracked black pepper.', type: 'egg' },
      { name: 'Creamy Scrambled Eggs', price: '₹249', desc: 'Slow-cooked farm eggs whisked with French butter and a dash of cream, served silky-soft on toasted sourdough.', type: 'egg' },
      { name: 'Boiled Eggs', price: '₹209', desc: 'Three perfectly boiled farm eggs served with organic cherry tomatoes, micro-greens, and a dash of house spice.', type: 'egg' },
      { name: 'French Omelette', price: '₹259', desc: 'A classic light French rolled omelette with a soft custardy center, cooked in premium butter and chives.', type: 'egg' },
      { name: 'Caelio Special Mushroom Cheese Omelette', price: '₹339', desc: 'Folded three-egg omelette stuffed with slow-sautéed button mushrooms, aged white cheddar, and mozzarella.', type: 'egg', tag: 'Chef Recommendation' },
      { name: 'Caelio Special Popeye Omelette', price: '₹339', desc: 'Packed with iron-rich organic baby spinach leaves, muddled cherry tomatoes, and creamy feta cheese crumbled inside.', type: 'egg' },
      { name: 'Egg Bhurji with Brioche Bun', price: '₹299', desc: 'Three organic eggs scrambled Indian-style with onions, tomatoes, and regional spices, paired with butter-toasted brioche.', type: 'egg' }
    ]
  },
  {
    id: 'sandwiches-toasties',
    name: '🥪 Sandwiches & Toasties',
    accent: 'Pressed sourdough creations and loaded baguettes with rich cheeses and select local toppings.',
    items: [
      { name: 'Exotic Vegetable Harvest Melt', price: '₹249', desc: 'Roasted zucchini, bell peppers, baby corn, and red onions with slow-melted Monterey Jack cheese on toasted artisan sourdough.', type: 'veg' },
      { name: 'Assorted Mushroom Sandwich', price: '₹249', desc: 'Wild local mushrooms tossed in butter-garlic-thyme reduction, paired with melted Gouda cheese inside pressed sourdough.', type: 'veg' },
      { name: 'Crispy Chicken Supreme', price: '₹249', desc: 'Golden-fried thin chicken breast cutlet, topped with sliced cucumber, sweet honey mustard, and fresh Swiss cheese.', type: 'non-veg' },
      { name: 'Cheese Mushroom Canape', price: '₹319', desc: 'Bite-sized crispy toasted sourdough discs loaded with soft cream cheese, caramelized butter garlic mushrooms, and mozzarella.', type: 'veg' },
      { name: 'Baked Beans Canape', price: '₹249', desc: 'Artisan toasted baguette slices layered with savory baked beans, melted cheddar cheese, and fresh cilantro sprigs.', type: 'veg' },
      { name: 'Spicy Minced Chicken Canape', price: '₹249', desc: 'Crispy toast cups stuffed with fiery minced chicken cooked with local spices, finished with fresh microgreens and jalapeño salsa.', type: 'non-veg' }
    ]
  },
  {
    id: 'burgers',
    name: '🍔 Burgers',
    accent: 'Gourmet brioche bun burgers centered around golden-crispy patty cores and fresh house-slathers.',
    items: [
      { name: 'Classic Veg Burger', price: '₹299', desc: 'House vegetable patty loaded with lettuce, tomatoes, caramelized onions, and our signature secret herb sauce.', type: 'veg' },
      { name: 'Nashville Paneer Heat Burger', price: '₹329', desc: 'Crunchy buttermilk-battered paneer dipped in hot Nashville glaze, topped with dills and cool coleslaw.', type: 'veg', tag: 'Chef Recommendation' },
      { name: 'Smokey Ranch Chicken Burger', price: '₹249', desc: 'Grilled chicken breast basted with premium hickory barbeque sauce, herb ranch, lettuce, and ripe tomatoes.', type: 'non-veg' },
      { name: 'Crispy Fried Chicken Beast Burger', price: '₹299', desc: 'Golden crispy fried chicken thigh fillet, layered with hot-melt cheddar, jalapeño rings, and sweet chili-mayo.', type: 'non-veg' }
    ]
  },
  {
    id: 'sides-fries',
    name: '🍟 Sides & Fries',
    accent: 'Hand-seasoned golden potatoes, stacked chips, and superfood macro energy bowls.',
    items: [
      { name: 'Classic Salted Fries', price: '₹199', desc: 'Thick-cut golden russet potato fries tossed in premium Himalayan pink salt. Classic and comforting.', type: 'veg' },
      { name: 'Smokey Peri Peri Fries', price: '₹199', desc: 'Crispy skin-on fries dusted liberally with a hot, tangy, smoky African bird\'s eye peri-peri spice mix.', type: 'veg' },
      { name: 'Saoji Spiced Garlic Fries', price: '₹199', desc: 'Crispy fries tossed in Nagpur\'s hyper-local aromatic Saoji masala, burnt garlic, and crisp curry leaves.', type: 'veg', tag: 'Chef Recommendation' },
      { name: 'Parmesan Herb Fries', price: '₹199', desc: 'Shoestring fries tossed in aged Italian Parmesan, roasted garlic, fresh rosemary, and extra virgin olive oil.', type: 'veg' },
      { name: 'Chilly Milly Mexican Nachos', price: '₹249', desc: 'Yellow corn tortilla chips, smothered in warm cheddar sauce, refried beans, jalapeños, and fresh pico de gallo.', type: 'veg' },
      { name: 'Melted Cheese Chicken Nachos', price: '₹289', desc: 'Crispy corn chips loaded with cheese sauce, slow-braised spiced shredded chicken, sour cream, and guacamole.', type: 'non-veg' },
      { name: 'Veg Pops', price: '₹329', desc: 'Crunchy golden nuggets stuffed with sweet corn, potato mash, and green garden peas, served with sweet chili mayo.', type: 'veg' },
      { name: 'Nord Not Cheese Pops', price: '₹299', desc: 'Light golden herbal cheddar balls with a fully molten liquid cheesy core. Pure indulgence.', type: 'veg' },
      { name: 'Stick On My Mouth', price: '₹249', desc: 'Crispy golden vegetable fingers served on elegant skewers, finished with sesame seeds and hot sweet glaze.', type: 'veg' },
      { name: 'Crispy Fried Chicken Nuggets', price: '₹249', desc: 'Hand-breaded bite-sized tender chicken breast cubes, deep-fried to crisp perfection.', type: 'non-veg' },
      { name: 'Veg Energy Bowl', price: '₹249', desc: 'Tri-color organic quinoa, baby spinach, steamed broccoli, sweet corn, chickpeas, and tahini-ginger dressing.', type: 'veg' },
      { name: 'Egg Energy Bowl', price: '₹319', desc: 'High-protein bowl loaded with organic hard-boiled eggs, fresh garden leaves, cherry tomatoes, and avocados.', type: 'egg' },
      { name: 'Chicken Energy Bowl', price: '₹249', desc: 'Spiced grilled chicken strips on a bed of long brown grain rice and sweet citrus vinaigrette splash.', type: 'non-veg' }
    ]
  },
  {
    id: 'pasta',
    name: '🍝 Pasta',
    accent: 'Authentic imported Italian wheat pastas cooked al dente with masterfully crafted sauce emulsions.',
    items: [
      { name: 'Aglio e Olio', price: '₹249', desc: 'Spaghetti pasta tossed in extra virgin olive oil, sizzling garlic cloves, red pepper flakes, and Parmesan.', type: 'veg' },
      { name: 'Truffle & Mushroom', price: '₹249', desc: 'Rich, creamy thyme-infused white sauce loaded with sautéed wild mushrooms and genuine white truffle oil.', type: 'veg' },
      { name: 'Pesto Crema & Capers', price: '₹249', desc: 'Spaghetti with traditional basil pesto sauce, heavy dairy cream, tangy capers, and toasted pine nuts.', type: 'veg' },
      { name: 'Penne Alfredo', price: '₹249', desc: 'Penne rolled in our velvety cream sauce made from fresh butter, double cream, and melted Parmesan.', type: 'veg' },
      { name: 'Penne Pink Sauce', price: '₹249', desc: 'The perfect harmony of slow-simmered San Marzano tomato pomodoro sauce, velvety sweet cream, and fresh basil.', type: 'veg' }
    ]
  },
  {
    id: 'pizza',
    name: '🍕 Pizza',
    accent: 'Artisanal sourdough bases slow cold-fermented and hand-stretched.',
    items: [] // Empty to respect "Use only Excel data, no placeholders", but we will show an clean coming soon block in the UI
  },
  {
    id: 'desserts',
    name: '🍰 Desserts',
    accent: 'Sweet oven-baked confections crafted in-house daily.',
    items: [
      { name: 'Warm Fudgy Dark Chocolate Brownie', price: '₹150', desc: 'Slow-baked with single-origin Indian cacao, featuring a dense, molten-fudge core, sugar dusting, and cocoa nib crunch.', type: 'veg' }
    ]
  },
  {
    id: 'add-ons',
    name: '➕ Add-ons',
    accent: 'A rich selection of premium coffee swaps, extra cheeses, gourmet proteins, and custom-toasted sides.',
    items: [
      { name: 'Extra Single Espresso Shot', price: '₹60', desc: 'Boost your beverage with a fresh extraction of single-origin heirloom estate coffee.', type: 'veg' },
      { name: 'Oat Milk Swap', price: '₹60', desc: 'Switch your standard milk out for creamy, planet-friendly organic barista oat milk.', type: 'veg' },
      { name: 'Almond Milk Swap', price: '₹80', desc: 'Swap to premium sugar-free roasted almond milk for a nutty flavor profile.', type: 'veg' },
      { name: 'Whipped Cream / Cold Foam', price: '₹40', desc: 'A rich cloud of texturized heavy cream or sweet milk foam atop your beverage.', type: 'veg' },
      { name: 'Salted Caramel / Hazelnut Syrup Drizzle', price: '₹40', desc: 'A standard pump of custom-reduced dessert syrup added cleanly to your cup.', type: 'veg' },
      { name: 'Extra Sourdough Slice (2 pcs)', price: '₹60', desc: 'Fresh-toasted artisan sourdough bread slices with salted pasture butter on the side.', type: 'veg' },
      { name: 'Processed Cheese Slice / Melted Cheese', price: '₹45', desc: 'Add rich melted cheddar cheese sauce or an golden slice of Amul sandwich cheese.', type: 'veg' },
      { name: 'Herb Sautéed Mushrooms', price: '₹70', desc: 'Chikmagalur wild buttons slow-sautéed in garlic oil, whole thyme leaves, and Himalayan salt.', type: 'veg' },
      { name: 'Extra Paneer Fillet', price: '₹80', desc: 'Premium thick slice of soft cottage cheese, hand-grilled with special house marinades.', type: 'veg' },
      { name: 'Premium Grilled Bacon Strip', price: '₹110', desc: 'Crispy wood-smoked sweet bacon slices cooked on flat grills for perfect crunch.', type: 'non-veg' },
      { name: 'Shredded Roasted Chicken', price: '₹99', desc: 'Tender pulled premium farm chicken marinaded in savory mountain herbs and black olive oil.', type: 'non-veg' }
    ]
  }
];

export interface PerfectPairing {
  name: string;
  tagline: string;
  coffee: string;
  food: string;
  comboPrice: string;
  description: string;
}

export const perfectPairings: PerfectPairing[] = [
  {
    name: 'The Parisian Solace',
    tagline: 'Bittersweet Cocoa Harmony',
    coffee: 'Velvet Cappuccino',
    food: 'Warm Fudgy Dark Chocolate Brownie',
    comboPrice: '₹280',
    description: 'The dense foam and bold heirloom ristretto profile of our cappuccino balances the rich, melt-in-the-mouth cocoa crumb perfectly.'
  },
  {
    name: 'The Morning Uplift',
    tagline: 'Bright & Creamy Energizer',
    coffee: 'Hazelnut Harmony Latte',
    food: 'Smashed Avocado Open Toast',
    comboPrice: '₹449',
    description: 'Fruity, tangy key lime avocado fats matched against the warm, roasted hazelnut body of single-origin coffee.'
  },
  {
    name: 'The Saigon High',
    tagline: 'Savory Sweet & Crisp Contrast',
    coffee: 'Vietnamese Velvet Brew',
    food: 'Crispy Chicken Supreme',
    comboPrice: '₹399',
    description: 'Chilled, sweet condensed milk cold extract paired alongside clear honey-mustard and crispy roasted chicken breast sourdough.'
  },
  {
    name: 'The Royal Awakening',
    tagline: 'Aclean, Clean Botanical Start',
    coffee: 'Classic Americano',
    food: 'Cheese Mushroom Canape',
    comboPrice: '₹399',
    description: 'The bold, low-acid double-shot extraction cleanses the palate after rich, melted mozzarella cream cheese and buttered garlic button mushrooms.'
  },
  {
    name: 'The Street Carnival',
    tagline: 'Sweet speculoos Meets Aromatic Spice',
    coffee: 'Biscoff Cookie Crunch Frappe',
    food: 'Saoji Spiced Garlic Fries',
    comboPrice: '₹429',
    description: 'The sweet, caramelized premium Belgian Speculoos shake beautifully balances Nagpur’s bold, spicy, dry-roasted Saoji garlic oil.'
  },
  {
    name: 'The Kyoto Zen Refresh',
    tagline: 'Leafy Matcha & Sweet Tropics',
    coffee: 'Classic Iced Matcha Latte',
    food: 'Fresh Fruits Bowl',
    comboPrice: '₹419',
    description: 'Whisked organic green ceremonial tea notes contrasted gracefully with raw honey and sweet seasonal fruit halves.'
  }
];
