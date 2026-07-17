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
      headline: "Seu time organizado dentro e fora de quadra.",
      subheadline:
        "Elenco, partidas, convocações e estatísticas no celular. Teste grátis por 7 dias.",
      rationale:
        "Proposta de valor clara + oferta. Forte para tráfego frio e message-match genérico.",
    },
    {
      id: "B",
      headline: "Menos cobrança no grupo. Mais clareza antes do jogo.",
      subheadline:
        "Convoque por link, acompanhe quem confirmou e entre em campo preparado.",
      rationale: "Ângulo de alívio operacional para criativos de capitão sobrecarregado.",
    },
    {
      id: "C",
      headline: "Saiba quem vai jogar sem cobrar todo mundo.",
      subheadline:
        "O jogador responde pelo link — sem criar conta. Você vê o status em um só lugar.",
      rationale: "Diferencial de convocação sem cadastro. Ideal para ads de presença.",
    },
  ],
  primaryCta: {
    label: "Criar conta grátis",
    intent: "signup",
  },
  secondaryCta: {
    label: "Ver como funciona",
    intent: "scroll",
    scrollTarget: "#produto",
  },
  trustPills: ["7 dias grátis", "Jogadores confirmam sem conta", "No celular"],
  identification: {
    eyebrow: "A rotina do organizador",
    title: "Se a organização do time mora no WhatsApp, isso é pra você.",
    description:
      "Não é falta de compromisso. É falta de um lugar certo para a operação do time.",
    scenes: [
      {
        title: "Confirmações no meio do chat",
        description: "Enquete, silêncio, cobrança de novo — e ninguém sabe quem vem.",
      },
      {
        title: "Planilhas e anotações espalhadas",
        description: "Elenco, mensalidades e placares em arquivos que ninguém atualiza.",
      },
      {
        title: "Escalação de última hora",
        description: "Lista na cabeça de uma pessoa, no papel ou em três conversas diferentes.",
      },
      {
        title: "Histórico que some",
        description: "Gols, assistências e presença perdidos em mensagens antigas.",
      },
    ],
  },
  product: {
    eyebrow: "O produto",
    title: "Telas reais da plataforma.",
    description:
      "Do Match Center à convocação pública: o que você vê aqui é o Kyvora em uso.",
  },
  benefits: {
    eyebrow: "O que o Kyvora resolve",
    title: "Quatro pilares para a rotina do time.",
    description: "Menos ferramentas improvisadas. Mais controle no dia a dia.",
    items: [
      {
        title: "Gestão esportiva",
        description: "Elenco, quadros, temporadas, partidas e escalações no mesmo fluxo.",
      },
      {
        title: "Convocação e comunicação",
        description: "Envie o link, receba respostas e acompanhe quem confirmou.",
      },
      {
        title: "Estatísticas e evolução",
        description: "Gols, assistências, presença e rankings sem planilha manual.",
      },
      {
        title: "Organização financeira",
        description: "Mensalidades, despesas e visão do caixa do time em um só lugar.",
      },
    ],
  },
  convocation: {
    eyebrow: "Diferencial",
    title: "Convocação por link — sem conta para o jogador.",
    description:
      "O dirigente organiza. O atleta só responde. A confirmação fica centralizada.",
    steps: [
      {
        title: "Crie a convocação",
        description: "Defina a partida e quem deve responder.",
      },
      {
        title: "Compartilhe o link",
        description: "Envie no grupo ou direto para o jogador.",
      },
      {
        title: "O jogador responde",
        description: "Confirma ou recusa sem criar conta no Kyvora.",
      },
      {
        title: "Você acompanha",
        description: "Status claro de quem vai, quem falta e quem ainda não respondeu.",
      },
    ],
  },
  howItWorks: {
    eyebrow: "Como funciona",
    title: "Três passos para começar.",
    description: "Sem instalação. Sem treinar o elenco inteiro.",
    steps: [
      {
        title: "Crie a conta e configure o time",
        description: "Monte a base do time em poucos minutos.",
      },
      {
        title: "Organize elenco, partidas e finanças",
        description: "Centralize o que hoje está espalhado em chats e planilhas.",
      },
      {
        title: "Compartilhe e acompanhe",
        description: "Convocações, confirmações, jogos e evolução em um só lugar.",
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
      caption: "Jogador confirma sem criar conta",
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
  offer: {
    eyebrow: "Oferta",
    title: "Teste o Kyvora por 7 dias.",
    description:
      "Crie a conta, configure o time e use o fluxo completo. Sem cartão para começar.",
    trialDays: offerEnv.trialDays,
    requiresCard: offerEnv.requiresCard,
    priceBrl: offerEnv.priceBrl,
    priceUsd: offerEnv.priceUsd,
    highlights: [
      "Teste gratuito de 7 dias",
      "Convocação com confirmação sem conta",
      "Gestão esportiva e financeira do time",
      "Cancele quando quiser",
    ],
    ctaLabel: "Criar conta grátis",
    disclaimer:
      "Preços e planos definitivos aparecem no app quando a oferta comercial estiver configurada.",
  },
  faq: {
    eyebrow: "Dúvidas",
    title: "Antes de criar a conta",
    items: [
      {
        id: "install",
        question: "Preciso instalar alguma coisa?",
        answer:
          "Não. O Kyvora funciona no navegador do celular ou do computador. Se quiser, também pode adicionar à tela inicial como PWA.",
      },
      {
        id: "players-account",
        question: "Os jogadores precisam criar uma conta?",
        answer:
          "Não para confirmar presença. Você envia o link da convocação; o jogador responde sem cadastro.",
      },
      {
        id: "mobile",
        question: "Posso usar no celular?",
        answer:
          "Sim. A experiência foi pensada para quem organiza o time longe do computador.",
      },
      {
        id: "trial",
        question: "O que acontece depois do teste gratuito?",
        answer:
          "Você decide se continua. As condições comerciais ficam claras no app — sem surpresa nesta página.",
      },
      {
        id: "modalities",
        question: "O Kyvora serve para futebol e futsal?",
        answer:
          "Sim. Qualquer rotina com elenco, partidas e convocações se encaixa — inclusive society.",
      },
      {
        id: "squads",
        question: "Posso cadastrar mais de um quadro?",
        answer:
          "Sim. A plataforma foi pensada para organizações com múltiplos quadros e elencos.",
      },
      {
        id: "data",
        question: "Meus dados ficam salvos?",
        answer:
          "Sim. O histórico do time permanece disponível enquanto a conta estiver ativa.",
      },
    ],
  },
  labels: {
    trial: "Teste",
    card: "Cartão",
    price: "Preço",
    cardRequired: "Necessário",
    cardNotRequired: "Não necessário",
    days: "dias",
    login: "Entrar",
    navProduct: "Produto",
    navBenefits: "Benefícios",
    navHow: "Como funciona",
    navFaq: "Dúvidas",
    accessApp: "Acessar o sistema",
  },
  finalCta: {
    title: "Pronto para organizar o time de verdade?",
    description: "Crie sua conta e teste o Kyvora por 7 dias.",
    ctaLabel: "Criar conta grátis",
  },
  seo: {
    title: "Kyvora — Organize seu time amador sem caos no WhatsApp",
    description:
      "Gestão de times amadores: elenco, convocações, partidas, estatísticas e finanças. Crie conta grátis e teste por 7 dias.",
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
