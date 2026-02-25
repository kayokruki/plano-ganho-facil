import { useState } from "react";
import { Menu, X, Phone, MapPin, Mail, Instagram, Shield, Heart, Scale, Users, Star, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import NegativaContactModal from "@/components/NegativaContactModal";

import logo from "@/assets/logo.png";
import heroImg from "@/assets/heloisa_e_maria_laura.jpeg";
import dorImg from "@/assets/maria_laura_pose_vermelha.jpeg";
import sobreImg from "@/assets/maria_laura_pose_vermelha_sorrindo.jpeg";
import mariaLauraImg from "@/assets/maria_laura.jpeg";
import heloisaImg from "@/assets/heloisa.jpeg";

const WHATSAPP_URL = "https://wa.me/558791306530?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20jur%C3%ADdica.";

const NegativaIndex = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const openModal = () => setModalOpen(true);

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <img src={logo} alt="HM Advocacia" className="h-12" />
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
            <a href="#sobre" className="hover:text-accent transition-colors">Sobre</a>
            <a href="#equipe" className="hover:text-accent transition-colors">Equipe</a>
            <a href="#servicos" className="hover:text-accent transition-colors">Serviços</a>
            <a href="#faq" className="hover:text-accent transition-colors">FAQ</a>
            <button onClick={openModal} className="px-5 py-2 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
              Fale Conosco
            </button>
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-4 py-4 space-y-3">
            <a href="#sobre" className="block text-sm text-foreground hover:text-accent" onClick={() => setMenuOpen(false)}>Sobre</a>
            <a href="#equipe" className="block text-sm text-foreground hover:text-accent" onClick={() => setMenuOpen(false)}>Equipe</a>
            <a href="#servicos" className="block text-sm text-foreground hover:text-accent" onClick={() => setMenuOpen(false)}>Serviços</a>
            <a href="#faq" className="block text-sm text-foreground hover:text-accent" onClick={() => setMenuOpen(false)}>FAQ</a>
            <button onClick={() => { openModal(); setMenuOpen(false); }} className="w-full px-5 py-2 rounded-md bg-primary text-primary-foreground font-semibold text-sm">
              Fale Conosco
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <header className="relative pt-24 md:pt-0 min-h-screen flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/70 to-transparent z-10" />
        <img src={heroImg} alt="Heloisa e Maria Laura" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="relative z-20 container mx-auto px-4 py-20 md:py-0">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/40 text-accent text-xs font-semibold tracking-wider uppercase mb-6 mx-auto md:mx-0">
              Direito à Saúde
            </div>
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl leading-tight text-white mb-6">
              Não deixe o plano de saúde negar o seu <span className="text-gradient-gold">direito.</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 font-body leading-relaxed">
              Lutamos pelo seu tratamento na justiça. Atendimento humanizado com rigor técnico para garantir sua cirurgia ou tratamento de alto custo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onClick={openModal} className="px-8 py-4 rounded-md bg-accent text-accent-foreground font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <MessageCircle size={18} /> Fale com uma Especialista
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* DOR */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Seu plano de saúde negou sua <span className="text-secondary">cirurgia ou tratamento?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 font-body leading-relaxed">
                Você não está sozinho. Milhares de brasileiros têm seus direitos negados todos os dias por planos de saúde que priorizam o lucro acima da sua vida.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Negativa de cobertura para cirurgias urgentes",
                  "Recusa de tratamentos de alto custo",
                  "Demora abusiva para autorização de procedimentos",
                  "Cancelamento unilateral de plano durante tratamento",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <X size={18} className="text-secondary mt-0.5 shrink-0" />
                    <span className="font-body">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-foreground font-semibold text-lg text-center md:text-left">
                A lei está do seu lado. <span className="text-accent">Nós sabemos como usá-la.</span>
              </p>
            </div>
            <div className="relative">
              <img alt="Maria Laura" className="rounded-lg shadow-lg w-full max-w-md mx-auto" src={dorImg} />
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-20 md:py-28 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl mb-4">Como podemos <span className="text-gradient-gold">ajudar você</span></h2>
            <p className="text-white/70 font-body text-lg">Atuamos de forma estratégica para garantir que seu direito à saúde seja respeitado.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Análise Jurídica", desc: "Avaliamos seu caso gratuitamente e identificamos a melhor estratégia para reverter a negativa." },
              { icon: Scale, title: "Ação Judicial", desc: "Entramos com pedido liminar para garantir a cobertura imediata do seu tratamento." },
              { icon: Heart, title: "Acompanhamento", desc: "Acompanhamos todo o processo até a resolução, mantendo você informado a cada passo." },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-colors">
                <item.icon size={32} className="text-accent mb-4" />
                <h3 className="font-heading text-xl mb-3">{item.title}</h3>
                <p className="text-white/70 font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <img src={sobreImg} alt="Maria Laura sorrindo" className="rounded-lg shadow-lg w-full max-w-md mx-auto" />
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">Sobre a <span className="text-accent">HM Advocacia</span></h2>
              <p className="text-muted-foreground text-lg mb-6 font-body leading-relaxed">
                Somos um escritório full service com especialidade em direito da saúde para pacientes, benefícios do INSS e direitos trabalhistas. Com escritório físico em Pernambuco e atuação online em todo Brasil.
              </p>
              <button onClick={openModal} className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 mx-auto md:mx-0">
                Fale com uma Especialista <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">O que nossos <span className="text-accent">clientes dizem</span></h2>
            <p className="text-muted-foreground font-body text-lg">Avaliações reais de quem confiou no nosso trabalho.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Samantha Ribeiro", text: "Profissionais muito bem preparadas. Excelente atendimento, principalmente para quem busca advogada trabalhista/previdenciarista e orientações sobre INSS. Recomendo o escritório pela atenção, competência e cuidado com os clientes." },
              { name: "Valeria Ribeiro Gomes", text: "Ótima profissional! Muito competente em Direito Trabalhista e INSS, atendimento claro, humano e eficiente. Recomendo." },
              { name: "Helena Rodrigues", text: "Profissional de altíssimo nível! Uma advogada previdenciária e trabalhista extremamente dedicada, que alia competência técnica a um atendimento humano e respeitoso. Sempre atualizada e preparada para defender com excelência os direitos do INSS. Referência na área!" },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed flex-1">"{item.text}"</p>
                <p className="font-heading text-sm text-foreground font-semibold">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Nossa <span className="text-accent">Equipe</span></h2>
            <p className="text-muted-foreground font-body">Profissionais dedicadas a defender seus direitos com excelência.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { img: mariaLauraImg, name: "Maria Laura Alves de Souza", role: "Advogada | Direito da Saúde" },
              { img: heloisaImg, name: "Heloisa Sampaio", role: "Advogada | Direito da Saúde" },
            ].map((member, i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden shadow-lg group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl text-foreground mb-1">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTRAS ÁREAS */}
      <section id="servicos" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Outras <span className="text-accent">Áreas de Atuação</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Heart, title: "Dano Moral por Negativa de Cobertura", desc: "Indenização por danos causados pela recusa indevida do plano de saúde." },
              { icon: Users, title: "Auxílio-Doença (Incapacidade Temporária)", desc: "Garantimos seu benefício junto ao INSS quando você mais precisa." },
              { icon: Scale, title: "Ação Revisional de Reajuste", desc: "Combatemos reajustes abusivos que impedem o acesso ao plano de saúde." },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow bg-card">
                <item.icon size={28} className="text-accent mb-4" />
                <h3 className="font-heading text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ETAPAS */}
      <section className="py-20 md:py-28 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl mb-4">Como funciona o <span className="text-gradient-gold">atendimento</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Contato", desc: "Entre em contato por WhatsApp ou formulário." },
              { step: "02", title: "Análise", desc: "Avaliamos seu caso sem custos iniciais." },
              { step: "03", title: "Estratégia", desc: "Definimos a melhor estratégia jurídica." },
              { step: "04", title: "Ação", desc: "Entramos com a ação e acompanhamos até o final." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 text-accent font-heading text-2xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading text-lg mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Nossos <span className="text-accent">Diferenciais</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Heart, title: "Vivência real", desc: "Conhecemos a realidade do paciente de perto." },
              { icon: Shield, title: "Atuação integrada", desc: "Especialistas em Direito da Saúde completo." },
              { icon: Star, title: "Rigor técnico", desc: "Atendimento humanizado com excelência jurídica." },
              { icon: MapPin, title: "Alcance nacional", desc: "Estrutura full service com atuação em todo Brasil." },
            ].map((item, i) => (
              <div key={i} className="bg-muted rounded-lg p-6 text-center">
                <item.icon size={28} className="text-accent mx-auto mb-3" />
                <h3 className="font-heading text-base text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-accent-foreground mb-6">Não espere mais para garantir seu direito</h2>
            <p className="text-accent-foreground/80 text-lg mb-8 font-body">
              Cada dia sem ação é um dia a mais sem o tratamento que você merece. Fale conosco agora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openModal} className="px-8 py-4 rounded-md bg-foreground text-white font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <MessageCircle size={18} /> Fale com uma Especialista
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Perguntas <span className="text-accent">Frequentes</span></h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                { q: "Quanto custa a consulta inicial?", a: "A análise inicial do seu caso é totalmente gratuita. Avaliamos sua situação e apresentamos as opções jurídicas sem nenhum compromisso." },
                { q: "Vocês atendem em todo o Brasil?", a: "Sim! Temos escritório físico em Petrolina/PE e atendemos online em todo o território nacional." },
                
                { q: "O plano de saúde pode negar minha cirurgia?", a: "Na maioria dos casos, a negativa é abusiva e ilegal. A legislação brasileira garante a cobertura de procedimentos prescritos pelo médico assistente." },
                { q: "Preciso ir ao escritório presencialmente?", a: "Não. Todo o atendimento pode ser feito de forma online, por WhatsApp, videochamada e e-mail." },
                { q: "Quais documentos preciso para iniciar?", a: "Carteirinha do plano, relatório médico, negativa do plano (se houver por escrito) e documentos pessoais. Orientamos tudo no primeiro contato." },
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="font-semibold text-foreground text-sm hover:no-underline py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body text-sm pb-5 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <img src={logo} alt="HM Advocacia" className="h-14 mb-4 brightness-200" />
              <p className="text-white/60 text-sm font-body leading-relaxed">
                Escritório especializado em Direito da Saúde, com atendimento humanizado e atuação em todo Brasil.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-lg mb-4">Contato</h4>
              <div className="space-y-3 text-sm text-white/70">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone size={14} /> (87) 9130-6530
                </a>
                <a href="mailto:hmadvocaciacontato@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail size={14} /> hmadvocaciacontato@gmail.com
                </a>
                <a href="https://maps.app.goo.gl/VtGv4NstTwEHzLku7" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-accent transition-colors">
                  <MapPin size={14} className="mt-0.5 shrink-0" /> Av. São Francisco, 181, Areia Branca, Petrolina/PE
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-lg mb-4">Redes Sociais</h4>
              <a href="https://instagram.com/hmadvogadas_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors">
                <Instagram size={14} /> @hmadvogadas_
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs font-body">
            <span>© {new Date().getFullYear()} HM Advocacia. Todos os direitos reservados.</span>
            <a href="/negativa-plano-saude/politica-de-privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-30 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />
      </a>

      <NegativaContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default NegativaIndex;
