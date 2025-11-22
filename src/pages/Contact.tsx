import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle, Clock, Instagram, Facebook } from "lucide-react";
import { sendWhatsAppMessage } from "@/utils/whatsapp";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Entre em Contato
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudá-la. Entre em contato conosco através de qualquer um dos canais abaixo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Localização</h3>
                  <p className="text-muted-foreground">
                    Luanda, Angola<br />
                    Centro da Cidade
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Telefone</h3>
                  <p className="text-muted-foreground">
                    +244 975 330 677
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-accent"
                    onClick={() => sendWhatsAppMessage("Olá! Gostaria de mais informações.")}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Falar no WhatsApp
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">E-mail</h3>
                  <p className="text-muted-foreground">
                    contato@boutiqueelegance.ao
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Horário de Atendimento</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Segunda a Sexta: 9h - 18h</p>
                    <p>Sábado: 10h - 16h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* WhatsApp CTA Card */}
          <div>
            <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 h-full flex flex-col justify-center">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-10 w-10 text-accent" />
                </div>
                <h2 className="text-3xl font-serif font-bold mb-4">
                  Atendimento via WhatsApp
                </h2>
                <p className="text-muted-foreground mb-6">
                  Preferimos atender você de forma personalizada. Clique no botão abaixo 
                  e fale diretamente conosco via WhatsApp!
                </p>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 mb-6"
                  onClick={() => sendWhatsAppMessage("Olá! Gostaria de fazer um pedido.")}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Iniciar Conversa
                </Button>
                <p className="text-sm text-muted-foreground">
                  Resposta rápida durante horário comercial
                </p>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4 text-center">Siga-nos nas Redes Sociais</h3>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://wa.me/244975330677"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Payment Information */}
        <Card className="p-8">
          <h2 className="text-2xl font-serif font-bold mb-6 text-center">
            Informações de Pagamento
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground">
            <p>
              Após confirmar seu pedido via WhatsApp, enviaremos as instruções completas 
              para pagamento através de:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Transferência Bancária</li>
              <li>Referência Multicaixa</li>
              <li>Depósito Bancário</li>
            </ul>
            <p className="text-sm">
              Assim que recebermos a confirmação do pagamento, processaremos seu pedido 
              imediatamente e você receberá informações sobre a entrega.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
