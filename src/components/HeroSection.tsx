import { ArrowRight, Shield, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background py-12 md:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium animate-fade-up">
            <TrendingUp className="w-4 h-4" />
            <span>Melhores Ofertas em Materiais de Construção</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-gradient">Tudo em Construção</span>
            <br />
            <span className="text-foreground">Materiais e Ferramentas</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            As <strong>melhores análises de produtos</strong> para sua obra. Qualidade, procedência de marcas, 
            avaliações reais e os <strong>melhores preços</strong> do mercado.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="https://mercadolivre.com/sec/23DZvGp" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                Ver Ofertas Exclusivas
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="#produtos">
              <Button variant="outline" size="lg">
                Explorar Produtos
              </Button>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-5 h-5 text-success" />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="w-5 h-5 text-warning" />
              <span>Produtos Avaliados</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>Melhores Preços</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
