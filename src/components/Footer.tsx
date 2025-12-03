import { Link } from "react-router-dom";
import { Wrench, Mail, Shield, FileText, Users, AlertCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="gradient-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                <Wrench className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Tudo em Construção</h3>
                <p className="text-sm opacity-80">Materiais e Ferramentas</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              As melhores análises de produtos para sua obra. Qualidade, procedência e avaliações reais de usuários.
            </p>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="font-semibold text-base mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Links Úteis
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <a href="https://mercadolivre.com/sec/23DZvGp" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Ver Ofertas
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-base mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4" /> Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/politica-privacidade" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-uso" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/transparencia" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Transparência
                </Link>
              </li>
              <li>
                <Link to="/isencao-responsabilidade" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Isenção de Responsabilidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-base mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4" /> Contato
            </h4>
            <p className="text-sm opacity-70 mb-4">
              Dúvidas ou sugestões? Entre em contato conosco.
            </p>
            <a 
              href="mailto:contato@tudoemconstrucao.com.br" 
              className="text-sm text-primary hover:underline"
            >
              contato@tudoemconstrucao.com.br
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="bg-primary-foreground/10 rounded-xl p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
            <p className="text-xs opacity-80 leading-relaxed">
              <strong>Aviso de Afiliado:</strong> Este site participa de programas de afiliados, incluindo o Mercado Livre. 
              Isso significa que podemos receber uma comissão por compras realizadas através dos links presentes em nosso conteúdo, 
              sem custo adicional para você. Todas as análises são independentes e baseadas em pesquisas reais.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} Tudo em Construção - Materiais e Ferramentas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
