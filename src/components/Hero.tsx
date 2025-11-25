import { Button } from "@/components/ui/button";
import { Sprout } from "lucide-react";
import heroImage from "@/assets/hero-agro.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Agropecuária e veterinária no campo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <Sprout className="h-12 w-12 text-primary" />
            <span className="text-accent font-bold text-lg">Agropecuária e Veterinária</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            AGROREIS LTDA
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-foreground/80 mb-8 font-medium animate-fade-in">
            Soluções completas em atendimento agropecuário com qualidade, dedicação e resultados que transformam o campo
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            O campo mais forte começa aqui!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
            >
              Entre em contato
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className="text-lg px-8 py-6 border-primary/60 text-foreground hover:bg-primary/10 hover:border-primary"
            >
              Nossos serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
