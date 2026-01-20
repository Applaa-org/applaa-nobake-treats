import { Link, useParams } from '@tanstack/react-router';
import { recipes } from '@/data/recipes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, ChefHat, ArrowLeft } from 'lucide-react';

const CategoryDetail = () => {
  const params = useParams({ from: '/category/$name' });
  const categoryName = params.name;
  const categoryRecipes = recipes.filter(recipe => recipe.category === categoryName);

  const getCategoryIcon = (name: string) => {
    const icons: { [key: string]: string } = {
      'Bars': '🍫',
      'Parfaits': '🥛',
      'Balls': '⚪',
      'Frozen': '🧊',
      'Cups': '🍮',
      'Mousse': '🍮'
    };
    return icons[name] || '🍪';
  };

  if (categoryRecipes.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <Link to="/categories">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500">
              Back to Categories
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/categories">
          <Button variant="ghost" className="mb-6 text-purple-600 hover:text-purple-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Button>
        </Link>

        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-4">{getCategoryIcon(categoryName)}</div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            {categoryName}
          </h1>
          <p className="text-xl text-gray-600">
            {categoryRecipes.length} delicious no-bake {categoryName.toLowerCase()} recipes
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryRecipes.map((recipe) => (
            <Link key={recipe.id} to="/recipe/$id" params={{ id: recipe.id.toString() }}>
              <Card className="h-full hover:shadow-xl transition-all transform hover:scale-105 bg-white/90 backdrop-blur">
                <div className="h-48 bg-gradient-to-br from-pink-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                  <span className="text-6xl">🍪</span>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg text-purple-800">{recipe.title}</CardTitle>
                    <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                      {recipe.difficulty}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {recipe.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {recipe.prepTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {recipe.servings} servings
                    </div>
                    <div className="flex items-center gap-1">
                      <ChefHat className="w-4 h-4" />
                      {recipe.steps.length} steps
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {recipe.allergens.map((allergen) => (
                      <Badge key={allergen} variant="outline" className="text-xs bg-orange-50 text-orange-700">
                        {allergen}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;