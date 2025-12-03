import { affiliateCategories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const CategoryButtons = () => {
  return (
    <section className="py-8 md:py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Explore Nossas Categorias
          </h2>
          <p className="text-muted-foreground">
            Encontre as <strong>melhores ofertas</strong> em diversas categorias
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {affiliateCategories.map((category, index) => (
            <a
              key={category.name}
              href={category.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-product p-4 text-center hover:border-primary/50 transition-all animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xs md:text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <ExternalLink className="w-3 h-3 mx-auto mt-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
