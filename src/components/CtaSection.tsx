import { MessageCircle } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-[40px] text-primary mb-6">
          Não espere mais para garantir seu direito
        </h2>
        <p className="font-body text-lg text-primary/70 max-w-2xl mx-auto mb-10">
          Cada dia sem ação é um dia a mais sem o tratamento que você merece. Fale conosco agora.
        </p>
        <a
          href="#contato"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-base rounded-none hover:bg-primary/90 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Fale com uma Especialista
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
