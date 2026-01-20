import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Safety = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          🛡️ Kitchen Safety Guidelines
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Before You Start */}
          <Card className="bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">🧼 Before You Start</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>Wash your hands with soap and water for 20 seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>Clean all countertops and cooking surfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>Tie back long hair and wear clean clothes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>Have an adult nearby to supervise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>Read the entire recipe before starting</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* During Cooking */}
          <Card className="bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">👨‍🍳 During Cooking</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>Ask for help with sharp knives or tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>Use clean bowls and utensils for each step</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>Don't taste raw batter or dough</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>Keep work area clean as you go</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>Follow recipe steps in order</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Allergen Safety */}
        <Card className="bg-orange-50 border-orange-200 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-800">⚠️ Allergen Safety</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-orange-800">Common Allergens to Watch:</h3>
                <ul className="space-y-2 text-orange-700">
                  <li>• Peanuts and tree nuts</li>
                  <li>• Dairy products (milk, cheese, yogurt)</li>
                  <li>• Eggs</li>
                  <li>• Wheat and gluten</li>
                  <li>• Soy products</li>
                  <li>• Sesame seeds</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-orange-800">Safety Rules:</h3>
                <ul className="space-y-2 text-orange-700">
                  <li>• Always check ingredient labels</li>
                  <li>• Ask about allergies before sharing</li>
                  <li>• Use separate utensils for allergen-free treats</li>
                  <li>• Clean hands thoroughly after handling allergens</li>
                  <li>• Tell an adult if you feel unwell</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Clean Up */}
        <Card className="bg-white/90 backdrop-blur mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-800">🧹 Clean Up Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-1">✓</span>
                <span>Put away all ingredients and tools</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-1">✓</span>
                <span>Wash all dishes and utensils used</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-1">✓</span>
                <span>Wipe down countertops and tables</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-1">✓</span>
                <span>Store leftovers properly in the refrigerator</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-1">✓</span>
                <span>Take out the trash if needed</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Emergency Info */}
        <Card className="bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-2xl text-red-800">🚨 In Case of Emergency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-red-700">
              <p className="font-semibold">If someone has an allergic reaction:</p>
              <ul className="space-y-2 ml-4">
                <li>• Tell an adult immediately</li>
                <li>• Call emergency services (911) if severe</li>
                <li>• Know where emergency medication is kept</li>
              </ul>
              <p className="font-semibold mt-4">If someone gets hurt:</p>
              <ul className="space-y-2 ml-4">
                <li>• Stop what you're doing</li>
                <li>• Tell an adult right away</li>
                <li>• Don't try to handle serious injuries alone</li>
              </ul>
              <p className="text-sm mt-4">
                <strong>Remember:</strong> It's always better to ask for help than to risk getting hurt!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Safety;