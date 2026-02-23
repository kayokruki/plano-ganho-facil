import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="HM Advocacia" className="h-10 brightness-200" />
          <p className="font-body text-sm text-primary-foreground/60 text-center">
            © {new Date().getFullYear()} HM Advocacia. Todos os direitos reservados.
          </p>
          <Link
            to="/politica-de-privacidade"
            className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
