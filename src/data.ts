import { Service, FaqItem, Testimonial } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "reiki",
    title: "Reiki",
    subtitle: "Reequilíbrio e Vitalidade",
    shortDescription: "Uma pausa necessária para a sua energia. Redução do stress e alinhamento da Energia Vital Universal para restaurar o seu estado natural de relaxamento profundo.",
    fullDescription: "O Reiki é uma prática terapêutica integrativa que consiste na canalização de energia através das mãos sobre centros energéticos do corpo (chakras). É uma terapia suave, não invasiva, que atua nas dimensões física, mental, emocional e espiritual. Ao restabelecer o fluxo de energia vital correta, ajuda o próprio organismo no processo de auto-regeneração, alivio significativo de stress, ansiedade e tensões físicas acumuladas.",
    duration: "60 a 75 minutos",
    benefits: [
      "Profundo relaxamento e alívio de tensões físicas e mentais",
      "Redução expressiva de sintomas de ansiedade e insônia",
      "Fortalecimento do sistema imunológico através do equilíbrio integrado",
      "Estimula a desintoxicação celular e acelera a cicatrização natural",
      "Harmonização dos chakras e sensação de leveza emocional"
    ],
    imageUrl: "https://i.ibb.co/tPF5XdQX/marta-reiki-luxury.webp",
    iconName: "Heart",
    indications: [
      "Níveis elevados de stress cotidiano",
      "Insônia, sono instável ou cansaço crônico",
      "Dores de cabeça tensionais e desconfortos musculares",
      "Sentimentos de sobrecarga emocional ou desânimo"
    ]
  },
  {
    id: "terapia-simbolica",
    title: "Terapia Simbólica",
    subtitle: "Clareza e Estratégia",
    shortDescription: "Substituímos a adivinhação pelo diagnóstico terapêutico. Utilizamos o simbolismo do Baralho Cigano como um espelho de seu inconsciente para iluminar caminhos e decisões.",
    fullDescription: "Na Terapia Simbólica, utilizamos as cartas do Baralho Cigano não como um meio de adivinhação estática do futuro, mas sim como uma ferramenta diagnóstica profunda. As cartas agem como arquétipos que espelham seu momento interior e o estado atual de suas relações e dilemas. É uma jornada guiada de autoanálise que revela padrões ocultos, pontos cegos e potenciais de ação, proporcionando clareza mental e o empoderamento pessoal necessário para escolher seus próximos passos com segurança.",
    duration: "60 a 90 minutos",
    benefits: [
      "Clareza imediata sobre questões profissionais, afetivas e familiares",
      "Identificação de crenças autolimitantes e repetição de padrões",
      "Mapeamento de caminhos e alternativas estruturadas para decisões complexas",
      "Resgate do controle pessoal através do entendimento do momento atual",
      "Conversa acolhedora, confidencial e despida de julgamentos"
    ],
    imageUrl: "https://i.ibb.co/fdQXYHry/marta-tarot-luxury.webp",
    iconName: "Eye",
    indications: [
      "Momentos de indecisão, transições de carreira ou crises de vida",
      "Sensação de estar \"travado(a)\" em alguma área específica",
      "Dificuldade de lidar com mudanças bruscas ou escolhas importantes",
      "Busca por respostas internas de modo dinâmico e visual"
    ]
  },
  {
    id: "numerologia",
    title: "Numerologia",
    subtitle: "O Mapa da Essência",
    shortDescription: "Decifrando os ciclos, talentos e desafios da sua jornada. Uma ferramenta poderosa de autoconhecimento para alinhar as suas ações com o seu propósito de vida autêntico.",
    fullDescription: "A Numerologia é uma linguagem sagrada e precisa que revela o plano inscrito em seu nome e data de nascimento. Trata-se de uma verdadeira bússola existencial que detalha seu temperamento nativo, sua lição de vida principal, seus talentos latentes, a forma como os outros a percebem, bem como os ciclos temporais e desafios de sua trajetória. É um convite para cessar as lutas contra seus próprios potenciais e direcionar suas energias para concretizações alinhadas com sua verdade profunda.",
    duration: "Sessão de Devolutiva (90 min) + Envio do PDF Completo",
    benefits: [
      "Revelação do seu PROPÓSITO DE VIDA e missão essencial",
      "Entendimento profundo sobre seus ciclos anuais e trimestrais pessoais",
      "Clareza sobre pontos de força e desafios comportamentais nativos",
      "Melhoria do relacionamento consigo mesmo e aceitação das próprias fases",
      "Recebimento de um relatório personalizado detalhado para consulta vitalícia"
    ],
    imageUrl: "https://i.ibb.co/nNGpQyHj/marta-numerologia-luxury.webp",
    iconName: "Binary",
    indications: [
      "Falta de propósito, desmotivação profissional ou crises vocativas",
      "Desejo de entender melhor padrões de comportamento recorrentes",
      "Necessidade de planejar o ano corrente (ano pessoal) com precisão",
      "Curiosidade terapêutica de autoconhecimento maduro"
    ]
  },
  {
    id: "radiestesia",
    title: "Radiestesia",
    subtitle: "Harmonização Frequencial",
    shortDescription: "A ciência de medir e neutralizar frequências desequilibradas. Promovemos uma limpeza profunda e a harmonização energética para que a saúde e a prosperidade fluam.",
    fullDescription: "A Radiestesia e a Mesa Psiônica / Radiônica trabalham a partir do princípio de que tudo no universo é vibração e energia. Com o auxílio do pêndulo e pranchas específicas, medimos e avaliamos a frequência vibracional dos seus centros de energia (chakras), do seu corpo físico/etérico e também de ambientes ou situações travadas. Mediante gráficos emissores especiais, emanamos as frequências corretivas exatas que neutralizam negatividades invisíveis de fundo, energias intrusas e bloqueios, liberando os canais para que saúde, fluidez, paz mental e prosperidade possam voltar ao curso normal.",
    duration: "75 a 90 minutos",
    benefits: [
      "Remoção e neutralização de vibrações densas, estagnadas ou externas",
      "Desbloqueio de áreas que parecem estáticas ou sistematicamente difíceis",
      "Aumento drástico do teor de energia vital e ânimo diário",
      "Harmonização à distância ou presencial (total flexibilidade)",
      "Criação de um escudo de proteção energética saudável ao redor de você"
    ],
    imageUrl: "https://i.ibb.co/1GLJqJYz/marta-radiestesia-luxury.webp",
    iconName: "Activity",
    indications: [
      "Sensação de cansaço extremo que não melhora mesmo após dormir",
      "Sentimento de que o ambiente doméstico ou profissional está \"pesado\"",
      "Negócios, projetos, processos judiciais ou vendas empacadas sem razão clara",
      "Sensação de ser afetado facilmente pelo humor e energia alheia"
    ]
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "O que é a Terapia Integrativa e como ela se diferencia da convencional?",
    answer: "A Terapia Integrativa compreende o ser humano de forma holística: em seus aspectos físicos, mentais, emocionais e energéticos fundamentais. Em vez de focar apenas no alívio de um sintoma isolado, nós buscamos a raiz energética e comportamental do desequilíbrio, combinando múltiplos saberes seculares (como a canalização energética de Reiki, a clareza arquetípica das cartas e a ordem da numerologia e radiestesia) de forma personalizada para devolver a harmonia sistêmica à sua jornada."
  },
  {
    id: "faq-2",
    question: "Preciso acreditar em alguma religião ou sistema de crenças para funcionar?",
    answer: "Absolutamente não. Nenhuma das terapias que realizamos possui amarras religiosas. O Reiki é uma transmissão energética amplamente reconhecida mundialmente e pesquisada clinicamente (presente inclusive nos serviços públicos de saúde do Brasil e do mundo). A Mesa Radiônica e a Numerologia operam sob leis vibracionais físicas e matemáticas, e a Terapia Simbólica atua no campo dos arquétipos psicológicos e da projeção inconsciente. O único pré-requisito é uma mente aberta para acolher o relaxamento e o autoconhecimento."
  },
  {
    id: "faq-3",
    question: "Os atendimentos são estritamente presenciais ou podem ser online?",
    answer: "Temos ambas as modalidades. Sessões de Numerologia de Essência e Radiestesia para harmonização podem ser realizadas à distância com precisão idêntica e agendamento prático online. Já as sessões integrativas físicas e Reiki possuem um aproveitamento sinestésico belíssimo quando realizadas presencialmente no nosso refúgio de quietude, localizado no aconchegante bairro Jardim Esplanada em Indaiatuba, SP."
  },
  {
    id: "faq-4",
    question: "Qual serviço ou por onde devo começar minha jornada com a Marta?",
    answer: "Se você busca reequilibrar cansaço mental, estresse agudo e insônia, comece pelo Reiki com Alinhamento Energético. Se vive um momento de dúvidas profundas, bifurcações de vida ou incertezas de negócios, a Terapia Simbólica trará clareza imediata. Para quem quer desvendar sua própria rota de propósito, dons naturais e cronograma da vida, o Mapa Numerológico é o ideal. Se sente bloqueios pesados e sem explicação racional, a Radiestesia ajudará a destravar o campo."
  },
  {
    id: "faq-5",
    question: "Como funcionam os agendamentos?",
    answer: "Os agendamentos são realizados de forma exclusiva via WhatsApp. No formulário integrado nesta página, você pode sinalizar o seu serviço de interesse e preferência de horários. Isso formatará uma mensagem com os seus dados desejados para enviarmos imediatamente, assegurando que o seu primeiro contato e atendimento recebam nossa total atenção."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t-1",
    name: "Carolina Ribeiro",
    role: "Empreendedora",
    text: "Cheguei à Marta em um estado de estafa mental extrema. A combinação de Reiki e a análise da Terapia Simbólica foram divisores de águas. Saí com um peso a menos nos ombros e respostas práticas para a decisão que precisava tomar na minha empresa. O espaço transmite uma paz indescritível.",
    service: "Terapia Simbólica + Reiki",
    rating: 5
  },
  {
    id: "t-2",
    name: "Marcelo Albuquerque",
    role: "Gestor de Equipes",
    text: "O Mapa Numerológico que a Marta elaborou trouxe direções que eu demoraria anos de psicoterapia para organizar. Ela junta rigor de explicação com uma sensibilidade e respeito ao nosso tempo ímpares. Indico para todo mundo que se sente no automático ou desalinhado de seu potencial.",
    service: "Numerologia de Essência",
    rating: 5
  },
  {
    id: "t-3",
    name: "Sandra Mendonça",
    role: "Psicóloga Clinica",
    text: "Como psicóloga, valorizo muito a seriedade das abordagens integrativas. A Marta conduz o trabalho com extrema ética, profissionalismo e profundidade. A sessão de Radiestesia destravou um padrão de cansaço crônico que há meses me acompanhava. Sou paciente fiel.",
    service: "Radiestesia e Harmonização",
    rating: 5
  }
];

export const SPA_FEATURES = [
  {
    id: "space-1",
    title: "Aromaterapia Curada",
    description: "Cada sessão é acompanhada por uma fita olfativa de óleos essenciais orgânicos selecionados individualmente para induzir ondas alfa cerebrais e desacelerar o sistema nervoso autônomo.",
    icon: "Wind"
  },
  {
    id: "space-2",
    title: "Frequências Sonoras Terapêuticas",
    description: "O ambiente sonoro é calibrado com batidas binaurais de 432Hz e sons da natureza captados em alta definição, proporcionando o silêncio interior propício para o autoconhecimento.",
    icon: "Volume2"
  },
  {
    id: "space-3",
    title: "Luminosidade Calmante",
    description: "Luzes indiretas projetadas através de cristais de sal do Himalaia criam uma atmosfera ocre e safe-eye, acalmando o córtex visual e promovendo relaxamento instantâneo da retina.",
    icon: "Sun"
  },
  {
    id: "space-4",
    title: "Privacidade Absoluta",
    description: "Intervalos generosos entre agendamentos para garantir que você nunca cruze com outros clientes na recepção. O seu momento é inteiramente e exclusivamente reservado a si.",
    icon: "ShieldAlert"
  }
];
