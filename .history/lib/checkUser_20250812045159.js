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
            include: {
                transactions: {
                    where: {
                        type: "CREDIT_PURCHASE",
                        createdAt: {
                            gte:new Date(new Date().getFullYear())
                        }
                    },
                },
            },
        });
        // if user is  present in database
        if (loggedInUser) {
            return loggedInUser;
        }

        // if user is not  present in database
        const name = `${user.firstName} ${user.lastName}`;


        const newUser = await db.user.create({
            data: {
                clerkUserId: user.id,
                name,
                imageUrl: user.imageUrl,
                email: user.emailAddresses[0].emailAddress,
                transactions: {
                    create: {
                        type: "CREDIT_PURCHASE",
                        packageId: "free_user",
                        amount: 2,
                    },
                },
            },
        });
        return newUser;
    } catch (error) {
        console.log(error.message);
    }
}