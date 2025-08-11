import { currentUser } from "@clerk/nextjs/server";

export const checkUser = async () => {
    await currentUser();
}