import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const PoliticaPrivacidade = () => {
  return (
    <>
      <SEOHead 
        title="Política de Privacidade"
        description="Política de Privacidade do Tudo em Construção. Saiba como coletamos e utilizamos seus dados."
        keywords="política de privacidade, privacidade, dados pessoais, LGPD"
      />

      <div className="min-h-screen bg-background">
        <Header />

        <main className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="card-product p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Política de Privacidade
              </h1>

              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                <p><strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}</p>

                <h2 className="text-xl font-bold text-foreground mt-8">1. Informações que Coletamos</h2>
                <p>
                  O <strong>Tudo em Construção - Materiais e Ferramentas</strong> pode coletar informações 
                  quando você visita nosso site, incluindo:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dados de navegação (páginas visitadas, tempo de permanência)</li>
                  <li>Informações do dispositivo (tipo de navegador, sistema operacional)</li>
                  <li>Endereço IP e localização aproximada</li>
                  <li>Cookies e tecnologias similares</li>
                </ul>

                <h2 className="text-xl font-bold text-foreground mt-8">2. Como Usamos suas Informações</h2>
                <p>Utilizamos as informações coletadas para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Melhorar a experiência de navegação</li>
                  <li>Personalizar o conteúdo exibido</li>
                  <li>Analisar o desempenho do site</li>
                  <li>Cumprir obrigações legais</li>
                </ul>

                <h2 className="text-xl font-bold text-foreground mt-8">3. Cookies</h2>
                <p>
                  Utilizamos cookies para melhorar sua experiência. Cookies são pequenos arquivos 
                  armazenados em seu dispositivo que nos ajudam a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lembrar suas preferências</li>
                  <li>Entender como você usa nosso site</li>
                  <li>Oferecer conteúdo relevante</li>
                </ul>

                <h2 className="text-xl font-bold text-foreground mt-8">4. Links de Afiliados</h2>
                <p>
                  Nosso site contém links de afiliados para produtos em marketplaces como Mercado Livre. 
                  Quando você clica nesses links e realiza uma compra, podemos receber uma comissão. 
                  Isso não afeta o preço que você paga pelo produto.
                </p>

                <h2 className="text-xl font-bold text-foreground mt-8">5. Compartilhamento de Dados</h2>
                <p>
                  Não vendemos suas informações pessoais. Podemos compartilhar dados com:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Serviços de análise (Google Analytics)</li>
                  <li>Parceiros de publicidade</li>
                  <li>Autoridades legais, quando exigido por lei</li>
                </ul>

                <h2 className="text-xl font-bold text-foreground mt-8">6. Seus Direitos (LGPD)</h2>
                <p>De acordo com a Lei Geral de Proteção de Dados, você tem direito a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos ou incorretos</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Revogar o consentimento</li>
                </ul>

                <h2 className="text-xl font-bold text-foreground mt-8">7. Contato</h2>
                <p>
                  Para exercer seus direitos ou tirar dúvidas sobre nossa política de privacidade, 
                  entre em contato através do e-mail: <strong>contato@tudoemconstrucao.com.br</strong>
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

export default PoliticaPrivacidade;
