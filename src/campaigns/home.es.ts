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
      headline: "Organiza tu equipo sin depender de planillas y del chat.",
      subheadline:
        "Crea el equipo, convoca jugadores y confirma quién juega — en un solo lugar, desde el celular.",
      rationale: "Dolor concreto + claridad para message match con anuncios.",
    },
    {
      id: "B",
      headline: "Organizar tu equipo no debería ser más difícil que jugar.",
      subheadline:
        "Del plantel a la convocatoria: menos insistir en el grupo, más claridad antes del partido.",
      rationale: "Ángulo emocional para creatividades de capitán/organizador.",
    },
    {
      id: "C",
      headline: "Sabe quién juega sin tener que insistir a todos.",
      subheadline:
        "Envía la convocatoria; el jugador confirma sin crear cuenta.",
      rationale: "Destaca la confirmación sin registro.",
    },
  ],
  primaryCta: { label: "Crear mi equipo gratis", intent: "signup" },
  secondaryCta: {
    label: "Ver Kyvora en acción",
    intent: "scroll",
    scrollTarget: "#demonstracao",
  },
  trustPills: ["Sin tarjeta para empezar", "Funciona en el celular", "Jugadores confirman sin cuenta"],
  identification: {
    eyebrow: "La rutina que ya conoces",
    title: "Si organizar el equipo se siente como un segundo trabajo, esto es para ti.",
    description:
      "No es falta de compromiso. Falta un lugar claro para la organización — fuera del medio del chat.",
    scenes: [
      { title: "Mensajes sin fin", description: "Encuesta, “¿quién viene?”, silencio y otra vez insistir." },
      { title: "Planilla desactualizada", description: "Tres versiones. Nadie confía en los datos." },
      { title: "Alineación improvisada", description: "Lista en el celular, en papel o en la cabeza de uno." },
      { title: "Historial perdido", description: "Marcador y asistencia enterrados en conversaciones viejas." },
    ],
  },
  beforeAfter: {
    eyebrow: "La transformación",
    title: "Misma rutina. Otro nivel de claridad.",
    beforeLabel: "Antes",
    afterLabel: "Con Kyvora",
    before: [
      "Confirmaciones dispersas en el grupo",
      "Duda hasta el último minuto sobre quién juega",
      "Alineaciones improvisadas",
      "Organización centralizada en una sola persona",
      "Historial perdido en chats antiguos",
    ],
    after: [
      "Convocatorias con estado claro",
      "Confirmaciones en un solo lugar",
      "Plantel y partidos centralizados",
      "Alineación organizada en el celular",
      "Historial accesible para el equipo",
    ],
  },
  demo: {
    eyebrow: "Demostración",
    title: "Del caos a la organización en pocos pasos.",
    description: "Mira el flujo real: crear equipo, convocar, confirmar y seguir el partido.",
    video: {
      poster: "/posters/demo-poster.svg",
      title: "Kyvora en acción",
      description: "Recorrido rápido del flujo de organización.",
      placeholderLabel: "Video en producción — próximamente",
    },
    flows: [
      "Crear equipo",
      "Agregar jugadores",
      "Crear partido",
      "Enviar convocatoria",
      "El jugador confirma sin cuenta",
      "Armar alineación",
      "Seguir Match Center",
      "Ver rankings",
    ],
  },
  benefits: {
    eyebrow: "Qué cambia en la práctica",
    title: "Menos insistencia. Más equipo organizado.",
    description: "Pocos beneficios. Resultados claros — sin lista técnica.",
    items: [
      {
        title: "Ten tu plantel siempre organizado.",
        description: "Jugadores, posiciones y participación en un panel simple.",
      },
      {
        title: "Sabe quién juega sin insistir en el grupo.",
        description: "Convocatoria por enlace. El jugador confirma sin crear cuenta.",
      },
      {
        title: "Organiza el próximo partido en minutos.",
        description: "Fecha, lugar y rival en el mismo flujo.",
      },
      {
        title: "Registra lo que pasó en cada partido.",
        description: "Marcador, eventos y una vista clara del juego.",
      },
      {
        title: "Mira quién más aporta en la cancha.",
        description: "Rankings actualizados con cada partido registrado.",
      },
      {
        title: "Guarda el historial del equipo.",
        description: "Temporadas y resultados disponibles — no perdidos en el chat.",
      },
    ],
  },
  howItWorks: {
    eyebrow: "Cómo funciona",
    title: "Simple para usarlo en la semana del partido.",
    description: "Seis pasos. Sin instalación. Sin capacitar a todo el plantel.",
    steps: [
      { title: "Crea tu equipo", description: "Configúralo en pocos minutos." },
      { title: "Agrega jugadores", description: "Arma el plantel listo para convocar." },
      { title: "Organiza el partido", description: "Define cuándo y dónde juegan." },
      { title: "Envía la convocatoria", description: "Comparte el enlace en el grupo de siempre." },
      { title: "Sigue las confirmaciones", description: "Ve quién confirmó, rechazó o sigue pendiente." },
      { title: "Llega preparado", description: "Alineación y operación claras antes del pitazo." },
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
  proof: {
    eyebrow: "Prueba",
    title: "Producto real. Flujo real. Sin números inventados.",
    description:
      "Mientras crecen los casos y testimonios, la prueba está en el producto — pantallas y rutinas reales.",
    items: [
      { title: "Producto en producción", description: "Plataforma activa en la operación real de equipos." },
      { title: "Capturas reales", description: "Pantallas del entorno demo — no UI ficticia." },
      { title: "Hecho para el celular", description: "Organiza desde la cancha, el vestuario o el camino." },
      { title: "Transparencia", description: "Sin testimonios fabricados. Sin métricas inventadas." },
    ],
    testimonials: [],
    logos: [],
    metrics: [],
  },
  offer: {
    eyebrow: "Empieza ahora",
    title: "Organiza tu equipo sin compromiso.",
    description:
      "Crea la cuenta, arma el equipo y prueba el flujo completo. Los precios definitivos aparecen solo cuando la oferta comercial esté configurada.",
    trialDays: offerEnv.trialDays,
    requiresCard: offerEnv.requiresCard,
    priceBrl: offerEnv.priceBrl,
    priceUsd: offerEnv.priceUsd,
    highlights: [
      "Creación de equipo en minutos",
      "Convocatoria con confirmación sin cuenta",
      "Historial y rankings en la misma plataforma",
      "Cancela cuando quieras",
    ],
    ctaLabel: "Crear mi equipo gratis",
    disclaimer: "Precios y condiciones solo aparecen cuando están configurados explícitamente.",
  },
  faq: [
    {
      id: "install",
      question: "¿Necesito instalar una aplicación?",
      answer: "No. Kyvora funciona en el navegador. También puedes instalarlo como PWA.",
    },
    {
      id: "mobile",
      question: "¿Funciona bien en el celular?",
      answer: "Sí. Está pensado para quien organiza lejos de la computadora.",
    },
    {
      id: "modalities",
      question: "¿Sirve para fútbol, futsal y fútbol 7?",
      answer: "Sí. Cualquier rutina con plantel, partidos y convocatorias encaja.",
    },
    {
      id: "players-account",
      question: "¿Los jugadores necesitan crear cuenta?",
      answer: "No para confirmar asistencia. Usan el enlace de la convocatoria sin registrarse.",
    },
    {
      id: "callup",
      question: "¿Cómo funciona la convocatoria?",
      answer: "Creas el partido, abres la convocatoria y compartes el enlace. Las respuestas quedan centralizadas.",
    },
    {
      id: "squads",
      question: "¿Puedo gestionar más de un plantel?",
      answer: "Sí. La plataforma permite organizaciones con varios planteles.",
    },
    {
      id: "trial",
      question: "¿Qué pasa después del período de prueba?",
      answer: "Tú decides si continúas. Las condiciones comerciales quedan claras en la app.",
    },
    {
      id: "card",
      question: "¿Necesito registrar una tarjeta para empezar?",
      answer: "Esta campaña busca baja fricción. Si se exige tarjeta, se indicará explícitamente.",
    },
    {
      id: "data",
      question: "¿Mis datos quedan guardados?",
      answer: "Sí. El historial del equipo permanece mientras la cuenta esté activa.",
    },
    {
      id: "cancel",
      question: "¿Puedo cancelar?",
      answer: "Sí. Puedes terminar cuando quieras.",
    },
    {
      id: "pwa",
      question: "¿Puedo usarlo como aplicación?",
      answer: "Sí. En el celular puedes agregar Kyvora a la pantalla de inicio como PWA.",
    },
  ],
  finalCta: {
    title: "Tu equipo ya tiene suficientes desafíos dentro de la cancha.",
    description: "Organiza lo que pasa fuera de ella — y llega con la cabeza más liviana.",
    ctaLabel: "Crear mi equipo gratis",
  },
  seo: {
    title: "Kyvora — Organiza tu equipo sin caos en el chat",
    description:
      "Landing de campaña de Kyvora: organiza plantel, convocatorias y partidos. Crea tu equipo gratis y sabe quién juega sin insistir en el grupo.",
    ogImage: "/og/default.jpg",
    robots: "index,follow",
  },
  tracking: { contentGroup: "campaign_home" },
  experiment: { id: "hero_headline_v1", variant: "A" },
  destinationUrl: siteConfig.appUrl,
  indexable: true,
};
