export default interface IData {
  id: number;
  name: string;
  price: number;
  discount: number;
  introduction: string;
  details: [
    { Cuisine: string },
    { "Recipe Type": string },
    { Difficulty: string },
    { "Preparation Time": string },
    { "Cooking Time": string },
    { Serves: string }
  ];
  ingredients: string[];
  recipe: string[];
}
