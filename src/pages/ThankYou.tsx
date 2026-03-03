import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center geometric-bg px-4">
      <div className="max-w-lg w-full text-center animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-accent" strokeWidth={1.5} />
        </div>
        <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
          Obrigado pelo contato!
        </h1>
        <p className="font-body text-lg text-muted-foreground mb-3 leading-relaxed">
          Recebemos seus dados e em breve uma de nossas especialistas entrará em contato com você pelo WhatsApp.
        </p>
        <p className="font-body text-sm text-muted-foreground mb-8">
          Caso a janela do WhatsApp não tenha aberto, clique no botão abaixo para falar conosco diretamente.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/558791306530"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-card font-body font-semibold rounded-lg hover:bg-[#20bd5a] transition-colors"
          >
            Abrir WhatsApp
          </a>
          <Link
            to="/seu-direito-a-cirurgia-reparadora-e-tratamentos-de-alto-custo"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent text-accent font-body font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Voltar ao site
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
