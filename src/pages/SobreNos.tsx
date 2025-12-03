import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Users, Target, Heart, Award } from "lucide-react";

const SobreNos = () => {
  return (
    <>
      <SEOHead 
        title="Sobre Nós"
        description="Conheça o Tudo em Construção. Somos especialistas em análises de materiais de construção e ferramentas. Melhores preços e ofertas."
        keywords="sobre nós, tudo em construção, materiais de construção, análises de produtos"
      />

      <div className="min-h-screen bg-background">
        <Header />

        <main className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
              Sobre o <span className="text-gradient">Tudo em Construção</span>
            </h1>

            <div className="prose prose-lg max-w-none space-y-8">
              <div className="card-product p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Nossa Missão</h2>
                    <p className="text-muted-foreground">
                      O <strong>Tudo em Construção - Materiais e Ferramentas</strong> nasceu com o objetivo de ajudar 
                      profissionais e entusiastas da construção civil a encontrar os <strong>melhores produtos</strong> 
                      com os <strong>melhores preços</strong> do mercado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-product p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Quem Somos</h2>
                    <p className="text-muted-foreground">
                      Somos uma equipe apaixonada por construção e tecnologia. Nosso time é formado por 
                      profissionais com experiência no mercado de materiais de construção, que analisam 
                      cuidadosamente cada produto antes de recomendar aos nossos leitores.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-product p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">O Que Fazemos</h2>
                    <p className="text-muted-foreground mb-4">
                      Produzimos conteúdo de qualidade sobre:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✅ Análises detalhadas de produtos</li>
                      <li>✅ Comparativos entre marcas</li>
                      <li>✅ Guias de compra</li>
                      <li>✅ Dicas de instalação e uso</li>
                      <li>✅ Indicação dos <strong>melhores preços</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card-product p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Nosso Compromisso</h2>
                    <p className="text-muted-foreground">
                      Nos comprometemos a oferecer análises honestas e imparciais. Todos os nossos artigos 
                      são baseados em pesquisas reais, avaliações de usuários e especificações técnicas 
                      dos fabricantes. Trabalhamos como afiliados de marketplaces confiáveis para garantir 
                      que você encontre os <strong>melhores preços</strong> com segurança.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SobreNos;
