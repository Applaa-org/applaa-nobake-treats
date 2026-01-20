import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          About NoBakeTreats
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Mission */}
          <Card className="bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">🎯 Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                NoBakeTreats is dedicated to making cooking fun, safe, and accessible for everyone, especially kids and kitchen beginners. We believe that creating delicious treats should be a joyful experience that doesn't require complicated equipment or techniques.
              </p>
              <p className="text-gray-700">
                All our recipes are carefully designed to be oven-free, using simple ingredients and easy-to-follow steps that build confidence in the kitchen.
              </p>
            </CardContent>
          </Card>

          {/* Why No-Bake */}
          <Card className="bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">🌟 Why No-Bake?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>Safe for young chefs with adult supervision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>No hot ovens or stovetops required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>Perfect for hot weather or kitchens without ovens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>Quick preparation with delicious results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>Teaches basic cooking skills safely</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <Card className="bg-white/90 backdrop-blur mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-800 text-center">💖 Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">👶</div>
                <h3 className="font-semibold text-lg mb-2 text-purple-800">Kid-Friendly</h3>
                <p className="text-gray-600">
                  All recipes are designed with young chefs in mind, using simple steps and familiar ingredients.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="font-semibold text-lg mb-2 text-purple-800">Safety First</h3>
                <p className="text-gray-600">
                  We prioritize safety with clear guidelines and adult supervision recommendations for every recipe.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="font-semibold text-lg mb-2 text-purple-800">Creative Fun</h3>
                <p className="text-gray-600">
                  Cooking should be creative! Our recipes encourage personalization and fun in the kitchen.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="bg-orange-50 border-orange-200">
          <CardHeader>
            <CardTitle className="text-xl text-orange-800">📋 Important Disclaimer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-orange-700 mb-3">
              <strong>Cooking Guidance Only:</strong> NoBakeTreats provides cooking guidance and recipes for educational purposes. Always follow these important safety guidelines:
            </p>
            <ul className="space-y-2 text-orange-700">
              <li>• Adult supervision is required for all cooking activities</li>
              <li>• Always wash hands and clean work surfaces before cooking</li>
              <li>• Check ingredient labels for allergens before use</li>
              <li>• Use age-appropriate kitchen tools and techniques</li>
              <li>• Follow food safety guidelines for storage and handling</li>
              <li>• Ask for help with any steps you're unsure about</li>
            </ul>
            <p className="text-orange-700 mt-4 font-semibold">
              Remember: Cooking is fun when it's safe! Always prioritize safety in the kitchen.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;