import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Wrench, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { affiliateCategories } from "@/data/products";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-hero flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
              <Wrench className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm md:text-base font-bold text-foreground leading-tight">
                Tudo em Construção
              </h1>
              <p className="text-xs text-muted-foreground">Materiais e Ferramentas</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Início
            </Link>
            <div className="relative">
              <button 
                className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
              >
                Categorias <ChevronDown className="w-4 h-4" />
              </button>
              {showCategories && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-card border border-border p-2 animate-fade-up"
                  onMouseEnter={() => setShowCategories(true)}
                  onMouseLeave={() => setShowCategories(false)}
                >
                  {affiliateCategories.slice(0, 8).map((cat) => (
                    <a
                      key={cat.name}
                      href={cat.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-sm"
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <Link to="/sobre" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Sobre Nós
            </Link>
            <Link to="/contato" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://mercadolivre.com/sec/23DZvGp" target="_blank" rel="noopener noreferrer">
              <Button variant="mercadolivre" size="sm">
                🛒 Ver Ofertas
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-up">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            <Link 
              to="/" 
              className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/sobre" 
              className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link 
              to="/politica-privacidade" 
              className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Política de Privacidade
            </Link>
            <Link 
              to="/termos-uso" 
              className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Termos de Uso
            </Link>
            <a 
              href="https://mercadolivre.com/sec/23DZvGp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="mercadolivre" className="w-full mt-4">
                🛒 Ver Ofertas no Mercado Livre
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
