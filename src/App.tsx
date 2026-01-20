import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/Header";
import Index from "./pages/Index";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import Categories from "./pages/Categories";
import CategoryDetail from "./pages/CategoryDetail";
import About from "./pages/About";
import Safety from "./pages/Safety";

const queryClient = new QueryClient();

// Create root route
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Header />
        <Outlet />
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Create index route
const indexRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

// Create recipes route
const recipesRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/recipes',
  component: Recipes,
})

// Create recipe detail route
const recipeDetailRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/recipe/$id',
  component: RecipeDetail,
})

// Create categories route
const categoriesRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/categories',
  component: Categories,
})

// Create category detail route
const categoryDetailRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/category/$name',
  component: CategoryDetail,
})

// Create about route
const aboutRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

// Create safety route
const safetyRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/safety',
  component: Safety,
})

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  recipesRoute,
  recipeDetailRoute,
  categoriesRoute,
  categoryDetailRoute,
  aboutRoute,
  safetyRoute,
])

// Create router with proper TypeScript configuration
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;