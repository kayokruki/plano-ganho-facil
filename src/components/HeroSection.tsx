import heroImage from "@/assets/maria_e_heloisa_hero.jpeg";

const HeroSection = () => {
  const handleCTA = () => {
    window.dispatchEvent(new CustomEvent("open-whatsapp-popup"));
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 md:pt-20 geometric-bg">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Text */}
          <div className="order-2 md:order-1 animate-fade-in-up text-center md:text-left">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-4">
              Direito à Saúde • HM Advocacia
            </p>
            <h1 className="font-heading text-3xl md:text-[40px] leading-tight text-foreground mb-6">
              Seu direito à cirurgia reparadora e tratamentos de alto custo{" "}
              <span className="text-gradient-gold">sem negativas do plano de saúde</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Seu plano de saúde negou a cirurgia reparadora pós-bariátrica ou o tratamento com Mounjaro? Você não
              precisa aceitar isso. Nós lutamos pelo seu direito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
              <button
                onClick={handleCTA}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-base rounded-lg hover:bg-crimson/90 transition-colors"
              >
                Fale com uma especialista
              </button>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent text-accent font-body font-semibold text-base rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Conheça nossos serviços
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl blur-xl" />
              <img
                src={heroImage}
                alt="Maria Laura e Heloisa - Sócias da HM Advocacia"
                className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover"
                loading="eager"
                fetchPriority="high"
                width={448}
                height={597}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
