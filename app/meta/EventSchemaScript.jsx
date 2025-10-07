import React from 'react'

export default function EventSchemaScript({ event }) {
    const eventName = encodeURIComponent(event?.name);

    const formatedData = {
        "@context": "https://schema.org",
        "@type": "EducationEvent",
        name: eventName,
        startDate: new Date(),
        endDate: new Date(),
        description: event?.details,
        eventStatus: "https://schema.org/EventScheduled",
        location: {
            "@typ": "Place",
            name: event?.location,
        },
        image: [event?.imageUrl],
        organizer: {
            "@type": "Organization",
            name: "Kira and Morrison Music",
            url: "https://kiraandmorrisonmusic.com"
        }
    }

    return (
        <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(formatedData) }} />

    )
}
