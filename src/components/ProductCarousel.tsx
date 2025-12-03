import { useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { Link } from "react-router-dom";

interface ProductCarouselProps {
  products: Product[];
  title: string;
}

export const ProductCarousel = ({ products, title }: ProductCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-8 md:py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">
          {title}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product, index) => (
          <div
            key={product.id}
            className="card-product flex-shrink-0 w-72 md:w-80 snap-start"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="aspect-square bg-secondary/50 flex items-center justify-center p-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl gradient-hero flex items-center justify-center">
                  <span className="text-2xl">🔧</span>
                </div>
                <p className="text-xs text-muted-foreground">{product.brand}</p>
              </div>
            </div>
            
            <div className="p-4 space-y-3">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md">
                {product.category}
              </span>
              
              <h3 className="font-semibold text-sm leading-tight line-clamp-2 text-foreground">
                {product.shortName}
              </h3>
              
              <p className="text-xs text-muted-foreground line-clamp-2">
                {product.name}
              </p>

              <div className="flex flex-col gap-2 pt-2">
                <Link to={`/artigo/${product.slug}`}>
                  <Button variant="outline" size="sm" className="w-full">
                    <BookOpen className="w-4 h-4 mr-1" />
                    Saiba Mais
                  </Button>
                </Link>
                <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="mercadolivre" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Comprar no ML
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
