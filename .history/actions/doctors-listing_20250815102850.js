"use server";


/**
 * Get doctors by specialty
 */
export async function getDoctorsBySpecialty(specialty) {
    try {
        const cleanSpecialty = decodeURIComponent(specialty).split("&")[0].trim();
        const doctors = await db.user.findMany({
            where: {
                role: "DOCTOR",
                verificationStatus: "VERIFIED",
                specialty: cleanSpecialty,
            },
            orderBy: {
                name: "asc",
            }
        })
    } catch (error) {
        console.log("Failed to fetch doctors by specialty:", error);
        return { error: "Failed to fetch doctors" };
    }
}