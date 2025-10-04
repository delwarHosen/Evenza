import mongoose, { Schema } from "mongoose"


const schema = new Schema({
    name: {
        require: true,
        type: String
    },
    details: {
        require: true,
        type: String
    },
    location: {
        require: true,
        type: String
    },
    imageUrl: {
        require: true,
        type: String
    },
    interested_ids: {
        require: false,
        type: Array
    },
    going_ids: {
        require: false,
        type: Array
    },
    swags: {
        require: false,
        type: Array
    },
})

// export const evenModel =mongoose.models.events || mongoose.models("events", schema)
export const Event = mongoose.models.Event || mongoose.model("Event", schema);
