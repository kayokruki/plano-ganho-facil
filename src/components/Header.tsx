import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Equipe", href: "#equipe" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-center md:justify-between h-16 md:h-20">
        <a href="#inicio">
          <img src={logo} alt="HM Advocacia" className="h-10 md:h-14" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm uppercase tracking-wider text-foreground/80 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
