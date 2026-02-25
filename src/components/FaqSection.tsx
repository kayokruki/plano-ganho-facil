import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Meu plano de saúde pode negar a cirurgia reparadora pós-bariátrica?",
    answer:
      "Não. A cirurgia reparadora pós-bariátrica é um direito garantido pela ANS quando há indicação médica. O excesso de pele após a perda de peso ponderal pode causar problemas físicos e psicológicos, e o plano é obrigado a cobrir o procedimento.",
  },
  {
    question: "O plano é obrigado a fornecer Mounjaro ou Ozempic?",
    answer:
      "Sim, quando há prescrição médica e o medicamento é essencial para o tratamento. Canetas emagrecedoras como Mounjaro e Ozempic são indicadas para obesidade e perda de peso ponderal. Em caso de negativa, podemos obter uma liminar judicial para garantir o fornecimento.",
  },
  {
    question: "Vocês atendem pacientes de outros estados?",
    answer:
      "Sim! Temos escritório físico em Petrolina/PE, mas atuamos em todo o Brasil de forma online. Nosso atendimento é 100% digital e humanizado.",
  },
  {
    question: "Tenho direito a auxílio-doença durante a recuperação?",
    answer:
      "Sim. Se você precisa se afastar do trabalho para recuperação de cirurgia reparadora ou tratamento de saúde, pode ter direito ao auxílio-doença do INSS. Nossa equipe cuida de todo o processo.",
  },
  {
    question: "Quanto custa a consulta inicial?",
    answer:
      "A primeira análise do seu caso é gratuita. Entre em contato pelo WhatsApp e nossa equipe avaliará sua situação sem compromisso.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-section-alt relative geometric-arcs">
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-accent text-center mb-3">
          Dúvidas
        </p>
        <h2 className="font-heading text-3xl md:text-[40px] text-center text-foreground mb-12">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="font-body text-base md:text-lg text-foreground text-left hover:text-accent hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-base text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
