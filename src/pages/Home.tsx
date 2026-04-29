import Hero from '../components/Hero/Hero.tsx';
import HowItWorks from "../components/HowItWorks/HowItWorks.tsx";
import Reviews from "../components/Reviews/Reviews.tsx";

export default function Home() {
    return (
        <>
            <Hero />
            <HowItWorks />
            <Reviews />
        </>
    );
}