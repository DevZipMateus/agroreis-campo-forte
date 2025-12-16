import { Card, CardContent } from "@/components/ui/card";
import { Package, Wheat, Pill, Droplets, Wrench, Dog } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Wheat,
      title: "Rações para Produção",
      description: "Rações de alta qualidade para bovinos, suínos, aves e outros animais de produção.",
    },
    {
      icon: Dog,
      title: "Rações para Pets",
      description: "Alimentação balanceada para cães, gatos e animais de companhia.",
    },
    {
      icon: Wrench,
      title: "Ferramentas STIHL",
      description: "Revendedor autorizado STIHL. Motosserras, roçadeiras e equipamentos profissionais.",
    },
    {
      icon: Pill,
      title: "Medicamentos Veterinários",
      description: "Linha completa de medicamentos e vacinas para saúde animal.",
    },
    {
      icon: Package,
      title: "Adubos e Fertilizantes",
      description: "Adubos e fertilizantes para melhorar a produtividade da sua lavoura.",
    },
    {
      icon: Droplets,
      title: "Produtos de Irrigação",
      description: "Sistemas e equipamentos de irrigação para sua propriedade rural.",
    },
  ];

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Revenda Autorizada STIHL
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Produtos Agrícolas e Pecuários
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Insumos de qualidade para o produtor rural e criador
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card
                key={index}
                className="group border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-background"
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
