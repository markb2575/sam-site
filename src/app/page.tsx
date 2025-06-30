import Services from "../components/services";
import Gallery from "../components/gallery";
import Hero from "../components/hero";

export default function Home() {
    return (
        <main className="font-montserrat">
            <Hero />

            <div id="services-section">
                <Services />
            </div>
            <div id="gallery-section">
                <Gallery />
            </div>
        </main>
    );
}
