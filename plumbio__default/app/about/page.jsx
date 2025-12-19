import PageTitle from "../_components/Common/PageTitle"
import AboutCompany from '../_components/About/AboutCompany'
import WhyChooseUs from '../_components/About/WhyChooseUs'
import RSF from '../_components/About/RSF'
import Portfolio from '../_components/About/Portfolio'
import OurTeam from '../_components/About/OurTeam'
import OurCertificates from '../_components/About/OurCertificates'
import AreasWeCover from '../_components/About/AreasWeCover'
import EmergencyResponse from '../_components/index/EmergencyResponse'
import ContactFormSection from '../_components/Common/ContactFormSection'

export const metadata = {
	title: 'About Restoration Wranglers - Masters of Disaster Cleanup | Pinedale WY',
	description: 'Learn about Restoration Wranglers, the only restoration company serving Pinedale & Sublette County. Local family-owned business with 15+ years experience and IICRC-certified technicians.',
};

export default function About() {
  return (
    <>
		<PageTitle dataTitle="About Us" />
		<main id="tt-pageContent" className="overflow-hidden">
			<AboutCompany />
			<WhyChooseUs />
			<RSF />
			<Portfolio />
			<OurTeam />
			<OurCertificates />
			<AreasWeCover />
			<ContactFormSection />
			<EmergencyResponse />
		</main>
    </>
  )
}
