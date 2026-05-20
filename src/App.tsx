import React, { useState, useEffect } from "react";
import { 
  motion, 
  AnimatePresence 
} from "motion/react";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Sparkles, 
  Eye, 
  Binary, 
  Activity, 
  Wind, 
  Volume2, 
  Sun, 
  ShieldAlert, 
  Phone, 
  Instagram, 
  Facebook,
  MapPin, 
  Calendar, 
  Clock, 
  Heart, 
  Check, 
  CheckCircle, 
  Copy, 
  ChevronLeft, 
  ChevronRight, 
  Star,
  Compass,
  AlertCircle
} from "lucide-react";
import { SERVICES_DATA, FAQ_DATA, TESTIMONIALS_DATA, SPA_FEATURES } from "./data";
import { Service } from "./types";
import LegalModal from "./components/LegalModals";

export default function App() {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Legal modal state
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null);

  const openLegalModal = (type: "privacy" | "terms") => {
    setLegalModalType(type);
    setLegalModalOpen(true);
  };
  
  // Scrolled navbar state
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Active section state for scroll highlight
  const [activeTab, setActiveTab] = useState("inicio");

  // Selected service detail modal state
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Interactive Quiz State
  const [quizAnswers, setQuizAnswers] = useState({
    physical: "",
    mental: "",
    objective: ""
  });
  const [quizResult, setQuizResult] = useState<string | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Testimonials slide state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // FAQ open/close accordions setup
  const [openFaqIndex, setOpenFaqIndex] = useState<string | null>("faq-1");

  // active Spa Space Highlight feature
  const [activeSpaFeatureId, setActiveSpaFeatureId] = useState("space-1");

  // Scroll spy helper
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Check current active section
      const sections = ["inicio", "conceito", "servicos", "sobre", "depoimentos", "faq"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= -200 && rect.top <= 350) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate Quiz Recommendation
  const handleQuizChoice = (category: "physical" | "mental" | "objective", value: string) => {
    setQuizAnswers(prev => ({ ...prev, [category]: value }));
  };

  useEffect(() => {
    // If all questions are answered, determine suggestion
    if (quizAnswers.physical && quizAnswers.mental && quizAnswers.objective) {
      let suggestion = "reiki"; // Default is Reiki

      const { physical, mental, objective } = quizAnswers;

      if (objective === "propósito" || mental === "desmotivado") {
        suggestion = "numerologia";
      } else if (objective === "limpeza" || physical === "cansaço" || mental === "sobrecarga") {
        // High density of stressful blockages
        if (objective === "limpeza") {
          suggestion = "radiestesia";
        } else {
          suggestion = "reiki";
        }
      } else if (objective === "clareza" || mental === "confuso") {
        suggestion = "terapia-simbolica";
      } else if (physical === "tenso" && objective === "alívio") {
        suggestion = "reiki";
      } else {
        // Balanced answers, pick based on objective
        switch (objective) {
          case "alívio":
            suggestion = "reiki";
            break;
          case "clareza":
            suggestion = "terapia-simbolica";
            break;
          case "propósito":
            suggestion = "numerologia";
            break;
          case "limpeza":
            suggestion = "radiestesia";
            break;
        }
      }

      setQuizResult(suggestion);
      setQuizCompleted(true);
    }
  }, [quizAnswers]);

  const resetQuiz = () => {
    setQuizAnswers({ physical: "", mental: "", objective: "" });
    setQuizResult(null);
    setQuizCompleted(false);
  };

  // Testimonials Carousel Actions
  const prevTestimonial = () => {
    setCurrentTestimonialIndex(prev => 
      prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(prev => 
      prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1
    );
  };

  // Helper to get service icon dynamically
  const renderIcon = (name: string, className = "w-6 h-6") => {
    switch (name) {
      case "Heart": return <Heart className={className} />;
      case "Eye": return <Eye className={className} />;
      case "Binary": return <Binary className={className} />;
      case "Activity": return <Activity className={className} />;
      case "Wind": return <Wind className={className} />;
      case "Volume2": return <Volume2 className={className} />;
      case "Sun": return <Sun className={className} />;
      case "ShieldAlert": return <ShieldAlert className={className} />;
      default: return <Heart className={className} />;
    }
  };

  return (
    <div id="inicio" className="min-h-screen bg-blush text-dark selection:bg-rosegold selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. Header & Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-blush/90 backdrop-blur-md shadow-md border-b border-rosegold/15 py-3" 
          : "bg-blush/40 backdrop-blur-sm border-b border-rosegold/5 py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#inicio" className="flex items-center space-x-2 group focus:outline-none" onClick={() => setMobileMenuOpen(false)}>
            <img 
              src="https://i.ibb.co/ZRyY8vsp/marta-logo-site.webp" 
              alt="Marta Ana Chiconato - Terapia Integrativa" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-medium text-dark/75">
            {[
              { id: "conceito", label: "Conceito" },
              { id: "servicos", label: "Serviços" },
              { id: "sobre", label: "O Espaço" },
              { id: "depoimentos", label: "Depoimentos" },
              { id: "faq", label: "FAQ" }
            ].map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={() => setActiveTab(item.id)}
                className={`relative transition-colors duration-300 pb-2 cursor-pointer ${
                  activeTab === item.id ? "text-bordeaux font-semibold" : "text-dark/75 hover:text-bordeaux"
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <motion.span 
                    layoutId="activeNavIndicator" 
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-bordeaux"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a 
              href="#agendar" 
              className="bg-bordeaux text-blush px-6 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-dark transition-all duration-300 shadow-md shadow-bordeaux/10 block rounded-full"
              whileHover={{ 
                y: [0, -6, 2, -2, 0],
                scale: 1.03,
                transition: { 
                  duration: 0.6,
                  ease: "easeInOut"
                }
              }}
              whileTap={{ scale: 0.97 }}
            >
              Agendar
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-dark hover:text-bordeaux p-2 focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-blush border-b border-rosegold/10 overflow-hidden"
            >
              <div className="px-6 pt-2 pb-6 space-y-1 text-center font-light uppercase tracking-widest text-sm">
                {[
                  { id: "conceito", label: "Conceito" },
                  { id: "servicos", label: "Serviços" },
                  { id: "sobre", label: "O Espaço" },
                  { id: "depoimentos", label: "Depoimentos" },
                  { id: "faq", label: "Perguntas Frequentes" }
                ].map((item) => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`} 
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block py-3.5 border-b border-rosegold/5 transition-all duration-300 rounded-lg ${
                      activeTab === item.id 
                        ? "text-bordeaux font-semibold bg-rosegold/5 tracking-wider" 
                        : "text-dark/80 hover:text-bordeaux hover:bg-rosegold/5"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-5 flex justify-center">
                  <a 
                    href="#agendar" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="bg-bordeaux text-blush text-center w-full max-w-xs py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-dark active:scale-[0.98] transition-all duration-300 shadow-md shadow-bordeaux/10 rounded-full"
                  >
                    Agendar Horário
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-blush">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1550136513-548af4445338?q=80&w=2074&auto=format&fit=crop" 
            alt="Quartzo Rosa Elegante" 
            className="w-full h-full object-cover opacity-20 object-center filter saturate-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blush/40 via-blush/80 to-blush"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <div className="h-[1px] w-8 bg-rosegold/60"></div>
            <p className="text-rosegold uppercase tracking-[0.25em] text-xs font-semibold">Terapia Integrativa</p>
            <div className="h-[1px] w-8 bg-rosegold/60"></div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-bordeaux mb-6 leading-[1.12]"
          >
            Sua Jornada de Autoconhecimento e Evolução Pessoal.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl font-light text-dark/85 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Um atendimento exclusivo e personalizado para expandir sua clareza mental, resgatar o equilíbrio emocional e direcionar suas decisões com sabedoria.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="https://wa.me/5519999220089?text=Ol%C3%A1%20Marta%21%20Vi%20o%20site%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20presencial%20ou%20online.%20Poderia%20me%20orientar%3F" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center border-2 border-bordeaux bg-bordeaux text-blush px-8 sm:px-10 py-3.5 uppercase tracking-widest text-xs font-semibold focus:outline-none hover:bg-transparent hover:text-bordeaux shadow-lg shadow-bordeaux/15 hover:shadow-none transition-all duration-300 transform active:scale-95 rounded-full"
            >
              Falar com a Marta no WhatsApp
            </a>
            <a 
              href="#quiz-orientador" 
              className="w-full sm:w-auto text-center border-2 border-rosegold/50 text-dark px-8 sm:px-10 py-3.5 uppercase tracking-widest text-xs font-semibold hover:border-bordeaux hover:text-bordeaux transition-all duration-300 focus:outline-none rounded-full"
            >
              Descobrir Minha Terapia
            </a>
          </motion.div>
        </div>

        {/* Delicate scrolling cue line */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-[10px] tracking-widest uppercase text-rosegold font-light mb-2">Deslizar</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-rosegold"
          />
        </div>
      </header>

      {/* 3. O Conceito: A Jornada de Clareza */}
      <section id="conceito" className="py-20 md:py-28 px-6 bg-white relative">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-rosegold absolute top-0 left-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-4xl mx-auto text-center pt-8">
          <p className="text-rosegold uppercase tracking-widest text-[11px] font-semibold mb-3">Harmonia e Alinhamento</p>
          <h2 className="text-3xl sm:text-4xl font-serif text-bordeaux mb-8 leading-snug">
            Um Mapa Exclusivo para a Sua Evolução e Paz Interior.
          </h2>
          <div className="w-16 h-px bg-rosegold/60 mx-auto mb-8"></div>
          
          <p className="text-dark/80 font-light leading-relaxed text-base sm:text-lg max-w-3xl mx-auto mb-10">
            Não existe um caminho único para o bem-estar absoluto. Na minha abordagem de <strong>Terapia Integrativa</strong>, unimos poderosos portais de sabedoria — a vibração dos números, a harmonia de frequências de radiestesia, o simbolismo das cartas e o fluxo de energia sutil vital — para decifrar o seu "agora", liberar nós energéticos de fundo e estruturar um plano personalizado para que você caminhe com assertividade e plenitude física.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-3xl mx-auto mt-16">
            <div className="p-5 border border-rosegold/10 bg-blush/20 hover:bg-blush/40 shadow-sm hover:shadow transition-all duration-300 rounded-2xl">
              <span className="font-serif text-bordeaux text-3xl block font-bold mb-1">01</span>
              <span className="text-[10px] uppercase tracking-widest text-rosegold font-semibold">Exclusividade</span>
            </div>
            <div className="p-5 border border-rosegold/10 bg-blush/20 hover:bg-blush/40 shadow-sm hover:shadow transition-all duration-300 rounded-2xl">
              <span className="font-serif text-bordeaux text-3xl block font-bold mb-1">02</span>
              <span className="text-[10px] uppercase tracking-widest text-rosegold font-semibold">Acolhimento</span>
            </div>
            <div className="p-5 border border-rosegold/10 bg-blush/20 hover:bg-blush/40 shadow-sm hover:shadow transition-all duration-300 rounded-2xl">
              <span className="font-serif text-bordeaux text-3xl block font-bold mb-1">03</span>
              <span className="text-[10px] uppercase tracking-widest text-rosegold font-semibold">Clareza</span>
            </div>
            <div className="p-5 border border-rosegold/10 bg-blush/20 hover:bg-blush/40 shadow-sm hover:shadow transition-all duration-300 rounded-2xl">
              <span className="font-serif text-bordeaux text-3xl block font-bold mb-1">04</span>
              <span className="text-[10px] uppercase tracking-widest text-rosegold font-semibold">Cuidado</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Quiz Tool - "Descobrir Minha Terapia" */}
      <section id="quiz-orientador" className="py-16 md:py-24 px-6 bg-blush/50 border-t border-b border-rosegold/10">
        <div className="max-w-3xl mx-auto bg-white border border-rosegold/15 p-8 md:p-12 shadow-xl shadow-bordeaux/5 rounded-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-bordeaux"></div>
          
          <div className="text-center mb-8">
            <span className="text-rosegold uppercase tracking-widest text-[10px] font-semibold flex items-center justify-center gap-1.5 mb-2">
              <Compass className="w-4 h-4 text-rosegold" /> Quiz Orientador de Essência
            </span>
            <h3 className="text-2xl font-serif text-bordeaux">Qual a terapia recomendada para o seu momento?</h3>
            <p className="text-dark/65 font-light text-xs mt-1">Selecione uma opção em cada pergunta para receber seu diagnóstico instantâneo.</p>
          </div>

          <div className="space-y-6 mt-10">
            {/* Question 1 */}
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-bordeaux mb-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-bordeaux"></span> 1. Como se sente a nível físico e corpóreo?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "cansaço", label: "Cansado(a) ou exausto(a) constantemente" },
                  { id: "tenso", label: "Tenso(a) com dores ou desconfortos musculares" },
                  { id: "estável", label: "Estável, sem grandes alterações físicas" }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleQuizChoice("physical", opt.id)}
                    className={`p-4 text-xs text-left border transition-all duration-300 cursor-pointer rounded-xl ${
                      quizAnswers.physical === opt.id
                        ? "border-bordeaux bg-bordeaux/5 text-bordeaux font-medium shadow-sm shadow-bordeaux/5"
                        : "border-gray-200 text-dark/75 hover:border-rosegold hover:bg-gray-50/50"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2 */}
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-bordeaux mb-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-bordeaux"></span> 2. No campo mental e emocional, o que predomina?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "sobrecarga", label: "Estresse, ansiedade e sobrecarga mental" },
                  { id: "confuso", label: "Confusão, dúvidas sobre escolhas ou direção" },
                  { id: "desmotivado", label: "Falta de visão, apatia ou desmotivação" }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleQuizChoice("mental", opt.id)}
                    className={`p-4 text-xs text-left border transition-all duration-300 cursor-pointer rounded-xl ${
                      quizAnswers.mental === opt.id
                        ? "border-bordeaux bg-bordeaux/5 text-bordeaux font-medium shadow-sm shadow-bordeaux/5"
                        : "border-gray-200 text-dark/75 hover:border-rosegold hover:bg-gray-50/50"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3 */}
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-bordeaux mb-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-bordeaux"></span> 3. Qual o seu principal objetivo na terapia?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                {[
                  { id: "alívio", label: "Alívio físico e paz mental imediata" },
                  { id: "clareza", label: "Clareza para decisões" },
                  { id: "propósito", label: "Achar meus dons de vida" },
                  { id: "limpeza", label: "Retirar fluidos negativos" }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleQuizChoice("objective", opt.id)}
                    className={`p-4 text-xs text-left border transition-all duration-300 cursor-pointer rounded-xl ${
                      quizAnswers.objective === opt.id
                        ? "border-bordeaux bg-bordeaux/5 text-bordeaux font-medium shadow-sm shadow-bordeaux/5"
                        : "border-gray-200 text-dark/75 hover:border-rosegold hover:bg-gray-50/50"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Block */}
          <AnimatePresence>
            {quizCompleted && quizResult && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-10 p-6 border border-rosegold/30 bg-blush/40 text-center rounded-xl"
              >
                <p className="text-rosegold uppercase tracking-widest text-[9px] font-bold mb-1">Análise do Espaço Integrativo</p>
                <span className="text-xs text-dark/70 font-light block mb-2">Com base em suas respostas, o caminho sugerido é:</span>
                
                {(() => {
                  const service = SERVICES_DATA.find(s => s.id === quizResult);
                  if (!service) return null;
                  return (
                    <div>
                      <h4 className="font-serif text-bordeaux text-2xl font-semibold mb-2">{service.title}</h4>
                      <p className="text-rosegold tracking-widest text-xs font-semibold uppercase mb-4">{service.subtitle}</p>
                      <p className="text-sm font-light text-dark/80 max-w-xl mx-auto leading-relaxed mb-6">
                        {service.shortDescription}
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                        <button
                          onClick={() => setSelectedService(service)}
                          className="bg-transparent border border-bordeaux text-bordeaux hover:bg-bordeaux hover:text-blush text-center px-6 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer rounded-full"
                        >
                          Ver Detalhes do Método
                        </button>
                        <a
                          href={`https://wa.me/5519999220089?text=${encodeURIComponent(`Olá Marta! Concluí o auto-teste no seu site e recebi a recomendação da terapia de ${service.title} (${service.subtitle}). Gostaria de agendar uma sessão e compreender mais sobre o processo.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-bordeaux border border-bordeaux text-blush hover:bg-dark hover:border-dark text-center px-6 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 rounded-full"
                        >
                          Agendar Sessão Presencial <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  );
                })()}

                <button 
                  onClick={resetQuiz}
                  className="text-[10px] text-zinc-400 hover:text-bordeaux uppercase tracking-wider underline block mx-auto mt-6 transition-colors"
                >
                  Refazer as perguntas
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 5. Serviços (Grid with Cards & Modal info) */}
      <section id="servicos" className="py-20 md:py-28 px-6 bg-blush">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <p className="text-rosegold uppercase tracking-widest text-xs font-semibold mb-3">Conexão Terapêutica</p>
            <h2 className="text-3xl sm:text-4xl font-serif text-bordeaux">Os Métodos Integrativos</h2>
            <div className="w-12 h-[2px] bg-rosegold mx-auto mt-4"></div>
            <p className="text-sm font-light text-dark/65 max-w-lg mx-auto mt-3">Agulhas de clareza mental e bem-estar profundo desenhadas com exclusividade para o seu alinhamento.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {SERVICES_DATA.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="group bg-white border border-rosegold/10 hover:border-rosegold/30 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-500 cursor-pointer flex flex-col h-full rounded-2xl overflow-hidden"
              >
                {/* Photo frame */}
                <div className="overflow-hidden aspect-[16/10] relative">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* Decorative icon flag */}
                  <div className="absolute bottom-4 left-4 bg-blush text-bordeaux p-2.5 shadow-md rounded-xl">
                    {renderIcon(service.iconName, "w-5 h-5")}
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] tracking-widest text-[#B58D6E] uppercase font-semibold mb-1 block">Terapia Integrada</span>
                    <h3 className="text-2xl font-serif text-bordeaux mb-3 group-hover:text-rosegold transition-colors duration-300">
                      {service.title}: <span className="font-light">{service.subtitle}</span>
                    </h3>
                    <p className="text-dark/75 font-light text-sm leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-rosegold/10 text-xs font-semibold tracking-wider uppercase text-bordeaux group-hover:text-rosegold transition-colors">
                    <span>Saber Mais Detalhes</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Active Detail Modal Overlay for Services */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/70 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="bg-blush max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-rosegold/30 shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 bg-blush/90 text-dark hover:text-bordeaux p-2 rounded-full shadow hover:bg-white transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Frame banner */}
              <div className="relative h-60 md:h-72 w-full">
                <img 
                  src={selectedService.imageUrl} 
                  alt={selectedService.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blush via-blush/40 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-bordeaux text-blush text-[9px] font-bold tracking-widest uppercase px-3 py-1 flex items-center gap-1.5 w-fit mb-2">
                    {renderIcon(selectedService.iconName, "w-3 h-3")} Método Exclusivo
                  </span>
                  <h3 className="font-serif text-bordeaux text-3xl md:text-4xl font-semibold leading-tight">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest font-semibold text-rosegold/90">
                    {selectedService.subtitle}
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 space-y-6">
                
                {/* Full deep description */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#B58D6E] mb-2">Sobre o Tratamento</h4>
                  <p className="text-dark/80 font-light text-sm leading-relaxed text-justify">
                    {selectedService.fullDescription}
                  </p>
                </div>

                {/* Info band (Time span) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white border border-rosegold/10 p-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-rosegold shrink-0" />
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Tempo Estimado</p>
                      <p className="text-sm font-semibold text-bordeaux">{selectedService.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-rosegold shrink-0" />
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Atendimento</p>
                      <p className="text-sm font-semibold text-bordeaux">Presencial em Indaiatuba / Online</p>
                    </div>
                  </div>
                </div>

                {/* Benefits / Outcomes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-rosegold/10">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-bordeaux mb-3 flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-rosegold" /> Benefícios Principais
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, i) => (
                        <li key={i} className="text-xs font-light text-dark/85 flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-rosegold shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-bordeaux mb-3 flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-rosegold" /> Quando é Indicado?
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.indications.map((ind, i) => (
                        <li key={i} className="text-xs font-light text-dark/85 flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rosegold shrink-0 mt-1.5" />
                          <span>{ind}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Dynamic CTA inside modal */}
                <div className="pt-6 border-t border-rosegold/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="text-xs text-dark/50 hover:text-dark uppercase tracking-wider hover:underline"
                  >
                    Voltar aos métodos
                  </button>
                  <a 
                    href={`https://wa.me/5519999220089?text=${encodeURIComponent(`Olá Marta! Conheci o método ${selectedService.title} (${selectedService.subtitle}) em seu site e gostaria de agendar uma sessão ou obter mais informações.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-bordeaux text-blush text-center px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-dark hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-bordeaux/10 cursor-pointer block rounded-full"
                  >
                    Agendar Horário Presencial
                  </a>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. O Espaço Presencial & Marta's Studio (Interactive Highlights) */}
      <section id="sobre" className="py-20 md:py-28 px-6 bg-white border-t border-rosegold/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Column: Realistic beautiful photo stack to represent high level luxury therapy */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                {/* Decorative border frame back drop */}
                <div className="absolute -top-4 -left-4 w-full h-full border border-rosegold/20 pointer-events-none translate-x-2 translate-y-2 z-0 rounded-2xl"></div>
                
                <img 
                  src="https://i.ibb.co/wrS3cx2H/marta-foto-site-01.webp" 
                  alt="Marta Ana Chiconato - Espaço Acolhedor" 
                  className="w-full h-auto object-cover shadow-xl relative z-10 select-none filter brightness-95 saturation-75 rounded-2xl"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute -bottom-6 -right-6 bg-blush border border-rosegold/15 p-4 z-20 shadow-lg hidden sm:block max-w-[220px] rounded-xl">
                  <p className="font-serif text-bordeaux text-xs font-semibold uppercase tracking-widest mb-1">Localização</p>
                  <p className="text-[10px] text-dark/70 font-light leading-relaxed">
                    Edifício de fácil acesso em Indaiatuba, com estacionamento conveniente e discrição absoluta.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Marta Biography Context & Interactive features of the space */}
            <div className="w-full lg:w-1/2 space-y-6">
              <p className="text-rosegold uppercase tracking-widest text-xs font-semibold">A Terapeuta & O Espaço</p>
              <h2 className="text-3xl md:text-4xl font-serif text-bordeaux">Marta Ana Chiconato</h2>
              <div className="w-12 h-px bg-rosegold"></div>
              
              <p className="text-dark/85 font-light leading-relaxed text-sm">
                Com anos de sólida dedicação ao estudo aprofundado da bioenergia humana, do simbolismo psicológico terapêutico e da harmonização frequencial, preparei um recanto focado no silêncio meditativo e no acolhimento de excelência.
              </p>
              
              <p className="text-dark/85 font-light leading-relaxed text-sm">
                Mais do que simples agendamentos pontuais, proporciono verdadeiras pausas para reequilibrar a mente e arquitetar estratégias de vida saudáveis. Aqui o seu bem-estar é compreendido em formato integral.
              </p>

              {/* Interactive Tabs for the Space Highlights */}
              <div className="border border-rosegold/10 bg-blush/30 p-6 rounded-2xl mt-8">
                <p className="text-xs font-bold uppercase tracking-widest text-[#B58D6E] mb-4">Diferenciais do Nosso Refúgio</p>
                
                {/* Horizontal Tab Buttons */}
                <div className="flex flex-wrap gap-2 border-b border-rosegold/10 pb-3 mb-4">
                  {SPA_FEATURES.map((feat) => (
                    <button
                      key={feat.id}
                      onClick={() => setActiveSpaFeatureId(feat.id)}
                      className={`px-3.5 py-1.5 text-[10px] uppercase font-semibold tracking-wider cursor-pointer transition-colors rounded-full ${
                        activeSpaFeatureId === feat.id
                          ? "bg-bordeaux text-blush shadow-sm shadow-bordeaux/10"
                          : "bg-white text-dark/70 hover:bg-gray-100 border border-rosegold/10"
                      }`}
                    >
                      {feat.title}
                    </button>
                  ))}
                </div>

                {/* Tab content rendering */}
                <div className="min-h-[100px]">
                  {(() => {
                    const feat = SPA_FEATURES.find(f => f.id === activeSpaFeatureId);
                    if (!feat) return null;
                    return (
                      <motion.div
                        key={feat.id}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-2"
                      >
                        <h4 className="font-serif text-bordeaux text-base font-semibold flex items-center gap-1.5">
                          {renderIcon(feat.icon, "w-4 h-4 text-rosegold")} {feat.title}
                        </h4>
                        <p className="text-xs text-dark/70 font-light leading-relaxed text-justify">
                          {feat.description}
                        </p>
                      </motion.div>
                    );
                  })()}
                </div>
              </div>

              <div className="inline-block border-l-2 border-rosegold pl-4 py-1.5 italic font-serif text-bordeaux text-base">
                "O primeiro passo incontornável para a mudança é obter total clareza."
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Depoimentos / Testimonials Section */}
      <section id="depoimentos" className="py-20 md:py-28 px-6 bg-blush/40 border-t border-b border-rosegold/15">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-14">
            <p className="text-rosegold uppercase tracking-widest text-xs font-semibold mb-3">Relatos Sinceros</p>
            <h2 className="text-3xl sm:text-4xl font-serif text-bordeaux">O Cuidado na Primeira Pessoa</h2>
            <div className="w-12 h-px bg-rosegold mx-auto mt-4"></div>
          </div>

          <div className="relative bg-white border border-rosegold/15 p-8 md:p-14 shadow-xl shadow-bordeaux/5 rounded-2xl overflow-hidden">
            {/* Visual decorative giant quotes */}
            <span className="absolute top-4 left-6 text-7xl font-serif text-rosegold/15 pointer-events-none select-none">“</span>
            
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonialIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-1">
                    {[...Array(TESTIMONIALS_DATA[currentTestimonialIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-rosegold text-rosegold" />
                    ))}
                  </div>

                  <p className="text-base md:text-lg font-light text-dark/85 leading-relaxed italic text-justify">
                    "{TESTIMONIALS_DATA[currentTestimonialIndex].text}"
                  </p>

                  <div className="pt-4 border-t border-rosegold/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div>
                      <h4 className="font-serif text-bordeaux text-lg font-semibold">
                        {TESTIMONIALS_DATA[currentTestimonialIndex].name}
                      </h4>
                      <p className="text-xs text-gray-400 font-medium tracking-wider uppercase">
                        {TESTIMONIALS_DATA[currentTestimonialIndex].role}
                      </p>
                    </div>
                    <span className="text-[10px] bg-bordeaux/5 text-bordeaux px-3 py-1 font-semibold uppercase tracking-widest rounded-full">
                      {TESTIMONIALS_DATA[currentTestimonialIndex].service}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center space-x-2 absolute right-6 bottom-6 z-10">
              <button 
                onClick={prevTestimonial}
                className="p-2.5 rounded-full border border-rosegold/30 hover:border-bordeaux hover:bg-bordeaux hover:text-blush text-dark transition-all duration-300 cursor-pointer"
                aria-label="Depoimento Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2.5 rounded-full border border-rosegold/30 hover:border-bordeaux hover:bg-bordeaux hover:text-blush text-dark transition-all duration-300 cursor-pointer"
                aria-label="Próximo Depoimento"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 9. FAQ Section */}
      <section id="faq" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <p className="text-rosegold uppercase tracking-widest text-xs font-semibold mb-3">Respostas Claras</p>
            <h2 className="text-3xl sm:text-4xl font-serif text-bordeaux">Perguntas Frequentes</h2>
            <div className="w-12 h-px bg-rosegold mx-auto mt-4"></div>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq) => {
              const isOpen = openFaqIndex === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`border transition-all duration-300 rounded-2xl overflow-hidden shadow-sm ${
                    isOpen ? "border-bordeaux bg-blush/30 shadow-md shadow-bordeaux/[0.02]" : "border-rosegold/15 hover:border-rosegold/45"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : faq.id)}
                    className="w-full text-left p-6 flex justify-between items-center cursor-pointer focus:outline-none focus-visible:bg-blush/50"
                  >
                    <span className="font-serif text-bordeaux text-base sm:text-lg font-medium pr-4">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-bordeaux shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-rosegold shrink-0" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-sm text-dark/75 font-light leading-relaxed border-t border-rosegold/10 pt-4 text-justify">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Strategic Subtle FAQ CTA */}
          <div className="mt-12 text-center">
            <p className="text-xs text-dark/70 font-light">
              Tem alguma outra pergunta ou gostaria de alinhar sua sessão diretamente?
            </p>
            <a 
              href="https://wa.me/5519999220089?text=Ol%C3%A1%20Marta%21%2520Estive%20lendo%2520as%20perguntas%20frequentes%20no%20site%20e%20gostaria%20de%20saber%20mais%20detalhes%20dos%2520seus%20atendimentos."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3.5 inline-flex items-center gap-1.5 text-bordeaux hover:text-rosegold text-xs uppercase tracking-widest font-semibold transition-colors group"
            >
              Falar com a Marta no WhatsApp <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </section>

      {/* 10. Booking/Agendamento Section & Exclusive WhatsApp Contacts */}
      <section id="agendar" className="py-20 md:py-28 px-6 bg-bordeaux text-blush relative">
        <div className="absolute inset-0 select-none pointer-events-none opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Side: Contact Information Cards & Aesthetic Details */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="text-rosegold uppercase tracking-[0.2em] text-[10px] font-bold block mb-2">Exclusividade Presencial</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
                  Inicie a Sua Rota de Bem-Estar.
                </h2>
                <div className="w-12 h-[2px] bg-rosegold mt-6"></div>
              </div>

              <p className="text-blush/80 font-light text-sm leading-relaxed text-justify">
                Cada consulta é programada individualmente, garantindo total privacidade. Selecione ao lado a terapia que deseja realizar para abrir uma conversa direta no WhatsApp ou esclareça suas dúvidas sobre o atendimento presencial em Indaiatuba.
              </p>

              <div className="space-y-6 pt-6">
                
                {/* Visual Direct details */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 border border-white/10 text-rosegold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-white text-base">Espaço Físico</h4>
                    <p className="text-xs text-blush/70 font-light mt-1">
                      Av. Fábio Ferraz Bicudo, 937 — Jardim Esplanada<br />
                      Indaiatuba, SP | Edifício de prestígio e privacidade
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 border border-white/10 text-rosegold">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-white text-base">Redes Sociais</h4>
                    <div className="space-y-1.5 mt-1">
                      <a 
                        href="https://www.instagram.com/martaanachiconato/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs text-blush/70 hover:text-white transition-colors font-light block hover:underline"
                      >
                        Instagram: @martaanachiconato
                      </a>
                      <a 
                        href="https://www.facebook.com/profile.php?id=61576445813285" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs text-blush/70 hover:text-white transition-colors font-light block hover:underline"
                      >
                        Facebook: Marta Ana Chiconato
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 border border-white/10 text-rosegold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-white text-base">Agendamento pelo WhatsApp</h4>
                    <a 
                      href="https://wa.me/5519999220089?text=Ol%C3%A1%20Marta%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20sobre%2520suas%20Terapias%20Integrativas%21"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blush/70 hover:text-white transition-colors font-light mt-1 block hover:underline"
                    >
                      +55 (19) 99922-0089 <span className="text-[10px] text-rosegold">(Falar agora)</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side: Elegant Hub de WhatsApp Direct Booking */}
            <div className="lg:col-span-7 bg-white text-dark p-6 sm:p-8 md:p-10 shadow-2xl relative rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[5px] bg-rosegold"></div>

              <div className="border-b border-gray-100 pb-5 mb-6">
                <h3 className="text-xl font-serif text-bordeaux font-semibold">Canais de Contato Direto</h3>
                <p className="text-xs text-dark/70 font-light mt-1">Selecione o caminho desejado para falar com a Marta no WhatsApp com uma mensagem personalizada:</p>
              </div>

              {/* Stack of Therapy Contact Options */}
              <div className="space-y-4">
                {SERVICES_DATA.map((service) => {
                  const waText = `Olá Marta! Vim pelo site e gostaria de agendar uma sessão de ${service.title} (${service.subtitle}) ou obter mais informações.`;
                  const waUrl = `https://wa.me/5519999220089?text=${encodeURIComponent(waText)}`;
                  
                  return (
                    <motion.div 
                      key={service.id}
                      whileHover={{ scale: 1.01, borderColor: "rgba(102, 23, 38, 0.3)" }}
                      className="p-5 border border-gray-100 hover:border-bordeaux/20 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-blush/5 group rounded-2xl"
                    >
                      <div className="flex items-start gap-3.5 max-w-md">
                        <div className="p-3 bg-bordeaux/5 text-bordeaux rounded-xl group-hover:bg-bordeaux group-hover:text-blush transition-colors shrink-0 mt-0.5 sm:mt-0">
                          {renderIcon(service.iconName, "w-5 h-5")}
                        </div>
                        <div>
                          <h4 className="font-serif text-dark text-base font-semibold group-hover:text-bordeaux transition-colors leading-tight">
                            {service.title}
                          </h4>
                          <p className="text-[11px] text-rosegold font-medium uppercase tracking-wide mt-0.5">
                            {service.subtitle}
                          </p>
                          <p className="text-xs text-dark/60 font-light mt-1">
                            Sessão de {service.duration}
                          </p>
                        </div>
                      </div>

                      <a 
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-bordeaux hover:bg-dark text-white text-center py-2.5 px-6 text-xs font-semibold uppercase tracking-widest transition-all shrink-0 flex items-center justify-center gap-2 shadow-sm rounded-full"
                      >
                        <Phone className="w-3.5 h-3.5 fill-white" /> Contatar
                      </a>
                    </motion.div>
                  );
                })}

                {/* General Inquiry option */}
                <motion.div 
                  whileHover={{ scale: 1.01, borderColor: "rgba(102, 23, 38, 0.3)" }}
                  className="p-5 border border-dashed border-gray-200 hover:border-bordeaux/20 transition-all bg-gray-50/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl"
                >
                  <div className="max-w-md">
                    <h4 className="font-serif text-dark text-base font-semibold leading-tight flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-rosegold rounded-full"></span>
                      Dúvidas ou Orientação Geral
                    </h4>
                    <p className="text-xs text-dark/70 font-light mt-1.5 leading-relaxed">
                      Se você tem dúvidas sobre qual tratamento escolher, fale livremente com a Marta para receber um direcionamento acolhedor coordenado com suas necessidades.
                    </p>
                  </div>

                  <a 
                    href={`https://wa.me/5519999220089?text=${encodeURIComponent("Olá Marta! Vim através de seu site e gostaria de tirar algumas dúvidas gerais sobre o seu atendimento de Terapia Integrativa e agendar um acolhimento.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto border-2 border-rosegold hover:border-bordeaux hover:bg-bordeaux hover:text-white text-dark text-center py-2.5 px-6 text-xs font-semibold uppercase tracking-widest transition-all shrink-0 flex items-center justify-center gap-2 rounded-full"
                  >
                    Conversar Geral
                  </a>
                </motion.div>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100 text-center">
                <p className="text-[10px] text-dark/50 font-light">
                  * Os atendimentos presenciais ocorrem exclusivamente mediante agendamento direto em nosso canal privativo.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 11. Footer Section */}
      <footer className="bg-[#120B0B] text-blush pt-20 pb-10 px-6 relative border-t border-rosegold/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-rosegold/15 pb-16 mb-10">
            
            {/* Logo and brief */}
            <div className="md:col-span-5 space-y-6">
              <img 
                src="https://i.ibb.co/ZRyY8vsp/marta-logo-site.webp" 
                alt="Marta Ana Chiconato - Terapia Integrativa" 
                className="h-12 sm:h-14 w-auto object-contain brightness-110 select-none"
                referrerPolicy="no-referrer"
              />
              <p className="text-blush/70 font-light text-sm leading-relaxed max-w-sm text-justify">
                Terapia Integrativa focada na clareza mental, resgate do equilíbrio emocional e direcionamento de decisões. Um espaço exclusivo voltado ao seu acolhimento e desenvolvimento estratégico com máxima discrição e absoluto sigilo profissional.
              </p>
              
              <div className="flex space-x-3 pt-2">
                <a 
                  href="https://www.instagram.com/martaanachiconato/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 border border-rosegold/30 text-rosegold hover:text-white hover:border-white transition-colors"
                  aria-label="Instagram de Marta Ana"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61576445813285" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 border border-rosegold/30 text-rosegold hover:text-white hover:border-white transition-colors"
                  aria-label="Facebook de Marta Ana"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-5">
              <h4 className="font-serif text-rosegold text-lg">Navegação</h4>
              <ul className="space-y-2.5 font-light text-blush/75 text-xs">
                <li><a href="#inicio" className="hover:text-white transition-colors">Voltar ao Topo</a></li>
                <li><a href="#conceito" className="hover:text-white transition-colors">Abordagem / Conceito</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Serviços e Métodos</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Biografia da Terapeuta</a></li>
                <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos Verificados</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Questões Comuns</a></li>
              </ul>
            </div>

            {/* Localisation and hours details */}
            <div className="md:col-span-4 space-y-5">
              <h4 className="font-serif text-rosegold text-lg">Atendimento em Indaiatuba</h4>
              <p className="font-light text-blush/80 text-xs leading-relaxed">
                Av. Fábio Ferraz Bicudo, 937<br />
                Jardim Esplanada — Indaiatuba, SP<br />
                CEP: 13331-590
              </p>
              
              <div className="pt-2 border-t border-rosegold/10 text-[10px] text-blush/60 font-light tracking-wider uppercase space-y-1">
                <p className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-rosegold" /> Seg - Sex: 08h00 às 18h30</p>
                <p className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-rosegold" /> Sábados: Sob agendamento especial</p>
              </div>
            </div>

          </div>

          {/* Credits bottom bar */}
          <div className="flex flex-col items-center justify-center gap-3 text-center border-t border-rosegold/5 pt-8 mt-8">
            <div className="space-y-1">
              <p className="text-blush/40 text-[11px] tracking-widest uppercase font-light">
                &copy; {new Date().getFullYear()} Marta Ana Chiconato. Todos os direitos reservados.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-[10px] tracking-wider uppercase font-light text-blush/40">
              <button 
                type="button"
                onClick={() => openLegalModal("privacy")}
                className="hover:text-rosegold hover:underline cursor-pointer transition-all duration-300 focus:outline-none py-1"
                aria-label="Ver Política de Privacidade"
              >
                Política de Privacidade
              </button>
              <span className="text-blush/15 select-none font-mono">|</span>
              <button 
                type="button"
                onClick={() => openLegalModal("terms")}
                className="hover:text-rosegold hover:underline cursor-pointer transition-all duration-300 focus:outline-none py-1"
                aria-label="Ver Termos de Uso"
              >
                Termos de Uso
              </button>
            </div>
            
            <p className="text-rosegold/60 text-[10px] tracking-[0.16em] uppercase font-light pt-1 text-center w-full">
              Desenvolvido estrategicamente por <a href="https://www.orvalia.com.br" target="_blank" rel="noopener noreferrer" className="text-rosegold/90 hover:text-white underline transition-all duration-300 font-medium whitespace-nowrap">Orval'ia Studio</a>
            </p>
          </div>

        </div>
      </footer>

      {/* Persistent Quiet Luxury Floating WhatsApp CTA (Desktop & Mobile always present, subtle & integrated) */}
      <div className="fixed bottom-6 right-6 z-40 select-none pointer-events-auto">
        <motion.a 
          href="https://wa.me/5519999220089?text=Ol%C3%A1%20Marta%21%20Vim%20pelo%20seu%20site%20de%20Terapia%20Integrativa.%20Gostaria%20de%20receber%20informa%C3%A7%C3%B5es%20e%20solicitar%20um%20agendamento."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-2 bg-bordeaux hover:bg-dark text-blush text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-4 py-3 sm:px-5 sm:py-3.5 shadow-xl hover:shadow-2xl hover:shadow-bordeaux/20 border border-rosegold/20 transition-all duration-300 rounded-full"
        >
          <Phone className="w-3.5 h-3.5 fill-blush text-transparent shrink-0 animate-ping absolute opacity-30" />
          <Phone className="w-3.5 h-3.5 fill-blush text-transparent shrink-0 relative z-10" />
          <span>Falar com a Marta</span>
        </motion.a>
      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 left-6 z-40 bg-white hover:bg-blush text-bordeaux border border-rosegold/25 p-3.5 rounded-full shadow-lg hover:shadow-xl cursor-pointer transition-colors duration-300 flex items-center justify-center focus:outline-none"
            aria-label="Voltar para o topo"
          >
            <ChevronUp className="w-5 h-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Legal Dialog Modal for LGPD/Terms */}
      <AnimatePresence>
        {legalModalOpen && (
          <LegalModal 
            isOpen={legalModalOpen} 
            type={legalModalType} 
            onClose={() => setLegalModalOpen(false)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
}
