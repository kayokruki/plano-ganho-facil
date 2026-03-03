import { Scissors, Pill, Scale, HeartPulse } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Cirurgias Plásticas Reparadoras",
    subtitle: "Pós-bariátrica / Pós Mounjaro",
    description:
      "Seu plano de saúde negou uma cirurgia após uma bariátrica? A lei garante cobertura. E além disso! Caso você tenha perdido uma grande quantidade de peso mesmo com o uso de Mounjaro e similares, o plano também deverá cobrir as suas cirurgias reparadoras. Nós buscamos o seu direito judicialmente.",
  },
  {
    icon: Pill,
    title: "Medicamentos de Alto Custo",
    subtitle: "FORNECIMENTO PELO PLANO",
    description:
      "Você teve acesso negado a medicamentos que são essenciais ao seu tratamento? Se houver prescrição médica, o plano de saúde deve cobrir o tratamento. Atuamos juridicamente para garantir que você receba os medicamentos necessários.",
  },
  {
    icon: HeartPulse,
    title: "Auxílio-Doença",
    subtitle: "Recuperação cirúrgica",
    description:
      "Precisa se afastar do trabalho para recuperação? Garantimos seus benefícios previdenciários durante todo o período necessário.",
  },
  {
    icon: Scale,
    title: "Cirurgia ou Tratamento Negado",
    subtitle: "Plano de saúde",
    description:
      "Caso o plano de saúde tenha negado outro tipo de cirurgia ou tratamentos (HOME CARE ou acompanhamento para TEA), nós buscamos o seu direito ao acesso à Saúde.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-section-alt relative geometric-arcs">
      <div className="container mx-auto px-4 relative z-10">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-accent text-center mb-3">
          Nossos serviços
        </p>
        <h2 className="font-heading text-3xl md:text-[40px] text-center text-foreground mb-4">
          Como podemos ajudar
        </h2>
        <p className="font-body text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Atuamos em todas as frentes do direito à saúde para garantir que você receba o tratamento que merece.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-xl hover:border-accent/40 transition-all group"
            >
              <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors mx-auto sm:mx-0">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-body text-xl md:text-2xl font-semibold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm uppercase tracking-wider text-accent mb-3">
                    {service.subtitle}
                  </p>
                  <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
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

export default ServicesSection;
