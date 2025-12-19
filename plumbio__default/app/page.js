import MainSlider from "./_components/index/MainSlider"
import TrustIndicators from "./_components/index/TrustIndicators"
import ServicesGrid from "./_components/index/ServicesGrid"
import WhyChooseUs from "./_components/index/WhyChooseUs"
import ServiceAreaMap from "./_components/index/ServiceAreaMap"
import Testimonials from "./_components/index/Testimonials"
import EmergencyResponse from "./_components/index/EmergencyResponse"
import MobileCTABar from "./_components/index/MobileCTABar"
import ContactFormSection from "./_components/Common/ContactFormSection"

export const metadata = {
	title: '24/7 Emergency Water Damage Restoration Services, Pinedale & Sublette County WY | Professional Restoration',
	description: 'Expert 24/7 emergency water damage restoration services in Pinedale & Sublette County, WY. Fast response, certified technicians, comprehensive restoration solutions. Call now for immediate emergency response!',
};

export default function Home() {
	return (
		<main id="tt-pageContent" className="overflow-hidden">
			<MainSlider />
			<TrustIndicators />
			<ServicesGrid />
			<WhyChooseUs />
			<ServiceAreaMap />
			<Testimonials />
			<ContactFormSection />
			<EmergencyResponse />
			<MobileCTABar />
		</main>
	)
}
