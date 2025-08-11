import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
    const user = await currentUser();
    console.log(user);

    if (!user) {
        return null;
    }
    try {
        const loggedInUser = await db.user.findUnique({
            where: {
                clerkUserId: user.id,
            },
        });
        if (!loggedInUser) {
            return loggedInUser;
        }

        // if user is loggedIn then
        const name = `${user.first}`
    } catch (error) {
        
    }
}