import { getOfferEnv, siteConfig } from "@/config/site";
import type { CampaignConfig } from "./schema";

const offerEnv = getOfferEnv();

export const homeEs: CampaignConfig = {
  slug: "home",
  locale: "es",
  audience: "presidentes, capitanes y organizadores de equipos amateurs",
  campaignName: "acquisition_home_es",
  theme: "light",
  heroVariant: "A",
  heroVariants: [
    {
      id: "A",
      headline: "Tu equipo organizado dentro y fuera de la cancha.",
      subheadline:
        "Plantel, partidos, convocatorias y estadísticas en el celular. Prueba gratis 7 días.",
      rationale: "Propuesta de valor clara + oferta para tráfico frío.",
    },
    {
      id: "B",
      headline: "Menos insistir en el grupo. Más claridad antes del partido.",
      subheadline:
        "Convoca por enlace, sigue quién confirmó y llega preparado.",
      rationale: "Ángulo de alivio para creatividades de capitán sobrecargado.",
    },
    {
      id: "C",
      headline: "Sabe quién juega sin insistir a todos.",
      subheadline:
        "El jugador responde por el enlace — sin crear cuenta. Tú ves el estado en un solo lugar.",
      rationale: "Diferencial de confirmación sin registro para anuncios de asistencia.",
    },
  ],
  primaryCta: { label: "Crear cuenta gratis", intent: "signup" },
  secondaryCta: {
    label: "Ver cómo funciona",
    intent: "scroll",
    scrollTarget: "#produto",
  },
  trustPills: ["7 días gratis", "Jugadores confirman sin cuenta", "En el celular"],
  identification: {
    eyebrow: "La rutina del organizador",
    title: "Si la organización del equipo vive en WhatsApp, esto es para ti.",
    description:
      "No es falta de compromiso. Falta un lugar claro para la operación del equipo.",
    scenes: [
      {
        title: "Confirmaciones en medio del chat",
        description: "Encuesta, silencio, insistir otra vez — y nadie sabe quién viene.",
      },
      {
        title: "Planillas y notas dispersas",
        description: "Plantel, cuotas y marcadores en archivos que nadie actualiza.",
      },
      {
        title: "Alineación de último minuto",
        description: "Lista en la cabeza de uno, en papel o en tres hilos distintos.",
      },
      {
        title: "Historial que desaparece",
        description: "Goles, asistencias y asistencia perdidos en mensajes viejos.",
      },
    ],
  },
  product: {
    eyebrow: "El producto",
    title: "Pantallas reales de la plataforma.",
    description:
      "Del Match Center a la convocatoria pública: lo que ves aquí es Kyvora en uso.",
  },
  benefits: {
    eyebrow: "Qué resuelve Kyvora",
    title: "Cuatro pilares para la rutina del equipo.",
    description: "Menos herramientas improvisadas. Más control día a día.",
    items: [
      {
        title: "Gestión deportiva",
        description: "Plantel, cuadros, temporadas, partidos y alineaciones en el mismo flujo.",
      },
      {
        title: "Convocatoria y comunicación",
        description: "Envía el enlace, recibe respuestas y sigue quién confirmó.",
      },
      {
        title: "Estadísticas y evolución",
        description: "Goles, asistencias, asistencia y rankings sin planilla manual.",
      },
      {
        title: "Organización financiera",
        description: "Cuotas, gastos y visión del flujo de caja del equipo en un solo lugar.",
      },
    ],
  },
  convocation: {
    eyebrow: "Diferencial",
    title: "Convocatoria por enlace — sin cuenta para el jugador.",
    description:
      "El dirigente organiza. El atleta solo responde. La confirmación queda centralizada.",
    steps: [
      {
        title: "Crea la convocatoria",
        description: "Define el partido y quién debe responder.",
      },
      {
        title: "Comparte el enlace",
        description: "Envíalo en el grupo o directo al jugador.",
      },
      {
        title: "El jugador responde",
        description: "Confirma o rechaza sin crear cuenta en Kyvora.",
      },
      {
        title: "Tú lo sigues",
        description: "Estado claro de quién va, quién falta y quién aún no respondió.",
      },
    ],
  },
  howItWorks: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos para empezar.",
    description: "Sin instalación. Sin capacitar a todo el plantel.",
    steps: [
      {
        title: "Crea la cuenta y configura el equipo",
        description: "Arma la base del equipo en pocos minutos.",
      },
      {
        title: "Organiza plantel, partidos y finanzas",
        description: "Centraliza lo que hoy está en chats y planillas.",
      },
      {
        title: "Comparte y sigue",
        description: "Convocatorias, confirmaciones, partidos y evolución en un solo lugar.",
      },
    ],
  },
  screenshots: [
    {
      key: "match-center",
      media: {
        src: "/screenshots/s2-match-center.png",
        alt: "Match Center de Kyvora con marcador y eventos",
        width: 1200,
        height: 800,
      },
      caption: "Sigue el partido con claridad",
    },
    {
      key: "convocation",
      media: {
        src: "/screenshots/s3-convocation.png",
        alt: "Pantalla de convocatoria con estado de asistencia",
        width: 1200,
        height: 800,
      },
      caption: "Convocatoria con estado por jugador",
    },
    {
      key: "public-convocation",
      media: {
        src: "/screenshots/s4-public-convocation.png",
        alt: "Confirmación pública sin crear cuenta",
        width: 800,
        height: 1600,
      },
      caption: "El jugador confirma sin cuenta",
    },
    {
      key: "rankings",
      media: {
        src: "/screenshots/s5-rankings.png",
        alt: "Rankings y estadísticas del equipo",
        width: 1200,
        height: 800,
      },
      caption: "Rankings sin planilla manual",
    },
  ],
  offer: {
    eyebrow: "Oferta",
    title: "Prueba Kyvora durante 7 días.",
    description:
      "Crea la cuenta, configura el equipo y usa el flujo completo. Sin tarjeta para empezar.",
    trialDays: offerEnv.trialDays,
    requiresCard: offerEnv.requiresCard,
    priceBrl: offerEnv.priceBrl,
    priceUsd: offerEnv.priceUsd,
    highlights: [
      "Prueba gratuita de 7 días",
      "Convocatoria con confirmación sin cuenta",
      "Gestión deportiva y financiera del equipo",
      "Cancela cuando quieras",
    ],
    ctaLabel: "Crear cuenta gratis",
    disclaimer:
      "Los precios y planes definitivos aparecen en la app cuando la oferta comercial esté configurada.",
  },
  faq: {
    eyebrow: "Dudas",
    title: "Antes de crear la cuenta",
    items: [
      {
        id: "install",
        question: "¿Necesito instalar algo?",
        answer:
          "No. Kyvora funciona en el navegador del celular o la computadora. Si quieres, también puedes añadirlo a la pantalla de inicio como PWA.",
      },
      {
        id: "players-account",
        question: "¿Los jugadores necesitan crear una cuenta?",
        answer:
          "No para confirmar asistencia. Envías el enlace de la convocatoria; el jugador responde sin registrarse.",
      },
      {
        id: "mobile",
        question: "¿Puedo usarlo en el celular?",
        answer:
          "Sí. La experiencia está pensada para quien organiza el equipo lejos de la computadora.",
      },
      {
        id: "trial",
        question: "¿Qué pasa después de la prueba gratuita?",
        answer:
          "Tú decides si continúas. Las condiciones comerciales quedan claras en la app — sin sorpresas en esta página.",
      },
      {
        id: "modalities",
        question: "¿Kyvora sirve para fútbol y futsal?",
        answer:
          "Sí. Cualquier rutina con plantel, partidos y convocatorias encaja — también fútbol 7.",
      },
      {
        id: "squads",
        question: "¿Puedo registrar más de un cuadro?",
        answer:
          "Sí. La plataforma está pensada para organizaciones con varios cuadros y planteles.",
      },
      {
        id: "data",
        question: "¿Mis datos quedan guardados?",
        answer:
          "Sí. El historial del equipo permanece disponible mientras la cuenta esté activa.",
      },
    ],
  },
  labels: {
    trial: "Prueba",
    card: "Tarjeta",
    price: "Precio",
    cardRequired: "Necesaria",
    cardNotRequired: "No necesaria",
    days: "días",
    login: "Entrar",
    navProduct: "Producto",
    navBenefits: "Beneficios",
    navHow: "Cómo funciona",
    navFaq: "Dudas",
    accessApp: "Acceder al sistema",
  },
  finalCta: {
    title: "¿Listo para organizar el equipo de verdad?",
    description: "Crea tu cuenta y prueba Kyvora durante 7 días.",
    ctaLabel: "Crear cuenta gratis",
  },
  seo: {
    title: "Kyvora — Organiza tu equipo amateur sin caos en el chat",
    description:
      "Gestión de equipos amateurs: plantel, convocatorias, partidos, estadísticas y finanzas. Crea cuenta gratis y prueba 7 días.",
    ogImage: "/og/default.jpg",
    robots: "index,follow",
  },
  tracking: { contentGroup: "campaign_home" },
  experiment: { id: "hero_headline_v1", variant: "A" },
  destinationUrl: siteConfig.appUrl,
  indexable: true,
};
