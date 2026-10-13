import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import RecipeModal from '../components/RecipeModal';
import { recipesData } from '../data/recipes';
import { Clock, ChefHat, ArrowUpRight, Flame, Sparkles, Utensils } from 'lucide-react';
import Button from '../components/Button';

export default function Recipes() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const cookingTips = [
    {
      title: 'Never Over-Boil',
      tip: 'Vermicelli continues to soften in residual heat. Always turn off the burner when strands are al dente.',
    },
    {
      title: 'Pre-Roasted Advantage',
      tip: 'Using Shaheen Roasted Semiya eliminates uneven pan burning and infuses immediate nutty aroma into your dish.',
    },
    {
      title: 'Upma Fluffiness Secret',
      tip: 'Add vermicelli only after boiling water is seasoned with salt, then cover and keep the flame on low.',
    },
    {
      title: 'Payasam Creaminess',
      tip: 'Simmer roasted vermicelli directly in whole milk rather than water for a luscious, velvety texture.',
    },
  ];

  const filteredRecipes = recipesData.filter((recipe) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'dessert') return recipe.id === 'semiya-payasam' || recipe.id === 'semiya-kheer';
    if (activeTab === 'savory') return recipe.id === 'semiya-upma' || recipe.id === 'semiya-biryani';
    return true;
  });

  return (
    <div className="pt-28 pb-20 bg-ivory-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-gold-500/20 bg-ivory-200 text-forest-900 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span>CULINARY RECIPES</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-950 tracking-tight leading-tight">
            Shaheen Culinary Kitchen
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Time-tested traditional and contemporary vermicelli recipes curated for effortless everyday cooking and festive banquets.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-3 mb-12">
          {[
            { id: 'all', label: 'All Recipes' },
            { id: 'dessert', label: 'Festive Desserts & Kheer' },
            { id: 'savory', label: 'Savory Upma & Biryani' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-forest-900 text-ivory-100 shadow-sm font-semibold'
                  : 'bg-white text-stone-600 border border-wheat-300 hover:border-gold-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Recipe Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-20">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => setSelectedRecipe(recipe)}
              className="group bg-white rounded-2xl overflow-hidden border border-wheat-300/80 shadow-sm hover:shadow-luxury-hover hover:border-gold-400/60 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-royal-900 border border-royal-200 shadow-sm flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-royal-600" />
                    <span>{recipe.prepTime}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-blue-100 bg-[#102B6D]/90 border border-blue-400/30 px-2 py-0.5 rounded backdrop-blur-sm truncate inline-block max-w-full">
                      {recipe.recommendedProduct}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-2">
                  <div className="text-[11px] uppercase tracking-wider text-gold-600 font-semibold">
                    {recipe.subtitle}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-forest-950 group-hover:text-gold-600 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {recipe.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-wheat-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-forest-950 group-hover:text-gold-600 transition-colors flex items-center gap-1">
                  View Full Recipe
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[11px] text-stone-400 font-medium">
                  {recipe.servings}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Master Chef Tips Grid */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-wheat-300/80 shadow-md">
          <SectionTitle
            badge="CULINARY SECRETS"
            title="Chef’s Tips for Perfect Vermicelli"
            subtitle="Follow these simple expert guidelines for non-sticky, evenly cooked results in every dish."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cookingTips.map((tip, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-ivory-100 border border-wheat-200">
                <div className="w-8 h-8 rounded-lg bg-gold-400/20 text-gold-600 flex items-center justify-center font-bold text-xs mb-3">
                  0{idx + 1}
                </div>
                <h4 className="font-serif text-base font-bold text-forest-950 mb-1.5">
                  {tip.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  {tip.tip}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recipe Modal */}
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      </div>
    </div>
  );
}
