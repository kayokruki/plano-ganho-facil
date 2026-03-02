import { MapPin, Mail, Phone, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-gold text-center mb-3">
          Contato
        </p>
        <h2 className="font-heading text-3xl md:text-[40px] text-center mb-6">
          Fale conosco
        </h2>
        <p className="font-body text-lg text-center opacity-80 max-w-2xl mx-auto mb-12">
          Entre em contato para uma análise gratuita do seu caso. Estamos prontas para lutar pelo seu direito.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <a
            href="https://wa.me/558791306530"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-6 rounded-xl border border-gold/20 hover:border-gold/50 transition-colors"
          >
            <Phone className="w-8 h-8 text-gold mb-3" />
            <span className="font-body font-semibold mb-1">WhatsApp</span>
            <span className="font-body text-sm opacity-70">(87) 9130-6530</span>
          </a>

          <a
            href="mailto:hmadvocaciacontato@gmail.com"
            className="flex flex-col items-center text-center p-6 rounded-xl border border-gold/20 hover:border-gold/50 transition-colors"
          >
            <Mail className="w-8 h-8 text-gold mb-3" />
            <span className="font-body font-semibold mb-1">E-mail</span>
            <span className="font-body text-sm opacity-70">hmadvocaciacontato@gmail.com</span>
          </a>

          <a
            href="https://maps.app.goo.gl/VtGv4NstTwEHzLku7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-6 rounded-xl border border-gold/20 hover:border-gold/50 transition-colors"
          >
            <MapPin className="w-8 h-8 text-gold mb-3" />
            <span className="font-body font-semibold mb-1">Endereço</span>
            <span className="font-body text-sm opacity-70">Av. São Francisco, 181, Areia Branca, Petrolina/PE</span>
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://instagram.com/hmadvogadas_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-wider text-gold hover:text-gold/80 transition-colors"
          >
            <Instagram className="w-4 h-4" />
            Instagram →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
