import { defaultLocale, localePrefixes, type Locale } from "@/campaigns/schema";

export function localizePath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  const prefix = localePrefixes[locale];
  if (!prefix) return clean || "/";
  return `/${prefix}${clean || ""}` || `/${prefix}`;
}

export function stripLocaleFromPathname(pathname: string): {
  locale: Locale;
  path: string;
} {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  if (first === "en") {
    return { locale: "en", path: `/${segments.slice(1).join("/")}` || "/" };
  }
  if (first === "es") {
    return { locale: "es", path: `/${segments.slice(1).join("/")}` || "/" };
  }
  if (first === "pt-br" || first === "pt-BR") {
    return {
      locale: "pt-BR",
      path: `/${segments.slice(1).join("/")}` || "/",
    };
  }

  return { locale: defaultLocale, path: pathname || "/" };
}

export const uiCopy = {
  "pt-BR": {
    skipToContent: "Ir para o conteúdo",
    privacy: "Privacidade",
    terms: "Termos",
    contact: "Contato",
    cookieTitle: "Cookies e medição",
    cookieBody:
      "Usamos cookies de analytics e marketing para entender campanhas e melhorar a conversão. Você pode aceitar ou recusar.",
    cookieAccept: "Aceitar",
    cookieReject: "Recusar",
    cookieManage: "Cookies",
    language: "Idioma",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    stickyCtaHint: "Teste grátis por 7 dias",
  },
  en: {
    skipToContent: "Skip to content",
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
    cookieTitle: "Cookies & measurement",
    cookieBody:
      "We use analytics and marketing cookies to understand campaigns and improve conversion. You can accept or reject.",
    cookieAccept: "Accept",
    cookieReject: "Reject",
    cookieManage: "Cookies",
    language: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    stickyCtaHint: "Free 7-day trial",
  },
  es: {
    skipToContent: "Ir al contenido",
    privacy: "Privacidad",
    terms: "Términos",
    contact: "Contacto",
    cookieTitle: "Cookies y medición",
    cookieBody:
      "Usamos cookies de analytics y marketing para entender campañas y mejorar la conversión. Puedes aceptar o rechazar.",
    cookieAccept: "Aceptar",
    cookieReject: "Rechazar",
    cookieManage: "Cookies",
    language: "Idioma",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    stickyCtaHint: "Prueba gratis 7 días",
  },
} as const;
