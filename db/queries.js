// import { evenModel } from "@/models/event-models";

import { Event } from "@/models/event-models";
import { userModel } from "@/models/users-models";
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

async function createUser(user) {
    return await userModel.create(user);
}

async function foundUserByCredentials(credentials) {
    const user = await userModel.findOne(credentials).lean();
    if (user) {
        return replaceMongoInObject(user);
    }
    return null;
}

export { getAllEvent, getEventById, createUser, foundUserByCredentials }