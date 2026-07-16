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
      headline: "Run your team without spreadsheets and endless group chats.",
      subheadline:
        "Create the squad, send call-ups, and know who’s playing — in one place, on your phone.",
      rationale: "Concrete pain + clarity for paid traffic message match.",
    },
    {
      id: "B",
      headline: "Organizing your team shouldn’t be harder than playing.",
      subheadline:
        "From roster to call-up: less chasing replies, more clarity before kickoff.",
      rationale: "Emotional angle for captain/organizer creatives.",
    },
    {
      id: "C",
      headline: "Know who’s playing without chasing everyone for a reply.",
      subheadline:
        "Share a call-up link. Players confirm without creating an account.",
      rationale: "Highlights the no-account confirmation differentiator.",
    },
  ],
  primaryCta: { label: "Create my team free", intent: "signup" },
  secondaryCta: {
    label: "See Kyvora in action",
    intent: "scroll",
    scrollTarget: "#demonstracao",
  },
  trustPills: ["No card to start", "Works on mobile", "Players confirm without an account"],
  identification: {
    eyebrow: "The routine you already know",
    title: "If organizing the team feels like a second job, this is for you.",
    description:
      "It’s not a commitment problem. It’s missing one clear place for team ops — outside the chat flood.",
    scenes: [
      { title: "Endless messages", description: "Polls, “who’s in?”, silence, then chasing again." },
      { title: "Outdated spreadsheet", description: "Three versions. Nobody trusts the data." },
      { title: "Last-minute lineup", description: "Notes on a phone, paper, or one person’s memory." },
      { title: "Lost history", description: "Scores and attendance buried in old threads." },
    ],
  },
  beforeAfter: {
    eyebrow: "The shift",
    title: "Same match-week routine. Completely different clarity.",
    beforeLabel: "Before",
    afterLabel: "With Kyvora",
    before: [
      "Confirmations scattered across chats",
      "Uncertainty until kickoff",
      "Improvised lineups",
      "Ops living in one organizer’s head",
      "History lost in old conversations",
    ],
    after: [
      "Call-ups with clear status",
      "Confirmations in one place",
      "Roster and matches centralized",
      "Lineups organized on mobile",
      "Team history you can actually find",
    ],
  },
  demo: {
    eyebrow: "Demo",
    title: "From chaos to clarity in a few steps.",
    description: "See the real flow: create a team, call up players, confirm attendance, run the match.",
    video: {
      poster: "/posters/demo-poster.svg",
      title: "Kyvora in action",
      description: "A short walkthrough of the team organization flow.",
      placeholderLabel: "Video in production — coming soon",
    },
    flows: [
      "Create team",
      "Add players",
      "Create match",
      "Send call-up",
      "Player confirms without an account",
      "Set lineup",
      "Follow Match Center",
      "Check rankings",
    ],
  },
  benefits: {
    eyebrow: "What changes",
    title: "Less chasing. A more organized team.",
    description: "Fewer benefits. Clear outcomes — not a feature dump.",
    items: [
      {
        title: "Keep your roster organized.",
        description: "Players, positions, and participation in one simple panel.",
      },
      {
        title: "Know who’s playing without chasing the group.",
        description: "Share a link. Players confirm without signing up.",
      },
      {
        title: "Set up the next match in minutes.",
        description: "Date, venue, and opponent in one flow.",
      },
      {
        title: "Log what happened in every game.",
        description: "Score, events, and a clear match view.",
      },
      {
        title: "See who contributes on the pitch.",
        description: "Rankings update as matches are recorded.",
      },
      {
        title: "Keep the team’s history.",
        description: "Seasons and results stay available — not lost in chat.",
      },
    ],
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "Simple enough for match week.",
    description: "Six steps. No install. No training the whole squad.",
    steps: [
      { title: "Create your team", description: "Set up in a few minutes." },
      { title: "Add players", description: "Build a roster ready for call-ups." },
      { title: "Organize the match", description: "Decide when and where you play." },
      { title: "Send the call-up", description: "Share the link in your usual group." },
      { title: "Track confirmations", description: "See who’s in, out, or pending." },
      { title: "Show up prepared", description: "Clear lineup and ops before kickoff." },
    ],
  },
  screenshots: [
    {
      key: "match-center",
      media: {
        src: "/screenshots/s2-match-center.png",
        alt: "Kyvora Match Center with score and match events",
        width: 1200,
        height: 800,
      },
      caption: "Follow the match with clarity",
    },
    {
      key: "convocation",
      media: {
        src: "/screenshots/s3-convocation.png",
        alt: "Call-up screen with attendance status",
        width: 1200,
        height: 800,
      },
      caption: "Call-ups with per-player status",
    },
    {
      key: "public-convocation",
      media: {
        src: "/screenshots/s4-public-convocation.png",
        alt: "Public attendance confirmation without signup",
        width: 800,
        height: 1600,
      },
      caption: "Players confirm without an account",
    },
    {
      key: "rankings",
      media: {
        src: "/screenshots/s5-rankings.png",
        alt: "Team rankings and stats",
        width: 1200,
        height: 800,
      },
      caption: "Rankings without manual spreadsheets",
    },
  ],
  proof: {
    eyebrow: "Proof",
    title: "Real product. Real flow. No invented numbers.",
    description:
      "Until customer stories scale, proof lives in the product — real screens and real team ops.",
    items: [
      { title: "Live product", description: "An active platform used in real team routines." },
      { title: "Real screenshots", description: "Demo environment screens — not fake UI." },
      { title: "Built for mobile", description: "Organize from the court, locker room, or commute." },
      { title: "Transparency", description: "No fabricated testimonials. No made-up metrics." },
    ],
    testimonials: [],
    logos: [],
    metrics: [],
  },
  offer: {
    eyebrow: "Start now",
    title: "Organize your team with low commitment.",
    description:
      "Create an account, set up the team, and try the full flow. Final pricing appears only when commercial terms are configured.",
    trialDays: offerEnv.trialDays,
    requiresCard: offerEnv.requiresCard,
    priceBrl: offerEnv.priceBrl,
    priceUsd: offerEnv.priceUsd,
    highlights: [
      "Team setup in minutes",
      "Call-ups with no-account confirmation",
      "History and rankings in one place",
      "Cancel anytime",
    ],
    ctaLabel: "Create my team free",
    disclaimer: "Prices and commercial terms only appear when explicitly configured.",
  },
  faq: [
    {
      id: "install",
      question: "Do I need to install an app?",
      answer: "No. Kyvora runs in the browser. You can also add it as a PWA.",
    },
    {
      id: "mobile",
      question: "Does it work on mobile?",
      answer: "Yes. It’s designed for organizers away from a desk.",
    },
    {
      id: "modalities",
      question: "Does it work for football, futsal, and small-sided games?",
      answer: "Yes — any recurring roster and match routine fits.",
    },
    {
      id: "players-account",
      question: "Do players need an account?",
      answer: "Not to confirm attendance. They use the call-up link without signing up.",
    },
    {
      id: "callup",
      question: "How do call-ups work?",
      answer: "Create a match, open the call-up, share the link. Responses stay centralized.",
    },
    {
      id: "squads",
      question: "Can I manage more than one squad?",
      answer: "Yes. Organizations can run multiple squads/rosters.",
    },
    {
      id: "trial",
      question: "What happens after the trial?",
      answer: "You choose whether to continue. Commercial terms are clear in the app.",
    },
    {
      id: "card",
      question: "Do I need a card to start?",
      answer: "This campaign aims for low friction. If a card is required, it will be stated explicitly.",
    },
    {
      id: "data",
      question: "Is my data saved?",
      answer: "Yes. Team history stays available while the account is active.",
    },
    {
      id: "cancel",
      question: "Can I cancel?",
      answer: "Yes. Stop whenever you want.",
    },
    {
      id: "pwa",
      question: "Can I use it like an app?",
      answer: "Yes. Add Kyvora to your home screen as a PWA.",
    },
  ],
  finalCta: {
    title: "Your team already has enough challenges on the pitch.",
    description: "Organize what happens off it — and show up with a clearer head.",
    ctaLabel: "Create my team free",
  },
  seo: {
    title: "Kyvora — Organize your team without chat chaos",
    description:
      "Kyvora campaign landing: manage roster, call-ups, and matches. Create your team free and know who’s playing without chasing replies.",
    ogImage: "/og/default.jpg",
    robots: "index,follow",
  },
  tracking: { contentGroup: "campaign_home" },
  experiment: { id: "hero_headline_v1", variant: "A" },
  destinationUrl: siteConfig.appUrl,
  indexable: true,
};
