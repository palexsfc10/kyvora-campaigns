import { getOfferEnv, siteConfig } from "@/config/site";
import type { CampaignConfig } from "./schema";

const offerEnv = getOfferEnv();

export const homePtBR: CampaignConfig = {
  slug: "home",
  locale: "pt-BR",
  audience: "presidentes, capitães e organizadores de times amadores",
  campaignName: "acquisition_home_ptbr",
  theme: "light",
  heroVariant: "A",
  heroVariants: [
    {
      id: "A",
      headline: "Organize seu time sem depender de planilhas e do WhatsApp.",
      subheadline:
        "Crie o time, convoque jogadores e confirme quem vai jogar — tudo em um só lugar, pelo celular.",
      rationale:
        "Especificidade alta + dor concreta (planilha/WhatsApp). Forte message-match com anúncios de organização.",
    },
    {
      id: "B",
      headline: "Organizar seu time não deveria ser mais difícil do que jogar.",
      subheadline:
        "Do elenco à convocação: menos cobrança no grupo, mais clareza antes da partida.",
      rationale:
        "Ângulo emocional/identidade. Bom para criativos que mostram o capitão sobrecarregado.",
    },
    {
      id: "C",
      headline: "Saiba quem vai jogar sem precisar cobrar todo mundo.",
      subheadline:
        "Envie a convocação, receba confirmações sem cadastro do atleta e entre em campo preparado.",
      rationale:
        "Foco no diferencial (confirmação sem conta). Ideal para ads de convocação/presença.",
    },
  ],
  primaryCta: {
    label: "Criar meu time grátis",
    intent: "signup",
  },
  secondaryCta: {
    label: "Ver o Kyvora em ação",
    intent: "scroll",
    scrollTarget: "#demonstracao",
  },
  trustPills: ["Sem cartão para começar", "Funciona no celular", "Jogadores confirmam sem conta"],
  identification: {
    eyebrow: "A rotina que você já conhece",
    title: "Se organizar o time já vira um segundo trabalho, isso é pra você.",
    description:
      "Não é falta de compromisso. É falta de um lugar certo para a organização viver — fora do meio do chat.",
    scenes: [
      {
        title: "Mensagens sem fim",
        description: "Enquete, “quem vem?”, silêncio, cobrança de novo.",
      },
      {
        title: "Planilha desatualizada",
        description: "Três versões. Ninguém sabe qual é a certa.",
      },
      {
        title: "Escalação no improviso",
        description: "Lista no celular, no papel, ou na cabeça de uma pessoa.",
      },
      {
        title: "Histórico perdido",
        description: "Placar e presença sumidos no meio da conversa.",
      },
    ],
  },
  beforeAfter: {
    eyebrow: "A transformação",
    title: "Mesma rotina. Outro nível de clareza.",
    beforeLabel: "Antes",
    afterLabel: "Com o Kyvora",
    before: [
      "Confirmações espalhadas no grupo",
      "Dúvida até o último minuto sobre quem joga",
      "Escalação improvisada",
      "Informações na cabeça de um só organizador",
      "Histórico perdido em conversas antigas",
    ],
    after: [
      "Convocação com status claro",
      "Confirmações em um só lugar",
      "Elenco e partidas centralizados",
      "Escalação organizada no celular",
      "Histórico acessível para o time",
    ],
  },
  demo: {
    eyebrow: "Demonstração",
    title: "Do caos à organização em poucos passos.",
    description:
      "Veja o fluxo real: criar time, convocar, confirmar presença e acompanhar a partida.",
    video: {
      poster: "/posters/demo-poster.svg",
      title: "Kyvora em ação",
      description: "Tour rápido do fluxo de organização do time.",
      placeholderLabel: "Vídeo em produção — em breve nesta seção",
    },
    flows: [
      "Criar time",
      "Cadastrar jogadores",
      "Criar partida",
      "Enviar convocação",
      "Atleta confirma sem conta",
      "Montar escalação",
      "Acompanhar Match Center",
      "Ver rankings",
    ],
  },
  benefits: {
    eyebrow: "O que muda na prática",
    title: "Menos cobrança. Mais time organizado.",
    description: "Poucos benefícios. Resultados reais — sem lista técnica.",
    items: [
      {
        title: "Tenha seu elenco sempre organizado.",
        description: "Jogadores, posições e participação em um painel simples.",
      },
      {
        title: "Saiba quem vai jogar sem cobrar no grupo.",
        description: "Convocação por link. O atleta confirma sem criar conta.",
      },
      {
        title: "Organize a próxima partida em minutos.",
        description: "Data, local e adversário no mesmo fluxo.",
      },
      {
        title: "Registre o que aconteceu em cada jogo.",
        description: "Placar, eventos e visão clara da partida.",
      },
      {
        title: "Veja quem mais contribui dentro de campo.",
        description: "Rankings atualizados a cada partida registrada.",
      },
      {
        title: "Guarde o histórico do time.",
        description: "Temporadas e resultados acessíveis — não perdidos no chat.",
      },
    ],
  },
  howItWorks: {
    eyebrow: "Como funciona",
    title: "Simples o bastante para usar na semana do jogo.",
    description: "Seis passos. Sem instalação. Sem treinar o elenco inteiro.",
    steps: [
      {
        title: "Crie seu time",
        description: "Configure a equipe em poucos minutos.",
      },
      {
        title: "Adicione os jogadores",
        description: "Monte o elenco pronto para convocação.",
      },
      {
        title: "Organize a partida",
        description: "Defina quando e onde o time joga.",
      },
      {
        title: "Envie a convocação",
        description: "Compartilhe o link no grupo como sempre fez.",
      },
      {
        title: "Acompanhe as confirmações",
        description: "Veja quem confirmou, recusou ou ainda não respondeu.",
      },
      {
        title: "Entre em campo preparado",
        description: "Escalação e operação claras antes do apito.",
      },
    ],
  },
  screenshots: [
    {
      key: "match-center",
      media: {
        src: "/screenshots/s2-match-center.png",
        alt: "Match Center do Kyvora com placar e eventos da partida",
        width: 1200,
        height: 800,
      },
      caption: "Acompanhe a partida com clareza",
    },
    {
      key: "convocation",
      media: {
        src: "/screenshots/s3-convocation.png",
        alt: "Tela de convocação com status de presença",
        width: 1200,
        height: 800,
      },
      caption: "Convocação com status por jogador",
    },
    {
      key: "public-convocation",
      media: {
        src: "/screenshots/s4-public-convocation.png",
        alt: "Confirmação pública de presença sem cadastro",
        width: 800,
        height: 1600,
      },
      caption: "Atleta confirma sem criar conta",
    },
    {
      key: "rankings",
      media: {
        src: "/screenshots/s5-rankings.png",
        alt: "Rankings e estatísticas do time",
        width: 1200,
        height: 800,
      },
      caption: "Rankings sem planilha manual",
    },
  ],
  proof: {
    eyebrow: "Prova",
    title: "Produto real. Fluxo real. Sem números inventados.",
    description:
      "Enquanto cases e depoimentos crescem, a prova está no próprio produto — screenshots e rotina de times reais.",
    items: [
      {
        title: "Produto em produção",
        description: "Plataforma ativa, usada na operação real de times.",
      },
      {
        title: "Screenshots reais",
        description: "Telas do ambiente de demonstração — não mockups fictícios.",
      },
      {
        title: "Feito para o celular",
        description: "Organização na quadra, no vestiário ou no caminho do jogo.",
      },
      {
        title: "Transparência",
        description: "Sem depoimentos fabricados. Sem métricas inventadas.",
      },
    ],
    testimonials: [],
    logos: [],
    metrics: [],
  },
  offer: {
    eyebrow: "Comece agora",
    title: "Organize seu time sem compromisso.",
    description:
      "Crie a conta, monte o time e teste o fluxo completo. Preços definitivos serão publicados quando a oferta comercial estiver fechada.",
    trialDays: offerEnv.trialDays,
    requiresCard: offerEnv.requiresCard,
    priceBrl: offerEnv.priceBrl,
    priceUsd: offerEnv.priceUsd,
    highlights: [
      "Criação de time em minutos",
      "Convocação com confirmação sem conta",
      "Histórico e rankings na mesma plataforma",
      "Cancele quando quiser",
    ],
    ctaLabel: "Criar meu time grátis",
    disclaimer:
      "Valores e condições comerciais só aparecem quando configurados explicitamente. Nada inventado nesta página.",
  },
  faq: [
    {
      id: "install",
      question: "Preciso instalar algum aplicativo?",
      answer:
        "Não. O Kyvora funciona no navegador do celular ou do computador. Se quiser, também pode instalar como PWA.",
    },
    {
      id: "mobile",
      question: "Funciona bem no celular?",
      answer:
        "Sim. A experiência foi pensada para quem organiza o time longe do computador.",
    },
    {
      id: "modalities",
      question: "Serve para futebol, futsal e society?",
      answer:
        "Sim. Qualquer rotina com elenco, partidas e convocações se encaixa.",
    },
    {
      id: "players-account",
      question: "Os jogadores precisam criar conta?",
      answer:
        "Não para confirmar presença. Você envia o link da convocação; o atleta confirma sem cadastro.",
    },
    {
      id: "callup",
      question: "Como funciona a convocação?",
      answer:
        "Você cria a partida, abre a convocação e compartilha o link. As respostas ficam centralizadas com status claro.",
    },
    {
      id: "squads",
      question: "Consigo gerenciar mais de um quadro?",
      answer:
        "Sim. A plataforma foi pensada para organizações com múltiplos elenco/quadros.",
    },
    {
      id: "trial",
      question: "O que acontece depois do período de teste?",
      answer:
        "Você decide se continua. As condições comerciais aparecem de forma clara no app — sem surpresa nesta página.",
    },
    {
      id: "card",
      question: "Preciso cadastrar cartão para começar?",
      answer:
        "A proposta desta campanha é começar com baixa fricção. Se a oferta exigir cartão, isso será indicado explicitamente.",
    },
    {
      id: "data",
      question: "Meus dados ficam salvos?",
      answer:
        "Sim. O histórico do time permanece disponível enquanto a conta estiver ativa.",
    },
    {
      id: "cancel",
      question: "Posso cancelar?",
      answer: "Sim. Você pode encerrar quando quiser, sem amarras artificiais nesta oferta.",
    },
    {
      id: "pwa",
      question: "Consigo usar como aplicativo?",
      answer:
        "Sim. No celular, você pode adicionar o Kyvora à tela inicial e usar como PWA.",
    },
  ],
  finalCta: {
    title: "Seu time já tem desafios suficientes dentro de campo.",
    description: "Organize o que acontece fora dele — e entre em campo com a cabeça leve.",
    ctaLabel: "Criar meu time grátis",
  },
  seo: {
    title: "Kyvora — Organize seu time sem WhatsApp e planilha",
    description:
      "Landing de campanha do Kyvora: organize elenco, convocações e partidas. Crie seu time grátis e saiba quem vai jogar sem cobrar no grupo.",
    ogImage: "/og/default.jpg",
    robots: "index,follow",
  },
  tracking: {
    contentGroup: "campaign_home",
  },
  experiment: {
    id: "hero_headline_v1",
    variant: "A",
  },
  destinationUrl: siteConfig.appUrl,
  indexable: true,
};
