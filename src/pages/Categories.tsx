import { Link } from '@tanstack/react-router';
import { recipes, categories } from '@/data/recipes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Categories = () => {
  const getRecipesByCategory = (categoryName: string) => {
    if (categoryName === 'All') return recipes;
    return recipes.filter(recipe => recipe.category === categoryName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Recipe Categories
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.filter(cat => cat.name !== 'All').map((category) => {
            const categoryRecipes = getRecipesByCategory(category.name);
            return (
              <Link key={category.id} to="/category/$name" params={{ name: category.name }}>
                <Card className="h-full hover:shadow-xl transition-all transform hover:scale-105 bg-white/90 backdrop-blur">
                  <CardHeader className="text-center">
                    <div className="text-6xl mb-4">{category.icon}</div>
                    <CardTitle className="text-xl text-purple-800">{category.name}</CardTitle>
                    <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                      {categoryRecipes.length} recipes
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categoryRecipes.slice(0, 3).map((recipe) => (
                        <div key={recipe.id} className="text-sm text-gray-600 truncate">
                          • {recipe.title}
                        </div>
                      ))}
                      {categoryRecipes.length > 3 && (
                        <div className="text-sm text-purple-600 font-medium">
                          +{categoryRecipes.length - 3} more...
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;