"use client";
import { OrbitCardStack } from "@/components/ui/orbit-card-stack";
const items = [
  { name: "Approval Video", role: "Before dispatch", description: "You receive a video of your exact product in 1–5 days. We ship only after you approve.", initials: "AV", accent: "#C9A24B", stat: "1–5 days" },
  { name: "FedEx Tracked", role: "Safe delivery", description: "Dispatched the day after approval, with a tracking number shared with you.", initials: "FX", accent: "#e8d9ae", stat: "Next-day dispatch" },
  { name: "Worldwide", role: "USA · UK · AU · EU", description: "We deliver across the world, and shipping is already included in the price.", initials: "WW", accent: "#d8b45f", stat: "Shipping included" },
  { name: "Secure Payment", role: "Your choice", description: "PayPal invoice, Zelle, Venmo or Apple Pay. Final price confirmed in DM first.", initials: "SP", accent: "#e8d9ae", stat: "4 methods" },
  { name: "Any Item", role: "Screenshot service", description: "Send a screenshot of any product from a brand’s official website — we confirm availability.", initials: "AI", accent: "#C9A24B", stat: "Any brand" },
];
export default function WhyStack() { return <OrbitCardStack items={items} defaultActiveIndex={2} />; }
