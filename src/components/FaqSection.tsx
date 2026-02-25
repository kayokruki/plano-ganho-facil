import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O plano de saúde pode negar minha cirurgia?",
    answer:
      "Não. A cirurgia reparadora pós-bariátrica é um direito garantido pela ANS quando há indicação médica. O excesso de pele após a perda de peso ponderal pode causar problemas físicos e psicológicos, e o plano é obrigado a cobrir o procedimento.",
  },
  {
    question: "Preciso ir ao escritório presencialmente?",
    answer:
      "Não! Nosso atendimento é 100% digital e humanizado. Temos escritório físico em Petrolina/PE, mas atuamos em todo o Brasil de forma online.",
  },
  {
    question: "Quais documentos precisos para iniciar?",
    answer:
      "Geralmente precisamos de laudos médicos, carteirinha do plano de saúde, documentos pessoais e comprovantes de negativa do plano. Na primeira análise pelo WhatsApp, nossa equipe orienta exatamente o que será necessário.",
  },
  {
    question: "O plano é obrigado a cobrir cirurgias reparadoras mesmo que a perda de peso tenha sido com Mounjaro e Ozempic e não bariátrica?",
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
    question: "Como funciona o primeiro contato?",
    answer:
      "A primeira análise é feita pelo WhatsApp pela nossa equipe. Vendo que há viabilidade, encaminhamos para os próximos passos do atendimento.",
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
