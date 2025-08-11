import { currentUser } from "@clerk/nextjs/dist/types/server"

export const checkUser = async () => {
    await currentUser
}