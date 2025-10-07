"use server"

import EmailTemplate from "@/components/payments/EmailTemplate";
import { createUser, foundUserByCredentials, getEventById, updateGoing, updateInterested } from "@/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Resend } from "resend";

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


async function addGoingEvent(eventId, user) {
    try {
        updateGoing(eventId, user?.id);
        await sendEmail(eventId, user)
    } catch (error) {
        throw error;
    }

    revalidatePath("/");
    redirect("/")
}


async function sendEmail(eventId, user) {
    try {
        const event = await getEventById(eventId);
        const resend = new Resend(process.env.RESEND_API_KEY);
        const message = `Dear ${user?.name}, you have been successfully registered for the event, ${event?.name}.
    Please carry this email and your official id to the venue. We are excited to have you here.
    `;
        const sent = await resend.emails.send({
            from: "Delwar <onboarding@resend.dev>",
            to: user?.email,
            subject: "successfully register for the event",
            html: EmailTemplate,
        })
        return sent;
    } catch (error) {
        throw error
    }
}

export { registerUser, performLogin, addInterestedEvent, addGoingEvent, sendEmail }


