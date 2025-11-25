import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "AGROREIS LTDA",
      link: "#",
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
      value: "Rodovia BA-142, s/n",
      link: "#",
    },
    {
      icon: Clock,
      label: "Horário",
      value: "7:30 às 17h",
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
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender você e cuidar dos seus animais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card
                key={index}
                className="border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1">
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

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Tem alguma dúvida? Fale conosco agora mesmo!
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
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
