import { Card, CardContent } from "@/components/ui/card";
import { Syringe, Heart, Stethoscope } from "lucide-react";
import vaccinationImage from "@/assets/service-vaccination.jpg";
import inseminationImage from "@/assets/service-insemination.jpg";
import clinicImage from "@/assets/service-clinic.jpg";

const Services = () => {
  const services = [
    {
      icon: Syringe,
      title: "Vacinações",
      description: "Protocolos completos de vacinação para cães, gatos e outras espécies, garantindo a saúde e proteção dos seus animais.",
      image: vaccinationImage,
    },
    {
      icon: Heart,
      title: "Inseminação artificial",
      description: "Protocolos de inseminação artificial em bovinos com técnicas modernas para melhorar a genética do seu rebanho.",
      image: inseminationImage,
    },
    {
      icon: Stethoscope,
      title: "Atendimento clínico",
      description: "Atendimento clínico veterinário completo com diagnóstico preciso e tratamento adequado para seus animais.",
      image: clinicImage,
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Nossos serviços
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Soluções completas em atendimento veterinário e agropecuário
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 p-3 bg-primary/90 rounded-lg">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
