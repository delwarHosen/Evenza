// import { evenModel } from "@/models/event-models";

import { Event } from "@/models/event-models";


async function getAllEvent(params) {
    const allEvents = await Event.find();
    return allEvents
}

export { getAllEvent }