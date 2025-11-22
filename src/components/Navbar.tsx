import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Produtos", path: "/produtos" },
    { name: "Sobre", path: "/sobre" },
    { name: "Blog", path: "/blog" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-serif font-bold tracking-tight">
              Boutique Elegance
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link to="/carrinho">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </Button>
            </Link>

            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
