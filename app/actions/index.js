"use server"

import { createUser, foundUserByCredentials, updateInterested } from "@/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function registerUser(formData) {
    const user = Object.fromEntries(formData);
    const created = await createUser(user);

    redirect("/login")
}

async function performLogin(formData) {

    try {
        const credentials = {};
        credentials.email = formData.get("email");
        credentials.password = formData.get("password");
        const found = await foundUserByCredentials(credentials);
        return found

    } catch (error) {
        throw error
    }

}


async function addInterestedEvent(eventId, authId) {
    try {
        await updateInterested(eventId, authId)
    } catch (error) {
        throw error
    }

    revalidatePath("/")
}

export { registerUser, performLogin, addInterestedEvent }