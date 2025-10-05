"use server"

import { createUser, foundUserByCredentials } from "@/db/queries";
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


    // if (found) {
    //     redirect("/");
    // } else {
    //     throw new Error(`User with email ${formData.get('email')} not found`)
    // }
}

export { registerUser, performLogin }