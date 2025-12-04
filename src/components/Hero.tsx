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
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Agropecuária e veterinária no campo" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-background/60 backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="flex-1 max-w-3xl text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6 animate-fade-in">
                <Sprout className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-primary" />
                <span className="text-accent font-bold text-sm sm:text-base md:text-lg">Agropecuária e Veterinária</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 animate-fade-in">
                AGROREIS LTDA
              </h1>
              
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 sm:mb-6 md:mb-8 font-medium animate-fade-in text-stone-950">
                Soluções completas em atendimento agropecuário com qualidade, dedicação e resultados que transformam o campo
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 md:mb-8 animate-fade-in">
                O campo mais forte começa aqui!
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in justify-center lg:justify-start">
                <Button size="lg" onClick={scrollToContact} className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base md:text-lg px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 w-full sm:w-auto">
                  Entre em contato
                </Button>
                <Button size="lg" variant="outline" onClick={() => {
                const element = document.getElementById("services");
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }} className="text-sm sm:text-base md:text-lg px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 border-primary/60 text-foreground hover:bg-primary/10 hover:border-primary w-full sm:w-auto">
                  Nossos serviços
                </Button>
              </div>
            </div>

            {/* Logo - visible on medium screens and up */}
            <div className="hidden md:flex items-center justify-center animate-fade-in">
              <img src="/logo.png" alt="Logo AGROREIS LTDA" className="w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] 2xl:w-[650px] 2xl:h-[650px] object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;