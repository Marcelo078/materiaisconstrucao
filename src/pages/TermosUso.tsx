import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const TermosUso = () => {
  return (
    <>
      <SEOHead 
        title="Termos de Uso"
        description="Termos de Uso do Tudo em Construção. Leia atentamente antes de utilizar nosso site."
        keywords="termos de uso, termos e condições, regras do site"
      />

      <div className="min-h-screen bg-background">
        <Header />

        <main className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="card-product p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Termos de Uso
              </h1>

              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                <p><strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}</p>

                <h2 className="text-xl font-bold text-foreground mt-8">1. Aceitação dos Termos</h2>
                <p>
                  Ao acessar e utilizar o site <strong>Tudo em Construção - Materiais e Ferramentas</strong>, 
                  você concorda com estes Termos de Uso. Se não concordar com algum termo, 
                  por favor, não utilize nosso site.
                </p>

                <h2 className="text-xl font-bold text-foreground mt-8">2. Descrição do Serviço</h2>
                <p>
                  O Tudo em Construção é um portal de conteúdo que oferece:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Análises e reviews de produtos de construção</li>
                  <li>Comparativos entre marcas e modelos</li>
                  <li>Links para compra em marketplaces parceiros</li>
                  <li>Dicas e guias de compra</li>
                </ul>

                <h2 className="text-xl font-bold text-foreground mt-8">3. Conteúdo do Site</h2>
                <p>
                  Todo o conteúdo publicado neste site é de propriedade do Tudo em Construção 
                  ou de seus parceiros. É proibida a reprodução sem autorização prévia.
                </p>

                <h2 className="text-xl font-bold text-foreground mt-8">4. Links de Afiliados</h2>
                <p>
                  Este site utiliza links de afiliados. Ao clicar em um link e realizar uma compra, 
                  podemos receber uma comissão do vendedor. Isso não aumenta o preço do produto para você.
                </p>

                <h2 className="text-xl font-bold text-foreground mt-8">5. Isenção de Responsabilidade</h2>
                <p>
                  As informações contidas neste site são fornecidas apenas para fins informativos. 
                  Não nos responsabilizamos por:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Decisões de compra baseadas em nosso conteúdo</li>
                  <li>Alterações de preços ou disponibilidade dos produtos</li>
                  <li>Qualidade ou desempenho dos produtos anunciados</li>
                  <li>Transações realizadas em sites de terceiros</li>
                </ul>

                <h2 className="text-xl font-bold text-foreground mt-8">6. Conduta do Usuário</h2>
                <p>Ao usar nosso site, você concorda em:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Não violar leis aplicáveis</li>
                  <li>Não tentar acessar áreas restritas do site</li>
                  <li>Não usar o site para fins ilícitos</li>
                  <li>Respeitar os direitos autorais</li>
                </ul>

                <h2 className="text-xl font-bold text-foreground mt-8">7. Alterações nos Termos</h2>
                <p>
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                  As alterações entram em vigor imediatamente após a publicação.
                </p>

                <h2 className="text-xl font-bold text-foreground mt-8">8. Contato</h2>
                <p>
                  Para dúvidas sobre estes termos, entre em contato: 
                  <strong> contato@tudoemconstrucao.com.br</strong>
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermosUso;
