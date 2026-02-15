import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "@/components/Navbar";
import Index from "./pages/Index";
import ProcessSecurity from "./pages/ProcessSecurity";
import ClientsContact from "./pages/ClientsContact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/process-security" element={<ProcessSecurity />} />
          <Route path="/clients-contact" element={<ClientsContact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
