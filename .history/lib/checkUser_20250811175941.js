import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
    const user = await currentUser();
    console.log(user);

    if (!user) {
        return null;
    }
    try {
        //check that the user is present in database or not 
        const loggedInUser = await db.user.findUnique({
            where: {
                clerkUserId: user.id,
            },
        });
        // if user is not present in database
        if (!loggedInUser) {
            return loggedInUser;
        }

        // if user is present in database
        const name = `${user.firstName} ${user.lastName}`;


        const newUser = await db.user
    } catch (error) {
        
    }
}