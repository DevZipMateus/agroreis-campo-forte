import { Target, Compass, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    "Compromisso com o produtor – ouvir, orientar e entregar soluções que realmente funcionam",
    "Qualidade e confiança – trabalhar apenas com marcas e produtos que garantam resultados",
    "Ética e responsabilidade – agir com transparência em todas as relações",
    "Inovação no campo – buscar sempre novas tecnologias e boas práticas para o agro",
    "Valorização do rural – respeito à rotina, ao esforço e ao impacto do produtor na sociedade",
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Sobre nós
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Conheça nossa história, propósito e os valores que nos guiam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Visão */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Visão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecida como a principal referência em soluções agropecuárias da região, 
                destacando-se pela qualidade dos produtos, pela excelência no atendimento e pela 
                capacidade de transformar desafios do campo em resultados reais. Almejamos crescer 
                lado a lado com cada produtor, contribuindo para um agro mais eficiente, sustentável 
                e inovador.
              </p>
            </CardContent>
          </Card>

          {/* Missão */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-accent/10 rounded-lg">
                  <Compass className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Missão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Oferecer aos nossos clientes uma experiência completa em atendimento agropecuário, 
                unindo conhecimento técnico, produtos de alta performance e um compromisso genuíno 
                com o desenvolvimento do campo. Nossa missão é apoiar o produtor em todas as etapas, 
                promovendo produtividade, bem-estar animal e gestão responsável, sempre com respeito, 
                dedicação e confiança.
              </p>
            </CardContent>
          </Card>

          {/* Valores */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-secondary/10 rounded-lg">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Valores</h3>
              </div>
              <ul className="space-y-3">
                {values.map((value, index) => (
                  <li key={index} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
