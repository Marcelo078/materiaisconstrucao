import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ProductCarousel } from "@/components/ProductCarousel";
import { CategoryButtons } from "@/components/CategoryButtons";
import { FeaturedArticles } from "@/components/FeaturedArticles";
import { SEOHead } from "@/components/SEOHead";
import { products, categories } from "@/data/products";

const Index = () => {
  const fechaduras = products.filter(p => p.category === "Fechaduras Digitais");
  const ferramentas = products.filter(p => p.category === "Ferramentas Elétricas");
  const cozinha = products.filter(p => p.category === "Cozinha");
  const banheiro = products.filter(p => p.category === "Banheiro");

  return (
    <>
      <SEOHead 
        title="Melhores Materiais de Construção e Ferramentas"
        description="Encontre as melhores análises de fechaduras digitais, ferramentas elétricas, materiais de construção e muito mais. Melhores preços e ofertas exclusivas."
        keywords="materiais de construção, ferramentas, fechaduras digitais, parafusadeiras, cubas inox, melhores preços, ofertas"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          
          <CategoryButtons />
          
          <div className="container mx-auto px-4" id="produtos">
            <ProductCarousel 
              products={fechaduras} 
              title="🔐 Melhores Fechaduras Digitais - Melhores Preços" 
            />
            
            <ProductCarousel 
              products={ferramentas} 
              title="🔧 Ferramentas Elétricas Profissionais - Melhores Ofertas" 
            />
            
            <ProductCarousel 
              products={cozinha} 
              title="🍳 Cubas e Acessórios para Cozinha - Melhores Marcas" 
            />
            
            <ProductCarousel 
              products={banheiro} 
              title="🚿 Banheiro e Lavanderia - Melhores Produtos" 
            />
          </div>
          
          <FeaturedArticles />
          
          {/* Newsletter / CTA Section */}
          <section className="py-16 gradient-hero">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
                Não Perca as Melhores Ofertas!
              </h2>
              <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Acesse agora as <strong>melhores ofertas</strong> em materiais de construção e ferramentas. 
                Produtos selecionados com os <strong>melhores preços</strong> do mercado.
              </p>
              <a 
                href="https://mercadolivre.com/sec/23DZvGp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-construction-dark text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-construction-dark/90 transition-all hover:-translate-y-1 shadow-card"
              >
                🛒 Ver Ofertas Exclusivas
              </a>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
