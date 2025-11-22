import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { formatPrice } from "@/utils/whatsapp";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const Products = () => {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products: Product[] = [
    {
      id: "1",
      name: "Vestido Elegante Noir",
      price: 35000,
      description: "Vestido longo em tecido premium com corte elegante",
      image: "/api/placeholder/400/500",
      category: "vestidos",
    },
    {
      id: "2",
      name: "Conjunto Executivo",
      price: 42000,
      description: "Conjunto blazer e calça para look profissional",
      image: "/api/placeholder/400/500",
      category: "conjuntos",
    },
    {
      id: "3",
      name: "Blusa Sofisticada",
      price: 18000,
      description: "Blusa em seda com detalhes refinados",
      image: "/api/placeholder/400/500",
      category: "blusas",
    },
    {
      id: "4",
      name: "Vestido Cocktail",
      price: 38000,
      description: "Perfeito para eventos especiais",
      image: "/api/placeholder/400/500",
      category: "vestidos",
    },
    {
      id: "5",
      name: "Saia Midi Plissada",
      price: 22000,
      description: "Saia elegante em tecido fluido",
      image: "/api/placeholder/400/500",
      category: "saias",
    },
    {
      id: "6",
      name: "Casaco Alfaiataria",
      price: 45000,
      description: "Casaco estruturado de alta qualidade",
      image: "/api/placeholder/400/500",
      category: "casacos",
    },
  ];

  const categories = [
    { id: "all", name: "Todos" },
    { id: "vestidos", name: "Vestidos" },
    { id: "conjuntos", name: "Conjuntos" },
    { id: "blusas", name: "Blusas" },
    { id: "saias", name: "Saias" },
    { id: "casacos", name: "Casacos" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  const handleWhatsAppOrder = (product: Product) => {
    const message = `Olá! Gostaria de encomendar:\n\n*${product.name}*\nPreço: ${formatPrice(product.price)}\n\nAguardo retorno!`;
    const whatsappUrl = `https://wa.me/244975330677?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Nossa Coleção
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Peças cuidadosamente selecionadas para realçar sua elegância
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? "bg-accent hover:bg-accent/90" : ""}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="overflow-hidden group animate-fade-in border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                <p className="text-2xl font-bold text-accent mb-4">
                  {formatPrice(product.price)}
                </p>
                <div className="flex gap-2">
                  <Button
                    className="flex-1"
                    variant="outline"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Adicionar
                  </Button>
                  <Button
                    className="flex-1 bg-accent hover:bg-accent/90"
                    onClick={() => handleWhatsAppOrder(product)}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
