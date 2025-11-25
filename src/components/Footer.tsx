import { MapPin, Mail, Clock, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">AGROREIS LTDA</h3>
            <p className="text-muted-foreground mb-4">
              O campo mais forte começa aqui!
            </p>
            <p className="text-sm text-muted-foreground">
              CNPJ: 58.524.515/0001-70
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                <a href="mailto:agroreiscomercio.ar@gmail.com" className="hover:text-primary transition-colors">
                  agroreiscomercio.ar@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                <span>Rodovia BA-142, s/n</span>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Horário</h4>
            <div className="flex items-start gap-2 text-muted-foreground">
              <Clock className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
              <span>7:30 às 17h</span>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Redes sociais</h4>
            <a
              href="https://instagram.com/agroreis.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>@agroreis.ar</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AGROREIS LTDA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
