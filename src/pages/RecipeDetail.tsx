import { useState } from 'react';
import { Link, useParams } from '@tanstack/react-router';
import { recipes } from '@/data/recipes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, ChefHat, ArrowLeft, Heart, Share2 } from 'lucide-react';
import { toast } from 'sonner';

const RecipeDetail = () => {
  const params = useParams({ from: '/recipe/$id' });
  const recipe = recipes.find(r => r.id === Number(params.id));
  const [currentStep, setCurrentStep] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Recipe Not Found</h1>
          <Link to="/recipes">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500">
              Back to Recipes
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: recipe.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Recipe link copied to clipboard!');
    }
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/recipes">
          <Button variant="ghost" className="mb-6 text-purple-600 hover:text-purple-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Recipes
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <Card className="bg-white/90 backdrop-blur">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-3xl mb-2 text-purple-800">{recipe.title}</CardTitle>
                    <p className="text-gray-600 text-lg">{recipe.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleFavorite}
                      className={isFavorite ? 'text-red-500 border-red-300' : ''}
                    >
                      <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleShare}>
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge className="bg-pink-100 text-pink-700">{recipe.category}</Badge>
                  <Badge className="bg-purple-100 text-purple-700">{recipe.difficulty}</Badge>
                  {recipe.kidFriendly && (
                    <Badge className="bg-green-100 text-green-700">👶 Kid-Friendly</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Clock className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                    <p className="font-semibold text-purple-800">{recipe.prepTime}</p>
                    <p className="text-sm text-gray-600">Prep Time</p>
                  </div>
                  <div>
                    <Users className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                    <p className="font-semibold text-purple-800">{recipe.servings}</p>
                    <p className="text-sm text-gray-600">Servings</p>
                  </div>
                  <div>
                    <ChefHat className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                    <p className="font-semibold text-purple-800">{recipe.steps.length}</p>
                    <p className="text-sm text-gray-600">Steps</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ingredients */}
            <Card className="bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800">🥄 Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Steps */}
            <Card className="bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800">👨‍🍳 Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recipe.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                        currentStep === index 
                          ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' 
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {index + 1}
                      </div>
                      <p className={`flex-1 ${
                        currentStep === index ? 'font-semibold text-purple-800' : 'text-gray-700'
                      }`}>
                        {step}
                      </p>
                      {currentStep === index && (
                        <Button
                          size="sm"
                          onClick={() => setCurrentStep(Math.min(currentStep + 1, recipe.steps.length - 1))}
                          className="bg-gradient-to-r from-pink-500 to-purple-500"
                        >
                          Done
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                  >
                    Previous Step
                  </Button>
                  <Button
                    onClick={() => setCurrentStep(Math.min(currentStep + 1, recipe.steps.length - 1))}
                    disabled={currentStep === recipe.steps.length - 1}
                    className="bg-gradient-to-r from-pink-500 to-purple-500"
                  >
                    Next Step
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            {recipe.tips.length > 0 && (
              <Card className="bg-white/90 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-800">💡 Pro Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {recipe.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">⭐</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Allergen Warning */}
            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg text-orange-800">⚠️ Allergen Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {recipe.allergens.map((allergen) => (
                    <Badge key={allergen} variant="outline" className="bg-orange-100 text-orange-700">
                      {allergen}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-orange-700 mt-3">
                  Always check ingredient labels and ask about allergies before sharing.
                </p>
              </CardContent>
            </Card>

            {/* Safety Notice */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">👨‍👩‍👧‍👦 Safety First!</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Adult supervision required</li>
                  <li>• Wash hands before cooking</li>
                  <li>• Use clean utensils and bowls</li>
                  <li>• Ask for help with sharp tools</li>
                  <li>• Clean up when you're done</li>
                </ul>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="bg-gray-50 border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">📋 Disclaimer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  This is cooking guidance only. Always follow food safety guidelines and check with adults before trying new recipes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;