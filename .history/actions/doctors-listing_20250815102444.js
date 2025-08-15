"use server";


/**
 * Get doctors by specialty
 */
export async function getDoctorsBySpecialty(specialty) {
    try {
        const doctors = await db.user.findMany({
            where: {
                role: "DOCTOR",
                verificationStatus
            }
        })
    } catch (error) {
        console.log("Failed to fetch doctors by specialty:", error);
        return { error: "Failed to fetch doctors" };
    }
}