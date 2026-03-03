import { Scale, Heart, ShieldCheck, Globe } from "lucide-react";

const differentials = [
  {
    icon: Heart,
    title: "Vivência Real",
    description: "Entendemos a realidade do paciente porque já vivemos essa jornada de perto.",
  },
  {
    icon: Scale,
    title: "Atuação Integrada",
    description: "Direito da Saúde, Previdenciário e Trabalhista em um só escritório.",
  },
  {
    icon: ShieldCheck,
    title: "Rigor Técnico e Humanidade",
    description: "Processos conduzidos com excelência jurídica e atendimento acolhedor.",
  },
  {
    icon: Globe,
    title: "Alcance Nacional",
    description: "Escritório em Pernambuco com atuação online em todo o Brasil.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 relative geometric-bg">
      <div className="container mx-auto px-4">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-accent text-center mb-3">
          Sobre o escritório
        </p>
        <h2 className="font-heading text-3xl md:text-[40px] text-center text-foreground mb-6">
          Quem somos
        </h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Somos um escritório full service com especialidade em direito da saúde para pacientes,
          benefícios do INSS e direitos trabalhistas. Com escritório físico em Pernambuco e atuação
          online em todo Brasil.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-accent/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors mx-auto sm:mx-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-body text-xl md:text-2xl font-semibold text-foreground mb-2 text-center sm:text-left">
                {item.title}
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed text-center sm:text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-whatsapp-popup"))}
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-base rounded-lg hover:bg-primary/90 transition-colors"
          >
            Fale com uma especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
