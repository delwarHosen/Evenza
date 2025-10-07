import EventDetails from "@/components/details/EventDetails";
import EventVenue from "@/components/details/EventVanue";
import HeroSection from "@/components/details/HeroSection";
import { getEventById } from "@/db/queries";

export async function generateMetadata({ params: { id } }) {
    const eventInfo = await getEventById(id);

    return {
        title: `Evenza ${eventInfo?.name}`,
        description: eventInfo?.details,
        openGraph: {
            images: [eventInfo?.imageUrl]
        }
    }
}

const EventDetailPage = async ({ params: { id } }) => {
    const eventInfo = await getEventById(id);


    return (
        <>
            <HeroSection eventInfo={eventInfo} />
            <div className="grid grid-cols-5 gap-12 my-12">
                <EventDetails details={eventInfo?.details} swags={eventInfo?.swags} />
                <EventVenue location={eventInfo?.location} />
            </div>
        </>
    );
};

export default EventDetailPage;