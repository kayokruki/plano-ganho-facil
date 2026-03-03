import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { z } from "zod";
import { Progress } from "@/components/ui/progress";

const leadSchema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100),
  telefone: z.string().trim().min(8, "Telefone inválido").max(20),
  problema: z.string().trim().min(1, "Descreva brevemente seu problema").max(500),
});

const LOADING_DURATION = 5000;

const TRACKING_URL = "https://hmadvocacia.advlanding.com.br/whatsapp-landing/?whatsapp=8791306530";
const WHATSAPP_URL = "https://wa.me/558791306530";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / LOADING_DURATION) * 100, 100);
      setProgress(pct);
      setCountdown(Math.max(Math.ceil((LOADING_DURATION - elapsed) / 1000), 0));
      if (elapsed >= LOADING_DURATION) {
        clearInterval(interval);
        onComplete();
      }
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 backdrop-blur-sm animate-fade-in">
      {/* Hidden iframe to load tracking URL */}
      <iframe src={TRACKING_URL} className="hidden" width="0" height="0" title="tracking" />
      <div className="flex flex-col items-center gap-6 px-6 text-center max-w-sm">
        <Loader2 className="w-12 h-12 text-[#25D366] animate-spin" />
        <h3 className="font-heading text-xl md:text-2xl text-foreground">
          Preparando seu atendimento...
        </h3>
        <p className="font-body text-sm text-muted-foreground">
          Você será redirecionado para o WhatsApp em {countdown}s
        </p>
        <Progress value={progress} className="w-full h-2" />
      </div>
    </div>
  );
};

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [form, setForm] = useState({ nome: "", telefone: "", problema: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleRedirect = () => {
    window.location.href = WHATSAPP_URL;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = leadSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      await fetch("https://n8n.aceleracaojuridica.com.br/webhook/lead-landing-popup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
    } catch {
      // Continue to redirect even if webhook fails
    }

    setLoading(false);
    setShowPopup(false);
    setShowLoading(true);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setShowPopup(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-card flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      </button>

      {/* Popup overlay */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-card rounded-2xl shadow-2xl w-full max-w-md p-6 md:p-8 relative animate-fade-in-up">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2">
              Fale com uma especialista
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Preencha seus dados e vamos te atender pelo WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  maxLength={100}
                />
                {errors.nome && <p className="text-sm text-destructive mt-1">{errors.nome}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Seu telefone"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  maxLength={20}
                />
                {errors.telefone && <p className="text-sm text-destructive mt-1">{errors.telefone}</p>}
              </div>
              <div>
                <textarea
                  placeholder="Descreva brevemente seu problema"
                  value={form.problema}
                  onChange={(e) => setForm({ ...form, problema: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  maxLength={500}
                />
                {errors.problema && <p className="text-sm text-destructive mt-1">{errors.problema}</p>}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#25D366] text-card font-body font-semibold text-base hover:bg-[#20bd5a] transition-colors disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {loading ? "Enviando..." : "Enviar e ir para WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      )}

      {showLoading && <LoadingScreen onComplete={handleRedirect} />}
    </>
  );
};

export default WhatsAppButton;
