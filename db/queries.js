// import { evenModel } from "@/models/event-models";

import { Event } from "@/models/event-models";
import { userModel } from "@/models/users-models";
import { replaceMongoInArray, replaceMongoInObject } from "@/utils/data-utils";
import mongoose from "mongoose";


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

async function updateInterested(eventId, authId) {
    const event = await Event.findById(eventId);

    if (event) {
        const foundUser = event.interested_ids.find(id => id.toString() === authId);

        if (foundUser) {
            event.interested_ids.pull(new mongoose.Types.ObjectId(authId))
        } else {
            event.interested_ids.push(new mongoose.Types.ObjectId(authId))
        }
    }

    event.save();
}

export { getAllEvent, getEventById, createUser, foundUserByCredentials, updateInterested }