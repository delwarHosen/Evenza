import EventDetails from "@/components/details/EventDetails";
import EventVenue from "@/components/details/EventVanue";
import HeroSection from "@/components/details/HeroSection";


const page = () => {
    return (
        <>
            <HeroSection />
            <div className="grid grid-cols-5 gap-12 my-12">
                <EventDetails />
                <EventVenue />
            </div>
        </>
    );
};

export default page;