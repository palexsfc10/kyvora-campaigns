import { notFound } from "next/navigation";
import { getCampaign } from "@/campaigns/registry";
import {
  buildCampaignMetadata,
  CampaignShell,
} from "@/components/campaign/CampaignShell";

type Params = Promise<{ campaign: string }>;

const reserved = new Set(["en", "es", "pt-br", "pt-BR", "api"]);

export function generateStaticParams() {
  return [] as Array<{ campaign: string }>;
}

export async function generateMetadata({ params }: { params: Params }) {
  const { campaign: slug } = await params;
  if (reserved.has(slug)) return {};
  const campaign = getCampaign("pt-BR", slug);
  if (!campaign) {
    return { robots: { index: false, follow: false } };
  }
  return buildCampaignMetadata(campaign, `/${slug}`);
}

export default async function CampaignPage({ params }: { params: Params }) {
  const { campaign: slug } = await params;
  if (reserved.has(slug)) notFound();

  const campaign = getCampaign("pt-BR", slug);
  if (!campaign) notFound();

  return <CampaignShell campaign={campaign} path={`/${slug}`} />;
}
