import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { sendWhatsAppOrder, formatPrice } from "@/utils/whatsapp";
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, updateQuantity, removeItem, total } = useCart();

  const handleSendOrder = () => {
    if (items.length === 0) return;
    sendWhatsAppOrder(items, total);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-20">
            <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground/50" />
            <h1 className="text-3xl font-serif font-bold mb-4">
              Seu carrinho está vazio
            </h1>
            <p className="text-muted-foreground mb-8">
              Adicione produtos à sua lista para continuar
            </p>
            <Link to="/produtos">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Ver Produtos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center">
          Seu Carrinho
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="p-4">
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-muted rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                    <p className="text-accent font-medium mb-2">
                      {formatPrice(item.price)}
                    </p>
                    {item.size && (
                      <p className="text-sm text-muted-foreground">
                        Tamanho: {item.size}
                      </p>
                    )}
                    {item.color && (
                      <p className="text-sm text-muted-foreground">
                        Cor: {item.color}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <div className="flex items-center gap-2 border rounded-lg">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-2xl font-serif font-bold mb-6">Resumo do Pedido</h2>
              
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="font-medium">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-accent">{formatPrice(total)}</span>
                </div>
              </div>

              <Button
                className="w-full mb-3 bg-accent hover:bg-accent/90"
                size="lg"
                onClick={handleSendOrder}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Finalizar pelo WhatsApp
              </Button>

              <div className="text-xs text-muted-foreground text-center">
                <p className="mb-2">
                  Ao clicar, você será direcionado ao WhatsApp para confirmar seu pedido.
                </p>
                <p>
                  Enviaremos as instruções de pagamento via transferência bancária.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
