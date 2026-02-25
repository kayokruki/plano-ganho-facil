import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Samantha Ribeiro",
    text: "Profissionais muito bem preparadas. Excelente atendimento, principalmente para quem busca advogada trabalhista/previdenciarista e orientações sobre INSS. Recomendo o escritório pela atenção, competência e cuidado com os clientes.",
    rating: 5,
    time: "1 semana atrás",
  },
  {
    name: "Valeria Ribeiro Gomes",
    text: "Ótima profissional! Muito competente em Direito Trabalhista e INSS, atendimento claro, humano e eficiente. Recomendo.",
    rating: 5,
    time: "2 semanas atrás",
  },
  {
    name: "Helena Rodrigues",
    text: "Profissional de altíssimo nível! Uma advogada previdenciária e trabalhista extremamente dedicada, que alia competência técnica a um atendimento humano e respeitoso. Sempre atualizada e preparada para defender com excelência os direitos do INSS. Referência na área!",
    rating: 5,
    time: "6 meses atrás",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-accent text-center mb-3">
          Depoimentos
        </p>
        <h2 className="font-heading text-3xl md:text-[40px] text-center text-foreground mb-16">
          O que nossos clientes dizem
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-6 flex-1">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-body text-sm font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {t.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
