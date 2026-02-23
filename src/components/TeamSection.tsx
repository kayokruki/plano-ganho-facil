import mariaImg from "@/assets/maria.jpeg";
import heloisaImg from "@/assets/heloisa.jpeg";

const team = [
  {
    name: "Maria Laura Alves de Souza",
    role: "Sócia-fundadora",
    image: mariaImg,
    description:
      "Expertise em processos contra planos de saúde e vivência real em cirurgias reparadoras. Conhece de perto a jornada do paciente e luta por seus direitos com empatia e firmeza.",
  },
  {
    name: "Heloisa Sampaio",
    role: "Sócia-fundadora",
    image: heloisaImg,
    description:
      "Especialista em benefícios do INSS e suporte para afastamentos previdenciários. Garante que pacientes em recuperação tenham acesso a todos os seus direitos.",
  },
];

const TeamSection = () => {
  return (
    <section id="equipe" className="py-20 md:py-28 geometric-bg">
      <div className="container mx-auto px-4">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-accent text-center mb-3">
          Nossa equipe
        </p>
        <h2 className="font-heading text-3xl md:text-[40px] text-center text-foreground mb-16">
          Quem está ao seu lado
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-shadow group"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-body text-xl md:text-2xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="font-body text-sm uppercase tracking-wider text-accent mb-4">
                  {member.role}
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
