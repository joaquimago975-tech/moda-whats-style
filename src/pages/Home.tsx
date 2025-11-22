import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";
import { sendWhatsAppMessage } from "@/utils/whatsapp";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Vestido Elegante Noir",
      price: 35000,
      image: "/api/placeholder/400/500",
    },
    {
      id: "2",
      name: "Conjunto Executivo",
      price: 42000,
      image: "/api/placeholder/400/500",
    },
    {
      id: "3",
      name: "Blusa Sofisticada",
      price: 18000,
      image: "/api/placeholder/400/500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBanner})`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in text-balance">
            Elegância Atemporal
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Descubra as últimas tendências em moda feminina
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/produtos">
              <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                Ver Coleção
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              onClick={() => sendWhatsAppMessage("Olá! Gostaria de conhecer mais sobre a Boutique Elegance.")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Coleção em Destaque
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Peças selecionadas com carinho para realçar sua elegância natural
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-accent font-medium">
                  {new Intl.NumberFormat("pt-AO", {
                    style: "currency",
                    currency: "AOA",
                  }).format(product.price)}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/produtos">
              <Button variant="outline" size="lg">
                Ver Todos os Produtos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Qualidade Premium</h3>
              <p className="text-muted-foreground">
                Selecionamos apenas tecidos e materiais da mais alta qualidade
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Atendimento Personalizado</h3>
              <p className="text-muted-foreground">
                Atendimento exclusivo via WhatsApp para melhor atendê-la
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Peças Exclusivas</h3>
              <p className="text-muted-foreground">
                Coleções limitadas que destacam sua individualidade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Pronta para Renovar seu Guarda-Roupa?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Entre em contato conosco via WhatsApp e descubra como podemos ajudá-la a encontrar o look perfeito
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="font-semibold"
            onClick={() => sendWhatsAppMessage("Olá! Gostaria de fazer um pedido.")}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Comprar pelo WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
