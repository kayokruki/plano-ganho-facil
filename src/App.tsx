import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NegativaIndex from "./pages/NegativaIndex";
import NegativaPrivacyPolicy from "./pages/NegativaPrivacyPolicy";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/seu-direito-a-cirurgia-reparadora-e-tratamentos-de-alto-custo" element={<Index />} />
          <Route path="/seu-direito-a-cirurgia-reparadora-e-tratamentos-de-alto-custo/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="/seu-direito-a-cirurgia-reparadora-e-tratamentos-de-alto-custo/obrigado-landing-page" element={<ThankYou />} />
          <Route path="/negativa-plano-saude" element={<NegativaIndex />} />
          <Route path="/negativa-plano-saude/politica-de-privacidade" element={<NegativaPrivacyPolicy />} />
          <Route path="/" element={<Navigate to="/seu-direito-a-cirurgia-reparadora-e-tratamentos-de-alto-custo" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
