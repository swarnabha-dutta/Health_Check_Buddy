import { getCurrentUser } from "@/actions/onboarding";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Onboarding - MediMeet",
    description: "Complete your profile to get started with MediMeet",
};



export default async function OnboardingLayout({ children }) { 
    const user = await getCurrentUser();
    // Redirect users who have already completed onboarding
    if (user) {
        if (user.role === "PATIENT") {
        redirect("/doctors");
        } else if (user.role === "DOCTOR") {
        // Check verification status for doctors
        if (user.verificationStatus === "VERIFIED") {
            redirect("/doctor");
        } else {
            redirect("/doctor/verification");
        }
        } else if (user.role === "ADMIN") {
        redirect("/admin");
        }
    }
    



}