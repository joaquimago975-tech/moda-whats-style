import { CartItem } from "@/contexts/CartContext";

const WHATSAPP_NUMBER = "244975330677";

export const sendWhatsAppOrder = (items: CartItem[], total: number) => {
  let message = "🛍️ *Novo Pedido - Boutique Elegance*\n\n";
  
  items.forEach((item, index) => {
    message += `*${index + 1}. ${item.name}*\n`;
    message += `   Preço: ${formatPrice(item.price)}\n`;
    if (item.size) message += `   Tamanho: ${item.size}\n`;
    if (item.color) message += `   Cor: ${item.color}\n`;
    message += `   Quantidade: ${item.quantity}\n`;
    message += `   Subtotal: ${formatPrice(item.price * item.quantity)}\n\n`;
  });
  
  message += `*Total: ${formatPrice(total)}*\n\n`;
  message += "Aguardo confirmação e instruções de pagamento. 🙏";
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, "_blank");
};

export const sendWhatsAppMessage = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-AO", {
    style: "currency",
    currency: "AOA",
  }).format(price);
};
