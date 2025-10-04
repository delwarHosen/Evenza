// import { evenModel } from "@/models/event-models";

import { Event } from "@/models/event-models";
import { replaceMongoInArray, replaceMongoInObject } from "@/utils/data-utils";


async function getAllEvent(params) {
    const allEvents = await Event.find().lean();
    return replaceMongoInArray(allEvents);
    // return allEvents
}

async function getEventById(eventId) {
    const event = await Event.findById(eventId).lean();

    return replaceMongoInObject(event)
}

export { getAllEvent, getEventById }