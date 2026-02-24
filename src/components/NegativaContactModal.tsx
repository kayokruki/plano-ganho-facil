import { useState } from "react";
import { X } from "lucide-react";

interface NegativaContactModalProps {
  open: boolean;
  onClose: () => void;
}

const NegativaContactModal = ({ open, onClose }: NegativaContactModalProps) => {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", mensagem: "" });
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://n8n.aceleracaojuridica.com.br/webhook/lead-landing-popup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // continue to WhatsApp regardless
    }
    setLoading(false);
    const msg = encodeURIComponent(`Olá, meu nome é ${form.nome}. ${form.mensagem}`);
    window.open(`https://wa.me/558791306530?text=${msg}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-card rounded-lg shadow-lg max-w-md w-full p-8 relative animate-fade-in" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
          <X size={20} />
        </button>
        <h3 className="font-heading text-2xl text-foreground mb-2">Fale Conosco</h3>
        <p className="text-muted-foreground text-sm mb-6">Preencha seus dados e entraremos em contato.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            placeholder="Seu nome completo"
            value={form.nome}
            onChange={e => setForm({ ...form, nome: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
          />
          <input
            required
            placeholder="WhatsApp (com DDD)"
            value={form.telefone}
            onChange={e => setForm({ ...form, telefone: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
          />
          <textarea
            placeholder="Descreva brevemente seu caso"
            value={form.mensagem}
            onChange={e => setForm({ ...form, mensagem: e.target.value })}
            rows={3}
            className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Enviar e falar no WhatsApp"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NegativaContactModal;
