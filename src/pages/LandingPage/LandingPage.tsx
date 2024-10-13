import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import AssetsSection from "./components/AssetsSection/AssetsSection"
import CtaSection from "./components/CtaSection/CtaSection"
import CustomersSection from "./components/CustomersSection/CustomersSection"
import DownloadAppSection from "./components/DownloadAppSection/DownloadAppSection"
import FeaturesSection from "./components/FeaturesSection/FeaturesSection"
import HeroSection from "./components/HeroSection/HeroSection"
import JoinCommunitySection from "./components/JoinCommunitySection/JoinCommunitySection"
import RegulationSection from "./components/RegulationSection/RegulationSection"
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection"

const LandingPage = () => {
    return <>
        <Navbar />

        <main>
            <HeroSection />
            <CustomersSection />
            <FeaturesSection />
            <AssetsSection />
            <CtaSection />
            <RegulationSection />
            <TestimonialsSection />
            <JoinCommunitySection />
            <DownloadAppSection />
        </main>

        <Footer />
    </>
}

export default LandingPage