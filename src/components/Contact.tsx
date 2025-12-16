import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(75) 99956-6681",
      link: "tel:+5575999566681",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "agroreiscomercio.ar@gmail.com",
      link: "mailto:agroreiscomercio.ar@gmail.com",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "BA-142 Wagner/Utinga, em frente à praça nova",
      link: "#",
    },
    {
      icon: Clock,
      label: "Horário de Atendimento",
      value: "Seg a Sáb: 7:30 às 17h",
      link: "#",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@agroreis.ar",
      link: "https://instagram.com/agroreis.ar",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Entre em contato
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Estamos prontos para atender você e cuidar dos seus animais
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card
                key={index}
                className="border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
              >
              <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1">
                        {info.label}
                      </h3>
                      {info.link && info.link !== "#" ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors break-words"
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground break-words">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 px-4">
            Tem alguma dúvida? Fale conosco agora mesmo!
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
            asChild
          >
            <a href="mailto:agroreiscomercio.ar@gmail.com">
              Enviar mensagem
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
