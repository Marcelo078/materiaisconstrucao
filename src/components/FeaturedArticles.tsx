import { Link } from "react-router-dom";
import { ArrowRight, Clock, Eye } from "lucide-react";
import { products } from "@/data/products";

export const FeaturedArticles = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Artigos em Destaque
            </h2>
            <p className="text-muted-foreground mt-1">
              Análises completas dos <strong>melhores produtos</strong>
            </p>
          </div>
          <Link 
            to="/artigos" 
            className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Ver todos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <Link
              key={product.id}
              to={`/artigo/${product.slug}`}
              className="card-product group overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-secondary/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-construction-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-4xl">🔧</span>
                </div>
                <span className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-md">
                  {product.category}
                </span>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {product.shortName}: Análise Completa e Onde Comprar com os Melhores Preços
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  Descubra tudo sobre o <strong>{product.shortName}</strong> da {product.brand}. 
                  Análise detalhada, avaliações de usuários e as melhores ofertas.
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    5 min de leitura
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {Math.floor(Math.random() * 5000) + 1000} views
                  </span>
                </div>

                <div className="flex items-center gap-2 text-primary font-medium text-sm pt-2 group-hover:gap-3 transition-all">
                  Ler artigo completo <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link 
            to="/artigos" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Ver todos os artigos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
