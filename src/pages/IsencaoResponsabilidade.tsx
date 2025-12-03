import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const IsencaoResponsabilidade = () => {
  return (
    <>
      <SEOHead 
        title="Isenção de Responsabilidade"
        description="Isenção de Responsabilidade do Tudo em Construção. Leia sobre as limitações de responsabilidade do nosso conteúdo."
        keywords="isenção de responsabilidade, disclaimer, aviso legal"
      />

      <div className="min-h-screen bg-background">
        <Header />

        <main className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="card-product p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Isenção de Responsabilidade
              </h1>

              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                <p><strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}</p>

                <h2 className="text-xl font-bold text-foreground mt-8">1. Natureza do Conteúdo</h2>
                <p>
                  O conteúdo publicado no site <strong>Tudo em Construção - Materiais e Ferramentas</strong> 
                  tem caráter exclusivamente informativo e educacional. As análises, opiniões e 
                  recomendações apresentadas são baseadas em pesquisas e não devem ser consideradas 
                  como aconselhamento profissional.
                </p>

                <h2 className="text-xl font-bold text-foreground mt-8">2. Precisão das Informações</h2>
                <p>
                  Nos esforçamos para manter as informações atualizadas e precisas. No entanto, 
                  não garantimos que:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Os preços apresentados estejam atualizados em tempo real</li>
                  <li>Os produtos estejam disponíveis em estoque</li>
                  <li>As especificações técnicas não tenham sido alteradas pelo fabricante</li>
                  <li>As avaliações de usuários sejam representativas de todos os compradores</li>
                </ul>

                <h2 className="text-xl font-bold text-foreground mt-8">3. Links para Sites de Terceiros</h2>
                <p>
                  Nosso site contém links para sites de terceiros, incluindo marketplaces e lojas online. 
                  Não temos controle sobre o conteúdo, políticas de privacidade ou práticas desses sites. 
                  Acessar esses links é por sua conta e risco.
                </p>

                <h2 className="text-xl font-bold text-foreground mt-8">4. Decisões de Compra</h2>
                <p>
                  Todas as decisões de compra são de responsabilidade exclusiva do usuário. 
                  Recomendamos que você:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Verifique as especificações diretamente com o vendedor</li>
                  <li>Leia a descrição completa do produto antes de comprar</li>
                  <li>Confira as políticas de devolução e garantia</li>
                  <li>Compare preços em diferentes vendedores</li>
                </ul>

                <h2 className="text-xl font-bold text-foreground mt-8">5. Limitação de Responsabilidade</h2>
                <p>
                  O <strong>Tudo em Construção</strong> não se responsabiliza por:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Perdas ou danos decorrentes do uso das informações do site</li>
                  <li>Problemas com produtos adquiridos através de links afiliados</li>
                  <li>Erros ou omissões no conteúdo</li>
                  <li>Indisponibilidade temporária do site</li>
                  <li>Ações de terceiros relacionadas ao conteúdo</li>
                </ul>

                <h2 className="text-xl font-bold text-foreground mt-8">6. Marcas e Nomes Comerciais</h2>
                <p>
                  Todas as marcas, nomes comerciais e logotipos mencionados neste site são 
                  propriedade de seus respectivos donos. A menção a essas marcas não implica 
                  em qualquer associação, patrocínio ou endosso por parte delas.
                </p>

                <h2 className="text-xl font-bold text-foreground mt-8">7. Alterações</h2>
                <p>
                  Esta isenção de responsabilidade pode ser alterada a qualquer momento, 
                  sem aviso prévio. Recomendamos a leitura periódica desta página.
                </p>

                <h2 className="text-xl font-bold text-foreground mt-8">8. Contato</h2>
                <p>
                  Para dúvidas ou esclarecimentos, entre em contato: 
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

export default IsencaoResponsabilidade;
