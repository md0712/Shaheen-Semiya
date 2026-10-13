import React from 'react';
import { motion } from 'framer-motion';
import { X, Clock, Users, ChefHat, CheckSquare, Sparkles } from 'lucide-react';
import Button from './Button';

export default function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-forest-950/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gold-400/30 z-10 p-6 sm:p-8 md:p-10"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-ivory-200 text-stone-500 hover:text-forest-900 hover:bg-wheat-300 transition-colors z-20"
          aria-label="Close recipe"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Recipe Image Banner */}
        <div className="relative h-60 sm:h-72 -mx-6 sm:-mx-8 md:-mx-10 -mt-6 sm:-mt-8 md:-mt-10 overflow-hidden rounded-t-3xl mb-6">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold-500 text-forest-950 uppercase tracking-wider inline-block mb-2">
              {recipe.difficulty} • Culinary Kitchen
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory-100">
              {recipe.title}
            </h2>
            <p className="text-sm text-ivory-300/90 font-light mt-1">
              {recipe.subtitle}
            </p>
          </div>
        </div>

        {/* Meta Bar */}
        <div className="grid grid-cols-3 gap-3 p-4 bg-ivory-200 rounded-2xl border border-wheat-300/80 mb-6 text-center">
          <div className="flex flex-col items-center">
            <Clock className="w-4 h-4 text-gold-600 mb-1" />
            <span className="text-[10px] uppercase tracking-wider text-stone-400">Prep Time</span>
            <span className="text-xs sm:text-sm font-semibold text-forest-950">{recipe.prepTime}</span>
          </div>
          <div className="flex flex-col items-center border-x border-wheat-300">
            <ChefHat className="w-4 h-4 text-gold-600 mb-1" />
            <span className="text-[10px] uppercase tracking-wider text-stone-400">Cook Time</span>
            <span className="text-xs sm:text-sm font-semibold text-forest-950">{recipe.cookTime}</span>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-4 h-4 text-gold-600 mb-1" />
            <span className="text-[10px] uppercase tracking-wider text-stone-400">Yield</span>
            <span className="text-xs sm:text-sm font-semibold text-forest-950">{recipe.servings}</span>
          </div>
        </div>

        {/* Paired Product Callout */}
        <div className="flex items-center gap-3 p-3.5 bg-blue-50/90 text-royal-950 rounded-xl mb-6 border border-blue-200">
          <Sparkles className="w-5 h-5 text-royal-600 shrink-0" />
          <p className="text-xs">
            <span className="text-royal-800 font-semibold">Recommended Vermicelli: </span>
            {recipe.recommendedProduct}
          </p>
        </div>

        {/* Ingredients & Instructions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-royal-950 mb-3 flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-royal-700" />
              Ingredients Checklist
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
              {recipe.ingredients.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-ivory-100 p-2 rounded-lg border border-wheat-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-600 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold text-royal-950 mb-3 flex items-center gap-2">
              <ChefHat className="w-4 h-4 text-royal-700" />
              Preparation Steps
            </h3>
            <ol className="space-y-3 text-xs sm:text-sm text-stone-700">
              {recipe.instructions.map((step, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-royal-700 text-white font-bold text-[11px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-wheat-200 flex justify-end">
          <Button variant="primary" onClick={onClose} size="sm">
            Close Recipe
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
