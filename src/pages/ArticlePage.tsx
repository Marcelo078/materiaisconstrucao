import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, ExternalLink, CheckCircle, Star, Shield, TrendingUp } from "lucide-react";

const ArticlePage = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
          <Link to="/" className="text-primary hover:underline">Voltar ao início</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${product.shortName}: Análise Completa - Melhores Preços e Ofertas`,
    description: `Análise completa do ${product.name}. Descubra onde comprar com os melhores preços e ofertas exclusivas.`,
    image: "/og-image.jpg",
    author: {
      "@type": "Organization",
      name: "Tudo em Construção"
    },
    publisher: {
      "@type": "Organization",
      name: "Tudo em Construção - Materiais e Ferramentas"
    },
    datePublished: "2024-01-15",
    dateModified: new Date().toISOString().split('T')[0]
  };

  return (
    <>
      <SEOHead 
        title={`${product.shortName}: Análise Completa - Melhores Preços`}
        description={`Análise detalhada do ${product.name}. Veja avaliações, especificações técnicas e onde comprar com os melhores preços e ofertas.`}
        keywords={product.keywords.join(", ") + ", melhores preços, melhores ofertas, melhores marcas"}
        ogType="article"
        article={{
          publishedTime: "2024-01-15",
          section: product.category,
          tags: product.keywords
        }}
        jsonLd={jsonLd}
      />

      <div className="min-h-screen bg-background">
        <Header />

        <main className="py-8">
          <article className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary">Início</Link>
              <span>/</span>
              <span>{product.category}</span>
              <span>/</span>
              <span className="text-foreground">{product.shortName}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Header */}
                <header className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                  
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                    <strong>{product.shortName}</strong>: Análise Completa, Avaliações e Onde Comprar com os <strong>Melhores Preços</strong>
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      Equipe Editorial
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Atualizado em {new Date().toLocaleDateString('pt-BR')}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      8 min de leitura
                    </span>
                  </div>
                </header>

                {/* Featured Image */}
                <div className="aspect-video bg-secondary rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-3xl gradient-hero flex items-center justify-center mb-4">
                      <span className="text-6xl">🔧</span>
                    </div>
                    <p className="text-muted-foreground">{product.brand}</p>
                  </div>
                </div>

                {/* CTA Box */}
                <div className="bg-amber-light rounded-2xl p-6 border-2 border-primary/20">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="font-bold text-lg text-foreground">
                        🔥 Oferta Especial - <strong>{product.shortName}</strong>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Aproveite os <strong>melhores preços</strong> disponíveis agora!
                      </p>
                    </div>
                    <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="mercadolivre" size="lg">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Preço no Mercado Livre
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-success" />
                    O que é o <strong>{product.shortName}</strong>?
                  </h2>
                  
                  <p className="text-foreground leading-relaxed">
                    O <strong>{product.name}</strong> da marca <strong>{product.brand}</strong> é um dos produtos mais procurados 
                    na categoria de <strong>{product.category}</strong>. Com excelente custo-benefício e qualidade comprovada, 
                    este produto se destaca pelas suas especificações técnicas e durabilidade.
                  </p>

                  <p className="text-foreground leading-relaxed">
                    Se você está procurando os <strong>melhores preços</strong> e <strong>melhores ofertas</strong> para 
                    <strong> {product.category.toLowerCase()}</strong>, este artigo vai te ajudar a fazer a melhor escolha. 
                    Analisamos todas as características, vantagens e desvantagens para você tomar uma decisão informada.
                  </p>

                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mt-8">
                    <Star className="w-6 h-6 text-warning" />
                    Principais Características - <strong>Melhores Marcas</strong>
                  </h2>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                      <span><strong>Marca de qualidade:</strong> {product.brand} - reconhecida no mercado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                      <span><strong>Categoria:</strong> {product.category} - produtos selecionados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                      <span><strong>Garantia:</strong> Conforme política do fabricante</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                      <span><strong>Entrega:</strong> Envio para todo o Brasil</span>
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mt-8">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    Por que escolher este produto? - <strong>Melhores Ofertas</strong>
                  </h2>

                  <p className="text-foreground leading-relaxed">
                    Quando falamos em <strong>{product.category.toLowerCase()}</strong>, a marca <strong>{product.brand}</strong> 
                    é sinônimo de qualidade e confiabilidade. O <strong>{product.shortName}</strong> oferece:
                  </p>

                  <ul className="space-y-2">
                    <li>✅ Excelente relação custo-benefício</li>
                    <li>✅ Durabilidade comprovada por milhares de usuários</li>
                    <li>✅ Fácil instalação e manutenção</li>
                    <li>✅ Suporte técnico da marca</li>
                    <li>✅ <strong>Melhores preços</strong> do mercado</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mt-8">
                    <Shield className="w-6 h-6 text-success" />
                    Onde Comprar com os <strong>Melhores Preços</strong>?
                  </h2>

                  <p className="text-foreground leading-relaxed">
                    Para garantir que você está comprando um produto original com garantia, recomendamos 
                    adquirir através de vendedores oficiais no <strong>Mercado Livre</strong>. Lá você encontra:
                  </p>

                  <ul className="space-y-2">
                    <li>🛡️ Proteção ao comprador</li>
                    <li>🚚 Frete grátis em muitas ofertas</li>
                    <li>💳 Parcelamento facilitado</li>
                    <li>⭐ Avaliações reais de compradores</li>
                  </ul>
                </div>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                    Aproveite as <strong>Melhores Ofertas</strong>!
                  </h3>
                  <p className="text-primary-foreground/90 mb-6">
                    Não perca a oportunidade de adquirir o <strong>{product.shortName}</strong> com os <strong>melhores preços</strong>.
                  </p>
                  <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-construction-dark text-primary-foreground hover:bg-construction-dark/90" size="xl">
                      🛒 Comprar Agora no Mercado Livre
                    </Button>
                  </a>
                </div>

                {/* Related Articles */}
                {relatedProducts.length > 0 && (
                  <section className="mt-12">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      📖 Leia Também - <strong>Melhores Produtos</strong>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {relatedProducts.map((related) => (
                        <Link
                          key={related.id}
                          to={`/artigo/${related.slug}`}
                          className="card-product p-4 hover:border-primary/50 transition-all"
                        >
                          <span className="text-xs text-primary font-medium">{related.category}</span>
                          <h3 className="font-semibold mt-1 line-clamp-2">{related.shortName}</h3>
                          <span className="text-sm text-muted-foreground flex items-center gap-1 mt-2">
                            Ler artigo <ArrowRight className="w-3 h-3" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                <div className="card-product p-6 sticky top-24">
                  <h3 className="font-bold text-lg mb-4">📦 Resumo do Produto</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Marca:</span>
                      <span className="font-medium">{product.brand}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Categoria:</span>
                      <span className="font-medium">{product.category}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Avaliação:</span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-warning fill-warning" />
                        <span className="font-medium">4.{Math.floor(Math.random() * 5) + 5}</span>
                      </span>
                    </div>
                  </div>

                  <hr className="my-4 border-border" />

                  <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="mercadolivre" className="w-full" size="lg">
                      Ver Melhor Preço
                    </Button>
                  </a>

                  <p className="text-xs text-muted-foreground text-center mt-3">
                    * Link de afiliado. Você não paga nada a mais por isso.
                  </p>
                </div>

                {/* Keywords */}
                <div className="card-product p-6">
                  <h3 className="font-bold text-sm mb-3">🏷️ Palavras-chave</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.keywords.map((keyword) => (
                      <span 
                        key={keyword} 
                        className="px-2 py-1 bg-secondary text-xs rounded-md text-muted-foreground"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ArticlePage;
