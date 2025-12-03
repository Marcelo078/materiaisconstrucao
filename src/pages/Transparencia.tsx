import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { AlertCircle, DollarSign, FileText, Shield } from "lucide-react";

const Transparencia = () => {
  return (
    <>
      <SEOHead 
        title="Transparência e Divulgação de Afiliados"
        description="Página de transparência do Tudo em Construção. Saiba como funcionam nossos links de afiliados e como ganhamos dinheiro."
        keywords="transparência, afiliados, divulgação, como ganhamos dinheiro"
      />

      <div className="min-h-screen bg-background">
        <Header />

        <main className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="card-product p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Transparência e Divulgação de Afiliados
              </h1>

              <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
                
                <div className="bg-amber-light rounded-xl p-6 border-2 border-primary/20">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h2 className="text-lg font-bold text-foreground mb-2">Aviso Importante</h2>
                      <p className="text-sm">
                        Este site participa de programas de afiliados. Isso significa que podemos receber 
                        comissões por compras realizadas através dos links presentes em nosso conteúdo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-2">Como Ganhamos Dinheiro</h2>
                    <p>
                      O <strong>Tudo em Construção</strong> é mantido através de comissões de afiliados. 
                      Quando você clica em um link de produto em nosso site e realiza uma compra no 
                      marketplace parceiro, recebemos uma pequena porcentagem do valor da venda.
                    </p>
                    <p className="mt-4">
                      <strong>Importante:</strong> Você não paga nada a mais por isso. O preço do 
                      produto é exatamente o mesmo que você pagaria acessando diretamente o marketplace.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-2">Nossos Parceiros</h2>
                    <p>Atualmente, participamos dos seguintes programas de afiliados:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                      <li><strong>Mercado Livre</strong> - Programa de Afiliados do Mercado Livre</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-2">Nosso Compromisso</h2>
                    <p>
                      Mesmo participando de programas de afiliados, nosso compromisso é sempre com 
                      a qualidade e veracidade das informações. Nossos artigos são baseados em:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                      <li>Pesquisas detalhadas sobre os produtos</li>
                      <li>Análise de especificações técnicas oficiais</li>
                      <li>Avaliações reais de compradores</li>
                      <li>Comparação de preços e características</li>
                    </ul>
                    <p className="mt-4">
                      Nunca recomendaremos um produto apenas porque oferece maior comissão. 
                      Nossa prioridade é ajudar você a fazer a melhor escolha.
                    </p>
                  </div>
                </div>

                <div className="bg-secondary rounded-xl p-6">
                  <h2 className="text-lg font-bold text-foreground mb-2">Dúvidas?</h2>
                  <p>
                    Se você tiver qualquer dúvida sobre nossa política de transparência ou sobre 
                    como funcionam os links de afiliados, entre em contato conosco: 
                    <strong> contato@tudoemconstrucao.com.br</strong>
                  </p>
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

export default Transparencia;
