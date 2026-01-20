export interface Recipe {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: 'Easy' | 'Very Easy';
  prepTime: string;
  servings: number;
  image: string;
  ingredients: string[];
  steps: string[];
  tips: string[];
  kidFriendly: boolean;
  allergens: string[];
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Chocolate Peanut Butter Bars",
    description: "Creamy, rich bars that require no baking at all - just chilling time!",
    category: "Bars",
    difficulty: "Very Easy",
    prepTime: "15 minutes",
    servings: 12,
    image: "https://picsum.photos/400/300?random=1",
    ingredients: [
      "2 cups graham cracker crumbs",
      "1 cup melted butter",
      "1 cup powdered sugar",
      "1 cup peanut butter",
      "1 cup chocolate chips",
      "2 tablespoons butter"
    ],
    steps: [
      "Mix graham cracker crumbs with melted butter and press into a 9x9 pan",
      "Beat peanut butter, powdered sugar, and remaining butter until smooth",
      "Spread peanut butter mixture over crust",
      "Melt chocolate chips with 2 tablespoons butter and pour on top",
      "Refrigerate for 2 hours until firm, then cut into squares"
    ],
    tips: [
      "Use a plastic knife to cut - it won't crack the chocolate layer",
      "Let bars sit at room temperature for 5 minutes before serving"
    ],
    kidFriendly: true,
    allergens: ["Peanuts", "Gluten", "Dairy"]
  },
  {
    id: 2,
    title: "Rainbow Fruit Parfait",
    description: "Colorful layers of yogurt, fruit, and granola make a healthy treat!",
    category: "Parfaits",
    difficulty: "Very Easy",
    prepTime: "10 minutes",
    servings: 4,
    image: "https://picsum.photos/400/300?random=2",
    ingredients: [
      "2 cups vanilla yogurt",
      "1 cup mixed berries (strawberries, blueberries, raspberries)",
      "1 banana, sliced",
      "1/2 cup granola",
      "2 tablespoons honey"
    ],
    steps: [
      "Layer 2 tablespoons of yogurt in the bottom of each glass",
      "Add a layer of mixed berries",
      "Add another layer of yogurt",
      "Add banana slices and a drizzle of honey",
      "Top with granola and remaining berries"
    ],
    tips: [
      "Use clear glasses to show off the rainbow layers",
      "Can be made ahead and refrigerated"
    ],
    kidFriendly: true,
    allergens: ["Nuts (in granola)", "Dairy"]
  },
  {
    id: 3,
    title: "Oreo Cookie Balls",
    description: "Crunchy, creamy truffles made with just Oreos and cream cheese!",
    category: "Balls",
    difficulty: "Easy",
    prepTime: "20 minutes",
    servings: 24,
    image: "https://picsum.photos/400/300?random=3",
    ingredients: [
      "1 package Oreo cookies (36 cookies)",
      "8 ounces cream cheese, softened",
      "1 package white chocolate chips",
      "Sprinkles for decoration"
    ],
    steps: [
      "Crush Oreos into fine crumbs (a food processor works best)",
      "Mix crushed Oreos with softened cream cheese until well combined",
      "Roll mixture into 1-inch balls and place on wax paper",
      "Melt white chocolate and dip each ball, coating completely",
      "Add sprinkles before chocolate hardens, then refrigerate 1 hour"
    ],
    tips: [
      "Chill the mixture for 30 minutes before rolling to make it easier",
      "Use a fork to dip balls in chocolate for better control"
    ],
    kidFriendly: true,
    allergens: ["Wheat", "Dairy", "Soy"]
  },
  {
    id: 4,
    title: "Frozen Banana Pops",
    description: "Simple frozen bananas coated in chocolate and toppings - perfect for hot days!",
    category: "Frozen",
    difficulty: "Very Easy",
    prepTime: "15 minutes",
    servings: 6,
    image: "https://picsum.photos/400/300?random=4",
    ingredients: [
      "3 ripe bananas",
      "1 cup chocolate chips",
      "1/2 cup chopped nuts or sprinkles",
      "6 popsicle sticks"
    ],
    steps: [
      "Peel bananas and cut in half crosswise",
      "Insert popsicle sticks into each banana half",
      "Melt chocolate chips in microwave (30 second intervals)",
      "Dip each banana in melted chocolate, coating completely",
      "Roll in toppings and freeze for 2 hours"
    ],
    tips: [
      "Use slightly green bananas for easier handling",
      "Lay on wax paper while freezing to prevent sticking"
    ],
    kidFriendly: true,
    allergens: ["Nuts", "Dairy"]
  },
  {
    id: 5,
    title: "No-Bake Cheesecake Cups",
    description: "Individual cheesecake cups with a graham cracker crust - no oven needed!",
    category: "Cups",
    difficulty: "Easy",
    prepTime: "25 minutes",
    servings: 6,
    image: "https://picsum.photos/400/300?random=5",
    ingredients: [
      "1 1/2 cups graham cracker crumbs",
      "1/3 cup melted butter",
      "8 ounces cream cheese, softened",
      "1/2 cup sugar",
      "1 teaspoon vanilla",
      "1 cup whipped topping",
      "Fresh berries for topping"
    ],
    steps: [
      "Mix graham crumbs with melted butter and divide among 6 cups",
      "Beat cream cheese and sugar until smooth",
      "Add vanilla and fold in whipped topping",
      "Spoon filling over crusts in each cup",
      "Top with berries and refrigerate 4 hours"
    ],
    tips: [
      "Make sure cream cheese is completely softened for smooth filling",
      "Can be made a day ahead"
    ],
    kidFriendly: true,
    allergens: ["Gluten", "Dairy"]
  },
  {
    id: 6,
    title: "Chocolate Avocado Mousse",
    description: "Surprisingly creamy and healthy mousse using avocado as the secret ingredient!",
    category: "Mousse",
    difficulty: "Easy",
    prepTime: "15 minutes",
    servings: 4,
    image: "https://picsum.photos/400/300?random=6",
    ingredients: [
      "2 ripe avocados",
      "1/2 cup cocoa powder",
      "1/2 cup maple syrup",
      "1/4 cup almond milk",
      "1 teaspoon vanilla extract",
      "Pinch of salt"
    ],
    steps: [
      "Scoop avocado flesh into a blender or food processor",
      "Add cocoa powder, maple syrup, almond milk, and vanilla",
      "Blend until completely smooth and creamy",
      "Taste and add more sweetener if needed",
      "Divide among 4 glasses and chill for 30 minutes"
    ],
    tips: [
      "Use very ripe avocados for the best texture",
      "Top with fresh berries or shaved chocolate"
    ],
    kidFriendly: true,
    allergens: ["Tree Nuts"]
  },
  {
    id: 7,
    title: "Yogurt Bark",
    description: "Frozen yogurt bark with colorful fruits - like a healthy ice cream bar!",
    category: "Frozen",
    difficulty: "Very Easy",
    prepTime: "10 minutes",
    servings: 8,
    image: "https://picsum.photos/400/300?random=7",
    ingredients: [
      "2 cups plain Greek yogurt",
      "2 tablespoons honey",
      "1 cup mixed berries",
      "1/4 cup granola"
    ],
    steps: [
      "Mix yogurt with honey until sweetened to your liking",
      "Spread yogurt on a baking sheet lined with parchment paper",
      "Sprinkle berries and granola over the top",
      "Freeze for 3 hours until completely firm",
      "Break into pieces and store in freezer"
    ],
    tips: [
      "Make it about 1/4 inch thick for perfect breaking",
      "Use any fruits you like - mango and kiwi work great too"
    ],
    kidFriendly: true,
    allergens: ["Nuts (in granola)", "Dairy"]
  },
  {
    id: 8,
    title: "Peanut Butter Energy Bites",
    description: "Healthy energy bites that taste like cookie dough - no baking required!",
    category: "Balls",
    difficulty: "Very Easy",
    prepTime: "15 minutes",
    servings: 20,
    image: "https://picsum.photos/400/300?random=8",
    ingredients: [
      "1 cup old-fashioned oats",
      "1/2 cup peanut butter",
      "1/3 cup honey",
      "1/3 cup mini chocolate chips",
      "1/4 cup ground flaxseed"
    ],
    steps: [
      "Mix all ingredients in a bowl until well combined",
      "Let mixture chill in refrigerator for 20 minutes",
      "Roll into 1-inch balls",
      "Store in refrigerator for up to 1 week",
      "Enjoy as a quick snack or dessert"
    ],
    tips: [
      "If mixture is too dry, add a little more honey",
      "Can add dried fruit or coconut for variety"
    ],
    kidFriendly: true,
    allergens: ["Peanuts", "Tree Nuts", "Dairy"]
  }
];

export const categories = [
  { id: 1, name: "All", icon: "🍪" },
  { id: 2, name: "Bars", icon: "🍫" },
  { id: 3, name: "Parfaits", icon: "🥛" },
  { id: 4, name: "Balls", icon: "⚪" },
  { id: 5, name: "Frozen", icon: "🧊" },
  { id: 6, name: "Cups", icon: "🍮" },
  { id: 7, name: "Mousse", icon: "🍮" }
];