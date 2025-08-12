import { getCurrentUser } from "@/actions/onboarding";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Onboarding - MediMeet",
    description: "Complete your profile to get started with MediMeet",
};



export default async function OnboardingLayout({ children }) { }