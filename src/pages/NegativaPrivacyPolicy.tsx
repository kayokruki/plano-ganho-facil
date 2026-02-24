import { Link } from "react-router-dom";

const NegativaPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/negativa-plano-saude" className="font-body text-sm text-accent hover:underline mb-8 inline-block">
          ← Voltar ao início
        </Link>
        <h1 className="font-heading text-3xl md:text-[40px] text-foreground mb-8">
          Política de Privacidade
        </h1>

        <div className="font-body text-base text-muted-foreground leading-relaxed space-y-6">
          <p>
            A HM Advocacia, inscrita no CNPJ sob o nº [número], com sede em Av. São Francisco, 181,
            Areia Branca, Petrolina/PE, é responsável pelo tratamento dos seus dados pessoais
            conforme descrito nesta Política de Privacidade.
          </p>

          <h2 className="font-heading text-xl text-foreground pt-4">1. Dados coletados</h2>
          <p>
            Coletamos apenas os dados fornecidos voluntariamente por você através do formulário de
            contato: nome, telefone, e-mail e descrição do problema jurídico.
          </p>

          <h2 className="font-heading text-xl text-foreground pt-4">2. Finalidade</h2>
          <p>
            Os dados são utilizados exclusivamente para entrar em contato com você e fornecer
            orientação jurídica sobre seu caso.
          </p>

          <h2 className="font-heading text-xl text-foreground pt-4">3. Compartilhamento</h2>
          <p>
            Seus dados não são compartilhados com terceiros, exceto quando necessário para
            cumprimento de obrigação legal ou ordem judicial.
          </p>

          <h2 className="font-heading text-xl text-foreground pt-4">4. Segurança</h2>
          <p>
            Adotamos medidas técnicas e administrativas adequadas para proteger seus dados pessoais
            contra acessos não autorizados e situações de destruição, perda ou alteração.
          </p>

          <h2 className="font-heading text-xl text-foreground pt-4">5. Seus direitos</h2>
          <p>
            Você pode solicitar a exclusão, correção ou acesso aos seus dados a qualquer momento
            através do e-mail hmadvocaciacontato@gmail.com.
          </p>

          <h2 className="font-heading text-xl text-foreground pt-4">6. Contato</h2>
          <p>
            Para dúvidas sobre esta política, entre em contato pelo e-mail
            hmadvocaciacontato@gmail.com.
          </p>

          <p className="text-sm opacity-60 pt-8">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NegativaPrivacyPolicy;
