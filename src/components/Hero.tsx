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
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Agropecuária e veterinária no campo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 max-w-3xl bg-background/85 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-lg shadow-xl">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 animate-fade-in">
              <Sprout className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary" />
              <span className="text-accent font-bold text-base sm:text-lg">Agropecuária e Veterinária</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-in">
              AGROREIS LTDA
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-6 sm:mb-8 font-medium animate-fade-in">
              Soluções completas em atendimento agropecuário com qualidade, dedicação e resultados que transformam o campo
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 animate-fade-in">
              O campo mais forte começa aqui!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 w-full sm:w-auto"
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
                className="text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 border-primary/60 text-foreground hover:bg-primary/10 hover:border-primary w-full sm:w-auto"
              >
                Nossos serviços
              </Button>
            </div>
          </div>

          {/* Logo */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in">
            <img
              src="/logo.png"
              alt="Logo AGROREIS LTDA"
              className="w-64 h-64 xl:w-80 xl:h-80 object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
