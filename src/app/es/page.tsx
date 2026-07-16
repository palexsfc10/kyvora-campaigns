import { notFound } from "next/navigation";
import { getCampaign } from "@/campaigns/registry";
import {
  buildCampaignMetadata,
  CampaignShell,
} from "@/components/campaign/CampaignShell";

export async function generateMetadata() {
  const campaign = getCampaign("es", "home");
  if (!campaign) return {};
  return buildCampaignMetadata(campaign, "/");
}

export default function SpanishHomePage() {
  const campaign = getCampaign("es", "home");
  if (!campaign) notFound();
  return <CampaignShell campaign={campaign} path="/" />;
}
