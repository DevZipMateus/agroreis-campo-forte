import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // Nota: número não fornecido, usando placeholder
  const whatsappNumber = "5599999999999";
  const message = encodeURIComponent("Olá! Gostaria de mais informações sobre os serviços da AGROREIS.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-success hover:bg-success/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
