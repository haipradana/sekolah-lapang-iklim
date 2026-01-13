import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home";
import ModuleList from "./pages/ModuleList";
import ModuleOverview from "./pages/ModuleOverview";
import SubmodulePage from "./pages/SubmodulePage";
import Progress from "./pages/Progress";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modul" element={<ModuleList />} />
          <Route path="/modul/:moduleId" element={<ModuleOverview />} />
          <Route path="/modul/:moduleId/:submoduleSlug" element={<SubmodulePage />} />
          <Route path="/progres" element={<Progress />} />
          <Route path="/tentang" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
