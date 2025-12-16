import { MapPin, Mail, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Sobre */}
          <div>
            <img src={logo} alt="AGROREIS LTDA" className="h-16 sm:h-20 w-auto mb-3 sm:mb-4" />
            <p className="text-sm sm:text-base text-secondary-foreground/80 mb-3 sm:mb-4">
              O campo mais forte começa aqui!
            </p>
            <p className="text-xs sm:text-sm text-secondary-foreground/70">
              CNPJ: 58.524.515/0001-70
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-secondary-foreground mb-3 sm:mb-4">Contato</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 text-sm sm:text-base text-secondary-foreground/80">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0 text-white" />
                <a href="mailto:agroreiscomercio.ar@gmail.com" className="hover:text-primary transition-colors break-words">
                  agroreiscomercio.ar@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base text-secondary-foreground/80">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0 text-white" />
                <span>BA-142 Wagner/Utinga, em frente à praça nova</span>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-secondary-foreground mb-3 sm:mb-4">Horário</h4>
            <div className="flex items-start gap-2 text-sm sm:text-base text-secondary-foreground/80">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0 text-white" />
              <span>7:30 às 17h</span>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-secondary-foreground mb-3 sm:mb-4">Redes sociais</h4>
            <a
              href="https://instagram.com/agroreis.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm sm:text-base text-secondary-foreground/80 hover:text-primary transition-colors"
            >
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              <span>@agroreis.ar</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-border text-center text-xs sm:text-sm text-secondary-foreground/70">
          <p>&copy; {new Date().getFullYear()} AGROREIS LTDA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
