import { Link } from '@tanstack/react-router';
import { recipes } from '@/data/recipes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, ChefHat } from 'lucide-react';
import { MadeWithApplaa } from '@/components/made-with-applaa';

const Index = () => {
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            No-Bake Magic!
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Create delicious treats without ever turning on the oven. Perfect for kids and kitchen beginners!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/recipes"
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Browse Recipes
            </Link>
            <Link 
              to="/categories"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold border-2 border-purple-300 hover:bg-purple-50 transition-all"
            >
              Explore Categories
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white/80 backdrop-blur rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-xl font-semibold mb-2 text-purple-800">No Oven Needed</h3>
            <p className="text-gray-600">All recipes require zero baking - just mixing and chilling!</p>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">👶</div>
            <h3 className="text-xl font-semibold mb-2 text-purple-800">Kid-Safe</h3>
            <p className="text-gray-600">Perfect for young chefs with adult supervision</p>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="text-xl font-semibold mb-2 text-purple-800">Quick & Easy</h3>
            <p className="text-gray-600">Most recipes ready in under 30 minutes</p>
          </div>
        </div>

        {/* Featured Recipes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-800">Featured Treats</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
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
                    <div className="flex justify-between text-sm text-gray-500">
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
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MadeWithApplaa />
    </div>
  );
};

export default Index;