import React from "react";
import { motion } from "motion/react";
import { X, ShieldAlert, FileText, Check } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  type: "privacy" | "terms" | null;
  onClose: () => void;
}

export default function LegalModal({ isOpen, type, onClose }: LegalModalProps) {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-dark/80 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative bg-blush border border-rosegold/20 text-dark w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl rounded-sm z-10"
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-rosegold/10 shrink-0">
          <div className="flex items-center gap-2.5">
            {type === "privacy" ? (
              <ShieldAlert className="w-5 h-5 text-bordeaux" />
            ) : (
              <FileText className="w-5 h-5 text-bordeaux" />
            )}
            <h2 className="font-serif text-lg sm:text-xl text-bordeaux font-semibold tracking-wide">
              {type === "privacy"
                ? "Política de Privacidade (LGPD)"
                : "Termos de Uso e Isenção de Responsabilidade"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-rosegold/10 text-dark/60 hover:text-bordeaux transition-all focus:outline-none"
            aria-label="Fecar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body (Scrollable) */}
        <div className="overflow-y-auto p-6 space-y-6 text-sm text-dark/85 leading-relaxed antialiased font-light">
          {type === "privacy" ? (
            <>
              {/* PRIVACY POLICY */}
              <div className="space-y-2">
                <p className="text-xs text-dark/50 font-mono">Última atualização: 20 de maio de 2026</p>
                <p>
                  A sua privacidade é extremamente importante para nós. Esta política de privacidade delineia de forma 
                  transparente como a terapeuta <strong>Marta Ana Chiconato</strong> coleta, utiliza, armazena, processa 
                  e protege as informações pessoais dos usuários que visitam este site, em total conformidade com a 
                  <strong> Lei Geral de Proteção de Dados Pessoais (LGPD) - Lei nº 13.709/2018</strong>.
                </p>
              </div>

              <hr className="border-rosegold/10" />

              <div className="space-y-3">
                <h3 className="font-serif text-base text-bordeaux font-semibold tracking-wide">
                  1. Informações que Coletamos
                </h3>
                <p>
                  Para prestar um serviço integrativo de alta qualidade e personalizado sob o conceito de <em>quiet luxury</em>, 
                  podemos coletar informações fornecidas diretamente por você através das interações neste site:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Dados de Contato:</strong> Nome completo, telefone/WhatsApp e link de redirecionamento fornecidos ao clicar nos botões de contato.
                  </li>
                  <li>
                    <strong>Respostas do Auto-Teste (Quiz Orientador):</strong> Sintomas autorrelatados de estresse, cansaço mental, fadiga bionergética ou tensão que auxiliam na triagem de indicação de terapia integrativa recomendada.
                  </li>
                  <li>
                    <strong>Dados de Navegação:</strong> Informações genéricas anonimizadas (endereço IP, dados de localização geográfica genérica, tipo de navegador) coletadas para melhoria técnica do site.
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-base text-bordeaux font-semibold tracking-wide">
                  2. Finalidade do Tratamento de Dados
                </h3>
                <p>
                  Seus dados pessoais e informações de bem-estar são tratados com os seguintes propósitos exclusivos:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Direcionamento Terapêutico:</strong> Compreender suas necessidades preliminares a partir do Auto-Teste para indicar a técnica integrativa de maior compatibilidade frequencial.
                  </li>
                  <li>
                    <strong>Agendamento de Sessões:</strong> Canalizar e responder com exatidão às suas solicitações de consultas online ou presenciais em Indaiatuba, SP.
                  </li>
                  <li>
                    <strong>Melhoria Contínua:</strong> Analisar a usabilidade do site sem violar sua identidade individual.
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-base text-bordeaux font-semibold tracking-wide">
                  3. Sigilo Profissional e Não Compartilhamento
                </h3>
                <div className="p-4 bg-rosegold/10 border-l-2 border-bordeaux text-dark/95 italic">
                  "Todo o conteúdo terapêutico, histórico de auto-teste e dados conversacionais estão blindados sob o mais rigoroso segredo e ética profissional."
                </div>
                <p>
                  Nós <strong>nunca vendidos, comercializamos ou compartilhamos</strong> suas informações pessoais com terceiros sob qualquer hipótese. Seus dados estão restritos única e exclusivamente à equipe de agendamento e à terapeuta Marta Ana Chiconato.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-base text-bordeaux font-semibold tracking-wide">
                  4. Direitos do Titular dos Dados (Art. 18 da LGPD)
                </h3>
                <p>
                  Você, como titular de seus dados pessoais, possui controle absoluto e pode exercer os seguintes direitos a qualquer momento mediante requisição:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 border border-rosegold/15 bg-white/40 flex gap-2">
                    <Check className="w-4 h-4 text-bordeaux shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs uppercase tracking-wide text-bordeaux">Exclusão Permanente</strong>
                      <p className="text-xs text-dark/70">Solicitar a eliminação completa dos seus dados de atendimento.</p>
                    </div>
                  </div>
                  <div className="p-3 border border-rosegold/15 bg-white/40 flex gap-2">
                    <Check className="w-4 h-4 text-bordeaux shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs uppercase tracking-wide text-bordeaux">Acesso e Correção</strong>
                      <p className="text-xs text-dark/70">Saber quais dados mantemos e requerer atualização de erros.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-base text-bordeaux font-semibold tracking-wide">
                  5. Contato de Encarregado
                </h3>
                <p>
                  Caso deseje exercer quaisquer um dos seus direitos de proteção de dados ou sanar dúvidas relacionadas à segurança deste ambiente digital, entre em contato diretamente pelo e-mail ou WhatsApp corporativo disponibilizado em nossos canais oficiais de comunicação.
                </p>
              </div>
            </>
          ) : (
            <>
              {/* TERMS OF SERVICE */}
              <div className="space-y-2">
                <p className="text-xs text-dark/50 font-mono">Última atualização: 20 de maio de 2026</p>
                <p>
                  Seja muito bem-vindo ao portal de Marta Ana Chiconato. Ao acessar ou interagir com nosso site, 
                  assim como utilizar nossa ferramenta de triagem por Auto-Teste, você concorda em cumprir e se 
                  vincular integralmente aos seguintes Termos de Uso e advertências legais.
                </p>
              </div>

              <hr className="border-rosegold/10" />

              <div className="space-y-3">
                <div className="p-4 bg-bordeaux/5 border border-bordeaux/20 text-dark/95">
                  <h4 className="font-serif text-bordeaux font-bold uppercase tracking-wider text-xs mb-1 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4" /> Isenção de Responsabilidade de Saúde (Crucial)
                  </h4>
                  <p className="text-xs leading-relaxed text-dark bg-transparent">
                    A Terapia Integrativa e suas ramificações (como terapias frequenciais, energéticas e técnicas de harmonização oferecidas neste site) são abordagens <strong>estritamente complementares e holísticas</strong>. Elas <strong>NÃO</strong> substituem em nenhuma hipótese diagnósticos médicos, psicoterapia clínica, psiquiatria, prescrição de medicamentos ou exames laboratoriais recomendados por profissionais licenciados pelos conselhos de saúde oficiais (CRM, CRP, etc).
                  </p>
                </div>
                <p>
                  Ao realizar o agendamento de uma sessão integrada, o cliente compreende e aceita livremente que o tratamento atua no campo bioenergético e emocional como coadjuvante no bem-estar geral e expansão do autoconhecimento.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-base text-bordeaux font-semibold tracking-wide">
                  2. Ferramenta de Auto-Teste (Quiz Orientador)
                </h3>
                <p>
                  Nosso site disponibiliza uma dinâmica de triagem denominada "Auto-Teste" para fins informativos e de sugestão para reflexão individual:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    O teste <strong>não gera relatórios de diagnóstico clínico</strong>, não rotula transtornos nem prescreve tratamentos de cura.
                  </li>
                  <li>
                    A indicação fornecida ao final é uma associação algorítmica lógica meramente referencial às práticas de relaxamento e harmonização bionergética que a profissional Marta Ana realiza.
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-base text-bordeaux font-semibold tracking-wide">
                  3. Condições de Reserva, Agendamento e Cancelamento
                </h3>
                <p>
                  As sessões presenciais são efetuadas sob a premissa de luxo silencioso, acolhimento exclusivo e respeito ao tempo individual do interagente. Logo, estabelecem-se as seguintes condições:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Pontualidade:</strong> Tolerância de até 10 (dez) minutos de atraso para garantir o término da harmonização dentro do cronograma agendado, visando não afetar os clientes subsequentes.
                  </li>
                  <li>
                    <strong>Cancelamentos e Reagendamentos:</strong> Devem ser comunicados à terapeuta via WhatsApp com antecedência mínima de 24 (vinte e quatro) horas, ressalvando-se casos extraordinários.
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-base text-bordeaux font-semibold tracking-wide">
                  4. Direitos Autorais e Uso de Conteúdo
                </h3>
                <p>
                  Toda a expressão de marca, incluindo a logo oficial de Marta Ana Chiconato, fotografias, textos autorais, perguntas integradas do quiz e design do site são protegidos por leis de propriedade intelectual. Qualquer reprodução comercial ou uso não consentido é estritamente proibido.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-base text-bordeaux font-semibold tracking-wide">
                  5. Lei Aplicável e Jurisdição
                </h3>
                <p>
                  Estes Termos são regidos de acordo com a legislação da República Federativa do Brasil. Para dirimir eventuais disputas oriundas da utilização do portal ou serviços ofertados, as partes elegem expressamente a Comarca de Indaiatuba, Estado de São Paulo, em preferência a qualquer outro foro.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer (Action buttons) */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-rosegold/10 bg-rosegold/5 shrink-0 rounded-b-sm">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-bordeaux text-blush text-xs uppercase tracking-widest font-semibold hover:bg-dark transition-colors duration-300 shadow-md focus:outline-none"
          >
            Compreendi
          </button>
        </div>
      </motion.div>
    </div>
  );
}
