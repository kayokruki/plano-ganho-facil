const steps = [
  {
    number: "01",
    title: "Contato",
    description: "Entre em contato por WhatsApp ou formulário.",
  },
  {
    number: "02",
    title: "Análise",
    description: "Avaliamos seu caso sem custos iniciais.",
  },
  {
    number: "03",
    title: "Essencial",
    description: "Definimos a melhor estratégia jurídica.",
  },
  {
    number: "04",
    title: "Ação",
    description: "Entramos com a ação e acompanhamos até o final.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary relative">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-[40px] text-center text-primary-foreground mb-16">
          Como funciona o{" "}
          <span className="text-accent">atendimento</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-muted-foreground/30 flex items-center justify-center mb-5">
                <span className="font-heading text-lg text-accent">{step.number}</span>
              </div>
              <h3 className="font-heading text-sm md:text-base uppercase tracking-[0.15em] text-primary-foreground mb-2">
                {step.title}
              </h3>
              <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
