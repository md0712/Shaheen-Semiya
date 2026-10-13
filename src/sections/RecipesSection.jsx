import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import RecipeModal from '../components/RecipeModal';
import { recipesData } from '../data/recipes';
import { Clock, ArrowUpRight, ChefHat, Sparkles } from 'lucide-react';
import Button from '../components/Button';

export default function RecipesSection() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <section id="recipes" className="py-20 lg:py-28 bg-ivory-200/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <SectionTitle
            badge="CULINARY INSPIRATION"
            title="Delicious Moments in Every Strand"
            subtitle="From treasured holiday desserts to quick, wholesome breakfast staples, bring authentic culinary traditions to your dining table."
          />
        </ScrollReveal>

        {/* Editorial Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {recipesData.map((recipe, idx) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.55 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedRecipe(recipe)}
              className="group bg-white rounded-2xl overflow-hidden border border-wheat-300/70 shadow-sm hover:shadow-luxury-hover hover:border-gold-400/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Consistent 4:3 Ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <motion.img
                    src={recipe.image}
                    alt={recipe.title}
                    whileHover={{ scale: 1.09 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Preparation Time Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-royal-900 border border-royal-200 shadow-sm flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-royal-600" />
                    <span>{recipe.prepTime}</span>
                  </div>

                  {/* Paired Product Label */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-blue-100 bg-[#102B6D]/90 border border-blue-400/30 px-2 py-0.5 rounded backdrop-blur-sm truncate inline-block max-w-full">
                      {recipe.recommendedProduct}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 space-y-2">
                  <div className="text-[11px] uppercase tracking-wider text-gold-600 font-semibold">
                    {recipe.subtitle}
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold text-forest-950 group-hover:text-gold-600 transition-colors">
                    {recipe.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed font-light">
                    {recipe.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-5 pb-5 pt-2 border-t border-wheat-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-forest-950 group-hover:text-gold-600 transition-colors flex items-center gap-1">
                  View Recipe
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <span className="text-[11px] text-stone-400 font-medium">
                  {recipe.servings}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Recipes CTA */}
        <ScrollReveal delay={0.2} className="text-center mt-12">
          <Button
            variant="outline"
            to="/recipes"
            size="md"
          >
            Explore All Recipes & Cooking Guides
          </Button>
        </ScrollReveal>

        {/* Recipe Modal */}
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      </div>
    </section>
  );
}
