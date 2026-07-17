import { getOfferEnv, siteConfig } from "@/config/site";
import type { CampaignConfig } from "./schema";

const offerEnv = getOfferEnv();

export const homeEn: CampaignConfig = {
  slug: "home",
  locale: "en",
  audience: "team presidents, captains, and amateur organizers",
  campaignName: "acquisition_home_en",
  theme: "light",
  heroVariant: "A",
  heroVariants: [
    {
      id: "A",
      headline: "Your team organized on and off the pitch.",
      subheadline:
        "Roster, matches, call-ups, and stats on your phone. Free 7-day trial.",
      rationale: "Clear value prop + offer for cold paid traffic.",
    },
    {
      id: "B",
      headline: "Less chasing in the group chat. More clarity before kickoff.",
      subheadline:
        "Send call-ups by link, track who’s confirmed, and show up prepared.",
      rationale: "Relief angle for overloaded captain creatives.",
    },
    {
      id: "C",
      headline: "Know who’s playing without chasing everyone.",
      subheadline:
        "Players reply via link — no account needed. You see status in one place.",
      rationale: "No-account confirmation differentiator for attendance ads.",
    },
  ],
  primaryCta: { label: "Create free account", intent: "signup" },
  secondaryCta: {
    label: "See how it works",
    intent: "scroll",
    scrollTarget: "#demonstracao",
  },
  trustPills: ["7-day free trial", "Players confirm without an account", "Mobile-ready"],
  identification: {
    eyebrow: "The organizer’s routine",
    title: "If team ops live in WhatsApp, this is for you.",
    description:
      "It’s not a commitment problem. It’s missing one clear place for team operations.",
    scenes: [
      {
        title: "Confirmations buried in chat",
        description: "Polls, silence, chasing again — and nobody knows who’s in.",
      },
      {
        title: "Spreadsheets and scattered notes",
        description: "Roster, dues, and scores in files nobody keeps current.",
      },
      {
        title: "Last-minute lineups",
        description: "Lists in one person’s head, on paper, or across three threads.",
      },
      {
        title: "History that disappears",
        description: "Goals, assists, and attendance lost in old messages.",
      },
    ],
  },
  product: {
    eyebrow: "The product",
    title: "Real screens from the platform.",
    description:
      "Lineups, rankings, and match timeline — what you see here is Kyvora in use.",
    video: {
      eyebrow: "Demo",
      src: "/videos/mobile-demo.mp4",
      poster: "/screenshots/n1-public-confirm.png",
      title: "Kyvora on mobile",
      description: "Real call-up and confirmation flow on mobile.",
    },
  },
  benefits: {
    eyebrow: "What Kyvora solves",
    title: "Four pillars for match-week ops.",
    description: "Fewer improvised tools. More control day to day.",
    items: [
      {
        title: "Sports management",
        description: "Roster, squads, seasons, matches, and lineups in one flow.",
      },
      {
        title: "Call-ups and communication",
        description: "Share a link, collect replies, and track who’s confirmed.",
      },
      {
        title: "Stats and progress",
        description: "Goals, assists, attendance, and rankings without manual sheets.",
      },
      {
        title: "Team finances",
        description: "Dues, expenses, and a clear view of the team’s cash flow.",
      },
    ],
  },
  convocation: {
    eyebrow: "Differentiator",
    title: "Call-ups by link — no account for the player.",
    description:
      "You organize. The athlete just replies. Confirmations stay centralized.",
    steps: [
      {
        title: "Create the call-up",
        description: "Set the match and who should respond.",
      },
      {
        title: "Share the link",
        description: "Send it in the group or directly to the player.",
      },
      {
        title: "The player replies",
        description: "Confirms or declines without creating a Kyvora account.",
      },
      {
        title: "You track it",
        description: "Clear status on who’s in, out, or still pending.",
      },
    ],
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "Three steps to get started.",
    description: "No install. No training the whole squad.",
    steps: [
      {
        title: "Create an account and set up the team",
        description: "Build your team foundation in a few minutes.",
      },
      {
        title: "Organize roster, matches, and finances",
        description: "Centralize what today lives in chats and spreadsheets.",
      },
      {
        title: "Share and follow along",
        description: "Call-ups, confirmations, matches, and progress in one place.",
      },
    ],
  },
  screenshots: [
    {
      key: "match-center",
      media: {
        src: "/screenshots/n2-match-convocation.png",
        alt: "Match Center and call-up with confirmed and pending players",
        width: 1024,
        height: 622,
      },
      caption: "Call-ups with clear per-player status",
    },
    {
      key: "public-convocation",
      media: {
        src: "/screenshots/n1-public-confirm.png",
        alt: "Public screen for players to confirm attendance without an account",
        width: 850,
        height: 562,
      },
      caption: "Players confirm without an account",
    },
    {
      key: "rankings",
      media: {
        src: "/screenshots/n3-rankings.png",
        alt: "Rankings for goals, assists, fair play, and attendance",
        width: 1024,
        height: 703,
      },
      caption: "Automatic rankings by season",
    },
    {
      key: "lineup",
      media: {
        src: "/screenshots/n4-lineup.png",
        alt: "Lineup builder with starters, reserves, captain, and goalkeeper",
        width: 1024,
        height: 576,
      },
      caption: "Lineups with starters and reserves",
    },
    {
      key: "timeline",
      media: {
        src: "/screenshots/n5-timeline.png",
        alt: "Match timeline with goals, assists, and cards",
        width: 1024,
        height: 487,
      },
      caption: "Goals, assists, and cards in the match",
    },
  ],
  offer: {
    eyebrow: "Offer",
    title: "Try Kyvora for 7 days.",
    description:
      "Create an account, set up the team, and run the full flow. No card required to start.",
    trialDays: offerEnv.trialDays,
    requiresCard: offerEnv.requiresCard,
    priceBrl: offerEnv.priceBrl,
    priceUsd: offerEnv.priceUsd,
    highlights: [
      "7-day free trial",
      "Call-ups with no-account confirmation",
      "Sports and financial team management",
      "Cancel anytime",
    ],
    ctaLabel: "Create free account",
    disclaimer:
      "Final prices and plans appear in the app when commercial terms are configured.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Before you create an account",
    items: [
      {
        id: "install",
        question: "Do I need to install anything?",
        answer:
          "No. Kyvora runs in the browser on phone or desktop. You can also add it to your home screen as a PWA.",
      },
      {
        id: "players-account",
        question: "Do players need an account?",
        answer:
          "Not to confirm attendance. You send the call-up link; they reply without signing up.",
      },
      {
        id: "mobile",
        question: "Can I use it on mobile?",
        answer: "Yes. It’s designed for organizers away from a desk.",
      },
      {
        id: "trial",
        question: "What happens after the free trial?",
        answer:
          "You choose whether to continue. Commercial terms are clear in the app — no surprises on this page.",
      },
      {
        id: "modalities",
        question: "Does Kyvora work for football and futsal?",
        answer:
          "Yes. Any routine with roster, matches, and call-ups fits — including small-sided games.",
      },
      {
        id: "squads",
        question: "Can I register more than one squad?",
        answer:
          "Yes. The platform supports organizations with multiple squads and rosters.",
      },
      {
        id: "data",
        question: "Is my data saved?",
        answer: "Yes. Team history stays available while the account is active.",
      },
    ],
  },
  labels: {
    trial: "Trial",
    card: "Card",
    price: "Price",
    cardRequired: "Required",
    cardNotRequired: "Not required",
    days: "days",
    login: "Log in",
    navProduct: "Product",
    navBenefits: "Benefits",
    navHow: "How it works",
    navFaq: "FAQ",
    accessApp: "Open the app",
  },
  finalCta: {
    title: "Ready to run the team properly?",
    description: "Create your account and try Kyvora for 7 days.",
    ctaLabel: "Create free account",
  },
  seo: {
    title: "Kyvora — Organize your amateur team without chat chaos",
    description:
      "Amateur team management: roster, call-ups, matches, stats, and finances. Create a free account and try for 7 days.",
    ogImage: "/og/default.jpg",
    robots: "index,follow",
  },
  tracking: { contentGroup: "campaign_home" },
  experiment: { id: "hero_headline_v1", variant: "A" },
  destinationUrl: siteConfig.appUrl,
  indexable: true,
};
