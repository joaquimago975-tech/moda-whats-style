import { Users, Target, Eye, Heart } from "lucide-react";
import storeInterior from "@/assets/store-interior.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Sobre a Boutique Elegance
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma história de paixão pela moda e compromisso com a elegância
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-16">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
            <img
              src={storeInterior}
              alt="Interior da Boutique Elegance"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-serif font-bold mb-6 text-center">
            Nossa História
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A Boutique Elegance nasceu do sonho de criar um espaço onde a moda de alta qualidade 
              encontra o atendimento personalizado. Fundada em Luanda, nossa boutique se destaca 
              pela curadoria cuidadosa de peças que celebram a feminilidade e a sofisticação.
            </p>
            <p>
              Cada peça em nossa coleção é selecionada pensando na mulher moderna que valoriza 
              qualidade, elegância atemporal e exclusividade. Acreditamos que a moda é uma forma 
              de expressão pessoal e estamos aqui para ajudar você a encontrar peças que reflitam 
              sua personalidade única.
            </p>
            <p>
              Nosso compromisso vai além de oferecer roupas bonitas. Queremos proporcionar uma 
              experiência de compra excepcional, com atendimento personalizado via WhatsApp, 
              permitindo que você escolha suas peças favoritas no conforto do seu lar.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-muted/30 rounded-lg">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Nossa Missão</h3>
            <p className="text-muted-foreground">
              Proporcionar às mulheres angolanas acesso a moda de alta qualidade com 
              atendimento personalizado e exclusivo.
            </p>
          </div>

          <div className="text-center p-8 bg-muted/30 rounded-lg">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Nossa Visão</h3>
            <p className="text-muted-foreground">
              Ser reconhecida como referência em elegância e sofisticação, 
              oferecendo peças exclusivas que celebram a individualidade.
            </p>
          </div>

          <div className="text-center p-8 bg-muted/30 rounded-lg">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Nossos Valores</h3>
            <p className="text-muted-foreground">
              Qualidade, exclusividade, atendimento personalizado e compromisso 
              com a satisfação de cada cliente.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="h-10 w-10 text-accent" />
          </div>
          <h2 className="text-3xl font-serif font-bold mb-4">
            Nossa Equipe
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Nossa equipe é composta por profissionais apaixonados por moda, dedicados a 
            proporcionar uma experiência de compra única. Cada membro traz expertise em 
            tendências, estilo e atendimento ao cliente, garantindo que você receba a 
            melhor orientação na escolha das suas peças favoritas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
