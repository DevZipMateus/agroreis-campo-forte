import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "5575999566681";
  const message = encodeURIComponent("Olá! Gostaria de mais informações sobre os serviços da AGROREIS.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-success hover:bg-success/90 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
  );
};

export default WhatsAppButton;
