import { redirect } from "next/navigation";







export default async function DoctorSpecialtyPage({ params }) {
    const { specialty } = await params;

    // Redirect to main doctors page if no specialty is provided
    if (!specialty) {
        redirect("/doctors");
    }

    return (
        <div>
            <PageHeader
                title={specialty.split("%20").join(" ")}
                backLink="/doctors"
                backLabel
            />
        </d>
    )
}